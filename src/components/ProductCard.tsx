import Link from "next/link";
import { ArrowRight, Clock, Languages, Shield } from "lucide-react";
import type { PlaceholderTheme, TourProduct } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getStartingTier } from "@/lib/pricing";

function hasTag(includes: string[], keyword: string): boolean {
  return includes.some((item) => item.toLowerCase().includes(keyword));
}

export function ProductCard({
  tour,
  theme,
}: {
  tour: TourProduct;
  theme: PlaceholderTheme;
}) {
  const startingTier = getStartingTier(tour);
  const englishGuide = hasTag(tour.includes, "english");
  const insured = hasTag(tour.includes, "insurance");

  return (
    <Link
      href={`/tours/${tour.categorySlug}/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-card shadow-md shadow-black/5 transition-shadow hover:shadow-lg hover:shadow-black/10 sm:flex-row"
    >
      <PlaceholderImage
        theme={theme}
        label={tour.name}
        showCaption={false}
        className="h-36 w-full sm:h-auto sm:w-48 sm:shrink-0"
      />
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="text-base font-semibold text-card-foreground">{tour.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{tour.summary}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {(tour.duration || tour.pickupTime) && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {tour.duration ?? tour.pickupTime}
              </span>
            )}
            {englishGuide && (
              <span className="flex items-center gap-1 rounded-full bg-success px-2 py-0.5 text-[11px] font-medium text-success-foreground">
                <Languages className="h-3 w-3" /> English guide
              </span>
            )}
            {insured && (
              <span className="flex items-center gap-1 rounded-full bg-success px-2 py-0.5 text-[11px] font-medium text-success-foreground">
                <Shield className="h-3 w-3" /> Insured
              </span>
            )}
          </div>
        </div>
        <div className="mt-3 flex items-end justify-between">
          {startingTier && (
            <p className="text-sm text-muted-foreground">
              From{" "}
              <span className="font-mono text-lg font-extrabold text-primary">
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
