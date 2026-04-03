import { MetadataRoute } from "next";
import site from "@/components/site";
import chapter from "@/api/chapters";

export default function sitemap(): MetadataRoute.Sitemap {
  const chapterRoutes = chapter.map((chap) => ({
    url: `${site.website}/kagga/${chap.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [
    {
      url: site.website,
      lastModified: new Date().toISOString().split("T")[0],
    },
    ...chapterRoutes,
  ];
}
