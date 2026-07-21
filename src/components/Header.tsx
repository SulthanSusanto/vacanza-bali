"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { categories } from "@/data/categories";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled && !mobileOpen;
  const linkClass = transparent
    ? "text-sm font-medium text-white/85 hover:text-white"
    : "text-sm font-medium text-foreground/80 hover:text-primary";

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/90 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`font-display text-xl font-semibold ${transparent ? "text-white" : "text-foreground"}`}
        >
          Vacanza <span className={transparent ? "text-white/70" : "text-primary"}>Bali</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className={linkClass}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setToursOpen(true)}
            onMouseLeave={() => setToursOpen(false)}
          >
            <button type="button" className={`flex items-center gap-1 ${linkClass}`} aria-expanded={toursOpen}>
              Tours <ChevronDown className="h-4 w-4" />
            </button>
            {toursOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2">
                <div className="grid grid-cols-1 gap-1 rounded-xl border border-border bg-card p-2 shadow-lg">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/tours/${c.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-card-foreground hover:bg-muted"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className={linkClass}>
            About
          </Link>
          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 md:inline-flex"
        >
          Book Now
        </Link>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-lg p-2 md:hidden ${
            transparent ? "text-white" : "text-foreground"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden">
          <Link
            href="/"
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-muted"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Tours
          </p>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/tours/${c.slug}`}
              className="block rounded-lg px-3 py-2.5 text-sm text-foreground/90 hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              {c.name}
            </Link>
          ))}

          <div className="mt-2 border-t border-border pt-2">
            <Link
              href="/about"
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
