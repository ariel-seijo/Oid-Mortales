import type { Exercise, Difficulty } from "@/lib/types";
import { ALL_EXERCISES } from "./questions";

const DIFFICULTY_ORDER: Record<Difficulty, number> = {
  A1: 0,
  A2: 1,
  B1: 2,
  B2: 3,
  C1: 4,
  C2: 5,
};

export function getExercisesGroupedByLevel(): Exercise[][] {
  const sorted = [...ALL_EXERCISES].sort(
    (a, b) =>
      DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty],
  );
  const groups: Map<number, Exercise[]> = new Map();
  const levels: Difficulty[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

  for (const ex of sorted) {
    const order = DIFFICULTY_ORDER[ex.difficulty];
    if (!groups.has(order)) groups.set(order, []);
    groups.get(order)!.push(ex);
  }

  return levels.map((level) => {
    const group = groups.get(DIFFICULTY_ORDER[level]) ?? [];
    return group;
  });
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
