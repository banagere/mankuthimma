import type { APIRoute } from "astro";
import { kv } from "@vercel/kv";
import chapterData from "@/api/chapters";
import { viewsKey } from "@/lib/kv-keys";
import {
  clientAddress,
  isAllowedOrigin,
  json,
  withinRateLimit,
} from "@/lib/request-guard";

export const prerender = false;

const RATE_LIMIT_MAX = 200;
const UNIDENTIFIED_RATE_LIMIT_MAX = 20;
const RATE_LIMIT_TTL = 3600; // 1 hour in seconds

// Whitelist of writable keys — bounds the keyspace to the 189 real chapters.
const validSlugs = new Set(chapterData.map((chap) => chap.slug));

export const POST: APIRoute = async ({ params, request }) => {
  const { slug } = params;

  if (!slug || !validSlugs.has(slug)) {
    return json({ error: "Unknown chapter" }, 404);
  }

  if (!isAllowedOrigin(request)) {
    return json({ error: "Forbidden origin" }, 403);
  }

  const { id, identified } = clientAddress(request);

  try {
    const allowed = await withinRateLimit(
      `views:ratelimit:${id}`,
      identified ? RATE_LIMIT_MAX : UNIDENTIFIED_RATE_LIMIT_MAX,
      RATE_LIMIT_TTL,
    );

    if (!allowed) {
      return json({ error: "Rate limit exceeded" }, 429);
    }

    const views = await kv.incr(viewsKey(slug));
    return json({ views });
  } catch {
    return json({ error: "Failed to update view count" }, 500);
  }
};
