# Vacanza Bali — Home Page Design Prompt (Awwwards-Tier)

Status: draft for review. No code written from this yet. This supersedes the visual/interaction
ambition of the Home section in [DESIGN_PROMPT.md](DESIGN_PROMPT.md) — that file's content facts,
sitemap, and technical constraints still stand; this one raises the craft bar specifically for the
homepage, because the first build was competent but generic (a template, not a piece of design).
Content source: [PLAN.md](PLAN.md).

---

## Role

You are a senior designer at the level that lands Site of the Day on Awwwards — someone judged on
the platform's own four axes: **Design** (visual craft), **Usability** (it still has to work),
**Creativity** (an idea no template has), and **Content** (it says something specific, not
generic travel-brochure copy). A homepage that could be reskinned for any tour operator anywhere
has failed before a single pixel ships. Every decision below must trace back to Vacanza Bali's
actual content — nothing decorative for its own sake.

## The big idea

**Concept: "A Day in Bali."** Vacanza's own product catalog is already organized by time of day —
dolphin swims start 03:45 AM, Mt. Batur treks leave 01:30 AM for sunrise, Uluwatu's Kecak dance
closes out at sunset. That's not a coincidence to hide in a pricing table — it's the entire homepage
concept. The page itself moves through a day: it opens in pre-dawn darkness, and as the visitor
scrolls, the light, color grade, and imagery shift — dawn over Lovina, harsh midday jungle green,
golden-hour cliffs, dusk fire-dance — ending on night departures for the fast boats. The scroll
position *is* the time of day. This is the one idea a generic tour-operator template cannot have,
and it's earned directly from the content, not invented on top of it.

This also solves a real usability problem: nine tour categories is too many to browse as an
undifferentiated grid (which is what shipped, and is exactly why it read as generic). Organizing
by time-of-day gives visitors a second, faster way to choose — "I want a sunrise thing" or "I want
something for this afternoon" — instead of forcing them to already know the category names.

## Structure (section by section)

1. **Cold open — pre-dawn.** Near-black viewport, a single low, warm light source (implies a boat
   lantern / phone screen glow), minimal type: the wordmark and one line — the pickup time for the
   earliest tour of the day. This is the "wow" moment Awwwards' Design axis rewards — it must land
   in under a second, no loading spinner excuses. A subtle scroll-cue (not a generic bouncing
   chevron — something on-concept, e.g. a slowly brightening horizon line) invites the first scroll.

2. **Dawn — Dolphin Tour / Mt. Batur.** As the visitor scrolls, the background grades from near-black
   to a cold blue-to-pink sunrise. Two tour categories live here, presented as a horizontal pair, not
   stacked cards — this is the section that should feel most "in motion," since both products are
   literally about chasing sunrise.

3. **Morning/midday — Ubud Trip, Cycling Tour, Village Adventure.** Grade shifts to saturated jungle
   green, high contrast, "midday sun through canopy" lighting logic. This is the busiest content
   section (Ubud alone has 7 product variants) — resist the urge to list them all here; homepage
   shows category-level entries only, detail lives on the category page per the existing sitemap.

4. **Afternoon — Nusa Penida, Fishing Trip, Boat Tickets.** Grade shifts to open ocean blue, flatter
   and brighter — open water, less atmospheric drama, more clarity (these are the "practical"
   products: tickets and a fishing charter).

5. **Golden hour — Uluwatu Trip.** Warm orange/pink cliff-and-temple treatment, the visual peak of
   the page — Uluwatu's own content (sunset temple, Kecak fire dance) is the natural climax, so let
   the design treat it as one, not as card #9 of 9.

6. **Night — the CTA / social section.** Grade settles to a deep teal-black, a lantern/firelight
   accent echoing the cold-open. WhatsApp CTA and TikTok/Instagram live here — the page ends the way
   a day of touring would, planning tomorrow's booking by lamplight.

Each section's category entries stay tappable as whole cards per the original sitemap
requirement — the day/night concept is the *frame*, not a replacement for fast, obvious navigation.
A visitor in a hurry must still be able to skim category names and tap through without watching the
whole scroll story.

