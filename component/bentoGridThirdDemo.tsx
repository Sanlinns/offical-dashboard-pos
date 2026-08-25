"use client";

import React from "react";
import {
  IconBarcode,
  IconBellRinging,
  IconBox,
  IconChartBar,
  IconCheck,
  IconDots,
  IconPackage,
  IconReceipt2,
  IconScan,
  IconSearch,
  IconShieldCheck,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const highlights = [
  "Barcode checkout",
  "Real-time stock",
  "80mm receipt",
  "Sales analytics",
] as const;

export function BentoGridThirdDemo() {
  return (
    <section
      aria-labelledby="pos-features-title"
      className="relative isolate overflow-hidden py-4 text-slate-950 dark:text-white sm:py-8 lg:py-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_16%_0%,rgba(59,130,246,0.16),transparent_40%),radial-gradient(circle_at_84%_8%,rgba(139,92,246,0.15),transparent_38%)] dark:bg-[radial-gradient(circle_at_16%_0%,rgba(59,130,246,0.16),transparent_38%),radial-gradient(circle_at_84%_8%,rgba(139,92,246,0.14),transparent_36%)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/80 px-3.5 py-2 text-xs font-bold tracking-wide text-blue-700 shadow-sm backdrop-blur dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
            <IconShieldCheck aria-hidden="true" className="size-4" />
            MINI STORE POS PLATFORM
          </div>
        

          <h2
            id="pos-features-title"
            className="text-balance text-3xl font-black tracking-[-0.045em] sm:text-4xl lg:text-6xl lg:leading-[1.08]"
          >
             Run Your Business {" "}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-fuchsia-400">
              Faster, Easier, and Smarter 
            </span>{" "}
            with Our POS System
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Checkout မှ inventory၊ staff management နဲ့ sales report အထိ
            ဆိုင်တစ်ခုလုံးကို dashboard တစ်ခုတည်းကနေ အချိန်နှင့်တပြေးညီ
            စီမံနိုင်ပါတယ်။
          </p>

          <ul
            aria-label="Key POS capabilities"
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-semibold text-slate-600 dark:text-slate-300"
          >
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300">
                  <IconCheck aria-hidden="true" className="size-3.5" />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </header>

        <BentoGrid className="mx-auto max-w-6xl gap-4 md:auto-rows-[25rem] lg:auto-rows-[27rem] lg:gap-5">
          {items.map((item) => (
            <BentoGridItem
              key={item.title}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={cn(
                "group overflow-hidden border-white/80 bg-white/65 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_48px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/80 hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)] motion-reduce:transform-none dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-400/30",
                item.className,
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

function PreviewShell({
  children,
  className,
  details,
}: {
  children: React.ReactNode;
  className?: string;
  details: {
    label: string;
    title: string;
    description: string;
    points: readonly string[];
  };
}) {
  return (
    <div
      tabIndex={0}
      aria-label={details.title + " — hover or focus to view details"}
      className={cn(
        "group/preview relative flex h-full min-h-52 w-full flex-1 cursor-default overflow-hidden rounded-2xl border border-black/5 bg-slate-100 outline-none ring-blue-500/30 transition focus-visible:ring-4 dark:border-white/10 dark:bg-slate-900",
        className,
      )}
    >
      {children}

      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-slate-950/35 p-2.5 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover/preview:opacity-100 group-focus/preview:opacity-100 motion-reduce:transition-none sm:p-3 lg:p-4">
        <div className="flex max-h-full w-full max-w-sm translate-y-3 scale-[0.97] flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/95 p-3.5 text-left text-slate-950 opacity-0 shadow-2xl shadow-slate-950/25 backdrop-blur-xl transition duration-300 group-hover/preview:translate-y-0 group-hover/preview:scale-100 group-hover/preview:opacity-100 group-focus/preview:translate-y-0 group-focus/preview:scale-100 group-focus/preview:opacity-100 motion-reduce:transform-none motion-reduce:transition-none dark:border-white/15 dark:bg-slate-900/95 dark:text-white sm:p-4 lg:p-4.5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
              {details.label}
            </span>
            <span className="text-[10px] font-medium text-slate-400">
              HOVER PREVIEW
            </span>
          </div>
          <p className="mt-2.5 text-sm font-bold tracking-tight sm:text-base lg:text-lg">
            {details.title}
          </p>
          <p className="mt-1 text-[11px] leading-[1.15rem] text-slate-600 dark:text-slate-300 sm:text-xs sm:leading-5 lg:text-sm lg:leading-5">
            {details.description}
          </p>
          <ul className="mt-2.5 grid gap-1.5 sm:gap-2">
            {details.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[11px] font-medium leading-4 text-slate-700 dark:text-slate-200 sm:text-xs"
              >
                <span className="grid size-4 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300">
                  <IconCheck aria-hidden="true" className="size-2.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SalesPreview() {
  const salesBars = [38, 52, 44, 68, 58, 82, 72, 94, 76, 88, 70, 100];

  return (
    <PreviewShell
      className="bg-[linear-gradient(145deg,#f8fafc_0%,#eff6ff_48%,#f5f3ff_100%)] p-4 dark:bg-[linear-gradient(145deg,#0f172a_0%,#0c2545_52%,#2e1065_100%)] sm:p-5"
      details={{
        label: "Checkout",
        title: "Fast & accurate checkout",
        description:
          "Barcode scan ကနေ payment လက်ခံပြီး receipt ထုတ်တဲ့အထိ cashier workflow ကို မြန်ဆန်စေပါတယ်။",
        points: ["Barcode scanner ready", "Cash / Card / Wallet", "80mm receipt print"],
      }}
    >
      <div className="relative flex w-full flex-col rounded-2xl border border-white bg-white/85 p-4 shadow-lg shadow-blue-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/65 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/20">
              <IconChartBar aria-hidden="true" className="size-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                Sales overview
              </p>
              <p className="text-[10px] text-slate-400">Today • Live</p>
            </div>
          </div>
          <IconDots aria-hidden="true" className="size-5 text-slate-400" />
        </div>

        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
              Net sales
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              ¥245,800
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
            <IconTrendingUp aria-hidden="true" className="size-3" />
            23.4%
          </span>
        </div>

        <div className="mt-4 flex h-16 items-end gap-1.5" aria-hidden="true">
          {salesBars.map((height, index) => (
            <span
              key={index}
              style={{ height: height + "%" }}
              className="min-w-0 flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-violet-400 opacity-80 transition-opacity group-hover/preview:opacity-100"
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <MiniStat label="Receipts" value="184" />
          <MiniStat label="Items" value="629" />
          <MiniStat label="Avg. sale" value="¥1,336" />
        </div>
      </div>
    </PreviewShell>
  );
}

function ProductPreview() {
  const products = [
    { name: "Organic Milk", sku: "SKU-1042", price: "¥248", stock: "24" },
    { name: "Green Tea", sku: "SKU-0876", price: "¥168", stock: "42" },
    { name: "Fresh Bread", sku: "SKU-0541", price: "¥298", stock: "18" },
  ];

  return (
    <PreviewShell
      className="bg-[linear-gradient(145deg,#f8fafc,#eff6ff)] p-4 dark:bg-[linear-gradient(145deg,#0f172a,#111c35)] sm:p-5"
      details={{
        label: "Products",
        title: "Productsများကို တစ်နေရာထဲ",
        description:
          "ကုန်ပစ္စည်းအသစ်ထည့်ခြင်းမှ price နဲ့ discount update လုပ်ခြင်းအထိ လွယ်ကူစွာ စီမံနိုင်ပါတယ်။",
        points: ["SKU & barcode", "Category & pricing", "Discount control"],
      }}
    >
      <div className="relative w-full rounded-2xl border border-white bg-white/90 p-4 shadow-lg shadow-blue-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
        <div className="flex items-center gap-2">
          <div className="flex h-9 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 dark:border-white/10 dark:bg-white/5">
            <IconSearch aria-hidden="true" className="size-4 text-slate-400" />
            <span className="truncate text-xs text-slate-400">
              Search name, SKU or barcode
            </span>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/20">
            <IconScan aria-hidden="true" className="size-4" />
          </span>
        </div>

        <div className="mt-3 space-y-2">
          {products.map((product, index) => (
            <div
              key={product.sku}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-slate-100 bg-white p-2.5 dark:border-white/[0.07] dark:bg-white/[0.04]"
            >
              <span
                className={cn(
                  "grid size-8 place-items-center rounded-lg",
                  index === 0 &&
                    "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
                  index === 1 &&
                    "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300",
                  index === 2 &&
                    "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
                )}
              >
                <IconPackage aria-hidden="true" className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-slate-800 dark:text-slate-100">
                  {product.name}
                </p>
                <p className="mt-0.5 text-[10px] text-slate-400">
                  {product.sku} • Stock {product.stock}
                </p>
              </div>
              <span className="text-xs font-bold tabular-nums text-slate-700 dark:text-slate-200">
                {product.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

function InventoryPreview() {
  const prefersReducedMotion = useReducedMotion();
  const inventory = [
    { label: "Food", value: 88, count: "1,240" },
    { label: "Drink", value: 72, count: "860" },
    { label: "Snack", value: 60, count: "620" },
    { label: "Daily goods", value: 92, count: "1,480" },
  ];

  return (
    <PreviewShell
      details={{
        label: "Inventory",
        title: "Real-time stock visibility",
        description:
          "လက်ကျန်ပစ္စည်းနှင့် stock အဝင်အထွက်ကို အချိန်နှင့်တပြေးညီ ကြည့်နိုင်ပါတယ်။",
        points: ["Live stock balance", "Low-stock warning", "Category analysis"],
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_40%),linear-gradient(145deg,#f8fafc,#f5f3ff)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_42%),linear-gradient(145deg,#0f172a,#1e1b4b)]" />
      <div className="relative flex w-full flex-col justify-center gap-4 p-5 sm:p-6">
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
              <IconBox aria-hidden="true" className="size-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-800 dark:text-white">
                Stock health
              </p>
              <p className="text-[10px] text-slate-400">4 categories</p>
            </div>
          </div>
          <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-emerald-700 shadow-sm dark:bg-white/5 dark:text-emerald-300">
            Healthy
          </span>
        </div>
        {inventory.map((item) => (
          <div key={item.label}>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                {item.label}
              </span>
              <span className="tabular-nums text-slate-500 dark:text-slate-400">
                {item.count} items
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <motion.div
                initial={prefersReducedMotion ? false : { width: 0 }}
                whileInView={{ width: item.value + "%" }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-500"
              />
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

function StaffPreview() {
  const staff = [
    {
      name: "Cashier",
      role: "အရောင်းဝန်ထမ်း",
      initials: "CH",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "Manager",
      role: "ဆိုင်စီမံခန့်ခွဲသူ",
      initials: "MG",
      color: "from-violet-500 to-fuchsia-600",
    },
    {
      name: "Inventory",
      role: "Stock controller",
      initials: "IV",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <PreviewShell
      className="bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.14),transparent_40%),linear-gradient(to_bottom_right,#f8fafc,#eef2ff)] p-4 dark:bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.14),transparent_42%),linear-gradient(to_bottom_right,#0f172a,#1e1b4b)] sm:p-5"
      details={{
        label: "Staff",
        title: "Role-based staff control",
        description:
          "Cashier၊ manager နဲ့ inventory staff များအတွက် လုပ်ပိုင်ခွင့်ကို သီးခြားသတ်မှတ်နိုင်ပါတယ်။",
        points: ["Role permissions", "Active staff status", "Shop-level access"],
      }}
    >
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        {staff.map((member) => (
          <div
            key={member.name}
            className="flex min-h-28 items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none dark:border-white/10 dark:bg-white/[0.055] sm:flex-col sm:items-start sm:justify-between"
          >
            <div className="flex w-full items-center justify-between gap-3">
              <span
                className={cn(
                  "grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-sm font-bold text-white shadow-md",
                  member.color,
                )}
              >
                {member.initials}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-500" /> Active
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {member.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

const noticeTones = {
  amber:
    "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
  emerald:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
  cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300",
} as const;

function AlertsPreview() {
  const notices = [
    {
      icon: IconBellRinging,
      title: "Low stock alert",
      description: "Milk 1L လက်ကျန် 8 ခုသာရှိပါသည်",
      tone: "amber",
    },
    {
      icon: IconReceipt2,
      title: "Receipt completed",
      description: "INV-2026-0184 • ¥3,480",
      tone: "emerald",
    },
    {
      icon: IconChartBar,
      title: "Daily report ready",
      description: "Today sales report ကို ကြည့်နိုင်ပါပြီ",
      tone: "cyan",
    },
  ] as const;

  return (
    <PreviewShell
      details={{
        label: "Smart alerts",
        title: "အရေးကြီးတာတွေကို ချက်ချင်းသိ",
        description:
          "Low stock၊ receipt နဲ့ daily report အခြေအနေတွေကို dashboard ပေါ်မှာ အလွယ်တကူ စောင့်ကြည့်နိုင်ပါတယ်။",
        points: ["Low-stock alerts", "Receipt activity", "Daily sales report"],
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.13),transparent_38%),linear-gradient(145deg,#f8fafc,#f5f3ff)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_40%),linear-gradient(145deg,#0f172a,#1e1b4b)]" />
      <div className="relative flex w-full flex-col justify-center gap-3 p-4 sm:p-5">
        {notices.map(({ icon: Icon, title, description, tone }) => (
          <div
            key={title}
            className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-sm backdrop-blur transition duration-300 hover:translate-x-1 motion-reduce:transform-none dark:border-white/10 dark:bg-white/[0.055]"
          >
            <span
              className={cn(
                "grid size-10 shrink-0 place-items-center rounded-xl",
                noticeTones[tone],
              )}
            >
              <Icon aria-hidden="true" className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                {title}
              </p>
              <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 dark:border-white/[0.07] dark:bg-white/[0.04]">
      <p className="truncate text-[10px] text-slate-400">{label}</p>
      <p className="mt-1 truncate text-xs font-bold tabular-nums text-slate-800 dark:text-slate-100 sm:text-sm">
        {value}
      </p>
    </div>
  );
}

const descriptionClass =
  "block text-sm leading-6 text-slate-600 dark:text-slate-400 md:min-h-[3rem] lg:text-[15px] lg:leading-7";
const iconClass = "size-4 text-blue-600 dark:text-blue-400";

const items = [
  {
    title: "Fast checkout",
    description: (
      <span className={descriptionClass}>
        Barcode scan မှ payment နဲ့ receipt print အထိ မြန်ဆန်တိကျစွာ
        ပြုလုပ်နိုင်ပါတယ်။
      </span>
    ),
    header: <SalesPreview />,
    className: "md:col-span-1",
    icon: <IconBarcode aria-hidden="true" className={iconClass} />,
  },
  {
    title: "Product management",
    description: (
      <span className={descriptionClass}>
        Product၊ SKU၊ barcode၊ category၊ price နဲ့ discount များကို လွယ်ကူစွာ
        စီမံနိုင်ပါတယ်။
      </span>
    ),
    header: <ProductPreview />,
    className: "md:col-span-1",
    icon: <IconPackage aria-hidden="true" className={iconClass} />,
  },
  {
    title: "Inventory control",
    description: (
      <span className={descriptionClass}>
        Stock အဝင်အထွက်၊ လက်ကျန်နဲ့ category analysis ကို real-time
        စောင့်ကြည့်နိုင်ပါတယ်။
      </span>
    ),
    header: <InventoryPreview />,
    className: "md:col-span-1",
    icon: <IconBox aria-hidden="true" className={iconClass} />,
  },
  {
    title: "Staff & role management",
    description: (
      <span className={descriptionClass}>
        Cashier၊ manager နဲ့ stock staff များကို role နှင့် permission အလိုက်
        လုံခြုံစွာ စီမံနိုင်ပါတယ်။
      </span>
    ),
    header: <StaffPreview />,
    className: "md:col-span-2",
    icon: <IconUsers aria-hidden="true" className={iconClass} />,
  },
  {
    title: "Receipts & smart alerts",
    description: (
      <span className={descriptionClass}>
        Low stock၊ receipt နဲ့ daily sales report အခြေအနေများကို ချက်ချင်း
        သိနိုင်ပါတယ်။
      </span>
    ),
    header: <AlertsPreview />,
    className: "md:col-span-1",
    icon: <IconBellRinging aria-hidden="true" className={iconClass} />,
  },
];