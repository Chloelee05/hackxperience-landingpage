"use client";

import { useEffect, useState } from "react";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const NAV_ITEMS = [
  { label: "SYSTEM", target: "system" },
  { label: "SCHEDULE", target: "schedule" },
  { label: "INTEL", target: "intel" },
  { label: "REGISTRY", target: "registry" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`${ibmPlexMono.className} fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 h-11 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.5)]" : ""
      }`}
      style={{ backgroundColor: "#1d1c17" }}
    >
      {/* Left — Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-0 text-white text-[13px] sm:text-[14px] font-bold tracking-wide cursor-pointer whitespace-nowrap"
      >
        <span className="text-[#c00000] mr-1">&gt;_</span>
        HACK_TERMINAL
      </button>

      {/* Center — Nav links */}
      <div className="hidden md:flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.target}
            onClick={() => scrollTo(item.target)}
            className="text-white/70 hover:text-white text-[12px] font-medium tracking-[0.08em] cursor-pointer px-2.5 py-1 transition-colors duration-150"
          >
            [{item.label}]
          </button>
        ))}
      </div>

      {/* Right — Login button */}
      <button
        onClick={() => scrollTo("registry")}
        className="bg-[#c00000] hover:bg-[#a00000] text-white text-[11px] sm:text-[12px] font-bold tracking-[0.10em] px-4 py-1.5 cursor-pointer transition-colors duration-150 whitespace-nowrap"
      >
        LOGIN_SECURE
      </button>
    </nav>
  );
}
