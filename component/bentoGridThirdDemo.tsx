// "use client";
// import { cn } from "@/lib/utils";
// import React from "react";

// import {
//   IconBoxAlignRightFilled,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";
// import { motion } from "motion/react";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";


// export function BentoGridThirdDemo() {
//   return (
//     <BentoGrid className="md:auto-rows-[20rem]">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           className={cn("[&>p:text-lg]", item.className)}
//           icon={item.icon}
//         />
//       ))}
//     </BentoGrid>
//   );
// }

// const SkeletonOne = () => {
//   const variants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const variantsSecond = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: -10,
//       rotate: -5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//     >
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
//       >
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
//         <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
//       >
//         <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
//       </motion.div>
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
//       >
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
//         <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//       </motion.div>
//     </motion.div>
//   );
// };
// const SkeletonTwo = () => {
//   const variants = {
//     initial: {
//       width: 0,
//     },
//     animate: {
//       width: "100%",
//       transition: {
//         duration: 0.2,
//       },
//     },
//     hover: {
//       width: ["0%", "100%"],
//       transition: {
//         duration: 2,
//       },
//     },
//   };
//   const arr = new Array(6).fill(0);
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//     >
//       {arr.map((_, i) => (
//         <motion.div
//           key={"skelenton-two" + i}
//           variants={variants}
//           style={{
//             maxWidth: Math.random() * (100 - 40) + 40 + "%",
//           }}
//           className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
//         ></motion.div>
//       ))}
//     </motion.div>
//   );
// };
// const SkeletonThree = () => {
//   const variants = {
//     initial: {
//       backgroundPosition: "0 50%",
//     },
//     animate: {
//       backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       variants={variants}
//       transition={{
//         duration: 5,
//         repeat: Infinity,
//         repeatType: "reverse",
//       }}
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
//       style={{
//         background:
//           "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
//         backgroundSize: "400% 400%",
//       }}
//     >
//       <motion.div className="h-full w-full rounded-lg"></motion.div>
//     </motion.div>
//   );
// };
// const SkeletonFour = () => {
//   const first = {
//     initial: {
//       x: 20,
//       rotate: -5,
//     },
//     hover: {
//       x: 0,
//       rotate: 0,
//     },
//   };
//   const second = {
//     initial: {
//       x: -20,
//       rotate: 5,
//     },
//     hover: {
//       x: 0,
//       rotate: 0,
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
//     >
//       <motion.div
//         variants={first}
//         className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
//       >
//         <img
//           src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10"
//         />
//         <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
//           Just code in Vanilla Javascript
//         </p>
//         <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
//           Delusional
//         </p>
//       </motion.div>
//       <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
//         <img
//           src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10"
//         />
//         <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
//           Tailwind CSS is cool, you know
//         </p>
//         <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
//           Sensible
//         </p>
//       </motion.div>
//       <motion.div
//         variants={second}
//         className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
//       >
//         <img
//           src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10"
//         />
//         <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
//           I love angular, RSC, and Redux.
//         </p>
//         <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
//           Helpless
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };
// const SkeletonFive = () => {
//   const variants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const variantsSecond = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: -10,
//       rotate: -5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//     >
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
//       >
//         <img
//           src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10"
//         />
//         <p className="text-xs text-neutral-500">
//           There are a lot of cool framerworks out there like React, Angular,
//           Vue, Svelte that can make your life ....
//         </p>
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
//       >
//         <p className="text-xs text-neutral-500">Use PHP.</p>
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
//       </motion.div>
//     </motion.div>
//   );
// };
// const items = [
//   {
//     title: "AI Content Generation",
//     description: (
//       <span className="text-sm">
//         Experience the power of AI in generating unique content.
//       </span>
//     ),
//     header: <SkeletonOne />,
//     className: "md:col-span-1",
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Automated Proofreading",
//     description: (
//       <span className="text-sm">
//         Let AI handle the proofreading of your documents.
//       </span>
//     ),
//     header: <SkeletonTwo />,
//     className: "md:col-span-1",
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Contextual Suggestions",
//     description: (
//       <span className="text-sm">
//         Get AI-powered suggestions based on your writing context.
//       </span>
//     ),
//     header: <SkeletonThree />,
//     className: "md:col-span-1",
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Sentiment Analysis",
//     description: (
//       <span className="text-sm">
//         Understand the sentiment of your text with AI analysis.
//       </span>
//     ),
//     header: <SkeletonFour />,
//     className: "md:col-span-2",
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },

//   {
//     title: "Text Summarization",
//     description: (
//       <span className="text-sm">
//         Summarize your lengthy documents with AI technology.
//       </span>
//     ),
//     header: <SkeletonFive />,
//     className: "md:col-span-1",
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
// ];


"use client";

import { cn } from "@/lib/utils";
import React from "react";

