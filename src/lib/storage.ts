import { SESSION_KEY } from "@/lib/constants";
import type { AnswerRecord } from "@/app/test/_lib/results-calculator";

interface StoredResults {
  answers: AnswerRecord[];
}

const VALID_DIFFICULTIES = new Set(["A1", "A2", "B1", "B2", "C1", "C2"]);
const VALID_TYPES = new Set([
  "multiple-choice",
  "word-order",
  "reading-comprehension",
  "question-answer",
]);

function isValidAnswerRecord(item: unknown): item is AnswerRecord {
  if (typeof item !== "object" || item === null) return false;
  const record = item as Record<string, unknown>;
  return (
    typeof record.exerciseId === "string" &&
    typeof record.difficulty === "string" &&
    VALID_DIFFICULTIES.has(record.difficulty) &&
    typeof record.type === "string" &&
    VALID_TYPES.has(record.type) &&
    typeof record.grammarTopic === "string" &&
    typeof record.correct === "boolean"
  );
}

export function saveResults(answers: AnswerRecord[]): void {
  try {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ answers }),
    );
  } catch {
    // sessionStorage may be unavailable (private browsing, quota exceeded)
  }
}

export function loadResults(): StoredResults | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const data: unknown = JSON.parse(raw);
    if (
      typeof data === "object" &&
      data !== null &&
      "answers" in data &&
      Array.isArray((data as StoredResults).answers)
    ) {
      const rawData = data as { answers: unknown[] };
      const validAnswers = rawData.answers.filter(isValidAnswerRecord);
      if (validAnswers.length === 0) return null;
      return { answers: validAnswers };
    }
    return null;
  } catch {
    return null;
  }
}

export function clearResults(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // sessionStorage may be unavailable
  }
}
