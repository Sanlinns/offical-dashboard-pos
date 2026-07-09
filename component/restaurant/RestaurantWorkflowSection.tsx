import Link from 'next/link';
import React from 'react'

const RestaurantWorkflowSection = () => {

      const steps = [
    {
      step: "01",
      title: "Take Order",
      description:
        "Staff က table, takeaway, delivery order ကို POS မှာ တင်နိုင်ပါတယ်။",
    },
    {
      step: "02",
      title: "Send to Kitchen",
      description:
        "Order ကို kitchen display သို့ပို့ပြီး cooking status ကို track လုပ်နိုင်ပါတယ်။",
    },
    {
      step: "03",
      title: "Checkout & Receipt",
      description:
        "Payment လက်ခံပြီး receipt print ထုတ်ကာ daily sales report သိမ်းနိုင်ပါတယ်။",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 text-slate-950 transition-colors duration-500 dark:bg-[#020617] dark:text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-500/10" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-700 shadow-sm dark:border-orange-300/15 dark:bg-orange-400/10 dark:text-orange-200">
            Simple Workflow
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            From order to checkout,
            <br />
            everything is smooth.
          </h2>

          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-700 dark:text-white/65 md:text-lg">
            Restaurant operation ကို simple flow နဲ့ထားထားတာကြောင့် staff
            များအတွက်လည်း သုံးရလွယ်ပြီး owner အတွက်လည်း sales tracking
            လုပ်ရလွယ်ပါတယ်။
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-orange-600 dark:bg-white dark:text-slate-950 dark:hover:bg-orange-50"
            >
              View Pricing
            </Link>

            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="rounded-[2rem] border border-orange-100 bg-orange-50/80 p-4 shadow-2xl shadow-orange-950/10 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/30">
          <div className="rounded-[1.5rem] bg-white p-5 dark:bg-slate-950">
            <div className="space-y-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-5 transition hover:bg-orange-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-sm font-black text-white shadow-lg shadow-orange-600/20">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium leading-7 text-slate-600 dark:text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-5 text-white shadow-xl shadow-orange-600/20">
              <div className="text-sm font-bold text-white/80">
                Today Overview
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                <div>
                  <div className="text-2xl font-black">48</div>
                  <div className="text-xs font-semibold text-white/70">
                    Orders
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-black">12</div>
                  <div className="text-xs font-semibold text-white/70">
                    Tables
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-black">98%</div>
                  <div className="text-xs font-semibold text-white/70">
                    Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RestaurantWorkflowSection
