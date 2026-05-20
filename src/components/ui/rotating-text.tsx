"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export default function RotatingText({
  texts,
  interval = 3000,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  if (shouldReduceMotion) {
    return (
      <span className={className} aria-live="polite">
        {texts[index]}
      </span>
    );
  }

  return (
    <span className={`inline-block relative ${className}`} aria-live="polite">
      <span className="invisible" aria-hidden="true">
        {longest(texts)}
      </span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function longest(texts: string[]): string {
  return texts.reduce((a, b) => (a.length >= b.length ? a : b), "");
}
