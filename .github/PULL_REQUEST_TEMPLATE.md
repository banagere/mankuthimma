## What changed

<!-- One or two sentences. What a reader of `git log` six months from now needs. -->

## Why

<!-- The reason, not a restatement of the diff. If it fixes an issue, link it. -->

## Checks

<!-- The CI gate gets these wrong-proof; this is for what CI cannot see. -->

- [ ] `bun run ci` passes locally
- [ ] No secret, KV connection string, or environment variable value appears in the diff — **this repo is public**
- [ ] Verse and chapter data (`src/api/verses.ts`, `src/api/chapters.ts`) is unchanged, or the change is described above and was checked against the source text

## Security-relevant surface

<!-- Delete this section if none apply. If any apply, say what you considered. -->

- [ ] Touches an API route under `src/app/api/`
- [ ] Touches the CSP or response headers in `next.config.ts`
- [ ] Touches CI, git hooks, or `scripts/`
- [ ] Adds or bumps a dependency
