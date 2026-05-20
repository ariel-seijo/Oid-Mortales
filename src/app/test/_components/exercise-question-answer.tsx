"use client";

import { useState } from "react";
import type { QuestionAnswerExercise } from "@/lib/types";

interface QuestionAnswerCardProps {
  exercise: QuestionAnswerExercise;
  selectedOptionIndex: number | null;
  isAnswered: boolean;
  onSelectOption: (index: number) => void;
  onAction: () => void;
  actionLabel: string;
}

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

export default function QuestionAnswerCard({
  exercise,
  selectedOptionIndex,
  isAnswered,
  onSelectOption,
  onAction,
  actionLabel,
}: QuestionAnswerCardProps) {
  const canVerify = selectedOptionIndex !== null && !isAnswered;
  const canAdvance = isAnswered;
  const isFindQuestion = exercise.variant === "find-question";
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <article
      className="rounded-xl border border-primary/7 bg-gradient-to-br from-surface-card via-[#fafbfc] via-50% to-surface-alt/20 p-5 shadow-[0_1px_2px_rgba(10,41,64,0.04)] transition-shadow transition-border duration-300 sm:p-7 lg:p-8"
      aria-label={`Ejercicio de ${exercise.grammarTopic}`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="rounded-full text-xs font-semibold tracking-[0.01em] transition-colors bg-gradient-to-br from-primary/6 to-primary/4 border border-primary/6 px-3 py-1 text-primary/65">
          {exercise.topic}
        </span>
        <span className="rounded-full text-xs font-semibold tracking-[0.01em] transition-colors bg-primary/5 border border-primary/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.06em] text-primary/35">
          {isFindQuestion ? "Buscar pregunta" : "Buscar respuesta"}
        </span>
      </div>

      <p className="text-sm leading-5 font-medium text-primary/45 mb-4 sm:text-base sm:leading-6">
        {exercise.instruction}
      </p>

      <div className="mb-6 rounded-xl border-2 border-primary/8 bg-gradient-to-br from-surface-card to-surface-alt/15 p-4 sm:p-5">
        <p className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-primary/28">
          {isFindQuestion ? "Respuesta" : "Pregunta"}
        </p>
        <p className="font-serif text-lg leading-[1.65] text-text-dark font-medium sm:text-xl sm:leading-7 lg:text-2xl lg:leading-8">
          {exercise.prompt}
        </p>
      </div>

      {isAnswered && exercise.translation && (
        <div className="mb-5">
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-celeste/25 bg-gradient-to-br from-surface-alt/80 to-surface-alt/40 px-3 py-1.5 text-xs font-medium text-primary transition-colors duration-150 font-inherit cursor-pointer hover:from-surface-alt/95 hover:to-[rgba(201,224,244,0.6)] hover:border-celeste/45"
          >
            <span className="text-xs leading-none text-primary/45" aria-hidden="true">
              {showTranslation ? "▲" : "▼"}
            </span>
            {showTranslation ? "Ocultar traducción" : "Ver traducción"}
          </button>
          {showTranslation && (
            <div className="mt-3 rounded-xl border border-celeste/20 bg-gradient-to-br from-surface-alt/60 to-surface-alt/25 p-3 sm:p-4">
              <p className="text-sm leading-[1.65] text-primary/70">
                {exercise.translation}
              </p>
            </div>
          )}
        </div>
      )}

      <p className="text-sm leading-5 font-medium text-primary/45 mb-4 sm:text-base sm:leading-6">
        {isFindQuestion
          ? "¿Cuál es la mejor pregunta para esta respuesta?"
          : "¿Cuál es la mejor respuesta para esta pregunta?"}
      </p>

      <div className="grid grid-cols-1 gap-3 mb-7 sm:grid-cols-2">
        {exercise.options.map((option, index) => {
          const isSelected = selectedOptionIndex === index;
          const isCorrect = index === exercise.correctIndex;
          const optionLabel = OPTION_LABELS[index];

          let borderModifier = "border-primary/8 bg-surface-card shadow-[0_1px_2px_rgba(10,41,64,0.04)] hover:border-primary/18 hover:bg-gradient-to-br hover:from-white hover:to-surface-alt/30 hover:shadow-[0_1px_3px_rgba(10,41,64,0.06),0_1px_2px_rgba(10,41,64,0.04)] hover:-translate-y-px";
          let labelModifier = "bg-primary/6 text-primary/45";
          let textModifier = "text-text-dark";

          if (isAnswered) {
            if (isCorrect) {
              borderModifier = "border-[#6ee7b7] bg-gradient-to-br from-[rgba(236,253,245,0.8)] to-[rgba(209,250,229,0.4)] shadow-[0_0_0_1px_rgba(110,231,183,0.2),0_2px_8px_rgba(52,211,153,0.08)]";
              labelModifier = "bg-gradient-to-br from-success to-[#059669] text-white shadow-[0_2px_6px_rgba(16,185,129,0.3)]";
              textModifier = "text-[#047857] font-semibold";
            } else if (isSelected && !isCorrect) {
              borderModifier = "border-[#fda4af] bg-gradient-to-br from-[rgba(255,241,242,0.8)] to-[rgba(255,228,230,0.4)] shadow-[0_0_0_1px_rgba(253,164,175,0.15),0_2px_8px_rgba(244,114,114,0.06)]";
              labelModifier = "bg-gradient-to-br from-[#fb7185] to-error text-white shadow-[0_2px_6px_rgba(251,113,133,0.3)]";
              textModifier = "text-[#9f1239] line-through decoration-[rgba(225,29,72,0.35)] decoration-2";
            } else {
              borderModifier = "border-primary/4 bg-primary/1";
              labelModifier = "bg-primary/4 text-primary/18";
              textModifier = "text-primary/22";
            }
          } else if (isSelected) {
            borderModifier = "border-celeste bg-gradient-to-br from-celeste/8 to-celeste/3 shadow-[0_0_0_1px_rgba(112,181,219,0.3),0_4px_16px_rgba(112,181,219,0.12)]";
            labelModifier = "bg-gradient-to-br from-celeste to-primary-hover text-surface shadow-[0_2px_8px_rgba(112,181,219,0.3)]";
            textModifier = "text-text-dark font-semibold";
          }

          return (
            <button
              key={index}
              role="radio"
              aria-checked={isSelected}
              disabled={isAnswered}
              tabIndex={isAnswered ? -1 : 0}
              onClick={() => onSelectOption(index)}
              onKeyDown={(e) => {
                if ((e.key === " " || e.key === "Enter") && !isAnswered) {
                  e.preventDefault();
                  onSelectOption(index);
                }
              }}
              className={`flex w-full items-start gap-3.5 rounded-xl border-2 p-3.5 text-left transition-all duration-200 font-inherit text-inherit m-0 relative overflow-hidden sm:p-4 ${borderModifier} ${
                isAnswered
                  ? "cursor-default"
                  : "cursor-pointer active:scale-[0.985]"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-200 tracking-[0.02em] sm:h-8 sm:w-8 sm:text-sm ${labelModifier}`}
              >
                {isAnswered && isCorrect ? (
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  optionLabel
                )}
              </span>
              <span
                className={`pt-0.5 text-sm leading-[1.4] transition-colors duration-200 sm:text-base sm:leading-6 sm:pt-0 ${textModifier}`}
              >
                {option}
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={onAction}
        disabled={!(canVerify || canAdvance)}
        className={`inline-flex h-12 w-full items-center justify-center rounded-lg border-none px-8 text-sm font-semibold tracking-[0.01em] transition-all duration-300 font-inherit relative overflow-hidden sm:h-14 sm:text-base ${
          canVerify || canAdvance
            ? "cursor-pointer bg-gradient-to-br from-celeste to-primary-hover text-surface shadow-[0_2px_12px_rgba(112,181,219,0.25)] hover:from-primary-hover hover:to-primary hover:shadow-[0_6px_20px_rgba(30,97,138,0.25)] hover:-translate-y-px active:scale-[0.98] active:translate-y-0"
            : "cursor-default bg-primary/6 text-primary/20"
        }`}
      >
        {actionLabel}
      </button>
    </article>
  );
}
