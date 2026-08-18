"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Search,
  Plus,
  Package2,
  Boxes,
  LayoutGrid,
  List,
  RotateCcw,
  ArrowDownAZ,
  ArrowUpZA,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  AlertCircle,
  Tag,
  Wallet,
  Layers,
  Store,
  X,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type Theme = "dark" | "light";
type ViewMode = "grid" | "compact";

type SortMode =
  | "name_asc"
  | "name_desc"
  | "price_desc"
  | "stock_desc"
  | "category_asc";

type StockLevel = "all" | "in_stock" | "low_stock" | "out_stock";

type Product = {
  id: string;
  sku: string;
  productName: string;
  productPrice: number;
  barcode?: string | null;
  category?: string | null;
  productQuantityAmount: number;
  productDiscount?: number | null;
  note?: string | null;
  productType?: string | null;
  imagePath?: string | null;
  createdByUsername?: string | null;
  createdByRole?: string | null;
  shopId?: string | null;
  shopCode?: string | null;
};

const STORAGE_KEY = "binhlaig-demo-product-page-v1";
const PAGE_SIZE_OPTIONS = [6, 9, 12, 18] as const;

const DEMO_PRODUCTS: Product[] = [
  {
    id: "demo-001",
    sku: "BEV-001",
    productName: "Mineral Water 500ml",
    productPrice: 120,
    barcode: "490100100001",
    category: "Beverages",
    productQuantityAmount: 26,
    productDiscount: 0,
    productType: "Drink",
    note: "Popular bottled water for daily sales.",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-002",
    sku: "BEV-002",
    productName: "Orange Juice 1L",
    productPrice: 420,
    barcode: "490100100002",
    category: "Beverages",
    productQuantityAmount: 14,
    productDiscount: 5,
    productType: "Drink",
    note: "Chilled orange juice.",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-003",
    sku: "SNK-001",
    productName: "Potato Chips Classic",
    productPrice: 180,
    barcode: "490100100003",
    category: "Snacks",
    productQuantityAmount: 4,
    productDiscount: 0,
    productType: "Snack",
    note: "Low stock demo item.",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-004",
    sku: "SNK-002",
    productName: "Chocolate Cookies",
    productPrice: 280,
    barcode: "490100100004",
    category: "Snacks",
    productQuantityAmount: 18,
    productDiscount: 10,
    productType: "Snack",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-005",
    sku: "GRC-001",
    productName: "Instant Noodles Spicy",
    productPrice: 150,
    barcode: "490100100005",
    category: "Groceries",
    productQuantityAmount: 3,
    productDiscount: 0,
    productType: "Food",
    note: "Low stock item for alert testing.",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-006",
    sku: "GRC-002",
    productName: "Japanese Rice 5kg",
    productPrice: 2480,
    barcode: "490100100006",
    category: "Groceries",
    productQuantityAmount: 12,
    productDiscount: 0,
    productType: "Food",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-007",
    sku: "HOU-001",
    productName: "Laundry Detergent 1kg",
    productPrice: 680,
    barcode: "490100100007",
    category: "Household",
    productQuantityAmount: 7,
    productDiscount: 0,
    productType: "Household",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-008",
    sku: "HOU-002",
    productName: "Kitchen Tissue 4 Rolls",
    productPrice: 398,
    barcode: "490100100008",
    category: "Household",
    productQuantityAmount: 20,
    productDiscount: 0,
    productType: "Household",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-009",
    sku: "FRZ-001",
    productName: "Vanilla Ice Cream",
    productPrice: 320,
    barcode: "490100100009",
    category: "Frozen",
    productQuantityAmount: 0,
    productDiscount: 0,
    productType: "Frozen Food",
    note: "Out of stock demo item.",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-010",
    sku: "DAI-001",
    productName: "Fresh Milk 1L",
    productPrice: 260,
    barcode: "490100100010",
    category: "Dairy",
    productQuantityAmount: 22,
    productDiscount: 0,
    productType: "Dairy",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-011",
    sku: "DAI-002",
    productName: "Greek Yogurt",
    productPrice: 220,
    barcode: "490100100011",
    category: "Dairy",
    productQuantityAmount: 9,
    productDiscount: 0,
    productType: "Dairy",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
  {
    id: "demo-012",
    sku: "BAK-001",
    productName: "Butter Croissant",
    productPrice: 210,
    barcode: "490100100012",
    category: "Bakery",
    productQuantityAmount: 16,
    productDiscount: 0,
    productType: "Bakery",
    createdByUsername: "Demo Admin",
    createdByRole: "ADMIN",
    shopId: "DEMO-001",
    shopCode: "SHP-DEMO",
  },
];

function numberFormat(n: number) {
  return new Intl.NumberFormat().format(n || 0);
}

function money(n: number) {
  return `¥${numberFormat(n || 0)}`;
}

function shortMoney(n: number) {
  if (!n) return "¥0";
  if (n >= 1_000_000) return `¥${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `¥${(n / 1_000).toFixed(0)}k`;
  return `¥${n}`;
}

function stockLevelOf(stock: number): StockLevel {
  if (stock <= 0) return "out_stock";
  if (stock < 5) return "low_stock";
  return "in_stock";
}

function stockBadge(stock: number) {
  if (stock <= 0) {
    return {
      label: "OUT",
      cls: "bg-rose-500/12 text-rose-400 border-rose-500/20",
    };
  }

  if (stock < 5) {
    return {
      label: "LOW",
      cls: "bg-amber-500/12 text-amber-400 border-amber-500/20",
    };
  }

  return {
    label: "IN",
    cls: "bg-emerald-500/12 text-emerald-400 border-emerald-500/20",
  };
}

function sortProducts(items: Product[], mode: SortMode) {
  const arr = [...items];

  switch (mode) {
    case "name_asc":
      return arr.sort((a, b) => a.productName.localeCompare(b.productName));
    case "name_desc":
      return arr.sort((a, b) => b.productName.localeCompare(a.productName));
    case "price_desc":
      return arr.sort((a, b) => b.productPrice - a.productPrice);
    case "stock_desc":
      return arr.sort(
        (a, b) => b.productQuantityAmount - a.productQuantityAmount,
      );
    case "category_asc":
      return arr.sort((a, b) =>
        String(a.category || "").localeCompare(String(b.category || "")),
      );
    default:
      return arr;
  }
}

function hashCode(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = str.charCodeAt(i) + ((h << 5) - h);
  }
  return h;
}

function getInitials(name: string) {
  return String(name || "P")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((x) => x[0]?.toUpperCase())
    .join("");
}

function gradientFromSeed(seed: string) {
  const palettes = [
    ["#3b82f6", "#06b6d4"],
    ["#8b5cf6", "#d946ef"],
    ["#10b981", "#06b6d4"],
    ["#f59e0b", "#ef4444"],
    ["#f43f5e", "#ec4899"],
    ["#6366f1", "#3b82f6"],
    ["#14b8a6", "#10b981"],
    ["#f97316", "#f59e0b"],
  ];

  return palettes[Math.abs(hashCode(seed)) % palettes.length];
}

const tk = (theme: Theme) =>
  theme === "dark"
    ? {
        root: "bg-transparent",
        text: "text-white",
        textMuted: "text-slate-400",
        textSubtle: "text-slate-500",
        card: "border-white/10 bg-black shadow-sm",
        input:
          "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus-visible:border-blue-500 focus-visible:ring-blue-500/20",
        btn: "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white",
        btnPrimary:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
        btnDanger:
          "border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20",
        pill: "border-white/10 bg-white/[0.04] text-slate-400",
        active:
          "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-600/20",
        statChip: "border-white/10 bg-white/[0.04]",
        modalBg:
          "border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl",
        line: "border-white/[0.07]",
        rowHover: "hover:bg-white/[0.035]",
      }
    : {
        root: "bg-transparent",
        text: "text-slate-900",
        textMuted: "text-slate-500",
        textSubtle: "text-slate-400",
        card: "border-slate-200 bg-white shadow-sm",
        input:
          "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 shadow-sm focus-visible:border-blue-500 focus-visible:ring-blue-500/20",
        btn: "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm",
        btnPrimary:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
        btnDanger:
          "border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100",
        pill: "border-slate-200 bg-white text-slate-500 shadow-sm",
        active:
          "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-600/20",
        statChip: "bg-white/70 border-slate-200",
        modalBg:
          "bg-white/95 backdrop-blur-xl border-slate-200/80 shadow-2xl",
        line: "border-slate-200",
        rowHover: "hover:bg-white/70",
      };

function ProductVisual({
  product,
  index,
  className,
}: {
  product: Product;
  index: number;
  className?: string;
}) {
  const [g1, g2] = gradientFromSeed(
    `${product.productName}-${product.sku}-${index}`,
  );

  return (
    <div
      className={cn(
        "flex items-center justify-center text-white font-black",
        className,
      )}
      style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
    >
      <div className="flex flex-col items-center gap-1">
        <div className="rounded-2xl bg-black/15 px-3 py-2 text-lg backdrop-blur">
          {getInitials(product.productName)}
        </div>
        <div className="text-[11px] opacity-90">{product.sku}</div>
      </div>
    </div>
  );
}

function CompactSummaryBar({
  theme,
  stats,
}: {
  theme: Theme;
  stats: {
    total: number;
    inStock: number;
    lowStock: number;
    outStock: number;
    totalValue: number;
  };
}) {
  const t = tk(theme);

  const items = [
    {
      label: "Products",
      value: numberFormat(stats.total),
      icon: Package2,
      color: "text-blue-400",
    },
    {
      label: "In Stock",
      value: numberFormat(stats.inStock),
      icon: CheckCircle2,
      color: "text-emerald-400",
    },
    {
      label: "Low",
      value: numberFormat(stats.lowStock),
      icon: AlertCircle,
      color: "text-amber-400",
    },
    {
      label: "Out",
      value: numberFormat(stats.outStock),
      icon: AlertCircle,
      color: "text-rose-400",
    },
    {
      label: "Value",
      value: shortMoney(stats.totalValue),
      icon: Wallet,
      color: "text-violet-400",
    },
  ];

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className={cn(
              "flex min-w-[112px] items-center gap-2 rounded-xl px-2 py-1.5",
              theme === "dark" ? "bg-white/[0.035]" : "bg-white/70",
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                theme === "dark" ? "bg-white/[0.06]" : "bg-slate-100",
              )}
            >
              <Icon className={cn("h-4 w-4", item.color)} />
            </span>

            <div className="min-w-0">
              <div
                className={cn(
                  "text-[9px] font-black uppercase tracking-widest",
                  t.textSubtle,
                )}
              >
                {item.label}
              </div>

              <div className={cn("truncate text-[14px] font-black", t.text)}>
                {item.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ProductCard({
  product,
  index,
  theme,
  selected,
  onSelect,
}: {
  product: Product;
  index: number;
  theme: Theme;
  selected?: boolean;
  onSelect: (p: Product) => void;
}) {
  const t = tk(theme);
  const badge = stockBadge(product.productQuantityAmount);

  return (
    <motion.button
      type="button"
      whileHover={{ y: -3 }}
      onClick={() => onSelect(product)}
      className={cn(
        "w-full overflow-hidden rounded-2xl border text-left transition-all duration-200",
        theme === "dark"
          ? "border-white/[0.07] bg-white/[0.035] hover:bg-white/[0.06]"
          : "border-slate-200 bg-white/70 hover:bg-white",
        selected && "ring-2 ring-blue-500/50",
      )}
    >
      <div className="relative h-[118px] overflow-hidden">
        <ProductVisual
          product={product}
          index={index}
          className="absolute inset-0"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

        <div className="absolute left-2 top-2 z-10 flex gap-1.5">
          <Badge className={cn("border text-[10px] font-bold", badge.cls)}>
            {badge.label}
          </Badge>

          {Number(product.productDiscount || 0) > 0 && (
            <Badge className="border border-amber-500/20 bg-amber-500/12 text-[10px] font-bold text-amber-400">
              -{numberFormat(Number(product.productDiscount || 0))}%
            </Badge>
          )}
        </div>

        <div className="absolute right-2 top-2 z-10">
          <div className="rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur">
            {product.category || "UNCATEGORIZED"}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-2.5">
          <div className="line-clamp-2 text-[13px] font-black leading-tight text-white drop-shadow-lg">
            {product.productName}
          </div>
          <div className="mt-0.5 font-mono text-[9px] text-white/55">
            {product.sku}
          </div>
        </div>
      </div>

      <div className="px-3 pb-3 pt-2.5">
        <div
          className={cn("flex items-center gap-1.5 text-[10px]", t.textMuted)}
        >
          <Tag className="h-3 w-3 shrink-0" />
          {product.productType || "General Item"}
        </div>

        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {[
            { label: "Price", value: shortMoney(product.productPrice) },
            {
              label: "Stock",
              value: String(Math.max(0, product.productQuantityAmount)),
            },
            { label: "Barcode", value: product.barcode ? "YES" : "—" },
          ].map((item) => (
            <div
              key={item.label}
              className={cn(
                "rounded-lg border px-1.5 py-1.5 text-center",
                t.statChip,
              )}
            >
              <div
                className={cn(
                  "text-[8px] font-bold uppercase tracking-wider",
                  t.textSubtle,
                )}
              >
                {item.label}
              </div>
              <div className={cn("mt-0.5 text-[11px] font-black", t.text)}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div
            className={cn(
              "flex items-center gap-1 text-[10px] font-bold",
              product.productQuantityAmount > 0
                ? "text-emerald-400"
                : "text-rose-400",
            )}
          >
            {product.productQuantityAmount > 0 ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {product.productQuantityAmount > 0 ? "Available" : "Unavailable"}
          </div>

          <ChevronRight className={cn("h-4 w-4", t.textSubtle)} />
        </div>
      </div>
    </motion.button>
  );
}

function CompactProductCard({
  product,
  index,
  theme,
  selected,
  onSelect,
}: {
  product: Product;
  index: number;
  theme: Theme;
  selected?: boolean;
  onSelect: (p: Product) => void;
}) {
  const t = tk(theme);
  const badge = stockBadge(product.productQuantityAmount);

  return (
    <motion.button
      type="button"
      whileHover={{ x: 2 }}
      onClick={() => onSelect(product)}
      className={cn(
        "w-full border-b px-2 py-3 text-left transition-all duration-200",
        t.line,
        t.rowHover,
        selected && (theme === "dark" ? "bg-white/[0.05]" : "bg-white"),
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
          <ProductVisual
            product={product}
            index={index}
            className="h-10 w-10"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className={cn("truncate text-[13px] font-black", t.text)}>
              {product.productName}
            </div>

            <span
              className={cn(
                "rounded-full border px-2 py-0.5 text-[10px] font-bold",
                badge.cls,
              )}
            >
              {badge.label}
            </span>
          </div>

          <div className={cn("mt-0.5 text-[11px]", t.textMuted)}>
            {product.sku} · {product.category || "UNCATEGORIZED"}
          </div>
        </div>

        <div className="hidden min-w-[100px] text-right sm:block">
          <div className={cn("text-[12px] font-black", t.text)}>
            {money(product.productPrice)}
          </div>
          <div className={cn("text-[10px]", t.textSubtle)}>
            Stock {product.productQuantityAmount}
          </div>
        </div>

        <ChevronRight className={cn("h-4 w-4", t.textSubtle)} />
      </div>
    </motion.button>
  );
}

function ProductDetailDialog({
  product,
  theme,
  onClose,
  onDemoEdit,
  onDelete,
}: {
  product: Product | null;
  theme: Theme;
  onClose: () => void;
  onDemoEdit: () => void;
  onDelete: () => void;
}) {
  const t = tk(theme);

  if (!product) return null;

  const badge = stockBadge(product.productQuantityAmount);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(0,0,0,0.62)",
        backdropFilter: "blur(12px)",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.94, y: 18 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 18 }}
        transition={{ duration: 0.18 }}
        className={cn(
          "w-full max-w-[720px] overflow-hidden rounded-3xl border",
          t.modalBg,
        )}
      >
        <div
          className="flex items-start justify-between gap-4 border-b px-5 py-4"
          style={{
            borderColor:
              theme === "dark"
                ? "rgba(255,255,255,0.07)"
                : "rgba(0,0,0,0.07)",
          }}
        >
          <div>
            <div
              className={cn(
                "text-[11px] font-black uppercase tracking-widest",
                t.textSubtle,
              )}
            >
              Demo Product Detail
            </div>

            <h2 className={cn("mt-1 text-xl font-black", t.text)}>
              {product.productName}
            </h2>

            <div className={cn("mt-1 font-mono text-[11px]", t.textMuted)}>
              {product.sku}
            </div>
          </div>

          <button onClick={onClose} className={cn("rounded-xl border p-2", t.btn)}>
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[72vh] overflow-y-auto p-5">
          <div className="grid gap-4 md:grid-cols-[240px_1fr]">
            <div className="relative h-[210px] overflow-hidden rounded-2xl">
              <ProductVisual
                product={product}
                index={0}
                className="absolute inset-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute left-3 top-3">
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold",
                    badge.cls,
                  )}
                >
                  {product.productQuantityAmount > 0 ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    <AlertCircle className="h-3 w-3" />
                  )}
                  {badge.label}
                </span>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Price", value: money(product.productPrice), icon: Wallet },
                {
                  label: "Stock",
                  value:
                    product.productQuantityAmount <= 0
                      ? "Out of stock"
                      : String(product.productQuantityAmount),
                  icon: Boxes,
                },
                {
                  label: "Category",
                  value: product.category || "—",
                  icon: Tag,
                },
                {
                  label: "Type",
                  value: product.productType || "—",
                  icon: Layers,
                },
                {
                  label: "Barcode",
                  value: product.barcode || "—",
                  icon: Tag,
                },
                {
                  label: "Shop",
                  value: product.shopCode || product.shopId || "DEMO",
                  icon: Store,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={cn("rounded-xl border p-3", t.statChip)}
                >
                  <div
                    className={cn(
                      "mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider",
                      t.textSubtle,
                    )}
                  >
                    <item.icon className="h-3 w-3" />
                    {item.label}
                  </div>

                  <div className={cn("break-words text-[13px] font-black", t.text)}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={cn("mt-4 rounded-xl border p-3", t.statChip)}>
            <div
              className={cn(
                "mb-2 text-[11px] font-bold uppercase tracking-wider",
                t.textSubtle,
              )}
            >
              Demo Data
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              <div className={cn("text-[12px]", t.textMuted)}>
                Username:{" "}
                <span className={cn("font-bold", t.text)}>
                  {product.createdByUsername || "Demo Admin"}
                </span>
              </div>

              <div className={cn("text-[12px]", t.textMuted)}>
                Role:{" "}
                <span className={cn("font-bold", t.text)}>
                  {product.createdByRole || "ADMIN"}
                </span>
              </div>

              <div className={cn("text-[12px]", t.textMuted)}>
                Shop:{" "}
                <span className={cn("font-bold", t.text)}>
                  {product.shopCode || "SHP-DEMO"}
                </span>
              </div>
            </div>
          </div>

          {product.note ? (
            <div className={cn("mt-4 rounded-xl border p-3", t.statChip)}>
              <div
                className={cn(
                  "mb-2 text-[11px] font-bold uppercase tracking-wider",
                  t.textSubtle,
                )}
              >
                Note
              </div>

              <div className={cn("text-[12px] leading-6", t.textMuted)}>
                {product.note}
              </div>
            </div>
          ) : null}
        </div>

        <div
          className="flex flex-wrap justify-end gap-2 border-t px-5 py-4"
          style={{
            borderColor:
              theme === "dark"
                ? "rgba(255,255,255,0.07)"
                : "rgba(0,0,0,0.07)",
          }}
        >
          <button
            onClick={onClose}
            className={cn(
              "rounded-xl border px-4 py-2 text-[13px] font-bold",
              t.btn,
            )}
          >
            Close
          </button>

          <button
            onClick={onDemoEdit}
            className={cn(
              "rounded-xl px-4 py-2 text-[13px] font-bold",
              t.btnPrimary,
            )}
          >
            Demo Edit
          </button>

          <button
            onClick={onDelete}
            className={cn(
              "rounded-xl border px-4 py-2 text-[13px] font-bold",
              t.btnDanger,
            )}
          >
            Remove Demo Item
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductPagination({
  theme,
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
  onPageSizeChange,
}: {
  theme: Theme;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}) {
  const t = tk(theme);

  function buildPages() {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPages];

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  }

  const pages = buildPages();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div
            className={cn(
              "rounded-full border px-3 py-1.5 text-[11px] font-bold",
              t.pill,
            )}
          >
            Showing {totalItems === 0 ? 0 : startIndex}-{endIndex} of {totalItems}
          </div>

          <div
            className={cn(
              "flex items-center gap-2 rounded-full border px-2.5 py-1.5",
              t.pill,
            )}
          >
            <span className={cn("text-[11px] font-bold", t.textMuted)}>Rows</span>

            {PAGE_SIZE_OPTIONS.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => onPageSizeChange(size)}
                className={cn(
                  "rounded-full px-3 py-1 text-[11px] font-bold transition-all",
                  pageSize === size ? t.active : "text-current",
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange(1)}
            className={cn(
              "rounded-xl border px-3 py-2 disabled:opacity-40",
              t.btn,
            )}
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className={cn(
              "rounded-xl border px-3 py-2 disabled:opacity-40",
              t.btn,
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {pages.map((page, idx) =>
              page === "..." ? (
                <span
                  key={`ellipsis-${idx}`}
                  className={cn("px-2 text-sm font-bold", t.textSubtle)}
                >
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  type="button"
                  onClick={() => onPageChange(page as number)}
                  className={cn(
                    "min-w-[32px] rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition-all",
                    currentPage === page ? t.active : t.btn,
                  )}
                >
                  {page}
                </button>
              ),
            )}
          </div>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className={cn(
              "rounded-xl border px-3 py-2 disabled:opacity-40",
              t.btn,
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(totalPages)}
            className={cn(
              "rounded-xl border px-3 py-2 disabled:opacity-40",
              t.btn,
            )}
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProductsDemoPageContent() {
  const { resolvedTheme } = useTheme();

  const [products, setProducts] = React.useState<Product[]>(DEMO_PRODUCTS);
  const [q, setQ] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All");
  const [stockFilter, setStockFilter] = React.useState<StockLevel>("all");
  const [theme, setTheme] = React.useState<Theme>("dark");
  const [viewMode, setViewMode] = React.useState<ViewMode>("compact");
  const [sortMode, setSortMode] = React.useState<SortMode>("name_asc");
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [panelOpen, setPanelOpen] = React.useState(false);
  const [notification, setNotification] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState<number>(9);

  const t = tk(theme);

  React.useEffect(() => {
    const next: Theme = resolvedTheme === "light" ? "light" : "dark";
    setTheme(next);
  }, [resolvedTheme]);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const p = JSON.parse(raw);
      if (p.viewMode) setViewMode(p.viewMode);
      if (p.sortMode) setSortMode(p.sortMode);
      if (p.pageSize) setPageSize(Number(p.pageSize));
    } catch {}
  }, []);

  React.useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ viewMode, sortMode, pageSize }),
    );
  }, [viewMode, sortMode, pageSize]);

  function showNotif(message: string) {
    setNotification(message);
    window.setTimeout(() => setNotification(null), 2400);
  }

  const categories = React.useMemo(() => {
    const uniq = Array.from(
      new Set(products.map((p) => p.category).filter(Boolean)),
    ) as string[];

    return ["All", ...uniq];
  }, [products]);

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();

    const base = products.filter((p) => {
      const matchQ =
        !query ||
        p.productName.toLowerCase().includes(query) ||
        p.sku.toLowerCase().includes(query) ||
        String(p.category || "").toLowerCase().includes(query) ||
        String(p.productType || "").toLowerCase().includes(query);

      const matchCategory =
        categoryFilter === "All" || p.category === categoryFilter;

      const level = stockLevelOf(p.productQuantityAmount);
      const matchStock = stockFilter === "all" || level === stockFilter;

      return matchQ && matchCategory && matchStock;
    });

    return sortProducts(base, sortMode);
  }, [products, q, categoryFilter, stockFilter, sortMode]);

  React.useEffect(() => {
    setCurrentPage(1);
    setSelectedId(null);
    setPanelOpen(false);
  }, [q, categoryFilter, stockFilter, sortMode, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProducts = React.useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize]);

  const startIndex =
    filtered.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;

  const endIndex = Math.min(currentPage * pageSize, filtered.length);

  const selectedProduct = selectedId
    ? products.find((p) => p.id === selectedId) ?? null
    : null;

  const stats = React.useMemo(() => {
    const total = products.length;
    const inStock = products.filter((p) => p.productQuantityAmount > 0).length;
    const lowStock = products.filter(
      (p) => p.productQuantityAmount > 0 && p.productQuantityAmount < 5,
    ).length;
    const outStock = products.filter(
      (p) => p.productQuantityAmount <= 0,
    ).length;
    const totalValue = products.reduce(
      (a, p) => a + p.productPrice * p.productQuantityAmount,
      0,
    );

    return {
      total,
      inStock,
      lowStock,
      outStock,
      totalValue,
    };
  }, [products]);

  const SORT_OPTIONS = [
    { label: "A → Z", value: "name_asc" as SortMode, icon: ArrowDownAZ },
    { label: "Z → A", value: "name_desc" as SortMode, icon: ArrowUpZA },
    { label: "Price", value: "price_desc" as SortMode, icon: Wallet },
    { label: "Stock", value: "stock_desc" as SortMode, icon: Boxes },
    { label: "Category", value: "category_asc" as SortMode, icon: Tag },
  ];

  function resetFilters() {
    setQ("");
    setCategoryFilter("All");
    setStockFilter("all");
    setSortMode("name_asc");
    setCurrentPage(1);
    showNotif("Filters reset");
  }

  function addDemoProduct() {
    const nextNumber = products.length + 1;
    const newProduct: Product = {
      id: `demo-new-${Date.now()}`,
      sku: `DEMO-${String(nextNumber).padStart(3, "0")}`,
      productName: `Demo Product ${nextNumber}`,
      productPrice: 500 + nextNumber * 10,
      barcode: `99000000${nextNumber}`,
      category: "Demo",
      productQuantityAmount: 10,
      productDiscount: 0,
      productType: "Demo Item",
      note: "This item exists only in browser state for the public demo.",
      createdByUsername: "Demo Admin",
      createdByRole: "ADMIN",
      shopId: "DEMO-001",
      shopCode: "SHP-DEMO",
    };

    setProducts((prev) => [newProduct, ...prev]);
    setCurrentPage(1);
    showNotif("Demo product added");
  }

  function removeSelectedDemoProduct() {
    if (!selectedProduct) return;

    setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
    setSelectedId(null);
    setPanelOpen(false);
    showNotif("Demo product removed");
  }

  return (
    <div
      className={cn(
        "relative min-h-full py-5 transition-colors duration-300",
        t.root,
      )}
    >
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed left-1/2 top-5 z-[100] flex -translate-x-1/2 items-center gap-2.5 rounded-2xl border px-4 py-2.5 text-[13px] font-bold shadow-2xl"
            style={{
              background: theme === "dark" ? "rgba(12,16,24,0.95)" : "white",
              borderColor:
                theme === "dark"
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)",
              color: theme === "dark" ? "white" : "#0f172a",
              backdropFilter: "blur(20px)",
            }}
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {panelOpen && selectedProduct ? (
          <ProductDetailDialog
            product={selectedProduct}
            theme={theme}
            onClose={() => {
              setPanelOpen(false);
              setSelectedId(null);
            }}
            onDemoEdit={() =>
              showNotif("Demo edit only — no API request was sent")
            }
            onDelete={removeSelectedDemoProduct}
          />
        ) : null}
      </AnimatePresence>

      <main className="mx-auto w-full max-w-[1600px] px-2 sm:px-4">
        <section
          className={cn(
            "rounded-3xl border p-4 sm:p-5",
            t.card,
          )}
        >
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <div
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]",
                    t.pill,
                  )}
                >
                  <Store className="h-3.5 w-3.5 text-blue-500" />
                  Supermarket Demo
                </div>

                <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-blue-500">
                  No API
                </div>
              </div>

              <h1
                className={cn(
                  "mt-3 text-2xl font-black tracking-tight sm:text-3xl",
                  t.text,
                )}
              >
                Products
              </h1>

              <p className={cn("mt-1 max-w-2xl text-sm", t.textMuted)}>
                Search, filter, sort and preview supermarket products using
                safe local demo data. This page does not connect to the backend.
              </p>

              <CompactSummaryBar theme={theme} stats={stats} />
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={resetFilters}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-[12px] font-bold",
                  t.btn,
                )}
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>

              <button
                type="button"
                onClick={addDemoProduct}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-xl px-4 text-[12px] font-black",
                  t.btnPrimary,
                )}
              >
                <Plus className="h-4 w-4" />
                Add Demo Product
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3 xl:grid-cols-[minmax(260px,1.2fr)_minmax(0,2fr)]">
            <div className="relative">
              <Search
                className={cn(
                  "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2",
                  t.textSubtle,
                )}
              />

              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search product, SKU, category..."
                className={cn("h-11 pl-10", t.input)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className={cn(
                  "h-11 min-w-[150px] rounded-xl border px-3 text-[12px] font-bold outline-none",
                  t.input,
                )}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value as StockLevel)}
                className={cn(
                  "h-11 min-w-[145px] rounded-xl border px-3 text-[12px] font-bold outline-none",
                  t.input,
                )}
              >
                <option value="all">All stock</option>
                <option value="in_stock">In stock</option>
                <option value="low_stock">Low stock</option>
                <option value="out_stock">Out of stock</option>
              </select>

              <div
                className={cn(
                  "flex h-11 items-center rounded-xl border p-1",
                  t.pill,
                )}
              >
                {SORT_OPTIONS.map((option) => {
                  const Icon = option.icon;
                  const active = sortMode === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      title={option.label}
                      onClick={() => setSortMode(option.value)}
                      className={cn(
                        "flex h-8 items-center gap-1 rounded-lg px-2 text-[10px] font-bold transition",
                        active
                          ? "bg-blue-600 text-white"
                          : "text-slate-500 hover:text-blue-500",
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="hidden 2xl:inline">{option.label}</span>
                    </button>
                  );
                })}
              </div>

              <div
                className={cn(
                  "ml-auto flex h-11 items-center rounded-xl border p-1",
                  t.pill,
                )}
              >
                <button
                  type="button"
                  onClick={() => setViewMode("compact")}
                  className={cn(
                    "grid h-8 w-8 place-items-center rounded-lg transition",
                    viewMode === "compact"
                      ? "bg-blue-600 text-white"
                      : "text-slate-500",
                  )}
                  title="Compact view"
                >
                  <List className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "grid h-8 w-8 place-items-center rounded-lg transition",
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "text-slate-500",
                  )}
                  title="Grid view"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className={cn(
            "mt-4 overflow-hidden rounded-3xl border",
            t.card,
          )}
        >
          <div
            className={cn(
              "flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3",
              t.line,
            )}
          >
            <div>
              <div className={cn("text-sm font-black", t.text)}>
                Demo product catalog
              </div>
              <div className={cn("mt-0.5 text-[11px]", t.textMuted)}>
                {filtered.length} matching products
              </div>
            </div>

            <div
              className={cn(
                "rounded-full border px-3 py-1.5 text-[10px] font-bold",
                t.pill,
              )}
            >
              Local data only
            </div>
          </div>

          {paginatedProducts.length === 0 ? (
            <div className="p-12 text-center">
              <Search className={cn("mx-auto mb-4 h-12 w-12", t.textMuted)} />
              <div className={cn("text-xl font-black", t.text)}>
                No matching products
              </div>
              <div className={cn("mt-2 text-sm", t.textMuted)}>
                Search/filter ကို ပြန်ပြင်ပြီး စမ်းကြည့်ပါ။
              </div>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {paginatedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  theme={theme}
                  selected={selectedId === product.id}
                  onSelect={(p) => {
                    setSelectedId(p.id);
                    setPanelOpen(true);
                  }}
                />
              ))}
            </div>
          ) : (
            <div>
              {paginatedProducts.map((product, index) => (
                <CompactProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  theme={theme}
                  selected={selectedId === product.id}
                  onSelect={(p) => {
                    setSelectedId(p.id);
                    setPanelOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </section>

        <ProductPagination
          theme={theme}
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={filtered.length}
          startIndex={startIndex}
          endIndex={endIndex}
          onPageChange={(page) => {
            setCurrentPage(page);
            setSelectedId(null);
            setPanelOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1);
            setSelectedId(null);
            setPanelOpen(false);
          }}
        />

        <div
          className={cn(
            "mt-4 rounded-2xl border px-4 py-3 text-[11px]",
            t.pill,
          )}
        >
          Demo note: Add / remove / edit actions do not call any API and do not
          update a production database. Refreshing the page restores the default
          demo catalog.
        </div>
      </main>
    </div>
  );
}

export default function ProductsDemoPage() {
  return <ProductsDemoPageContent />;
}