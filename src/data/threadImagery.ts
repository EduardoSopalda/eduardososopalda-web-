// Per-article imagery does not exist -- CLAUDE.md lists it under "What
// is not done and needs Eduardo, not you," and non-negotiable 1 rules
// out inventing a stand-in. What already exists, real and approved,
// are the ten specimen images/videos in public/specimens/, each
// already tagged to a thread in Field.astro's own SPECIMENS array.
// Reusing one of those as an article's accent graphic isn't new
// content -- it's the same creature the reader already meets in the
// field, following the thread back to a piece that carries it.
//
// Deliberately incomplete: only threads with a real STILL image (not
// video-only) are listed, since a reader hero is a static <img>, not
// an autoplaying player -- GOVERNANCE, TRUST and CURIOSITY have no
// still asset today and simply get no accent image, same as the
// existing "no image" plate fallback already built for that case.
// No alt text on purpose -- the reader renders this <img> with alt="",
// same reasoning as Field.astro's own specimens: purely decorative,
// and the thread it illustrates is already announced as real text by
// the .thread pills the same header renders right below it. Alt text
// here would just repeat that, not add anything a screen reader user
// doesn't already have.
export const THREAD_SPECIMEN: Partial<Record<string, { src: string }>> = {
  MEMORY: { src: '/specimens/goldfish.png' },
  PROXIMITY: { src: '/specimens/chimp.png' },
  MEANING: { src: '/specimens/piglet-poster.png' },
};

// First thread (in the article's own front-matter order) that has a
// real still -- an article's own thread order is itself a real,
// authored signal (see content front matter), so this isn't picking
// arbitrarily.
export function specimenForThreads(threads: string[]) {
  for (const t of threads) {
    const s = THREAD_SPECIMEN[t];
    if (s) return s;
  }
  return null;
}
