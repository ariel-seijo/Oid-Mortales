import { useState, useCallback, useMemo } from "react";
import type { Question } from "@/lib/types";
import { getQuestionsByTematica, getTematicaName } from "../_lib";

interface UseTestEngineReturn {
  questions: Question[];
  currentIndex: number;
  selectedOptionIndex: number | null;
  isAnswered: boolean;
  isCompleted: boolean;
  question: Question;
  isLastQuestion: boolean;
  tematicaName: string;
  actionLabel: string;
  handleSelectOption: (index: number) => void;
  handleAction: () => void;
  handleNext: () => void;
  handleComplete: () => void;
}

export function useTestEngine(tematica: string): UseTestEngineReturn {
  const questions = useMemo(
    () => getQuestionsByTematica(tematica),
    [tematica],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const question: Question = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const tematicaName = getTematicaName(tematica);

  const actionLabel = isAnswered
    ? isLastQuestion
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

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
  }, []);

  const handleComplete = useCallback(() => {
    setIsCompleted(true);
  }, []);

  const handleAction = useCallback(() => {
    if (!isAnswered) {
      if (selectedOptionIndex === null) return;
      setIsAnswered(true);
    } else {
      if (isLastQuestion) {
        handleComplete();
        return;
      }
      handleNext();
    }
  }, [isAnswered, selectedOptionIndex, isLastQuestion, handleComplete, handleNext]);

  return {
    questions,
    currentIndex,
    selectedOptionIndex,
    isAnswered,
    isCompleted,
    question,
    isLastQuestion,
    tematicaName,
    actionLabel,
    handleSelectOption,
    handleAction,
    handleNext,
    handleComplete,
  };
}
