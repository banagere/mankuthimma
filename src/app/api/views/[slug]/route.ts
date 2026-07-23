import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import chapterData from "@/api/chapters";
import { viewsKey } from "@/lib/kv-keys";

const RATE_LIMIT_MAX = 200;
const RATE_LIMIT_TTL = 3600; // 1 hour in seconds

// Whitelist of writable keys — bounds the keyspace to the 189 real chapters.
const validSlugs = new Set(chapterData.map((chap) => chap.slug));

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (!validSlugs.has(slug)) {
    return NextResponse.json({ error: "Unknown chapter" }, { status: 404 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  try {
    // Check rate limit
    const rateLimitKey = `views:ratelimit:${ip}`;
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

    const views = await kv.incr(viewsKey(slug));
    return NextResponse.json({ views });
  } catch {
    return NextResponse.json(
      { error: "Failed to update view count" },
      { status: 500 },
    );
  }
}
