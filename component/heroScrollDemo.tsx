// "use client";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// import React from "react";


// export function HeroScrollDemo() {
//   return (
//     <div className="flex flex-col overflow-hidden">
//       <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-4xl font-semibold text-black dark:text-white">
//               Unleash the power of <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                 Scroll Animations
//               </span>
//             </h1>
//           </>
//         }
//       >
//         <img
//           src={`/hero-bg.png`}
//           alt="hero"
//           height={720}
//           width={1400}
//           className="mx-auto rounded-2xl object-cover h-full object-left-top"
//           draggable={false}
//         />
//       </ContainerScroll>
//     </div>
//   );
// }



















"use client";

import React from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Moon,
  Sun,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function HeroScrollDemo() {
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setDarkMode(prefersDark);

      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
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
    <div className="min-h-screen overflow-hidden bg-white text-neutral-950 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_35%)]" />

      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/75 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-neutral-950/70">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white shadow-sm transition-colors duration-300 dark:bg-white dark:text-black">
              <Sparkles className="h-5 w-5" />
            </div>

            <span className="text-lg font-bold tracking-tight text-black dark:text-white">
              ScrollUI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
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
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black transition hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-black transition hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-black/10 bg-white/95 px-4 py-4 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-neutral-950/95 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-black/5 hover:text-black dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <section id="demo" className="relative">
          <ContainerScroll
            titleComponent={
              <>
                <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors duration-300 dark:border-white/10 dark:bg-white/10 dark:text-neutral-200">
                  <Sparkles className="h-4 w-4" />
                  Smooth scroll animation
                </div>

                <h1 className="text-center text-4xl font-semibold text-black transition-colors duration-300 dark:text-white">
                  Unleash the power of <br />
                  <span className="mt-1 block text-5xl font-bold leading-none md:text-[6rem]">
                    Scroll Animations
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-center text-base text-neutral-600 transition-colors duration-300 dark:text-neutral-300 md:text-lg">
                  Build modern landing pages with clean navigation, smooth
                  animation, and beautiful responsive design.
                </p>
              </>
            }
          >
            <img
              src="/hero-bg.png"
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto h-full rounded-2xl object-cover object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </section>

        {/* Example Sections for nav links */}
        <section
          id="features"
          className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Features
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
              Add your feature cards here.
            </p>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Pricing
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
              Add your pricing cards here.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Contact
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
              Add your contact form or footer here.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}