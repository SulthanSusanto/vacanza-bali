import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategory } from "@/data/categories";
import { getToursByCategory } from "@/data/tours";
import { ferryTickets } from "@/data/ferry-tickets";
import type { FerryTicket } from "@/data/types";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Params = { category: string };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: category.name, description: category.tagline };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: category.name }]} />
      <Hero
        theme={category.placeholderTheme}
        eyebrow="Tours"
        title={category.name}
        subtitle={category.tagline}
        size="md"
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {category.slug === "boat-tickets" ? (
          <div className="flex flex-col gap-6">
            {ferryTickets.map((ticket) => (
              <FerryTicketCard key={ticket.slug} ticket={ticket} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {getToursByCategory(category.slug).map((tour) => (
              <ProductCard key={tour.slug} tour={tour} theme={category.placeholderTheme} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function FerryTicketCard({ ticket }: { ticket: FerryTicket }) {
  const whatsappHref = buildWhatsAppLink(
    `Hi Vacanza Bali, I'd like to book the ${ticket.name}.`
  );

  return (
    <div className="rounded-2xl bg-card shadow-md shadow-black/5 p-6">
      <h3 className="text-xl font-semibold text-card-foreground">{ticket.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{ticket.route}</p>

      {ticket.notes?.map((note) => (
        <p key={note} className="mt-2 text-sm text-muted-foreground">
          {note}
        </p>
      ))}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {ticket.scheduleGroups.map((group) => (
          <div key={group.title} className="rounded-xl bg-muted p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {group.title}
            </p>
            <ul className="mt-2 space-y-1 text-sm text-card-foreground">
              {group.items.map((item, i) => (
                <li key={i} className="flex justify-between gap-4">
                  {item.label && <span>{item.label}</span>}
                  <span className={item.label ? "font-mono" : "font-mono text-muted-foreground"}>
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-muted p-4">
        <div className="flex gap-6">
          <div>
            <p className="text-xs text-muted-foreground">One Way</p>
            <p className="font-mono text-lg font-semibold text-foreground">{ticket.priceOneWay}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Return</p>
            <p className="font-mono text-lg font-semibold text-foreground">{ticket.priceReturn}</p>
          </div>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          Book via WhatsApp
        </a>
      </div>
    </div>
  );
}
