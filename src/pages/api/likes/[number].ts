import type { APIRoute } from "astro";
import { kv } from "@vercel/kv";
import { verseToChapter } from "@/api/chapters";
import { LEADERBOARD_KEY } from "@/lib/kv-keys";
import {
  clientAddress,
  isAllowedOrigin,
  json,
  withinRateLimit,
} from "@/lib/request-guard";

export const prerender = false;

const RATE_LIMIT_MAX = 50;
const UNIDENTIFIED_RATE_LIMIT_MAX = 5;
const RATE_LIMIT_TTL = 3600; // 1 hour in seconds

// How long a recorded like is remembered for the purpose of refusing a second
// one. Long enough that spamming a verse is not worth the wait, short enough
// that the keyspace does not grow without bound.
const DEDUPE_TTL = 60 * 60 * 24 * 90; // 90 days

/**
 * Resolve a path segment to a known verse number, or null if it isn't one.
 *
 * Returning the parsed number rather than the raw segment is the important
 * part: every caller writes `String(verse)`, so "0012" and "12" can never
 * become two separate members of the leaderboard.
 */
function parseVerseNumber(raw: string | undefined): number | null {
  if (!raw || !/^\d{1,4}$/.test(raw)) return null;
  const verse = Number(raw);
  return verseToChapter.has(verse) ? verse : null;
}

export const GET: APIRoute = async ({ params }) => {
  const verse = parseVerseNumber(params.number);

  if (verse === null) {
    return json({ error: "Unknown verse" }, 404);
  }

  try {
    const likes = (await kv.zscore(LEADERBOARD_KEY, String(verse))) ?? 0;
    return json({ likes });
  } catch {
    return json({ likes: 0 });
  }
};

export const POST: APIRoute = async ({ params, request }) => {
  const verse = parseVerseNumber(params.number);

  if (verse === null) {
    return json({ error: "Unknown verse" }, 404);
  }

  if (!isAllowedOrigin(request)) {
    return json({ error: "Forbidden origin" }, 403);
  }

  const { id, identified } = clientAddress(request);

  try {
    const allowed = await withinRateLimit(
      `likes:ratelimit:${id}`,
      identified ? RATE_LIMIT_MAX : UNIDENTIFIED_RATE_LIMIT_MAX,
      RATE_LIMIT_TTL,
    );

    if (!allowed) {
      return json({ error: "Rate limit exceeded" }, 429);
    }

    // One like per address per verse. The rate limit alone still allowed 50
    // likes an hour to land on a single verse; the leaderboard is ranked by
    // this score, so that was enough to move a verse to the top by hand.
    //
    // SET NX is the whole check: it succeeds exactly once per key, so the
    // test and the record are a single atomic operation rather than a
    // read-then-write that two concurrent requests could both pass.
    const first = await kv.set(`likes:seen:${verse}:${id}`, 1, {
      nx: true,
      ex: DEDUPE_TTL,
    });

    if (first === null) {
      // Already counted. Answer with the true score rather than an error —
      // the client applied an optimistic increment, and this corrects it
      // without making a duplicate look like a failure.
      const likes = (await kv.zscore(LEADERBOARD_KEY, String(verse))) ?? 0;
      return json({ likes, alreadyLiked: true });
    }

    const likes = await kv.zincrby(LEADERBOARD_KEY, 1, String(verse));
    return json({ likes });
  } catch {
    return json({ error: "Failed to update like count" }, 500);
  }
};
