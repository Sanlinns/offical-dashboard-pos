"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    ChefHat,
    Menu,
    Moon,
    Sun,
    Utensils,
    X,
} from "lucide-react";
import { motion } from "motion/react";

import { ImagesSlider } from "@/components/ui/images-slider";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import RestaurantFeaturesSection from "./restaurant/restaurantFeaturesSection";
import RestaurantWorkflowSection from "./restaurant/RestaurantWorkflowSection";
import RestaurantMenuTableSection from "./restaurant/RestaurantMenuTableSection";
import RestaurantFooter from "./restaurant/RestaurantFooter";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "#menu" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
];

export function ImagesSliderDemo() {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const images = [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1800&auto=format&fit=crop",
    ];

    useEffect(() => {
        const savedTheme = localStorage.getItem("restaurant-theme");

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
            localStorage.setItem("restaurant-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("restaurant-theme", "light");
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-orange-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
            {/* Navbar */}
            <header className="fixed left-0 top-0 z-[100] w-full px-3 pt-3">
                <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 shadow-xl shadow-slate-900/10 backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-slate-950/70 dark:shadow-black/30 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-600/25 transition group-hover:scale-105">
                            <Utensils className="h-5 w-5" />
                            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-950" />
                        </div>

                        <div className="leading-tight">
                            <span className="block text-base font-black tracking-tight text-slate-950 dark:text-white">
                                Restaurant POS
                            </span>
                            <span className="hidden text-xs font-medium text-slate-500 dark:text-white/55 sm:block">
                                Table • Kitchen • Orders
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden items-center rounded-full border border-slate-200/80 bg-white/80 p-1 backdrop-blur dark:border-white/10 dark:bg-white/10 md:flex">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-orange-50 hover:text-slate-950 hover:shadow-sm dark:text-white/75 dark:hover:bg-white/15 dark:hover:text-white"
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
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
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
                            className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-orange-600 dark:bg-white dark:text-slate-950 dark:hover:bg-orange-50"
                        >
                            Start Demo
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    {/* Mobile Right */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            type="button"
                            onClick={toggleDarkMode}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-orange-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
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
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-orange-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                            aria-label="Toggle menu"
                        >
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {open && (
                    <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/70 bg-white/95 p-3 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95 dark:shadow-black/30 md:hidden">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-orange-50 hover:text-slate-950 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link
                                href="#demo"
                                onClick={() => setOpen(false)}
                                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-orange-600 dark:bg-white dark:text-slate-950 dark:hover:bg-orange-50"
                            >
                                Start Demo
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Slider */}
            <ImagesSlider className="h-screen min-h-[720px]" images={images}>
                {/* Light / Dark overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/82 via-white/45 to-transparent dark:from-black/85 dark:via-black/50 dark:to-black/20" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/70 via-transparent to-white/20 dark:from-black/75 dark:via-transparent dark:to-black/40" />

                {/* Decorative glow */}
                <div className="pointer-events-none absolute inset-0 z-20">
                    <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/15" />
                    <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-red-500/15 blur-3xl dark:bg-red-500/10" />
                </div>

                {/* Hero Content */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="relative z-50 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pt-24 sm:px-6 lg:px-8"
                >
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-white/85 px-4 py-2 text-sm font-bold text-orange-700 shadow-sm backdrop-blur dark:border-orange-300/20 dark:bg-orange-400/10 dark:text-orange-100">
                            <ChefHat className="h-4 w-4" />
                            Smart Restaurant Management System
                        </div>

                        <motion.h1 className="text-5xl font-black leading-[1.02] tracking-tight text-slate-950 drop-shadow-sm dark:text-white sm:text-6xl md:text-7xl">
                            Run your restaurant
                            <br />
                            with a{" "}
                            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent dark:from-orange-300 dark:via-amber-300 dark:to-red-300">
                                modern POS
                            </span>
                        </motion.h1>
                        <p className="mt-6 max-w-2xl rounded-3xl border border-orange-200/70 bg-white/90 px-5 py-4 text-base font-bold leading-8 text-slate-950 shadow-xl shadow-orange-950/10 backdrop-blur-2xl dark:border-orange-300/15 dark:bg-slate-950/55 dark:text-white md:text-lg">
                            Table order, takeaway, delivery, kitchen display, staff control,
                            and payment checkout တွေကို restaurant တစ်ခုလုံးအတွက်
                            လွယ်လွယ်ကူကူ စီမံနိုင်ပါတယ်။
                        </p>


                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="#features"
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 text-sm font-black text-white shadow-xl shadow-orange-600/25 transition hover:-translate-y-0.5"
                            >
                                Explore Features
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                            </Link>

                            <Link
                                href="#menu"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/85 px-6 text-sm font-black text-slate-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                            >
                                View Restaurant Demo
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                            {[
                                { value: "Table", label: "Order Control" },
                                { value: "Kitchen", label: "Live Workflow" },
                                { value: "Payment", label: "Fast Checkout" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-white/80 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
                                >
                                    <div className="text-lg font-black text-slate-950 dark:text-white">
                                        {item.value}
                                    </div>
                                    <div className="mt-1 text-xs font-semibold text-slate-600 dark:text-white/55">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </ImagesSlider>

            <RestaurantFeaturesSection/>
            <RestaurantWorkflowSection/>
            <RestaurantMenuTableSection/>
            <RestaurantFooter/>


          
        </section>
    );
}