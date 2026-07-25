import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/CategoryCard";
import { Hero } from "@/components/Hero";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Tours & Pricing",
  description:
    "The full Vacanza Bali pricelist — all 9 tour categories with real per-person pricing for your group size, booked direct on WhatsApp.",
};

export default function ToursIndexPage() {
  return (
    <>
      <Hero
        theme="cliff"
        image="/photos/bali/ulun-danu-temple-day.webp"
        title="Tours & Pricing"
        subtitle="Pick a category to see every tour, real pricing for your group size, and what's included — booked direct on WhatsApp."
        size="md"
      />

      <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Decorative side rails — only shown once the viewport is wide
            enough to leave real gutter space outside this max-w-6xl column,
            so they never affect layout below that. Fixed aspect ratio (not
            inset-y-0/h-full) so the crop stays a normal photo instead of
            stretching across the whole category grid. Purely visual:
            excluded from the accessibility tree and from tab order. */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-full top-0 mr-6 hidden aspect-[3/4] w-32 overflow-hidden rounded-2xl 2xl:block"
        >
          <PlaceholderImage
            theme="jungle"
            label="Balinese stone carving"
            src="/photos/bali/barong-stone-carving-card.webp"
            showCaption={false}
            className="h-full w-full"
          />
          <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-r from-transparent to-background" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute left-full top-0 ml-6 hidden aspect-[3/4] w-32 overflow-hidden rounded-2xl 2xl:block"
        >
          <PlaceholderImage
            theme="sunrise"
            label="Villa pool deck"
            src="/photos/bali/villa-pool-deck-card.webp"
            showCaption={false}
            className="h-full w-full"
          />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-l from-transparent to-background" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
