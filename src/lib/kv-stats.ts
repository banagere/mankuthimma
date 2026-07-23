import { kv } from "@vercel/kv";
import { unstable_cache } from "next/cache";
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

export const getTopChaptersByViews = unstable_cache(
  fetchTopChaptersByViews,
  ["top-chapters-by-views"],
  { revalidate: 60 },
);

export const getTopVersesByLikes = unstable_cache(
  fetchTopVersesByLikes,
  ["top-verses-by-likes"],
  { revalidate: 60 },
);
