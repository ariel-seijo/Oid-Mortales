"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbarHeight } from "@/hooks/use-navbar-height";
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
    flatIndex,
    totalExercises,
    currentLevel,
    selectedOptionIndex,
    userWordOrder,
    isAnswered,
    isCompleted,
    exercise,
    actionLabel,
    handleSelectOption,
    handleSetWordOrder,
    handleAction,
    answerHistory,
  } = useTestEngine();

  const navbarRef = useRef<HTMLElement>(null);
  const navbarHeight = useNavbarHeight("[data-test-navbar]");

  if (exercises.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5">
        <p className="text-primary/45">
          No hay ejercicios disponibles.
        </p>
      </div>
    );
  }

  return (
    <>
      <TestNavbar
        ref={navbarRef}
        currentIndex={isCompleted ? totalExercises - 1 : flatIndex}
        totalQuestions={totalExercises}
        difficulty={currentLevel}
      />

      <main
        id="main-content"
        className="mx-auto max-w-6xl pt-28 pb-12 px-5 sm:pt-32 sm:px-6 lg:pt-32 lg:px-8"
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
              <div className="flex-1">
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
