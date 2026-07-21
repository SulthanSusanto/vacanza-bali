import { MessageCircle } from "lucide-react";
import { CategoryIconRow } from "@/components/CategoryIconRow";
import { PromoBanner } from "@/components/PromoBanner";
import { PopularToursCarousel } from "@/components/PopularToursCarousel";
import { CategoryCard } from "@/components/CategoryCard";
import { TrustRow } from "@/components/TrustRow";
import { categories } from "@/data/categories";
import { InstagramIcon, TikTokIcon } from "@/components/BrandIcons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Home() {
  const whatsappHref = buildWhatsAppLink("Hi Vacanza Bali, I'd like to know more about your tours.");

  return (
    <>
      <CategoryIconRow />
      <PromoBanner />
      <PopularToursCarousel />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">All tours</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Nine categories, real pricing for your group size, booked on WhatsApp.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <TrustRow />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <p className="text-xl font-bold text-card-foreground sm:text-2xl">
            Questions? Chat with us directly.
          </p>
          <p className="max-w-md text-sm text-muted-foreground">
            Every booking is confirmed over WhatsApp — tell us your dates and group size.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
          <div className="mt-2 flex items-center gap-4">
            <a
              href="https://www.instagram.com/vacanza_balitour"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <InstagramIcon className="h-4 w-4" /> @vacanza_balitour
            </a>
            <a
              href="https://www.tiktok.com/@vacanzabali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <TikTokIcon className="h-4 w-4" /> @vacanzabali
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
