"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestNavbar from "./test-navbar";
import ExerciseRouter from "./exercise-router";
import TestTipCard from "./test-tip-card";
import CompletedView from "./completed-view";
import { useTestEngine } from "../_hooks/use-test-engine";

export default function TestContent() {
  const {
    exercises,
    levelIndex,
    exerciseIndexInLevel,
    totalExercises,
    currentLevel,
    selectedOptionIndex,
    userWordOrder,
    isAnswered,
    isCompleted,
    exercise,
    actionLabel,
    flatIndex,
    handleSelectOption,
    handleSetWordOrder,
    handleAction,
    answerHistory,
  } = useTestEngine();

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

  if (exercises.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5 bg-gradient-to-b from-celeste-soft via-surface-alt/60 to-surface">
        <p className="text-primary/45">
          No hay ejercicios disponibles.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-celeste-soft via-surface-alt/60 to-surface relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-5%,rgba(112,181,219,0.30),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_70%,rgba(225,168,18,0.07),transparent_70%)]" />

      <TestNavbar
        ref={navbarRef}
        currentIndex={isCompleted ? totalExercises - 1 : flatIndex}
        totalQuestions={totalExercises}
        difficulty={currentLevel}
      />

      <main
        id="main-content"
        className="relative mx-auto max-w-6xl pt-28 pb-12 px-5 sm:pt-32 sm:px-6 lg:pt-32 lg:px-8"
        style={
          navbarHeight > 0
            ? { paddingTop: `${navbarHeight + 8}px` }
            : undefined
        }
      >
        <AnimatePresence mode="wait">
          {isCompleted ? (
            <CompletedView
              key="completed"
              answerHistory={answerHistory}
            />
          ) : (
            <motion.div
              key={`${levelIndex}-${exerciseIndexInLevel}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 lg:flex-row lg:gap-8"
            >
              <div className="flex-1 w-full">
                {exercise ? (
                  <ExerciseRouter
                    exercise={exercise}
                    selectedOptionIndex={selectedOptionIndex}
                    userWordOrder={userWordOrder}
                    isAnswered={isAnswered}
                    onSelectOption={handleSelectOption}
                    onSetWordOrder={handleSetWordOrder}
                    onAction={handleAction}
                    actionLabel={actionLabel}
                  />
                ) : (
                  <p className="text-primary/45">
                    Ejercicio no disponible.
                  </p>
                )}
              </div>

              <div className="lg:w-80 xl:w-96 shrink-0">
                <TestTipCard
                  tip={isAnswered && exercise ? exercise.tip : null}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
