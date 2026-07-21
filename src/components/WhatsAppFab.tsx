import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const href = buildWhatsAppLink(
    "Hi Vacanza Bali, I'd like to know more about your tours."
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95 sm:flex"
      aria-label="Chat with Vacanza Bali on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
