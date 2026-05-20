"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import type { Exercise, Difficulty } from "@/lib/types";
import { clearResults } from "@/lib/storage";
import { getExercisesGroupedByLevel, shuffleArray } from "../_lib";
import type { AnswerRecord } from "../_lib/results-calculator";

const LEVELS: Difficulty[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export interface UseTestEngineReturn {
  exercises: Exercise[];
  levelIndex: number;
  exerciseIndexInLevel: number;
  flatIndex: number;
  totalExercises: number;
  currentLevel: Difficulty;
  selectedOptionIndex: number | null;
  userWordOrder: string[];
  isAnswered: boolean;
  isCompleted: boolean;
  exercise: Exercise | undefined;
  actionLabel: string;
  answerHistory: AnswerRecord[];
  handleSelectOption: (index: number) => void;
  handleSetWordOrder: (words: string[]) => void;
  handleAction: () => void;
}

export function useTestEngine(): UseTestEngineReturn {
  const [groupedExercises] = useState<Exercise[][]>(
    () => getExercisesGroupedByLevel().map((group) => shuffleArray(group)),
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
  const [answerHistory, setAnswerHistory] = useState<AnswerRecord[]>([]);

  useEffect(() => {
    clearResults();
  }, []);

  const levelGroup = groupedExercises[levelIndex] ?? [];
  const exercise: Exercise | undefined = levelGroup[exerciseIndexInLevel];
  const currentLevel = LEVELS[levelIndex];

  const isAnswerCorrect = useCallback((): boolean => {
    if (!exercise) return false;
    switch (exercise.type) {
      case "multiple-choice":
      case "reading-comprehension":
      case "question-answer":
        return selectedOptionIndex === exercise.correctIndex;
      case "word-order":
        return (
          userWordOrder.length === exercise.correctOrder.length &&
          userWordOrder.every((w, i) => w === exercise.correctOrder[i])
        );
      default:
        return false;
    }
  }, [exercise, selectedOptionIndex, userWordOrder]);

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

  const canVerify = useCallback((): boolean => {
    if (!exercise) return false;
    switch (exercise.type) {
      case "multiple-choice":
      case "reading-comprehension":
      case "question-answer":
        return selectedOptionIndex !== null;
      case "word-order":
        return userWordOrder.length === exercise.shuffledWords.length;
    }
  }, [exercise, selectedOptionIndex, userWordOrder]);

  const handleAction = useCallback(() => {
    if (!isAnswered) {
      if (!canVerify() || !exercise) return;
      setAnswerHistory((prev) => [
        ...prev,
        {
          exerciseId: exercise.id,
          difficulty: exercise.difficulty,
          type: exercise.type,
          grammarTopic: exercise.grammarTopic,
          correct: isAnswerCorrect(),
        },
      ]);
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
    exercise,
    isAnswerCorrect,
    exerciseIndexInLevel,
    levelGroup.length,
    levelIndex,
    groupedExercises.length,
  ]);

  return {
    exercises: allExercises,
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
  };
}
