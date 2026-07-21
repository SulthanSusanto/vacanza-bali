export type SceneId = "cold-open" | "dawn" | "midday" | "afternoon" | "golden-hour" | "night";

export interface Scene {
  id: SceneId;
  time: string;
  headline: string;
  subhead: string;
  gradient: string;
  categorySlugs?: string[];
}

export const SCENES: Scene[] = [
  {
    id: "cold-open",
    time: "03:45 AM",
    headline: "Bali starts before sunrise.",
    subhead: "Vacanza Bali — tours booked straight from your phone.",
    gradient: "radial-gradient(circle at 30% 70%, #1a2230 0%, #05070a 60%, #020304 100%)",
  },
  {
    id: "dawn",
    time: "Dawn",
    headline: "Chase the sunrise.",
    subhead: "Dolphin swims off Lovina, a jeep ride above the clouds at Mt. Batur.",
    gradient: "linear-gradient(160deg, #12173a 0%, #3a3f7a 35%, #b6567a 70%, #ff9466 100%)",
    categorySlugs: ["dolphin-tour", "mt-batur"],
  },
  {
    id: "midday",
    time: "Midday",
    headline: "Deep in the green.",
    subhead: "Waterfalls, ATV mud tracks and rice-field culture around Ubud.",
    gradient: "linear-gradient(160deg, #0d3d2c 0%, #1f7a4d 55%, #6ea23a 100%)",
    categorySlugs: ["ubud-trip", "cycling-tour", "village-adventure"],
  },
  {
    id: "afternoon",
    time: "Afternoon",
    headline: "Open water, clear plans.",
    subhead: "Island-hopping viewpoints, a fishing charter, fast boats to the Gilis.",
    gradient: "linear-gradient(160deg, #04324a 0%, #0f7a99 55%, #37c2c7 100%)",
    categorySlugs: ["nusa-penida", "fishing-trip", "boat-tickets"],
  },
  {
    id: "golden-hour",
    time: "Golden hour",
    headline: "Where the day burns out.",
    subhead: "Uluwatu's cliff-top temple and the Kecak fire dance at sunset.",
    gradient: "linear-gradient(160deg, #4a1a12 0%, #c8471f 45%, #ff8a4c 75%, #ffcf8a 100%)",
    categorySlugs: ["uluwatu-trip"],
  },
  {
    id: "night",
    time: "Night",
    headline: "Plan tomorrow, tonight.",
    subhead: "One message on WhatsApp confirms your day.",
    gradient: "linear-gradient(160deg, #06181a 0%, #0c2b28 60%, #123a34 100%)",
  },
];
