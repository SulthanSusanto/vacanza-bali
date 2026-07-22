"use client";

import { useRef } from "react";
import Link from "next/link";
import { useMaskPositions } from "@/hooks/useMaskPositions";
import { useImageWidth } from "@/hooks/useImageWidth";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useStaggeredReveal } from "@/hooks/useStaggeredReveal";
import { MaskedCard } from "@/components/landing/MaskedCard";
import { getTour } from "@/data/tours";
import { getStartingTier } from "@/lib/pricing";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Placeholder — swap for real Vacanza photography before shipping.
const SECTION2_IMAGE =
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1920&q=85";

// On mobile the 4 cards below fall back to a plain cover background (see
// MaskedCard's isMobile branch) instead of the desktop windowing math, but
// they all share SECTION2_IMAGE — without an offset per card they'd all show
// the exact same centered crop stacked back to back. Cheap fix: cycle a
// distinct crop per card instead of reintroducing the measurement-based
// windowing on mobile.
const MOBILE_CROPS = ["30% 25%", "70% 15%", "50% 65%", "20% 70%"];

// These four are the landing-page signature picks — real pricing pulled
// from src/data/tours.ts (the source of truth) so this can't drift stale.
// Full pricelist covers 10 categories with per-group-size tiers, see /tours.
const FEATURED_TOURS = [
  { category: "dolphin-tour", product: "dolphin-snorkeling", displayName: "Dolphin\nTour", active: true },
  { category: "ubud-trip", product: "ubud-day-trip-a", displayName: "Ubud Day\nTrip", active: false },
  {
    category: "mt-batur",
    product: "batur-trekking",
    displayName: "Mt. Batur\nSunrise Trek",
    active: false,
  },
  {
    category: "nusa-penida",
    product: "nusa-penida-day-trip",
    displayName: "Nusa Penida\nDay Trip",
    active: false,
  },
];

function formatShortPrice(priceLabel: string): string {
  const amount = parseInt(priceLabel.replace(/[^0-9]/g, ""), 10);
  return `From IDR ${Math.round(amount / 1000)}K`;
}

const WHATSAPP_GROUP_HREF = buildWhatsAppLink(
  "Hi Vacanza Bali, we're traveling together and would like to combine into shared transport."
);

