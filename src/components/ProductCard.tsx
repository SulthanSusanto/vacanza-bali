import Link from "next/link";
import { ArrowRight, Clock, Languages, MessageCircle, Shield } from "lucide-react";
import type { TourCategory, TourProduct } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getStartingTier } from "@/lib/pricing";
import { bookingMessage, buildWhatsAppLink } from "@/lib/whatsapp";

function hasTag(includes: string[], keyword: string): boolean {
  return includes.some((item) => item.toLowerCase().includes(keyword));
}

export function ProductCard({
  tour,
  category,
}: {
  tour: TourProduct;
  category: TourCategory;
}) {
  const startingTier = getStartingTier(tour);
  const englishGuide = hasTag(tour.includes, "english");
  const insured = hasTag(tour.includes, "insurance");
  const whatsappHref = buildWhatsAppLink(
    bookingMessage(tour.name, startingTier?.people, startingTier?.label)
  );

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl md:rounded-2xl bg-card shadow-md shadow-black/5 transition-shadow hover:shadow-lg hover:shadow-black/10 sm:flex-row">
      <Link
        href={`/tours/${tour.categorySlug}/${tour.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`View details for ${tour.name}`}
      />
      <PlaceholderImage
        theme={category.placeholderTheme}
        label={tour.name}
        src={tour.image ?? category.cardImage}
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
            {tour.highlights?.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full px-2 py-0.5 text-[11px] font-medium text-card-foreground ring-1 ring-border"
              >
                {highlight}
              </span>
            ))}
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
          <div className="flex items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${tour.name} via WhatsApp`}
              className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
