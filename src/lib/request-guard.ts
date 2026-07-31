/**
 * Shared guards for the two KV-writing API routes.
 *
 * Both routes are unauthenticated by design — nobody signs in to read poems —
 * so what is left is bounding *who* can write and *how often*. Kept free of
 * verse-corpus imports so the routes stay small.
 */

import { kv } from "@vercel/kv";
import site from "@/lib/site";

/** Bucket for callers whose address could not be determined. */
const UNIDENTIFIED = "unidentified";

/**
 * Origins allowed to drive a write.
 *
 * Computed per call rather than at module load: the Vercel env vars differ
 * between the production and preview deployments of the same build, and a
 * value captured at import time would be the wrong one on preview.
 *
 * Read from `process.env`, not `import.meta.env`. Astro inlines the latter at
 * build time, which would bake the *building* deployment's URL into every
 * later request rather than reading the running one's.
 */
function allowedOrigins(): string[] {
  // Annotated: `site` is `as const`, so an inferred array would be typed to the
  // single production literal and reject the deployment URLs below.
  const origins: string[] = [site.website];

  // The project's stable production domain, and the immutable per-deployment
  // URL. Preview deployments serve the same client code, which fetches these
  // routes relative — without these a preview's like button is simply broken.
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) origins.push(`https://${production}`);

  const deployment = process.env.VERCEL_URL;
  if (deployment) origins.push(`https://${deployment}`);

  return origins;
}

/**
 * True if this request came from a page on this site.
 *
 * Browsers attach `Origin` to every cross-origin request and to every POST,
 * including same-origin ones, so a missing header on a write is not a browser
 * doing something ordinary — it is a direct client. Rejecting that costs
 * nothing here and is what stops an arbitrary page elsewhere on the web from
 * pointing a script at these counters.
 *
 * This is not authentication. `Origin` is trivially forged outside a browser.
 * It removes the drive-by case, and the rate limit handles the rest.
 */
export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  if (import.meta.env.DEV) {
    try {
      const { hostname } = new URL(origin);
      if (hostname === "localhost" || hostname === "127.0.0.1") return true;
    } catch {
      return false;
    }
  }

  return allowedOrigins().includes(origin);
}

/**
 * The caller's address, and whether it is actually known.
 *
 * `x-vercel-forwarded-for` is set by the platform and cannot be spoofed by the
 * client; `x-forwarded-for` can be, but its *first* entry is the one Vercel
 * prepends. Both are checked because the first is absent outside Vercel.
 *
 * The `identified` flag matters: previously every unidentifiable caller shared
 * a single "unknown" bucket carrying the full per-IP budget, which is the
 * loosest possible reading of a missing header. Callers use it to apply a much
 * smaller budget instead.
 */
export function clientAddress(request: Request): {
  id: string;
  identified: boolean;
} {
  const forwarded =
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for");

  const ip =
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim();

  return ip ? { id: ip, identified: true } : { id: UNIDENTIFIED, identified: false };
}

/**
 * Fixed-window counter. Returns true when the caller is still under budget.
 *
 * INCR then EXPIRE is not atomic, so a crash between the two would leave a key
 * with no TTL and permanently block that address. Setting the TTL on every
 * increment instead of only the first makes the window sliding-ish rather than
 * strictly fixed, which is the cheaper mistake of the two.
 */
export async function withinRateLimit(
  key: string,
  max: number,
  ttlSeconds: number,
): Promise<boolean> {
  const count = await kv.incr(key);
  await kv.expire(key, ttlSeconds);
  return count <= max;
}

/** JSON response helper — Astro API routes return a bare `Response`. */
export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
