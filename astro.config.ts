import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import site from "./src/lib/site";

// `output: "static"` is the default and the point: all 189 chapter pages are
// rendered at build time. The adapter is here only for the handful of routes
// that opt out with `export const prerender = false` — the homepage, which
// reads live counters from KV, and the two KV-writing API routes.
//
// Security headers live in vercel.json rather than here. Astro has no
// equivalent of Next's `headers()`, and middleware would only cover the
// on-demand routes — the static chapter pages, which are almost all of the
// site, would get nothing.
export default defineConfig({
  site: site.website,
  output: "static",
  adapter: vercel({
    // The site ships no remote or optimized images — just three files in
    // public/ — so there is nothing for the Image Optimization API to do.
    imageService: false,
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
