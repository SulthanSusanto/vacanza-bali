import Link from "next/link";
import type { TourCategory } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getCategoryStartingPrice } from "@/lib/pricing";

export function CategoryCard({ category }: { category: TourCategory }) {
  const startingPrice = getCategoryStartingPrice(category.slug);

  return (
    <Link
      href={`/tours/${category.slug}`}
      className="group relative flex h-48 flex-col justify-between overflow-hidden rounded-xl md:h-56 md:rounded-2xl"
    >
      <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
        <PlaceholderImage
          theme={category.placeholderTheme}
          label={category.name}
          showCaption={false}
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

      <div className="relative z-10 p-4 md:p-5">
        <h3 className="text-lg font-bold text-white md:text-xl">{category.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-white/80 md:text-sm">{category.tagline}</p>
      </div>

      {startingPrice && (
        <span className="relative z-10 m-4 self-start rounded-full border border-white px-3 py-1.5 text-[11px] font-semibold text-white md:m-5 md:text-xs">
          From {startingPrice}
        </span>
      )}
    </Link>
  );
}
