import Image from "next/image";
import {
  Bike,
  Fish,
  Mountain,
  Palmtree,
  Ship,
  Sunrise,
  Users,
  Waves,
} from "lucide-react";
import type { PlaceholderTheme } from "@/data/types";

const THEME_STYLES: Record<
  PlaceholderTheme,
  { tint: string; icon: React.ComponentType<{ className?: string }> }
> = {
  ocean: { tint: "from-cyan-600 to-teal-700", icon: Waves },
  jungle: { tint: "from-emerald-700 to-lime-700", icon: Palmtree },
  sunrise: { tint: "from-orange-500 to-fuchsia-700", icon: Sunrise },
  cliff: { tint: "from-sky-700 to-teal-800", icon: Mountain },
  village: { tint: "from-amber-700 to-emerald-800", icon: Users },
  trail: { tint: "from-lime-700 to-teal-800", icon: Bike },
  boat: { tint: "from-blue-800 to-teal-700", icon: Ship },
};

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/**
 * Temporary stand-in photography (seeded via picsum.photos, a free-license
 * placeholder-photo service) until real tour photos land in public/. Swap
 * the <Image src> for a real asset per tour/category when available — the
 * tint + label layer can stay as-is.
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
