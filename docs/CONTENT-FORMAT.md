# The article format

One article = one Markdown file in `/content`. Drop the file in; it appears in the field, joins its
threads, gets a reading view, and shows up in "the thread continues" on related pieces. Nothing else
to edit — no index, no list, no CMS.

```
content/
  2026-08-13-ten-thousand-files.md
  2026-05-02-data-is-my-shepherd.md
  ...
```

## Front matter

```yaml
---
title:    Ten Thousand Files, Two Thousand That Mattered
date:     2026-08-13
kind:     article        # article | note | talk | experiment | work
threads:  [MEMORY, MEANING]
dek:      An agent goes live. Adoption is immediate, which is what everyone wanted.
image:    library.jpg    # optional — leave empty for a typographic plate
family:   lit            # void = dark background, screen-blended, edges dissolve
                         # lit  = light background, kept as a plate, becomes a light source
people:   [Winfried Adalbert Etzel]
question: Curious how others are handling the irrelevance ratio. If you have measured yours, I would like to hear the number.
---
```

**Only `title`, `date`, `kind` and `threads` are required.** Everything else degrades gracefully:
no image gives a typographic plate, no people hides the rail, no question hides the closing block.

`people` is never auto-extracted. You name people on purpose; a script guessing at it would get it
wrong and the wrongness would be visible to the person named.

## The body

Plain Markdown. Three things get special treatment:

**`## Subheads` become beads on the nerve.** They light up as you scroll past them, and the labels
on the left rail are generated from them. Keep them short — under about 34 characters reads best in
the rail. Your existing subheads already work: *Come down from the tower. The coffee is better down here.*

**A paragraph on its own under ~90 characters becomes a callout.** It sits large, against the gold
rule, dim until the reader reaches it, then lit. This is built around how you already write — the
punchline goes on its own line. *Data is love.* *Governance without proximity is just opinion with a
logo.* *That, my friends, is semantic chaos.* No extra syntax; write the way you write.

**The closing question is the contact mechanism.** No form, no "book a call". The question you
already end on, made answerable.

## Threads

Six, derived from the corpus rather than invented:

| Thread | What it holds |
|---|---|
| MEANING | glossaries, definitions, Wittgenstein, "revenue", semantic drift |
| GOVERNANCE | frameworks, DMBOK, stewardship, the AI Act, operating models |
| TRUST | responsible AI, transparency, what makes people believe a system |
| PROXIMITY | conversation, culture, mentors, coming down from the tower |
| MEMORY | retention vs. recollection, unstructured data, knowledge decay |
| CURIOSITY | the speed-dating series, experiments, the margarita method |

An article can sit on one or two. Threads are the navigation — there are no THINK/SPEAK/MAKE
sections, because a piece belongs to an argument, not to a bucket.

## Current assignments

Auto-assigned by keyword on first ingest, so treat them as a first pass and correct them in front
matter. Same for `kind` (anything under 520 words was called a note) and the six titles reconstructed
for the Speed Dating series, which had no headings in the transcription.
