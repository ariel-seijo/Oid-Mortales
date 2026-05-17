"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { QuestionTip } from "@/lib/types";

interface TestTipCardProps {
  tip: QuestionTip | null;
}

export default function TestTipCard({ tip }: TestTipCardProps) {
  return (
    <motion.aside
      layout
      className="rounded-2xl border border-navy/8 bg-cream-card p-5 sm:p-6 lg:p-7"
      aria-label="Tip lingüístico"
    >
      <div className="mb-4 flex items-center gap-3">
        <motion.div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
          animate={{
            backgroundColor: tip
              ? "rgba(91, 125, 177, 0.15)"
              : "rgba(27, 42, 74, 0.04)",
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            animate={{
              color: tip ? "#5B7DB1" : "rgba(27, 42, 74, 0.15)",
              rotate: tip ? [0, -12, 8, -4, 0] : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <path
              d="M10 2.5c-.9 0-1.75.35-2.4.98a3.33 3.33 0 00-.93 2.35c0 1.3.77 2.42 1.88 2.95l-.05.15c-.7-.1-1.4.1-1.95.55A2.5 2.5 0 006 11.25v.42c0 .5.15.98.43 1.38M10 2.5c.9 0 1.75.35 2.4.98.64.62.93 1.46.93 2.35 0 1.3-.77 2.42-1.88 2.95l.05.15c.7-.1 1.4.1 1.95.55.52.47.81 1.13.81 1.82v.42c0 .5-.15.98-.43 1.38M10 2.5v11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.43 13.05A3.7 3.7 0 003 16.25h14a3.7 3.7 0 00-3.43-3.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>
        <h2 className="font-serif text-base font-semibold text-navy sm:text-lg">
          Tip Lingüístico
        </h2>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {tip ? (
          <motion.div
            key="tip-content"
            initial={{ opacity: 0, y: 8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-2.5 overflow-hidden"
          >
            <div>
              <h3 className="text-sm font-semibold text-navy/80 sm:text-base">
                {tip.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy/60 sm:text-base">
                {tip.explanation}
              </p>
            </div>
            {tip.titleEs && (
              <>
                <div className="border-t border-navy/8" />
                <div>
                  <h3 className="text-sm font-semibold text-blue-accent/70 sm:text-base">
                    {tip.titleEs}
                  </h3>
                  <p className="text-sm leading-relaxed text-blue-accent/50 sm:text-base">
                    {tip.explanationEs}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        ) : (
          <motion.p
            key="tip-placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm leading-relaxed text-navy/25 sm:text-base"
          >
            Responde la pregunta para ver el tip lingüístico.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}
