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
