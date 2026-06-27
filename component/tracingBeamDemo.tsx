"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { TracingBeam } from "@/components/ui/tracing-beam";

type TracingBeamSectionProps = {
  darkMode: boolean;
};

export function TracingBeamSection({ darkMode }: TracingBeamSectionProps) {
  return (
    <section
      id="story"
      className={`relative z-10 overflow-hidden px-5 py-24 md:px-8 lg:px-10 ${
        darkMode ? "bg-[#080b12] text-white" : "bg-[#f4f4f5] text-slate-950"
      }`}
    >
      {/* Same background style as PosFeatureIsometricSection */}
      <div className="pointer-events-none absolute inset-0">
        {darkMode ? (
          <>
            <div className="absolute inset-0 bg-[#080b12]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(59,130,246,0.16)_0%,rgba(14,165,233,0.08)_24%,transparent_52%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_80%,rgba(16,185,129,0.10)_0%,transparent_42%)]" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:120px_100%] opacity-25" />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_120px] opacity-20" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(8,11,18,0.2)_58%,rgba(3,6,12,0.72)_100%)]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[#f4f4f5]" />

            <div className="absolute left-1/2 top-0 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-white blur-3xl" />

            <div className="absolute right-[-12%] top-[18%] h-[420px] w-[420px] rounded-full bg-amber-200/30 blur-3xl" />

            <div className="absolute left-[-10%] bottom-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-200/30 blur-3xl" />
          </>
        )}
      </div>

      <div className="relative mx-auto max-w-[88rem]">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-bold backdrop-blur-md ${
              darkMode
                ? "border-white/[0.14] bg-white/[0.06] text-slate-200 shadow-[0_10px_36px_rgba(0,0,0,0.28)]"
                : "border-slate-200 bg-white/75 text-slate-700"
            }`}
          >
            POS Workflow
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className={`text-4xl font-black tracking-[-0.04em] md:text-6xl ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            A cleaner way to run your shop every day.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            From checkout to inventory and reports, each POS module is designed
            to make daily shop operations faster and easier.
          </motion.p>
        </div>

        <TracingBeam className="px-0 md:px-6">
          <div className="relative mx-auto max-w-2xl antialiased">
            {dummyContent.map((item, index) => (
              <motion.div
                key={`content-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className={`mb-14 rounded-[1.6rem] border p-5 backdrop-blur-md ${
                  darkMode
                    ? "border-white/[0.12] bg-[#0f172a]/80 shadow-[0_18px_56px_rgba(0,0,0,0.38)]"
                    : "border-slate-200 bg-white/70 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                }`}
              >
                <h3
                  className={`mb-4 w-fit rounded-full px-4 py-1 text-sm font-black ${
                    darkMode
                      ? "bg-white text-slate-950"
                      : "bg-slate-950 text-white"
                  }`}
                >
                  {item.badge}
                </h3>

                <p
                  className={twMerge(
                    `mb-4 text-xl font-black tracking-tight md:text-2xl ${
                      darkMode ? "text-white" : "text-slate-950"
                    }`
                  )}
                >
                  {item.title}
                </p>

                <div
                  className={`prose prose-sm max-w-none text-sm leading-7 ${
                    darkMode
                      ? "prose-invert text-slate-300"
                      : "text-slate-700"
                  }`}
                >
                  {item?.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      height="1000"
                      width="1000"
                      className={`mb-10 rounded-2xl border object-cover shadow-xl ${
                        darkMode ? "border-white/10" : "border-slate-200"
                      }`}
                    />
                  )}

                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}

const dummyContent = [
  {
    title: "Fast cashier checkout",
    description: (
      <>
        <p>
          Cashier can scan products, add items to cart, receive payment and
          print receipts in a simple checkout flow.
        </p>

        <p>
          This helps mini marts, supermarkets and retail shops sell faster
          during busy hours.
        </p>
      </>
    ),
    badge: "Checkout",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Inventory and stock control",
    description: (
      <>
        <p>
          Products, stock quantity, low-stock items and shop-specific inventory
          can be managed from one clean dashboard.
        </p>

        <p>
          After sales, stock can be reduced automatically so the owner can check
          product movement more easily.
        </p>
      </>
    ),
    badge: "Inventory",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Receipts and sales reports",
    description: (
      <>
        <p>
          Every receipt can be saved with cashier, shop, payment method and
          sales date.
        </p>

        <p>
          Owner can search receipts, reprint bills and check daily sales reports
          without complicated steps.
        </p>
      </>
    ),
    badge: "Reports",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
  },
];