export function ExperiencesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reveal = useStaggeredReveal(sectionRef);
  const isMobile = useIsMobile();

  const positions = useMaskPositions(sectionRef, cardRefs);
  const imageWidth = useImageWidth(SECTION2_IMAGE, positions[0]?.sh ?? 0);
  const focalX = isMobile ? 0.65 : 0.8;

  const tourPackages = FEATURED_TOURS.map(({ category, product, displayName, active }) => {
    const tour = getTour(category, product);
    const startingTier = tour ? getStartingTier(tour) : undefined;
    return {
      name: displayName,
      num: startingTier ? formatShortPrice(startingTier.priceLabel) : "",
      active,
      href: `/tours/${category}/${product}`,
    };
  });

  return (
    <section
      ref={sectionRef}
      className="flex w-full flex-col gap-1.5 overflow-hidden px-3 pb-1.5 pt-1.5 md:h-[100dvh] md:gap-2 md:px-5 md:pb-2 md:pt-2"
    >
      {/* No min-h-[100dvh] on mobile: that forced this flex column to at
          least one full viewport, and since the grid below is flex-1 with
          auto-sized rows, Grid's default align-content:stretch inflated
          every card well past its min-height to fill the leftover space —
          the compact mobile heights below were being silently overridden.
          Letting the section size to its (now-compact) content and packing
          rows at content-start keeps them honest. Desktop keeps h-[100dvh]
          with fr-based rows, which aren't subject to this. */}
      <div className="grid min-h-0 flex-1 content-start grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-1.5 md:grid-cols-2 md:grid-rows-[1fr_1fr_0.8fr] md:gap-2">
        {/* Card 0 — Bali Experiences */}
        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[0] = el;
          }}
          bgImage={SECTION2_IMAGE}
          alt="Bali temple beside a lake at dusk"
          position={positions[0]}
          imageWidth={imageWidth}
          focalX={focalX}
          isMobile={isMobile}
          mobileBackgroundPosition={MOBILE_CROPS[0]}
          className="relative min-h-[120px] overflow-hidden rounded-xl md:min-h-0 md:rounded-2xl"
          style={reveal.getAnimStyle(0)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
          <h2 className="absolute left-5 top-4 z-10 text-2xl font-bold text-white md:left-7 md:top-6 md:text-3xl">
            Bali Experiences
          </h2>
          <p className="absolute bottom-4 left-5 z-10 text-xs font-semibold text-white md:bottom-6 md:left-7 md:text-sm">
            Our most-loved day trips
          </p>
        </MaskedCard>

        {/* Card 1 — group booking CTA, spans 2 rows on desktop */}
        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[1] = el;
          }}
          bgImage={SECTION2_IMAGE}
          alt="Bali temple beside a lake at dusk"
          position={positions[1]}
          imageWidth={imageWidth}
          focalX={focalX}
          isMobile={isMobile}
          mobileBackgroundPosition={MOBILE_CROPS[1]}
          className="relative min-h-[150px] overflow-hidden rounded-xl md:min-h-0 md:rounded-2xl md:row-span-2"
          style={reveal.getAnimStyle(1)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35" />
          <p className="absolute bottom-16 left-5 z-10 text-xs font-semibold leading-4 text-white md:bottom-20 md:left-7 md:text-sm md:leading-5">
            Traveling with friends?
            <br />
            Message us to combine into shared transport.
          </p>
          <a
            href={WHATSAPP_GROUP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-10 rounded-full bg-white px-5 py-3 text-base font-bold text-black transition-transform hover:scale-105 md:bottom-6 md:right-6 md:px-8 md:py-5 md:text-xl"
          >
            WhatsApp Us
          </a>
        </MaskedCard>

        {/* Card 2 — Sunrise trekking */}
        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[2] = el;
          }}
          bgImage={SECTION2_IMAGE}
          alt="Bali temple beside a lake at dusk"
          position={positions[2]}
          imageWidth={imageWidth}
          focalX={focalX}
          isMobile={isMobile}
          mobileBackgroundPosition={MOBILE_CROPS[2]}
          className="relative min-h-[120px] overflow-hidden rounded-xl md:min-h-0 md:rounded-2xl"
          style={reveal.getAnimStyle(2)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/5 to-black/30" />
          <h2 className="absolute left-5 top-4 z-10 text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] text-white md:left-7 md:top-6">
            Sunrise
            <br />
            trekking
          </h2>
        </MaskedCard>

        {/* Card 3 — Signature tours, full width */}
        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[3] = el;
          }}
          bgImage={SECTION2_IMAGE}
          alt="Bali temple beside a lake at dusk"
          position={positions[3]}
          imageWidth={imageWidth}
          focalX={focalX}
          isMobile={isMobile}
          mobileBackgroundPosition={MOBILE_CROPS[3]}
          className="relative min-h-[180px] overflow-hidden rounded-xl md:col-span-2 md:min-h-0 md:rounded-2xl"
          style={reveal.getAnimStyle(3)}
        >
          {/* Horizontal scroll on mobile (4 cards stacked as a 2x2 wrap ate
              two full rows of an already-tight mobile section) — reverts to
              the original nowrap flex row at md, unchanged from before. */}
          <div className="absolute inset-0 z-10 flex gap-1.5 overflow-x-auto p-2 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-nowrap md:gap-2 md:overflow-visible md:p-3 [&::-webkit-scrollbar]:hidden">
            {tourPackages.map((pkg) => (
              <Link
                key={pkg.name}
                href={pkg.href}
                className={`flex w-36 shrink-0 flex-col justify-between rounded-xl p-3 transition-transform hover:scale-[1.02] md:w-auto md:min-w-0 md:flex-1 md:rounded-2xl md:p-5 ${
                  pkg.active ? "bg-white/90 backdrop-blur-md" : "bg-white/20 backdrop-blur-xl"
                }`}
              >
                <h3
                  className={`whitespace-pre-line text-xl font-bold leading-[1.05] md:text-4xl ${
                    pkg.active ? "text-black" : "text-white"
                  }`}
                >
                  {pkg.name}
                </h3>
                <span
                  className={`flex items-center justify-center self-end whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold md:px-4 md:py-2 ${
                    pkg.active ? "border-black text-black" : "border-white text-white"
                  }`}
                >
                  {pkg.num}
                </span>
              </Link>
            ))}
          </div>
        </MaskedCard>
      </div>
    </section>
  );
}
