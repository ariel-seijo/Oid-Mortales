"use client";

import { useMemo } from "react";
import type { WordOrderExercise } from "@/lib/types";

interface WordOrderCardProps {
  exercise: WordOrderExercise;
  userOrder: string[];
  isAnswered: boolean;
  onSetWordOrder: (words: string[]) => void;
  onAction: () => void;
  actionLabel: string;
}

function shuffleArray<T>(array: readonly T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function WordOrderCard({
  exercise,
  userOrder,
  isAnswered,
  onSetWordOrder,
  onAction,
  actionLabel,
}: WordOrderCardProps) {
  const shuffledWords = useMemo(
    () => shuffleArray(exercise.shuffledWords),
    [exercise.id],
  );

  const remaining = shuffledWords.filter(
    (w) => !userOrder.includes(w),
  );

  const canVerify = remaining.length === 0 && !isAnswered;

  const addWord = (word: string) => {
    if (isAnswered) return;
    onSetWordOrder([...userOrder, word]);
  };

  const removeWord = (index: number) => {
    if (isAnswered) return;
    const next = [...userOrder];
    next.splice(index, 1);
    onSetWordOrder(next);
  };

  return (
    <article
      className="rounded-2xl border border-navy/8 bg-cream p-5 sm:p-6 lg:p-8"
      aria-label={`Ejercicio de ${exercise.grammarTopic}`}
    >
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-navy/6 px-2.5 py-1 text-xs font-semibold text-navy/60">
          {exercise.categoryContext}
        </span>
        <span className="rounded-full bg-blue-accent/10 px-2.5 py-1 text-xs font-semibold text-blue-accent">
          {exercise.grammarTopic}
        </span>
        <span className="rounded-full bg-navy/8 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-navy/40">
          Ordenar palabras
        </span>
      </div>

      <p className="mb-3 text-sm font-medium text-navy/50 sm:text-base">
        {exercise.instruction}
      </p>

      {/* Spanish translation reference */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-amber-50/70 border border-amber-200/60 px-3 py-1.5">
        <span className="text-xs leading-none" aria-hidden="true">🇪🇸</span>
        <span className="text-sm font-medium text-amber-800/80">
          {exercise.spanishTranslation}
        </span>
      </div>

      <div className="mb-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy/35">
          Tu oración
        </p>
        <div
          className={`min-h-[52px] rounded-xl border-2 border-dashed p-3 transition-all duration-200 sm:min-h-[60px] sm:p-4 ${
            isAnswered
              ? userOrder.every(
                    (w, i) => w === exercise.correctOrder[i],
                  )
                ? "border-emerald-300 bg-emerald-50/50"
                : "border-rose-200 bg-rose-50/30"
              : "border-navy/12 bg-navy/1"
          }`}
          aria-label="Tu respuesta ordenada"
        >
          {userOrder.length === 0 ? (
            <p className="py-1 text-sm text-navy/20 sm:text-base">
              Haz clic en las palabras para formar la oración...
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {userOrder.map((word, i) => {
                const isCorrectPos =
                  isAnswered &&
                  word === exercise.correctOrder[i];
                const isWrongPos =
                  isAnswered &&
                  word !== exercise.correctOrder[i];

                return (
                  <button
                    key={`${word}-${i}`}
                    onClick={() => removeWord(i)}
                    disabled={isAnswered}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 sm:px-4 sm:py-2 sm:text-base ${
                      isCorrectPos
                        ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300/50"
                        : isWrongPos
                          ? "bg-rose-100 text-rose-600 ring-1 ring-rose-300/50 line-through decoration-rose-400/40 decoration-2"
                          : "bg-blue-accent text-cream hover:bg-blue-accent/80 active:scale-95 cursor-pointer"
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {!isAnswered && (
        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy/35">
            Palabras disponibles
          </p>
          <div className="flex flex-wrap gap-2">
            {remaining.length === 0 ? (
              <p className="py-1 text-sm text-navy/20">
                Todas las palabras en uso
              </p>
            ) : (
              remaining.map((word) => (
                <button
                  key={word}
                  onClick={() => addWord(word)}
                  className="rounded-lg border-2 border-navy/10 bg-white px-3 py-1.5 text-sm font-medium text-navy transition-all duration-200 hover:border-navy/25 hover:bg-navy/3 active:scale-95 sm:px-4 sm:py-2 sm:text-base"
                >
                  {word}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {isAnswered &&
        !userOrder.every(
          (w, i) => w === exercise.correctOrder[i],
        ) && (
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy/35">
              Orden correcto
            </p>
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-3 sm:p-4">
              <div className="flex flex-wrap gap-2">
                {exercise.correctOrder.map((word, i) => (
                  <span
                    key={`correct-${i}`}
                    className="rounded-lg bg-emerald-100 px-3 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-300/50 sm:px-4 sm:py-2 sm:text-base"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      <button
        onClick={onAction}
        disabled={!(canVerify || isAnswered)}
        className={`inline-flex h-12 w-full items-center justify-center rounded-lg px-8 text-sm font-semibold transition-all duration-300 sm:h-14 sm:text-base ${
          canVerify || isAnswered
            ? "bg-navy text-cream hover:bg-navy-light hover:shadow-lg active:scale-[0.98]"
            : "cursor-default bg-navy/8 text-navy/30"
        }`}
      >
        {actionLabel}
      </button>
    </article>
  );
}
