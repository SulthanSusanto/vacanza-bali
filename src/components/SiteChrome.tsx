"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { StickyWhatsAppBar } from "@/components/StickyWhatsAppBar";

/**
 * The landing page (/) is a fully self-contained experience (its own splash
 * screen + fixed navbar, no footer) — every other route keeps the shared
 * Header/Footer/WhatsApp affordances.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  if (isLanding) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 pb-20 sm:pb-0">{children}</main>
      <Footer />
      <WhatsAppFab />
      <StickyWhatsAppBar />
    </>
  );
}
