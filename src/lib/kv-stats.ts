import { kv } from "@vercel/kv";
import { unstable_cache } from "next/cache";
import chapterData, { verseToChapter } from "@/api/chapters";
import kagga from "@/api/verses";

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
  const keys = chapterData.map((ch) => `views-${ch.slug}`);
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
  // Collect all likes keys via scan
  const likeKeys: string[] = [];
  let cursor = "0";
  do {
    const [nextCursor, keys] = await kv.scan(cursor, {
      match: "likes:verse:*",
      count: 100,
    });
    cursor = String(nextCursor);
    likeKeys.push(...keys);
  } while (cursor !== "0");

  if (likeKeys.length === 0) return [];

  const values = await kv.mget<(number | null)[]>(...likeKeys);

  const verses = likeKeys
    .map((key, i) => {
      const verseNumber = parseInt(key.replace("likes:verse:", ""), 10);
      const verse = kagga.find((v) => v.number === verseNumber);
      return {
        number: verseNumber,
        kannadaSnippet: verse?.kannada.split("\n")[0] ?? "",
        likes: values[i] ?? 0,
        chapterSlug: verseToChapter.get(verseNumber) ?? "",
      };
    })
    .filter((v) => v.likes > 0)
    .sort((a, b) => b.likes - a.likes)
    .slice(0, limit);

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
