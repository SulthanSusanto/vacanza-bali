import Link from "next/link";
import { categories } from "@/data/categories";
import { CATEGORY_COLORS } from "@/lib/category-colors";

export function CategoryIconRow() {
  return (
    <nav aria-label="Tour categories" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-9 sm:gap-2 sm:overflow-visible">
          {categories.map((category) => {
            const { bg, text, icon: Icon } = CATEGORY_COLORS[category.slug];
            return (
              <Link
                key={category.slug}
                href={`/tours/${category.slug}`}
                className="flex shrink-0 flex-col items-center gap-2 rounded-xl px-1 py-1 text-center hover:bg-muted"
              >
                <span className={`flex h-14 w-14 items-center justify-center rounded-full ${bg} ${text}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <span className="w-16 text-xs font-medium leading-tight text-card-foreground sm:w-full">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
