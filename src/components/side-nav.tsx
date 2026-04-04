"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SideNav({
  direction,
  slug,
}: {
  direction: "left" | "right";
  slug: string | null;
}) {
  const [hovered, setHovered] = useState(false);

  if (!slug) return null;

  const isLeft = direction === "left";

  return (
    <Link
      href={`/kagga/${slug}`}
      aria-label={isLeft ? "Previous chapter" : "Next chapter"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        [isLeft ? "left" : "right"]: 0,
        top: "5rem",
        bottom: 0,
        width: "calc((100vw - 36rem) / 2 - 3rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        cursor: "pointer",
      }}
      className="hidden lg:flex"
    >
      <span
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s",
          backgroundColor: "#171717",
          color: "#fff",
          borderRadius: "9999px",
          padding: "0.5rem",
          display: "flex",
        }}
      >
        {isLeft ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </span>
    </Link>
  );
}
