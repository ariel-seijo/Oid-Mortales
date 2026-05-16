"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal";
import { PATH_CARDS } from "@/lib/constants";

const COLOR_MAP: Record<string, { border: string; bg: string; badge: string; text: string; ring: string }> = {
  celeste: {
    border: "border-celeste/50",
    bg: "bg-celeste/10",
    badge: "bg-celeste/20 text-celeste-dark",
    text: "text-celeste-dark",
    ring: "ring-celeste/40",
  },
  green: {
    border: "border-green-path/50",
    bg: "bg-green-path/10",
    badge: "bg-green-path/20 text-green-path-dark",
    text: "text-green-path-dark",
    ring: "ring-green-path/40",
  },
  purple: {
    border: "border-purple-path/50",
    bg: "bg-purple-path/10",
    badge: "bg-purple-path/20 text-purple-path-dark",
    text: "text-purple-path-dark",
    ring: "ring-purple-path/40",
  },
};

const CARD_ICONS: Record<string, React.ReactNode> = {
  historia: (
    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 8v8l-5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  ),
  anime: (
    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 16C6 10.477 10.477 6 16 6s10 4.477 10 10-4.477 10-10 10S6 21.523 6 16z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="14" r="2" fill="currentColor" />
      <circle cx="20" cy="14" r="2" fill="currentColor" />
      <path d="M11 20c2 2.5 8 2.5 10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  videojuegos: (
    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="14" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="14" r="1.5" fill="currentColor" />
      <circle cx="23" cy="17" r="1.5" fill="currentColor" />
    </svg>
  ),
};

export default function PathSelectionSection() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = useCallback((id: string) => {
    setSelected((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="caminos"
      className="scroll-mt-20 bg-cream px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
      aria-labelledby="paths-heading"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="text-center">
          <h2
            id="paths-heading"
            className="font-serif text-2xl font-bold text-navy sm:text-3xl md:text-4xl"
          >
            Elegí tu Camino de Aprendizaje
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy/60 sm:text-lg">
            Seleccioná el tema que más te apasiona. Tu test será personalizado
            con contenido de esa área.
          </p>
        </ScrollReveal>

        <ul
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="radiogroup"
          aria-label="Caminos de aprendizaje disponibles"
        >
          {PATH_CARDS.map((card, i) => {
            const colors = COLOR_MAP[card.color];
            const isSelected = selected === card.id;

            return (
              <li key={card.id} className="contents">
                <ScrollReveal delay={i * 0.1} duration={0.5}>
                  <button
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`Seleccionar camino: ${card.title}`}
                    onClick={() => handleSelect(card.id)}
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        handleSelect(card.id);
                      }
                    }}
                    className={`group flex h-full w-full flex-col rounded-2xl border-2 p-6 text-left transition-all duration-300 sm:p-8 ${
                      isSelected
                        ? `${colors.border} ${colors.bg} shadow-lg shadow-current/5 ring-2 ${colors.ring}`
                        : "border-navy/8 bg-cream hover:border-navy/15 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isSelected ? colors.badge : "bg-navy/5 text-navy-light group-hover:bg-navy/8"
                      }`}
                    >
                      {CARD_ICONS[card.id]}
                    </div>

                    <h3 className="mt-5 font-serif text-lg font-semibold text-navy sm:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/55 sm:text-base">
                      {card.subtitle}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2" aria-label="Contenidos incluidos">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300 sm:text-sm ${
                            isSelected
                              ? colors.badge
                              : "bg-navy/5 text-navy/55 group-hover:bg-navy/8"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>

        <ScrollReveal delay={0.3} className="mt-10 text-center">
          {selected ? (
            <Link
              href={`/test/${selected}`}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-navy px-8 text-sm font-semibold text-cream transition-all duration-300 hover:bg-navy-light hover:shadow-lg sm:h-14 sm:px-10 sm:text-base"
              aria-label="Iniciar test de inglés"
            >
              Iniciar test
            </Link>
          ) : (
            <span
              className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-semibold text-navy/40 sm:h-14 sm:px-10 sm:text-base"
              role="button"
              aria-disabled="true"
              aria-label="Seleccioná un camino de aprendizaje para continuar"
            >
              Seleccioná tu camino
            </span>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
