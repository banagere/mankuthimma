[![Homepage](https://mankuthimma.in/opengraph-image.jpg)](https://mankuthimma.in)

# mankuthimma.in

**[mankuthimma.in](https://mankuthimma.in)** — all 945 verses of *Mankuthimmana
Kagga*, free, fast, and readable on anything.

*Mankuthimmana Kagga* (ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗ) was written by **D. V. Gundappa** and
first published in 1943. It is one of the landmarks of Kannada literature: 945
four-line verses, many of them in ಹಳೆಗನ್ನಡ (old Kannada), circling the same
questions — what life is for, what is actually real, and how to hold both the
Ultimate Truth and the ordinary world at once, one in each hand.

I first read it at school. Years later I went looking for it online and
couldn't find it. This site exists so the next person can.

Each verse is presented with its Kannada text, a Kannada explanation
(ವಿವರಣೆ), and — where one exists — an English rendering.

---

## The site

- **189 chapters**, verses 1–945, at `/kagga/<chapter-slug>`
- **⌘K / Ctrl+K search** across chapter titles, Kannada text, and English
- **Most Read / Most Loved** — live view and like counts, no account required
- Prev/next chapter navigation, and deep links to any single verse
  (`/kagga/invocation#verse-1`)

## Tech

Astro on Vercel. The whole site is prerendered HTML — all 189 chapter pages are
files, not renders. Three small React islands handle the only interactive
parts (search palette, view counter, like button); everything else ships zero
JavaScript.

| | |
|---|---|
| Framework | [Astro](https://astro.build) (`output: "static"`, Vercel adapter) |
| Islands | React 19 — `Search`, `ViewCounter`, `HeartButton` |
| Styling | Tailwind CSS v4 |
| Search | [cmdk](https://cmdk.paco.me) + [Fuse.js](https://fusejs.io), index lazy-loaded on first open |
| Counters | Vercel KV (Redis) |
| Runtime | Bun |

The verses themselves are static TypeScript arrays in `src/api/` — no database,
nothing to go down.

## Running it locally

Requires [Bun](https://bun.sh) (the version in `.bun-version`).

```bash
bun install
bun dev            # http://localhost:4321
```

The like and view counters need Vercel KV credentials and will fail quietly
without them — every other part of the site works offline.

```bash
bun run build      # production build
bun run lint
bun run typecheck
bun run ci         # the full gate CI runs
```

If you plan to open a PR, install the git hooks once:

```bash
bun run hooks:install
```

That wires up a pre-commit secret scan and a pre-push run of the full gate, so
you find out locally rather than in CI.

## Layout

```
src/
├── api/          verses.ts (945), chapters.ts (189), search-index.ts
├── components/   Search, ViewCounter, HeartButton (React) · SideNav (Astro)
├── layouts/      Layout.astro — the shell and all page metadata
├── lib/          site config, KV keys, KV leaderboards, request guards
├── pages/
│   ├── index.astro          chapter list + leaderboards
│   ├── kagga/[slug].astro   a chapter's verses
│   └── api/                 views + likes
└── styles/
```

## Corrections welcome

This is a transcription of a printed work, and transcriptions have typos. If
you spot a wrong character, a broken ಸಂಧಿ, a mistranslation, or an explanation
that misses the verse —
**[open an issue](https://github.com/banagere/mankuthimma/issues)**. Please
include the verse number and, if you can, the source you're reading from.

Corrections to the text are the most valuable contribution to this repo.

## Security

Reports go through [`.github/SECURITY.md`](.github/SECURITY.md) — please don't
open a public issue for a vulnerability.

The counter endpoints are unauthenticated by design (nobody signs in to read
poems), so they are bounded instead: known slugs and verse numbers only, an
origin check, a per-address rate limit, and one like per address per verse.

## Content and credit

The text was sourced from books and websites, with full credit to the original
authors and publishers. Nothing here is monetised — no ads, no tracking beyond
Vercel's aggregate analytics, nothing sold. It was built out of gratitude for
DVG's work.

**If this site gives you something, buy the book.** It supports the people who
brought DVG's work into print and keep it there.

The site code in this repository is public so anyone can check what it does.
The verses are D. V. Gundappa's.
