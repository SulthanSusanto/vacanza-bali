"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Languages, MessageCircle, Shield, Star, Users2 } from "lucide-react";
import { SCENES } from "./scenes";
import { MagneticButton } from "./MagneticButton";
import { categories } from "@/data/categories";
import type { TourCategory } from "@/data/types";
import { InstagramIcon, TikTokIcon } from "@/components/BrandIcons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const TRUST_SIGNALS = [
  { icon: Languages, label: "English-speaking guides" },
  { icon: Shield, label: "Insurance on adventure tours" },
  { icon: Users2, label: "Small groups, private cars" },
  { icon: Star, label: "Licensed guides on Mt. Batur" },
];

export function DayJourney() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    for (const el of sectionRefs.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10" aria-hidden>
        {SCENES.map((scene, i) => (
          <div
            key={scene.id}
            className="absolute inset-0 motion-safe:transition-opacity motion-safe:duration-700 motion-reduce:transition-none"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          >
            <Image
              src={`https://picsum.photos/seed/${scene.id}/1920/1440`}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              quality={60}
              className="object-cover"
            />
            <div className="absolute inset-0 mix-blend-color" style={{ backgroundImage: scene.gradient }} />
            <div className="absolute inset-0" style={{ backgroundImage: scene.gradient, opacity: 0.35 }} />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {SCENES.map((scene, i) => (
        <section
          key={scene.id}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
          className="relative flex min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full max-w-6xl">
            <p className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-white/70">
              {scene.time}
            </p>
            <h2 className="max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {scene.headline}
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{scene.subhead}</p>

            {scene.id === "cold-open" && (
              <div className="mt-16 flex items-center gap-3 text-white/60">
                <span className="h-10 w-px motion-safe:animate-pulse bg-white/40" />
                <span className="text-xs uppercase tracking-widest">Scroll to follow the day</span>
              </div>
            )}

            {scene.categorySlugs && scene.id !== "golden-hour" && (
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {scene.categorySlugs.map((slug) => {
                  const category = categories.find((c) => c.slug === slug);
                  return category ? <SceneCard key={slug} category={category} /> : null;
                })}
              </div>
            )}

            {scene.id === "golden-hour" && scene.categorySlugs && (
              <div className="mt-12 max-w-xl">
                {scene.categorySlugs.map((slug) => {
                  const category = categories.find((c) => c.slug === slug);
                  return category ? <SceneCard key={slug} category={category} large /> : null;
                })}
              </div>
            )}

            {scene.id === "night" && (
              <div className="mt-12 flex flex-col gap-10">
                <MagneticButton
                  href={buildWhatsAppLink(
                    "Hi Vacanza Bali, I'd like to know more about your tours."
                  )}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </MagneticButton>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.instagram.com/vacanza_balitour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white hover:border-white/60"
                  >
                    <InstagramIcon className="h-4 w-4" /> @vacanza_balitour
                  </a>
                  <a
                    href="https://www.tiktok.com/@vacanzabali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white hover:border-white/60"
                  >
                    <TikTokIcon className="h-4 w-4" /> @vacanzabali
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4">
                  {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5">
                      <Icon className="h-5 w-5 shrink-0 text-white/70" />
                      <p className="text-xs text-white/80">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

function SceneCard({ category, large = false }: { category: TourCategory; large?: boolean }) {
  return (
    <Link
      href={`/tours/${category.slug}`}
      className={`group relative block overflow-hidden rounded-2xl border border-white/20 transition-transform hover:scale-[1.015] ${
        large ? "min-h-64 p-8" : "min-h-48 p-6"
      }`}
    >
      <Image
        src={`https://picsum.photos/seed/${category.slug}/800/600`}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 33vw"
        quality={55}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/35" />
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      <h3 className={`relative font-display font-semibold text-white ${large ? "text-2xl" : "text-lg"}`}>
        {category.name}
      </h3>
      <p className={`relative mt-2 text-white/85 ${large ? "text-base" : "text-sm"}`}>
        {category.tagline}
      </p>
      <span className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
        Explore
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
