import { describe, it, expect, beforeEach } from "vitest";
import { saveResults, loadResults, clearResults } from "@/lib/storage";
import { SESSION_KEY } from "@/lib/constants";
import type { AnswerRecord } from "@/app/test/_lib/results-calculator";

function makeAnswer(
  overrides: Partial<AnswerRecord> = {},
): AnswerRecord {
  return {
    exerciseId: "ex-01",
    difficulty: "A1",
    type: "multiple-choice",
    grammarTopic: "present simple",
    correct: false,
    ...overrides,
  };
}

describe("storage", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("saveResults guarda datos en sessionStorage", () => {
    const answers: AnswerRecord[] = [
      makeAnswer({ exerciseId: "a", correct: true }),
      makeAnswer({ exerciseId: "b", correct: false }),
    ];
    saveResults(answers);

    const raw = sessionStorage.getItem(SESSION_KEY);
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.answers).toHaveLength(2);
  });

  it("loadResults recupera datos guardados", () => {
    const answers: AnswerRecord[] = [
      makeAnswer({ exerciseId: "x", correct: true }),
    ];
    saveResults(answers);

    const result = loadResults();
    expect(result).not.toBeNull();
    expect(result!.answers).toHaveLength(1);
    expect(result!.answers[0].exerciseId).toBe("x");
  });

  it("loadResults devuelve null si no hay datos", () => {
    const result = loadResults();
    expect(result).toBeNull();
  });

  it("loadResults devuelve null si datos están corruptos", () => {
    sessionStorage.setItem(SESSION_KEY, "not valid json{{{");
    const result = loadResults();
    expect(result).toBeNull();
  });

  it("loadResults filtra registros inválidos", () => {
    saveResults([
      makeAnswer({ exerciseId: "valid", correct: true }),
    ]);
    // Corromper el stored data con un item inválido
    const raw = sessionStorage.getItem(SESSION_KEY);
    const data = JSON.parse(raw!);
    data.answers.push({ invalid: true });
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));

    const result = loadResults();
    expect(result).not.toBeNull();
    expect(result!.answers).toHaveLength(1); // solo el válido
  });

  it("clearResults elimina los datos", () => {
    saveResults([makeAnswer()]);
    clearResults();
    expect(sessionStorage.getItem(SESSION_KEY)).toBeNull();
  });
});
