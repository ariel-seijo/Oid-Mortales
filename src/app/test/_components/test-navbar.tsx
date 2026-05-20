"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const DIFFICULTY_CLASSES: Record<string, string> = {
  A1: "bg-gradient-to-br from-success-soft to-[#a7f3d0] text-[#047857] shadow-[0_1px_3px_rgba(52,211,153,0.12)]",
  A2: "bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4] text-[#0f766e] shadow-[0_1px_3px_rgba(45,212,191,0.12)]",
  B1: "bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] text-[#0369a1] shadow-[0_1px_3px_rgba(56,189,248,0.12)]",
  B2: "bg-gradient-to-br from-[#e0e7ff] to-[#c7d2fe] text-[#4338ca] shadow-[0_1px_3px_rgba(99,102,241,0.15)]",
  C1: "bg-gradient-to-br from-[#ede9fe] to-[#c4b5fd] text-[#6d28d9] shadow-[0_1px_3px_rgba(139,92,246,0.12)]",
  C2: "bg-gradient-to-br from-error-soft to-[#fecdd3] text-[#9f1239] shadow-[0_1px_3px_rgba(244,114,114,0.12)]",
};

interface TestNavbarProps {
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
    <div className="flex items-center gap-3 mt-2 sm:mt-3">
      <div
        className="h-2 flex-1 overflow-hidden rounded-full bg-primary/6 shadow-[inset_0_1px_2px_rgba(10,41,64,0.04)] sm:h-2.5"
        role="progressbar"
        aria-valuenow={targetProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progreso del test: ${targetProgress}%`}
      >
        <div
          className="h-full rounded-full transition-[width] duration-500 ease-out shadow-[0_0_6px_rgba(112,181,219,0.4)]"
          style={{
            width: `${targetProgress}%`,
            background: "linear-gradient(to right, var(--color-celeste) 0%, rgba(255, 255, 255, 0.95) 31%, rgba(255, 255, 255, 0.95) 46.5%, var(--color-gold) 50%, rgba(255, 255, 255, 0.95) 53.5%, rgba(255, 255, 255, 0.95) 69%, var(--color-celeste) 100%)",
          }}
        />
      </div>
      <span className="min-w-[3ch] text-right text-xs font-semibold tabular-nums text-primary/45 sm:text-sm">
        {displayProgress}%
      </span>
    </div>
  );
}

export default function TestNavbar({
  currentIndex,
  totalQuestions,
  difficulty,
  ref,
}: TestNavbarProps) {
  const diffClass = DIFFICULTY_CLASSES[difficulty] ?? "bg-primary/6 text-primary/65";

  return (
    <header
      ref={ref}
      className="fixed left-0 right-0 top-0 z-50 bg-surface/92 backdrop-blur-[16px] backdrop-saturate-[1.2] shadow-[0_1px_0_rgba(10,41,64,0.04),0_2px_8px_rgba(10,41,64,0.04)] border-b border-primary/6"
      role="banner"
    >
      <nav
        className="mx-auto max-w-6xl px-5 py-3 sm:px-6 sm:py-4 lg:px-8"
        aria-label="Navegación del test"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary/55 no-underline transition-colors duration-200 py-1 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-hover focus-visible:outline-offset-4 focus-visible:rounded sm:text-base"
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
          <span className="text-xs font-medium text-primary/35 bg-primary/4 px-2 py-0.5 rounded-full sm:text-sm">
            ~25 min
          </span>
        </div>

        <div className="flex items-center justify-between mt-1.5 sm:mt-2">
          <h1 className="font-serif text-base font-bold text-text-dark sm:text-lg">
            Test de inglés
          </h1>
          <span className="text-xs font-medium tabular-nums text-primary/45 bg-primary/4 px-2 py-0.5 rounded-full sm:text-sm">
            Ejercicio {currentIndex + 1} de {totalQuestions}
          </span>
        </div>

        <div className="flex items-center justify-between mt-1 sm:mt-1.5">
          <span className="text-xs italic text-primary/45 sm:text-sm">
            Historia Argentina
          </span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-[0.02em] sm:px-3 sm:py-1.5 sm:text-sm ${diffClass}`}>
            {difficulty}
          </span>
        </div>

        <AnimatedProgress
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
        />
      </nav>
    </header>
  );
}
