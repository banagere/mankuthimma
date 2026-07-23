import { notFound } from "next/navigation";
import { Suspense } from "react";
import ViewCounter from "@/components/view-counter";
import SideNav from "@/components/side-nav";
import HeartButton from "@/components/heart-button";
import kagga from "@/api/verses";
import chapter, { sortedSlugs } from "@/api/chapters";

export default function ChapterContent({ slug }: { slug: string }) {
  const chapterItem = chapter.find((chap) => chap.slug === slug);
  if (!chapterItem) notFound();

  const verseNumbers = new Set(chapterItem.verses);
  const kaggaItem = {
    title: chapterItem.title,
    slug: chapterItem.slug,
    verses: kagga.filter((k) => verseNumbers.has(k.number)),
  };

  // Both accesses are bounds-guarded; `?? null` only satisfies
  // noUncheckedIndexedAccess, it never actually fires.
  const currentIndex = sortedSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? (sortedSlugs[currentIndex - 1] ?? null) : null;
  const nextSlug =
    currentIndex < sortedSlugs.length - 1
      ? (sortedSlugs[currentIndex + 1] ?? null)
      : null;

  return (
    <div className="relative px-5 pb-32 mx-auto max-w-7xl min-h-screen">
      {/* Side navigation zones — desktop only, below header */}
      <SideNav direction="left" slug={prevSlug} />
      <SideNav direction="right" slug={nextSlug} />

      <article className="max-w-xl mx-auto text-center">
        <h1 className="text-2xl font-bold">{kaggaItem.title}</h1>
        <div className="pb-5 font-semibold tracking-wider text-red-700 justify-center flex gap-1">
          <div className="flex gap-0.5">
            <p>{kaggaItem.verses[0]?.number}</p>
            <p>—</p>
            <p>{kaggaItem.verses[kaggaItem.verses.length - 1]?.number}</p>
          </div>
          <Suspense fallback={<span className="opacity-0">Loading...</span>}>
            <ViewCounter slug={kaggaItem.slug} />
          </Suspense>
        </div>
        {kaggaItem.verses.map((verse) => (
          <div key={verse.number} id={`verse-${verse.number}`} className="mt-6 scroll-mt-4">
            <h2 className="text-2xl font-bold">{verse.number}</h2>
            <p className="py-2 leading-7">
              {verse.kannada.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p className="py-2 leading-7">{verse.kannada_explanation}</p>
            {verse.english && (
              <p className="py-2 leading-7 text-neutral-600">{verse.english}</p>
            )}
            <HeartButton verseNumber={verse.number} />
          </div>
        ))}
      </article>
    </div>
  );
}
