import React from 'react'

const FashionPOSWorkflowSection = () => {
     const steps = [
    {
      step: "01",
      title: "Add Products",
      description:
        "Fashion item များကို category, brand, size, color, barcode, price အလိုက် ထည့်နိုင်ပါတယ်။",
    },
    {
      step: "02",
      title: "Sell with POS",
      description:
        "Barcode scan သို့မဟုတ် product search ဖြင့် cart ထဲထည့်ပြီး checkout လုပ်နိုင်ပါတယ်။",
    },
    {
      step: "03",
      title: "Track Stock & Sales",
      description:
        "ရောင်းပြီးတိုင်း stock auto လျော့သွားပြီး daily sales report ကို ကြည့်နိုင်ပါတယ်။",
    },
  ];


  const dashboardStats = [
    { label: "Today Sales", value: "Ks 428K" },
    { label: "Products", value: "1,284" },
    { label: "Low Stock", value: "18" },
  ];


  return (
    <section className="relative overflow-hidden bg-rose-50 px-4 py-24 text-slate-950 transition-colors duration-500 dark:bg-[#020617] dark:text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-300/25 blur-3xl dark:bg-violet-500/10" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left content */}
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-bold text-pink-700 shadow-sm backdrop-blur dark:border-pink-300/15 dark:bg-pink-400/10 dark:text-pink-200">
            Fashion Store Workflow
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            From product entry
            <br />
            to checkout and report.
          </h2>

          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-700 dark:text-white/65 md:text-lg">
            Fashion shop တစ်ခုမှာ item variant များတာကြောင့် size, color,
            category, barcode, stock ကို POS system ထဲမှာ သေချာစီမံနိုင်ရပါမယ်။
            ဒီ workflow က product add မှ checkout အထိ လွယ်ကူအောင်လုပ်ထားပါတယ်။
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#collections"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 text-sm font-black text-white shadow-xl shadow-pink-600/25 transition hover:-translate-y-0.5"
            >
              View Collections
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-pink-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* Right mockup */}
        <div className="rounded-[2rem] border border-pink-100 bg-white/80 p-4 shadow-2xl shadow-pink-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-black/30">
          <div className="rounded-[1.5rem] bg-white p-5 dark:bg-slate-950">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  Fashion POS Dashboard
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-white/55">
                  Stock, checkout and sales overview
                </p>
              </div>

              <div className="rounded-full bg-pink-100 px-4 py-2 text-xs font-black text-pink-700 dark:bg-pink-400/10 dark:text-pink-200">
                LIVE
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {dashboardStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
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

            <div className="mt-5 space-y-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-5 transition hover:bg-pink-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-sm font-black text-white shadow-lg shadow-pink-600/20">
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

            <div className="mt-5 rounded-3xl bg-gradient-to-r from-pink-500 to-violet-600 p-5 text-white shadow-xl shadow-pink-600/20">
              <div className="text-sm font-bold text-white/75">
                Best Seller Today
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black">Summer Dress</div>
                  <div className="mt-1 text-xs font-semibold text-white/70">
                    Size M • Pink • 24 sold
                  </div>
                </div>

                <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">
                  Ks 45K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FashionPOSWorkflowSection