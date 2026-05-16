"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CompletedViewProps {
  tematicaName: string;
}

export default function CompletedView({ tematicaName }: CompletedViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-12 max-w-md text-center sm:mt-16"
    >
      <div className="rounded-2xl border border-navy/8 bg-cream-card p-8 sm:p-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 16,
            delay: 0.2,
          }}
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100"
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
        <h2 className="font-serif text-xl font-bold text-navy sm:text-2xl">
          Test completado
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-navy/55 sm:text-base">
          Has completado todas las preguntas de {tematicaName}.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-navy px-8 text-sm font-semibold text-cream transition-all duration-300 hover:bg-navy-light hover:shadow-lg sm:h-14 sm:text-base"
        >
          Volver al inicio
        </Link>
      </div>
    </motion.div>
  );
}
