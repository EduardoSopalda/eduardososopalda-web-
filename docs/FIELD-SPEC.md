# The field

Open `prototype/field.html` first. Everything below is implemented there and working.

## Landing

Black. The nerve is already crossing the screen and already drifting: the site is mid
thought and the visitor interrupted it.

Centred: the name large in display roman, the italic line beneath it, and the purpose line
below that. After roughly three seconds, or on the first pointer move or scroll, the
wordmark **walks** to the top left over about two seconds and stays there. It does not fade.
The purpose line walks to the bottom left. Those two never dim again, while everything else
breathes. Permanence by contrast of behaviour rather than by size.

The field fades up as the wordmark travels.

No enter button, no explore, no scroll hint, no instruction of any kind.

## Drift

- Horizontal: infinite, wrapping, always moving even when untouched, faster after a period
  of no interaction.
- Vertical: the whole field rises and falls on a slow cycle whose period does not divide
  into the horizontal loop, so the arrangement never repeats.
- Drag works in both axes. Horizontal is infinite, vertical is bounded with a soft limit.
- Wheel scrolls the field horizontally.

## Fragments

Lines lifted from the articles. No titles, no dates, no attribution. Font size and opacity
follow depth. They are the only text in the field.

**Decay.** A fragment holds while something is near it, and comes apart when nothing is.
Context is proximity, literally on screen, the same way it is in an organisation.

- Alone, a fragment has about forty seconds.
- With the cursor near, the clock runs backwards and the fragment holds.
- When a thread is held active, every fragment on that thread stops decaying, because they
  now have each other. Orphans die, fragments in context survive.
- Decay is not a fade. The letters detach, drift apart, fall toward the nerve, and fade over
  about ten seconds. What dies returns to the line.
- Once off screen a dead fragment respawns elsewhere in the field.
- Pause the clock when the tab is backgrounded. Otherwise someone returns to an empty field
  with no idea anything was there.

## Specimens

Images at depth. One variable, depth, drives size, opacity, parallax speed and stacking.

They breathe on independent cycles. Within roughly 235 pixels they wake: full colour, the
caption brightens. Within roughly 430 pixels they lean toward the cursor. Every few seconds
one flares unprompted, a halo and a gold line dropped to the nerve, asking to be looked at.

Wanted improvement, not yet built: split specimens into a far layer and a near layer with
the nerve rendering between them, so the line passes behind close images and in front of
distant ones. Same code, one extra DOM layer.

## The nerve

A single gold filament crossing the field. It bends toward the cursor within about 360
pixels. Pulses of light travel along it. It is the only continuous line in a field of
fragments and the only saturated colour in a desaturated palette.

The seven stops ride on it as beads with mono labels. Approach and the bead brightens, the
label rises and letterspaces. Click to enter a room.

## Field to room

Not a page cut. The chaos sorts itself: depth collapses, parallax speeds converge, sizes
converge, and the same objects settle into an order. About a second and a half, reversible.
The nerve tilts from drift to axis. Metadata arrives, so a fragment that had no title in the
field gains its title, kind and year in the room.

This transition is the highest risk moment in the whole design. If it stutters the site dies
there. Build it before anything else that depends on it.

## Room to reader

The plate opens full bleed with the title over it, then recedes as you scroll, shrinking into
the small mark that sits beside you for the rest of the read. Same object, three sizes.

Reader is one column. The nerve becomes the vertical spine and fills as you read. Subheads
are beads on it. A paragraph under about ninety characters, standing alone, is a callout: it
sits large against a gold rule, dim until you reach it, then lit. This is built around how
Eduardo already writes, so it needs no new syntax.

Presentation scales with length. A note is one screen with no spine. An article gets the
full treatment. A series piece gets a part indicator and previous and next within the series.

Language is per article, not per site. A Spanish piece sets lang="es" and keeps its own
hyphenation. No toggle, no translation.

## Also

`/archive` is a plain reverse chronological list. Not a fallback: it is how someone who
already knows what they want finds it in four seconds, and how a screen reader and a crawler
see the whole corpus.

Keyboard: every specimen and stop is focusable, arrow keys move the field, Escape leaves.
