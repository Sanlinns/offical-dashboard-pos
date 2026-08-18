"use client";

import {
  ChefHat,
  Clock3,
  CreditCard,
  ReceiptText,
  Search,
  ShoppingBag,
  ShoppingCart,
  Table2,
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
    { label: "8 AM", value: 18600 },
    { label: "10 AM", value: 32400 },
    { label: "12 PM", value: 48500 },
    { label: "2 PM", value: 39600 },
    { label: "4 PM", value: 55200 },
    { label: "6 PM", value: 68400 },
    { label: "8 PM", value: 61200 },
    { label: "10 PM", value: 42800 },
  ],

  weekly: [
    { label: "Mon", value: 132000 },
    { label: "Tue", value: 158000 },
    { label: "Wed", value: 149000 },
    { label: "Thu", value: 176000 },
    { label: "Fri", value: 168000 },
    { label: "Sat", value: 224000 },
    { label: "Sun", value: 186500 },
  ],

  monthly: [
    { label: "Week 1", value: 720000 },
    { label: "Week 2", value: 845000 },
    { label: "Week 3", value: 798000 },
    { label: "Week 4", value: 968000 },
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
    description: "Today's restaurant sales performance",
    change: "+10.2%",
  },

  weekly: {
    title: "Weekly Revenue",
    description: "Restaurant sales performance for this week",
    change: "+15.2%",
  },

  monthly: {
    title: "Monthly Revenue",
    description: "Restaurant sales performance for this month",
    change: "+19.6%",
  },
};

const tables = [
  {
    id: "T01",
    name: "Table 01",
    seats: 4,
    status: "Occupied",
    amount: "¥5,800",
    time: "32 min",
  },
  {
    id: "T02",
    name: "Table 02",
    seats: 2,
    status: "Available",
    amount: "-",
    time: "-",
  },
  {
    id: "T03",
    name: "Table 03",
    seats: 6,
    status: "Occupied",
    amount: "¥12,400",
    time: "48 min",
  },
  {
    id: "T04",
    name: "Table 04",
    seats: 4,
    status: "Reserved",
    amount: "-",
    time: "13:30",
  },
  {
    id: "T05",
    name: "Table 05",
    seats: 2,
    status: "Available",
    amount: "-",
    time: "-",
  },
  {
    id: "T06",
    name: "Table 06",
    seats: 4,
    status: "Occupied",
    amount: "¥7,250",
    time: "21 min",
  },
];

const recentOrders = [
  {
    id: "#ORD-2084",
    type: "Dine In",
    table: "Table 03",
    items: 7,
    total: "¥12,400",
    status: "Preparing",
  },
  {
    id: "#ORD-2083",
    type: "Takeaway",
    table: "-",
    items: 3,
    total: "¥4,800",
    status: "Ready",
  },
  {
    id: "#ORD-2082",
    type: "Dine In",
    table: "Table 01",
    items: 4,
    total: "¥5,800",
    status: "Served",
  },
  {
    id: "#ORD-2081",
    type: "Delivery",
    table: "-",
    items: 5,
    total: "¥8,650",
    status: "Preparing",
  },
  {
    id: "#ORD-2080",
    type: "Dine In",
    table: "Table 06",
    items: 6,
    total: "¥7,250",
    status: "Served",
  },
];

const kitchenOrders = [
  {
    id: "#2084",
    table: "Table 03",
    item: "Grilled Salmon Set",
    qty: 2,
    time: "12m",
    priority: "Normal",
  },
  {
    id: "#2084",
    table: "Table 03",
    item: "Chicken Karaage",
    qty: 1,
    time: "10m",
    priority: "Normal",
  },
  {
    id: "#2081",
    table: "Delivery",
    item: "Beef Curry",
    qty: 2,
    time: "18m",
    priority: "High",
  },
  {
    id: "#2079",
    table: "Takeaway",
    item: "Ramen",
    qty: 1,
    time: "22m",
    priority: "High",
  },
];

