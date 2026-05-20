"use client";

import { useState, useEffect, useMemo, useRef, useLayoutEffect } from "react";
import type { WordOrderExercise } from "@/lib/types";

interface WordOrderCardProps {
  exercise: WordOrderExercise;
  userOrder: string[];
  isAnswered: boolean;
  onSetWordOrder: (words: string[]) => void;
  onAction: () => void;
  actionLabel: string;
}

function getRemainingWords(
  shuffledWords: string[],
  userOrder: string[],
): string[] {
  const remaining: string[] = [];
  const usedCount = new Map<string, number>();
  for (const w of userOrder) {
    usedCount.set(w, (usedCount.get(w) ?? 0) + 1);
  }
  for (const w of shuffledWords) {
    const used = usedCount.get(w) ?? 0;
    if (used > 0) {
      usedCount.set(w, used - 1);
    } else {
      remaining.push(w);
    }
  }
  return remaining;
}

export default function WordOrderCard({
  exercise,
  userOrder,
  isAnswered,
  onSetWordOrder,
  onAction,
  actionLabel,
}: WordOrderCardProps) {
  const [shuffledWords, setShuffledWords] = useState<string[]>(
    () => exercise.shuffledWords,
  );

  useEffect(() => {
    const shuffled = [...exercise.shuffledWords];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShuffledWords(shuffled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise.id]);

  const articleRef = useRef<HTMLElement>(null);
  const [lockWidth, setLockWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = articleRef.current;
    if (!el) return;

    const measure = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setLockWidth(el.getBoundingClientRect().width);
      } else {
        setLockWidth(null);
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
      setLockWidth(null);
    };
  }, [exercise.id]);

  const remaining = useMemo(
    () => getRemainingWords(shuffledWords, userOrder),
    [shuffledWords, userOrder],
  );

  const canVerify = remaining.length === 0 && !isAnswered;

  const totalWords = shuffledWords.length;

  const dropMinH = Math.max(
    52,
    Math.ceil(totalWords / 4) * 42 + 28,
  );
  const dropMinHSm = Math.max(
    60,
    Math.ceil(totalWords / 5) * 42 + 36,
  );

  const cardMinH =
    288 +
    dropMinH +
    Math.max(60, Math.ceil(totalWords / 4) * 42 + 8);
  const cardMinHSm =
    300 +
    dropMinHSm +
    Math.max(60, Math.ceil(totalWords / 5) * 42 + 8);

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
      ref={articleRef}
      style={{
        "--card-min-h": `${cardMinH}px`,
        "--card-min-h-sm": `${cardMinHSm}px`,
        ...(lockWidth !== null
          ? {
              width: `${lockWidth}px`,
              minWidth: `${lockWidth}px`,
              maxWidth: `${lockWidth}px`,
            }
          : {}),
      } as React.CSSProperties}
      className="rounded-xl border border-primary/7 bg-gradient-to-br from-surface-card via-[#fafbfc] via-50% to-surface-alt/20 p-5 shadow-[0_1px_2px_rgba(10,41,64,0.04)] transition-shadow transition-border duration-300 w-full min-w-full max-w-full overflow-hidden min-h-[var(--card-min-h)] sm:min-h-[var(--card-min-h-sm)] sm:p-7 lg:p-8"
      aria-label={`Ejercicio de ${exercise.grammarTopic}`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="rounded-full text-xs font-semibold tracking-[0.01em] transition-colors bg-gradient-to-br from-primary/6 to-primary/4 border border-primary/6 px-3 py-1 text-primary/65">
          {exercise.topic}
        </span>
        <span className="rounded-full text-xs font-semibold tracking-[0.01em] transition-colors bg-primary/5 border border-primary/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.06em] text-primary/35">
          Ordenar palabras
        </span>
      </div>

      <p className="text-sm leading-5 font-medium text-primary/45 mb-3 sm:text-base sm:leading-6">
        {exercise.instruction}
      </p>

      {/* Spanish translation reference */}
      <div className="flex flex-wrap items-center gap-2 rounded-lg bg-gradient-to-br from-surface-alt/80 to-surface-alt/35 border border-celeste/20 px-3 py-1.5 mb-5 max-w-full">
        <span className="text-xs leading-none" aria-hidden="true">🇪🇸</span>
        <span className="text-sm leading-5 font-medium text-primary/70">
          {exercise.spanishTranslation}
        </span>
      </div>

      <div className="mb-5">
        <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-primary/30">
          Tu oración
        </p>
        <div
          style={{
            "--drop-min-h": `${dropMinH}px`,
            "--drop-min-h-sm": `${dropMinHSm}px`,
          } as React.CSSProperties}
          className={`min-h-[var(--drop-min-h)] rounded-xl border-2 border-dashed p-3 transition-all duration-250 sm:min-h-[var(--drop-min-h-sm)] sm:p-4 ${
            isAnswered
              ? userOrder.every(
                    (w, i) => w === exercise.correctOrder[i],
                  )
                ? "border-[#6ee7b7] bg-gradient-to-br from-[rgba(236,253,245,0.6)] to-[rgba(209,250,229,0.3)] shadow-[0_0_0_1px_rgba(110,231,183,0.15)]"
                : "border-[#fecdd3] bg-gradient-to-br from-[rgba(255,241,242,0.5)] to-[rgba(255,228,230,0.2)] shadow-[0_0_0_1px_rgba(253,164,175,0.1)]"
              : "border-primary/10 bg-primary/1"
          }`}
          aria-label="Tu respuesta ordenada"
        >
          {userOrder.length === 0 ? (
            <p className="py-1 text-sm leading-5 text-primary/18 sm:text-base sm:leading-6">
              Haz clic en las palabras para formar la oración...
            </p>
          ) : (
            <div className="flex flex-wrap gap-2 min-w-0">
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
                    className={
                      isCorrectPos
                        ? "rounded-lg bg-gradient-to-br from-success-soft to-[#a7f3d0] text-[#047857] border-none shadow-[0_0_0_1px_rgba(110,231,183,0.4),0_2px_6px_rgba(52,211,153,0.15)] px-3 py-1.5 text-sm font-medium sm:px-4 sm:py-2 sm:text-base"
                        : isWrongPos
                          ? "rounded-lg bg-gradient-to-br from-error-soft to-[#fecdd3] text-[#9f1239] border-none shadow-[0_0_0_1px_rgba(253,164,175,0.3),0_2px_6px_rgba(244,114,114,0.1)] line-through decoration-[rgba(225,29,72,0.3)] decoration-2 cursor-pointer px-3 py-1.5 text-sm font-medium sm:px-4 sm:py-2 sm:text-base"
                          : "rounded-lg bg-gradient-to-br from-celeste to-primary-hover text-surface border-none cursor-pointer shadow-[0_1px_3px_rgba(112,181,219,0.3)] px-3 py-1.5 text-sm font-medium transition-all duration-200 font-inherit m-0 sm:px-4 sm:py-2 sm:text-base hover:from-primary-hover hover:to-primary hover:shadow-[0_3px_8px_rgba(30,97,138,0.3)] hover:-translate-y-px active:scale-95"
                    }
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
          <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-primary/30">
            Palabras disponibles
          </p>
          <div className="flex flex-wrap gap-2 min-w-0">
            {remaining.length === 0 ? (
              <p className="py-1 text-sm leading-5 text-primary/18">
                Todas las palabras en uso
              </p>
            ) : (
              remaining.map((word, i) => (
                <button
                  key={`remaining-${i}`}
                  onClick={() => addWord(word)}
                  className="rounded-lg border-2 border-primary/8 bg-surface-card px-3 py-1.5 text-sm font-medium text-text-dark transition-all duration-200 font-inherit cursor-pointer m-0 sm:px-4 sm:py-2 sm:text-base hover:border-primary/20 hover:bg-gradient-to-br hover:from-white hover:to-surface-alt/30 hover:-translate-y-px hover:shadow-[0_1px_3px_rgba(10,41,64,0.06),0_1px_2px_rgba(10,41,64,0.04)] active:scale-95"
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
            <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-primary/30">
              Orden correcto
            </p>
            <div className="rounded-xl border-2 border-[#a7f3d0] bg-gradient-to-br from-[rgba(236,253,245,0.6)] to-[rgba(209,250,229,0.3)] p-3 sm:p-4">
            <div className="flex flex-wrap gap-2 min-w-0">
                {exercise.correctOrder.map((word, i) => (
                  <span
                    key={`correct-${i}`}
                    className="rounded-lg bg-gradient-to-br from-success-soft to-[#a7f3d0] px-3 py-1.5 text-sm font-semibold text-[#047857] shadow-[0_0_0_1px_rgba(110,231,183,0.4),0_2px_6px_rgba(52,211,153,0.12)] sm:px-4 sm:py-2 sm:text-base"
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
        className={`inline-flex h-12 w-full items-center justify-center rounded-lg border-none px-8 text-sm font-semibold tracking-[0.01em] transition-all duration-300 font-inherit relative overflow-hidden sm:h-14 sm:text-base ${
          canVerify || isAnswered
            ? "cursor-pointer bg-gradient-to-br from-celeste to-primary-hover text-surface shadow-[0_2px_12px_rgba(112,181,219,0.25)] hover:from-primary-hover hover:to-primary hover:shadow-[0_6px_20px_rgba(30,97,138,0.25)] hover:-translate-y-px active:scale-[0.98] active:translate-y-0"
            : "cursor-default bg-primary/6 text-primary/20"
        }`}
      >
        {actionLabel}
      </button>
    </article>
  );
}
