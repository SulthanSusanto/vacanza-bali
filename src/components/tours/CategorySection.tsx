"use client";

import { useRef } from "react";
import type { TourCategory, TourProduct, FerryTicket } from "@/data/types";
import { useStaggeredReveal } from "@/hooks/useStaggeredReveal";
import { TourSummaryCard } from "@/components/tours/TourSummaryCard";
import { FerryTicketCard } from "@/components/tours/FerryTicketCard";

export function CategorySection({
  category,
  tours,
  ferryTickets,
}: {
  category: TourCategory;
  tours?: TourProduct[];
  ferryTickets?: FerryTicket[];
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reveal = useStaggeredReveal(sectionRef);

  return (
    <section
      id={category.slug}
      ref={sectionRef}
      style={{ scrollMarginTop: "var(--tours-scroll-offset, 140px)" }}
      className="px-3 py-6 md:px-5 md:py-10"
    >
      <h2 className="text-2xl font-bold text-black md:text-4xl">{category.name}</h2>
      <p className="mt-1 text-xs font-semibold text-black/60 md:text-sm">{category.tagline}</p>

      <div className="mt-4 grid grid-cols-1 gap-3 md:mt-6 md:grid-cols-2 md:gap-4">
        {tours?.map((tour, i) => (
          <TourSummaryCard
            key={tour.slug}
            tour={tour}
            category={category}
            style={reveal.getAnimStyle(i)}
          />
        ))}
        {ferryTickets?.map((ticket, i) => (
          <FerryTicketCard key={ticket.slug} ticket={ticket} style={reveal.getAnimStyle(i)} />
        ))}
      </div>
    </section>
  );
}
