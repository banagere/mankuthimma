import Link from "next/link";
import { Heart, Eye } from "lucide-react";
import chapter from "@/api/chapters";
import {
  getTopChaptersByViews,
  getTopVersesByLikes,
} from "@/lib/kv-stats";

export default async function Home() {
  let topChapters: Awaited<ReturnType<typeof getTopChaptersByViews>> = [];
  let topVerses: Awaited<ReturnType<typeof getTopVersesByLikes>> = [];

  try {
    [topChapters, topVerses] = await Promise.all([
      getTopChaptersByViews(5),
      getTopVersesByLikes(5),
    ]);
  } catch {
    // KV unavailable — homepage still renders without stats
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        {(topChapters.length > 0 || topVerses.length > 0) && (
          <div className="px-5 pt-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {topChapters.length > 0 && (
                <section>
                  <h2 className="text-lg font-bold mb-4">Most Read</h2>
                  <ol className="space-y-2">
                    {topChapters.map((ch, i) => (
                      <li key={ch.slug} className="flex items-baseline justify-between gap-2">
                        <Link
                          href={`/kagga/${ch.slug}`}
                          className="font-medium truncate hover:text-red-700"
                        >
                          <span className="text-neutral-400 mr-2">{i + 1}.</span>
                          {ch.title}
                        </Link>
                        <span className="flex items-center gap-1 text-sm text-neutral-400 shrink-0">
                          <Eye size={14} />
                          {Intl.NumberFormat("en-us").format(ch.views)}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {topVerses.length > 0 && (
                <section>
                  <h2 className="text-lg font-bold mb-4">Most Loved</h2>
                  <ol className="space-y-2">
                    {topVerses.map((v, i) => (
                      <li key={v.number}>
                        <Link
                          href={`/kagga/${v.chapterSlug}#verse-${v.number}`}
                          className="flex items-baseline justify-between gap-2 hover:text-red-700"
                        >
                          <span className="font-medium truncate">
                            <span className="text-neutral-400 mr-2">{i + 1}.</span>
                            <span className="text-sm">#{v.number}</span>{" "}
                            {v.kannadaSnippet}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-red-700 shrink-0">
                            <Heart size={14} className="fill-red-700" />
                            {v.likes}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>
        )}

        <div className="px-5 pb-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
            {chapter.map((chap) => (
              <li className="flex items-baseline justify-between" key={chap.slug}>
                <Link
                  href={`/kagga/${chap.slug}`}
                  className="text-lg font-medium truncate hover:text-red-700"
                >
                  {chap.title}
                </Link>

                <div className="flex gap-0.5 font-medium text-red-700">
                  <p>{chap.verses[0]}</p>
                  <p>—</p>
                  <p>{chap.verses[chap.verses.length - 1]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-white bg-red-700">
        <div className="flex flex-col items-center min-h-screen justify-center max-w-5xl p-5 mx-auto text-center">
          {[
            "Mankuthimmana Kagga is written by Devanahalli Venkataramanaiah Gundappa (DVG) and was first published in 1943. It stands as a prominent piece of Kannada literature. This collection comprises 945 poems, each spanning four lines, with several written in old Kannada (ಹಳೆಗನ್ನಡ).",
            "This book explores deeper questions of life, reflects on the essence of Ultimate Truth (reality), and suggests leading a balanced life amidst the complexities and constant changes of our world. It encourages adopting a moderate approach, with one hand reaching for the Ultimate Truth and the other engaged with the tangible world.",
            "Mankuthimmana Kagga fascinated me the first time I read it at school. I wished to revisit it and share some snippets, but I couldn't find it online. This led me to create this website. This treasure shouldn't be hidden and must be accessible to all. I hope these Kagga's change your outlook towards life, as it did to mine!",
            "The content for this site was sourced from books and websites, with full credit to the original authors and publishers. I earn no money from this and did it out of gratitude for DVG's craft.",
            "If you love what you read, consider purchasing the book to support the people who helped bring DVG's work to life.",
            <>
              This website&apos;s code is publicly accessible. If you&apos;d
              like to check it, visit{" "}
              <Link
                href="https://github.com/banagere/mankuthimma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github (opens in a new tab)"
                className="underline transition-opacity hover:opacity-70 underline-offset-4"
              >
                Github
              </Link>
              .
            </>,
          ].map((text, index) => (
            <p key={index} className="py-4 text-2xl font-medium">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
