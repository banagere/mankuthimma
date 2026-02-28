import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Slug is required" });
  }

  const key = `views-${slug}`;

  try {
    const views = await kv.incr(key);
    res.status(200).json({ views });
  } catch {
    res.status(500).json({ error: "Failed to update view count" });
  }
}
