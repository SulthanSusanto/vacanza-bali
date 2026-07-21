import { InstagramIcon, TikTokIcon } from "@/components/BrandIcons";

/**
 * A thin closing bar, not the full 3-column site Footer — the homepage is a
 * tightly choreographed, edge-to-edge experience, and a standard footer
 * would break that pacing. This just closes it out with a trust signal and
 * an escape hatch (socials), in the same black/white language as Section 3.
 */
export function LandingFooter() {
  return (
    <footer className="bg-black px-4 py-6 text-white md:px-8 md:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-extrabold uppercase tracking-tight">
          Vacanza <span className="text-white/50">Bali</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/vacanza_balitour"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vacanza Bali on Instagram"
            className="text-white/70 transition-colors hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.tiktok.com/@vacanzabali"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vacanza Bali on TikTok"
            className="text-white/70 transition-colors hover:text-white"
          >
            <TikTokIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-white/50">© {new Date().getFullYear()} Vacanza Bali</p>
      </div>
    </footer>
  );
}
