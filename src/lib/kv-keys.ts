/**
 * Shared KV key names.
 *
 * Kept free of heavy imports so API routes can use them without pulling the
 * verse corpus into their bundle.
 */

/** Sorted set: member = verse number as a string, score = like count. */
export const LEADERBOARD_KEY = "likes:leaderboard";

/** Per-chapter view counters. */
export const viewsKey = (slug: string) => `views-${slug}`;
