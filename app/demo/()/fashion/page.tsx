"use client";

import {
  AlertTriangle,
  BarChart3,
  Package,
  ReceiptText,
  Search,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

import { useMemo, useState } from "react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type SalesRange = "daily" | "weekly" | "monthly";

type SalesItem = {
  label: string;
  value: number;
};

const salesData: Record<SalesRange, SalesItem[]> = {
  daily: [
    {
      label: "8 AM",
      value: 12500,
    },
    {
      label: "10 AM",
      value: 26800,
    },
    {
      label: "12 PM",
      value: 38500,
    },
    {
      label: "2 PM",
      value: 31200,
    },
    {
      label: "4 PM",
      value: 42600,
    },
    {
      label: "6 PM",
      value: 49800,
    },
    {
      label: "8 PM",
      value: 35600,
    },
  ],

  weekly: [
    {
      label: "Mon",
      value: 148000,
    },
    {
      label: "Tue",
      value: 176000,
    },
    {
      label: "Wed",
      value: 162000,
    },
    {
      label: "Thu",
      value: 198000,
    },
    {
      label: "Fri",
      value: 184000,
    },
    {
      label: "Sat",
      value: 236000,
    },
    {
      label: "Sun",
      value: 214800,
    },
  ],

  monthly: [
    {
      label: "Week 1",
      value: 780000,
    },
    {
      label: "Week 2",
      value: 925000,
    },
    {
      label: "Week 3",
      value: 868000,
    },
    {
      label: "Week 4",
      value: 1045000,
    },
  ],
};

const salesInformation: Record<
  SalesRange,
  {
    title: string;
    description: string;
    change: string;
  }
> = {
  daily: {
    title: "Daily Revenue",
    description: "Today's fashion sales performance",
    change: "+9.8%",
  },

  weekly: {
    title: "Weekly Revenue",
    description: "Fashion sales performance for this week",
    change: "+18.4%",
  },

  monthly: {
    title: "Monthly Revenue",
    description: "Fashion sales performance for this month",
    change: "+21.6%",
  },
};

const recentSales = [
  {
    id: "#FS-3028",
    customer: "Aiko Tanaka",
    items: 3,
    total: "¥18,900",
    payment: "Card",
    status: "Paid",
  },
  {
    id: "#FS-3027",
    customer: "Walk-in",
    items: 2,
    total: "¥12,400",
    payment: "Cash",
    status: "Paid",
  },
  {
    id: "#FS-3026",
    customer: "Ken Ito",
    items: 4,
    total: "¥24,600",
    payment: "Card",
    status: "Paid",
  },
  {
    id: "#FS-3025",
    customer: "Walk-in",
    items: 1,
    total: "¥6,800",
    payment: "Cash",
    status: "Refund",
  },
  {
    id: "#FS-3024",
    customer: "Mika Sato",
    items: 2,
    total: "¥15,200",
    payment: "Card",
    status: "Paid",
  },
];

const topProducts = [
  {
    name: "Classic Oversized T-Shirt",
    sold: 52,
    amount: "¥156,000",
  },
  {
    name: "Relaxed Denim Jacket",
    sold: 31,
    amount: "¥248,000",
  },
  {
    name: "Slim Fit Chino Pants",
    sold: 28,
    amount: "¥168,000",
  },
];

const lowStockVariants = [
  {
    product: "Classic Oversized T-Shirt",
    sku: "TS-BLK-M",
    size: "M",
    color: "Black",
    stock: 4,
  },
  {
    product: "Relaxed Denim Jacket",
    sku: "DJ-BLU-L",
    size: "L",
    color: "Blue",
    stock: 3,
  },
  {
    product: "Slim Fit Chino Pants",
    sku: "CP-BEI-32",
    size: "32",
    color: "Beige",
    stock: 5,
  },
  {
    product: "Urban Hoodie",
    sku: "HD-GRY-XL",
    size: "XL",
    color: "Grey",
    stock: 2,
  },
];

const collections = [
  {
    name: "T-Shirts",
    items: 48,
    stock: 286,
  },
  {
    name: "Jackets",
    items: 24,
    stock: 102,
  },
  {
    name: "Pants",
    items: 36,
    stock: 174,
  },
  {
    name: "Accessories",
    items: 29,
    stock: 216,
  },
];

function formatYen(value: number) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatChartValue(value: number) {
  if (value >= 1_000_000) {
    return `¥${(value / 1_000_000).toFixed(1)}M`;
  }

  if (value >= 1_000) {
    return `¥${Math.round(value / 1_000)}K`;
  }

  return `¥${value}`;
}

export default function FashionDemoPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [, setActiveNav] =
    useState("Dashboard");

  const [search, setSearch] =
    useState("");

  const [salesRange, setSalesRange] =
    useState<SalesRange>("weekly");

  const filteredSales = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return recentSales;
    }

    return recentSales.filter(
      (sale) =>
        sale.id.toLowerCase().includes(query) ||
        sale.customer.toLowerCase().includes(query) ||
        sale.payment.toLowerCase().includes(query) ||
        sale.status.toLowerCase().includes(query),
    );
  }, [search]);

  const selectedSales =
    salesData[salesRange];

  const totalSales =
    selectedSales.reduce(
      (total, item) =>
        total + item.value,
      0,
    );

  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        text-slate-950
        transition-colors
        duration-300

        dark:bg-[#0f172a]
        dark:text-slate-100
      "
    >
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            fixed inset-0
            top-10
            z-30
            bg-slate-950/30
            backdrop-blur-[2px]
            lg:hidden
          "
        />
      )}

      {/* Main */}
      <div className="py-5 lg:pl-[var(--sidebar-width)]">
        <main
          className="
            mx-auto
            max-w-[1600px]
            px-4
            py-6
            sm:px-6
            lg:px-8
            lg:py-8
          "
        >
          {/* Welcome */}
          <section
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-medium
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Sunday, August 16
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-bold
                  tracking-tight
                  sm:text-3xl
                "
              >
                Fashion store overview
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Monitor products, variants,
                inventory and daily fashion sales.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveNav("POS")
              }
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-md
                shadow-blue-600/20
                transition-all
                duration-200
                hover:bg-blue-700
                active:scale-95
              "
            >
              <ShoppingBag className="h-4 w-4" />

              New Sale
            </button>
          </section>

          {/* Stats */}
          <section
            className="
              mt-7
              grid
              gap-4
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            <StatCard
              label="Today's Sales"
              value="¥214,800"
              note="+18.4% from yesterday"
              icon={TrendingUp}
              accent="
                bg-blue-50
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            />

            <StatCard
              label="Orders"
              value="43"
              note="Average ¥4,995 per sale"
              icon={ReceiptText}
              accent="
                bg-blue-50
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            />

            <StatCard
              label="Products"
              value="137"
              note="778 total units in stock"
              icon={Shirt}
              accent="
                bg-blue-50
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            />

            <StatCard
              label="Low Stock Variants"
              value="9"
              note="4 need urgent restock"
              icon={AlertTriangle}
              accent="
                bg-blue-50
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            />
          </section>

          {/* Category Cards */}
          <section
            className="
              mt-4
              grid
              gap-4
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {collections.map(
              (collection) => (
                <button
                  type="button"
                  key={collection.name}
                  onClick={() =>
                    setActiveNav("Products")
                  }
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    text-left
                    shadow-sm
                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:border-blue-200
                    hover:bg-blue-50/30
                    hover:shadow-md

                    dark:border-white/10
                    dark:bg-black
                    dark:hover:border-blue-500/20
                    dark:hover:bg-blue-500/[0.05]
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        grid
                        h-10
                        w-10
                        place-items-center
                        rounded-xl
                        bg-blue-50
                        text-blue-700

                        dark:bg-blue-500/10
                        dark:text-blue-400
                      "
                    >
                      <Package className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-semibold text-slate-400">
                      {collection.items} styles
                    </span>
                  </div>

                  <p className="mt-5 font-semibold">
                    {collection.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {collection.stock} units in stock
                  </p>
                </button>
              ),
            )}
          </section>

          {/* Revenue + Top Products */}
          <section
            className="
              mt-4
              grid
              gap-4
              xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.7fr)]
            "
          >
            {/* Sales Chart */}
            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm

                dark:border-white/10
                dark:bg-black

                sm:p-6
              "
            >
              {/* Chart header */}
              <div
                className="
                  flex
                  flex-col
                  justify-between
                  gap-4

                  sm:flex-row
                  sm:items-center
                "
              >
                <div>
                  <h3
                    className="
                      text-sm
                      font-bold
                      text-slate-950
                      dark:text-white
                    "
                  >
                    {salesInformation[salesRange].title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {
                      salesInformation[salesRange]
                        .description
                    }
                  </p>
                </div>

                {/* Range */}
                <div
                  className="
                    flex
                    w-fit
                    items-center
                    rounded-xl
                    bg-slate-100
                    p-1

                    dark:bg-white/[0.07]
                  "
                >
                  <SalesRangeButton
                    label="Daily"
                    active={
                      salesRange === "daily"
                    }
                    onClick={() =>
                      setSalesRange("daily")
                    }
                  />

                  <SalesRangeButton
                    label="Weekly"
                    active={
                      salesRange === "weekly"
                    }
                    onClick={() =>
                      setSalesRange("weekly")
                    }
                  />

                  <SalesRangeButton
                    label="Monthly"
                    active={
                      salesRange === "monthly"
                    }
                    onClick={() =>
                      setSalesRange("monthly")
                    }
                  />
                </div>
              </div>

              {/* Total */}
              <div className="mt-6 flex items-end gap-3">
                <div>
                  <p
                    className="
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Total sales
                  </p>

                  <p
                    className="
                      mt-1
                      text-2xl
                      font-bold
                      text-slate-950
                      dark:text-white
                    "
                  >
                    {formatYen(totalSales)}
                  </p>
                </div>

                <span
                  className="
                    mb-1
                    rounded-full
                    bg-blue-50
                    px-2.5
                    py-1
                    text-[10px]
                    font-semibold
                    text-blue-600

                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  {
                    salesInformation[salesRange]
                      .change
                  }
                </span>
              </div>

              {/* Area Chart */}
              <div className="mt-6 h-[280px] w-full">
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <AreaChart
                    key={salesRange}
                    data={selectedSales}
                    margin={{
                      top: 12,
                      right: 12,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="fashionSalesGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="var(--color-blue-600)"
                          stopOpacity={0.38}
                        />

                        <stop
                          offset="55%"
                          stopColor="var(--color-blue-400)"
                          stopOpacity={0.13}
                        />

                        <stop
                          offset="100%"
                          stopColor="var(--color-blue-400)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      stroke="rgba(148, 163, 184, 0.2)"
                      strokeDasharray="4 4"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="label"
                      axisLine={false}
                      tickLine={false}
                      interval={0}
                      dy={10}
                      tick={{
                        fill: "#94a3b8",
                        fontSize: 11,
                      }}
                    />

                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      width={52}
                      tick={{
                        fill: "#94a3b8",
                        fontSize: 11,
                      }}
                      tickFormatter={
                        formatChartValue
                      }
                    />

                    <Tooltip
                      cursor={{
                        stroke:
                          "var(--color-blue-600)",
                        strokeWidth: 1,
                        strokeDasharray:
                          "4 4",
                      }}
                      formatter={(value) => [
                        formatYen(
                          Number(value),
                        ),
                        "Sales",
                      ]}
                      labelFormatter={(
                        label,
                      ) =>
                        salesRange ===
                        "daily"
                          ? `Time: ${label}`
                          : `${label}`
                      }
                      contentStyle={{
                        border: "none",
                        borderRadius:
                          "12px",
                        backgroundColor:
                          "#0f172a",
                        boxShadow:
                          "0 12px 30px rgba(15, 23, 42, 0.18)",
                        padding:
                          "10px 12px",
                      }}
                      labelStyle={{
                        color: "#94a3b8",
                        fontSize: "11px",
                        marginBottom: "5px",
                      }}
                      itemStyle={{
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    />

                    <Area
                      type="monotone"
                      dataKey="value"
                      name="Sales"
                      stroke="var(--color-blue-600)"
                      strokeWidth={3}
                      fill="url(#fashionSalesGradient)"
                      dot={{
                        r: 4,
                        fill: "#ffffff",
                        stroke:
                          "var(--color-blue-600)",
                        strokeWidth: 2,
                      }}
                      activeDot={{
                        r: 6,
                        fill:
                          "var(--color-blue-600)",
                        stroke:
                          "#ffffff",
                        strokeWidth: 3,
                      }}
                      animationBegin={0}
                      animationDuration={700}
                      animationEasing="ease-out"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Products */}
            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm

                dark:border-white/10
                dark:bg-black

                sm:p-6
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">
                    Top selling products
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Best performing styles today
                  </p>
                </div>

                <div
                  className="
                    grid
                    h-9
                    w-9
                    place-items-center
                    rounded-xl

                    bg-blue-50
                    text-blue-600

                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  <BarChart3 className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {topProducts.map(
                  (product, index) => (
                    <div
                      key={product.name}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <div
                        className="
                          grid
                          h-9
                          w-9
                          shrink-0
                          place-items-center
                          rounded-xl

                          bg-blue-50

                          text-xs
                          font-bold
                          text-blue-700

                          dark:bg-blue-500/10
                          dark:text-blue-400
                        "
                      >
                        {index + 1}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className="
                            truncate
                            text-sm
                            font-medium
                          "
                        >
                          {product.name}
                        </p>

                        <p
                          className="
                            text-xs
                            text-slate-500
                            dark:text-slate-400
                          "
                        >
                          {product.sold} sold
                        </p>
                      </div>

                      <p className="text-sm font-semibold">
                        {product.amount}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </section>

          {/* Transactions + Stock */}
          <section
            className="
              mt-4
              grid
              gap-4
              xl:grid-cols-[minmax(0,1.4fr)_minmax(340px,0.8fr)]
            "
          >
            {/* Recent Sales */}
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm

                dark:border-white/10
                dark:bg-black
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-b
                  border-slate-100
                  p-5

                  dark:border-white/[0.06]

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:p-6
                "
              >
                <div>
                  <p className="text-sm font-semibold">
                    Recent sales
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Latest fashion store transactions
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-2

                    transition

                    focus-within:border-blue-300
                    focus-within:ring-2
                    focus-within:ring-blue-500/10

                    dark:border-white/10
                    dark:bg-white/[0.04]

                    md:hidden
                  "
                >
                  <Search className="h-4 w-4 text-slate-400" />

                  <input
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value,
                      )
                    }
                    placeholder="Search..."
                    className="
                      w-full
                      bg-transparent
                      text-sm
                      outline-none
                    "
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table
                  className="
                    w-full
                    min-w-[720px]
                    text-left
                    text-sm
                  "
                >
                  <thead
                    className="
                      bg-blue-50/50
                      text-xs
                      uppercase
                      tracking-wide
                      text-slate-500

                      dark:bg-blue-500/[0.05]
                      dark:text-slate-400
                    "
                  >
                    <tr>
                      <th className="px-6 py-3 font-semibold">
                        Receipt
                      </th>

                      <th className="px-6 py-3 font-semibold">
                        Customer
                      </th>

                      <th className="px-6 py-3 font-semibold">
                        Items
                      </th>

                      <th className="px-6 py-3 font-semibold">
                        Payment
                      </th>

                      <th className="px-6 py-3 font-semibold">
                        Total
                      </th>

                      <th className="px-6 py-3 font-semibold">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody
                    className="
                      divide-y
                      divide-slate-100
                      dark:divide-white/[0.06]
                    "
                  >
                    {filteredSales.map(
                      (sale) => (
                        <tr
                          key={sale.id}
                          className="
                            transition-colors
                            hover:bg-blue-50/30
                            dark:hover:bg-blue-500/[0.04]
                          "
                        >
                          <td
                            className="
                              px-6
                              py-4
                              font-semibold
                              text-blue-600
                              dark:text-blue-400
                            "
                          >
                            {sale.id}
                          </td>

                          <td
                            className="
                              px-6
                              py-4
                              text-slate-600
                              dark:text-slate-300
                            "
                          >
                            {sale.customer}
                          </td>

                          <td
                            className="
                              px-6
                              py-4
                              text-slate-600
                              dark:text-slate-300
                            "
                          >
                            {sale.items}
                          </td>

                          <td
                            className="
                              px-6
                              py-4
                              text-slate-600
                              dark:text-slate-300
                            "
                          >
                            {sale.payment}
                          </td>

                          <td className="px-6 py-4 font-semibold">
                            {sale.total}
                          </td>

                          <td className="px-6 py-4">
                            <span
                              className={`
                                rounded-full
                                px-2.5
                                py-1
                                text-xs
                                font-semibold

                                ${
                                  sale.status ===
                                  "Paid"
                                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                                    : "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400"
                                }
                              `}
                            >
                              {sale.status}
                            </span>
                          </td>
                        </tr>
                      ),
                    )}

                    {filteredSales.length ===
                      0 && (
                      <tr>
                        <td
                          colSpan={6}
                          className="
                            px-6
                            py-10
                            text-center
                            text-slate-500
                            dark:text-slate-400
                          "
                        >
                          No sales found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Variant Stock Alerts */}
            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm

                dark:border-white/10
                dark:bg-black

                sm:p-6
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">
                    Variant stock alerts
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Size and color combinations running low
                  </p>
                </div>

                <AlertTriangle
                  className="
                    h-5
                    w-5
                    text-amber-600
                    dark:text-amber-400
                  "
                />
              </div>

              <div className="mt-5 space-y-3">
                {lowStockVariants.map(
                  (item) => (
                    <div
                      key={item.sku}
                      className="
                        rounded-xl
                        border
                        border-slate-100
                        bg-slate-50
                        p-4

                        transition

                        hover:border-blue-200
                        hover:bg-blue-50/30

                        dark:border-white/[0.07]
                        dark:bg-white/[0.04]
                        dark:hover:border-blue-500/20
                        dark:hover:bg-blue-500/[0.05]
                      "
                    >
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                        "
                      >
                        <div className="min-w-0">
                          <p
                            className="
                              truncate
                              text-sm
                              font-medium
                            "
                          >
                            {item.product}
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              text-slate-500
                              dark:text-slate-400
                            "
                          >
                            {item.sku}
                          </p>
                        </div>

                        <span
                          className={`
                            rounded-full
                            px-2
                            py-1
                            text-[11px]
                            font-semibold

                            ${
                              item.stock <= 3
                                ? "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400"
                                : "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                            }
                          `}
                        >
                          {item.stock} left
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span
                          className="
                            rounded-lg
                            bg-white
                            px-2.5
                            py-1
                            text-xs
                            font-medium
                            text-slate-600

                            dark:bg-white/[0.07]
                            dark:text-slate-300
                          "
                        >
                          Size: {item.size}
                        </span>

                        <span
                          className="
                            rounded-lg
                            bg-white
                            px-2.5
                            py-1
                            text-xs
                            font-medium
                            text-slate-600

                            dark:bg-white/[0.07]
                            dark:text-slate-300
                          "
                        >
                          Color: {item.color}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveNav("Variants")
                }
                className="
                  mt-4
                  w-full
                  rounded-xl
                  border
                  border-blue-200
                  bg-blue-50/50
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-blue-700

                  transition

                  hover:bg-blue-50

                  dark:border-blue-500/20
                  dark:bg-blue-500/[0.05]
                  dark:text-blue-400
                  dark:hover:bg-blue-500/10
                "
              >
                View All Variants
              </button>
            </div>
          </section>

          {/* CTA */}
          <section
            className="
              mt-4
              rounded-2xl
              bg-blue-600
              p-5
              text-white

              shadow-lg
              shadow-blue-600/15

              transition-colors
              duration-300

              sm:p-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    grid
                    h-11
                    w-11
                    shrink-0
                    place-items-center
                    rounded-xl
                    bg-white/15
                  "
                >
                  <ShoppingCart className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">
                    Try the Fashion POS checkout
                  </p>

                  <p
                    className="
                      mt-1
                      max-w-xl
                      text-sm
                      leading-6
                      text-white/75
                    "
                  >
                    Select products by size and
                    color, add them to the cart,
                    and test the checkout workflow
                    using safe demo data.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveNav("POS")
                }
                className="
                  shrink-0
                  rounded-xl
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-blue-700
                  shadow-sm

                  transition

                  hover:bg-blue-50
                  active:scale-95
                "
              >
                Open Fashion POS
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  note,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof TrendingUp;
  accent: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm

        transition-all
        duration-200

        hover:-translate-y-0.5
        hover:border-blue-200
        hover:shadow-md

        dark:border-white/10
        dark:bg-black
        dark:hover:border-blue-500/20
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <p
            className="
              text-sm
              font-medium
              text-slate-500
              dark:text-slate-400
            "
          >
            {label}
          </p>

          <p
            className="
              mt-2
              text-2xl
              font-bold
              tracking-tight
            "
          >
            {value}
          </p>
        </div>

        <div
          className={`
            grid
            h-11
            w-11
            place-items-center
            rounded-xl

            ${accent}
          `}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p
        className="
          mt-4
          text-xs
          text-slate-500
          dark:text-slate-400
        "
      >
        {note}
      </p>
    </div>
  );
}

function SalesRangeButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-lg
        px-3
        py-1.5
        text-[11px]
        font-medium
        transition-all
        duration-200

        sm:text-xs

        ${
          active
            ? `
              bg-white
              text-blue-600
              shadow-sm

              dark:bg-white/10
              dark:text-blue-400
            `
            : `
              text-slate-500

              hover:text-slate-900

              dark:text-slate-400
              dark:hover:text-white
            `
        }
      `}
    >
      {label}
    </button>
  );
}
