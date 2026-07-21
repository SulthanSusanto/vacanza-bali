"use client";

import { useEffect, useState } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setCount(step);

      if (step >= 100) {
        clearInterval(interval);
        setTimeout(() => setExiting(true), 200);
        setTimeout(() => onComplete(), 900);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  function skip() {
    setExiting(true);
    // Give the fade a moment to feel intentional rather than an abrupt cut,
    // but far short of the full 900ms count-driven exit.
    setTimeout(() => onComplete(), 250);
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-start bg-white transition-opacity duration-700 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="p-6 text-7xl font-bold leading-none tabular-nums text-black md:p-10 md:text-9xl">
        {count}
      </span>
      <button
        type="button"
        onClick={skip}
        className="absolute right-6 top-6 text-sm font-semibold text-black/60 underline-offset-4 hover:text-black hover:underline md:right-10 md:top-10"
      >
        Skip
      </button>
    </div>
  );
}
