"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Difficulty } from "@/lib/types";
import type { CEFRLevelDetails } from "../../_lib/results-calculator";

interface LevelDescriptionProps {
  level: Difficulty;
  description: CEFRLevelDetails;
}

function SkillCard({
  icon: Icon,
  label,
  text,
  index,
  animated,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  text: string;
  index: number;
  animated: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={animated ? { opacity: 1, y: 0 } : false}
      transition={{
        duration: 0.45,
        delay: 0.3 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group rounded-xl border border-primary/5 bg-gradient-to-br from-white/90 to-surface-alt/12 p-4 transition-shadow duration-300 hover:shadow-[0_1px_3px_rgba(10,41,64,0.06),0_1px_2px_rgba(10,41,64,0.04)] hover:border-primary/10 sm:p-5"
    >
      <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
        <span className="flex w-8 h-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-celeste/15 text-primary/70 transition-colors duration-300 group-hover:from-primary/15 group-hover:to-celeste/20 group-hover:text-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <h4 className="font-serif text-sm font-bold text-text-dark sm:text-base">
          {label}
        </h4>
      </div>
      <p className="text-xs leading-[1.65] text-primary/68 sm:text-sm">
        {text}
      </p>
    </motion.div>
  );
}

function ListeningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 4a6 6 0 016 6v3a6 6 0 01-12 0v-3a6 6 0 016-6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 16a5 5 0 005 5 5 5 0 005-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 19v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 23h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReadingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 8h8M8 12h8M8 16h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpeakingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8 6.5A3.5 3.5 0 0111.5 3h1A3.5 3.5 0 0116 6.5V10a3.5 3.5 0 01-3.5 3.5h-1A3.5 3.5 0 018 10V6.5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 8.5h.5a3 3 0 013 3v.5a3 3 0 01-3 3H16M8 15h-.5a3 3 0 00-3 3v.5a3 3 0 003 3H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WritingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15.5 4.5l4 4L9 19H5v-4L15.5 4.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6.5l4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SKILLS: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  key: keyof CEFRLevelDetails;
}[] = [
  { icon: ListeningIcon, label: "Comprensión auditiva", key: "listening" },
  { icon: ReadingIcon, label: "Comprensión lectora", key: "reading" },
  { icon: SpeakingIcon, label: "Expresión oral", key: "speaking" },
  { icon: WritingIcon, label: "Expresión escrita", key: "writing" },
];

export default function LevelDescription({
  level,
  description,
}: LevelDescriptionProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={animated ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 sm:mb-14"
    >
      <div className="rounded-[1.25rem] border border-primary/7 bg-gradient-to-b from-surface-card via-surface-alt/30 to-[#f8fafc] p-6 shadow-[0_4px_16px_rgba(10,41,64,0.07),0_1px_3px_rgba(10,41,64,0.04)] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-celeste/40 before:to-transparent sm:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <motion.span
            initial={{ scale: 0 }}
            animate={animated ? { scale: 1 } : false}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 14,
              delay: 0.15,
            }}
            className="rounded-full bg-gradient-to-br from-celeste to-primary-hover px-5 py-1.5 font-serif text-lg font-bold text-surface shadow-[0_2px_8px_rgba(112,181,219,0.3)] tracking-[-0.01em] sm:px-6 sm:py-2 sm:text-xl"
          >
            {level}
          </motion.span>
          <div>
            <h3 className="font-serif text-lg font-bold text-text-dark sm:text-xl">
              Tu nivel
            </h3>
          </div>
        </div>

        {/* Overall description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={animated ? { opacity: 1 } : false}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm leading-[1.7] text-primary/75 sm:text-base"
        >
          {description.overall}
        </motion.p>

        {/* Separator */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent sm:my-7" />

        {/* Skills section title */}
        <motion.h4
          initial={{ opacity: 0, x: -8 }}
          animate={animated ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mb-4 font-serif text-base font-bold text-text-dark sm:mb-5 sm:text-lg"
        >
          Qué podés hacer en inglés
        </motion.h4>

        {/* Skills grid */}
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {SKILLS.map((skill, i) => (
            <SkillCard
              key={skill.key}
              icon={skill.icon}
              label={skill.label}
              text={description[skill.key]}
              index={i}
              animated={animated}
            />
          ))}
        </div>

        {/* Separator */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent sm:my-7" />

        {/* Disclaimer */}
        <div className="flex items-start gap-2.5 bg-primary/[0.02] rounded-xl p-3 sm:gap-3 sm:p-4">
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 shrink-0 text-primary/50"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="[&>*+*]:mt-1">
            <p className="text-[0.6875rem] leading-[1.65] text-primary/55 sm:text-xs">
              Este resultado es una{" "}
              <strong className="font-semibold text-primary/70">
                estimación orientativa
              </strong>{" "}
              basada en un número limitado de ejercicios. No constituye una
              certificación oficial del Marco Común Europeo de Referencia (MCER)
              ni sustituye una evaluación formal realizada por una institución
              acreditada.
            </p>
            <p className="text-[0.6875rem] leading-[1.65] text-primary/55 sm:text-xs">
              La descripción del nivel corresponde a los estándares del MCER
              según el Consejo de Europa.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
