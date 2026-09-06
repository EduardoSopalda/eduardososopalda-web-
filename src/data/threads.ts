// The six threads, in the exact order and casing content.config.ts's
// own zod enum defines them (articles.threads) -- kept as a separate
// plain array (not derived from the schema import, which would pull
// zod into every page that just wants the six names) so this file
// stays a single source both the thread nerve and the thread archive
// pages read from, the same pattern src/data/stops.ts already
// established for the seven field stops. If a thread is ever renamed,
// update both this array and the schema enum together.
export const THREADS = [
  'MEANING',
  'GOVERNANCE',
  'TRUST',
  'PROXIMITY',
  'MEMORY',
  'CURIOSITY',
] as const;

export type Thread = (typeof THREADS)[number];

// Lowercase, one word each -- safe as a URL segment with no encoding.
export const slugForThread = (t: string) => t.toLowerCase();
export const threadForSlug = (slug: string): Thread | null =>
  THREADS.find((t) => t.toLowerCase() === slug.toLowerCase()) ?? null;
