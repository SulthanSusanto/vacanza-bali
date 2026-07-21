import type { TourCategory } from "./types";

export const categories: TourCategory[] = [
  {
    slug: "dolphin-tour",
    name: "Dolphin Tour",
    tagline: "Swim with wild dolphins at sunrise, then snorkel a coral garden.",
    placeholderTheme: "ocean",
  },
  {
    slug: "ubud-trip",
    name: "Ubud Trip",
    tagline: "Waterfalls, ATV mud tracks, whitewater rafting and rice-field culture.",
    placeholderTheme: "jungle",
  },
  {
    slug: "mt-batur",
    name: "Mt. Batur Activities",
    tagline: "Sunrise trekking and jeep tours above the clouds.",
    placeholderTheme: "sunrise",
  },
  {
    slug: "nusa-penida",
    name: "Nusa Penida Day Trip",
    tagline: "Kelingking, Broken Beach and Crystal Bay in a single day.",
    placeholderTheme: "cliff",
  },
  {
    slug: "uluwatu-trip",
    name: "Uluwatu Trip",
    tagline: "Cliff-top temples, beach hopping and the Kecak fire dance.",
    placeholderTheme: "cliff",
  },
  {
    slug: "fishing-trip",
    name: "Fishing Trip",
    tagline: "Half-day fishing off Kuta, finished with a fresh grilled catch.",
    placeholderTheme: "ocean",
  },
  {
    slug: "village-adventure",
    name: "Village Adventure",
    tagline: "Live a day as a Balinese local — market, farm and rice fields.",
    placeholderTheme: "village",
  },
  {
    slug: "cycling-tour",
    name: "Cycling Tour",
    tagline: "Downhill village rides through rice terraces and coconut groves.",
    placeholderTheme: "trail",
  },
  {
    slug: "boat-tickets",
    name: "Boat Tickets",
    tagline: "Fast boat tickets to the Gili Islands and Nusa Penida.",
    placeholderTheme: "boat",
  },
];

export function getCategory(slug: string): TourCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
