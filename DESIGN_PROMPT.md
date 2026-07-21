# Vacanza Bali — Website Design & Build Prompt

Status: draft for review. This is a creative/technical brief, not implementation — no code has been
written from this yet. Content source: [PLAN.md](PLAN.md).

---

## Role

You are acting as a senior UI/UX designer and senior website builder who specializes in
conversion-focused travel & tour-operator sites. You think in terms of user flow, visual hierarchy,
mobile performance, and booking conversion — not just decoration. Every design decision should be
justifiable by how it helps a visitor go from "scrolling on their phone" to "message sent on WhatsApp."

## Business snapshot

**Vacanza Bali** is a Bali-based tour operator selling day trips and activities directly to tourists:
dolphin swimming/snorkeling, Ubud day trips (waterfalls, ATV/quad-bike, rafting, coffee plantations,
cooking classes), Mt. Batur sunrise trekking/jeep tours, Nusa Penida day trips, Uluwatu sightseeing,
fishing charters, a "village adventure" cultural immersion day, a cycling tour, and fast-boat tickets
to Gili Islands and Nusa Penida.

- Primary discovery channel today: TikTok (@vacanzabali) and Instagram (@vacanza_balitour).
- Pricing is per-person and tiered by group size (2–6 people), which is unusual for most travel-site
  templates — the design must handle this cleanly, not as an afterthought table dump.
- Full product and pricing content: [PLAN.md](PLAN.md).

## Audience & context

- Mostly tourists already in Bali or actively planning a trip, browsing on **mobile**, often arriving
  from an Instagram/TikTok bio link or a shared Reel — assume small screens and impatient scrolling,
  not desktop-first browsing.
- Decision window is short: they're comparing 3–5 tour operators in one sitting. The site needs to
  build trust and answer "what's included, what's the real price for my group size, how do I book"
  within seconds, not paragraphs.
- Booking today is manual/human (via chat), not a payment checkout — so the site's real conversion
  event is **starting a WhatsApp (or Instagram DM) conversation**, not a cart.

## Sitemap

1. **Home** — hero, top tour categories as visual cards, trust signals, social proof, primary CTA.
2. **Tour category pages** (one per section in PLAN.md: Dolphin Tour, Ubud Trip, Mt. Batur, Nusa
   Penida, Uluwatu Trip, Fishing, Village Adventure, Cycling, Boat Tickets) — each lists its variants
   (e.g. Ubud Day Trip A/B/C, Sightseeing, Cooking Class) as distinct bookable products.
3. **Tour detail view** (per product, e.g. "Dolphin Tour & Snorkeling") — itinerary, what's
   included/excluded, pricing by group size, what to bring, CTA.
4. **Contact / Book** — WhatsApp deep link as the primary action, Instagram/TikTok as secondary,
   simple inquiry form as a fallback for people who don't want to leave the site.
5. **About / Why us** — lightweight; can be a section on Home rather than its own page for v1.

## Homepage requirements

- Hero: strong full-bleed photography (once supplied) + one-line value prop + immediate CTA
  ("Chat on WhatsApp" / "See all tours"). Do not bury the CTA below the fold.
- Tour category grid: visual, image-led cards (not a text list) for the 10 categories, each linking
  to its category page.
- Social proof: TikTok/Instagram handles visible and linked; leave room for embedded reviews/photos
  later even if none exist yet.
- Sticky/persistent WhatsApp contact affordance on mobile (e.g. floating action button) — this is the
  single highest-leverage conversion element on the whole site.

## Tour / product page requirements

- **Pricing table UX is the hardest design problem here** — every tour has 4–5 price tiers by group
  size, sometimes further split by pickup zone (see Ubud Sightseeing, Uluwatu A/B). Design a pattern
  that reads instantly on mobile: e.g. a per-person price that updates as the visitor taps a group-size
  selector, rather than a dense table forcing horizontal scroll. Don't just dump the markdown table
  into HTML.
- Clear **Include / Exclude** lists — travelers care about this (towel? insurance? lunch?) and it
  differentiates near-identical-looking tours (e.g. the three Ubud Day Trip variants).
- Surface timing-critical info prominently (pick-up time, duration, what to bring) — this affects
  whether someone can actually book for tomorrow.
- One unambiguous CTA per page: "Book via WhatsApp" pre-filled with the tour name if possible.
- Where a tour has a with-transport vs. without-transport variant (Dolphin Tour, Quad-Bike, Rafting),
  make the distinction a primary choice, not a buried footnote.

## Visual & brand direction

- Tropical but premium — avoid the generic "clip-art palm tree" travel-agency look. Think warm
  natural tones (sand, ocean teal, sunrise orange/pink for the Batur sunrise tours) grounded by a
  clean neutral base so photography does the work.
  - Load the `dataviz` skill's palette guidance only if/when pricing gets any chart/visual treatment;
    for now this is a content/photography-led site, not a data site.
- Typography: confident, readable at a glance on mobile — a strong display face for section headers,
  a highly legible workhorse face for body/pricing text (price digits must be unambiguous at small
  sizes).
- Imagery-first: the design should be built to showcase real photos (the user is adding these to
  `public/`) — waterfalls, dolphins, sunrise treks, ATV mud tracks, cliff temples. Placeholder states
  should be designed for, not ignored, since photos are still being collected.
- Motion: restrained — subtle scroll-reveal or hover states are fine, nothing that delays perceived
  load speed on mobile data.

## Interaction & layout patterns

- Mobile-first, not mobile-adapted: design the single-column mobile layout first, then expand for
  desktop — given the TikTok/Instagram traffic source, most first visits will be on a phone.
- This is a proper multi-page site, not a single-page scroller: separate routes for Home, each tour
  category, each tour detail, About/Why Us, and Contact — per the sitemap above.
- Category and product cards should be tappable as whole cards (large hit targets), not relying on
  small inline links.
- Group-size price selection should feel like a real UI control (stepper/tabs), not a wall of text.
- Keep navigation shallow: category → product → book, in as few taps as possible.

## Trust & social proof

- Make "English-speaking driver/guide," "insurance included" (where applicable), and licensed
  guide callouts (Mt. Batur) visible — these are real differentiators travelers screen for.
- Link TikTok/Instagram prominently; if the user supplies reviews/testimonials later, design a slot
  for them now so it's not a bolt-on.

## Technical constraints (already in place)

- Next.js 16 (App Router), TypeScript strict mode, Tailwind CSS v4 — see [CLAUDE.md](CLAUDE.md).
- Static assets (photos) live in `public/`; none have been added yet.
- No CMS or backend chosen yet — pricing/content will likely be structured data (e.g. per-tour
  TypeScript/JSON objects) rendered into templated pages rather than hand-built pages per tour, given
  there are ~20 product variants across 10 categories.

## Out of scope for v1

- Online payment/checkout (booking stays conversational via WhatsApp for now).
- CMS or admin panel for editing content.
- Multi-language support (confirm with user before assuming English-only).

## Definition of done for the design phase

A reviewer should be able to look at the proposed design and answer, without guessing: what the 10
tour categories are, what a single tour's real price is for their group size, what's included, and
how to book it — in under 30 seconds, on a phone.
