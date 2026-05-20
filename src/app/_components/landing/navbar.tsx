"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-[12px] shadow-[0_1px_3px_rgba(10,41,64,0.06)]"
          : "bg-white"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex items-center justify-between max-w-6xl px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <button
          onClick={scrollToTop}
          className="font-serif text-xl font-bold tracking-tight text-primary bg-transparent border-none p-0 cursor-pointer sm:text-2xl hover:text-primary-hover transition-colors"
          aria-label="Oíd Mortales — Ir al inicio"
        >
          Oíd Mortales
        </button>

        <ul className="flex items-center gap-5 list-none m-0 p-0 sm:gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-primary/70 no-underline transition-colors hover:text-primary sm:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
