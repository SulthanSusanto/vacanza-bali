import type { CSSProperties, ReactNode, Ref } from "react";
import type { MaskPosition } from "@/hooks/useMaskPositions";

/**
 * One "window" into a shared background image. Sections 1 and 2 render
 * several of these against the same bgImage/imageWidth so the cards read
 * as a single mosaic rather than repeated crops.
 */
export function MaskedCard({
  bgImage,
  alt,
  position,
  imageWidth,
  focalX,
  isMobile,
  mobileBackgroundPosition,
  className,
  children,
  cardRef,
  style,
}: {
  bgImage: string;
  /** Accessible description of the photo — CSS background-images are invisible to screen readers otherwise. */
  alt: string;
  position?: MaskPosition;
  imageWidth: number;
  focalX: number;
  /**
   * On mobile, cards are stacked and scrolled one at a time — you never see
   * two cards adjacent, so the shared-mosaic effect (the whole point of the
   * windowing math below) is never actually visible. Fall back to a plain
   * cover background instead of computing it, which also skips the
   * measurement work on the devices least able to afford it.
   */
  isMobile?: boolean;
  /**
   * Several cards on a section can share one bgImage (mosaic technique) — on
   * mobile that collapses to plain cover, so without a per-card offset every
   * one of them would render the exact same centered crop back to back.
   * Defaults to "center" for single-image cards where that's a non-issue.
   */
  mobileBackgroundPosition?: string;
  className?: string;
  children?: ReactNode;
  cardRef?: Ref<HTMLDivElement>;
  style?: CSSProperties;
}) {
  const sw = position?.sw ?? 0;
  const sh = position?.sh ?? 0;
  const x = position?.x ?? 0;
  const y = position?.y ?? 0;

  let backgroundStyle: CSSProperties;

  if (isMobile) {
    backgroundStyle = {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: mobileBackgroundPosition ?? "center",
      ...style,
    };
  } else {
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

    backgroundStyle = {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: `auto ${renderHeight}px`,
      backgroundPosition: `-${x + focalOffset}px -${y}px`,
      backgroundRepeat: "no-repeat",
      ...style,
    };
  }

  return (
    <div ref={cardRef} className={className} style={backgroundStyle}>
      {/* Visually hidden, not role="img" on the container — these cards
          hold real headings/links as children, and role="img" would flatten
          the whole subtree into one opaque image for screen readers. */}
      <span className="sr-only">{alt}</span>
      {children}
    </div>
  );
}
