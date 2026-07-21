"use client";

import { useState, type CSSProperties } from "react";
import type { TourProduct } from "@/data/types";
import { PriceTierSelector } from "@/components/tours/PriceTierSelector";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 5L7 9.5L11.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5 shrink-0">
      <path
        d="M2 6.5L4.5 9L10 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-1.5 shrink-0">
      <path d="M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function VariantCard({ tour, style }: { tour: TourProduct; style?: CSSProperties }) {
  const [open, setOpen] = useState(false);
  const whatsappHref = buildWhatsAppLink(`Hi Vacanza Bali, I'd like to book "${tour.name}".`);

  return (
    <div style={style} className="flex flex-col gap-4 rounded-xl bg-stone-50 p-5 md:rounded-2xl md:p-6">
      <div>
        <h3 className="text-lg font-bold leading-snug text-black md:text-xl">{tour.name}</h3>
        <p className="mt-1 text-xs leading-5 text-black/70 md:text-sm">{tour.description}</p>
        {(tour.pickupTime || tour.duration) && (
          <p className="mt-1 text-[11px] font-semibold text-black/50 md:text-xs">
            {tour.pickupTime ?? tour.duration}
          </p>
        )}
      </div>

      <PriceTierSelector
        priceTiers={tour.priceTiers}
        tierGroups={tour.tierGroups}
        zoneSurcharges={tour.zoneSurcharges}
      />

      <div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full cursor-pointer items-center justify-between text-xs font-semibold text-black md:text-sm"
        >
          What&apos;s included
          <ChevronIcon open={open} />
        </button>

        {open && (
          <div className="mt-3 flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {tour.includes.length > 0 && (
                <ul className="space-y-1 text-xs text-black/70 md:text-sm">
                  {tour.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {tour.excludes.length > 0 && (
                <ul className="space-y-1 text-xs text-black/70 md:text-sm">
                  {tour.excludes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <DashIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {tour.whatToBring && tour.whatToBring.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-black md:text-sm">What to bring</p>
                <ul className="mt-1 space-y-1 text-xs text-black/70 md:text-sm">
                  {tour.whatToBring.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tour.addOns && tour.addOns.length > 0 && (
              <div className="flex flex-col gap-1">
                {tour.addOns.map((addOn) => (
                  <p key={addOn.name} className="text-xs font-semibold text-black/70">
                    + {addOn.name}: {addOn.price}
                  </p>
                ))}
              </div>
            )}

            {tour.notes && tour.notes.length > 0 && (
              <div>
                {tour.notes.map((note) => (
                  <p key={note} className="mt-1 text-[11px] italic text-black/50 md:text-xs">
                    {note}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 self-start rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800"
      >
        Book on WhatsApp
      </a>
    </div>
  );
}
