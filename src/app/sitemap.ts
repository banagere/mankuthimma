import { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";
import site from "@/components/site";

export default function sitemap(): MetadataRoute.Sitemap {
  let note = allPosts.map((post) => ({
    url: `${site.website}/kagga/${post.slug}`,
  }));

  let routes = [""].map((route) => ({
    url: `${site.website}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...note];
}
