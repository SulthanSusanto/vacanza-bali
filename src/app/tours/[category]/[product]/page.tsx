import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { PriceSelector } from "@/components/PriceSelector";
import { IncludeExcludeList } from "@/components/IncludeExcludeList";
import { getCategory } from "@/data/categories";
import { getTour, tours } from "@/data/tours";

type Params = { category: string; product: string };

export function generateStaticParams() {
  return tours.map((t) => ({ category: t.categorySlug, product: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, product } = await params;
  const tour = getTour(category, product);
  if (!tour) return {};
  return { title: tour.name, description: tour.summary };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { category: categorySlug, product } = await params;
  const category = getCategory(categorySlug);
  const tour = getTour(categorySlug, product);
  if (!category || !tour) notFound();

  return (
    <>
      <Hero
        theme={category.placeholderTheme}
        eyebrow={category.name}
        title={tour.name}
        subtitle={tour.summary}
        size="md"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0">
            <p className="text-base leading-relaxed text-foreground/90">{tour.description}</p>

            {(tour.duration || tour.pickupTime) && (
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                {tour.duration && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    {tour.duration}
                  </span>
                )}
                {tour.pickupTime && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    Pick-up: {tour.pickupTime}
                  </span>
                )}
              </div>
            )}

            <div className="mt-8">
              <IncludeExcludeList includes={tour.includes} excludes={tour.excludes} />
            </div>

            {tour.whatToBring && tour.whatToBring.length > 0 && (
              <div className="mt-8">
                <h3 className="text-base font-semibold text-foreground">What to bring</h3>
                <p className="mt-2 text-sm text-foreground/90">{tour.whatToBring.join(", ")}</p>
              </div>
            )}

            {tour.addOns && tour.addOns.length > 0 && (
              <div className="mt-8">
                <h3 className="text-base font-semibold text-foreground">Optional add-ons</h3>
                <div className="mt-3 flex flex-col gap-3">
                  {tour.addOns.map((addOn) => (
                    <div key={addOn.name} className="rounded-xl bg-card shadow-md shadow-black/5 p-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-medium text-card-foreground">{addOn.name}</p>
                        <p className="font-mono text-sm font-semibold text-primary">{addOn.price}</p>
                      </div>
                      {addOn.description && (
                        <p className="mt-1 text-sm text-muted-foreground">{addOn.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tour.notes && tour.notes.length > 0 && (
              <div className="mt-8 rounded-xl bg-muted p-4">
                {tour.notes.map((note) => (
                  <p key={note} className="text-sm text-muted-foreground">
                    {note}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <PriceSelector tour={tour} />
          </div>
        </div>
      </section>
    </>
  );
}
