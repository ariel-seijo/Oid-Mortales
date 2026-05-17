"use client";

import { useState, useCallback, useMemo } from "react";
import type { Exercise, Difficulty } from "@/lib/types";
import { getExercisesGroupedByLevel, getTematicaName } from "../_lib";

const LEVELS: Difficulty[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

interface UseTestEngineReturn {
  exercises: Exercise[];
  levelIndex: number;
  exerciseIndexInLevel: number;
  totalExercises: number;
  currentLevel: Difficulty;
  selectedOptionIndex: number | null;
  userWordOrder: string[];
  isAnswered: boolean;
  isCompleted: boolean;
  exercise: Exercise;
  tematicaName: string;
  actionLabel: string;
  handleSelectOption: (index: number) => void;
  handleSetWordOrder: (words: string[]) => void;
  handleAction: () => void;
}

export function useTestEngine(tematica: string): UseTestEngineReturn {
  const groupedExercises = useMemo(
    () => getExercisesGroupedByLevel(tematica),
    [tematica],
  );

  const allExercises = useMemo(
    () => groupedExercises.flat(),
    [groupedExercises],
  );

  const [levelIndex, setLevelIndex] = useState(0);
  const [exerciseIndexInLevel, setExerciseIndexInLevel] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [userWordOrder, setUserWordOrderState] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const levelGroup = groupedExercises[levelIndex] ?? [];
  const exercise: Exercise = levelGroup[exerciseIndexInLevel];
  const currentLevel = LEVELS[levelIndex];
  const tematicaName = getTematicaName(tematica);

  const flatIndex =
    groupedExercises
      .slice(0, levelIndex)
      .reduce((sum, g) => sum + g.length, 0) + exerciseIndexInLevel;

  const totalExercises = allExercises.length;

  const actionLabel = isAnswered
    ? flatIndex === totalExercises - 1
      ? "Finalizar test"
      : "Siguiente ejercicio"
    : "Verificar respuesta";

  const handleSelectOption = useCallback(
    (index: number) => {
      if (isAnswered) return;
      setSelectedOptionIndex(index);
    },
    [isAnswered],
  );

  const handleSetWordOrder = useCallback(
    (words: string[]) => {
      if (isAnswered) return;
      setUserWordOrderState(words);
    },
    [isAnswered],
  );

  const canVerify = (): boolean => {
    if (!exercise) return false;
    switch (exercise.type) {
      case "multiple-choice":
      case "reading-comprehension":
      case "question-answer":
        return selectedOptionIndex !== null;
      case "word-order":
        return (
          userWordOrder.length === exercise.shuffledWords.length
        );
    }
  };

  const handleAction = useCallback(() => {
    if (!isAnswered) {
      if (!canVerify()) return;
      setIsAnswered(true);
      return;
    }

    const isLastInLevel = exerciseIndexInLevel >= levelGroup.length - 1;
    const isLastLevel = levelIndex >= groupedExercises.length - 1;

    if (isLastInLevel && isLastLevel) {
      setIsCompleted(true);
      return;
    }

    if (isLastInLevel) {
      setLevelIndex((prev) => prev + 1);
      setExerciseIndexInLevel(0);
    } else {
      setExerciseIndexInLevel((prev) => prev + 1);
    }

    setSelectedOptionIndex(null);
    setUserWordOrderState([]);
    setIsAnswered(false);
  }, [
    isAnswered,
    canVerify,
    exerciseIndexInLevel,
    levelGroup.length,
    levelIndex,
    groupedExercises.length,
  ]);

  return {
    exercises: allExercises,
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
  };
}
