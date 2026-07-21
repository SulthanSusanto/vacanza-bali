import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { getToursByCategory } from "@/data/tours";
import { ferryTickets } from "@/data/ferry-tickets";
import { CategoryFilterBar } from "@/components/tours/CategoryFilterBar";
import { CategorySection } from "@/components/tours/CategorySection";
import { BackToTopButton } from "@/components/tours/BackToTopButton";

export const metadata: Metadata = {
  title: "Tours & Pricing",
  description:
    "The full Vacanza Bali pricelist — all 9 tour categories with real per-person pricing for your group size, booked direct on WhatsApp.",
};

export default function ToursPricingPage() {
  return (
    <>
      <section className="px-3 pb-6 pt-6 md:px-5 md:pb-10">
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] text-black">
          Tours & Pricing
        </h1>
        <p className="mt-3 max-w-xl text-sm font-semibold text-black/70 md:text-base">
          All prices are per person in Indonesian Rupiah (IDR) and scale down as your group
          grows. Message us on WhatsApp to book or combine with other travelers.
        </p>
      </section>

      <CategoryFilterBar />

      {categories.map((category) =>
        category.slug === "boat-tickets" ? (
          <CategorySection key={category.slug} category={category} ferryTickets={ferryTickets} />
        ) : (
          <CategorySection
            key={category.slug}
            category={category}
            tours={getToursByCategory(category.slug)}
          />
        )
      )}

      <BackToTopButton />
    </>
  );
}
