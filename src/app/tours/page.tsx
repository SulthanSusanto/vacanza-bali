import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "All Tours",
  description: "Every Vacanza Bali tour category, with real pricing for your group size.",
};

export default function ToursIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">All tours</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Nine categories, real pricing for your group size, booked direct on WhatsApp.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
