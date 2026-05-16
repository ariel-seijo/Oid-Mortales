"use client";

import type { Question } from "@/lib/test-data";

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

interface TestQuestionCardProps {
  question: Question;
  selectedOptionIndex: number | null;
  isAnswered: boolean;
  onSelectOption: (index: number) => void;
  onAction: () => void;
  actionLabel: string;
}

export default function TestQuestionCard({
  question,
  selectedOptionIndex,
  isAnswered,
  onSelectOption,
  onAction,
  actionLabel,
}: TestQuestionCardProps) {
  const canVerify = selectedOptionIndex !== null && !isAnswered;
  const canAdvance = isAnswered;

  return (
    <article
      className="rounded-2xl border border-navy/8 bg-cream p-5 sm:p-6 lg:p-8"
      aria-label={`Pregunta de ${question.grammarTopic}`}
    >
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-navy/6 px-2.5 py-1 text-xs font-semibold text-navy/60">
          {question.categoryContext}
        </span>
        <span className="rounded-full bg-blue-accent/10 px-2.5 py-1 text-xs font-semibold text-blue-accent">
          {question.grammarTopic}
        </span>
      </div>

      <blockquote className="relative mb-5 border-l-[3px] border-navy/15 py-1 pl-4 sm:pl-5">
        <p className="font-serif text-lg leading-relaxed text-navy sm:text-xl lg:text-2xl">
          {question.sentence}
        </p>
      </blockquote>

      <p className="mb-6 text-sm font-medium text-navy/50 sm:text-base">
        {question.instruction}
      </p>

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {question.options.map((option, index) => {
          const isSelected = selectedOptionIndex === index;
          const isCorrect = index === question.correctIndex;
          const optionLabel = OPTION_LABELS[index];

          let borderClass = "border-navy/8 bg-white hover:border-navy/20 hover:bg-navy/2";
          let labelClass = "bg-navy/6 text-navy/50";
          let textClass = "text-navy";

          if (isAnswered) {
            if (isCorrect) {
              borderClass = "border-emerald-400 bg-emerald-50/70";
              labelClass = "bg-emerald-500 text-white";
              textClass = "text-emerald-700 font-semibold";
            } else if (isSelected && !isCorrect) {
              borderClass = "border-rose-300 bg-rose-50/70";
              labelClass = "bg-rose-400 text-white";
              textClass = "text-rose-600 line-through decoration-rose-400/60 decoration-2";
            } else {
              borderClass = "border-navy/5 bg-navy/1";
              labelClass = "bg-navy/5 text-navy/25";
              textClass = "text-navy/30";
            }
          } else if (isSelected) {
            borderClass = "border-navy bg-navy/3 ring-2 ring-navy/15";
            labelClass = "bg-navy text-cream";
            textClass = "text-navy font-semibold";
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
              className={`group flex w-full items-start gap-3 rounded-xl border-2 p-3.5 text-left transition-all duration-200 sm:p-4 ${borderClass} ${
                isAnswered ? "cursor-default" : "cursor-pointer active:scale-[0.98]"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-200 sm:h-8 sm:w-8 sm:text-sm ${labelClass}`}
              >
                {isAnswered && isCorrect ? (
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  optionLabel
                )}
              </span>
              <span className={`pt-0.5 text-sm leading-snug transition-colors duration-200 sm:text-base sm:pt-0 ${textClass}`}>
                {option}
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={onAction}
        disabled={!(canVerify || canAdvance)}
        className={`inline-flex h-12 w-full items-center justify-center rounded-lg px-8 text-sm font-semibold transition-all duration-300 sm:h-14 sm:text-base ${
          canVerify || canAdvance
            ? "bg-navy text-cream hover:bg-navy-light hover:shadow-lg active:scale-[0.98]"
            : "cursor-default bg-navy/8 text-navy/30"
        }`}
      >
        {actionLabel}
      </button>
    </article>
  );
}
