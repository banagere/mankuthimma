# Security Policy

## Reporting a vulnerability

Report privately through GitHub's **[Security Advisories](https://github.com/banagere/mankuthimma/security/advisories/new)** tab. Private vulnerability reporting is enabled on this repository, so the report stays between us until a fix ships.

Do not open a public issue for a vulnerability. A public issue is a disclosure.

Expect an acknowledgement within a week. This is a personal project maintained by one person in spare time — there is no SLA beyond that, and I would rather say so than publish a response time I cannot keep.

## Scope

The site is a static reader for the 945 poems of Mankuthimmana Kagga. There are no user accounts, no authentication, no personal data, and nothing behind a login. That bounds what a vulnerability here can cost.

Two API routes accept input and write to Vercel KV:

- `POST /api/views/[slug]` — increments a chapter view count
- `GET|POST /api/likes/[number]` — reads and increments a verse like count

Both validate the path segment against the known set of chapters and verses before any write, so the KV keyspace is bounded. Findings against these are in scope and genuinely useful.

**Also in scope:** the response headers and Content Security Policy in `next.config.ts`, the CI workflows in `.github/workflows/`, and anything that would let a change reach `main` without passing the gate.

**Out of scope:**

- Counter inflation. The like and view counters are rate limited per IP, not authenticated. Anyone determined enough can inflate them. They are decorative, they gate nothing, and hardening them further is not worth the complexity.
- Missing headers on paths Vercel serves outside the application.
- Reports from an automated scanner with no demonstrated impact.
- Denial of service by volume.

## Known accepted risks

`script-src` in the Content Security Policy currently includes `'unsafe-inline'`. Next.js inlines its own hydration and flight scripts, and the alternative — nonce-based CSP via middleware — forces every one of the 945 statically cached pages to render dynamically. This is a known and accepted gap, tracked for resolution by a planned migration to a static-output framework, not an oversight.

High-severity advisories with no resolvable version in range are recorded with written justification in [`.audit-baseline.json`](../.audit-baseline.json). At the time of writing all of them are dev-only, reached through the ESLint toolchain, and absent from the production bundle. `bun run audit` fails on anything new, so the baseline cannot grow silently.
