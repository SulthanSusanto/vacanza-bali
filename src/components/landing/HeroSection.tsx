"use client";

import { useRef } from "react";
import Link from "next/link";
import { useStaggeredReveal } from "@/hooks/useStaggeredReveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Placeholder — swap for Vacanza's own photography (Lovina dolphins, sunrise
// treks, rice terraces) before shipping; generic stock undercuts a real
// tour brand's credibility.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1510037056621-d2508afab0dd?auto=format&fit=crop&w=1920&q=85";

const FEATURE_BARS = [
  "Private English-Speaking Drivers",
  "Small-Group & Shared Pricing",
  "Book Direct via WhatsApp",
];

const WHATSAPP_HREF = buildWhatsAppLink("Hi Vacanza Bali, I'd like a free quote for my trip.");

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reveal = useStaggeredReveal(sectionRef);

  return (
    <section ref={sectionRef} className="relative h-[100dvh] w-full overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Hiker with backpack watching sunrise over Mount Agung from the Mount Batur trekking route"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
      />
      {/* Dark scrim — guarantees the white text reads regardless of what's
          underneath it in the source photo, rather than relying on the
          photo happening to be dark in the right places. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />

      <div className="relative z-10 flex h-full flex-col px-4 pb-8 pt-24 md:px-8 md:pb-14 md:pt-28">
        <div
          style={reveal.getAnimStyle(0)}
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:gap-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {FEATURE_BARS.map((label) => (
            <span
              key={label}
              className="shrink-0 whitespace-nowrap rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm md:px-4 md:text-sm"
            >
              {label}
            </span>
          ))}
        </div>

        <p
          style={reveal.getAnimStyle(1)}
          className="mt-6 max-w-[240px] text-xs font-semibold leading-4 text-white/90 md:max-w-sm md:text-sm md:leading-5"
        >
          From dolphin encounters to sunrise treks,
          <br />
          we handle every detail of your Bali trip
        </p>

        <div style={reveal.getAnimStyle(2)} className="mt-auto">
          <span className="mb-2 block text-xs font-semibold text-white/90 md:text-sm">
            Trusted Tour Operator in Bali
          </span>
          <h1 className="text-[clamp(3rem,11vw,10rem)] font-bold leading-[0.85] tracking-tight text-white">
            Explore
            <br />
            Bali
          </h1>
        </div>

        <div style={reveal.getAnimStyle(3)} className="mt-6 flex flex-wrap gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105 md:px-8 md:py-4 md:text-base"
          >
            Free Quote on WhatsApp
          </a>
          <Link
            href="/tours"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-transform hover:scale-105 md:px-8 md:py-4 md:text-base"
          >
            See All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
