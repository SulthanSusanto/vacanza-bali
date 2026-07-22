import Image from "next/image";
import { Fish } from "lucide-react";
import type { PlaceholderTheme } from "@/data/types";
import { THEME_STYLES, slugify } from "@/lib/theme-icons";

/**
 * Temporary stand-in photography (seeded via picsum.photos, a free-license
 * placeholder-photo service) until real tour photos land in public/. Swap
 * the <Image src> for a real asset per tour/category when available — the
 * tint + label layer can stay as-is. `unoptimized` skips Next's image proxy
 * (dozens of unique picsum seeds otherwise get routed through Next's
 * upstream-fetch-and-resize pipeline, which times out under load) — drop it
 * once these are real local assets, since local images should go through
 * Next's optimizer normally.
 */
export function PlaceholderImage({
  theme,
  label,
  seed,
  className = "",
  showCaption = true,
}: {
  theme: PlaceholderTheme;
  label: string;
  seed?: string;
  className?: string;
  showCaption?: boolean;
}) {
  const isFishing = label.toLowerCase().includes("fishing");
  const { tint, icon: Icon } = isFishing
    ? { tint: THEME_STYLES.ocean.tint, icon: Fish }
    : THEME_STYLES[theme];

  const photoSeed = slugify(seed ?? label);

  return (
    <div className={`relative overflow-hidden ${className}`} role="img" aria-label={label}>
      <Image
        src={`https://picsum.photos/seed/${photoSeed}/1200/900`}
        alt={label}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover"
        unoptimized
      />
      <div className={`absolute inset-0 mix-blend-color bg-gradient-to-br ${tint}`} />
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
