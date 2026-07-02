"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);

        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }

        return acc;
      },
      0,
    );

    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
    "#020617", // slate-950
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
    "linear-gradient(to bottom right, #2563eb, #7c3aed)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.section
      ref={ref}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative h-screen w-full overflow-y-auto overflow-x-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-start justify-between gap-16 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        {/* Left Text */}
        <div className="relative w-full max-w-2xl px-2">
          <div className="mb-16">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/80 backdrop-blur">
              Sticky Scroll Features
            </div>

            <h2 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Full screen scroll reveal design.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Scroll လုပ်တဲ့အချိန်မှာ ဘယ်ဘက် content တွေ step by step ပြောင်းပြီး
              ညာဘက် preview က screen ပေါ်မှာ sticky အနေနဲ့ လှလှလေးပြနေမယ်။
            </p>
          </div>

          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="min-h-[45vh] py-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    y: activeCard === index ? 0 : 12,
                  }}
                  transition={{ duration: 0.35 }}
                  className="max-w-xl"
                >
                  <div
                    className={cn(
                      "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black transition-all duration-300",
                      activeCard === index
                        ? "bg-white text-slate-950"
                        : "bg-white/10 text-white",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-3xl font-black tracking-tight text-slate-100 sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
                    {item.description}
                  </p>
                </motion.div>

                {/* Mobile preview */}
                <div className="mt-8 block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-3 shadow-xl shadow-black/20 backdrop-blur lg:hidden">
                  <div
                    style={{
                      background:
                        linearGradients[index % linearGradients.length],
                    }}
                    className="relative h-[280px] overflow-hidden rounded-[1.25rem]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_35%)]" />
                    <div className="relative z-10 h-full w-full">
                      {item.content ?? null}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="h-40" />
          </div>
        </div>

        {/* Right Sticky Preview */}
        <div className="relative hidden flex-1 lg:block">
          <div className="sticky top-28">
            <div className="relative h-[520px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div
                style={{ background: backgroundGradient }}
                className={cn(
                  "relative h-full w-full overflow-hidden rounded-[1.5rem]",
                  contentClassName,
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_35%)]" />

                <div className="relative z-10 h-full w-full">
                  {content[activeCard]?.content ?? null}
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black text-white">
                  0{activeCard + 1}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-300">
                  Active step
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black text-white">
                  {content.length}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-300">
                  Total items
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-black text-white">UI</div>
                <div className="mt-1 text-xs font-semibold text-slate-300">
                  Full screen
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};