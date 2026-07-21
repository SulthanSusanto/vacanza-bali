"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTour } from "@/data/tours";
import { getCategory } from "@/data/categories";
import { PlaceholderImage } from "@/components/PlaceholderImage";

const SLIDE_SLUGS: { category: string; product: string }[] = [
  { category: "dolphin-tour", product: "dolphin-snorkeling" },
  { category: "uluwatu-trip", product: "uluwatu-day-trip-a" },
  { category: "nusa-penida", product: "nusa-penida-day-trip" },
];

export function PromoBanner() {
  const slides = SLIDE_SLUGS.map(({ category, product }) => ({
    tour: getTour(category, product),
    category: getCategory(category),
  })).filter((s): s is { tour: NonNullable<typeof s.tour>; category: NonNullable<typeof s.category> } =>
    Boolean(s.tour && s.category)
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) return null;
  const active = slides[index];

  return (
    <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
        <PlaceholderImage
          theme={active.category.placeholderTheme}
          label={active.tour.name}
          showCaption={false}
          className="h-full w-full"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/20 to-transparent">
          <div className="p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
              {active.category.name}
            </p>
            <h2 className="mt-2 max-w-md text-2xl font-bold text-white sm:text-3xl">
              {active.tour.name}
            </h2>
            <p className="mt-2 max-w-sm text-sm text-white/85 sm:text-base">{active.tour.summary}</p>
            <Link
              href={`/tours/${active.category.slug}/${active.tour.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              See prices
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.tour.slug}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
