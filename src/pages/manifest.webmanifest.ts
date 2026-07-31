import type { APIRoute } from "astro";
import site from "@/lib/site";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: site.name,
      short_name: site.domain,
      description: site.description,
      start_url: "/",
      display: "browser",
      lang: "en-IN",
      background_color: "#FFFFFF",
      theme_color: "#FFFFFF",
      icons: [
        {
          src: "/favicon.ico",
          sizes: "any",
          type: "image/x-icon",
        },
      ],
    }),
    { headers: { "content-type": "application/manifest+json" } },
  );
