import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function StickyWhatsAppBar() {
  const href = buildWhatsAppLink("Hi Vacanza Bali, I'd like to know more about your tours.");

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
      >
        <MessageCircle className="h-5 w-5" />
        Chat on WhatsApp
      </a>
    </div>
  );
}
