import Link from "next/link";
import type { CSSProperties } from "react";
import type { TourCategory, TourProduct } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getStartingTier } from "@/lib/pricing";

export function TourSummaryCard({
  tour,
  category,
  style,
}: {
  tour: TourProduct;
  category: TourCategory;
  style?: CSSProperties;
}) {
  const startingTier = getStartingTier(tour);

  return (
    <Link
      href={`/tours/${category.slug}/${tour.slug}`}
      style={style}
      className="group flex flex-col overflow-hidden rounded-xl bg-stone-50 transition-shadow hover:shadow-lg md:flex-row md:rounded-2xl"
    >
      <PlaceholderImage
        theme={category.placeholderTheme}
        label={tour.name}
        showCaption={false}
        className="h-40 w-full md:h-auto md:w-48 md:shrink-0"
      />
      <div className="flex flex-1 flex-col justify-between gap-3 p-5">
        <div>
          <h3 className="text-lg font-bold leading-snug text-black md:text-xl">{tour.name}</h3>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-black/70 md:text-sm">
            {tour.summary}
          </p>
        </div>
        <div className="flex items-center justify-between gap-3">
          {startingTier && (
            <p className="text-sm text-black/60">
              From{" "}
              <span className="text-lg font-bold text-black">{startingTier.priceLabel}</span>
              <span className="text-xs">
                /{startingTier.unit === "per-boat" ? "boat" : "person"}
              </span>
            </p>
          )}
          <span className="whitespace-nowrap text-sm font-semibold text-black underline underline-offset-4 group-hover:text-neutral-600">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
