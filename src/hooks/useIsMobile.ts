"use client";

import { useLayoutEffect, useState } from "react";

export function useIsMobile(): boolean {
  // Always starts false, matching what the server renders (no `window` to
  // check there) — the previous version used a lazy initializer that ran
  // matchMedia() immediately on the client's first render too, which could
  // return true before hydration even finished comparing against the
  // server's false-based HTML. Correcting the real value in a layout effect
  // (before paint, so there's no visible flash) keeps the client's first
  // render identical to the server's, then fixes it right after.
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");

    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration-safe correction, not a subscription callback
    setIsMobile(mql.matches);

    function handleChange(e: MediaQueryListEvent) {
      setIsMobile(e.matches);
    }

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}
