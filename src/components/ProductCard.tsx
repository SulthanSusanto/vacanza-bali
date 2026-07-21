import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { PlaceholderTheme, TourProduct } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getStartingTier } from "@/lib/pricing";

export function ProductCard({
  tour,
  theme,
}: {
  tour: TourProduct;
  theme: PlaceholderTheme;
}) {
  const startingTier = getStartingTier(tour);

  return (
    <Link
      href={`/tours/${tour.categorySlug}/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg sm:flex-row"
    >
      <PlaceholderImage
        theme={theme}
        label={tour.name}
        showCaption={false}
        className="h-40 w-full sm:h-auto sm:w-56 sm:shrink-0"
      />
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-display text-lg font-semibold text-card-foreground">{tour.name}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{tour.summary}</p>
          {(tour.duration || tour.pickupTime) && (
            <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {tour.duration ?? tour.pickupTime}
            </p>
          )}
        </div>
        <div className="mt-4 flex items-end justify-between">
          {startingTier && (
            <p className="text-sm text-muted-foreground">
              From{" "}
              <span className="font-mono text-base font-semibold text-primary">
                {startingTier.priceLabel}
              </span>
              <span className="text-xs">/{startingTier.unit === "per-boat" ? "boat" : "person"}</span>
            </p>
          )}
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
