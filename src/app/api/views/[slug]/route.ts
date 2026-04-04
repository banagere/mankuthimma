import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  try {
    const views = await kv.incr(`views-${slug}`);
    return NextResponse.json({ views });
  } catch {
    return NextResponse.json(
      { error: "Failed to update view count" },
      { status: 500 },
    );
  }
}
