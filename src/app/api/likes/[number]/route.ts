import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const RATE_LIMIT_MAX = 50;
const RATE_LIMIT_TTL = 3600; // 1 hour in seconds

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ number: string }> },
) {
  const { number } = await params;

  try {
    const likes = (await kv.get<number>(`likes:verse:${number}`)) ?? 0;
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

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  try {
    // Check rate limit
    const rateLimitKey = `likes:ratelimit:${ip}`;
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

    const likes = await kv.incr(`likes:verse:${number}`);
    return NextResponse.json({ likes });
  } catch {
    return NextResponse.json(
      { error: "Failed to update like count" },
      { status: 500 },
    );
  }
}
