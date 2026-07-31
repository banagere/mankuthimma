import type { APIRoute } from "astro";
import chapters from "@/api/chapters";
import site from "@/lib/site";

export const GET: APIRoute = () => {
  // Build date, not request date: the pages are prerendered, so this is the
  // last moment their content could actually have changed.
  const lastModified = new Date().toISOString().split("T")[0];

  const urls = [
    site.website,
    ...chapters.map((chap) => `${site.website}/kagga/${chap.slug}`),
  ];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (url) =>
        `  <url><loc>${url}</loc><lastmod>${lastModified}</lastmod></url>`,
    ),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
};
