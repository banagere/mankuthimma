import { MetadataRoute } from "next";
import site from "@/components/site";

export default function sitemap(): MetadataRoute.Sitemap {
  let routes = [""].map((route) => ({
    url: `${site.website}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
