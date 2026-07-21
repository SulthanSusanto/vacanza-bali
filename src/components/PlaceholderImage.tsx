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
  { gradient: string; icon: React.ComponentType<{ className?: string }> }
> = {
  ocean: { gradient: "from-cyan-700 via-teal-600 to-emerald-700", icon: Waves },
  jungle: { gradient: "from-emerald-800 via-green-700 to-lime-700", icon: Palmtree },
  sunrise: { gradient: "from-orange-600 via-rose-500 to-fuchsia-700", icon: Sunrise },
  cliff: { gradient: "from-sky-700 via-cyan-700 to-teal-800", icon: Mountain },
  village: { gradient: "from-amber-700 via-orange-700 to-emerald-800", icon: Users },
  trail: { gradient: "from-lime-700 via-emerald-700 to-teal-800", icon: Bike },
  boat: { gradient: "from-blue-800 via-cyan-700 to-teal-700", icon: Ship },
};

const FISH_OVERRIDE = Fish;

export function PlaceholderImage({
  theme,
  label,
  className = "",
}: {
  theme: PlaceholderTheme;
  label: string;
  className?: string;
}) {
  const { gradient, icon: Icon } =
    theme === "ocean" && label.toLowerCase().includes("fishing")
      ? { gradient: THEME_STYLES.ocean.gradient, icon: FISH_OVERRIDE }
      : THEME_STYLES[theme];

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br ${gradient} text-white ${className}`}
      role="img"
      aria-label={label}
    >
      <Icon className="h-10 w-10 opacity-90" />
      <span className="px-4 text-center text-sm font-medium tracking-wide opacity-90">
        {label}
      </span>
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </div>
  );
}
