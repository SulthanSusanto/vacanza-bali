import Link from "next/link";
import { Phone } from "lucide-react";
import { categories } from "@/data/categories";
import { InstagramIcon, TikTokIcon } from "@/components/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-card-foreground">
            Vacanza <span className="text-primary">Bali</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Dolphin tours, waterfalls, sunrise treks and island-hopping boat tickets — booked
            straight from your phone.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/vacanza_balitour"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vacanza Bali on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-card-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@vacanzabali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vacanza Bali on TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-card-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-card-foreground">Tours</p>
          <ul className="mt-3 space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/tours/${c.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-card-foreground">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-primary">
                About / Why Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li className="flex items-center gap-2 pt-2 font-mono text-card-foreground">
              <Phone className="h-4 w-4 text-primary" />
              +62 812-5332-0304
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vacanza Bali. All prices in Indonesian Rupiah (IDR).
      </div>
    </footer>
  );
}
