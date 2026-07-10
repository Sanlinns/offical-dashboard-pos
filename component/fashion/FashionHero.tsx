"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Menu,
  Moon,
  ShoppingBag,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "#collections" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const fashionImages = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
];

export function FashionHeroPage() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("fashion-theme");

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
      localStorage.setItem("fashion-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("fashion-theme", "light");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-rose-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_35%),linear-gradient(to_bottom,rgba(255,241,242,1),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.20),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_35%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(15,23,42,1))]" />
        <div className="absolute left-10 top-24 h-80 w-80 rounded-full bg-pink-400/20 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/10" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/80 bg-white/80 px-4 shadow-xl shadow-rose-950/10 backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-slate-950/70 dark:shadow-black/30 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-white shadow-lg shadow-pink-600/25 transition group-hover:scale-105">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-950" />
            </div>

            <div className="leading-tight">
              <span className="block text-base font-black tracking-tight text-slate-950 dark:text-white">
                Fashion POS
              </span>
              <span className="hidden text-xs font-medium text-slate-500 dark:text-white/55 sm:block">
                Boutique • Inventory • Sales
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center rounded-full border border-slate-200/80 bg-white/80 p-1 backdrop-blur dark:border-white/10 dark:bg-white/10 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-rose-50 hover:text-slate-950 hover:shadow-sm dark:text-white/75 dark:hover:bg-white/15 dark:hover:text-white"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-pink-600 dark:bg-white dark:text-slate-950 dark:hover:bg-rose-50"
            >
              Start Demo
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-rose-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-rose-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/80 bg-white/95 p-3 shadow-2xl shadow-rose-950/15 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95 dark:shadow-black/30 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-rose-50 hover:text-slate-950 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-pink-600 dark:bg-white dark:text-slate-950 dark:hover:bg-rose-50"
              >
                Start Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main
        id="demo"
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-24"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-bold text-pink-700 shadow-sm backdrop-blur dark:border-pink-300/15 dark:bg-pink-400/10 dark:text-pink-200">
            <Sparkles className="h-4 w-4" />
            Smart Fashion Store Management
          </div>

          <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-slate-950 dark:text-white sm:text-6xl md:text-7xl">
            Sell fashion
            <br />
            with a{" "}
            <span className="bg-gradient-to-r from-pink-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-pink-300 dark:via-fuchsia-300 dark:to-violet-300">
              modern POS
            </span>
          </h1>

          <p className="mt-6 max-w-2xl rounded-3xl border border-white/80 bg-white/80 px-5 py-4 text-base font-semibold leading-8 text-slate-800 shadow-xl shadow-rose-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-white/75 md:text-lg">
            Clothing, shoes, bags, accessories, stock size, color variants,
            barcode checkout, and daily sales report တွေကို fashion shop
            တစ်ခုလုံးအတွက် လွယ်လွယ်ကူကူ စီမံနိုင်ပါတယ်။
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#collections"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 text-sm font-black text-white shadow-xl shadow-pink-600/25 transition hover:-translate-y-0.5"
            >
              Explore Collections
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/85 px-6 text-sm font-black text-slate-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              View Features
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { value: "Stock", label: "Size & Color" },
              { value: "Barcode", label: "Fast Checkout" },
              { value: "Sales", label: "Daily Report" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/80 bg-white/75 px-5 py-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
              >
                <div className="text-lg font-black text-slate-950 dark:text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-white/55">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto h-[620px] max-w-xl">
            {/* Main card */}
            <div className="absolute left-1/2 top-1/2 h-[540px] w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/70 p-3 shadow-2xl shadow-rose-950/15 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-black/40">
              <img
                src={fashionImages[0]}
                alt="Fashion store"
                className="h-full w-full rounded-[2rem] object-cover"
                draggable={false}
              />

              <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-xl">
                <div className="text-sm font-bold text-white/75">
                  New Collection
                </div>
                <div className="mt-1 text-2xl font-black">Summer Outfit</div>
                <div className="mt-3 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950">
                  In Stock
                </div>
              </div>
            </div>

            {/* Floating card left */}
            <div className="absolute left-0 top-20 hidden w-44 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-2 shadow-2xl shadow-rose-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 sm:block">
              <img
                src={fashionImages[1]}
                alt="Fashion product"
                className="h-48 w-full rounded-[1.35rem] object-cover"
                draggable={false}
              />
              <div className="p-3">
                <div className="text-sm font-black text-slate-950 dark:text-white">
                  Handbag
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-white/55">
                  24 items
                </div>
              </div>
            </div>

            {/* Floating card right */}
            <div className="absolute bottom-14 right-0 hidden w-48 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-2 shadow-2xl shadow-violet-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 sm:block">
              <img
                src={fashionImages[2]}
                alt="Fashion model"
                className="h-44 w-full rounded-[1.35rem] object-cover"
                draggable={false}
              />
              <div className="p-3">
                <div className="text-sm font-black text-slate-950 dark:text-white">
                  Dresses
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-white/55">
                  Best seller
                </div>
              </div>
            </div>

            {/* Sales widget */}
            <div className="absolute right-6 top-10 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-2xl shadow-rose-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/30">
              <div className="text-xs font-bold text-slate-500 dark:text-white/55">
                Today Sales
              </div>
              <div className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                Ks 428K
              </div>
              <div className="mt-3 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                +18.4%
              </div>
            </div>

            {/* Stock widget */}
            <div className="absolute bottom-8 left-8 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-2xl shadow-violet-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/30">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-white">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-950 dark:text-white">
                    1,284
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-white/55">
                    Products in stock
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </section>
  );
}