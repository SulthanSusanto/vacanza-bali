"use client";

import type { CSSProperties } from "react";
import type { FerryTicket } from "@/data/types";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function FerryTicketCard({ ticket, style }: { ticket: FerryTicket; style?: CSSProperties }) {
  const whatsappHref = buildWhatsAppLink(`Hi Vacanza Bali, I'd like to book the ${ticket.name}.`);

  return (
    <div style={style} className="flex flex-col gap-4 rounded-xl bg-stone-50 p-5 md:rounded-2xl md:p-6">
      <div>
        <h3 className="text-lg font-bold leading-snug text-black md:text-xl">{ticket.name}</h3>
        <p className="mt-1 text-xs leading-5 text-black/70 md:text-sm">{ticket.route}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="rounded-xl border border-black/10 bg-white px-4 py-2">
          <p className="text-xs font-semibold text-black/50">One Way</p>
          <p className="text-lg font-bold text-black">{ticket.priceOneWay}</p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white px-4 py-2">
          <p className="text-xs font-semibold text-black/50">Return</p>
          <p className="text-lg font-bold text-black">{ticket.priceReturn}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {ticket.scheduleGroups.map((group) => (
          <div key={group.title}>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-black/50">
              {group.title}
            </p>
            <ul className="mt-1 space-y-1 text-xs text-black/70 md:text-sm">
              {group.items.map((item, i) => (
                <li key={i} className="flex justify-between gap-4">
                  {item.label && <span>{item.label}</span>}
                  <span className="font-semibold">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {ticket.notes?.map((note) => (
        <p key={note} className="text-[11px] italic text-black/50 md:text-xs">
          {note}
        </p>
      ))}

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
