import { Bike, Mountain, Palmtree, Ship, Sunrise, Users, Waves } from "lucide-react";
import type { PlaceholderTheme } from "@/data/types";

export const THEME_STYLES: Record<
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

export function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
