import { describe, it, expect } from "vitest";
import { calculateResults, DIFFICULTY_ORDER } from "@/app/test/_lib/results-calculator";
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

describe("calculateResults", () => {
  it("devuelve 0% para cero respuestas", () => {
    const results = calculateResults([]);
    expect(results.totalQuestions).toBe(0);
    expect(results.totalCorrect).toBe(0);
    expect(results.overallPercentage).toBe(0);
  });

  it("calcula porcentaje correcto", () => {
    const answers: AnswerRecord[] = [
      makeAnswer({ correct: true }),
      makeAnswer({ correct: true }),
      makeAnswer({ correct: false }),
      makeAnswer({ correct: true }),
    ];
    const results = calculateResults(answers);
    expect(results.totalQuestions).toBe(4);
    expect(results.totalCorrect).toBe(3);
    expect(results.overallPercentage).toBe(75);
  });

  it("devuelve 100% cuando todas son correctas", () => {
    const answers: AnswerRecord[] = Array.from({ length: 10 }, (_, i) =>
      makeAnswer({ exerciseId: `ex-${i}`, correct: true }),
    );
    const results = calculateResults(answers);
    expect(results.overallPercentage).toBe(100);
    expect(results.totalCorrect).toBe(10);
  });

  it("asigna nivel A1 para <= 7 aciertos", () => {
    const answers: AnswerRecord[] = Array.from({ length: 7 }, (_, i) =>
      makeAnswer({ exerciseId: `ex-${i}`, correct: true }),
    );
    const results = calculateResults(answers);
    expect(results.cefrLevel.level).toBe("A1");
  });

  it("asigna nivel A2 para 8-12 aciertos", () => {
    const answers: AnswerRecord[] = Array.from({ length: 10 }, (_, i) =>
      makeAnswer({ exerciseId: `ex-${i}`, correct: true }),
    );
    const results = calculateResults(answers);
    expect(results.cefrLevel.level).toBe("A2");
  });

  it("asigna nivel C2 para 28+ aciertos", () => {
    const answers: AnswerRecord[] = Array.from({ length: 30 }, (_, i) =>
      makeAnswer({ exerciseId: `ex-${i}`, correct: true }),
    );
    const results = calculateResults(answers);
    expect(results.cefrLevel.level).toBe("C2");
  });

  it("incluye descripción del nivel", () => {
    const answers: AnswerRecord[] = Array.from({ length: 5 }, (_, i) =>
      makeAnswer({ exerciseId: `ex-${i}`, correct: true }),
    );
    const results = calculateResults(answers);
    expect(results.cefrLevel.description).toBeDefined();
    expect(results.cefrLevel.description.overall).toBeTruthy();
    expect(results.cefrLevel.description.listening).toBeTruthy();
    expect(results.cefrLevel.description.reading).toBeTruthy();
    expect(results.cefrLevel.description.speaking).toBeTruthy();
    expect(results.cefrLevel.description.writing).toBeTruthy();
  });

  it("incluye isExact en el resultado", () => {
    const answers: AnswerRecord[] = Array.from({ length: 10 }, (_, i) =>
      makeAnswer({ exerciseId: `ex-${i}`, correct: true }),
    );
    const results = calculateResults(answers);
    expect(results.cefrLevel.isExact).toBe(true);
  });
});

describe("DIFFICULTY_ORDER", () => {
  it("contiene los 6 niveles MCER en orden", () => {
    expect(DIFFICULTY_ORDER).toEqual(["A1", "A2", "B1", "B2", "C1", "C2"]);
  });
});
