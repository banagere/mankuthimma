# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

mankuthimma.in is a Next.js website that presents Mankuthimmana Kagga — a collection of 945 Kannada poems by DV Gundappa. The site is deployed on Vercel.

## Commands

- `bun dev` — start dev server (uses Turbopack)
- `bun run build` — production build
- `bun run lint` — ESLint (next/core-web-vitals config)
- `bun start` — start production server

Package manager is **Bun** (lockfile: `bun.lockb`).

## Architecture

**Hybrid routing**: The app uses Next.js App Router (`src/app/`) for pages and the legacy Pages Router (`pages/`) for the API route.

**Data layer**: Verse and chapter data live as static TypeScript arrays, not in a database:
- `src/api/verses.ts` — all 945 verses (~6MB). Each verse has `number`, `kannada` (the poem text), and `kannada_explanation`. Fields prefixed with `delete` are legacy/unused.
- `src/api/chapters.ts` — 189 chapters, each mapping a `title`/`slug` to an array of verse numbers. Exports `sortedSlugs` for chapter navigation order.
- `src/api/kagga-old.ts` — legacy data format (chapters with inline verses). Not actively used.
- `src/data/*.mdx` — MDX files with verse content (appear unused in current routing; may be from an earlier iteration).

**Pages**:
- `/` (`src/app/page.tsx`) — lists all chapters with verse ranges
- `/kagga/[slug]` (`src/app/kagga/[slug]/page.tsx`) — renders a chapter's verses. This is a **client component** (`"use client"`). Navigation between chapters uses `sortedSlugs`.
- `src/app/kagga/[slug]/metadata.ts` — `generateMetadata` for chapter pages (exists but not wired into the page component)

**View counter**: `pages/api/views/[slug].ts` uses Vercel KV (Redis) to track and increment page views. The client component `src/components/view-counter.tsx` fetches from this API.

**Site config**: `src/components/site.tsx` exports site name, URL, and description constants used by `sitemap.ts`, `robots.ts`, and `manifest.ts`.

**Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`. Global styles in `src/app/global.css`. Accent color is red-700.

## Path alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Notes

- `next.config.ts` has `typescript.ignoreBuildErrors: true`
- The `verses.ts` file is very large; avoid reading the entire file
- This is a public repo — do not include any environment variable values, KV connection strings, or other secrets in code or commits