## Typography

Two faces, used with real hierarchy discipline:
- **Display**: something with editorial weight and a bit of period/travel-poster character —
  think a serif or high-contrast slab with real personality (evaluate e.g. Fraunces at heavier
  optical sizes, or a more expressive alternative) — used oversized, often bleeding off the
  viewport edge on the section headers. Type should be treated as a graphic element, not just a
  label sitting above content.
- **Body/UI**: a workhorse grotesk kept strictly for legibility — price digits, includes/excludes,
  navigation. Never let the display face touch a price.

No more than these two families. Scale should be dramatic — the gap between a section headline and
its body copy should be large enough that the headline reads as a poster, not a title bar.

## Color & light

Not a static palette applied uniformly — a **lighting system that changes with scroll position**,
per the section breakdown above (pre-dawn near-black → sunrise blue/pink → midday green → afternoon
ocean blue → golden-hour orange → night teal-black). Implement as a small number of discrete
gradient/color-token "scenes" tied to scroll position (via IntersectionObserver or scroll-driven CSS),
not a continuous per-pixel interpolation — discrete scene changes are cheaper to build well and
easier to keep looking intentional than a smooth blend that risks looking muddy in between.

Photography (once supplied) should be graded to match its scene, not dropped in as-shot — this is
worth flagging to whoever processes the photos, not just the person building the page.

## Motion & interaction language

- **Scroll-driven, not click-driven.** The time-of-day progression is the primary interaction; it
  should feel inevitable, not like a slideshow the user operates.
- **Category cards**: on hover/tap, the placeholder or photo should react (subtle scale + a light
  sweep or grade shift toward that section's color), giving tactile feedback before the tap even
  lands — cheap to build, disproportionately raises perceived craft.
- **Magnetic primary CTA**: the WhatsApp button in the night section should have a small
  cursor-attraction effect on desktop (skip on touch — no equivalent, don't fake one).
  **Reduced motion**: every scroll-driven and hover effect above must have a static fallback behind
  `prefers-reduced-motion: reduce` — same content and section order, no scroll-triggered grading,
  no magnetic pull.
- **Restraint on mobile**: given the TikTok/Instagram traffic source (confirmed as the primary
  channel in DESIGN_PROMPT.md), most first visits are on a mid-range phone on mobile data — the
  time-of-day scene changes should be CSS-driven (cheap) rather than large per-scene image swaps;
  do not tank load time chasing desktop-grade motion on a phone.

## Layout

Break from the centered-container-with-equal-cards pattern that shipped. Use an editorial,
asymmetric grid: the dawn and golden-hour sections (the emotional peaks) get more vertical room and
off-center compositions; the midday and afternoon sections (denser, more practical content) can be
tighter and more grid-regular. Let the layout itself communicate which moments matter more, the same
way a magazine spread does.

## Technical notes for whoever builds this

- Feasible in the current stack (Next.js App Router, Tailwind v4, no new framework required) using
  CSS scroll-driven animations / `IntersectionObserver`-toggled classes for the scene transitions —
  flag if a motion library (e.g. Framer Motion) is wanted for the magnetic-button and hover-reveal
  details specifically, since that's a dependency decision, not just code.
- The existing `PlaceholderImage` gradient-block pattern can serve as the "scene" backgrounds today
  and swap for real graded photography later without restructuring the page.
- This prompt covers the **Home page only**. Category and product pages keep the calmer, faster,
  form-follows-pricing treatment from DESIGN_PROMPT.md — the day/night concept is a homepage device,
  not a site-wide skin; a visitor trying to book shouldn't scroll through a sunset metaphor to find
  a price.

## Definition of done

Judge it the way Awwwards would: does the first screen make someone stop scrolling their phone for
a second (**Design**)? Can a visitor in a hurry still find and tap into a tour without watching the
whole story (**Usability**)? Is there one idea here that couldn't be copy-pasted onto a competitor's
site (**Creativity**)? Does every section trace back to something actually true about Vacanza's
tours, not generic travel-site filler (**Content**)?
