"use client";

import { useState } from "react";
import { SplashScreen } from "@/components/landing/SplashScreen";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ExperiencesSection } from "@/components/landing/ExperiencesSection";
import { FullDayToursSection } from "@/components/landing/FullDayToursSection";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-white">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Navbar />
      <HeroSection />
      <ExperiencesSection />
      <FullDayToursSection />
    </div>
  );
}
