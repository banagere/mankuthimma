"use client";

import { useEffect, useState } from "react";
import * as Toggle from "@radix-ui/react-toggle";
import { Heart } from "lucide-react";

export default function HeartButton({ verseNumber }: { verseNumber: number }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Check localStorage for previous like
    const likedVerses: number[] = JSON.parse(
      localStorage.getItem("liked-verses") ?? "[]",
    );
    if (likedVerses.includes(verseNumber)) {
      setLiked(true);
    }

    // Fetch current count
    fetch(`/api/likes/${verseNumber}`)
      .then((res) => res.json())
      .then((data) => setCount(data.likes))
      .catch(() => {});
  }, [verseNumber]);

  async function handleToggle(pressed: boolean) {
    if (liked) return; // Already liked, don't toggle off

    // Optimistic update
    setLiked(true);
    setCount((prev) => (prev ?? 0) + 1);

    try {
      const res = await fetch(`/api/likes/${verseNumber}`, { method: "POST" });
      if (!res.ok) {
        // Revert on failure
        setLiked(false);
        setCount((prev) => (prev ?? 1) - 1);
        return;
      }
      const data = await res.json();
      setCount(data.likes);

      // Persist to localStorage
      const likedVerses: number[] = JSON.parse(
        localStorage.getItem("liked-verses") ?? "[]",
      );
      likedVerses.push(verseNumber);
      localStorage.setItem("liked-verses", JSON.stringify(likedVerses));
    } catch {
      setLiked(false);
      setCount((prev) => (prev ?? 1) - 1);
    }
  }

  return (
    <Toggle.Root
      pressed={liked}
      onPressedChange={handleToggle}
      aria-label={liked ? "Unlike verse" : "Like verse"}
      className="inline-flex items-center gap-1.5 mt-3 cursor-pointer transition-colors duration-500"
    >
      <Heart
        size={18}
        className={
          liked
            ? "fill-red-700 text-red-700"
            : "text-neutral-400 hover:text-red-700 transition-colors duration-500"
        }
      />
      {count !== null && count > 0 && (
        <span
          className={`text-sm ${liked ? "text-red-700" : "text-neutral-400"}`}
        >
          {count}
        </span>
      )}
    </Toggle.Root>
  );
}
