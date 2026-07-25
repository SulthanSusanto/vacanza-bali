import type { TourProduct } from "./types";

export const tours: TourProduct[] = [
  // ---------------------------------------------------------------- Dolphin Tour
  {
    slug: "dolphin-snorkeling",
    categorySlug: "dolphin-tour",
    name: "Dolphin Tour & Snorkeling",
    summary: "Swim with dolphins in their natural habitat, then snorkel a coral garden.",
    description:
      "Ride out to Lovina before sunrise to swim with wild dolphins in their natural habitat, then cool off snorkeling a coral garden. Private pick-up is included from across South Bali and Ubud — it's roughly a 2.5-hour drive to Lovina, the boat sails at 06:00 AM, and activities run 2-3 hours before lunch.",
    pickupTime: "03:45 AM (Kuta, Seminyak, Kerobokan, Umalas, Canggu, Sanur, Denpasar, Ubud)",
    priceTiers: [
      { people: 6, priceLabel: "IDR 450.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 525.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 575.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 675.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 775.000", unit: "per-person" },
    ],
    includes: [
      "Private car pick-up/drop-off",
      "English-speaking driver/guide",
      "Bread & mineral water breakfast",
      "Sharing traditional boat (max 6 people)",
      "Hot drinks & snacks on boat",
      "Snorkeling equipment",
      "Parking fee",
      "Car fuel",
    ],
    excludes: ["Lunch", "Towel", "Insurance", "Additional expenses", "Tipping (optional)"],
    notes: [
      "Group WhatsApp available to combine travelers in the same area for more affordable shared transport.",
    ],
    image: "/photos/dolphin-tour/dolphins-jumping-pod-card.webp",
    highlights: ["Private transport", "Snorkeling included"],
  },
  {
    slug: "dolphin-snorkeling-waterfall",
    categorySlug: "dolphin-tour",
    name: "Dolphin Tour, Snorkeling & Aling-Aling Waterfall",
    summary: "The dolphin & snorkeling tour, extended with a waterfall jump at Aling-Aling.",
    description:
      "All the same dolphin-swimming and snorkeling activities, followed by Aling-Aling Waterfall — a 10-minute trek from the parking lot, with jumps from 5m, 10m or 15m heights for those who want them.",
    pickupTime: "03:45 AM (Kuta, Seminyak, Kerobokan, Umalas, Canggu, Sanur, Denpasar, Ubud)",
    priceTiers: [
      { people: 6, priceLabel: "IDR 600.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 650.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 700.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 800.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 1.000.000", unit: "per-person" },
    ],
    includes: [
      "Private car pick-up/drop-off",
      "English-speaking driver/guide",
      "Bread & mineral water breakfast",
      "Sharing traditional boat (max 6)",
      "Hot drinks & snacks",
      "Snorkeling equipment",
      "Parking",
      "Fuel",
    ],
    excludes: ["Lunch", "Towel", "Insurance", "Additional expenses", "Tipping (optional)"],
    image: "/photos/ubud-trip/aling-aling-waterfall-card.webp",
    highlights: ["Includes waterfall jump", "Private transport"],
  },
  {
    slug: "dolphin-no-transport",
    categorySlug: "dolphin-tour",
    name: "Dolphin Tour Without Transport",
    summary: "Meet us in Lovina and skip the transport — swim with dolphins your way.",
    description:
      "Already in Lovina? Meet the boat directly (pinned location shared on booking) and choose swimming with dolphins alone, or add snorkeling in the coral garden.",
    priceTiers: [
      { label: "Swimming + Snorkeling", priceLabel: "IDR 300.000", unit: "per-person" },
      {
        label: "Swimming with dolphins only",
        priceLabel: "IDR 200.000",
        unit: "per-person",
        note: "No snorkeling",
      },
    ],
    includes: ["Shared traditional boat", "Hot drinks & snacks on boat"],
    excludes: ["Lunch", "Insurance", "Snorkeling equipment (swim-only option)"],
    image: "/photos/dolphin-tour/dolphins-jumping-pair-card.webp",
    highlights: ["No transport", "Meet in Lovina"],
  },

  // ---------------------------------------------------------------- Ubud Trip
  {
    slug: "ubud-day-trip-a",
    categorySlug: "ubud-trip",
    name: "Ubud Waterfall, ATV & Alas Harum Day Trip",
    summary: "Manuaba Waterfall, single ATV/Quad-Bike, then Alas Harum's swings and photo spots.",
    description:
      "Start at Manuaba Waterfall — a hidden gem with two falls — then ride an ATV/Quad-Bike through Belong village, rice fields, mud tracks and a dragon cave to its own waterfall, before finishing at Alas Harum (Cretya): the Luwak coffee process, swings, photo spots, the dancing bridge and Soekarno bamboo statue, and a pool.",
    duration: "10-hr private car transport",
    priceTiers: [
      { people: 6, priceLabel: "IDR 695.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 720.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 760.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 820.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 945.000", unit: "per-person" },
    ],
    includes: [
      "10-hr private car transport",
      "English-speaking driver/guide",
      "Quad-Bike insurance",
      "Manuaba entrance",
      "Alas Harum/Cretya entrance",
      "Single Quad-Bike",
      "Brunch (fried rice/noodle/egg sandwich)",
      "Mineral water",
      "Parking fee",
    ],
    excludes: [
      "Overtime IDR 80.000/hr per car (beyond 10 hrs)",
      "Additional Alas Harum activities",
      "Personal expenses",
      "Tipping (optional)",
    ],
    notes: [
      "Tandem Quad-Bike (2 people/bike) available at a lower price on request.",
      "Pick-up time depends on area.",
    ],
    image: "/photos/ubud-trip/guests/atv-dragon-cave-waterfall-1-card.webp",
    highlights: ["ATV + waterfall", "Alas Harum included"],
  },
  {
    slug: "ubud-day-trip-b",
    categorySlug: "ubud-trip",
    name: "Ubud ATV, Coffee Plantation & Tegenungan Falls",
    summary: "ATV/Quad-Bike, a coffee plantation, Tegenungan Waterfall and a pool club overlook.",
    description:
      "Ride the ATV/Quad-Bike, stop at a Coffee Plantation for the Luwak coffee process plus free coffee/tea tasting, visit Tegenungan Waterfall — at 15m, the highest near Ubud — and finish at Omma Day Club, a pool restaurant overlooking the falls.",
    duration: "10-hr private car transport",
    priceTiers: [
      { people: 6, priceLabel: "IDR 695.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 720.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 760.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 820.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 945.000", unit: "per-person" },
    ],
    includes: [
      "10-hr private car transport",
      "English-speaking driver/guide",
      "Quad-Bike insurance",
      "Tegenungan entrance",
      "Meals at Quad-Bike",
      "Mineral water",
      "Parking fee",
    ],
    excludes: [
      "Overtime IDR 80.000/hr per car",
      "Food/drink at Omma Day Club",
      "Personal expenses",
      "Tipping (optional)",
    ],
    image: "/photos/ubud-trip/guests/atv-dragon-cave-waterfall-2-card.webp",
    highlights: ["Coffee plantation stop", "Tegenungan Waterfall"],
  },
  {
    slug: "ubud-day-trip-c",
    categorySlug: "ubud-trip",
    name: "Ubud ATV & Ayung River Rafting",
    summary: "ATV/Quad-Bike followed by whitewater rafting on the Ayung River.",
    description:
      "Ride a single ATV/Quad-Bike, then raft 12km of the Ayung River over roughly 2.5 hours with a professional guide.",
    duration: "10-hr private car transport",
    priceTiers: [
      { people: 6, priceLabel: "IDR 925.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 975.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 1.050.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 1.125.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 1.250.000", unit: "per-person" },
    ],
    includes: [
      "10-hr private car transport",
      "English-speaking driver/guide",
      "Quad-Bike & Rafting insurance",
      "Single Quad-Bike",
      "Brunch at Quad-Bike",
      "Rafting sharing boat (max 6)",
      "Buffet lunch at rafting",
      "Mineral water",
      "Parking",
      "Fuel",
    ],
    excludes: ["Personal expenses", "Tipping (optional)"],
    notes: [
      "Quad-Bike tandem available at a lower price on request.",
      "Pick-up depends on area; must arrive at the Quad-Bike point by 9:00 AM.",
    ],
    image: "/photos/ubud-trip/guests/rafting-ayung-river-2-card.webp",
    highlights: ["ATV + rafting combo"],
  },
  {
    slug: "ubud-sightseeing",
    categorySlug: "ubud-trip",
    name: "Ubud Trip Sightseeing",
    summary: "A calmer sightseeing day: Manuaba Waterfall, Tirta Empul's holy springs and Alas Harum.",
    description:
      "Manuaba Waterfall, Tirta Empul Temple's sacred holy springs, then Alas Harum (Cretya). Free coverage for Ubud, Seminyak, Kerobokan, Umalas, Kuta, Denpasar and Sanur.",
    duration: "Private car, 10-hr service",
    pickupTime: "09:00 AM",
    priceTiers: [
      { people: 6, priceLabel: "IDR 300.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 350.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 400.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 500.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 600.000", unit: "per-person" },
    ],
    zoneSurcharges: [
      { zone: "Canggu", fee: "IDR 150.000" },
      { zone: "Nusa Dua / Jimbaran", fee: "IDR 200.000" },
      { zone: "Uluwatu / Pecatu / Balangan", fee: "IDR 300.000" },
    ],
    includes: [
      "Private car, 10-hr service",
      "Mineral water",
      "Waterfall entrance",
      "Tirta Empul entrance",
      "Alas Harum entrance",
      "Parking fee",
    ],
    excludes: [
      "Overtime IDR 80.000/hr",
      "Meals",
      "Personal expenses",
      "Tipping (optional)",
      "Insurance",
    ],
    whatToBring: ["Cash", "Caps/hats", "Sunscreen", "Sunglasses", "Swimwear & towel", "Change of clothes"],
    image: "/photos/ubud-trip/guests/tirta-empul-group-bathing-card.webp",
    highlights: ["No ATV — sightseeing only", "Tirta Empul included"],
  },
  {
    slug: "cooking-class",
    categorySlug: "ubud-trip",
    name: "Cooking Class in Ubud",
    summary: "A 3.5-hour farm tour and hands-on Balinese cooking class with an expert chef.",
    description:
      "A welcome drink, a farm tour to harvest your own spices, then hands-on Balinese cooking basics with an expert chef. Everything you cook is yours to keep, plus a free printed recipe book to take home. Suitable for ages 8-12 (children's class) or 13-60 (normal class). Maximum 12 people per class.",
    duration: "3.5 hrs",
    priceTiers: [
      { people: 6, priceLabel: "IDR 625.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 650.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 690.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 750.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 875.000", unit: "per-person" },
    ],
    includes: ["Hotel transfer"],
    excludes: [],
    image: "/photos/ubud-trip/guests/coffee-plantation-berries-card.webp",
    highlights: ["Hands-on cooking class", "Farm tour included"],
  },
  {
    slug: "quad-bike-no-transport",
    categorySlug: "ubud-trip",
    name: "Quad-Bike/ATV Without Transport",
    summary: "Ride the Ubud ATV track solo — meet us on site, no transport included.",
    description:
      "20-30 minutes from Ubud Center, open 08:00 AM-03:30 PM. The track runs through Belang Village, rice fields, mud tracks, a cave and a small waterfall, taking roughly 60-90 minutes.",
    duration: "60-90 min",
    priceTiers: [
      { label: "Single Quad", priceLabel: "IDR 500.000", unit: "per-person", note: "1 person" },
      { label: "Tandem Quad", priceLabel: "IDR 800.000", unit: "per-person", note: "2 people" },
    ],
    includes: [
      "Food (egg sandwich/fried noodle/fries/fried rice)",
      "Mineral water",
      "Insurance",
      "Guide",
      "Safety gear (helmet & boots)",
      "Towel",
      "Locker",
    ],
    excludes: [],
    notes: ["Book in advance."],
    image: "/photos/ubud-trip/guests/atv-couple-closeup-card.webp",
    highlights: ["No transport", "Solo or tandem"],
  },
  {
    slug: "rafting-no-transport",
    categorySlug: "ubud-trip",
    name: "Rafting Without Transport",
    summary: "Raft the Ayung River in Ubud — meet us on site, no transport included.",
    description:
      "10km of the Ayung River in Ubud over roughly 2 hours with a professional guide, 20-30 minutes from Ubud Center.",
    duration: "2 hrs",
    priceTiers: [
      {
        label: "Sharing boat",
        priceLabel: "IDR 350.000",
        unit: "per-person",
        note: "Max 6 people",
      },
      {
        label: "Private boat",
        priceLabel: "IDR 1.200.000",
        unit: "per-boat",
        note: "Max 3 people",
      },
    ],
    includes: [
      "Buffet brunch/lunch",
      "Guide",
      "Rafting equipment (life jacket & helmet)",
      "Locker",
      "Shower equipment",
      "Hot shower",
      "Insurance",
    ],
    excludes: [],
    notes: ["Book in advance."],
    image: "/photos/ubud-trip/guests/rafting-ayung-river-1-card.webp",
    highlights: ["No transport", "Sharing or private boat"],
  },

  // ---------------------------------------------------------------- Mt. Batur
  {
    slug: "batur-trekking",
    categorySlug: "mt-batur",
    name: "Mt. Batur Sunrise Trekking + Coffee Plantation",
    summary: "Hike to the Mt. Batur summit for sunrise, then a coffee plantation stop.",
    description:
      "An early morning trek to the Mt. Batur summit for sunrise, with a simple breakfast and hot drinks at the top, followed by a Coffee Plantation stop for the Luwak coffee process and a free tasting.",
    pickupTime: "01:30 AM (coverage areas) / 02:30 AM (Ubud) — hike starts 03:30 AM",
    priceTiers: [
      { people: 5, priceLabel: "IDR 420.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 480.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 580.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 750.000", unit: "per-person" },
    ],
    includes: [
      "Round-trip private car transfer",
      "English-speaking driver",
      "Kintamani entrance",
      "Mt. Batur entrance",
      "Licensed local guide",
      "Trekking equipment",
      "Mineral water",
      "Breakfast & hot drink at summit",
      "Parking fee",
    ],
    excludes: ["Personal expenses", "Tipping (optional)"],
    addOns: [
      {
        name: "Natural Hot Spring",
        price: "IDR 175.000/person",
        description: "A relaxing open pool with a Lake Batur view, after the trek.",
      },
    ],
    image: "/photos/mt-batur/guests/couple-sunrise-viewpoint-card.webp",
    highlights: ["On-foot trekking", "Coffee plantation stop"],
  },
  {
    slug: "batur-jeep",
    categorySlug: "mt-batur",
    name: "Mt. Batur Sunrise Jeep Tour + Coffee Plantation",
    summary: "An offroad jeep ride to the sunrise point over black lava fields.",
    description:
      "An offroad jeep adventure to the sunrise point, breakfast while watching the sunrise, exploring black lava and black sand, then a Coffee Plantation stop. Jeeps carry 3 people each.",
    pickupTime: "02:30 AM (coverage) / 03:30 AM (Ubud) — jeep starts 04:30 AM",
    priceTiers: [
      { people: 6, priceLabel: "IDR 520.000", unit: "per-person", note: "2 jeeps" },
      { people: 5, priceLabel: "IDR 610.000", unit: "per-person", note: "2 jeeps" },
      { people: 4, priceLabel: "IDR 750.000", unit: "per-person", note: "2 jeeps" },
      { people: 3, priceLabel: "IDR 880.000", unit: "per-person", note: "1 jeep" },
      { people: 2, priceLabel: "IDR 1.000.000", unit: "per-person", note: "1 jeep" },
    ],
    includes: [
      "Round-trip private car transfer",
      "English-speaking driver",
      "Kintamani entrance",
      "Mt. Batur entrance",
      "Licensed local guide",
      "Trekking equipment",
      "Mineral water",
      "Breakfast & hot drink",
      "Parking fee",
    ],
    excludes: ["Personal expenses", "Tipping (optional)"],
    addOns: [
      {
        name: "Natural Hot Spring",
        price: "IDR 175.000/person",
        description: "A relaxing open pool with a Lake Batur view, after the tour.",
      },
    ],
    image: "/photos/mt-batur/guests/jeep-group-sunrise-celebration-card.webp",
    highlights: ["Offroad jeep ride", "Coffee plantation stop"],
  },
  {
    slug: "batur-combo",
    categorySlug: "mt-batur",
    name: "Mt. Batur Sunrise Combo (Jeep & Trekking) + Coffee Plantation",
    summary: "Jeep up, hike the last stretch to the summit, then jeep back down.",
    description:
      "An offroad jeep drive followed by roughly a 1-hour hike to the summit, breakfast and hot drinks while watching the sunrise, then the jeep back down through black lava and black sand. Same pick-up times as the jeep tour; jeeps carry 3 people each.",
    pickupTime: "02:30 AM (coverage) / 03:30 AM (Ubud) — jeep starts 04:30 AM",
    priceTiers: [
      { people: 5, priceLabel: "IDR 940.000", unit: "per-person", note: "2 jeeps" },
      { people: 4, priceLabel: "IDR 1.080.000", unit: "per-person", note: "2 jeeps" },
      { people: 3, priceLabel: "IDR 1.310.000", unit: "per-person", note: "1 jeep" },
      { people: 2, priceLabel: "IDR 1.400.000", unit: "per-person", note: "1 jeep" },
    ],
    includes: [
      "Round-trip private car transfer",
      "English-speaking driver",
      "Kintamani entrance",
      "Mt. Batur entrance",
      "Licensed local guide",
      "Trekking equipment",
      "Mineral water",
      "Breakfast & hot drink",
      "Parking fee",
    ],
    excludes: ["Personal expenses", "Tipping (optional)"],
    addOns: [
      {
        name: "Natural Hot Spring",
        price: "IDR 175.000/person",
        description: "A relaxing open pool with a Lake Batur view, after the tour.",
      },
    ],
    image: "/photos/mt-batur/guests/jeep-roof-sunrise-solo-card.webp",
    highlights: ["Jeep + short trek combo"],
  },

  // ---------------------------------------------------------------- Nusa Penida
  {
    slug: "nusa-penida-day-trip",
    categorySlug: "nusa-penida",
    name: "Nusa Penida Day Trip",
    summary: "Five iconic Nusa Penida viewpoints in a single day, by speedboat and private car.",
    description:
      "Kelingking Beach, Paluang Cliff, Broken Beach, Angel Billabong and Crystal Bay — five destinations in one day. Meeting point is Sanur Port at 06:00 AM.",
    pickupTime: "06:00 AM (Sanur Port)",
    priceTiers: [
      { people: 6, priceLabel: "IDR 450.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 500.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 550.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 650.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 750.000", unit: "per-person" },
    ],
    includes: [
      "Public speedboat (round trip)",
      "Private car in Nusa Penida",
      "Driver/guide",
      "Simple lunch (fried rice/noodle)",
      "Entrance tickets (except artificial photospots)",
      "Parking fee",
    ],
    excludes: [
      "Hotel-Sanur Port pick-up/drop-off",
      "Nusa Penida port retribution fee (IDR 25.000)",
      "Artificial photospot fees",
      "Tipping (optional)",
    ],
    addOns: [
      {
        name: "Snorkeling add-on (sharing boat)",
        price: "IDR 250.000/person",
        description:
          "Starts 02:00 PM. 4 locations (Manta Bay, Crystal Bay, Wall points), snorkeling equipment and shared GoPro documentation included.",
      },
      {
        name: "Snorkeling add-on (private boat)",
        price: "IDR 1.700.000/boat",
        description: "Max 5 people. Same 4 locations, starts 02:00 PM.",
      },
    ],
  },

  // ---------------------------------------------------------------- Uluwatu Trip
  {
    slug: "uluwatu-day-trip-a",
    categorySlug: "uluwatu-trip",
    name: "Uluwatu Temple, Beaches & Kecak Fire Dance",
    summary: "Uluwatu Temple, Padang Padang & Melasti beaches, and the Kecak fire dance at sunset.",
    description:
      "Uluwatu Temple's cliff-top sunset views, Padang Padang Beach (of Eat Pray Love fame), Melasti Beach's white sand and cliffs, then the Kecak fire dance show at sunset.",
    duration: "Private car, 10-hr service",
    pickupTime: "11:00 AM",
    tierGroups: [
      {
        groupLabel: "Ubud & Canggu",
        tiers: [
          { people: 6, priceLabel: "IDR 400.000", unit: "per-person" },
          { people: 5, priceLabel: "IDR 450.000", unit: "per-person" },
          { people: 4, priceLabel: "IDR 500.000", unit: "per-person" },
          { people: 3, priceLabel: "IDR 570.000", unit: "per-person" },
          { people: 2, priceLabel: "IDR 740.000", unit: "per-person" },
        ],
      },
      {
        groupLabel: "Seminyak / Kerobokan / Umalas / Sanur / Kuta / Denpasar / Nusa Dua / Jimbaran",
        tiers: [
          { people: 6, priceLabel: "IDR 370.000", unit: "per-person" },
          { people: 5, priceLabel: "IDR 400.000", unit: "per-person" },
          { people: 4, priceLabel: "IDR 440.000", unit: "per-person" },
          { people: 3, priceLabel: "IDR 505.000", unit: "per-person" },
          { people: 2, priceLabel: "IDR 640.000", unit: "per-person" },
        ],
      },
    ],
    includes: [
      "Private car, 10-hr service",
      "Mineral water",
      "Beach entrance tickets",
      "Uluwatu Temple entrance",
      "Kecak dance ticket",
      "Parking fee",
    ],
    excludes: [
      "Overtime IDR 80.000/hr",
      "Meals",
      "Personal expenses",
      "Tipping (optional)",
      "Insurance",
    ],
    whatToBring: ["Cash", "Caps/hats", "Sunscreen", "Sunglasses", "Swimwear & towel", "Change of clothes"],
    image: "/photos/uluwatu-trip/kecak-fire-dance-card.webp",
    highlights: ["Kecak fire dance included", "3 stops"],
  },
  {
    slug: "uluwatu-day-trip-b",
    categorySlug: "uluwatu-trip",
    name: "Uluwatu Temple & Beach Hopping",
    summary: "Uluwatu Temple plus your pick of up to three beaches.",
    description:
      "Uluwatu Temple, then beach hopping — choose up to three beaches, or ask your guide for suggestions.",
    duration: "Private car, 10-hr service",
    pickupTime: "10:00 AM",
    tierGroups: [
      {
        groupLabel: "Ubud",
        tiers: [
          { people: 6, priceLabel: "IDR 295.000", unit: "per-person" },
          { people: 5, priceLabel: "IDR 325.000", unit: "per-person" },
          { people: 4, priceLabel: "IDR 375.000", unit: "per-person" },
          { people: 3, priceLabel: "IDR 460.000", unit: "per-person" },
          { people: 2, priceLabel: "IDR 625.000", unit: "per-person" },
        ],
      },
      {
        groupLabel: "Canggu",
        tiers: [
          { people: 6, priceLabel: "IDR 275.000", unit: "per-person" },
          { people: 5, priceLabel: "IDR 305.000", unit: "per-person" },
          { people: 4, priceLabel: "IDR 350.000", unit: "per-person" },
          { people: 3, priceLabel: "IDR 425.000", unit: "per-person" },
          { people: 2, priceLabel: "IDR 575.000", unit: "per-person" },
        ],
      },
      {
        groupLabel: "Seminyak / Kerobokan / Umalas / Sanur / Kuta / Denpasar / Nusa Dua / Jimbaran",
        tiers: [
          { people: 6, priceLabel: "IDR 260.000", unit: "per-person" },
          { people: 5, priceLabel: "IDR 285.000", unit: "per-person" },
          { people: 4, priceLabel: "IDR 325.000", unit: "per-person" },
          { people: 3, priceLabel: "IDR 395.000", unit: "per-person" },
          { people: 2, priceLabel: "IDR 525.000", unit: "per-person" },
        ],
      },
    ],
    includes: [
      "Private car, 10-hr service",
      "Mineral water",
      "Uluwatu Temple entrance",
      "Beach entrance tickets",
      "Parking fee",
      "Insurance (watersport only)",
    ],
    excludes: [
      "Overtime IDR 80.000/hr (÷ by group size, e.g. 6 people = IDR 13.000/person/hr)",
      "Meals",
      "Personal expenses",
      "Tipping (optional)",
      "Insurance",
    ],
    whatToBring: ["Cash", "Caps/hats", "Sunscreen", "Sunglasses", "Swimwear & towel", "Change of clothes"],
    image: "/photos/bali/guests/temple-sarong-couple-card.webp",
    highlights: ["Choose up to 3 beaches", "No fire dance"],
  },

  // ---------------------------------------------------------------- Fishing Trip
  {
    slug: "fishing-trip",
    categorySlug: "fishing-trip",
    name: "Fishing Trip (at Kuta)",
    summary: "A morning of fishing off Kuta, finished with your catch grilled fresh.",
    description: "Fishing off Kuta from 07:00 AM to 01:00 PM, choose a small or big boat.",
    duration: "07:00 AM - 01:00 PM",
    tierGroups: [
      {
        groupLabel: "Small Boat",
        tiers: [
          { people: 3, priceLabel: "IDR 1.450.000", unit: "per-person" },
          { people: 2, priceLabel: "IDR 1.950.000", unit: "per-person" },
        ],
      },
      {
        groupLabel: "Big Boat",
        tiers: [
          { people: 5, priceLabel: "IDR 1.350.000", unit: "per-person" },
          { people: 4, priceLabel: "IDR 1.450.000", unit: "per-person" },
        ],
      },
    ],
    includes: [
      "Fishing equipment",
      "Mineral/soft drinks",
      "Boat",
      "Grilled fish after fishing",
      "Transfer from villa and back",
    ],
    excludes: [],
  },

  // ---------------------------------------------------------------- Village Adventure
  {
    slug: "village-adventure",
    categorySlug: "village-adventure",
    name: "Village Adventure",
    summary: "Experience a full day of Balinese daily life, from the market to the rice fields.",
    description:
      "A local market visit, a school visit (during holidays), a Balinese house compound tour and daily-life demonstration, a healthy welcome drink, a cooking experience (3 recipes) and lunch, then afternoon trekking to the rice field for an irrigation lesson and farming — paddy planting and plowing with cows — finished with a coconut tree climbing show and young coconut refreshment. Maximum 12 people per class.",
    priceTiers: [
      { people: 6, priceLabel: "IDR 925.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 950.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 990.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 1.050.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 1.175.000", unit: "per-person" },
    ],
    includes: ["Hotel transfer", "Guide", "Insurance"],
    excludes: [],
  },

  // ---------------------------------------------------------------- Cycling Tour
  {
    slug: "cycling-tour",
    categorySlug: "cycling-tour",
    name: "Cycling Tour",
    summary: "A 1.5-hour village ride finishing with a Balinese compound and coconut-oil demo.",
    description:
      "1.5 hours cycling around the village, with a school visit, rice fields, a sacred giant tree and a refreshment stop, then a 30-minute downhill ride to Rumah Desa for a Balinese compound tour, daily-life explanation and coconut oil making.",
    duration: "Arrival 10:00 AM - Finish 02:00 PM",
    priceTiers: [
      { people: 6, priceLabel: "IDR 810.000", unit: "per-person" },
      { people: 5, priceLabel: "IDR 835.000", unit: "per-person" },
      { people: 4, priceLabel: "IDR 875.000", unit: "per-person" },
      { people: 3, priceLabel: "IDR 935.000", unit: "per-person" },
      { people: 2, priceLabel: "IDR 1.060.000", unit: "per-person" },
    ],
    includes: [
      "Return transfer",
      "Welcome drink & Balinese snack (tea & water)",
      "Lunch (family style)",
      "Guide & insurance",
    ],
    excludes: [],
  },
];

export function getToursByCategory(categorySlug: string): TourProduct[] {
  return tours.filter((t) => t.categorySlug === categorySlug);
}

export function getTour(categorySlug: string, slug: string): TourProduct | undefined {
  return tours.find((t) => t.categorySlug === categorySlug && t.slug === slug);
}
