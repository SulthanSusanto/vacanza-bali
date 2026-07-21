import type { CSSProperties, ReactNode, Ref } from "react";
import type { MaskPosition } from "@/hooks/useMaskPositions";

/**
 * One "window" into a shared background image. Sections 1 and 2 render
 * several of these against the same bgImage/imageWidth so the cards read
 * as a single mosaic rather than repeated crops.
 */
export function MaskedCard({
  bgImage,
  position,
  imageWidth,
  focalX,
  className,
  children,
  cardRef,
  style,
}: {
  bgImage: string;
  position?: MaskPosition;
  imageWidth: number;
  focalX: number;
  className?: string;
  children?: ReactNode;
  cardRef?: Ref<HTMLDivElement>;
  style?: CSSProperties;
}) {
  const sw = position?.sw ?? 0;
  const sh = position?.sh ?? 0;
  const x = position?.x ?? 0;
  const y = position?.y ?? 0;

  // imageWidth is the image's width when scaled to fill the section's
  // *height*. On wide-but-not-very-tall viewports that can come out
  // narrower than the section itself — with background-repeat:no-repeat
  // that leaves a blank gap. Scale up (preserving aspect ratio, derived
  // from imageWidth/sh) so the rendered width never falls below sw; only
  // kicks in when the height-based scale wasn't already wide enough.
  const aspect = sh > 0 ? imageWidth / sh : 0;
  const renderHeight = aspect > 0 ? Math.max(sh, sw / aspect) : sh;
  const renderWidth = aspect > 0 ? renderHeight * aspect : imageWidth;

  const overflow = renderWidth > sw ? renderWidth - sw : 0;
  const focalOffset = overflow * focalX;

  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: `auto ${renderHeight}px`,
    backgroundPosition: `-${x + focalOffset}px -${y}px`,
    backgroundRepeat: "no-repeat",
    ...style,
  };

  return (
    <div ref={cardRef} className={className} style={backgroundStyle}>
      {children}
    </div>
  );
}
