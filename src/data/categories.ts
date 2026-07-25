import type { TourCategory } from "./types";

export const categories: TourCategory[] = [
  {
    slug: "dolphin-tour",
    name: "Dolphin Tour",
    tagline: "Swim with wild dolphins at sunrise, then snorkel a coral garden.",
    placeholderTheme: "ocean",
    heroImage: "/photos/dolphin-tour/dolphins-jumping-pod.webp",
    cardImage: "/photos/dolphin-tour/dolphins-jumping-pod-card.webp",
    experiencePhotos: [
      { src: "/photos/dolphin-tour/dolphins-jumping-pod-card.webp", caption: "Wild dolphins in their natural habitat" },
      { src: "/photos/dolphin-tour/dolphins-jumping-pair-card.webp", caption: "Dolphins surfacing at sunrise" },
      { src: "/photos/ubud-trip/aling-aling-waterfall-card.webp", caption: "Aling-Aling Waterfall jump" },
    ],
  },
  {
    slug: "ubud-trip",
    name: "Ubud Trip",
    tagline: "Waterfalls, ATV mud tracks, whitewater rafting and rice-field culture.",
    placeholderTheme: "jungle",
    // Hero leads with a real guest moment (not a scenic stock-style shot) —
    // cardImage stays scenic since it's reused in small grid tiles across
    // many contexts (CategoryCard/ProductCard/Gallery), where a recognizable
    // landmark reads better at a glance than a specific person's face.
    heroImage: "/photos/ubud-trip/guests/atv-dragon-cave-waterfall-1.webp",
    cardImage: "/photos/ubud-trip/tegalalang-rice-terrace-card.webp",
    experiencePhotos: [
      { src: "/photos/ubud-trip/guests/atv-dragon-cave-waterfall-1-card.webp", caption: "Riding through the dragon cave waterfall" },
      { src: "/photos/ubud-trip/guests/rafting-ayung-river-2-card.webp", caption: "Whitewater rafting the Ayung River" },
      { src: "/photos/ubud-trip/guests/tirta-empul-group-bathing-card.webp", caption: "Purification ritual at Tirta Empul" },
      { src: "/photos/ubud-trip/bali-swing-rice-fields-card.webp", caption: "Alas Harum's swings & photo spots" },
      { src: "/photos/ubud-trip/guests/couple-tegalalang-terrace-card.webp", caption: "Taking in the Tegalalang rice terraces" },
      { src: "/photos/ubud-trip/guests/monkey-forest-guest-portrait-card.webp", caption: "A new friend at the Sacred Monkey Forest" },
      { src: "/photos/ubud-trip/guests/buggy-waterfall-splash-card.webp", caption: "Blasting through the falls" },
      { src: "/photos/ubud-trip/tegenungan-waterfall-card.webp", caption: "Tegenungan Waterfall viewpoint" },
      { src: "/photos/ubud-trip/guests/atv-group-mud-crossing-card.webp", caption: "The whole crew, mud and all" },
      { src: "/photos/ubud-trip/waterfall-jump-card.webp", caption: "A waterfall jump along the way" },
    ],
  },
  {
    slug: "mt-batur",
    name: "Mt. Batur Activities",
    tagline: "Sunrise trekking and jeep tours above the clouds.",
    placeholderTheme: "sunrise",
    heroImage: "/photos/mt-batur/guests/jeep-group-sunrise-celebration.webp",
    cardImage: "/photos/mt-batur/sunrise-above-clouds-card.webp",
    experiencePhotos: [
      { src: "/photos/mt-batur/guests/jeep-group-sunrise-celebration-card.webp", caption: "Celebrating sunrise on the jeep roof" },
      { src: "/photos/mt-batur/guests/couple-sunrise-viewpoint-card.webp", caption: "A quiet moment above the clouds" },
      { src: "/photos/mt-batur/hiker-mount-batur-card.webp", caption: "Trekking above the clouds at sunrise" },
      { src: "/photos/mt-batur/guests/jeep-roof-sunrise-solo-card.webp", caption: "Watching the sunrise from the jeep" },
      { src: "/photos/mt-batur/guests/jeep-solo-lava-field-card.webp", caption: "Exploring the black lava fields" },
      { src: "/photos/mt-batur/sunrise-above-clouds-card.webp", caption: "Sunrise breaking over Mt. Batur" },
    ],
  },
  {
    slug: "nusa-penida",
    name: "Nusa Penida Day Trip",
    tagline: "Kelingking, Broken Beach and Crystal Bay in a single day.",
    placeholderTheme: "cliff",
    heroImage: "/photos/nusa-penida/kelingking-beach-cliff.webp",
    cardImage: "/photos/nusa-penida/kelingking-beach-cliff-card.webp",
    // Only one real photo exists for this category so far — same as the hero,
    // so a "gallery" of it would just repeat the banner. ExperienceGallery
    // hides itself below 2 photos rather than pad with off-theme photos.
    experiencePhotos: [],
  },
  {
    slug: "uluwatu-trip",
    name: "Uluwatu Trip",
    tagline: "Cliff-top temples, beach hopping and the Kecak fire dance.",
    placeholderTheme: "cliff",
    heroImage: "/photos/uluwatu-trip/kecak-fire-dance.webp",
    cardImage: "/photos/uluwatu-trip/kecak-fire-dance-card.webp",
    experiencePhotos: [
      { src: "/photos/uluwatu-trip/kecak-fire-dance-card.webp", caption: "Kecak fire dance at sunset" },
      { src: "/photos/bali/tanah-lot-sunset-card.webp", caption: "A Bali sea temple at sunset" },
    ],
  },
  {
    slug: "fishing-trip",
    name: "Fishing Trip",
    tagline: "Half-day fishing off Kuta, finished with a fresh grilled catch.",
    placeholderTheme: "ocean",
    heroImage: "/photos/fishing-trip/amed-fishing-boats-sunset.webp",
    cardImage: "/photos/fishing-trip/amed-fishing-boats-sunset-card.webp",
    // Only one real photo for this category so far — see nusa-penida note above.
    experiencePhotos: [],
  },
  {
    slug: "village-adventure",
    name: "Village Adventure",
    tagline: "Live a day as a Balinese local — market, farm and rice fields.",
    placeholderTheme: "village",
    heroImage: "/photos/village-adventure/rice-planting-couple.webp",
    cardImage: "/photos/village-adventure/rice-planting-couple-card.webp",
    experiencePhotos: [
      { src: "/photos/village-adventure/balinese-feast-spread-card.webp", caption: "A traditional Balinese feast" },
      { src: "/photos/village-adventure/canang-sari-offerings-card.webp", caption: "Canang sari offerings" },
      { src: "/photos/village-adventure/priest-ceremony-offerings-card.webp", caption: "A priest's blessing ceremony" },
    ],
  },
  {
    slug: "cycling-tour",
    name: "Cycling Tour",
    tagline: "Downhill village rides through rice terraces and coconut groves.",
    placeholderTheme: "trail",
    heroImage: "/photos/cycling-tour/countryside-temple.webp",
    cardImage: "/photos/cycling-tour/countryside-temple-card.webp",
    experiencePhotos: [
      { src: "/photos/cycling-tour/countryside-temple-card.webp", caption: "A village temple along the route" },
      { src: "/photos/ubud-trip/tegalalang-rice-terrace-card.webp", caption: "Downhill through rice terraces" },
    ],
  },
  {
    slug: "boat-tickets",
    name: "Boat Tickets",
    tagline: "Fast boat tickets to the Gili Islands and Nusa Penida.",
    placeholderTheme: "boat",
    // No dedicated fast-boat photo yet — reusing the fishing category's boat
    // shot (the closest real asset) rather than fall back to a picsum photo.
    heroImage: "/photos/fishing-trip/amed-fishing-boats-sunset.webp",
    cardImage: "/photos/fishing-trip/amed-fishing-boats-sunset-card.webp",
    experiencePhotos: [],
  },
];

export function getCategory(slug: string): TourCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
