

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Menu,
  Moon,
  Play,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FlipWords } from "@/components/ui/flip-words";
import { cn } from "@/lib/utils";
import { WobbleCardDemo } from "./wobbleCardDemo";
import AnimatedBadge from "@/components/ui/animated-badge";
import { AnimatedBeamDemo } from "./animated-beam-demo";
import { InfiniteMovingCardsDemo } from "./infiniteMovingCardsDemo";
import { BentoGridThirdDemo } from "./bentoGridThirdDemo";
import { AppleCardsCarouselDemo } from "./ui/appleCardsCarouselDemo";
import Footer from "./footer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const words = ["better", "beautiful", "modern", "powerful"];

const stats = [
  { label: "Fast setup", value: "5 min" },
  { label: "Responsive", value: "100%" },
  { label: "Dark mode", value: "Ready" },
];

type StickyContentItem = {
  title: string;
  description: string;
  content?: React.ReactNode;
};

const stickyContent: StickyContentItem[] = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] text-xl font-black text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. Track every modification in real time and avoid confusion about the latest version of your project.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden bg-slate-950 text-white">
        <img
          src="/linear.webp"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Stay aligned with the most recent version of your project and reduce manual updates across your workflow.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#f97316,#eab308)] text-xl font-black text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Smart workflow",
    description:
      "Keep your team focused with smooth collaboration, cleaner communication, and faster project delivery.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#2563eb,#7c3aed)] text-xl font-black text-white">
        Smart workflow
      </div>
    ),
  },
];

function StickyScroll({
  content,
  contentClassName,
}: {
  content: StickyContentItem[];
  contentClassName?: string;
}) {
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

  const backgroundColors = ["#020617", "#0f172a", "#111827", "#000000"];

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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-start justify-between gap-16 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        {/* Left Text */}
        <div className="relative w-full max-w-2xl px-2">
          <div className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Sticky Scroll Features
            </div>

            <h2 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Full screen scroll reveal design.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Scroll လုပ်တဲ့အချိန်မှာ ဘယ်ဘက် content တွေ step by step
              ပြောင်းပြီး ညာဘက် preview က screen ပေါ်မှာ sticky အနေနဲ့
              လှလှလေးပြနေမယ်။
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

                {/* Mobile Preview */}
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
}

export function HeroScrollDemo() {
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      return;
    }

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDarkMode(prefersDark);

    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;

    setDarkMode(nextMode);

    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-950 transition-colors duration-500 dark:bg-[#020617] dark:text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(248,250,252,1))] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.22),transparent_35%),linear-gradient(to_bottom,rgba(2,6,23,0.75),rgba(2,6,23,1))]" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-400/10" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-4 shadow-lg shadow-slate-900/5 backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-slate-950/65 dark:shadow-black/20 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-950" />
            </div>

            <div className="leading-tight">
              <span className="block text-base font-black tracking-tight text-slate-950 dark:text-white">
                ScrollUI
              </span>
              <span className="hidden text-xs font-medium text-slate-500 dark:text-slate-400 sm:block">
                Modern landing kit
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center rounded-full border border-slate-200/80 bg-slate-50/80 p-1 dark:border-white/10 dark:bg-white/5 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950 hover:shadow-sm dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <Link
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/70 bg-white/90 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/90 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section id="demo" className="relative -mt-6">
          <ContainerScroll
            titleComponent={
              <div className="mx-auto flex max-w-5xl flex-col items-center px-4">

                <div className="">
                  <AnimatedBadge color="#38bdf8" />
                  Smooth scroll animation
                </div>



                <h1 className="text-center text-4xl font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-7xl">
                  Build landing pages
                  <br />
                  that look{" "}
                  <span className="inline-block bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    <FlipWords words={words} />
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                  Create clean navigation, premium hero sections, smooth scroll
                  animation, and responsive layouts with a polished modern style.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="#features"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 text-sm font-black text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5"
                  >
                    Explore Features
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="#pricing"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 text-sm font-black text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                  >
                    <Play className="h-4 w-4" />
                    View Demo
                  </Link>
                </div>

                <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/70 bg-white/70 px-5 py-4 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="text-lg font-black text-slate-950 dark:text-white">
                        {item.value}
                      </div>

                      <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-950">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10" />
              <img
                src="/supermarketv1.0.png"
                alt="hero"
                height={720}
                width={1400}
                className="h-fullw-full object-contain"
                draggable={false}
              />
            </div>
          </ContainerScroll>
        </section>



        <section>
          <AppleCardsCarouselDemo/>
        </section>

       
        <section>
          <BentoGridThirdDemo/>
       
        </section>

         <section>
          <WobbleCardDemo />
       
        </section>
        <section>
             <InfiniteMovingCardsDemo/>
        </section>
        <section>
          <Footer darkMode={darkMode} />
        </section>
      


        
      </main>
    </div>
  );
}