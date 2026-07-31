# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

mankuthimma.in is an Astro website that presents Mankuthimmana Kagga — a collection of 945 Kannada poems by DV Gundappa. The site is deployed on Vercel.

## Commands

- `bun dev` — start dev server
- `bun run build` — production build
- `bun run lint` — ESLint (flat config: typescript-eslint + astro + react + jsx-a11y)
- `bun run typecheck` — `astro check`
- `bun run astro` — the Astro CLI (`astro dev stop`, `astro dev logs`, `astro add`, …)

Gate and supply chain:

- `bun run ci` — full local gate: frozen install, lint, typecheck, audit, secret scan, build. Same checks CI runs.
- `bun run audit` — fails only on high/critical advisories absent from `.audit-baseline.json`
- `bun run audit:baseline` — accept the current advisories as reviewed, with a written justification per entry
- `bun run hooks:install` — point `core.hooksPath` at `.githooks`

Package manager is **Bun** (lockfile: `bun.lock` — text, so dependency diffs are reviewable). The version lives in `.bun-version` and is read from there by CI — do not hardcode it in a workflow.

`bunfig.toml` sets `install.peer = false`. `@vercel/analytics` and `@vercel/speed-insights` declare `next` as an *optional peer*, and Bun installs optional peers by default — which dragged all of Next.js, its pinned `postcss@8.4.31` and an old `sharp` back into the tree. `bun audit` reads the lockfile, so those surfaced as our advisories. Every peer this project actually needs is a direct dependency. **Do not remove that setting** without re-checking `bun run audit`.

**Git hooks are opt-in per clone.** Without `bun run hooks:install`, the
pre-commit secret scan and the pre-push gate do not run. GitHub enforces the
same checks either way, but a secret is far cheaper to catch before it is
committed than after it reaches a public repo.

CI on GitHub runs four workflows:

- `ci.yml` — `verify` (lint, typecheck, build), `audit` (advisory drift), `secrets` (gitleaks over full history), `signatures` (every commit signed)
- `codeql.yml` — static analysis, `security-and-quality` query pack
- `scorecard.yml` — OpenSSF supply-chain posture, weekly and on `branch_protection_rule`

`main` is protected: signed commits, linear history, code-owner review, conversation resolution, and the required checks above. Admins are **not** exempt — every change to `main` goes through a pull request, including yours.

## Architecture

**Rendering**: `output: "static"` — everything is prerendered at build time
*except* the three routes that opt out with `export const prerender = false`:
the homepage (reads live counters from KV) and the two API routes. Those run in
the single Vercel function the adapter emits; the other 189 pages are plain
files. When adding a page, the default is static — opt out only if it genuinely
needs per-request data.

**Routing**: file-based under `src/pages/`.

- `index.astro` — lists all chapters with verse ranges, plus the Most Read / Most Loved leaderboards. On demand.
- `kagga/[slug].astro` — a chapter's verses. `getStaticPaths` builds all 189 at compile time. Navigation between chapters uses `sortedSlugs`.
- `404.astro`, `robots.txt.ts`, `sitemap.xml.ts`, `manifest.webmanifest.ts` — static.
- `api/views/[slug].ts`, `api/likes/[number].ts` — on demand.

**Data layer**: Verse and chapter data live as static TypeScript arrays, not in a database:

- `src/api/verses.ts` — all 945 verses (~1.5MB). Each verse has `number`, `kannada` (the poem text), `kannada_explanation`, and an optional `english`.
- `src/api/chapters.ts` — 189 chapters, each mapping a `title`/`slug` to an array of verse numbers. Exports `sortedSlugs` (chapter navigation order) and `verseToChapter` (reverse lookup).
- `src/api/search-index.ts` — flattens both into the shape the search island searches. Imported dynamically so the corpus is not in the initial bundle.
- `src/data/*.mdx` — ~75 MDX files from an earlier iteration. Unreferenced by any route; kept only so the transcriptions are not lost.

**Islands**: the page shell is static HTML. Only three components ship JS, all React (`@astrojs/react`):

- `Search.tsx` (`client:idle`) — ⌘K palette, cmdk + Fuse. Lazy-imports the search index on first open.
- `ViewCounter.tsx` (`client:load`) — POSTs the chapter view.
- `HeartButton.tsx` (`client:visible`) — per-verse like.

`SideNav.astro` is deliberately *not* an island: it was React state driving a hover opacity, which is a CSS `group-hover`.

**Counters**: the two API routes write to Vercel KV (Redis) — `src/pages/api/views/[slug].ts` (chapter views) and `src/pages/api/likes/[number].ts` (verse likes). `src/lib/kv-keys.ts` holds the key names, `src/lib/kv-stats.ts` the leaderboard reads.

Both routes are unauthenticated, so the guards in `src/lib/request-guard.ts` are what bounds them, and every write path must keep using all three: the slug/number is validated against the known chapters and verses before any KV call, `isAllowedOrigin` rejects requests that did not come from this site, and `withinRateLimit` applies a per-address budget — a much smaller one when the address could not be determined. Likes additionally dedupe per address per verse via `SET NX`, because the leaderboard ranks on that score.

`isAllowedOrigin` reads the Vercel env vars from `process.env`, not
`import.meta.env` — Astro inlines the latter at build time, which would bake
the building deployment's URL into every later request.

`src/lib/kv-stats.ts` memoises its two KV reads for 60s per instance. That replaces Next's `unstable_cache`; the scope is narrower (one serverless instance, not a shared cache) but the tolerance is the same one `revalidate: 60` already accepted.

**Site config**: `src/lib/site.ts` exports site name, URL, and description constants used by the layout and the three metadata routes.

**Security headers** live in `vercel.json`, not in the framework. Astro has no
equivalent of Next's `headers()`, and middleware would only cover the on-demand
routes — the static chapter pages, which are nearly the whole site, would get
nothing. Consequence: **headers are not applied by `astro dev`**. Verify them
against a deployment, not localhost.

**Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. Global styles in `src/styles/global.css`. Accent color is red-700.

## Path alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Notes

- The `verses.ts` file is very large; avoid reading the entire file
- This is a public repo — do not include any environment variable values, KV connection strings, or other secrets in code or commits
