import ChapterContent from "./chapter-content";

export { generateMetadata } from "./metadata";

export default async function KaggaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ChapterContent slug={slug} />;
}
