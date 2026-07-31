import { kv } from "@vercel/kv";
import chapterData, { verseToChapter } from "@/api/chapters";
import kagga from "@/api/verses";
import { LEADERBOARD_KEY, viewsKey } from "@/lib/kv-keys";

interface TopChapter {
  slug: string;
  title: string;
  views: number;
}

interface TopVerse {
  number: number;
  kannadaSnippet: string;
  likes: number;
  chapterSlug: string;
}

async function fetchTopChaptersByViews(limit: number): Promise<TopChapter[]> {
  const keys = chapterData.map((ch) => viewsKey(ch.slug));
  const values = await kv.mget<(number | null)[]>(...keys);

  const chapters = chapterData
    .map((ch, i) => ({
      slug: ch.slug,
      title: ch.title,
      views: values[i] ?? 0,
    }))
    .filter((ch) => ch.views > 0)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);

  return chapters;
}

async function fetchTopVersesByLikes(limit: number): Promise<TopVerse[]> {
  // Read only the top `limit` members straight off the sorted set. Redis keeps
  // it ordered, so this stays O(log n) no matter how many verses are liked.
  const ranked = await kv.zrange<(string | number)[]>(
    LEADERBOARD_KEY,
    0,
    limit - 1,
    { rev: true, withScores: true },
  );

  // zrange with withScores returns a flat [member, score, member, score, ...].
  const verses: TopVerse[] = [];
  for (let i = 0; i < ranked.length; i += 2) {
    const number = Number(ranked[i]);
    const likes = Number(ranked[i + 1]);
    const chapterSlug = verseToChapter.get(number);

    // Drop anything that isn't a real verse rather than rendering a dead link.
    if (!chapterSlug || !Number.isFinite(likes) || likes <= 0) continue;

    const verse = kagga.find((v) => v.number === number);
    verses.push({
      number,
      kannadaSnippet: verse?.kannada.split("\n")[0] ?? "",
      likes,
      chapterSlug,
    });
  }

  return verses;
}

const TTL_MS = 60_000;

/**
 * Memoise a KV read for `TTL_MS`, keyed by the argument.
 *
 * Replaces Next's `unstable_cache`, which has no Astro equivalent. The scope
 * is narrower — one serverless instance rather than a shared cache — but the
 * job is the same and the job is modest: keep a burst of homepage requests
 * from turning into a burst of Redis round trips. A stale entry costs a
 * leaderboard that is up to a minute behind, which is what the original
 * `revalidate: 60` already accepted.
 *
 * In-flight promises are cached, not just settled values, so concurrent
 * requests during a cold read share one round trip. A rejection is evicted so
 * a transient KV failure is not remembered for a minute.
 */
function memoize<T>(
  fn: (arg: number) => Promise<T>,
): (arg: number) => Promise<T> {
  const cache = new Map<number, { at: number; value: Promise<T> }>();

  return (arg: number) => {
    const hit = cache.get(arg);
    if (hit && Date.now() - hit.at < TTL_MS) return hit.value;

    const value = fn(arg);
    cache.set(arg, { at: Date.now(), value });
    value.catch(() => cache.delete(arg));
    return value;
  };
}

export const getTopChaptersByViews = memoize(fetchTopChaptersByViews);
export const getTopVersesByLikes = memoize(fetchTopVersesByLikes);
