"use client";

import type { Exercise } from "@/lib/types";
import MultipleChoiceCard from "./exercise-multiple-choice";
import WordOrderCard from "./exercise-word-order";
import ReadingComprehensionCard from "./exercise-reading-comprehension";
import QuestionAnswerCard from "./exercise-question-answer";

interface ExerciseRouterProps {
  exercise: Exercise;
  selectedOptionIndex: number | null;
  userWordOrder: string[];
  isAnswered: boolean;
  onSelectOption: (index: number) => void;
  onSetWordOrder: (words: string[]) => void;
  onAction: () => void;
  actionLabel: string;
}

export default function ExerciseRouter({
  exercise,
  selectedOptionIndex,
  userWordOrder,
  isAnswered,
  onSelectOption,
  onSetWordOrder,
  onAction,
  actionLabel,
}: ExerciseRouterProps) {
  switch (exercise.type) {
    case "multiple-choice":
      return (
        <MultipleChoiceCard
          exercise={exercise}
          selectedOptionIndex={selectedOptionIndex}
          isAnswered={isAnswered}
          onSelectOption={onSelectOption}
          onAction={onAction}
          actionLabel={actionLabel}
        />
      );

    case "word-order":
      return (
        <WordOrderCard
          exercise={exercise}
          userOrder={userWordOrder}
          isAnswered={isAnswered}
          onSetWordOrder={onSetWordOrder}
          onAction={onAction}
          actionLabel={actionLabel}
        />
      );

    case "reading-comprehension":
      return (
        <ReadingComprehensionCard
          exercise={exercise}
          selectedOptionIndex={selectedOptionIndex}
          isAnswered={isAnswered}
          onSelectOption={onSelectOption}
          onAction={onAction}
          actionLabel={actionLabel}
        />
      );

    case "question-answer":
      return (
        <QuestionAnswerCard
          exercise={exercise}
          selectedOptionIndex={selectedOptionIndex}
          isAnswered={isAnswered}
          onSelectOption={onSelectOption}
          onAction={onAction}
          actionLabel={actionLabel}
        />
      );

    default:
      return exercise satisfies never;
  }
}
