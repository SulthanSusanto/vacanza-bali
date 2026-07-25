# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Vacanza Bali — a marketing/booking site for a Bali tour operator. All bookings happen via WhatsApp
deep links (`src/lib/whatsapp.ts`); there is no backend, database, cart, or payment flow. Content
(tours, categories, ferry tickets) is static TypeScript data, not a CMS.

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (Turbopack)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (`eslint-config-next` core-web-vitals + TypeScript rules)

There is no test runner configured.

## Architecture

### Routing (App Router, `src/app/`)

- `/` — the landing page (`src/components/landing/LandingPage.tsx`), a fully self-contained
  experience with its own splash screen and section layout.
- `/tours` — index of all `TourCategory` entries.
- `/tours/[category]` — one category's products. The `boat-tickets` category slug is special-cased
  to render `FerryTicket` cards instead of `TourProduct` cards (different data shape, no group-size
  pricing).
- `/tours/[category]/[product]` — a single tour's detail + booking page.
- `/about`, `/contact`, `/gallery` — static content pages.

All dynamic routes use `generateStaticParams` (fully static-generated) and `generateMetadata` for
per-page SEO. Route `params` are `Promise`s per current Next.js App Router conventions.

### Chrome vs. landing page

`src/components/SiteChrome.tsx` (client component, reads `usePathname`) decides layout: the landing
page (`/`) renders bare with no shared chrome, every other route gets `Navbar` + `Footer` +
`WhatsAppFab` + `StickyWhatsAppBar`. When adding a new top-level route, remember it gets this shared
chrome automatically unless you special-case it in `SiteChrome`.

### Data layer (`src/data/`)

Content is plain typed arrays, no fetching:

- `types.ts` — shape of everything: `TourCategory`, `TourProduct`, `PriceTier`/`PriceTierGroup`,
  `ZoneSurcharge`, `AddOn`, `FerryTicket`.
- `categories.ts` — the fixed list of tour categories (`getCategory(slug)`).
- `tours.ts` — all `TourProduct`s, keyed by `categorySlug` (`getTour`, `getToursByCategory`).
- `ferry-tickets.ts` — boat ticket schedules/pricing, a separate shape from tours since they price
  by one-way/return rather than group size.

Pricing on a `TourProduct` is one of two mutually exclusive shapes:

- `priceTiers` — a flat headcount ladder (e.g. price per person at 2/3/4/5/6 people), or a list of
  named options when `people` doesn't apply.
- `tierGroups` — the same ladder concept, but split into groups (e.g. per pickup zone or boat type)
  the user picks between first.

`src/lib/pricing.ts` reads across both shapes (`getAllTiers`, `getStartingTier`,
`getCategoryStartingPrice`) by parsing the IDR-formatted `priceLabel` strings — there are no numeric
price fields, so any new pricing display logic should go through these helpers rather than
re-parsing labels ad hoc.

### Booking flow

`src/lib/whatsapp.ts` builds `wa.me` links with a prefilled message (`buildWhatsAppLink`,
`bookingMessage`). `PriceSelector` (client component) is the interactive group-size/tier picker on
product pages; it builds the WhatsApp link from whatever tier is currently selected. There's no
booking API — the WhatsApp link *is* the checkout.

### Images

There are no real photos yet. `PlaceholderImage` (`src/components/PlaceholderImage.tsx`) renders a
seeded `picsum.photos` image with a themed color-tint overlay and icon, keyed by `PlaceholderTheme`
(`src/lib/theme-icons.ts` maps each theme to a Tailwind gradient + `lucide-react` icon). It uses
`unoptimized` on `next/image` deliberately, since routing many unique picsum seeds through Next's
image proxy times out — **remove `unoptimized` when swapping in real local assets** placed in
`public/`, since local images should go through Next's optimizer normally. `next.config.ts` only
allowlists `picsum.photos`/`fastly.picsum.photos` as remote image hosts for this reason.

### Styling

Tailwind CSS v4, wired via `@tailwindcss/postcss`, no `tailwind.config.*` — theme tokens are CSS
custom properties in `src/app/globals.css` under `@theme inline` (`--color-primary`,
`--color-muted`, etc.), consumed as Tailwind classes like `bg-primary`, `text-muted-foreground`.
The whole site is a deliberately monochrome black/white design with **no dark-mode override** —
this is intentional, not an oversight; don't add a `prefers-color-scheme` variant. Custom font is
"Open Sauce One", loaded via `<link>` tags in `src/app/layout.tsx` (hoisted to `<head>` by
React/Next), with Geist as the CSS fallback var.

### Hooks (`src/hooks/`)

- `useIsMobile` — starts `false` to match SSR, corrects itself in a `useLayoutEffect` post-hydration
  to avoid a flash/mismatch. Follow this same pattern (state defaults to the SSR-safe value, real
  value applied in an effect) for any other viewport/media-query-dependent state.
- `useMaskPositions`, `useStaggeredReveal`, `useImageWidth` — landing-page-specific animation/layout
  hooks used by `src/components/landing/*`.

### Import alias

`@/*` maps to `src/*` (see `tsconfig.json`).
