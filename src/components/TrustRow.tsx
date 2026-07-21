import { Languages, Shield, Star, Users2 } from "lucide-react";

const TRUST_SIGNALS = [
  { icon: Languages, label: "English-speaking drivers & guides" },
  { icon: Shield, label: "Insurance included on adventure activities" },
  { icon: Users2, label: "Small groups, private cars" },
  { icon: Star, label: "Licensed local guides on Mt. Batur" },
];

export function TrustRow() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-6 w-6 shrink-0 text-primary" />
            <p className="text-sm text-card-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
