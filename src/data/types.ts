export interface PriceTier {
  /** Group size (2-6) when this tier is part of a headcount ladder. */
  people?: number;
  /** Human label when the tier is a named option rather than a headcount (e.g. "Single Quad"). */
  label?: string;
  priceLabel: string;
  unit: "per-person" | "per-boat";
  note?: string;
}

export interface PriceTierGroup {
  /** e.g. a pickup zone or a boat type — whatever the tiers are grouped by. */
  groupLabel: string;
  tiers: PriceTier[];
}

export interface ZoneSurcharge {
  zone: string;
  fee: string;
}

export interface AddOn {
  name: string;
  price: string;
  description?: string;
}

export interface TourProduct {
  slug: string;
  categorySlug: string;
  name: string;
  summary: string;
  description: string;
  duration?: string;
  pickupTime?: string;
  /** Simple headcount-ladder pricing. Mutually exclusive with tierGroups. */
  priceTiers?: PriceTier[];
  /** Pricing split by zone/boat-type, each containing its own headcount ladder. */
  tierGroups?: PriceTierGroup[];
  /** Flat add-on fee depending on pickup zone (on top of priceTiers). */
  zoneSurcharges?: ZoneSurcharge[];
  includes: string[];
  excludes: string[];
  whatToBring?: string[];
  addOns?: AddOn[];
  notes?: string[];
  /** Per-product photo (~900w) for ProductCard — falls back to the category's cardImage when absent. */
  image?: string;
  /** 1-3 short badge phrases distinguishing this product from others in its category (e.g. "Includes waterfall"). */
  highlights?: string[];
}

export type PlaceholderTheme =
  | "ocean"
  | "jungle"
  | "sunrise"
  | "cliff"
  | "village"
  | "trail"
  | "boat";

export interface ExperiencePhoto {
  /** Path under public/, e.g. "/photos/ubud-trip/aling-aling-waterfall-card.webp". */
  src: string;
  caption: string;
}

export interface TourCategory {
  slug: string;
  name: string;
  tagline: string;
  placeholderTheme: PlaceholderTheme;
  /** Full-bleed photo (1024-1920w) for this category's Hero banner. */
  heroImage: string;
  /** Smaller photo (~900w) for grid tiles: CategoryCard, ProductCard, Gallery page. */
  cardImage: string;
  /**
   * Captioned moments for the category page's "See the experience" gallery.
   * Only populated where real photography exists for that category — thin on
   * a few categories (nusa-penida, fishing-trip, boat-tickets) until more
   * photos land; ExperienceGallery hides itself rather than pad with
   * off-theme stand-ins.
   */
  experiencePhotos: ExperiencePhoto[];
}

export interface ScheduleGroup {
  title: string;
  items: { label?: string; time: string }[];
}

export interface FerryTicket {
  slug: string;
  name: string;
  route: string;
  scheduleGroups: ScheduleGroup[];
  priceOneWay: string;
  priceReturn: string;
  notes?: string[];
}
