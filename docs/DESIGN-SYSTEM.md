# Design system

## Colour

```
--void   #000000   true black, and it must be true black, see compositing
--bone   #F3EBE0   text
--flesh  #E3AF95   secondary text, fragments at rest
--gold   #F7C56A   the nerve, its beads, whatever is awake. Nothing else.
--neon   #FF6E93   thread arcs only. Used perhaps three times on the whole site.
```

Gold is powerful because it is scarce. It is not a link colour, a button colour or a hover
colour.

## Type

- Display: **Fraunces**, variable, with SOFT 50 and WONK 1. Warm, slightly wonky, has a hand
  in it. Bodoni was tried and rejected as too aristocratic for a plainspoken writer.
- Reading: **Newsreader**, variable, for article bodies.
- Meta: **IBM Plex Mono** for labels, dates, kinds, catalogue numbers.

Self host all three and honour the optical size axis, so display sizes redraw finer and
small text redraws sturdier. This is the single detail that separates good web typography
from scaled type.

Roman carries who he is. Italic carries what he works on. That distinction does semantic
work and should not be replaced by a second family or a colour.

## Compositing, and why the page is true black

Specimens come in two families.

- **void** the subject sits on a pure black background. Because the page is also true black,
  the rectangle disappears with no cutting, no alpha and no mask, and the glow survives
  intact rather than being clipped at a mask edge.
- **lit** the subject sits on white. Do not cut these out. Keep the rectangle and let it be
  a source of light in the dark room.

Two thirds void to one third lit gives the field rhythm.

Critical: the warm light must render **above** the specimens, not behind them. A black image
drawn over a glow blocks it and reads as a rectangle. In the prototype the glow is a
fixed div at a higher z index with mix blend mode screen.

Do not use mix blend mode on the specimen images themselves. Positioned elements with
z-index create stacking contexts and the blend gets trapped.

## Motion

- Slow. Nothing moves fast anywhere on this site.
- Specimens breathe on independent cycles and lean toward the cursor when it comes close.
- Depth is one variable per specimen and it drives size, opacity, parallax speed and
  stacking together. Decouple them and the field reads as sloppy layout instead of space.
- The horizontal loop and the vertical cycle use periods that do not divide into each other,
  so the arrangement never repeats.
- Respect prefers-reduced-motion: freeze the drift and the breathing, keep manual navigation.

## Video

Generate on pure black and screen blending handles it. Avoid alpha video, which needs VP9
WebM plus HEVC with alpha for Safari, and is not worth the maintenance.

Three to six seconds, cut to loop, reverse and join for a seamless cycle. A specimen holds a
poster frame until someone approaches and only then plays. That keeps decoding to two or
three at once and makes motion a response to the visitor rather than wallpaper.

## Landing wordmark — decided in the build session, additions to this doc

The landing (`src/components/Landing.astro`) needed decisions this doc didn't cover: how to
set "Eduardo Sopalda" itself, as opposed to body or room type. Recorded here so they live in
the system doc, not just in chat history.

**Two additional colour tokens**, both in `tokens.css`, both distinct from `--gold`'s
scarcity rule above — they're warm neutrals for text, not stand-ins for the nerve:

```
--bronze       #A6613A   the specimens' own rim-light, one step down from gold
--bronze-deep  #9C5B36   darkest gradient stop. Was #5E3018 (1.91:1 on black, fails
                         WCAG AA even for large text) — relightened to 3.96:1 after an
                         actual contrast audit turned up small corner-state text going
                         near-invisible at the gradient's dark edge.
--champagne    #E6CB9B   the tagline. Eduardo's own correction — first pass used
                         --nacar (#F1EDE6) and read as flat white; champagne is
                         warmer, closer to the bronze/gold family.
```

**Two fonts reserved for the name-mark alone**, not used anywhere else on the site — the one
deliberate exception to Fraunces/Newsreader/Plex Mono above:

```
EDUARDO — Italiana (--font-wordmark-given), tall/elongated serif capitals, per Eduardo's
          direct request for an "elongated" treatment of the given name.
sopalda — Glacial Indifference (--font-wordmark), round and modern. Chosen because the
          surname is round-letter-heavy (Eduardo's own observation) and reads easiest
          leaning into that rather than fighting it.
```

Scale matters here: the two names sit in one lockup and need to read as a single mark, not
two mismatched pieces. An early pass had sopalda running over 2x EDUARDO's size and it read
as an accident. ~1.5x holds together.

**The tagline is set in mono, not Fraunces.** "DATA | AI & The human experience" first went
in Fraunces italic — a third, unrelated typeface competing with the two above, and the actual
source of the "looks generic" problem, not any single choice on its own. Fraunces-plus-a-
rounded-sans is an extremely common pairing right now; introducing a third face made it
worse. Plex Mono is already reserved above for "labels, dates, kinds, catalogue numbers" — 
setting the tagline there, tracked-out caps, makes it read as a specimen tag under the name
rather than a headline, which is one system instead of three fonts in one small area. Width
comes from letter-spacing, not from stretching a sentence with `text-align-last: justify`
(tried first, produced uneven gaps around short tokens like "|" and "&"). Tracking needs to
drop under ~30rem viewport width or it wraps to three ragged lines — checked by actually
screenshotting a phone-width viewport, not assumed.

**No forced timeout on the landing.** The original field spec (see "Landing" above) doesn't
mention a cue at all, and an early build used a blind `setTimeout` to force the transition
into the field after a few seconds. Eduardo's note: it "moves too fast" and forcing the
transition was the actual cause, not the timing value. Fixed by removing the timeout
entirely — advancing is now deliberate only: a wordless cue (thin gold line + pulsing dot,
same visual language as the nerve, `aria-label="Continue"` for screen readers, no visible
text) that has to be clicked, or scroll/touch, both already an act of trying to move past the
screen. Plain `pointermove` was removed as a trigger for the same reason — moving the mouse
to read isn't a choice to continue.

**The nerve needs its own vertical lane, checked against real content.** The original nerve
implementation centred its wave on 0.55 of viewport height, which turned out to sit directly
on top of the purpose line's row (0.56) — the wave's own amplitude then swings the line
straight through that text at every viewport size. Not caught until an actual responsive
screenshot audit (desktop only was tested for several iterations first). Moved to 0.72 with
margin to spare. The nerve was also reworked to add the "pulses of light travel along it"
detail from the field spec above, which the first landing pass had skipped — a separate
soft-glow stroke under a bright core stroke, plus a third small/fast sine term so the curve
doesn't read as a clean, static vector.
