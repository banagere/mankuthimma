"use client";

import { useEffect, useState } from "react";

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`, { method: "POST" });
        if (response.ok) {
          const data = await response.json();
          setViews(data.views);
        }
      } catch {
        // Silently fail — view count is non-critical
      }
    };

    fetchViews();
  }, [slug]);

  return views !== undefined ? (
    <>
      {" • "}
      {Intl.NumberFormat("en-us").format(views)} views
    </>
  ) : null;
}
