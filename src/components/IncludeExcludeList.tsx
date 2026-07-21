import { Check, X } from "lucide-react";

export function IncludeExcludeList({
  includes,
  excludes,
}: {
  includes: string[];
  excludes: string[];
}) {
  if (includes.length === 0 && excludes.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {includes.length > 0 && (
        <div>
          <h3 className="text-base font-bold text-foreground">Included</h3>
          <ul className="mt-3 space-y-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {excludes.length > 0 && (
        <div>
          <h3 className="text-base font-bold text-foreground">Not included</h3>
          <ul className="mt-3 space-y-2">
            {excludes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
