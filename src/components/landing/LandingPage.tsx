"use client";

import { useLayoutEffect, useState } from "react";
import { SplashScreen } from "@/components/landing/SplashScreen";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ExperiencesSection } from "@/components/landing/ExperiencesSection";
import { FullDayToursSection } from "@/components/landing/FullDayToursSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

const SPLASH_SESSION_KEY = "vacanza-splash-shown";

export function LandingPage() {
  // Default matches what the server renders (splash visible) — correcting
  // this requires sessionStorage/matchMedia, which don't exist during SSR.
  // useLayoutEffect fixes it synchronously before the browser paints, so a
  // repeat visitor within the session never sees the splash flash on screen.
  const [showSplash, setShowSplash] = useState(true);

  useLayoutEffect(() => {
    const alreadyShownThisSession = sessionStorage.getItem(SPLASH_SESSION_KEY) === "1";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadyShownThisSession || prefersReducedMotion) {
      // One-time SSR->client hydration correction, not a subscription — the
      // condition can only be evaluated client-side (sessionStorage/matchMedia
      // don't exist during SSR), so a single follow-up render is unavoidable
      // here, not an accidental cascade.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowSplash(false);
    }
  }, []);

  function completeSplash() {
    sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
    setShowSplash(false);
  }

  return (
    <div className="bg-white">
      {showSplash && <SplashScreen onComplete={completeSplash} />}
      <Navbar />
      <HeroSection />
      <ExperiencesSection />
      <FullDayToursSection />
      <LandingFooter />
    </div>
  );
}
