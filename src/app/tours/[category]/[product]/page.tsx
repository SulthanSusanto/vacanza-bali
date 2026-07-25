import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductDetailBody } from "@/components/ProductDetailBody";
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
        image={category.heroImage}
        eyebrow={category.name}
        title={tour.name}
        subtitle={tour.summary}
        size="md"
      />

      <ProductDetailBody tour={tour} category={category} />

      {otherToursInCategory.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-foreground md:text-2xl">
            More {category.name}
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {otherToursInCategory.map((t) => (
              <ProductCard key={t.slug} tour={t} category={category} />
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
