import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TourCategory } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getCategoryStartingPrice } from "@/lib/pricing";

export type CategoryCardSize = "small" | "wide" | "large";

const IMAGE_CLASS: Record<CategoryCardSize, string> = {
  small: "h-32 w-full",
  wide: "h-36 w-full lg:h-full lg:flex-1",
  large: "h-48 w-full lg:h-full lg:flex-1",
};

const TITLE_CLASS: Record<CategoryCardSize, string> = {
  small: "text-sm font-semibold",
  wide: "text-base font-semibold",
  large: "text-xl font-bold",
};

export function CategoryCard({
  category,
  size = "small",
}: {
  category: TourCategory;
  size?: CategoryCardSize;
}) {
  const startingPrice = getCategoryStartingPrice(category.slug);

  return (
    <Link
      href={`/tours/${category.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-md shadow-black/5 transition-shadow hover:shadow-lg hover:shadow-black/10"
    >
      <PlaceholderImage
        theme={category.placeholderTheme}
        label={category.name}
        showCaption={false}
        className={IMAGE_CLASS[size]}
      />
      <div className={size === "large" ? "p-4 sm:p-5" : "p-3.5"}>
        <h3 className={`${TITLE_CLASS[size]} text-card-foreground`}>{category.name}</h3>
        <p
          className={`mt-1 text-muted-foreground ${
            size === "large" ? "line-clamp-2 text-sm" : "line-clamp-1 text-xs"
          }`}
        >
          {category.tagline}
        </p>
        <div className="mt-2.5 flex items-center justify-between">
          {startingPrice ? (
            <p className={size === "large" ? "text-sm" : "text-xs"}>
              <span className="text-muted-foreground">From </span>
              <span
                className={`font-mono font-extrabold text-primary ${
                  size === "large" ? "text-base" : "text-sm"
                }`}
              >
                {startingPrice}
              </span>
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
