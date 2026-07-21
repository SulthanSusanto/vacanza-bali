import { Bike, Fish, Mountain, Palmtree, Ship, Sunrise, Users, Waves } from "lucide-react";

/**
 * One distinct color per category (by slug) so the homepage icon row scans
 * at a glance instead of reading as one monochrome primary color. Grouped
 * loosely by theme (island/coastal categories share the cyan/teal family,
 * jungle categories share green) while keeping every category visually
 * distinguishable from its neighbors.
 */
export const CATEGORY_COLORS: Record<
  string,
  { bg: string; text: string; icon: React.ComponentType<{ className?: string }> }
> = {
  "dolphin-tour": { bg: "bg-blue-100", text: "text-blue-600", icon: Waves },
  "mt-batur": { bg: "bg-orange-100", text: "text-orange-600", icon: Sunrise },
  "ubud-trip": { bg: "bg-emerald-100", text: "text-emerald-600", icon: Palmtree },
  "cycling-tour": { bg: "bg-emerald-100", text: "text-emerald-600", icon: Bike },
  "village-adventure": { bg: "bg-emerald-100", text: "text-emerald-600", icon: Users },
  "nusa-penida": { bg: "bg-cyan-100", text: "text-cyan-600", icon: Mountain },
  "uluwatu-trip": { bg: "bg-sky-100", text: "text-sky-600", icon: Mountain },
  "boat-tickets": { bg: "bg-teal-100", text: "text-teal-600", icon: Ship },
  "fishing-trip": { bg: "bg-indigo-100", text: "text-indigo-600", icon: Fish },
};
