import Link from "next/link";
import chapter from "@/api/chapters";

const paragraph = "font-medium py-4 text-2xl";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <div className="min-h-screen mx-auto max-w-7xl snap-center snap-always">
        <div className="px-5 pb-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
            {chapter.map((chap) => (
              <li className="flex items-baseline justify-between" key={chap.id}>
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

      <div className="min-h-screen text-white bg-red-700 snap-center snap-always">
        <div className="flex flex-col items-center justify-center max-w-5xl p-5 mx-auto text-center">
          {[
            "Mankuthimmana Kagga is written by Devanahalli Venkataramanaiah Gundappa (DVG) and was first published in 1943. It stands as a prominent piece of Kannada literature. This collection comprises 945 poems, each spanning four lines, with several written in old Kannada (ಹಳೆಗನ್ನಡ).",
            "This book explores deeper questions of life, reflects on the essence of Ultimate Truth (reality), and suggests leading a balanced life amidst the complexities and constant changes of our world. It encourages adopting a moderate approach, with one hand reaching for the Ultimate Truth and the other engaged with the tangible world.",
            "Mankuthimmana Kagga fascinated me the first time I read it at school. I wished to revisit it and share some snippets, but I couldn't find it online. This led me to create this website. This treasure shouldn't be hidden and must be accessible to all. I hope these Kagga's change your outlook towards life, as it did to mine!",
            "The content for this site was sourced from books and websites, with full credit to the original authors and publishers. I earn no money from this and did it out of gratitude for DVG's craft.",
            "If you love what you read, consider purchasing the book to support the people who helped bring DVG’s work to life.",
            <>
              This website&apos;s code is publicly accessible. If you&apos;d
              like to check it, visit{" "}
              <Link
                href="https://github.com/banagere/mankuthimma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github (opens in a new tab)"
                className="underline duration-500 hover:opacity-70 underline-offset-4"
              >
                Github
              </Link>
              .
            </>,
          ].map((text, index) => (
            <p key={index} className={paragraph}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
