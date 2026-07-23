import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { verseToChapter } from "@/api/chapters";
import { LEADERBOARD_KEY } from "@/lib/kv-keys";

const RATE_LIMIT_MAX = 50;
const RATE_LIMIT_TTL = 3600; // 1 hour in seconds

/**
 * Resolve a path segment to a known verse number, or null if it isn't one.
 *
 * Returning the parsed number rather than the raw segment is the important
 * part: every caller writes `String(verse)`, so "0012" and "12" can never
 * become two separate members of the leaderboard.
 */
function parseVerseNumber(raw: string): number | null {
  if (!/^\d{1,4}$/.test(raw)) return null;
  const verse = Number(raw);
  return verseToChapter.has(verse) ? verse : null;
}

function clientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ number: string }> },
) {
  const { number } = await params;
  const verse = parseVerseNumber(number);

  if (verse === null) {
    return NextResponse.json({ error: "Unknown verse" }, { status: 404 });
  }

  try {
    const likes = (await kv.zscore(LEADERBOARD_KEY, String(verse))) ?? 0;
    return NextResponse.json({ likes });
  } catch {
    return NextResponse.json({ likes: 0 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ number: string }> },
) {
  const { number } = await params;
  const verse = parseVerseNumber(number);

  if (verse === null) {
    return NextResponse.json({ error: "Unknown verse" }, { status: 404 });
  }

  try {
    // Check rate limit
    const rateLimitKey = `likes:ratelimit:${clientIp(request)}`;
    const currentCount = await kv.incr(rateLimitKey);

    // Set TTL on first increment
    if (currentCount === 1) {
      await kv.expire(rateLimitKey, RATE_LIMIT_TTL);
    }

    if (currentCount > RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 },
      );
    }

    const likes = await kv.zincrby(LEADERBOARD_KEY, 1, String(verse));
    return NextResponse.json({ likes });
  } catch {
    return NextResponse.json(
      { error: "Failed to update like count" },
      { status: 500 },
    );
  }
}
