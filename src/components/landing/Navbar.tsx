"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { InstagramIcon, TikTokIcon } from "@/components/BrandIcons";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const WHATSAPP_HREF = buildWhatsAppLink("Hi Vacanza Bali, I'd like to know more about your tours.");

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white/80 px-4 py-2 backdrop-blur-md md:px-6 md:py-3">
        <Link href="/" className="flex flex-col text-black">
          <span className="text-xl font-extrabold uppercase leading-none tracking-tight md:text-2xl">
            Vacanza
          </span>
          <span className="-mt-1.5 text-xl font-extrabold uppercase leading-none tracking-tight md:-mt-2 md:text-2xl">
            Bali
          </span>
          <span className="mt-1.5 text-[8px] font-medium leading-none md:mt-2 md:text-[9px]">
            private tours &amp; day trips
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-3 text-black/60">
            <a
              href="https://www.instagram.com/vacanza_balitour"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vacanza Bali on Instagram"
              className="hover:text-black"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@vacanzabali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vacanza Bali on TikTok"
              className="hover:text-black"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full border border-black bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Menu
          </button>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-black"
          >
            Book via WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? "translate-y-0 rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? "translate-y-0 -rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </header>

      <div className={`fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col justify-center gap-1 px-8">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                className={`text-4xl font-bold text-black transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:text-neutral-500 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div
              style={{ transitionDelay: open ? "450ms" : "0ms" }}
              className={`mt-8 border-t border-neutral-200 pt-8 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <p className="mb-4 text-sm font-semibold text-black">Book via WhatsApp</p>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-black px-6 py-4 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800"
              >
                Chat on WhatsApp
              </a>
              <div className="mt-4 flex gap-4 text-sm text-neutral-600">
                <a
                  href="https://www.tiktok.com/@vacanzabali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  TikTok @vacanzabali
                </a>
                <a
                  href="https://www.instagram.com/vacanza_balitour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  Instagram @vacanza_balitour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
