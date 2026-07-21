import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/CategoryCard";

export const metadata: Metadata = {
  title: "Tours & Pricing",
  description:
    "The full Vacanza Bali pricelist — all 9 tour categories with real per-person pricing for your group size, booked direct on WhatsApp.",
};

export default function ToursIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">Tours & Pricing</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
        Pick a category to see every tour, real pricing for your group size, and what&apos;s
        included — booked direct on WhatsApp.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
