"use client";

import { useEffect, useState, type CSSProperties, type RefObject } from "react";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

/**
 * Takes a ref the caller owns and attaches to the section directly — the
 * hook only subscribes to its visibility, it never mutates the ref itself
 * (mutating a hook-returned ref from outside trips React Compiler's
 * immutability checks).
 */
export function useStaggeredReveal(containerRef: RefObject<HTMLElement | null>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef, threshold]);

  function getAnimStyle(index: number): CSSProperties {
    const delay = `${index * 120}ms`;
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ${EASE} ${delay}, transform 0.6s ${EASE} ${delay}`,
    };
  }

  return { getAnimStyle };
}
