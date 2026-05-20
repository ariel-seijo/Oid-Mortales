"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type ComparisonPair = {
  boring: { before: string; verb: string; after: string };
  better: { before: string; verb: string; after: string };
};

const COMPARISONS: ComparisonPair[] = [
  {
    boring: {
      before: "Juan ",
      verb: "was",
      after: " an architect.",
    },
    better: {
      before: "Manuel Belgrano ",
      verb: "was",
      after: " the creator of the Argentine flag.",
    },
  },
  {
    boring: {
      before: "The man ",
      verb: "walked",
      after: " across the street.",
    },
    better: {
      before: "José de San Martín ",
      verb: "crossed",
      after: " the Andes in 1817.",
    },
  },
  {
    boring: {
      before: "The boy ",
      verb: "played",
      after: " in the park.",
    },
    better: {
      before: "Cornelio Saavedra ",
      verb: "presided",
      after: " over the Primera Junta.",
    },
  },
];

const INTERVAL_MS = 5000;

export default function ComparisonCards() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % COMPARISONS.length);
      setVisible(true);
    }, 350);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, INTERVAL_MS);
  }, [advance]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return;
      setVisible(false);
      setTimeout(() => {
        setActive(index);
        setVisible(true);
      }, 350);
      startTimer();
    },
    [active, startTimer],
  );

  const pair = COMPARISONS[active];

  return (
    <div
      className="mt-12 min-h-[360px]"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div
        className={`flex flex-col items-center gap-6 min-h-[320px] md:flex-row md:items-stretch md:justify-center ${
          visible
            ? "animate-[cmpFadeIn_600ms_cubic-bezier(0.22,0.61,0.36,1)_forwards]"
            : "animate-[cmpFadeOut_350ms_cubic-bezier(0.55,0.06,0.68,0.19)_forwards]"
        }`}
      >
        {/* --- BORING CARD --- */}
        <article
          className="flex-1 w-full max-w-[28rem] rounded-[1.25rem] p-6 flex flex-col gap-4 transition-shadow duration-300 bg-[#f0f0f0] border-2 border-[#d4d4d4] sm:p-8"
          aria-label={`Ejercicio genérico de inglés ${active + 1}`}
        >
          <div className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1 text-xs font-semibold tracking-[0.04em] uppercase bg-[#e0e0e0] text-[#888] sm:text-[0.8125rem]">
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
            Lo de siempre
          </div>
          <div className="flex items-baseline gap-2 rounded-xl p-5 bg-[#e4e4e4] border border-[#d0d0d0]">
            <span className="font-serif text-sm font-semibold shrink-0 text-[#aaa]">{active + 1}.</span>
            <span className="text-lg leading-normal font-medium font-sans text-[#666] sm:text-xl">
              {pair.boring.before}
              <span className="underline decoration-2 underline-offset-[3px] decoration-[#aaa]">
                {pair.boring.verb}
              </span>
              {pair.boring.after}
            </span>
          </div>
          <ul className="flex flex-col gap-2.5 list-none m-0 p-0" role="list">
            <li className="flex items-start gap-2 text-[0.8125rem] text-[#aaa] sm:text-sm">
              <svg
                className="mt-0.5 w-4 h-4 shrink-0 text-[#bbb]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
              Oraciones genéricas sin contexto
            </li>
            <li className="flex items-start gap-2 text-[0.8125rem] text-[#aaa] sm:text-sm">
              <svg
                className="mt-0.5 w-4 h-4 shrink-0 text-[#bbb]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
              Sin capacidad de retención
            </li>
            <li className="flex items-start gap-2 text-[0.8125rem] text-[#aaa] sm:text-sm">
              <svg
                className="mt-0.5 w-4 h-4 shrink-0 text-[#bbb]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
              Sin aprendizaje extra
            </li>
          </ul>
        </article>

        {/* --- VS DIVIDER --- */}
        <div className="flex items-center justify-center shrink-0">
          <span className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-celeste to-primary font-serif text-xs font-bold tracking-wider text-white uppercase shadow-[0_2px_8px_rgba(30,97,138,0.2)] md:h-12 md:w-12 md:text-sm">
            vs
          </span>
        </div>

        {/* --- GOOD CARD --- */}
        <article
          className="flex-1 w-full max-w-[28rem] rounded-[1.25rem] p-6 flex flex-col gap-4 transition-shadow duration-300 bg-white border-2 border-celeste shadow-[0_4px_6px_-1px_rgba(112,181,219,0.15),0_2px_4px_-2px_rgba(112,181,219,0.1)] sm:p-8"
          aria-label={`Nuestra propuesta de ejercicio de inglés ${active + 1}`}
        >
          <div className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1 text-xs font-semibold tracking-[0.04em] uppercase bg-celeste/15 text-primary sm:text-[0.8125rem]">
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.482 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            Nuestra propuesta
          </div>
          <div className="flex items-baseline gap-2 rounded-xl p-5 bg-gradient-to-br from-celeste/8 to-gold/6 border border-celeste/30">
            <span className="font-serif text-sm font-semibold shrink-0 text-primary">{active + 1}.</span>
            <span className="text-lg leading-normal font-medium font-serif text-primary sm:text-xl">
              {pair.better.before}
              <span className="underline decoration-2 underline-offset-[3px] decoration-gold">
                {pair.better.verb}
              </span>
              {pair.better.after}
            </span>
          </div>
          <ul className="flex flex-col gap-2.5 list-none m-0 p-0" role="list">
            <li className="flex items-start gap-2 text-[0.8125rem] text-primary/70 sm:text-sm">
              <svg
                className="mt-0.5 w-4 h-4 shrink-0 text-gold"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Aprendés inglés mientras repasás historia
            </li>
            <li className="flex items-start gap-2 text-[0.8125rem] text-primary/70 sm:text-sm">
              <svg
                className="mt-0.5 w-4 h-4 shrink-0 text-gold"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Mejor retención del público
            </li>
            <li className="flex items-start gap-2 text-[0.8125rem] text-primary/70 sm:text-sm">
              <svg
                className="mt-0.5 w-4 h-4 shrink-0 text-gold"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Dos aprendizajes al mismo tiempo
            </li>
          </ul>
        </article>
      </div>

      {/* --- NAVIGATION DOTS --- */}
      <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Ejemplos comparativos">
        {COMPARISONS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Ejemplo comparativo ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full border-none p-0 cursor-pointer transition-colors transition-transform duration-300 bg-primary/15 hover:bg-primary/30 hover:scale-120 ${
              i === active
                ? "bg-gradient-to-br from-celeste to-primary shadow-[0_1px_4px_rgba(30,97,138,0.25)] scale-115"
                : ""
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
