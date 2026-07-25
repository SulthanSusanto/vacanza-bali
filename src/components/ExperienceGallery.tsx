import type { ExperiencePhoto, PlaceholderTheme } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";

/**
 * Horizontal-scrolling photo strip shown on every category page, between the
 * Hero and the pricing list — works on every viewport (unlike a desktop-only
 * side rail), so it's the primary way this page builds desire before a
 * visitor reaches pricing, not just a wide-screen bonus. Each photo is
 * captioned with a real itinerary moment (from src/data/tours.ts) rather
 * than a generic category label, so the strip reads as a preview of the day
 * rather than decoration.
 */
export function ExperienceGallery({
  theme,
  photos,
}: {
  theme: PlaceholderTheme;
  photos: ExperiencePhoto[];
}) {
  // A single photo would just repeat the Hero banner above it — not worth a
  // whole section. Some categories don't have 2+ real photos yet; see the
  // per-category notes in src/data/categories.ts.
  if (photos.length < 2) return null;

  return (
    <section className="pt-10">
      <h2 className="mx-auto max-w-4xl px-4 text-lg font-bold text-foreground sm:px-6 md:text-xl lg:px-8">
        See the experience
      </h2>
      {/* Full-bleed, not boxed inside max-w-4xl like the pricing list below —
          this section is mood/inspiration, not another list of decisions, so
          it gets a visually distinct treatment: it scrolls flush to the
          viewport edge instead of stopping at the content column. */}
      <div className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto py-2 pl-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:pl-6 lg:pl-8 [&::-webkit-scrollbar]:hidden">
        {photos.map((photo) => (
          <PlaceholderImage
            key={photo.src}
            theme={theme}
            label={photo.caption}
            src={photo.src}
            className="h-44 w-64 shrink-0 snap-start rounded-xl sm:h-56 sm:w-80 md:rounded-2xl"
          />
        ))}
        <div className="w-1 shrink-0 sm:w-2" aria-hidden />
      </div>
    </section>
  );
}
