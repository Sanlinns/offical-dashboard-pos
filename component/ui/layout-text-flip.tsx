"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type LayoutTextFlipProps = {
  text?: string;
  words?: string[];
  duration?: number;
  className?: string;
  wordClassName?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function LayoutTextFlip({
  text = "Smart POS",
  words = [
    "for supermarkets",
    "for restaurants",
    "for fashion stores",
    "for growing shops",
  ],
  duration = 2600,
  className,
  wordClassName,
}: LayoutTextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const safeWords = useMemo(() => words.filter(Boolean), [words]);

  useEffect(() => {
    if (safeWords.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeWords.length);
    }, duration);

    return () => window.clearInterval(interval);
  }, [duration, safeWords.length]);

  const activeWord = safeWords[currentIndex] ?? "";

  return (
    <span
      className={cn(
        "flex flex-col items-start gap-4 text-left",
        "text-[48px] font-semibold leading-[0.95] tracking-[-0.055em]",
        "sm:text-[64px] md:text-[86px] lg:text-[104px]",
        className
      )}
    >
      <motion.span
        layout
        className="block drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className={cn(
          "relative inline-flex w-fit overflow-hidden rounded-2xl border px-4 py-2",
          "shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl",
          wordClassName
        )}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={activeWord}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: -42, opacity: 0, filter: "blur(12px)" }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { y: 0, opacity: 1, filter: "blur(0px)" }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: 42, opacity: 0, filter: "blur(12px)" }
            }
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block whitespace-nowrap"
          >
            {activeWord}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
}