"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { AnswerRecord } from "../_lib/results-calculator";

interface CompletedViewProps {
  answerHistory: AnswerRecord[];
}

const SESSION_KEY = "oid-mortales-test-results";

export default function CompletedView({
  answerHistory,
}: CompletedViewProps) {
  const router = useRouter();

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ answers: answerHistory }),
    );

    const timeout = setTimeout(() => {
      router.push("/test/resultados");
    }, 1200);

    return () => clearTimeout(timeout);
  }, [answerHistory, router]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mt-12 mx-auto flex max-w-[28rem] flex-col items-center text-center sm:mt-16"
    >
      <div className="rounded-xl border border-primary/6 bg-gradient-to-b from-surface-card via-surface-alt/20 via-50% to-[#f8fafc] p-8 shadow-[0_4px_12px_rgba(10,41,64,0.06),0_1px_2px_rgba(10,41,64,0.04)] sm:p-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 16,
            delay: 0.2,
          }}
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-success-soft to-[#a7f3d0] shadow-[0_0_0_4px_rgba(52,211,153,0.15),0_4px_12px_rgba(52,211,153,0.2)]"
        >
          <svg
            className="h-8 w-8 text-emerald-600"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <h2 className="font-serif text-xl font-bold text-text-dark sm:text-2xl">
          Test completado
        </h2>
        <p className="mt-2 text-sm leading-[1.65] text-primary/50 sm:text-base">
          Has completado todos los ejercicios del test de nivelación.
        </p>
        <p className="mt-4 text-xs text-primary/35 sm:text-sm">
          Preparando tus resultados...
        </p>
        <div className="mt-5 flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2 w-2 rounded-full bg-primary/20"
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
