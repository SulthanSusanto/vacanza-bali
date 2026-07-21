"use client";

import { useRef } from "react";
import { useStaggeredReveal } from "@/hooks/useStaggeredReveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// Placeholders — swap for real Vacanza photography before shipping.
// (Original SECTION3_IMG1 Unsplash ID 404s — reusing the verified-working
// temple/coastline photo from Section 2 here instead of guessing a new one.)
const SECTION3_IMG1 =
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1280&q=85";
const SECTION3_IMG2 =
  "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1280&q=85";
const SECTION3_BG =
  "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1280&q=85";

const WHATSAPP_CUSTOM_HREF = buildWhatsAppLink(
  "Hi Vacanza Bali, I'd like to put together a custom tour package."
);
const WHATSAPP_PLAN_HREF = buildWhatsAppLink("Hi Vacanza Bali, I'd like to start planning my trip.");

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
      className="flex min-h-screen w-full flex-col gap-1.5 overflow-hidden px-3 pb-1.5 pt-1.5 md:h-screen md:gap-2 md:px-5 md:pb-2 md:pt-2"
    >
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-1.5 md:grid-cols-2 md:gap-2">
        <div className="flex flex-col gap-1.5 md:gap-2">
          <div
            style={reveal.getAnimStyle(0)}
            className="flex min-h-[180px] flex-[1.2] flex-col justify-between rounded-xl bg-stone-50 p-5 md:min-h-0 md:rounded-2xl md:p-7"
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
            className="flex min-h-[140px] flex-1 gap-1.5 md:min-h-0 md:gap-2"
          >
            <div className="flex-1 overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src={SECTION3_IMG1}
                alt="Uluwatu clifftop temple at sunset"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src={SECTION3_IMG2}
                alt="Ubud rice terraces"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div
            style={reveal.getAnimStyle(2)}
            className="flex min-h-[160px] flex-[0.8] items-end justify-between rounded-xl bg-zinc-200 p-5 md:min-h-0 md:rounded-2xl md:p-7"
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
          className="relative min-h-[350px] overflow-hidden rounded-xl md:min-h-0 md:rounded-2xl"
        >
          <img
            src={SECTION3_BG}
            alt="Kelingking Beach cliff view, Nusa Penida"
            className="h-full w-full object-cover"
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

            <div className="flex h-36 flex-1 flex-col justify-between rounded-xl bg-white/20 p-3 backdrop-blur-xl md:h-52 md:rounded-2xl md:p-5">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
