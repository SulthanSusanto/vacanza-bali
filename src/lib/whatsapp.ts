const WHATSAPP_NUMBER = "6281253320304";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function bookingMessage(tourName: string, people?: number, groupLabel?: string): string {
  const parts = [`Hi Vacanza Bali, I'd like to book "${tourName}"`];
  if (people) parts.push(`for ${people} people`);
  if (groupLabel) parts.push(`(${groupLabel})`);
  return `${parts.join(" ")}.`;
}
