"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string }> = {
  A1: { bg: "bg-emerald-100", text: "text-emerald-700" },
  A2: { bg: "bg-teal-100", text: "text-teal-700" },
  B1: { bg: "bg-sky-100", text: "text-sky-700" },
  B2: { bg: "bg-amber-100", text: "text-amber-700" },
  C1: { bg: "bg-violet-100", text: "text-violet-700" },
  C2: { bg: "bg-rose-100", text: "text-rose-700" },
};

interface TestNavbarProps {
  tematicaName: string;
  currentIndex: number;
  totalQuestions: number;
  difficulty: string;
  ref?: React.Ref<HTMLElement>;
}

function AnimatedProgress({
  currentIndex,
  totalQuestions,
}: {
  currentIndex: number;
  totalQuestions: number;
}) {
  const targetProgress = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const [displayProgress, setDisplayProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let start: number | null = null;
    const startValue = displayProgress;
    const duration = 500;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (targetProgress - startValue) * eased);
      setDisplayProgress(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetProgress]);

  return (
    <div className="flex items-center gap-3">
      <div
        className="h-2 flex-1 overflow-hidden rounded-full bg-navy/8 sm:h-2.5"
        role="progressbar"
        aria-valuenow={targetProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progreso del test: ${targetProgress}%`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-navy to-blue-accent transition-[width] duration-500 ease-out"
          style={{ width: `${targetProgress}%` }}
        />
      </div>
      <span className="min-w-[3ch] text-right text-xs font-semibold tabular-nums text-navy/50 sm:text-sm">
        {displayProgress}%
      </span>
    </div>
  );
}

export default function TestNavbar({
  tematicaName,
  currentIndex,
  totalQuestions,
  difficulty,
  ref,
}: TestNavbarProps) {
  const diffColors = DIFFICULTY_COLORS[difficulty] ?? {
    bg: "bg-navy/8",
    text: "text-navy/70",
  };

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 bg-cream/90 backdrop-blur-md shadow-[0_1px_3px_rgba(27,42,74,0.06)]"
      role="banner"
    >
      <nav
        className="mx-auto max-w-6xl px-5 py-3 sm:px-6 sm:py-4 lg:px-8"
        aria-label="Navegación del test"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/60 transition-colors duration-200 hover:text-navy sm:text-base"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Regresar al inicio
          </Link>
          <span className="text-xs font-medium text-navy/40 sm:text-sm">
            ~25 min
          </span>
        </div>

        <div className="mt-1.5 flex items-center justify-between sm:mt-2">
          <h1 className="font-serif text-base font-bold text-navy sm:text-lg">
            Test de inglés
          </h1>
          <span className="text-xs font-medium tabular-nums text-navy/50 sm:text-sm">
            Ejercicio {currentIndex + 1} de {totalQuestions}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between sm:mt-1.5">
          <span className="text-xs text-navy/50 sm:text-sm">
            Temática:{" "}
            <span className="font-medium text-navy/70">{tematicaName}</span>
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold sm:px-3 sm:text-sm ${diffColors.bg} ${diffColors.text}`}
          >
            {difficulty}
          </span>
        </div>

        <div className="mt-2 sm:mt-3">
          <AnimatedProgress
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
          />
        </div>
      </nav>
    </header>
  );
}
