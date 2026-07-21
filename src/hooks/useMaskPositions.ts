"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

export interface MaskPosition {
  x: number;
  y: number;
  sw: number;
  sh: number;
}

/**
 * Measures each card's offset relative to its section container, plus the
 * section's own width/height (shared across every card) — the geometry the
 * "masked card" mosaic technique needs to carve one shared background image
 * into per-card windows.
 */
export function useMaskPositions(
  sectionRef: RefObject<HTMLElement | null>,
  cardRefs: RefObject<(HTMLElement | null)[]>
): MaskPosition[] {
  const [positions, setPositions] = useState<MaskPosition[]>([]);

  // useLayoutEffect (not useEffect) so the *initial* measure() call happens
  // synchronously before the browser paints — ResizeObserver's own callback
  // is always async, so without this every card would flash at 0x0 (no
  // background image) on first load until the observer's first tick fires.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function measure() {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;
      const sectionRect = sectionEl.getBoundingClientRect();

      const next = (cardRefs.current ?? []).map((card): MaskPosition => {
        if (!card) {
          return { x: 0, y: 0, sw: sectionRect.width, sh: sectionRect.height };
        }
        const cardRect = card.getBoundingClientRect();
        return {
          x: cardRect.left - sectionRect.left,
          y: cardRect.top - sectionRect.top,
          sw: sectionRect.width,
          sh: sectionRect.height,
        };
      });

      setPositions(next);
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef, cardRefs]);

  return positions;
}
