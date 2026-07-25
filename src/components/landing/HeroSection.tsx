'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStaggeredReveal } from '@/hooks/useStaggeredReveal';
import { useIsMobile } from '@/hooks/useIsMobile';
import { buildWhatsAppLink } from '@/lib/whatsapp';

// Landscape-sourced photos with real guests in them, for desktop — a
// portrait photo center-cropped to a wide frame loses the composition (or
// the person in it), so these are picked specifically for their orientation,
// not just reused from the mobile set.
const DESKTOP_SLIDES = [
  {
    src: '/photos/mt-batur/hiker-mount-batur.webp',
    alt: 'A hiker taking in the sunrise view above the clouds at Mt. Batur',
  },
  {
    src: '/photos/ubud-trip/guests/atv-group-mud-crossing.webp',
    alt: 'A group celebrating on their ATVs after a muddy Ubud day trip',
  },
  {
    src: '/photos/ubud-trip/guests/atv-river-convoy.webp',
    alt: 'Guests riding ATVs through a jungle river crossing in Ubud',
  },
  {
    src: '/photos/village-adventure/rice-planting-couple.webp',
    alt: 'A couple planting rice on a Bali village adventure',
  },
];

// Portrait-sourced photos with real guests in them, for mobile — same
// reasoning in reverse. There's a much deeper pool of portrait guest photos
// available (most were shot on phones held vertically), so mobile gets one
// more slide than desktop rather than repeating one to force parity.
const MOBILE_SLIDES = [
  {
    src: '/photos/mt-batur/guests/couple-sunrise-viewpoint.webp',
    alt: 'A couple watching the sunrise above the clouds at Mt. Batur',
  },
  {
    src: '/photos/ubud-trip/guests/atv-waterfall-splash.webp',
    alt: 'A guest riding an ATV through a waterfall on an Ubud day trip',
  },
  {
    src: '/photos/ubud-trip/guests/tirta-empul-flower-offering.webp',
    alt: 'A guest holding a flower offering at Tirta Empul holy spring',
  },
  {
    src: '/photos/mt-batur/guests/jeep-group-sunrise-celebration.webp',
    alt: 'Guests celebrating sunrise on a Mt. Batur jeep tour',
  },
  {
    src: '/photos/ubud-trip/guests/rafting-ayung-river-2.webp',
    alt: 'Guests whitewater rafting the Ayung River in Ubud',
  },
];

const SLIDE_INTERVAL_MS = 2000;

const FEATURE_BARS = [
  'Private English-Speaking Drivers',
  'Small-Group & Shared Pricing',
  'Book Direct via WhatsApp',
];

const WHATSAPP_HREF = buildWhatsAppLink(
  "Hi Vacanza Bali, I'd like a free quote for my trip.",
);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reveal = useStaggeredReveal(sectionRef);
  const isMobile = useIsMobile();
  const slides = isMobile ? MOBILE_SLIDES : DESKTOP_SLIDES;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);

  // Desktop/mobile have different slide counts — deriving the display index
  // with modulo (rather than storing a separately-clamped state) means it's
  // always in bounds for whichever list is active, even if the viewport
  // crosses the breakpoint mid-session and slides.length changes underneath
  // a stale activeSlide value.
  const displaySlide = activeSlide % slides.length;

  useEffect(() => {
    function handleVisibilityChange() {
      setIsTabHidden(document.hidden);
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (isHovered || isTabHidden || prefersReducedMotion) return;

    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isHovered, isTabHidden, activeSlide, slides.length]);

  function goToPrevious() {
    setActiveSlide((i) => (i - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setActiveSlide((i) => (i + 1) % slides.length);
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] w-full overflow-hidden md:snap-start md:snap-always"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === displaySlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
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
            Private
            <br />
            Tours
          </h1>
        </div>

        <div
          style={reveal.getAnimStyle(3)}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
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

          {/* Slide controls live here, not floating mid-image — the "Private
              Tours" headline above is huge and bottom-anchored, so at most
              viewport heights a vertically-centered overlay would sit right
              on top of it. This row is the one zone whose height is always
              reserved by real content. */}
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous photo"
              className="rounded-full border border-white/40 bg-white/10 p-2.5 text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20 md:p-3"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next photo"
              className="rounded-full border border-white/40 bg-white/10 p-2.5 text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20 md:p-3"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