const topMenu = [
  {
    name: "Chicken Karaage",
    sold: 46,
    amount: "¥32,200",
  },
  {
    name: "Grilled Salmon Set",
    sold: 38,
    amount: "¥45,600",
  },
  {
    name: "Beef Curry",
    sold: 34,
    amount: "¥30,600",
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

export default function RestaurantDemoPage() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [, setActiveNav] =
    useState("Dashboard");

  const [search, setSearch] =
    useState("");

  const [salesRange, setSalesRange] =
    useState<SalesRange>("weekly");

  const filteredOrders = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    if (!query) {
      return recentOrders;
    }

    return recentOrders.filter(
      (order) =>
        order.id
          .toLowerCase()
          .includes(query) ||
        order.type
          .toLowerCase()
          .includes(query) ||
        order.table
          .toLowerCase()
          .includes(query) ||
        order.status
          .toLowerCase()
          .includes(query),
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

      <div className="py-5">
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
          {/* Header */}
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
                Restaurant overview
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Monitor tables, orders and
                kitchen activity in real time.
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
              <ShoppingCart className="h-4 w-4" />
              New Order
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
              value="¥186,500"
              note="+15.2% from yesterday"
              icon={TrendingUp}
              accent="
                bg-blue-50
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            />

            <StatCard
              label="Active Orders"
              value="14"
              note="6 currently preparing"
              icon={ReceiptText}
              accent="
                bg-blue-50
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            />

            <StatCard
              label="Occupied Tables"
              value="9 / 16"
              note="56% table occupancy"
              icon={Table2}
              accent="
                bg-blue-50
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            />

            <StatCard
              label="Avg. Order Time"
              value="18 min"
              note="2 min faster today"
              icon={Clock3}
              accent="
                bg-blue-50
                text-blue-700
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            />
          </section>

          {/* Tables */}
          <section
            className="
              mt-4
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
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
              "
            >
              <div>
                <p className="text-sm font-semibold">
                  Table status
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Live overview of dining tables
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveNav("Tables")
                }
                className="
                  rounded-xl
                  border
                  border-blue-200
                  bg-blue-50/50
                  px-3
                  py-2
                  text-xs
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
                View all tables
              </button>
            </div>

            <div
              className="
                mt-5
                grid
                gap-3
                sm:grid-cols-2
                lg:grid-cols-3
                2xl:grid-cols-6
              "
            >
              {tables.map((table) => (
                <button
                  type="button"
                  key={table.id}
                  onClick={() =>
                    setActiveNav("Tables")
                  }
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                    text-left

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:border-blue-200
                    hover:bg-blue-50/30
                    hover:shadow-md

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:hover:border-blue-500/20
                    dark:hover:bg-blue-500/[0.05]
                  "
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="
                        grid
                        h-10
                        w-10
                        place-items-center
                        rounded-xl
                        bg-white
                        text-blue-600
                        shadow-sm

                        dark:bg-white/[0.07]
                        dark:text-blue-400
                      "
                    >
                      <Table2 className="h-5 w-5" />
                    </div>

                    <StatusBadge
                      status={table.status}
                    />
                  </div>

                  <p className="mt-4 font-semibold">
                    {table.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {table.seats} seats
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-400">
                        Current bill
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        {table.amount}
                      </p>
                    </div>

                    <p
                      className="
                        text-xs
                        font-medium
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {table.time}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Revenue + Top Menu */}
          <section
            className="
              mt-4
              grid
              gap-4
              xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.7fr)]
            "
          >
            {/* Area Chart */}
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
                        id="restaurantSalesGradient"
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
                      labelFormatter={(label) =>
                        salesRange === "daily"
                          ? `Time: ${label}`
                          : `${label}`
                      }
                      contentStyle={{
                        border: "none",
                        borderRadius: "12px",
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
                      fill="url(#restaurantSalesGradient)"
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
                        stroke: "#ffffff",
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

            {/* Top Menu */}
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
                    Top menu items
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Best sellers today
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
                  <ShoppingBag className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {topMenu.map(
                  (item, index) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3"
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
                        <p className="truncate text-sm font-medium">
                          {item.name}
                        </p>

                        <p
                          className="
                            text-xs
                            text-slate-500
                            dark:text-slate-400
                          "
                        >
                          {item.sold} sold
                        </p>
                      </div>

                      <p className="text-sm font-semibold">
                        {item.amount}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </section>

          {/* Orders + Kitchen */}
          <section
            className="
              mt-4
              grid
              gap-4
              xl:grid-cols-[minmax(0,1.4fr)_minmax(340px,0.8fr)]
            "
          >
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
                    Recent orders
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Dine-in, takeaway and delivery orders
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
                        Order
                      </th>

                      <th className="px-6 py-3 font-semibold">
                        Type
                      </th>

                      <th className="px-6 py-3 font-semibold">
                        Table
                      </th>

                      <th className="px-6 py-3 font-semibold">
                        Items
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
                    {filteredOrders.map(
                      (order) => (
                        <tr
                          key={order.id}
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
                            {order.id}
                          </td>

                          <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                            {order.type}
                          </td>

                          <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                            {order.table}
                          </td>

                          <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                            {order.items}
                          </td>

                          <td className="px-6 py-4 font-semibold">
                            {order.total}
                          </td>

                          <td className="px-6 py-4">
                            <OrderBadge
                              status={
                                order.status
                              }
                            />
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Kitchen */}
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
                    Kitchen queue
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Items currently being prepared
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
                  <ChefHat className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {kitchenOrders.map(
                  (order, index) => (
                    <div
                      key={`${order.id}-${index}`}
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
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold">
                              {order.item}
                            </p>

                            <span
                              className="
                                rounded-md
                                bg-white
                                px-2
                                py-0.5
                                text-[10px]
                                font-bold
                                text-slate-500

                                dark:bg-white/10
                                dark:text-slate-300
                              "
                            >
                              ×{order.qty}
                            </span>
                          </div>

                          <p
                            className="
                              mt-1
                              text-xs
                              text-slate-500
                              dark:text-slate-400
                            "
                          >
                            {order.id} · {order.table}
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
                              order.priority ===
                              "High"
                                ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                                : "bg-slate-200 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                            }
                          `}
                        >
                          {order.priority}
                        </span>
                      </div>

                      <div
                        className="
                          mt-3
                          flex
                          items-center
                          gap-1.5
                          text-xs
                          font-medium
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        <Clock3 className="h-3.5 w-3.5" />

                        Waiting {order.time}
                      </div>
                    </div>
                  ),
                )}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveNav("Kitchen")
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
                Open Kitchen Display
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
                  <CreditCard className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">
                    Try the Restaurant POS checkout
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
                    Create a dine-in, takeaway or
                    delivery order using safe demo
                    data. No production database will
                    be changed.
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
                Open Restaurant POS
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
      <div className="flex items-start justify-between gap-4">
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

          <p className="mt-2 text-2xl font-bold tracking-tight">
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

function StatusBadge({
  status,
}: {
  status: string;
}) {
  if (status === "Occupied") {
    return (
      <span
        className="
          rounded-full
          bg-red-50
          px-2
          py-1
          text-[11px]
          font-semibold
          text-red-700

          dark:bg-red-500/10
          dark:text-red-400
        "
      >
        Occupied
      </span>
    );
  }

  if (status === "Reserved") {
    return (
      <span
        className="
          rounded-full
          bg-amber-50
          px-2
          py-1
          text-[11px]
          font-semibold
          text-amber-700

          dark:bg-amber-500/10
          dark:text-amber-400
        "
      >
        Reserved
      </span>
    );
  }

  return (
    <span
      className="
        rounded-full
        bg-emerald-50
        px-2
        py-1
        text-[11px]
        font-semibold
        text-emerald-700

        dark:bg-emerald-500/10
        dark:text-emerald-400
      "
    >
      Available
    </span>
  );
}

function OrderBadge({
  status,
}: {
  status: string;
}) {
  if (status === "Preparing") {
    return (
      <span
        className="
          rounded-full
          bg-amber-50
          px-2.5
          py-1
          text-xs
          font-semibold
          text-amber-700

          dark:bg-amber-500/10
          dark:text-amber-400
        "
      >
        Preparing
      </span>
    );
  }

  if (status === "Ready") {
    return (
      <span
        className="
          rounded-full
          bg-blue-50
          px-2.5
          py-1
          text-xs
          font-semibold
          text-blue-700

          dark:bg-blue-500/10
          dark:text-blue-400
        "
      >
        Ready
      </span>
    );
  }

  return (
    <span
      className="
        rounded-full
        bg-emerald-50
        px-2.5
        py-1
        text-xs
        font-semibold
        text-emerald-700

        dark:bg-emerald-500/10
        dark:text-emerald-400
      "
    >
      Served
    </span>
  );
}
