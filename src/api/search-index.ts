import chapters from "@/api/chapters";
import verses from "@/api/verses";

export interface SearchEntry {
  type: "chapter" | "verse";
  title: string;
  slug: string;
  verseNumber?: number;
  kannada?: string;
  english?: string;
}

const verseToSlug = new Map<number, string>();
for (const chapter of chapters) {
  for (const v of chapter.verses) {
    verseToSlug.set(v, chapter.slug);
  }
}

const chapterEntries: SearchEntry[] = chapters.map((ch) => ({
  type: "chapter",
  title: ch.title,
  slug: ch.slug,
}));

const verseEntries: SearchEntry[] = verses.map((v) => ({
  type: "verse",
  title: `Verse ${v.number}`,
  slug: verseToSlug.get(v.number) ?? "",
  verseNumber: v.number,
  kannada: v.kannada,
  english: v.english,
}));

const searchIndex: SearchEntry[] = [...chapterEntries, ...verseEntries];

export default searchIndex;
