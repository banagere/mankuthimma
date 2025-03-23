"use client";

import { useEffect, useState } from "react";

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchViews = async () => {
      const response = await fetch(`/api/views/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setViews(data.views);
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
