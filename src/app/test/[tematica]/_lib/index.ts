import type { Question } from "@/lib/types";
import { ALL_QUESTIONS } from "./questions";
import { PATH_CARDS } from "@/lib/constants";

const DIFFICULTY_ORDER: Record<Question["difficulty"], number> = {
  A1: 0,
  A2: 1,
  B1: 2,
  B2: 3,
  C1: 4,
  C2: 5,
};

export function getQuestionsByTematica(tematica: string): Question[] {
  return ALL_QUESTIONS
    .filter((q) => q.tematica === tematica)
    .sort((a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]);
}

export function getTematicaName(tematica: string): string {
  const card = PATH_CARDS.find((c) => c.id === tematica);
  return card?.title ?? tematica;
}
