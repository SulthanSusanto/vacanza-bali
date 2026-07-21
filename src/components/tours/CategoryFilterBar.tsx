"use client";

import { useEffect, useRef, useState } from "react";
import { categories } from "@/data/categories";

export function CategoryFilterBar() {
  const [active, setActive] = useState(categories[0]?.slug ?? "");
  const [navHeight, setNavHeight] = useState(64);
  const barRef = useRef<HTMLDivElement | null>(null);

  // Measure the real Navbar height instead of guessing a pixel value — this
  // also publishes --tours-scroll-offset (navbar + this bar's own height)
  // for CategorySection to use as scroll-margin-top, so a pill click never
  // buries the heading it just scrolled to under the sticky bars.
  useEffect(() => {
    function measure() {
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 64;
      const barHeight = barRef.current?.getBoundingClientRect().height ?? 0;
      setNavHeight(headerHeight);
      document.documentElement.style.setProperty(
        "--tours-scroll-offset",
        `${headerHeight + barHeight + 16}px`
      );
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Category sections have very different heights (1 card vs 7 cards), so a
  // narrow fixed-band rootMargin can skip short sections entirely as the
  // user scrolls past them. Use a wide top-biased band instead, and among
  // everything currently intersecting, pick whichever is closest to the top.
  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;
        const topMost = intersecting.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActive(topMost.target.id);
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: [0, 0.1, 0.5, 1] }
    );

    for (const el of sections) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleClick(slug: string) {
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(slug);
  }

  return (
    <nav
      ref={barRef}
      style={{ top: navHeight }}
      className="sticky z-30 bg-white/90 backdrop-blur-md"
    >
      <div className="flex gap-2 overflow-x-auto px-3 py-3 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:px-5 [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => handleClick(c.slug)}
            aria-current={active === c.slug ? "true" : undefined}
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
