"use client";

import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SearchEntry } from "@/api/search-index";

export default function Search() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [isMac, setIsMac] = useState(true);
  const loadingRef = useRef(false);

  useEffect(() => {
    setIsMac(navigator.userAgent.includes("Mac"));
  }, []);

  const loadIndex = useCallback(() => {
    if (index || loadingRef.current) return;
    loadingRef.current = true;
    import("@/api/search-index").then((mod) => {
      setIndex(mod.default);
    });
  }, [index]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        loadIndex();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [loadIndex]);

  const fuse = useMemo(() => {
    if (!index) return null;
    return new Fuse(index, {
      keys: [
        { name: "title", weight: 2 },
        { name: "kannada", weight: 1 },
        { name: "english", weight: 1 },
      ],
      threshold: 0.4,
      includeScore: true,
    });
  }, [index]);

  const results = useMemo(() => {
    if (!fuse || !query.trim()) return [];
    return fuse.search(query, { limit: 20 }).map((r) => r.item);
  }, [fuse, query]);

  const chapters = results.filter((r) => r.type === "chapter");
  const verses = results.filter((r) => r.type === "verse");

  const handleSelect = (entry: SearchEntry) => {
    setOpen(false);
    setQuery("");
    const hash = entry.verseNumber ? `#verse-${entry.verseNumber}` : "";
    router.push(`/kagga/${entry.slug}${hash}`);
  };

  return (
    <>
      <button
        onClick={() => {
          loadIndex();
          setOpen(true);
        }}
        className="group flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-500 transition-colors duration-500 hover:text-neutral-500 hover:border-neutral-500 cursor-pointer border border-neutral-200 rounded-lg"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.306 10.013C8.535 10.636 7.562 11 6.5 11C4.015 11 2 8.985 2 6.5C2 4.015 4.015 2 6.5 2C8.985 2 11 4.015 11 6.5C11 7.562 10.636 8.535 10.013 9.306L12.854 12.146C13.049 12.342 13.049 12.658 12.854 12.854C12.658 13.049 12.342 13.049 12.146 12.854L9.306 10.013Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        Search
        <kbd className="hidden sm:inline text-xs text-neutral-400 group-hover:text-neutral-500 border border-neutral-200 group-hover:border-neutral-500 rounded px-1 transition-colors duration-500">
          {isMac ? "⌘" : "Ctrl+"}K
        </kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Search Mankuthimmana Kagga"
        className="fixed inset-0 z-50"
      >
        <Dialog.Title className="sr-only">
          Search Mankuthimmana Kagga
        </Dialog.Title>
        <Dialog.Description className="sr-only">
          Search for chapters and verses
        </Dialog.Description>
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setOpen(false)}
        />
        <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden">
          <Command.Input
            value={query}
            onValueChange={setQuery}
            placeholder="Search chapters, verses, or keywords..."
            className="w-full px-4 py-3 text-base border-b border-neutral-200 outline-none placeholder:text-neutral-400"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-4 py-8 text-center text-sm text-neutral-500">
              {!index ? "Loading..." : "No results found."}
            </Command.Empty>

            {chapters.length > 0 && (
              <Command.Group
                heading="Chapters"
                className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
              >
                {chapters.map((entry) => (
                  <Command.Item
                    key={entry.slug}
                    value={`chapter-${entry.slug}`}
                    onSelect={() => handleSelect(entry)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-neutral-100"
                  >
                    <span className="text-red-700 font-semibold text-xs">
                      CH
                    </span>
                    <span>{entry.title}</span>
                  </Command.Item>
                ))}
              </Command.Group>
            )}

            {verses.length > 0 && (
              <Command.Group
                heading="Verses"
                className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
              >
                {verses.map((entry) => (
                  <Command.Item
                    key={entry.verseNumber}
                    value={`verse-${entry.verseNumber}`}
                    onSelect={() => handleSelect(entry)}
                    className="flex items-start gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-neutral-100"
                  >
                    <span className="text-red-700 font-semibold text-xs mt-0.5 shrink-0">
                      #{entry.verseNumber}
                    </span>
                    <span className="line-clamp-2">
                      {entry.kannada?.split("\n")[0]}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>
            )}
          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
}
