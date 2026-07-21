"use client";

import { useEffect, useState } from "react";
import { categories } from "@/data/categories";

export function CategoryFilterBar() {
  const [active, setActive] = useState(categories[0]?.slug ?? "");

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    for (const el of sections) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleClick(slug: string) {
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(slug);
  }

  return (
    <nav className="sticky top-[56px] z-30 bg-white/90 backdrop-blur-md md:top-[64px]">
      <div className="flex gap-2 overflow-x-auto px-3 py-3 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:px-5 [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => handleClick(c.slug)}
            className={`whitespace-nowrap rounded-full border border-black px-4 py-2 text-xs font-semibold transition-colors duration-200 md:px-5 md:py-2.5 md:text-sm ${
              active === c.slug ? "bg-black text-white" : "bg-white text-black hover:bg-black/5"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
