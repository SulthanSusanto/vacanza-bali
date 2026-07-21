import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PriceSelector } from "@/components/PriceSelector";
import { IncludeExcludeList } from "@/components/IncludeExcludeList";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { categories, getCategory } from "@/data/categories";
import { getTour, getToursByCategory, tours } from "@/data/tours";

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

  const otherToursInCategory = getToursByCategory(category.slug).filter(
    (t) => t.slug !== tour.slug
  );
  const otherCategories = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Tours", href: "/tours" },
          { label: category.name, href: `/tours/${category.slug}` },
          { label: tour.name },
        ]}
      />
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

            <div className="mt-8 grid grid-cols-2 gap-3">
              <PlaceholderImage
                theme={category.placeholderTheme}
                label={tour.name}
                seed={`${tour.slug}-gallery-1`}
                showCaption={false}
                className="h-40 w-full rounded-xl sm:h-56"
              />
              <PlaceholderImage
                theme={category.placeholderTheme}
                label={tour.name}
                seed={`${tour.slug}-gallery-2`}
                showCaption={false}
                className="h-40 w-full rounded-xl sm:h-56"
              />
            </div>

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

      {otherToursInCategory.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-foreground md:text-2xl">
            More {category.name}
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {otherToursInCategory.map((t) => (
              <ProductCard key={t.slug} tour={t} theme={category.placeholderTheme} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">See other categories</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {otherCategories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>
    </>
  );
}
