"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={animated ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pb-8"
    >
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <Link
          href="/test"
          className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gradient-to-br from-celeste to-primary-hover px-8 text-sm font-semibold text-surface no-underline transition-all duration-300 shadow-[0_2px_10px_rgba(112,181,219,0.22)] tracking-[0.01em] hover:from-primary-hover hover:to-primary hover:shadow-[0_6px_20px_rgba(30,97,138,0.22)] hover:-translate-y-px active:scale-[0.98] active:translate-y-0 sm:h-14 sm:w-auto sm:text-base"
        >
          Repetir test
        </Link>
        <Link
          href="/"
          className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-primary/10 bg-gradient-to-br from-surface-card to-surface-alt/15 px-8 text-sm font-semibold text-text-dark no-underline transition-all duration-300 tracking-[0.01em] hover:border-primary/18 hover:from-white hover:to-surface-alt/30 hover:shadow-[0_1px_3px_rgba(10,41,64,0.06),0_1px_2px_rgba(10,41,64,0.04)] hover:-translate-y-px active:scale-[0.98] active:translate-y-0 sm:h-14 sm:w-auto sm:text-base"
        >
          Volver al inicio
        </Link>
      </div>
    </motion.section>
  );
}