import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function BentoGridThirdDemo() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20">
      <div className="mb-10">
        <p className="mb-3 w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
          Supermarket POS Features
        </p>

        <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
          ဆိုင်လုပ်ငန်းကို ပိုမြန်၊ ပိုလွယ်၊ ပိုစနစ်ကျစေမယ့် POS System
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
          Barcode checkout, product stock, cashier, receipt print နဲ့ sales
          report များကို တစ်နေရာတည်းကနေ စီမံနိုင်တဲ့ supermarket POS system
          ဖြစ်ပါတယ်။
        </p>
      </div>

      <BentoGrid className="md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const ImageOverlayCard = ({
  image,
  title,
  subtitle,
  badge,
}: {
  image: string;
  title: string;
  subtitle: string;
  badge: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="relative flex h-full min-h-[6rem] w-full flex-1 overflow-hidden rounded-xl"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

      <div className="relative z-10 mt-auto p-5 text-white">
        <p className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
          {badge}
        </p>

        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const SalesDashboardCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative flex h-full min-h-[6rem] w-full flex-1 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-950 via-emerald-700 to-cyan-500 text-white"
    >
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
        alt="Supermarket cashier checkout"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-800/80 to-cyan-500/60" />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-5">
        <div>
          <p className="text-sm text-white/70">Today Sales</p>
          <h3 className="mt-2 text-3xl font-bold">¥245,800</h3>
          <p className="mt-2 text-xs text-white/70">
            Cashier checkout, payment နဲ့ receipt print အတွက်
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <MiniStat label="Receipts" value="184" />
          <MiniStat label="Items" value="629" />
          <MiniStat label="Growth" value="+23%" />
        </div>
      </div>
    </motion.div>
  );
};

const InventoryCard = () => {
  const bars = [
    { label: "Food", value: "88%" },
    { label: "Drink", value: "72%" },
    { label: "Snack", value: "60%" },
    { label: "Daily Goods", value: "92%" },
  ];

  return (
    <div className="relative flex h-full min-h-[6rem] w-full flex-1 overflow-hidden rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
        alt="Supermarket inventory shelves"
        className="absolute inset-0 h-full w-full object-cover opacity-25 dark:opacity-20"
      />

      <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px] dark:bg-black/80" />

      <div className="relative z-10 flex h-full w-full flex-col justify-center space-y-4 p-4">
        {bars.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-300">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-900">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: item.value }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StaffCard = () => {
  const staff = [
    {
      name: "Cashier",
      desc: "အရောင်းဝန်ထမ်း",
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Manager",
      desc: "ဆိုင်စီမံခန့်ခွဲသူ",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Stock",
      desc: "Inventory Control",
      image:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2 rounded-xl bg-dot-black/[0.2] p-3 dark:bg-dot-white/[0.2]">
      {staff.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          className="relative flex h-full w-1/3 overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-white/[0.1] dark:bg-black"
        >
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          <div className="relative z-10 mt-auto p-4 text-white">
            <p className="text-sm font-semibold">{item.name}</p>
            <p className="mt-1 text-xs text-white/70">{item.desc}</p>

            <p className="mt-3 w-fit rounded-full border border-emerald-400 bg-emerald-400/15 px-2 py-0.5 text-xs text-emerald-200">
              Ready
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const AlertCard = () => {
  return (
    <div className="relative flex h-full min-h-[6rem] w-full flex-1 overflow-hidden rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1600&auto=format&fit=crop"
        alt="Receipt and payment records"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-white/90 dark:bg-black/80" />

      <div className="relative z-10 flex h-full w-full flex-col justify-center space-y-3 p-3">
        <Notice
          title="Low Stock Alert"
          desc="ပစ္စည်းလက်ကျန်နည်းလာရင် ကြိုတင်သိနိုင်ပါတယ်"
        />
        <Notice
          title="Receipt Print"
          desc="80mm receipt print အတွက် သင့်တော်ပါတယ်"
        />
        <Notice
          title="Sales Report"
          desc="နေ့စဉ်အရောင်း report ကို ရှင်းရှင်းလင်းလင်း ကြည့်နိုင်ပါတယ်"
        />
      </div>
    </div>
  );
};

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/15 p-3 backdrop-blur">
      <p className="text-xs text-white/70">{label}</p>
      <p className="mt-1 text-lg font-bold">{value}</p>
    </div>
  );
}

function Notice({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      className="flex items-start gap-3 rounded-2xl border border-neutral-100 bg-white/90 p-3 shadow-sm backdrop-blur dark:border-white/[0.2] dark:bg-black/80"
    >
      <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />

      <div>
        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
          {title}
        </p>
        <p className="mt-1 text-xs text-neutral-500">{desc}</p>
      </div>
    </motion.div>
  );
}

const items = [
  {
    title: "Fast Checkout",
    description: (
      <span className="text-sm">
        Barcode scan, cart, payment နဲ့ receipt print များကို မြန်မြန်ဆန်ဆန်
        ပြုလုပ်နိုင်ပါတယ်။
      </span>
    ),
    header: <SalesDashboardCard />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Product Management",
    description: (
      <span className="text-sm">
        Product image, SKU, barcode, category, price နဲ့ discount များကို
        လွယ်ကူစွာ စီမံနိုင်ပါတယ်။
      </span>
    ),
    header: (
      <ImageOverlayCard
        image="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1600&auto=format&fit=crop"
        badge="Products"
        title="Manage Products"
        subtitle="Supermarket shelf ထဲက product များကို dashboard တစ်ခုထဲမှာ စနစ်တကျ ထိန်းချုပ်နိုင်ပါတယ်။"
      />
    ),
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Inventory Control",
    description: (
      <span className="text-sm">
        Stock အဝင်/အထွက်၊ low stock alert နဲ့ category analysis များကို
        ကြည့်နိုင်ပါတယ်။
      </span>
    ),
    header: <InventoryCard />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Staff & Shop Management",
    description: (
      <span className="text-sm">
        Cashier, manager, stock staff များကို role အလိုက် စနစ်တကျ စီမံနိုင်ပါတယ်။
      </span>
    ),
    header: <StaffCard />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Receipt & Smart Alerts",
    description: (
      <span className="text-sm">
        Low stock, receipt print, daily sales report များကို dashboard မှာ
        ရှင်းရှင်းလင်းလင်း ပြနိုင်ပါတယ်။
      </span>
    ),
    header: <AlertCard />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];




