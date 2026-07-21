import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TourCategory } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getCategoryStartingPrice } from "@/lib/pricing";

export function CategoryCard({ category }: { category: TourCategory }) {
  const startingPrice = getCategoryStartingPrice(category.slug);

  return (
    <Link
      href={`/tours/${category.slug}`}
      className="group block overflow-hidden rounded-lg bg-card shadow-md shadow-black/5 transition-shadow hover:shadow-lg hover:shadow-black/10"
    >
      <PlaceholderImage
        theme={category.placeholderTheme}
        label={category.name}
        showCaption={false}
        className="h-32 w-full"
      />
      <div className="p-3.5">
        <h3 className="text-sm font-semibold text-card-foreground">{category.name}</h3>
        <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{category.tagline}</p>
        <div className="mt-2.5 flex items-center justify-between">
          {startingPrice ? (
            <p className="text-xs">
              <span className="text-muted-foreground">From </span>
              <span className="font-mono text-sm font-extrabold text-primary">{startingPrice}</span>
            </p>
          ) : (
            <span />
          )}
          <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
