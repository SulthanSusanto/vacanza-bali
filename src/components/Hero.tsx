import Link from "next/link";
import type { PlaceholderTheme } from "@/data/types";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export function Hero({
  theme,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  size = "lg",
}: {
  theme: PlaceholderTheme;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  size?: "lg" | "md";
}) {
  return (
    <section className="relative overflow-hidden">
      <PlaceholderImage
        theme={theme}
        label={title}
        showCaption={false}
        className={size === "lg" ? "h-[68vh] min-h-[420px] w-full" : "h-64 w-full"}
      />
      <div className="absolute inset-0 flex items-center bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-2xl text-4xl font-extrabold text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">{subtitle}</p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur hover:bg-white/20"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
