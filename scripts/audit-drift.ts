#!/usr/bin/env bun
/// <reference types="bun" />
/**
 * Dependency-audit drift gate.
 *
 * `bun audit` alone is not usable as a gate here: several high advisories are
 * pinned transitively by eslint, eslint-config-next and next, so no version in
 * range resolves them. A gate that is permanently red is a gate nobody reads.
 *
 * So this compares against a reviewed baseline and fails only on advisories
 * that are NEW. Existing ones stay visible without blocking, and anything that
 * has since been fixed is reported as stale so the baseline gets pruned rather
 * than silently accumulating.
 *
 *   bun run audit           # gate: fail on new advisories
 *   bun run audit:baseline  # accept current advisories as reviewed
 */

const BASELINE_PATH = new URL("../.audit-baseline.json", import.meta.url)
  .pathname;

const GATED_SEVERITIES = new Set(["high", "critical"]);

type Advisory = {
  id: number;
  url: string;
  title: string;
  severity: string;
};

type BaselineEntry = {
  key: string;
  package: string;
  severity: string;
  title: string;
  url: string;
  /** Why this is accepted rather than fixed. Reviewed by a human. */
  note: string;
};

type Baseline = {
  $comment: string;
  reviewed: string;
  entries: BaselineEntry[];
};

/** Stable identity for an advisory: same GHSA can affect several packages. */
function advisoryKey(pkg: string, advisory: Advisory): string {
  return `${pkg}@${advisory.url.split("/").pop()}`;
}

async function currentAdvisories(): Promise<Map<string, { pkg: string; advisory: Advisory }>> {
  const proc = Bun.spawn(["bun", "audit", "--json"], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const raw = await new Response(proc.stdout).text();
  await proc.exited;

  if (!raw.trim()) return new Map();

  let parsed: Record<string, Advisory[]>;
  try {
    parsed = JSON.parse(raw);
  } catch {
    console.error("could not parse `bun audit --json` output");
    process.exit(2);
  }

  const found = new Map<string, { pkg: string; advisory: Advisory }>();
  for (const [pkg, advisories] of Object.entries(parsed)) {
    for (const advisory of advisories ?? []) {
      if (!GATED_SEVERITIES.has(advisory.severity)) continue;
      found.set(advisoryKey(pkg, advisory), { pkg, advisory });
    }
  }
  return found;
}

async function readBaseline(): Promise<Baseline> {
  const file = Bun.file(BASELINE_PATH);
  if (!(await file.exists())) {
    return { $comment: "", reviewed: "", entries: [] };
  }
  return file.json();
}

const current = await currentAdvisories();
const writeBaseline = process.argv.includes("--update");

if (writeBaseline) {
  const existing = await readBaseline();
  const priorNotes = new Map(existing.entries.map((e) => [e.key, e.note]));

  const baseline: Baseline = {
    $comment:
      "Reviewed high/critical advisories with no resolvable version in range. " +
      "`bun run audit` fails only on advisories absent from this list. " +
      "Regenerate with `bun run audit:baseline` and justify each new entry.",
    reviewed: new Date().toISOString().slice(0, 10),
    entries: [...current.entries()]
      .map(([key, { pkg, advisory }]) => ({
        key,
        package: pkg,
        severity: advisory.severity,
        title: advisory.title,
        url: advisory.url,
        note: priorNotes.get(key) ?? "TODO: justify why this is accepted",
      }))
      .sort((a, b) => a.key.localeCompare(b.key)),
  };

  await Bun.write(BASELINE_PATH, JSON.stringify(baseline, null, 2) + "\n");
  console.log(`wrote baseline: ${baseline.entries.length} advisories`);
  process.exit(0);
}

const baseline = await readBaseline();
const accepted = new Set(baseline.entries.map((e) => e.key));

const added = [...current.entries()].filter(([key]) => !accepted.has(key));
const stale = baseline.entries.filter((e) => !current.has(e.key));

if (stale.length > 0) {
  console.log(
    `\n\x1b[33m${stale.length} baselined advisory(s) no longer present — prune with \`bun run audit:baseline\`:\x1b[0m`,
  );
  for (const e of stale) console.log(`  - ${e.key}  ${e.package}`);
}

if (added.length === 0) {
  console.log(
    `\n\x1b[32m✓ no new advisories\x1b[0m (${accepted.size - stale.length} baselined, reviewed ${baseline.reviewed || "never"})`,
  );
  process.exit(0);
}

console.error(`\n\x1b[31m✗ ${added.length} new high/critical advisory(s):\x1b[0m`);
for (const [key, { pkg, advisory }] of added) {
  console.error(`\n  ${pkg}  [${advisory.severity}]`);
  console.error(`    ${advisory.title}`);
  console.error(`    ${advisory.url}`);
  console.error(`    key: ${key}`);
}
console.error(
  "\nFix it, or accept it with `bun run audit:baseline` and write a justification.\n",
);
process.exit(1);
