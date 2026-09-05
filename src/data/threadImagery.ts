// Per-article imagery does not exist -- CLAUDE.md lists it under "What
// is not done and needs Eduardo, not you," and non-negotiable 1 rules
// out inventing a stand-in. What already exists, real and approved,
// are the specimen images/videos in public/specimens/, each already
// tagged to a thread in Field.astro's own SPECIMENS array. Reusing one
// as an article's accent graphic isn't new content -- it's the same
// creature the reader already meets in the field, following the
// thread back to a piece that carries it.
//
// Direct feedback: one image per thread meant every article on that
// thread showed the identical picture -- 6 threads across 25 articles
// repeats a lot. Extracted a real frame (ffmpeg, not generated) from
// each specimen video that only ever shipped as video, so every
// tagged thread now has more than one real still to draw from:
// MEMORY and GOVERNANCE and TRUST each get two, matching the two
// specimens Field.astro already tags to that thread. Still no
// invented imagery -- these are real frames from the real assets,
// picked by hand for a clean, representative moment (checked directly,
// not the first frame ffmpeg happened to land on).
export const THREAD_SPECIMENS: Partial<Record<string, string[]>> = {
  MEMORY: ['/specimens/goldfish.png', '/specimens/goldfish2-poster.png'],
  GOVERNANCE: ['/specimens/octopus-poster.png', '/specimens/bluefish-poster.png'],
  TRUST: ['/specimens/jellyfish-poster.png', '/specimens/jellyfish2-poster.png'],
  PROXIMITY: ['/specimens/chimp.png'],
  MEANING: ['/specimens/piglet-poster.png'],
  CURIOSITY: ['/specimens/brain-poster.png'],
};

// A stable pick, not a random one -- the same article gets the same
// specimen on every build and every visit, but two different articles
// sharing a thread no longer default to the exact same picture. seed
// is the article's own catalogue number (already a stable, real,
// per-article integer -- see articleIndex.ts) so the distribution
// doesn't depend on array order or anything else that could shift.
export function specimenForArticle(threads: string[], seed: number): string | null {
  const pool = threads.flatMap((t) => THREAD_SPECIMENS[t] ?? []);
  if (!pool.length) return null;
  return pool[seed % pool.length];
}
