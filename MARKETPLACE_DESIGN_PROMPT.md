# Vacanza Bali — Marketplace Design Prompt (tiket.com-style)

Status: draft for review. No code written from this yet.

**This retires [HOME_DESIGN_PROMPT.md](HOME_DESIGN_PROMPT.md) entirely** — the "Day in Bali" cinematic
scroll concept (dark full-viewport scenes, IntersectionObserver color grading, magnetic button) is
dropped, not toned down. You didn't confirm keeping a lighter version of it for the top hero, so the
call here is a clean break: this document is now the whole visual direction, home page included.

[DESIGN_PROMPT.md](DESIGN_PROMPT.md) still stands for content facts, sitemap, pricing-tier UX
requirements, and technical constraints — this document replaces its **Visual & brand direction**
and **Interaction & layout patterns** sections specifically. Content source: [PLAN.md](PLAN.md).

---

## Role

You are a senior product/UX designer who builds travel marketplaces — the kind of person who's
shipped screens for tiket.com, Traveloka, or Agoda. The job here isn't to impress a design jury; it's
to make a stranger scrolling Instagram recognize "this is a real booking site" in under two seconds,
understand roughly what things cost, and reach a WhatsApp chat in two taps. Optimize for trust and
scan speed, not artistic impression.

## Why this direction, not the cinematic one

Vacanza's actual audience — people already on TikTok/Instagram, deciding fast on a phone — already
knows how to read an OTA layout instinctively, because tiket.com/Traveloka/Agoda are the sites they
use to book everything else in Indonesia. A scroll-driven art piece asks a stranger to learn a new
interface pattern before they can find a price. A marketplace layout asks nothing of them. That's the
whole argument for the switch.

## What to borrow from tiket.com

- **Category icon row.** A row of small rounded icons + labels for quick navigation — tiket.com uses
  this for Flight/Hotel/Train/Bus/etc.; here it's your 9 tour categories (Dolphin Tour, Ubud Trip,
  Mt. Batur, Nusa Penida, Uluwatu, Fishing, Village Adventure, Cycling, Boat Tickets). Horizontally
  scrollable on mobile, a full row on desktop. This becomes the primary navigation device, replacing
  the old header dropdown as the main way people find a category.
- **A compact promo banner**, not a full-viewport hero. Something in the 300–420px range, a small
  rotating carousel highlighting 2–4 tours or a seasonal message. It should not dominate the first
  screen the way the old cinematic cold-open did — the category row and first card grid should
  already be visible (or nearly) without scrolling.
- **Dense, price-forward card grids.** Every tour card leads with a photo, name, a colored price
  chip ("From IDR 260.000/person"), and 1–2 small trust-tag icons (English guide, insurance) —
  not a card that makes you read a paragraph to find the price.
- **A "Popular Tours" horizontal-scroll carousel** near the top, surfacing a curated handful across
  categories — call this editorial curation for launch (you have no booking-volume data yet), not
  data-driven "bestsellers," and don't label it in a way that implies real sales numbers you don't have.
- **A trust row** — English-speaking guides, insurance included, licensed Batur guides, group
  WhatsApp for shared transport — presented as a compact icon+text strip, tiket.com-style, not
  buried in an About page.
- **A sticky bottom WhatsApp CTA bar on mobile** — a persistent bar pinned to the bottom of the
  viewport (not just the floating round button), the OTA-standard "book now" bar pattern. Keep the
  floating button too if it doesn't visually clash; the bar is the addition, not a replacement.
- **Bright, opaque header, always.** No transparent-over-hero trick — that was a cinematic-specific
  device. Standard OTA top bar: logo, category nav, WhatsApp CTA button, solid background at all
  scroll positions.

## What NOT to copy

tiket.com is a live-inventory OTA; Vacanza is a fixed-price catalog booked by chatting a human. Do
not build UI that implies capability you don't have:

- No destination/date search bar with live availability — there's no inventory system behind it.
- No flight/hotel/train-style tab switcher — your categories aren't transport modes.
- No live filtering/sorting UI — ~19 products across 9 categories doesn't need it; a category icon
  row is enough navigation.
- No in-app payment/checkout flow — WhatsApp stays the single booking mechanism, per
  DESIGN_PROMPT.md.
- No star ratings, review counts, or "X people booked this" — don't fabricate social proof that
  doesn't exist yet. If real reviews arrive later, add them; don't simulate them now.
- No fake urgency ("Only 2 spots left!", countdown timers) — manipulative scarcity patterns, and
  none of it would be true given there's no real-time inventory to back it.

## Color & typography

Keep the existing brand tokens (ocean teal primary, sunrise orange accent, sand neutral) already set
up in `globals.css` and `layout.tsx` — the mood shift is about background brightness, density, and
card patterns, not a token rebuild. The real changes:

- **Light background throughout**, not the cinematic near-black — white/sand card surfaces, teal/
  orange used boldly on CTAs, price chips, and category icons, the way an OTA uses brand color as
  accent-on-white rather than as an ambient mood.
- **Sans-serif-led, not editorial-serif-led.** Fraunces can stay for a handful of section headings if
  it doesn't slow scanning, but body copy, card titles, and prices should be Geist Sans — dense
  marketplace layouts read faster in a plain grotesk than in a display serif. Prices specifically
  stay in Geist Mono, unchanged from the existing pattern.
- **Higher information density** than the cinematic build — more cards visible per viewport, smaller
  vertical rhythm between sections, closer to how tiket.com packs a screen than how the scroll-story
  paced itself.

## Structure (home page)

1. Header — standard opaque OTA top bar (unchanged behavior across the whole site now, home included).
2. Category icon row — the 9 categories, icon + label, horizontally scrollable on mobile.
3. Promo banner — compact rotating carousel (300–420px), 2–4 slides.
4. "Popular Tours" — horizontal-scroll card carousel, curated selection across categories.
5. Full category grid — denser card treatment than before, each linking to its category page.
6. Trust row.
7. Socials + WhatsApp CTA block (can be simpler than before — a card, not a full-viewport "night" scene).
8. Footer (unchanged).
9. Sticky bottom WhatsApp bar on mobile, present site-wide, not just on Home.

## Category & product pages

Same marketplace language carries through: denser card grids on category pages, and on product
pages the existing `PriceSelector` group-size chips already read close to an OTA fare-selector — keep
that component's interaction model, just tighten the visual treatment (chip sizing, color) to match
the rest of the new system rather than its own separate look.

## What gets removed vs. reused

- **Remove**: `DayJourney.tsx`, `MagneticButton.tsx`, `scenes.ts`, and the scroll-driven color-grading
  system in general — this was purpose-built for the cinematic concept and has no role here.
- **Reuse as-is**: the entire data layer (`src/data/*`), `lib/whatsapp.ts`, `lib/pricing.ts`, routing
  structure, and `PriceSelector`'s interaction logic — none of that is visual-system-dependent, it's
  content and behavior that this redesign doesn't touch.
- **Rework**: `Header.tsx` (drop the transparent-over-hero logic, keep it simple/always-opaque),
  `CategoryCard.tsx` / `ProductCard.tsx` (denser, price-chip-forward), `PlaceholderImage.tsx` (keep
  the seeded-photo + tint approach from the last change — that part isn't cinematic-specific, it's
  just "use real photos," which still applies here).

## Definition of done

Could a first-time visitor, arriving from an Instagram link, recognize this as a real booking
platform within two seconds, understand roughly what a tour costs for their group size without
reading a paragraph, and reach a WhatsApp conversation in two taps? Judge it on scan speed and
conversion clarity — not on whether it would win a design award.
