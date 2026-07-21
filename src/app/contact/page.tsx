import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { Hero } from "@/components/Hero";
import { InstagramIcon, TikTokIcon } from "@/components/BrandIcons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a Vacanza Bali tour on WhatsApp, or follow along on Instagram and TikTok.",
};

export default function ContactPage() {
  const whatsappHref = buildWhatsAppLink(
    "Hi Vacanza Bali, I'd like to ask about booking a tour."
  );

  return (
    <>
      <Hero
        theme="sunrise"
        eyebrow="Contact"
        title="Let's plan your trip."
        subtitle="Every booking is confirmed directly over WhatsApp — send us your dates and group size and we'll take it from there."
        size="md"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <MessageCircle className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 font-display text-2xl font-semibold text-card-foreground">
            Chat with us on WhatsApp
          </h2>
          <p className="mt-2 font-mono text-lg text-card-foreground">+62 812-5332-0304</p>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Tell us the tour, your travel dates and how many people are coming — we&apos;ll reply with
            availability and pickup details.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            Start a WhatsApp chat
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="https://www.instagram.com/vacanza_balitour"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary"
          >
            <InstagramIcon className="h-6 w-6 text-primary" />
            <div>
              <p className="font-medium text-card-foreground">Instagram</p>
              <p className="text-sm text-muted-foreground">@vacanza_balitour</p>
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@vacanzabali"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary"
          >
            <TikTokIcon className="h-6 w-6 text-primary" />
            <div>
              <p className="font-medium text-card-foreground">TikTok</p>
              <p className="text-sm text-muted-foreground">@vacanzabali</p>
            </div>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          Prefer to call? Same number: +62 812-5332-0304
        </div>
      </section>
    </>
  );
}
