import { useEffect, useState } from "react";
import * as Toggle from "@radix-ui/react-toggle";
import { Heart } from "lucide-react";

export default function HeartButton({ verseNumber }: { verseNumber: number }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Guards against a response for a previous verseNumber landing after the
    // prop changed and overwriting the current verse's state.
    let cancelled = false;

    // Read synchronously, apply with the fetch result. localStorage is only
    // available post-hydration, and committing both together avoids a
    // synchronous setState in the effect body (cascading render).
    const likedVerses: number[] = JSON.parse(
      localStorage.getItem("liked-verses") ?? "[]",
    );
    const alreadyLiked = likedVerses.includes(verseNumber);

    fetch(`/api/likes/${verseNumber}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (alreadyLiked) setLiked(true);
        setCount(data.likes);
      })
      .catch(() => {
        // The count is unavailable, but a stored like is still worth showing.
        if (!cancelled && alreadyLiked) setLiked(true);
      });

    return () => {
      cancelled = true;
    };
  }, [verseNumber]);

  async function handleToggle() {
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
