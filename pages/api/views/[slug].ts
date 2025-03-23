// import { kv } from "@vercel/kv";

// export default async function handler(req, res) {
//   const { slug } = req.query;

//   if (!slug) {
//     return res.status(400).json({ error: "Slug is required" });
//   }

//   const key = `views-${slug}`;
//   const views = await kv.incr(key);

//   res.status(200).json({ views });
// }

import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Slug is required" });
  }

  const key = `views-${slug}`;
  const views = await kv.incr(key);

  res.status(200).json({ views });
}
