"use client";

import { useRef } from "react";
import Image from "next/image";
import { useStaggeredReveal } from "@/hooks/useStaggeredReveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const SECTION3_IMG1 = "/photos/ubud-trip/guests/atv-splash-family-card.webp";
const SECTION3_IMG2 = "/photos/ubud-trip/tegalalang-rice-terrace-card.webp";
const SECTION3_BG = "/photos/nusa-penida/kelingking-beach-cliff.webp";

const WHATSAPP_CUSTOM_HREF = buildWhatsAppLink(
  "Hi Vacanza Bali, I'd like to put together a custom tour package."
);
const WHATSAPP_PLAN_HREF = buildWhatsAppLink("Hi Vacanza Bali, I'd like to start planning my trip.");
const WHATSAPP_INFO_HREF = buildWhatsAppLink(
  "Hi Vacanza Bali, what should I know or bring before booking a tour?"
);

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`rotate-[-45deg] ${className ?? ""}`}
    >
      <path
        d="M1 7h12m0 0L8 2m5 5L8 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FullDayToursSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reveal = useStaggeredReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="flex w-full flex-col gap-1.5 overflow-hidden px-3 pb-1.5 pt-1.5 md:h-[100dvh] md:snap-start md:snap-always md:gap-2 md:px-5 md:pb-2 md:pt-2"
    >
      {/* Same fix as ExperiencesSection: no forced min-h-[100dvh] on mobile.
          Grid items stretch to fill their row by default, which was handing
          the left column's flex-[1.2]/flex-1/flex-[0.8] children extra
          height to grow into whenever the section got inflated to a full
          viewport — undoing the compact min-heights below.
          content-start (mobile) keeps the single row sized to its compact
          content instead of stretching into the extra space; md:content-stretch
          restores that stretch on desktop, where the grid row needs to fill
          the section's full md:h-[100dvh] for the flex-[1.2]/1/0.8 children
          below to have real room to grow into — without it the row just
          hugs its content height and those children collapse toward zero. */}
      <div className="grid min-h-0 flex-1 content-start items-start grid-cols-1 gap-1.5 md:grid-cols-2 md:content-stretch md:items-stretch md:gap-2">
        <div className="flex flex-col gap-1.5 md:gap-2">
          <div
            style={reveal.getAnimStyle(0)}
            className="flex min-h-[140px] flex-[1.2] flex-col justify-between rounded-xl bg-stone-50 p-5 md:min-h-0 md:rounded-2xl md:p-7"
          >
            <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] text-black">
              Full-Day
              <br />
              Tours
            </h2>
            <p className="text-xs font-semibold text-black md:text-sm">
              From Waterfalls to Volcanoes
            </p>
          </div>

          <div
            style={reveal.getAnimStyle(1)}
            className="flex min-h-[110px] flex-1 gap-1.5 md:min-h-0 md:gap-2"
          >
            <div className="relative flex-1 overflow-hidden rounded-xl md:rounded-2xl">
              <Image
                src={SECTION3_IMG1}
                alt="A family riding an ATV through a splash on an Ubud day trip"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 overflow-hidden rounded-xl md:rounded-2xl">
              <Image
                src={SECTION3_IMG2}
                alt="Ubud rice terraces"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            style={reveal.getAnimStyle(2)}
            className="flex min-h-[130px] flex-[0.8] items-end justify-between rounded-xl bg-zinc-200 p-5 md:min-h-0 md:rounded-2xl md:p-7"
          >
            <div>
              <p className="mb-2 text-xs font-semibold text-black md:mb-3 md:text-sm">
                Book Direct
              </p>
              <h3 className="text-xl font-bold leading-6 text-black md:text-3xl md:leading-8">
                Custom
                <br />
                Tour
                <br />
                Packages
              </h3>
            </div>
            <a
              href={WHATSAPP_CUSTOM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-3 text-base font-bold text-black transition-transform hover:scale-105 md:px-8 md:py-5 md:text-xl"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div
          style={reveal.getAnimStyle(3)}
          className="relative min-h-[280px] overflow-hidden rounded-xl md:min-h-0 md:rounded-2xl"
        >
          <Image
            src={SECTION3_BG}
            alt="Kelingking Beach cliff view, Nusa Penida"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute bottom-3 left-3 right-3 flex gap-1.5 md:bottom-5 md:left-5 md:right-5 md:gap-2">
            <a
              href={WHATSAPP_PLAN_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-36 flex-1 flex-col justify-between rounded-xl bg-white p-3 text-black md:h-52 md:rounded-2xl md:p-5"
            >
              <h4 className="text-lg font-bold leading-5 md:text-2xl md:leading-7">
                Plan Your
                <br />
                Bali Trip
                <br />
                Today
              </h4>
              <span className="flex h-9 w-9 items-center justify-center self-end rounded-full border border-black md:h-12 md:w-12">
                <ArrowIcon />
              </span>
            </a>

            <a
              href={WHATSAPP_INFO_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-36 flex-1 flex-col justify-between rounded-xl bg-white/20 p-3 backdrop-blur-xl md:h-52 md:rounded-2xl md:p-5"
            >
              <h4 className="text-lg font-bold leading-5 text-white md:text-2xl md:leading-7">
                What to
                <br />
                Bring &amp;
                <br />
                Know
              </h4>
              <span className="flex h-9 w-9 items-center justify-center self-end rounded-full border border-white md:h-12 md:w-12">
                <ArrowIcon className="text-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
