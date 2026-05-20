"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { calculateResults } from "../../_lib/results-calculator";
import type { AnswerRecord, TestResults } from "../../_lib/results-calculator";
import { MOCK_ANSWERS } from "../_lib/mock-results";
import ScoreHero from "./score-hero";
import LevelDescription from "./level-description";
import CTASection from "./cta-section";

const SESSION_KEY = "oid-mortales-test-results";

function getStoredData(): { answers: AnswerRecord[] } | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!Array.isArray(data.answers)) return null;
    return { answers: data.answers };
  } catch {
    return null;
  }
}

export default function ResultsContent() {
  const [results, setResults] = useState<TestResults | null>(null);
  const [error, setError] = useState(false);
  const [isMockData, setIsMockData] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const stored = getStoredData();
    if (!stored || stored.answers.length === 0) {
      if (process.env.NODE_ENV === "development") {
        setResults(calculateResults(MOCK_ANSWERS));
        setIsMockData(true);
      } else {
        setError(true);
      }
      return;
    }
    setResults(calculateResults(stored.answers));
  }, []);

  useEffect(() => {
    if (!results) return;

    const el = document.querySelector("[data-results-navbar]");
    if (el instanceof HTMLElement) {
      observerRef.current = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setNavbarHeight(entry.target.getBoundingClientRect().height);
        }
      });
      observerRef.current.observe(el);
      setNavbarHeight(el.getBoundingClientRect().height);
    }

    return () => observerRef.current?.disconnect();
  }, [results]);

  if (error) {
    return (
      <div
        className="flex min-h-screen items-center justify-center px-5"
        style={
          navbarHeight > 0
            ? { paddingTop: `${navbarHeight + 8}px` }
            : undefined
        }
      >
        <div className="mx-auto max-w-[28rem] rounded-[1.25rem] border border-primary/6 bg-gradient-to-b from-surface-card via-surface-alt/20 to-[#f8fafc] p-8 text-center shadow-[0_4px_16px_rgba(10,41,64,0.07),0_1px_3px_rgba(10,41,64,0.04)] sm:p-10">
          <svg
            className="h-12 w-12 block mx-auto mb-4 text-primary/45"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="font-serif text-xl font-bold text-text-dark sm:text-2xl">
            Sin resultados disponibles
          </h2>
          <p className="mt-2 text-sm leading-[1.65] text-primary/65 sm:text-base">
            No se encontraron datos del test. Realizá un test para ver tus resultados.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-br from-celeste to-primary-hover px-8 text-sm font-semibold text-surface no-underline transition-all duration-300 shadow-[0_2px_8px_rgba(112,181,219,0.2)] hover:from-primary-hover hover:to-primary hover:shadow-[0_6px_20px_rgba(30,97,138,0.2)] hover:-translate-y-px sm:h-14 sm:text-base"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div
        className="flex min-h-screen items-center justify-center px-5"
        style={
          navbarHeight > 0
            ? { paddingTop: `${navbarHeight + 8}px` }
            : undefined
        }
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 rounded-full border-2 border-primary/12 border-t-celeste shadow-[0_0_8px_rgba(112,181,219,0.15)]"
          />
          <p className="text-sm text-primary/60">Cargando resultados...</p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="results-loaded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <nav
          data-results-navbar
          className="fixed left-0 right-0 top-0 z-40 border-b border-primary/5 bg-surface/92 backdrop-blur-[16px] backdrop-saturate-[1.2] shadow-[0_1px_0_rgba(10,41,64,0.03)]"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between py-3 px-4 sm:px-6">
            <span className="font-serif text-sm font-bold text-text-dark sm:text-base">
              Resultados
              {isMockData && (
                <span className="inline-flex align-middle ml-2 rounded-[4px] bg-[#f59e0b] px-[6px] py-[1px] font-mono text-[0.625rem] font-bold text-white tracking-[0.06em]">
                  DEV
                </span>
              )}
            </span>
            <span className="rounded-full bg-gradient-to-br from-primary/8 to-celeste/12 border border-primary/8 px-3 py-1 text-[0.6875rem] font-semibold text-primary/70 tracking-[0.02em] sm:text-xs">
              Historia Argentina
            </span>
          </div>
        </nav>

        <main
          id="main-content"
          className="mx-auto max-w-4xl pt-28 pb-12 px-4 sm:pt-32 sm:px-6 lg:px-8"
          style={
            navbarHeight > 0
              ? { paddingTop: `${navbarHeight + 16}px` }
              : undefined
          }
        >
          <ScoreHero results={results} />

          <LevelDescription
            level={results.cefrLevel.level}
            description={results.cefrLevel.description}
          />

          <CTASection />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
