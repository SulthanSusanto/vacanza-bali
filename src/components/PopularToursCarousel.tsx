import Link from "next/link";
import { Languages, Shield } from "lucide-react";
import { getTour } from "@/data/tours";
import { getCategory } from "@/data/categories";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getStartingTier } from "@/lib/pricing";

const FEATURED_SLUGS: { category: string; product: string }[] = [
  { category: "dolphin-tour", product: "dolphin-snorkeling" },
  { category: "ubud-trip", product: "ubud-day-trip-a" },
  { category: "mt-batur", product: "batur-jeep" },
  { category: "nusa-penida", product: "nusa-penida-day-trip" },
  { category: "uluwatu-trip", product: "uluwatu-day-trip-a" },
  { category: "fishing-trip", product: "fishing-trip" },
  { category: "village-adventure", product: "village-adventure" },
  { category: "cycling-tour", product: "cycling-tour" },
];

function hasTag(includes: string[], keyword: string): boolean {
  return includes.some((item) => item.toLowerCase().includes(keyword));
}

export function PopularToursCarousel() {
  const items = FEATURED_SLUGS.map(({ category, product }) => ({
    tour: getTour(category, product),
    category: getCategory(category),
  })).filter((s): s is { tour: NonNullable<typeof s.tour>; category: NonNullable<typeof s.category> } =>
    Boolean(s.tour && s.category)
  );

  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Popular tours</h2>
          <p className="mt-1 text-sm text-muted-foreground">A hand-picked spread across every category.</p>
        </div>
      </div>

      <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0">
        {items.map(({ tour, category }) => {
          const startingTier = getStartingTier(tour);
          const englishGuide = hasTag(tour.includes, "english");
          const insured = hasTag(tour.includes, "insurance");

          return (
            <Link
              key={tour.slug}
              href={`/tours/${category.slug}/${tour.slug}`}
              className="group w-64 shrink-0 overflow-hidden rounded-lg bg-card shadow-md shadow-black/5 transition-shadow hover:shadow-lg hover:shadow-black/10 sm:w-auto"
            >
              <PlaceholderImage
                theme={category.placeholderTheme}
                label={tour.name}
                showCaption={false}
                className="h-36 w-full"
              />
              <div className="p-4">
                <span className="inline-block rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
                  {category.name}
                </span>
                <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold text-card-foreground">
                  {tour.name}
                </h3>

                {(englishGuide || insured) && (
                  <div className="mt-2 flex gap-2">
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
                )}

                {startingTier && (
                  <p className="mt-3 text-sm">
                    <span className="text-muted-foreground">From </span>
                    <span className="font-mono text-lg font-extrabold text-primary">
                      {startingTier.priceLabel}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      /{startingTier.unit === "per-boat" ? "boat" : "person"}
                    </span>
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
