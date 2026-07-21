import type { Metadata } from "next";
import { Languages, MessagesSquare, Shield, UserCheck } from "lucide-react";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "About / Why Us",
  description:
    "Why travelers book Bali tours direct with Vacanza Bali: English-speaking guides, insured activities, and real per-person pricing.",
};

const DIFFERENTIATORS = [
  {
    icon: Languages,
    title: "English-speaking drivers & guides",
    body: "Every tour includes a driver or guide who speaks English, so nothing gets lost between the itinerary and the actual day.",
  },
  {
    icon: Shield,
    title: "Insurance where it matters",
    body: "Adventure activities like Quad-Bike, rafting and watersports come with insurance included — check each tour's Included list for specifics.",
  },
  {
    icon: UserCheck,
    title: "Licensed local guides on Mt. Batur",
    body: "Sunrise trekking is led by licensed local guides who know the mountain in the dark, not just in daylight.",
  },
  {
    icon: MessagesSquare,
    title: "Real prices, no back-and-forth",
    body: "Pricing is published per group size on every tour page — pick your headcount and see the exact per-person price before you message us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        theme="jungle"
        eyebrow="About Vacanza Bali"
        title="A local team, straightforward pricing."
        subtitle="We run dolphin tours, waterfall trips, sunrise treks and island-hopping boats across Bali — booked directly, no middleman markup."
        size="md"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {DIFFERENTIATORS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl bg-card shadow-md shadow-black/5 p-6">
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-card-foreground sm:text-3xl">
            How booking works
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            <li>
              <p className="text-3xl font-semibold text-primary">1</p>
              <p className="mt-2 font-medium text-card-foreground">Browse a tour</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pick a category, then a tour — every listing shows what&apos;s included.
              </p>
            </li>
            <li>
              <p className="text-3xl font-semibold text-primary">2</p>
              <p className="mt-2 font-medium text-card-foreground">Choose your group size</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tap your headcount (and pickup area, if it applies) to see the real per-person price.
              </p>
            </li>
            <li>
              <p className="text-3xl font-semibold text-primary">3</p>
              <p className="mt-2 font-medium text-card-foreground">Book on WhatsApp</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Send the pre-filled message — we&apos;ll confirm your date and pickup details directly.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
