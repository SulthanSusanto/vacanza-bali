"use client";

import { useRef } from "react";
import { useMaskPositions } from "@/hooks/useMaskPositions";
import { useImageWidth } from "@/hooks/useImageWidth";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useStaggeredReveal } from "@/hooks/useStaggeredReveal";
import { MaskedCard } from "@/components/landing/MaskedCard";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Placeholder — swap for Vacanza's own photography (Lovina dolphins, sunrise
// treks, rice terraces) before shipping; generic stock undercuts a real
// tour brand's credibility.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1280&q=85";

const FEATURE_BARS = [
  "Private English-Speaking Drivers",
  "Small-Group & Shared Pricing",
  "Book Direct via WhatsApp",
];

const WHATSAPP_HREF = buildWhatsAppLink("Hi Vacanza Bali, I'd like a free quote for my trip.");

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reveal = useStaggeredReveal(sectionRef);
  const isMobile = useIsMobile();

  const positions = useMaskPositions(sectionRef, cardRefs);
  const imageWidth = useImageWidth(HERO_IMAGE, positions[0]?.sh ?? 0);
  const focalX = isMobile ? 0.7 : 0.8;

  return (
    <section
      ref={sectionRef}
      className="flex h-screen w-full flex-col gap-1.5 overflow-hidden px-3 pb-1.5 pt-24 md:gap-2 md:px-5 md:pb-2 md:pt-24"
    >
      {FEATURE_BARS.map((label, i) => (
        <MaskedCard
          key={label}
          cardRef={(el) => {
            cardRefs.current[i] = el;
          }}
          bgImage={HERO_IMAGE}
          position={positions[i]}
          imageWidth={imageWidth}
          focalX={focalX}
          className="relative h-14 w-full shrink-0 overflow-hidden rounded-xl md:h-20 md:rounded-2xl"
          style={reveal.getAnimStyle(i)}
        >
          <span className="relative z-10 flex h-full items-center justify-center text-center text-lg font-bold text-black md:text-3xl">
            {label}
          </span>
        </MaskedCard>
      ))}

      <MaskedCard
        cardRef={(el) => {
          cardRefs.current[3] = el;
        }}
        bgImage={HERO_IMAGE}
        position={positions[3]}
        imageWidth={imageWidth}
        focalX={focalX}
        className="relative min-h-0 w-full flex-1 overflow-hidden rounded-xl md:rounded-2xl"
        style={reveal.getAnimStyle(3)}
      >
        <p className="absolute left-4 top-4 z-10 max-w-[200px] text-xs font-semibold leading-4 text-black md:left-7 md:top-7 md:max-w-[300px] md:text-sm md:leading-5">
          From dolphin encounters to sunrise treks,
          <br />
          we handle every detail of your Bali trip
        </p>

        <div className="absolute bottom-5 left-3 z-10 md:bottom-8 md:left-4">
          <span className="mb-1 block text-xs font-semibold text-black md:mb-2 md:text-sm">
            Trusted Tour Operator in Bali
          </span>
          <h1 className="text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.79] tracking-tight text-black">
            Explore
            <br />
            Bali
          </h1>
        </div>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-4 z-10 text-xs font-semibold text-white md:bottom-10 md:right-8 md:text-sm"
        >
          Free Quote on WhatsApp
        </a>
      </MaskedCard>
    </section>
  );
}
