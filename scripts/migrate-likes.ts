/**
 * One-time migration: legacy `likes:verse:<n>` string keys -> `likes:leaderboard` sorted set.
 *
 * Run it with KV credentials in the environment (`vercel env pull .env.local`):
 *
 *   bun run scripts/migrate-likes.ts               # dry run, reports what it would do
 *   bun run scripts/migrate-likes.ts --commit      # write the sorted set
 *   bun run scripts/migrate-likes.ts --commit --delete-legacy
 *
 * Writes use ZADD ... GT, so a score is only ever raised, never lowered. That
 * makes the script idempotent and safe to run before or after the deploy —
 * likes collected by the new code in between are not clobbered.
 *
 * Keys whose suffix is not a real verse number are reported and skipped: those
 * are the junk entries the old unvalidated route allowed anyone to create.
 */
import { kv } from "@vercel/kv";
import { verseToChapter } from "../src/api/chapters";
import { LEADERBOARD_KEY } from "../src/lib/kv-keys";

const LEGACY_PREFIX = "likes:verse:";

const commit = process.argv.includes("--commit");
const deleteLegacy = process.argv.includes("--delete-legacy");

async function main() {
  const legacyKeys: string[] = [];
  let cursor = "0";

  do {
    const [next, keys] = await kv.scan(cursor, {
      match: `${LEGACY_PREFIX}*`,
      count: 200,
    });
    cursor = String(next);
    legacyKeys.push(...keys);
  } while (cursor !== "0");

  console.log(`Found ${legacyKeys.length} legacy key(s).`);
  if (legacyKeys.length === 0) return;

  const migrated: Array<{ verse: number; likes: number }> = [];
  const junk: string[] = [];

  // Chunked so a polluted keyspace can't blow the argument limit on mget.
  for (let i = 0; i < legacyKeys.length; i += 100) {
    const chunk = legacyKeys.slice(i, i + 100);
    const values = await kv.mget<(number | null)[]>(...chunk);

    chunk.forEach((key, j) => {
      const suffix = key.slice(LEGACY_PREFIX.length);
      const verse = Number(suffix);
      const likes = Number(values[j] ?? 0);

      if (!/^\d{1,4}$/.test(suffix) || !verseToChapter.has(verse)) {
        junk.push(key);
        return;
      }
      if (!Number.isFinite(likes) || likes <= 0) return;

      migrated.push({ verse, likes });
    });
  }

  console.log(`  ${migrated.length} real verse(s) to migrate.`);
  console.log(`  ${junk.length} junk key(s) (invalid verse numbers).`);
  if (junk.length > 0) {
    console.log(`  e.g. ${junk.slice(0, 10).join(", ")}`);
  }

  if (!commit) {
    console.log("\nDry run — nothing written. Re-run with --commit to apply.");
    return;
  }

  for (const { verse, likes } of migrated) {
    await kv.zadd(
      LEADERBOARD_KEY,
      { gt: true },
      { score: likes, member: String(verse) },
    );
  }
  console.log(`\nMigrated ${migrated.length} verse(s) into ${LEADERBOARD_KEY}.`);

  if (deleteLegacy) {
    const toDelete = [...legacyKeys];
    for (let i = 0; i < toDelete.length; i += 100) {
      await kv.del(...toDelete.slice(i, i + 100));
    }
    console.log(`Deleted ${toDelete.length} legacy key(s), junk included.`);
  } else {
    console.log("Legacy keys left in place. Re-run with --delete-legacy to remove them.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
