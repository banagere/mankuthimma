"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import kagga, { sortedSlugs } from "@/api/kagga";
import { Suspense } from "react";
import ViewCounter from "@/components/view-counter";

interface NavigationLinksProps {
  prevSlug?: string | null;
  nextSlug?: string | null;
}

// metadata missing

export default function KaggaPage() {
  const { slug } = useParams() as { slug: string };

  // Find the kagga by slug
  const kaggaItem = kagga.find((k) => k.slug === slug);
  if (!kaggaItem) return <p>Not Found</p>;

  // Determine previous and next slugs
  const currentIndex = sortedSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? sortedSlugs[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < sortedSlugs.length - 1
      ? sortedSlugs[currentIndex + 1]
      : null;

  return (
    <div className="px-5 pb-10 mx-auto max-w-7xl">
      <NavigationLinks prevSlug={prevSlug} nextSlug={nextSlug} />
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
          <div key={verse.number} className="mt-6">
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
            {/* <p className="py-2 leading-7">{verse.english_explanation}</p> */}
          </div>
        ))}
      </article>
    </div>
  );
}

function NavigationLinks({ prevSlug, nextSlug }: NavigationLinksProps) {
  return (
    <div className="flex justify-between mb-2">
      {prevSlug && (
        <Link
          href={`/kagga/${prevSlug}`}
          className="duration-500 hover:opacity-70"
        >
          &larr; Previous
        </Link>
      )}
      {nextSlug && (
        <Link
          href={`/kagga/${nextSlug}`}
          className="duration-500 hover:opacity-70"
        >
          Next &rarr;
        </Link>
      )}
    </div>
  );
}
