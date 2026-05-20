"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${el.getBoundingClientRect().height}px`,
      );
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    updateHeight();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        ref={headerRef}
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
            className="font-serif text-xl font-bold tracking-tight text-primary bg-transparent border-none p-0 cursor-pointer sm:text-2xl hover:text-primary-hover transition-colors shrink-0"
            aria-label="Oíd Mortales — Ir al inicio"
          >
            Oíd Mortales
          </button>

          <ul className="hidden md:flex items-center gap-5 list-none m-0 p-0 sm:gap-8" role="list">
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

          <button
            className="md:hidden flex flex-col items-center justify-center gap-1 w-10 h-10 -mr-1 bg-transparent border-none p-0 cursor-pointer rounded-lg hover:bg-primary-soft transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <span
              className={`block w-5 h-0.5 bg-primary rounded-full transition duration-300 ease-out ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-primary rounded-full transition duration-300 ease-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-primary rounded-full transition duration-300 ease-out ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm"
              style={{ top: "var(--navbar-height, 60px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              className="fixed left-0 right-0 z-40 bg-white border-t border-primary/10 shadow-lg"
              style={{ top: "var(--navbar-height, 60px)" }}
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              role="menu"
            >
              <nav aria-label="Menú móvil">
                <ul className="flex flex-col list-none m-0 p-0 px-5 py-3 gap-0.5" role="list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href} role="none">
                      <a
                        href={link.href}
                        className="block px-4 py-3 text-base font-medium text-primary/80 no-underline rounded-lg transition-colors hover:bg-primary-soft hover:text-primary focus-visible:bg-primary-soft"
                        onClick={closeMenu}
                        role="menuitem"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
