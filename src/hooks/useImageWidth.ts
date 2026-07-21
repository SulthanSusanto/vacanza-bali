"use client";

import { useEffect, useState } from "react";

/** How wide `src` would render if scaled to fill `sectionHeight` exactly. */
export function useImageWidth(src: string, sectionHeight: number): number {
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (!src || !sectionHeight) return;

    let cancelled = false;
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      if (cancelled) return;
      setImageWidth(img.naturalWidth * (sectionHeight / img.naturalHeight));
    };

    return () => {
      cancelled = true;
    };
  }, [src, sectionHeight]);

  return imageWidth;
}
