"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type LayoutTextFlipProps = {
  text?: string;
  words?: string[];
  duration?: number;
  className?: string;
  wordClassName?: string;
};

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = [
    "Landing Pages",
    "Component Blocks",
    "Page Sections",
    "3D Shaders",
  ],
  duration = 3000,
  className,
  wordClassName,
}: LayoutTextFlipProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) => {
        return (previousIndex + 1) % words.length;
      });
    }, duration);

    return () => window.clearInterval(interval);
  }, [duration, words.length]);

  useEffect(() => {
    if (currentIndex >= words.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, words.length]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <motion.span
        layoutId="subtext"
        className={cn(
          "text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl",
          className
        )}
      >
        {text}
      </motion.span>

      {words.length > 0 && (
        <motion.span
          layout
          className={cn(
            "relative w-fit overflow-hidden rounded-md border border-transparent",
            "bg-white px-4 py-2 font-sans text-2xl font-bold tracking-tight",
            "text-black shadow-sm shadow-black/10 ring-1 ring-black/10",
            "drop-shadow-lg md:text-4xl",
            "dark:bg-neutral-900 dark:text-white",
            "dark:shadow-white/10 dark:ring-white/10",
            wordClassName
          )}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={`${currentIndex}-${words[currentIndex]}`}
              initial={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: 50,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block whitespace-nowrap"
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      )}
    </div>
  );
};