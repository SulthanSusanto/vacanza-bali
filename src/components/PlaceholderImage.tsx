import Image from "next/image";
import { Fish } from "lucide-react";
import type { PlaceholderTheme } from "@/data/types";
import { THEME_STYLES, slugify } from "@/lib/theme-icons";

/**
 * Renders a real local photo when `src` is given (Next's normal optimizer —
 * no `unoptimized`, no tint, since real photography doesn't need the
 * placeholder treatment). Falls back to seeded picsum.photos placeholder
 * photography, color-tinted per theme, wherever a real asset doesn't exist
 * yet — `unoptimized` there skips Next's image proxy (dozens of unique
 * picsum seeds otherwise get routed through Next's upstream-fetch-and-resize
 * pipeline, which times out under load).
 */
export function PlaceholderImage({
  theme,
  label,
  seed,
  src,
  className = "",
  showCaption = true,
}: {
  theme: PlaceholderTheme;
  label: string;
  seed?: string;
  /** Path to a real photo under public/ — when given, skips the picsum placeholder + tint entirely. */
  src?: string;
  className?: string;
  showCaption?: boolean;
}) {
  const isFishing = label.toLowerCase().includes("fishing");
  const { tint, icon: Icon } = isFishing
    ? { tint: THEME_STYLES.ocean.tint, icon: Fish }
    : THEME_STYLES[theme];

  const isRealPhoto = Boolean(src);
  const photoSeed = slugify(seed ?? label);
  const imageSrc = src ?? `https://picsum.photos/seed/${photoSeed}/1200/900`;

  return (
    <div className={`relative overflow-hidden ${className}`} role="img" aria-label={label}>
      <Image
        src={imageSrc}
        alt={label}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover"
        unoptimized={!isRealPhoto}
      />
      {!isRealPhoto && <div className={`absolute inset-0 mix-blend-color bg-gradient-to-br ${tint}`} />}
      {showCaption && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      )}
      <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm">
        <Icon className="h-4 w-4 text-white" />
      </div>
      {showCaption && (
        <span className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white drop-shadow">
          {label}
        </span>
      )}
    </div>
  );
}
