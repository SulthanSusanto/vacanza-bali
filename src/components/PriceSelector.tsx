"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import type { TourProduct } from "@/data/types";
import { buildWhatsAppLink, bookingMessage } from "@/lib/whatsapp";

export function PriceSelector({ tour }: { tour: TourProduct }) {
  const hasGroups = Boolean(tour.tierGroups && tour.tierGroups.length > 0);
  const groups = tour.tierGroups ?? (tour.priceTiers ? [{ groupLabel: "", tiers: tour.priceTiers }] : []);

  const [groupIndex, setGroupIndex] = useState(0);
  const [tierIndex, setTierIndex] = useState(0);

  const activeGroup = groups[groupIndex];
  const tiers = activeGroup?.tiers ?? [];
  const activeTier = tiers[tierIndex];

  if (!activeGroup || !activeTier) return null;

  const isHeadcountLadder = tiers.every((t) => typeof t.people === "number");

  const whatsappHref = buildWhatsAppLink(
    bookingMessage(
      tour.name,
      activeTier.people,
      hasGroups ? activeGroup.groupLabel : activeTier.label
    )
  );

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      {hasGroups && groups.length > 1 && (
        <div className="mb-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Choose your pickup area
          </p>
          <div className="flex flex-wrap gap-2">
            {groups.map((g, i) => (
              <button
                key={g.groupLabel}
                type="button"
                onClick={() => {
                  setGroupIndex(i);
                  setTierIndex(0);
                }}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-colors ${
                  i === groupIndex
                    ? "bg-primary text-primary-foreground ring-primary"
                    : "bg-muted text-muted-foreground ring-border hover:ring-primary/50"
                }`}
              >
                {g.groupLabel}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {isHeadcountLadder ? "Group size" : "Choose an option"}
      </p>
      <div className="flex flex-wrap gap-2">
        {tiers.map((t, i) => (
          <button
            key={t.label ?? t.people}
            type="button"
            onClick={() => setTierIndex(i)}
            className={`rounded-xl px-3.5 py-2 text-sm font-medium ring-1 transition-colors ${
              i === tierIndex
                ? "bg-primary text-primary-foreground ring-primary"
                : "bg-muted text-card-foreground ring-border hover:ring-primary/50"
            }`}
          >
            {isHeadcountLadder ? `${t.people} people` : t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-muted p-4">
        <p className="text-xs text-muted-foreground">
          Price per {activeTier.unit === "per-boat" ? "boat" : "person"}
        </p>
        <p className="font-mono text-3xl font-bold text-foreground">{activeTier.priceLabel}</p>
        {activeTier.note && <p className="mt-1 text-xs text-muted-foreground">{activeTier.note}</p>}
      </div>

      {tour.zoneSurcharges && tour.zoneSurcharges.length > 0 && (
        <div className="mt-4 rounded-xl border border-dashed border-border p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            + Pick-up fee outside free zone
            <span className="block font-normal normal-case text-muted-foreground/80">
              per car, split across your group
            </span>
          </p>
          <ul className="mt-2 space-y-1 text-sm text-card-foreground">
            {tour.zoneSurcharges.map((z) => (
              <li key={z.zone} className="flex justify-between gap-4">
                <span>{z.zone}</span>
                <span className="font-mono">{z.fee}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        <MessageCircle className="h-5 w-5" />
        Book via WhatsApp
      </a>
    </div>
  );
}
