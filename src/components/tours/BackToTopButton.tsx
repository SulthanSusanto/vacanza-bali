"use client";

import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 800);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      // Offset clear of the site-wide WhatsApp affordances (StickyWhatsAppBar
      // on mobile, WhatsAppFab pill on desktop) rather than stacking on them.
      className="fixed bottom-24 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-black bg-white text-black shadow-lg transition-transform hover:scale-105 md:bottom-8 md:right-28"
    >
      <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 11V3M7 3L3 7M7 3L11 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
