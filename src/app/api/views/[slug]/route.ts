import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import chapterData from "@/api/chapters";
import { viewsKey } from "@/lib/kv-keys";
import {
  clientAddress,
  isAllowedOrigin,
  withinRateLimit,
} from "@/lib/request-guard";

const RATE_LIMIT_MAX = 200;
const UNIDENTIFIED_RATE_LIMIT_MAX = 20;
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

  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Forbidden origin" }, { status: 403 });
  }

  const { id, identified } = clientAddress(request);

  try {
    const allowed = await withinRateLimit(
      `views:ratelimit:${id}`,
      identified ? RATE_LIMIT_MAX : UNIDENTIFIED_RATE_LIMIT_MAX,
      RATE_LIMIT_TTL,
    );

    if (!allowed) {
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
