import { Metadata } from "next";
import chapter from "@/api/chapters";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const chapterItem = chapter.find((chap) => chap.slug === params.slug);

  if (!chapterItem) {
    return {
      title: "Not Found",
      description: "The page could not be found",
    };
  }

  const meta = {
    title: chapterItem.title,
    description: `Explore the verses of "${chapterItem.title}" from Mankuthimmana Kagga.`,
    url: "https://mankuthimma.com",
  };

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      url: `${meta.url}/kagga/${chapterItem.slug}`,
      images: [{ url: `${meta.url}/opengraph-image.jpg` }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
    },
  };
}
