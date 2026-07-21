import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TourCategory } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export function CategoryCard({ category }: { category: TourCategory }) {
  return (
    <Link
      href={`/tours/${category.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
    >
      <PlaceholderImage
        theme={category.placeholderTheme}
        label={category.name}
        showCaption={false}
        className="h-44 w-full"
      />
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-card-foreground">{category.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{category.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Explore tours
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
