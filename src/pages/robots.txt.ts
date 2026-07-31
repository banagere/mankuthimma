import type { APIRoute } from "astro";
import site from "@/lib/site";

export const GET: APIRoute = () =>
  new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Host: ${site.website}`,
      `Sitemap: ${site.website}/sitemap.xml`,
      "",
    ].join("\n"),
    { headers: { "content-type": "text/plain; charset=utf-8" } },
  );
