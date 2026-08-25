"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

const cardImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90";

export function WobbleCardDemo() {
  return (
    <div className="mx-auto mt-10 grid w-full max-w-[88rem] grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Big Card 1 */}
      <WobbleCard
        containerClassName="relative col-span-1 min-h-[560px] overflow-hidden bg-pink-800 lg:col-span-2 lg:min-h-[420px]"
        className=""
      >
        <div className="relative z-20 max-w-md">
          <h2 className="text-left text-balance text-xl font-semibold tracking-[-0.015em] text-white md:text-2xl lg:text-4xl">
            Manage your entire store from one smart POS system
          </h2>

          <p className="mt-5 text-left text-base/7 text-neutral-200 md:text-lg/8">
            Products, inventory, sales, receipts and daily operations can all be
            managed easily from one connected dashboard.
          </p>
        </div>

        <img
          src={cardImage}
          width={760}
          height={760}
          alt="POS dashboard analytics preview"
          className="absolute bottom-[-90px] right-[-120px] z-0 h-[360px] w-[520px] rounded-3xl object-cover opacity-100 brightness-110 saturate-125 contrast-105 shadow-2xl shadow-black/30 md:h-[420px] md:w-[620px] lg:bottom-[-120px] lg:right-[-180px]"
        />

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-pink-800 via-pink-800/50 to-transparent" />
      </WobbleCard>

      {/* Small Card */}
      <WobbleCard containerClassName="col-span-1 min-h-[380px]">
        <h2 className="max-w-md text-left text-balance text-xl font-semibold tracking-[-0.015em] text-white md:text-2xl lg:text-4xl">
          Keep your inventory accurate and under control
        </h2>

        <p className="mt-5 max-w-[30rem] text-left text-base/7 text-neutral-200 md:text-lg/8">
          Track stock levels, monitor low-stock items and manage product
          quantities in real time.
        </p>
      </WobbleCard>

      {/* Big Card 2 */}
      <WobbleCard containerClassName="relative col-span-1 min-h-[620px] overflow-hidden bg-blue-900 lg:col-span-3 lg:min-h-[520px] xl:min-h-[430px]">
        <div className="relative z-20 max-w-xl">
          <h2 className="max-w-xl text-left text-balance text-xl font-semibold tracking-[-0.015em] text-white md:text-2xl lg:text-4xl">
            Everything your store needs to run faster and smarter
          </h2>

          <p className="mt-5 max-w-[30rem] text-left text-base/7 text-neutral-200 md:text-lg/8">
            From fast checkout and staff management to sales reports and
            real-time stock tracking, Binhlaig POS helps simplify your daily
            store operations.
          </p>
        </div>

        <img
          src={cardImage}
          width={900}
          height={900}
          alt="supermarket POS system preview"
          className="absolute bottom-[-120px] right-[-100px] z-0 h-[420px] w-[620px] rounded-3xl object-cover opacity-100 brightness-110 saturate-125 contrast-105 shadow-2xl shadow-black/30 md:h-[520px] md:w-[760px] lg:bottom-[-180px] lg:right-[-120px] xl:right-[-40px]"
        />

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-blue-900 via-blue-900/50 to-transparent" />
      </WobbleCard>
    </div>
  );
}