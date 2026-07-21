import type { FerryTicket } from "./types";

export const ferryTickets: FerryTicket[] = [
  {
    slug: "gili-fast-boat",
    name: "Gili Fast Boat Ticket",
    route: "Padang Bai Harbour, Bali → Gili Islands & Bangsal Lombok → back to Bali",
    scheduleGroups: [
      {
        title: "Drop-off schedule",
        items: [
          { label: "Gili Trawangan", time: "11:30 AM" },
          { label: "Gili Air", time: "11:45 AM" },
          { label: "Gili Meno", time: "12:00 PM" },
          { label: "Bangsal Lombok", time: "12:30 PM" },
        ],
      },
    ],
    priceOneWay: "IDR 350.000",
    priceReturn: "IDR 650.000",
    notes: ["Departure 09:30 AM — please arrive 45 minutes early."],
  },
  {
    slug: "nusa-penida-fast-boat",
    name: "Nusa Penida Fast Boat Ticket",
    route: "Sanur ⇄ Nusa Penida",
    scheduleGroups: [
      {
        title: "Sanur → Nusa Penida",
        items: [
          { time: "07:00 AM" },
          { time: "07:30 AM" },
          { time: "08:00 AM" },
          { time: "08:30 AM" },
          { time: "09:00 AM" },
          { time: "01:00 PM" },
          { time: "03:00 PM" },
        ],
      },
      {
        title: "Nusa Penida → Sanur",
        items: [
          { time: "08:00 AM" },
          { time: "12:00 PM" },
          { time: "01:30 PM" },
          { time: "03:30 PM" },
          { time: "04:00 PM" },
          { time: "04:30 PM" },
          { time: "05:00 PM" },
        ],
      },
    ],
    priceOneWay: "IDR 175.000",
    priceReturn: "IDR 350.000",
  },
];
