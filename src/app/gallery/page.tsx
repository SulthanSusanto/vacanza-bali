import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at what's out there across Vacanza Bali's tours.",
};

// Alternating tile heights so the grid reads as a gallery, not a data table.
const TILE_HEIGHT = ["h-64", "h-80", "h-56", "h-72"];

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">Gallery</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Real photos from Vacanza Bali tours are on the way — for now, here&apos;s a preview of
        each category. Tap through for details and pricing.
      </p>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {categories.map((category, i) => (
          <Link
            key={category.slug}
            href={`/tours/${category.slug}`}
            className="group mb-4 block break-inside-avoid overflow-hidden rounded-xl shadow-md shadow-black/5 transition-shadow hover:shadow-lg"
          >
            <PlaceholderImage
              theme={category.placeholderTheme}
              label={category.name}
              className={`w-full ${TILE_HEIGHT[i % TILE_HEIGHT.length]}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
