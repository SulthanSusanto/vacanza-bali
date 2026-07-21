"use client";

import { useRef } from "react";
import { useMaskPositions } from "@/hooks/useMaskPositions";
import { useImageWidth } from "@/hooks/useImageWidth";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useStaggeredReveal } from "@/hooks/useStaggeredReveal";
import { MaskedCard } from "@/components/landing/MaskedCard";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Placeholder — swap for real Vacanza photography before shipping.
const SECTION2_IMAGE =
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1280&q=85";

// Full pricelist covers 10 categories with per-group-size tiers — see
// /tours for the complete pricing. These four are the landing-page
// signature picks.
const tourPackages = [
  { name: "Dolphin\nTour", num: "From IDR 450K", active: true },
  { name: "Ubud Day\nTrip", num: "From IDR 695K", active: false },
  { name: "Mt. Batur\nSunrise Trek", num: "From IDR 420K", active: false },
  { name: "Nusa Penida\nDay Trip", num: "From IDR 450K", active: false },
];

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

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen w-full flex-col gap-1.5 overflow-hidden px-3 pb-1.5 pt-1.5 md:h-screen md:gap-2 md:px-5 md:pb-2 md:pt-2"
    >
      <div className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-1.5 md:grid-cols-2 md:grid-rows-[1fr_1fr_0.8fr] md:gap-2">
        {/* Card 0 — Bali Experiences */}
        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[0] = el;
          }}
          bgImage={SECTION2_IMAGE}
          position={positions[0]}
          imageWidth={imageWidth}
          focalX={focalX}
          className="relative min-h-[160px] overflow-hidden rounded-xl md:min-h-0 md:rounded-2xl"
          style={reveal.getAnimStyle(0)}
        >
          <h2 className="absolute left-5 top-4 z-10 text-2xl font-bold text-white md:left-7 md:top-6 md:text-3xl md:text-black">
            Bali Experiences
          </h2>
          <p className="absolute bottom-4 left-5 z-10 text-xs font-semibold text-white md:bottom-6 md:left-7 md:text-sm md:text-black">
            Our most-loved day trips
          </p>
        </MaskedCard>

        {/* Card 1 — group booking CTA, spans 2 rows on desktop */}
        <MaskedCard
          cardRef={(el) => {
            cardRefs.current[1] = el;
          }}
          bgImage={SECTION2_IMAGE}
          position={positions[1]}
          imageWidth={imageWidth}
          focalX={focalX}
          className="relative min-h-[200px] overflow-hidden rounded-xl md:min-h-0 md:rounded-2xl md:row-span-2"
          style={reveal.getAnimStyle(1)}
        >
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
          position={positions[2]}
          imageWidth={imageWidth}
          focalX={focalX}
          className="relative min-h-[160px] overflow-hidden rounded-xl md:min-h-0 md:rounded-2xl"
          style={reveal.getAnimStyle(2)}
        >
          <h2 className="absolute left-5 top-4 z-10 text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] text-white md:left-7 md:top-6 md:text-black">
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
          position={positions[3]}
          imageWidth={imageWidth}
          focalX={focalX}
          className="relative min-h-[200px] overflow-hidden rounded-xl md:col-span-2 md:min-h-0 md:rounded-2xl"
          style={reveal.getAnimStyle(3)}
        >
          <div className="absolute inset-0 z-10 flex flex-wrap gap-1.5 p-2 md:flex-nowrap md:gap-2 md:p-3">
            {tourPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex min-w-[calc(50%-4px)] flex-1 flex-col justify-between rounded-xl p-3 md:min-w-0 md:rounded-2xl md:p-5 ${
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
                  className={`flex items-center justify-center self-end whitespace-nowrap rounded-full border px-3 py-1.5 text-[10px] font-semibold md:px-4 md:py-2 md:text-xs ${
                    pkg.active ? "border-black text-black" : "border-white text-white"
                  }`}
                >
                  {pkg.num}
                </span>
              </div>
            ))}
          </div>
        </MaskedCard>
      </div>
    </section>
  );
}
