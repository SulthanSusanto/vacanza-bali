import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";

// Placeholder — swap for a real owned/hosted photo before shipping (same
// caveat as every other image on this page).
const OG_IMAGE =
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=85";

export const metadata: Metadata = {
  description:
    "Private tours and day trips across Bali — dolphin encounters, sunrise treks, waterfalls and temples, booked direct on WhatsApp.",
  openGraph: {
    title: "Vacanza Bali - Private Tours & Day Trips",
    description:
      "Private tours and day trips across Bali — dolphin encounters, sunrise treks, waterfalls and temples, booked direct on WhatsApp.",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vacanza Bali - Private Tours & Day Trips",
    images: [OG_IMAGE],
  },
};

// `url` intentionally omitted — no real production domain exists yet, and
// fabricating one would put a dead link in structured data. Add it once
// this actually ships somewhere.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Vacanza Bali",
  description:
    "Private tours and day trips across Bali, booked direct on WhatsApp — dolphin encounters, sunrise treks, waterfalls and temples.",
  sameAs: [
    "https://www.instagram.com/vacanza_balitour",
    "https://www.tiktok.com/@vacanzabali",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
