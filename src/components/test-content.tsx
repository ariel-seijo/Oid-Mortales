"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TestNavbar from "./test-navbar";
import TestQuestionCard from "./test-question-card";
import TestTipCard from "./test-tip-card";
import type { Question } from "@/lib/test-data";
import { getQuestionsByTematica, getTematicaName } from "@/lib/test-data";

interface TestContentProps {
  tematica: string;
}

function CompletedView({ tematicaName }: { tematicaName: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-12 max-w-md text-center sm:mt-16"
    >
      <div className="rounded-2xl border border-navy/8 bg-cream-card p-8 sm:p-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 16,
            delay: 0.2,
          }}
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100"
        >
          <svg
            className="h-8 w-8 text-emerald-600"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <h2 className="font-serif text-xl font-bold text-navy sm:text-2xl">
          Test completado
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-navy/55 sm:text-base">
          Has completado todas las preguntas de {tematicaName}.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-navy px-8 text-sm font-semibold text-cream transition-all duration-300 hover:bg-navy-light hover:shadow-lg sm:h-14 sm:text-base"
        >
          Volver al inicio
        </Link>
      </div>
    </motion.div>
  );
}

export default function TestContent({ tematica }: TestContentProps) {
  const questions = useMemo(
    () => getQuestionsByTematica(tematica),
    [tematica],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null,
  );
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = navbarRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setNavbarHeight(entry.target.getBoundingClientRect().height);
      }
    });

    observer.observe(el);
    setNavbarHeight(el.getBoundingClientRect().height);

    return () => observer.disconnect();
  }, []);

  const question: Question = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const tematicaName = getTematicaName(tematica);

  const handleSelectOption = useCallback(
    (index: number) => {
      if (isAnswered) return;
      setSelectedOptionIndex(index);
    },
    [isAnswered],
  );

  const handleAction = useCallback(() => {
    if (!isAnswered) {
      if (selectedOptionIndex === null) return;
      setIsAnswered(true);
    } else {
      if (isLastQuestion) {
        setIsCompleted(true);
        return;
      }
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
    }
  }, [isAnswered, selectedOptionIndex, isLastQuestion]);

  const actionLabel = isAnswered
    ? isLastQuestion
      ? "Finalizar test"
      : "Siguiente ejercicio"
    : "Verificar respuesta";

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5">
        <p className="text-navy/50">
          No hay preguntas disponibles para esta temática.
        </p>
      </div>
    );
  }

  return (
    <>
      <TestNavbar
        ref={navbarRef}
        tematicaName={tematicaName}
        currentIndex={isCompleted ? questions.length : currentIndex}
        totalQuestions={questions.length}
        difficulty={question.difficulty}
      />

      <main
        id="main-content"
        className="mx-auto max-w-6xl px-5 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8"
        style={
          navbarHeight > 0
            ? { paddingTop: `${navbarHeight + 8}px` }
            : undefined
        }
      >
        <AnimatePresence mode="wait">
          {isCompleted ? (
            <CompletedView key="completed" tematicaName={tematicaName} />
          ) : (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 lg:flex-row lg:gap-8"
            >
              <div className="flex-1">
                <TestQuestionCard
                  question={question}
                  selectedOptionIndex={selectedOptionIndex}
                  isAnswered={isAnswered}
                  onSelectOption={handleSelectOption}
                  onAction={handleAction}
                  actionLabel={actionLabel}
                />
              </div>

              <div className="lg:w-80 xl:w-96">
                <TestTipCard tip={isAnswered ? question.tip : null} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
