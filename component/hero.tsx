
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Boxes,
  ChevronDown,
  ClipboardList,
  CreditCard,
  FileText,
  Menu,
  Moon,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Sun,
  TabletSmartphone,
  UsersRound,
  Utensils,
  X,
  Zap,
} from "lucide-react";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Terminal } from "./ui/terminal";
import { PosFeatureIsometricSection } from "./pos-feature-isometric-section";
import Footer from "@/components/footer";
import AnimatedBadge from "@/components/ui/animated-badge";

const BRAND_NAME = "Binhlaig";
const BRAND_ICON_LIGHT = "/logo/bg.png";
const BRAND_ICON_DARK = "/logo/bg_darkmode.png";

type NavChild = {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
};

type NavItem = {
  title: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    title: "Features",
    href: "#features",
    children: [
      {
        title: "Fast Cashier POS",
        href: "#cashier-pos",
        description:
          "Sell faster with barcode scan, cart, payment and receipt.",
        icon: ShoppingCart,
      },
      {
        title: "Inventory Control",
        href: "#inventory",
        description: "Track stock, low quantity items and product movements.",
        icon: Boxes,
      },
      {
        title: "Sales Reports",
        href: "#reports",
        description: "Daily sales, receipts, payment methods and analytics.",
        icon: BarChart3,
      },
      {
        title: "Staff Management",
        href: "#staff",
        description: "Manage staff accounts, roles, attendance and tasks.",
        icon: UsersRound,
      },
    ],
  },
  {
    title: "Solutions",
    href: "#solutions",
    children: [
      {
        title: "Supermarket POS",
        href: "/supermarket",
        description: "Barcode-first checkout for mini marts and supermarkets.",
        icon: Store,
      },
      {
        title: "Restaurant POS",
        href: "/restaurant",
        description: "Tables, orders, kitchen view and payment workflow.",
        icon: Utensils,
      },
      {
        title: "Fashion Store",
        href: "/fashion",
        description: "Product variants, categories and fast selling screen.",
        icon: PackageCheck,
      },
    ],
  },
  {
    title: "Pricing",
    href: "#pricing",
    children: [
      {
        title: "Starter",
        href: "#starter",
        description: "For small shops starting with simple POS tools.",
        icon: Sparkles,
      },
      {
        title: "Business",
        href: "#business",
        description: "For shops that need staff, reports and inventory.",
        icon: CreditCard,
      },
      {
        title: "Enterprise",
        href: "#enterprise",
        description: "For multi-branch businesses and custom limits.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Docs",
    href: "#docs",
    children: [
      {
        title: "Setup Guide",
        href: "#setup",
        description: "Learn how to start using the POS system.",
        icon: BookOpen,
      },
      {
        title: "API Guide",
        href: "#api",
        description: "Connect frontend, backend and receipt workflow.",
        icon: FileText,
      },
    ],
  },
];

export default function HeroPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleDropdown = (title: string) => {
    setActiveDropdown((current) => (current === title ? null : title));
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-950"
      }`}
    >
      {/* Hero Area Only - image background stays only here */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="POS background"
            className="h-full w-full object-cover"
          />

          {darkMode ? (
            <>
              <div className="absolute inset-0 bg-slate-950/38" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/82 via-slate-950/38 to-slate-950/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-amber-300/10" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-white/12" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/76 via-white/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/58 via-transparent to-white/10" />
            </>
          )}
        </div>

        {/* Header */}
        <header className="relative z-30 flex items-center justify-between px-5 py-6 md:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={darkMode ? BRAND_ICON_DARK : BRAND_ICON_LIGHT}
                  alt={`${BRAND_NAME} brand icon`}
                  fill
                  priority
                  sizes="40px"
                  className="object-contain"
                />
              </span>

              <span
                className={`hidden text-xl font-bold tracking-tight xl:inline xl:text-2xl ${
                  darkMode
                    ? "text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)]"
                    : "text-slate-950"
                }`}
              >
                {BRAND_NAME}
              </span>
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`hidden h-9 w-9 place-items-center rounded-full border transition hover:scale-105 md:grid ${
                darkMode
                  ? "border-white/12 bg-white/8 text-white hover:bg-white/12"
                  : "border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Desktop / iPad Navbar */}
          <nav
            ref={desktopNavRef}
            className={`hidden items-center gap-2 text-sm font-semibold md:flex ${
              darkMode ? "text-white/72" : "text-slate-700"
            }`}
          >
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isOpen = activeDropdown === item.title;

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => {
                    if (
                      window.matchMedia("(hover: hover)").matches &&
                      hasChildren
                    ) {
                      setActiveDropdown(item.title);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.title)}
                      className={`flex touch-manipulation items-center gap-1 rounded-full px-4 py-2 transition ${
                        darkMode
                          ? "hover:bg-white/10 hover:text-white"
                          : "hover:bg-slate-950/5 hover:text-slate-950"
                      } ${isOpen ? (darkMode ? "bg-white/10 text-white" : "bg-slate-950/5 text-slate-950") : ""}`}
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                      aria-controls={`nav-dropdown-${item.title.toLowerCase()}`}
                    >
                      {item.title}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 rounded-full px-4 py-2 transition ${
                        darkMode
                          ? "hover:bg-white/10 hover:text-white"
                          : "hover:bg-slate-950/5 hover:text-slate-950"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}

                  <AnimatePresence>
                    {hasChildren && isOpen && (
                      <motion.div
                        id={`nav-dropdown-${item.title.toLowerCase()}`}
                        role="menu"
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.16 }}
                        className="absolute right-0 top-full z-50 pt-3"
                      >
                        <div
                          className={`w-[390px] rounded-3xl border p-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${
                            darkMode
                              ? "border-white/12 bg-slate-950/92"
                              : "border-white/80 bg-white/95"
                          }`}
                        >
                          <div className="grid gap-1">
                            {item.children?.map((child) => {
                              const Icon = child.icon;

                              return (
                                <Link
                                  key={child.title}
                                  href={child.href}
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex touch-manipulation gap-3 rounded-2xl p-3 transition ${
                                    darkMode
                                      ? "hover:bg-white/10 active:bg-white/15"
                                      : "hover:bg-slate-100 active:bg-slate-200"
                                  }`}
                                >
                                  <span
                                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${
                                      darkMode
                                        ? "border-white/10 bg-white/8 text-white"
                                        : "border-slate-200 bg-white text-slate-950"
                                    }`}
                                  >
                                    <Icon className="h-5 w-5" />
                                  </span>

                                  <span>
                                    <span
                                      className={`block font-bold ${
                                        darkMode
                                          ? "text-white"
                                          : "text-slate-950"
                                      }`}
                                    >
                                      {child.title}
                                    </span>
                                    <span
                                      className={`mt-1 block text-xs leading-5 ${
                                        darkMode
                                          ? "text-white/58"
                                          : "text-slate-600"
                                      }`}
                                    >
                                      {child.description}
                                    </span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link
              href="/demo"
              onClick={() => setActiveDropdown(null)}
              className={`ml-3 flex touch-manipulation items-center gap-3 rounded-xl border px-2 py-2 font-bold transition hover:scale-[1.03] ${
                darkMode
                  ? "border-white/20 bg-white text-slate-950 shadow-[0_8px_25px_rgba(0,0,0,0.45)]"
                  : "border-slate-950/10 bg-slate-950 text-white shadow-[0_8px_25px_rgba(0,0,0,0.22)]"
              }`}
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400 text-black shadow-[0_0_18px_rgba(251,191,36,0.45)]">
                <TabletSmartphone className="h-4 w-4" />
              </span>
              View Demo
            </Link>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`grid h-10 w-10 place-items-center rounded-xl border ${
                darkMode
                  ? "border-white/12 bg-black/45 text-white"
                  : "border-slate-200 bg-white/70 text-slate-950"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`grid h-10 w-10 place-items-center rounded-xl border ${
                darkMode
                  ? "border-white/12 bg-black/45 text-white"
                  : "border-slate-200 bg-white/70 text-slate-950"
              }`}
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </header>

        {/* Mobile Navbar */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative z-20 px-5 md:hidden"
            >
              <div
                className={`rounded-3xl border p-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${
                  darkMode
                    ? "border-white/12 bg-slate-950/86"
                    : "border-white/80 bg-white/90"
                }`}
              >
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.title} className="rounded-2xl">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 font-bold ${
                          darkMode
                            ? "text-white hover:bg-white/10"
                            : "text-slate-950 hover:bg-slate-100"
                        }`}
                      >
                        {item.title}
                        {item.children && <ChevronDown className="h-4 w-4" />}
                      </Link>

                      {item.children && (
                        <div className="mt-1 space-y-1 px-2 pb-2">
                          {item.children.map((child) => {
                            const Icon = child.icon;

                            return (
                              <Link
                                key={child.title}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className={`flex gap-3 rounded-xl p-3 ${
                                  darkMode
                                    ? "hover:bg-white/10"
                                    : "hover:bg-slate-100"
                                }`}
                              >
                                <span
                                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border ${
                                    darkMode
                                      ? "border-white/10 bg-white/8 text-white"
                                      : "border-slate-200 bg-white text-slate-950"
                                  }`}
                                >
                                  <Icon className="h-4 w-4" />
                                </span>

                                <span>
                                  <span
                                    className={`block text-sm font-bold ${
                                      darkMode ? "text-white" : "text-slate-950"
                                    }`}
                                  >
                                    {child.title}
                                  </span>
                                  <span
                                    className={`mt-1 block text-xs leading-5 ${
                                      darkMode
                                        ? "text-white/58"
                                        : "text-slate-600"
                                    }`}
                                  >
                                    {child.description}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}

                  <Link
                    href="/demo"
                    onClick={() => setMobileOpen(false)}
                    className={`mt-3 flex items-center justify-center gap-3 rounded-2xl border px-3 py-3 font-bold ${
                      darkMode
                        ? "border-white/20 bg-white text-slate-950"
                        : "border-slate-950/10 bg-slate-950 text-white"
                    }`}
                  >
                    <TabletSmartphone className="h-5 w-5" />
                    View Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero */}
        <section className="relative z-10 flex min-h-[calc(100vh-96px)] items-end px-5 pb-28 md:px-8 lg:px-10">
          <div className="grid w-full max-w-[88rem] items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Content */}
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatedBadge color="#38bdf8" />

                <div
                  className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl ${
                    darkMode
                      ? "border-white/12 bg-white/8 text-white/78"
                      : "border-slate-200 bg-white/72 text-slate-700"
                  }`}
                >
                  <Zap className="h-4 w-4 text-amber-400" />
                  Fast checkout, inventory and reports in one system
                </div>

                <LayoutTextFlip
                  text="Smart POS"
                  words={[
                    "for supermarkets",
                    "for restaurants",
                    "for fashion stores",
                    "for growing shops",
                  ]}
                  duration={2600}
                  className={
                    darkMode
                      ? "text-white"
                      : "text-slate-950 drop-shadow-[0_8px_25px_rgba(255,255,255,0.65)]"
                  }
                  wordClassName={
                    darkMode
                      ? "border-white/15 bg-white/10 text-white"
                      : "border-slate-950/10 bg-white/75 text-slate-950"
                  }
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className={`mt-8 max-w-xl text-base leading-7 md:text-lg ${
                  darkMode
                    ? "text-white/82 drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)]"
                    : "text-slate-800 drop-shadow-[0_4px_16px_rgba(255,255,255,0.8)]"
                }`}
              >
                Manage sales, products, staff, inventory, receipts and
                restaurant orders from one clean POS system built for real
                shops.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25 }}
                className="mt-10 flex flex-wrap items-center gap-5"
              >
                <Link
                  href="/Sign_in"
                  className={`flex items-center gap-3 rounded-xl border px-3 py-3 font-bold transition hover:scale-[1.03] ${
                    darkMode
                      ? "border-white/20 bg-white text-slate-950 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                      : "border-slate-950/10 bg-slate-950 text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                  }`}
                >
                  <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={darkMode ? BRAND_ICON_LIGHT : BRAND_ICON_DARK}
                      alt=""
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </span>
                  Start POS
                </Link>

                <Link
                  href="#features"
                  className={`group flex items-center gap-1 text-sm font-semibold transition ${
                    darkMode
                      ? "text-white/75 hover:text-white"
                      : "text-slate-700 hover:text-slate-950"
                  }`}
                >
                  Explore Features
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right POS Preview */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="hidden w-full max-w-[620px] justify-self-end lg:block"
            >
              <div
                className={`overflow-hidden rounded-[2rem] border p-5 shadow-[0_28px_95px_rgba(0,0,0,0.38)] backdrop-blur-2xl ${
                  darkMode
                    ? "border-white/12 bg-slate-950/58"
                    : "border-white/80 bg-white/72"
                }`}
              >
                <div className="mb-5 grid grid-cols-3 gap-4">
                  {[
                    {
                      label: "Today Sales",
                      value: "¥128,400",
                      sub: "+12.5%",
                      icon: ReceiptText,
                    },
                    {
                      label: "Receipts",
                      value: "342",
                      sub: "Today",
                      icon: ClipboardList,
                    },
                    {
                      label: "Stock Items",
                      value: "1,209",
                      sub: "Active",
                      icon: PackageCheck,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className={`rounded-[1.35rem] border p-4 ${
                          darkMode
                            ? "border-white/10 bg-white/8"
                            : "border-slate-200 bg-white/85"
                        }`}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <Icon
                            className={`h-5 w-5 ${
                              darkMode ? "text-amber-300" : "text-slate-900"
                            }`}
                          />

                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                              darkMode
                                ? "bg-emerald-500/15 text-emerald-300"
                                : "bg-emerald-50 text-emerald-700"
                            }`}
                          >
                            {item.sub}
                          </span>
                        </div>

                        <p
                          className={`text-xs font-semibold ${
                            darkMode ? "text-white/50" : "text-slate-500"
                          }`}
                        >
                          {item.label}
                        </p>

                        <p
                          className={`mt-1.5 text-xl font-black tracking-tight ${
                            darkMode ? "text-white" : "text-slate-950"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <Terminal
                  username="binhlaig-pos"
                  typingSpeed={38}
                  delayBetweenCommands={900}
                  initialDelay={400}
                  loop={true}
                  restartDelay={1800}
                  className="max-w-full"
                  commands={[
                    "scan --barcode 4902430123456",
                    "cart add 'Apple Juice' --qty 2",
                    "payment cash --received 1000",
                    "receipt print --size 80mm",
                  ]}
                  outputs={{
                    0: [
                      "✔ Product found: Apple Juice",
                      "✔ Stock available: 42 items",
                    ],
                    1: ["✔ Added to cart", "Subtotal: ¥360"],
                    2: ["✔ Payment accepted", "Total: ¥360", "Change: ¥640"],
                    3: [
                      "✔ Receipt generated: RCP-2026-000128",
                      "✔ Printed successfully",
                    ],
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* New section - no hero image background here */}
      <PosFeatureIsometricSection darkMode={darkMode} />
      {/* <TracingBeamSection darkMode={darkMode} /> */}
      <Footer darkMode={darkMode} />
    </main>
  );
}


































