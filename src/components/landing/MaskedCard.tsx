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

  const overflow = imageWidth > sw ? imageWidth - sw : 0;
  const focalOffset = overflow * focalX;

  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: `auto ${sh}px`,
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
