"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { StickyWhatsAppBar } from "@/components/StickyWhatsAppBar";

/**
 * The landing page (/) is a fully self-contained experience (its own splash
 * screen, and it builds its own clearance under the fixed Navbar) — every
 * other route shares the same Navbar plus Footer/WhatsApp affordances.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  if (isLanding) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20 pt-16 sm:pb-0 md:pt-20">{children}</main>
      <Footer />
      <WhatsAppFab />
      <StickyWhatsAppBar />
    </>
  );
}
