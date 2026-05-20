"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { TestResults } from "../../_lib/results-calculator";

interface ScoreHeroProps {
  results: TestResults;
}

const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function LevelBadge({
  level,
  animated,
}: {
  level: string;
  animated: boolean;
}) {
  return (
    <motion.div
      initial={animated ? { scale: 0, opacity: 0 } : false}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.4 }}
      className="relative inline-flex select-none items-center justify-center"
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-celeste via-primary to-celeste blur-[28px] opacity-25" />
      <div className="relative rounded-full border-2 border-white/30 bg-[linear-gradient(135deg,var(--color-celeste),var(--color-primary-hover)_40%,var(--color-primary))] px-8 py-3 shadow-[0_0_0_1px_rgba(112,181,219,0.33),0_6px_24px_rgba(112,181,219,0.18)] sm:px-10 sm:py-4">
        <span className="font-serif text-3xl font-extrabold tracking-[-0.025em] text-surface [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] sm:text-4xl">
          {level}
        </span>
      </div>
    </motion.div>
  );
}

function StatCard({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center rounded-xl border border-primary/6 bg-gradient-to-br from-surface-card to-surface-alt/15 p-3 px-4 shadow-[0_1px_2px_rgba(10,41,64,0.04)] sm:p-4 sm:px-6"
    >
      <span className="font-serif text-2xl font-bold text-text-dark sm:text-3xl">
        {value}
      </span>
      <span className="mt-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-primary/65 sm:text-xs">
        {label}
      </span>
    </motion.div>
  );
}

export default function ScoreHero({ results }: ScoreHeroProps) {
  const [displayPercent, setDisplayPercent] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
    const target = results.overallPercentage;
    let frame: number;
    const start = performance.now();
    const duration = 1500;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayPercent(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [results.overallPercentage]);

  return (
    <section className="mb-10 sm:mb-14">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10 lg:gap-16">
        {/* Progress Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={animated ? { opacity: 1, scale: 1 } : false}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex shrink-0 items-center justify-center"
        >
          <svg
            width={220}
            height={220}
            viewBox="0 0 220 220"
            className="h-[180px] w-[180px] sm:h-[220px] sm:w-[220px]"
            aria-label={`${displayPercent}% de acierto`}
          >
            {/* Background track */}
            <circle
              cx={110}
              cy={110}
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth={12}
              className="text-primary/6"
            />
            {/* Progress arc */}
            <motion.circle
              cx={110}
              cy={110}
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth={12}
              strokeLinecap="round"
              className="text-celeste [filter:drop-shadow(0_0_6px_rgba(112,181,219,0.25))]"
              initial={{ pathLength: 0 }}
              animate={
                animated
                  ? {
                      pathLength: displayPercent / 100,
                    }
                  : false
              }
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "center",
                strokeDasharray: CIRCUMFERENCE,
              }}
            />
            {/* Center text */}
            <text
              x={110}
              y={105}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-[#0d3b56] font-serif text-[2rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]"
            >
              {displayPercent}%
            </text>
            <text
              x={110}
              y={130}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-primary/60 font-sans text-xs font-medium tracking-[0.04em] uppercase sm:text-sm"
            >
              acierto
            </text>
          </svg>
        </motion.div>

        {/* Right side: badge + stats */}
        <div className="flex flex-col items-center gap-5 sm:items-start">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <motion.span
              initial={animated ? { opacity: 0, x: -10 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/60 sm:text-sm"
            >
              Tu nivel estimado
            </motion.span>
            <LevelBadge level={results.cefrLevel.level} animated={animated} />

          </div>

          {/* Stats row */}
          <div className="flex gap-3 sm:gap-4">
            <StatCard
              label="Correctas"
              value={`${results.totalCorrect}/${results.totalQuestions}`}
              delay={0.5}
            />
            <StatCard
              label="Precisión"
              value={`${results.overallPercentage}%`}
              delay={0.65}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
