import { getToursByCategory } from "@/data/tours";
import { ferryTickets } from "@/data/ferry-tickets";
import type { PriceTier, TourProduct } from "@/data/types";

function parsePrice(label: string): number {
  return parseInt(label.replace(/[^0-9]/g, ""), 10);
}

export function getAllTiers(tour: TourProduct): PriceTier[] {
  if (tour.priceTiers) return tour.priceTiers;
  if (tour.tierGroups) return tour.tierGroups.flatMap((g) => g.tiers);
  return [];
}

export function getStartingTier(tour: TourProduct): PriceTier | undefined {
  const tiers = getAllTiers(tour);
  if (tiers.length === 0) return undefined;
  return tiers.reduce((min, t) => (parsePrice(t.priceLabel) < parsePrice(min.priceLabel) ? t : min));
}

/** Cheapest price across every product in a category, formatted for a card chip. */
export function getCategoryStartingPrice(categorySlug: string): string | undefined {
  if (categorySlug === "boat-tickets") {
    const cheapest = ferryTickets.reduce((min, t) =>
      parsePrice(t.priceOneWay) < parsePrice(min.priceOneWay) ? t : min
    );
    return cheapest?.priceOneWay;
  }

  const tours = getToursByCategory(categorySlug);
  const startingTiers = tours.map(getStartingTier).filter((t): t is PriceTier => Boolean(t));
  if (startingTiers.length === 0) return undefined;
  return startingTiers.reduce((min, t) => (parsePrice(t.priceLabel) < parsePrice(min.priceLabel) ? t : min))
    .priceLabel;
}
