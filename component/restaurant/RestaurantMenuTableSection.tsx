import Link from 'next/link';
import React from 'react'

const RestaurantMenuTableSection = () => {
     const menuItems = [
    {
      name: "Grilled Chicken",
      category: "Main Dish",
      price: "Ks 8,500",
      status: "Available",
    },
    {
      name: "Seafood Fried Rice",
      category: "Rice",
      price: "Ks 6,500",
      status: "Available",
    },
    {
      name: "Fresh Orange Juice",
      category: "Drinks",
      price: "Ks 2,500",
      status: "Low Stock",
    },
  ];

  const tables = [
    { table: "T-01", status: "Free", color: "bg-emerald-500" },
    { table: "T-02", status: "Busy", color: "bg-orange-500" },
    { table: "T-03", status: "Reserved", color: "bg-blue-500" },
    { table: "T-04", status: "Cleaning", color: "bg-slate-500" },
  ];
  return (
     <section
      id="menu"
      className="relative overflow-hidden bg-orange-50 px-4 py-24 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-300/25 blur-3xl dark:bg-orange-500/10" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-red-300/20 blur-3xl dark:bg-red-500/10" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left mockup */}
        <div className="order-2 rounded-[2rem] border border-orange-100 bg-white/80 p-4 shadow-2xl shadow-orange-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-black/30 lg:order-1">
          <div className="rounded-[1.5rem] bg-white p-5 dark:bg-slate-950">
            {/* Top bar */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  Live Restaurant Board
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-white/55">
                  Menu items and table status
                </p>
              </div>

              <div className="rounded-full bg-orange-100 px-4 py-2 text-xs font-black text-orange-700 dark:bg-orange-400/10 dark:text-orange-200">
                LIVE
              </div>
            </div>

            {/* Table status */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {tables.map((item) => (
                <div
                  key={item.table}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-slate-950 dark:text-white">
                      {item.table}
                    </span>
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                  </div>

                  <p className="mt-3 text-xs font-semibold text-slate-500 dark:text-white/55">
                    {item.status}
                  </p>
                </div>
              ))}
            </div>

            {/* Menu list */}
            <div className="mt-5 space-y-3">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-3xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-orange-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div>
                    <h4 className="font-black text-slate-950 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-white/55">
                      {item.category}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-black text-slate-950 dark:text-white">
                      {item.price}
                    </div>
                    <div
                      className={`mt-1 text-xs font-bold ${
                        item.status === "Available"
                          ? "text-emerald-600 dark:text-emerald-300"
                          : "text-orange-600 dark:text-orange-300"
                      }`}
                    >
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom summary */}
            <div className="mt-5 rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-5 text-white shadow-xl shadow-orange-600/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white/75">
                    Active Orders
                  </p>
                  <h4 className="mt-1 text-3xl font-black">24</h4>
                </div>

                <div className="text-right">
                  <p className="text-sm font-bold text-white/75">
                    Today Sales
                  </p>
                  <h4 className="mt-1 text-2xl font-black">Ks 428K</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="order-1 lg:order-2">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-bold text-orange-700 shadow-sm backdrop-blur dark:border-orange-300/15 dark:bg-orange-400/10 dark:text-orange-200">
            Menu & Table Control
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Manage tables, menu,
            <br />
            and active orders easily.
          </h2>

          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-700 dark:text-white/65 md:text-lg">
            Restaurant မှာ table status, menu availability, kitchen order,
            payment status တွေကို တစ်နေရာတည်းမှာ မြင်ရအောင် design
            လုပ်ထားပါတယ်။
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Table Status",
                desc: "FREE, BUSY, RESERVED, CLEANING status များကို live ကြည့်နိုင်ပါတယ်။",
              },
              {
                title: "Menu Availability",
                desc: "Menu item stock ရှိ/မရှိ၊ available ဖြစ်/မဖြစ်ကို စီမံနိုင်ပါတယ်။",
              },
              {
                title: "Kitchen Queue",
                desc: "Order များကို kitchen workflow အတိုင်း ပို့နိုင်ပါတယ်။",
              },
              {
                title: "Daily Overview",
                desc: "နေ့စဉ် order count, sales, active tables များကို ကြည့်နိုင်ပါတယ်။",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10"
              >
                <h3 className="text-lg font-black text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-7 text-slate-600 dark:text-white/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-orange-600 dark:bg-white dark:text-slate-950 dark:hover:bg-orange-50"
            >
              Explore Features
            </Link>

            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RestaurantMenuTableSection
