"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestNavbar from "./test-navbar";
import ExerciseRouter from "./exercise-router";
import TestTipCard from "./test-tip-card";
import CompletedView from "./completed-view";
import { useTestEngine } from "../_hooks/use-test-engine";

interface TestContentProps {
  tematica: string;
}

export default function TestContent({ tematica }: TestContentProps) {
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
    tematicaName,
    actionLabel,
    handleSelectOption,
    handleSetWordOrder,
    handleAction,
  } = useTestEngine(tematica);

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

  const flatIndex =
    Math.min(levelIndex, 5) * 4 +
    Math.min(exerciseIndexInLevel, 3);

  if (exercises.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5">
        <p className="text-navy/50">
          No hay ejercicios disponibles para esta temática.
        </p>
      </div>
    );
  }

  return (
    <>
      <TestNavbar
        ref={navbarRef}
        tematicaName={tematicaName}
        currentIndex={isCompleted ? totalExercises : flatIndex}
        totalQuestions={totalExercises}
        difficulty={currentLevel}
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
              key={`${levelIndex}-${exerciseIndexInLevel}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 lg:flex-row lg:gap-8"
            >
              <div className="flex-1">
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
              </div>

              <div className="lg:w-80 xl:w-96">
                <TestTipCard
                  tip={isAnswered && exercise ? exercise.tip : null}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
