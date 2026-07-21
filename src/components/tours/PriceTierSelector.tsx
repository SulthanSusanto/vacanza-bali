"use client";

import { useState } from "react";
import type { PriceTier, PriceTierGroup, ZoneSurcharge } from "@/data/types";

function CircleButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-colors md:h-11 md:w-11 md:text-sm ${
        active ? "border-black bg-black text-white" : "border-black/20 bg-white text-black hover:border-black"
      }`}
    >
      {label}
    </button>
  );
}

function HeadcountSelector({ tiers }: { tiers: PriceTier[] }) {
  const [index, setIndex] = useState(0);
  const active = tiers[index];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tiers.map((tier, i) => (
          <CircleButton
            key={tier.people}
            label={String(tier.people)}
            active={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <p className="mt-3 text-3xl font-bold text-black md:text-4xl">{active.priceLabel}</p>
      <p className="text-xs font-semibold text-black/50">
        /{active.unit === "per-boat" ? "boat" : "person"}
        {active.note ? ` — ${active.note}` : ""}
      </p>
    </div>
  );
}

function LabeledOptions({ tiers }: { tiers: PriceTier[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tiers.map((tier) => (
        <div key={tier.label} className="rounded-xl border border-black/10 bg-white px-4 py-2">
          <p className="text-xs font-semibold text-black/50">
            {tier.label}
            {tier.note ? ` (${tier.note})` : ""}
          </p>
          <p className="text-lg font-bold text-black">
            {tier.priceLabel}
            <span className="ml-1 text-xs font-semibold text-black/50">
              /{tier.unit === "per-boat" ? "boat" : "person"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

function Tiers({ tiers }: { tiers: PriceTier[] }) {
  const isHeadcountLadder = tiers.every((t) => typeof t.people === "number");
  return isHeadcountLadder ? <HeadcountSelector tiers={tiers} /> : <LabeledOptions tiers={tiers} />;
}

export function PriceTierSelector({
  priceTiers,
  tierGroups,
  zoneSurcharges,
}: {
  priceTiers?: PriceTier[];
  tierGroups?: PriceTierGroup[];
  zoneSurcharges?: ZoneSurcharge[];
}) {
  const [groupIndex, setGroupIndex] = useState(0);

  if (tierGroups && tierGroups.length > 0) {
    const activeGroup = tierGroups[groupIndex];
    return (
      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          {tierGroups.map((group, i) => (
            <button
              key={group.groupLabel}
              type="button"
              onClick={() => setGroupIndex(i)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors md:text-sm ${
                i === groupIndex
                  ? "border-black bg-black text-white"
                  : "border-black/20 bg-white text-black hover:border-black"
              }`}
            >
              {group.groupLabel}
            </button>
          ))}
        </div>
        <Tiers tiers={activeGroup.tiers} />
      </div>
    );
  }

  return (
    <div>
      {priceTiers && priceTiers.length > 0 && <Tiers tiers={priceTiers} />}
      {zoneSurcharges && zoneSurcharges.length > 0 && (
        <div className="mt-3 rounded-xl border border-dashed border-black/20 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-black/50">
            + Pick-up fee outside free zone
          </p>
          <ul className="mt-1.5 space-y-1 text-xs text-black/70">
            {zoneSurcharges.map((z) => (
              <li key={z.zone} className="flex justify-between gap-4">
                <span>{z.zone}</span>
                <span className="font-semibold">{z.fee}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
