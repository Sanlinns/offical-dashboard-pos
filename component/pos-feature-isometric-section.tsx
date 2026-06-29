// // // "use client";

// // // import { useCallback, useEffect, useState } from "react";
// // // import { AnimatePresence, motion } from "motion/react";
// // // import {
// // //   BarChart3,
// // //   Boxes,
// // //   ReceiptText,
// // //   ShoppingCart,
// // //   UsersRound,
// // // } from "lucide-react";
// // // import { IsometricBox } from "./ui/isometric-box";

// // // type Feature = {
// // //   title: string;
// // //   description: string;
// // //   detail: string;
// // //   icon: React.ElementType;
// // //   tag: string;
// // //   stat: string;
// // // };

// // // const features: Feature[] = [
// // //   {
// // //     title: "Fast Cashier Checkout",
// // //     description:
// // //       "Barcode scan, cart management, payment and receipt printing in one fast workflow.",
// // //     detail:
// // //       "Cashier can scan products, manage cart items, accept payment and print 80mm receipts quickly. This module is designed for supermarket, mini mart and fast retail checkout.",
// // //     icon: ShoppingCart,
// // //     tag: "Cashier",
// // //     stat: "2.4s checkout",
// // //   },
// // //   {
// // //     title: "Inventory Control",
// // //     description:
// // //       "Track stock quantity, low-stock products and product movement for every shop.",
// // //     detail:
// // //       "Stock can be reduced automatically after sales. Owner can check low-stock products, product quantity and shop-specific inventory from one dashboard.",
// // //     icon: Boxes,
// // //     tag: "Stock",
// // //     stat: "Live stock",
// // //   },
// // //   {
// // //     title: "Receipt & Sales History",
// // //     description:
// // //       "Search receipts, reprint bills, export reports and check daily sales quickly.",
// // //     detail:
// // //       "Receipts are saved by shop, cashier, payment method and date. Owner can search receipts, reprint bills and export sales history.",
// // //     icon: ReceiptText,
// // //     tag: "Receipt",
// // //     stat: "80mm print",
// // //   },
// // //   {
// // //     title: "Staff & Role Management",
// // //     description:
// // //       "Control staff accounts, cashier access, admin actions and shop permissions.",
// // //     detail:
// // //       "Owner can assign roles, manage staff access, control cashier actions and track staff activity for each shop.",
// // //     icon: UsersRound,
// // //     tag: "Staff",
// // //     stat: "Role based",
// // //   },
// // //   {
// // //     title: "Business Reports",
// // //     description:
// // //       "See sales, orders, payment methods and shop performance from one dashboard.",
// // //     detail:
// // //       "Reports show daily sales, receipt count, payment totals, product movement and shop performance in a clean dashboard.",
// // //     icon: BarChart3,
// // //     tag: "Report",
// // //     stat: "Daily report",
// // //   },
// // // ];

// // // function FloatingFeatureCard({
// // //   darkMode,
// // //   feature,
// // // }: {
// // //   darkMode: boolean;
// // //   feature: Feature;
// // // }) {
// // //   const Icon = feature.icon;

// // //   return (
// // //     <div
// // //       className={`relative w-[260px] overflow-hidden rounded-2xl border backdrop-blur-2xl md:w-[300px] ${
// // //         darkMode
// // //           ? "border-white/[0.08] bg-[#111215]/75 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
// // //           : "border-white/80 bg-white/90 text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
// // //       }`}
// // //     >
// // //       <div
// // //         className={`flex items-center justify-between border-b px-4 py-3 ${
// // //           darkMode
// // //             ? "border-white/[0.06] bg-white/[0.025]"
// // //             : "border-slate-200 bg-slate-50/80"
// // //         }`}
// // //       >
// // //         <div className="flex items-center gap-2">
// // //           <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
// // //           <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
// // //           <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
// // //         </div>

// // //         <span
// // //           className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// // //             darkMode
// // //               ? "bg-white/[0.06] text-white/55"
// // //               : "bg-slate-100 text-slate-500"
// // //           }`}
// // //         >
// // //           {feature.tag}
// // //         </span>
// // //       </div>

// // //       <div className="p-5">
// // //         <div className="flex gap-4">
// // //           <span
// // //             className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border ${
// // //               darkMode
// // //                 ? "border-white/[0.1] bg-white text-black"
// // //                 : "border-slate-200 bg-slate-950 text-white"
// // //             }`}
// // //           >
// // //             <Icon className="h-5 w-5" />
// // //           </span>

// // //           <div className="min-w-0">
// // //             <h3
// // //               className={`text-base font-black leading-snug ${
// // //                 darkMode ? "text-white" : "text-slate-950"
// // //               }`}
// // //             >
// // //               {feature.title}
// // //             </h3>

// // //             <p
// // //               className={`mt-2 text-xs leading-5 ${
// // //                 darkMode ? "text-white/45" : "text-slate-600"
// // //               }`}
// // //             >
// // //               {feature.description}
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="mt-5 flex flex-wrap items-center gap-2">
// // //           <span
// // //             className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// // //               darkMode
// // //                 ? "bg-emerald-500/[0.08] text-emerald-300"
// // //                 : "bg-emerald-50 text-emerald-700"
// // //             }`}
// // //           >
// // //             POS Ready
// // //           </span>

// // //           <span
// // //             className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// // //               darkMode
// // //                 ? "bg-amber-500/[0.08] text-amber-300"
// // //                 : "bg-amber-50 text-amber-700"
// // //             }`}
// // //           >
// // //             {feature.stat}
// // //           </span>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export function PosFeatureIsometricSection({
// // //   darkMode,
// // // }: {
// // //   darkMode: boolean;
// // // }) {
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const [isBoxOpen, setIsBoxOpen] = useState(true);
// // //   const [showCards, setShowCards] = useState(true);
// // //   const [isChanging, setIsChanging] = useState(false);

// // //   const activeFeature = features[activeIndex];

// // //   const changeFeature = useCallback(
// // //     (nextIndex?: number) => {
// // //       if (isChanging) return;

// // //       setIsChanging(true);

// // //       // 1. Card box ထဲပြန်ဝင်
// // //       setShowCards(false);

// // //       // 2. Box ပိတ်
// // //       window.setTimeout(() => {
// // //         setIsBoxOpen(false);
// // //       }, 280);

// // //       // 3. Feature index ပြောင်း
// // //       window.setTimeout(() => {
// // //         setActiveIndex((prev) => {
// // //           if (typeof nextIndex === "number") return nextIndex;
// // //           return (prev + 1) % features.length;
// // //         });
// // //       }, 720);

// // //       // 4. Box ပြန်ဖွင့်
// // //       window.setTimeout(() => {
// // //         setIsBoxOpen(true);
// // //       }, 920);

// // //       // 5. Card အသစ်ထွက်လာ
// // //       window.setTimeout(() => {
// // //         setShowCards(true);
// // //         setIsChanging(false);
// // //       }, 1220);
// // //     },
// // //     [isChanging]
// // //   );

// // //   useEffect(() => {
// // //     const timer = window.setInterval(() => {
// // //       changeFeature();
// // //     }, 6000);

// // //     return () => window.clearInterval(timer);
// // //   }, [changeFeature]);

// // //   const toggleBox = () => {
// // //     if (isChanging) return;

// // //     if (isBoxOpen) {
// // //       setShowCards(false);

// // //       window.setTimeout(() => {
// // //         setIsBoxOpen(false);
// // //       }, 280);
// // //     } else {
// // //       setIsBoxOpen(true);

// // //       window.setTimeout(() => {
// // //         setShowCards(true);
// // //       }, 300);
// // //     }
// // //   };

// // //   return (
// // //     <section
// // //       id="features"
// // //       className={`relative z-10 overflow-hidden px-5 py-24 md:px-8 lg:px-10 ${
// // //         darkMode ? "bg-[#070707] text-white" : "bg-[#f4f4f5] text-slate-950"
// // //       }`}
// // //     >
// // //       {/* Background */}
// // //       <div className="pointer-events-none absolute inset-0">
// // //         {darkMode ? (
// // //           <>
// // //             <div className="absolute inset-0 bg-[#070707]" />
// // //             <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_44%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.018)_20%,transparent_46%)]" />
// // //             <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:150px_100%] opacity-20" />
// // //             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.15)_52%,rgba(0,0,0,0.62)_100%)]" />
// // //           </>
// // //         ) : (
// // //           <>
// // //             <div className="absolute inset-0 bg-[#f4f4f5]" />
// // //             <div className="absolute left-1/2 top-0 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
// // //             <div className="absolute right-[-12%] top-[18%] h-[420px] w-[420px] rounded-full bg-amber-200/30 blur-3xl" />
// // //             <div className="absolute left-[-10%] bottom-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-200/30 blur-3xl" />
// // //           </>
// // //         )}
// // //       </div>

// // //       <div className="relative mx-auto grid max-w-[88rem] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
// // //         {/* Left */}
// // //         <div>
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 18 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.55 }}
// // //             className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-bold backdrop-blur-xl ${
// // //               darkMode
// // //                 ? "border-white/[0.06] bg-white/[0.03] text-white/62"
// // //                 : "border-slate-200 bg-white/75 text-slate-700"
// // //             }`}
// // //           >
// // //             POS Modules
// // //           </motion.div>

// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 18 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.55, delay: 0.05 }}
// // //             className="max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl"
// // //           >
// // //             Everything your shop needs in one clean system.
// // //           </motion.h2>

// // //           <motion.p
// // //             initial={{ opacity: 0, y: 18 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.55, delay: 0.1 }}
// // //             className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${
// // //               darkMode ? "text-white/52" : "text-slate-600"
// // //             }`}
// // //           >
// // //             Build a complete POS workflow for supermarket, restaurant, fashion
// // //             store and small business operations.
// // //           </motion.p>

// // //           <div className="mt-10 grid gap-4 sm:grid-cols-2">
// // //             {features.map((feature, index) => {
// // //               const Icon = feature.icon;
// // //               const active = activeIndex === index;

// // //               return (
// // //                 <motion.button
// // //                   key={feature.title}
// // //                   type="button"
// // //                   disabled={isChanging}
// // //                   onClick={() => {
// // //                     if (index === activeIndex) {
// // //                       toggleBox();
// // //                       return;
// // //                     }

// // //                     changeFeature(index);
// // //                   }}
// // //                   whileHover={isChanging ? undefined : { y: -6 }}
// // //                   whileTap={isChanging ? undefined : { scale: 0.98 }}
// // //                   className={`group relative overflow-hidden rounded-[1.6rem] border p-5 text-left transition duration-300 disabled:cursor-not-allowed disabled:opacity-80 ${
// // //                     active
// // //                       ? darkMode
// // //                         ? "border-white/[0.12] bg-white/[0.07] shadow-[0_24px_80px_rgba(0,0,0,0.38)]"
// // //                         : "border-slate-300 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
// // //                       : darkMode
// // //                         ? "border-white/[0.055] bg-white/[0.028] hover:border-white/[0.1] hover:bg-white/[0.055]"
// // //                         : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white hover:shadow-xl"
// // //                   }`}
// // //                 >
// // //                   <span
// // //                     className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition duration-300 ${
// // //                       active
// // //                         ? darkMode
// // //                           ? "bg-white/[0.07] opacity-100"
// // //                           : "bg-amber-200/60 opacity-100"
// // //                         : "opacity-0"
// // //                     }`}
// // //                   />

// // //                   <span
// // //                     className={`absolute left-0 top-6 h-12 w-1 rounded-r-full transition ${
// // //                       active ? "bg-white/70 opacity-100" : "opacity-0"
// // //                     }`}
// // //                   />

// // //                   <div className="relative z-10">
// // //                     <div className="mb-5 flex items-start justify-between gap-4">
// // //                       <span
// // //                         className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border transition ${
// // //                           active
// // //                             ? darkMode
// // //                               ? "border-white/[0.14] bg-white text-black"
// // //                               : "border-slate-950/10 bg-slate-950 text-white"
// // //                             : darkMode
// // //                               ? "border-white/[0.08] bg-white/[0.04] text-white/72"
// // //                               : "border-slate-200 bg-slate-50 text-slate-950"
// // //                         }`}
// // //                       >
// // //                         <Icon className="h-5 w-5" />
// // //                       </span>

// // //                       <span
// // //                         className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// // //                           active
// // //                             ? darkMode
// // //                               ? "bg-white/[0.08] text-white/75"
// // //                               : "bg-slate-100 text-slate-700"
// // //                             : darkMode
// // //                               ? "bg-white/[0.045] text-white/42"
// // //                               : "bg-slate-100 text-slate-500"
// // //                         }`}
// // //                       >
// // //                         {feature.tag}
// // //                       </span>
// // //                     </div>

// // //                     <h3
// // //                       className={`text-base font-black leading-snug ${
// // //                         darkMode ? "text-white" : "text-slate-950"
// // //                       }`}
// // //                     >
// // //                       {feature.title}
// // //                     </h3>

// // //                     <p
// // //                       className={`mt-3 text-sm leading-6 ${
// // //                         darkMode ? "text-white/48" : "text-slate-600"
// // //                       }`}
// // //                     >
// // //                       {feature.description}
// // //                     </p>

// // //                     <div className="mt-5 flex flex-wrap items-center gap-2">
// // //                       <span
// // //                         className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// // //                           darkMode
// // //                             ? "bg-emerald-500/[0.08] text-emerald-300"
// // //                             : "bg-emerald-50 text-emerald-700"
// // //                         }`}
// // //                       >
// // //                         {feature.stat}
// // //                       </span>

// // //                       <span
// // //                         className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// // //                           darkMode
// // //                             ? "bg-cyan-500/[0.08] text-cyan-300"
// // //                             : "bg-cyan-50 text-cyan-700"
// // //                         }`}
// // //                       >
// // //                         POS Ready
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 </motion.button>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         {/* Right visual */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 24, scale: 0.98 }}
// // //           whileInView={{ opacity: 1, y: 0, scale: 1 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.65 }}
// // //           className={`relative overflow-hidden rounded-[2rem] border p-5 backdrop-blur-2xl md:p-8 ${
// // //             darkMode
// // //               ? "border-white/[0.05] bg-[#090909]/90 shadow-[0_20px_60px_rgba(0,0,0,0.42)]"
// // //               : "border-white/80 bg-white/72 shadow-[0_30px_100px_rgba(15,23,42,0.12)]"
// // //           }`}
// // //         >
// // //           <div className="pointer-events-none absolute inset-0">
// // //             {darkMode ? (
// // //               <>
// // //                 <div className="absolute inset-0 bg-[#090909]" />
// // //                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.045),transparent_34%)]" />
// // //                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.012] via-transparent to-black/35" />
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(251,191,36,0.18),transparent_34%)]" />
// // //                 <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/50" />
// // //               </>
// // //             )}
// // //           </div>

// // //           <button
// // //             type="button"
// // //             disabled={isChanging}
// // //             onClick={toggleBox}
// // //             className={`absolute right-5 top-5 z-50 rounded-full border px-4 py-2 text-xs font-black backdrop-blur-xl transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${
// // //               darkMode
// // //                 ? "border-white/[0.08] bg-white/[0.05] text-white/75 hover:bg-white/[0.09]"
// // //                 : "border-slate-200 bg-white/80 text-slate-700 hover:bg-white"
// // //             }`}
// // //           >
// // //             {isChanging ? "Changing..." : isBoxOpen ? "Close Box" : "Open Box"}
// // //           </button>

// // //           <div className="relative flex min-h-[540px] items-center justify-center md:min-h-[620px]">
// // //             <motion.div
// // //               className="relative flex h-[520px] w-full max-w-[560px] items-center justify-center [perspective:1300px]"
// // //               animate={{ y: [0, -6, 0] }}
// // //               transition={{
// // //                 duration: 4.5,
// // //                 repeat: Infinity,
// // //                 ease: "easeInOut",
// // //               }}
// // //             >
// // //               <AnimatePresence mode="wait">
// // //                 {showCards && isBoxOpen && (
// // //                   <>
// // //                     {/* glow */}
// // //                     <motion.div
// // //                       key={`glow-${activeIndex}`}
// // //                       initial={{ opacity: 0, scale: 0.7 }}
// // //                       animate={{ opacity: 1, scale: 1 }}
// // //                       exit={{
// // //                         opacity: 0,
// // //                         scale: 0.62,
// // //                         y: 40,
// // //                       }}
// // //                       transition={{ duration: 0.45 }}
// // //                       className={`absolute h-[310px] w-[310px] rounded-full blur-3xl ${
// // //                         darkMode ? "bg-white/[0.035]" : "bg-amber-200/45"
// // //                       }`}
// // //                     />

// // //                     {/* back mini card */}
// // //                     <motion.div
// // //                       key={`mini-${activeIndex}`}
// // //                       initial={{
// // //                         opacity: 0,
// // //                         y: 95,
// // //                         scale: 0.6,
// // //                         rotateX: 16,
// // //                         rotateY: 12,
// // //                         rotateZ: 0,
// // //                       }}
// // //                       animate={{
// // //                         opacity: 0.55,
// // //                         x: -86,
// // //                         y: -120,
// // //                         scale: 0.82,
// // //                         rotateX: 8,
// // //                         rotateY: 16,
// // //                         rotateZ: -5,
// // //                       }}
// // //                       exit={{
// // //                         opacity: 0,
// // //                         x: 0,
// // //                         y: 96,
// // //                         scale: 0.54,
// // //                         rotateX: 24,
// // //                         rotateY: 0,
// // //                         rotateZ: 0,
// // //                       }}
// // //                       transition={{
// // //                         type: "spring",
// // //                         stiffness: 120,
// // //                         damping: 18,
// // //                       }}
// // //                       className="pointer-events-none absolute z-20"
// // //                     >
// // //                       <div
// // //                         className={`w-[220px] rounded-2xl border p-4 backdrop-blur-2xl ${
// // //                           darkMode
// // //                             ? "border-white/[0.07] bg-white/[0.045] text-white"
// // //                             : "border-white/80 bg-white/80 text-slate-950"
// // //                         }`}
// // //                       >
// // //                         <p
// // //                           className={`text-xs leading-5 ${
// // //                             darkMode ? "text-white/42" : "text-slate-500"
// // //                           }`}
// // //                         >
// // //                           Selected module
// // //                         </p>
// // //                         <p
// // //                           className={`mt-2 text-sm font-black ${
// // //                             darkMode ? "text-white/75" : "text-slate-800"
// // //                           }`}
// // //                         >
// // //                           {activeFeature.tag} / {activeFeature.stat}
// // //                         </p>
// // //                       </div>
// // //                     </motion.div>

// // //                     {/* main card */}
// // //                     <motion.div
// // //                       key={`main-${activeIndex}`}
// // //                       initial={{
// // //                         opacity: 0,
// // //                         y: 98,
// // //                         x: 0,
// // //                         scale: 0.54,
// // //                         rotateX: 28,
// // //                         rotateY: -10,
// // //                         filter: "blur(8px)",
// // //                       }}
// // //                       animate={{
// // //                         opacity: 1,
// // //                         y: -155,
// // //                         x: 35,
// // //                         scale: 1,
// // //                         rotateX: 8,
// // //                         rotateY: -12,
// // //                         filter: "blur(0px)",
// // //                       }}
// // //                       exit={{
// // //                         opacity: 0,
// // //                         y: 96,
// // //                         x: 0,
// // //                         scale: 0.48,
// // //                         rotateX: 30,
// // //                         rotateY: -6,
// // //                         filter: "blur(10px)",
// // //                       }}
// // //                       transition={{
// // //                         type: "spring",
// // //                         stiffness: 125,
// // //                         damping: 18,
// // //                       }}
// // //                       className="pointer-events-none absolute z-40 [transform-style:preserve-3d]"
// // //                     >
// // //                       <FloatingFeatureCard
// // //                         darkMode={darkMode}
// // //                         feature={activeFeature}
// // //                       />
// // //                     </motion.div>

// // //                     {/* chip */}
// // //                     <motion.div
// // //                       key={`chip-${activeIndex}`}
// // //                       initial={{ opacity: 0, scale: 0.6, y: 40 }}
// // //                       animate={{
// // //                         opacity: 1,
// // //                         scale: 1,
// // //                         x: 175,
// // //                         y: -42,
// // //                         rotate: 7,
// // //                       }}
// // //                       exit={{
// // //                         opacity: 0,
// // //                         scale: 0.52,
// // //                         x: 0,
// // //                         y: 88,
// // //                         rotate: 0,
// // //                       }}
// // //                       transition={{
// // //                         type: "spring",
// // //                         stiffness: 140,
// // //                         damping: 18,
// // //                       }}
// // //                       className={`pointer-events-none absolute z-30 rounded-full border px-4 py-2 text-xs font-black backdrop-blur-xl ${
// // //                         darkMode
// // //                           ? "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-300"
// // //                           : "border-emerald-200 bg-emerald-50 text-emerald-700"
// // //                       }`}
// // //                     >
// // //                       {activeFeature.stat}
// // //                     </motion.div>
// // //                   </>
// // //                 )}
// // //               </AnimatePresence>

// // //               {/* cube box */}
// // //               <motion.div
// // //                 animate={{
// // //                   y: [82, 88, 82],
// // //                   rotateZ: [-1, 1, -1],
// // //                   rotateY: [5, -5, 5],
// // //                 }}
// // //                 transition={{
// // //                   duration: 5.2,
// // //                   repeat: Infinity,
// // //                   ease: "easeInOut",
// // //                 }}
// // //                 className="relative z-20"
// // //               >
// // //                 <IsometricBox
// // //                   size={285}
// // //                   opened={isBoxOpen}
// // //                   darkMode={darkMode}
// // //                 />
// // //               </motion.div>
// // //             </motion.div>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }





// // "use client";

// // import { useCallback, useEffect, useState } from "react";
// // import { AnimatePresence, motion } from "motion/react";
// // import {
// //   BarChart3,
// //   Boxes,
// //   ReceiptText,
// //   ShoppingCart,
// //   UsersRound,
// // } from "lucide-react";
// // import { IsometricBox } from "./ui/isometric-box";
// // import { TracingBeam } from "@/components/ui/tracing-beam";

// // type Feature = {
// //   title: string;
// //   description: string;
// //   detail: string;
// //   icon: React.ElementType;
// //   tag: string;
// //   stat: string;
// // };

// // type WorkflowContent = {
// //   title: string;
// //   description: React.ReactNode;
// //   badge: string;
// //   image: string;
// // };

// // const features: Feature[] = [
// //   {
// //     title: "Fast Cashier Checkout",
// //     description:
// //       "Barcode scan, cart management, payment and receipt printing in one fast workflow.",
// //     detail:
// //       "Cashier can scan products, manage cart items, accept payment and print 80mm receipts quickly. This module is designed for supermarket, mini mart and fast retail checkout.",
// //     icon: ShoppingCart,
// //     tag: "Cashier",
// //     stat: "2.4s checkout",
// //   },
// //   {
// //     title: "Inventory Control",
// //     description:
// //       "Track stock quantity, low-stock products and product movement for every shop.",
// //     detail:
// //       "Stock can be reduced automatically after sales. Owner can check low-stock products, product quantity and shop-specific inventory from one dashboard.",
// //     icon: Boxes,
// //     tag: "Stock",
// //     stat: "Live stock",
// //   },
// //   {
// //     title: "Receipt & Sales History",
// //     description:
// //       "Search receipts, reprint bills, export reports and check daily sales quickly.",
// //     detail:
// //       "Receipts are saved by shop, cashier, payment method and date. Owner can search receipts, reprint bills and export sales history.",
// //     icon: ReceiptText,
// //     tag: "Receipt",
// //     stat: "80mm print",
// //   },
// //   {
// //     title: "Staff & Role Management",
// //     description:
// //       "Control staff accounts, cashier access, admin actions and shop permissions.",
// //     detail:
// //       "Owner can assign roles, manage staff access, control cashier actions and track staff activity for each shop.",
// //     icon: UsersRound,
// //     tag: "Staff",
// //     stat: "Role based",
// //   },
// //   {
// //     title: "Business Reports",
// //     description:
// //       "See sales, orders, payment methods and shop performance from one dashboard.",
// //     detail:
// //       "Reports show daily sales, receipt count, payment totals, product movement and shop performance in a clean dashboard.",
// //     icon: BarChart3,
// //     tag: "Report",
// //     stat: "Daily report",
// //   },
// // ];

// // const workflowContent: WorkflowContent[] = [
// //   {
// //     title: "Fast cashier checkout",
// //     description: (
// //       <>
// //         <p>
// //           Cashier can scan products, add items to cart, receive payment and
// //           print receipts in a simple checkout flow.
// //         </p>

// //         <p>
// //           This helps mini marts, supermarkets and retail shops sell faster
// //           during busy hours.
// //         </p>
// //       </>
// //     ),
// //     badge: "Checkout",
// //     image:
// //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600",
// //   },
// //   {
// //     title: "Inventory and stock control",
// //     description: (
// //       <>
// //         <p>
// //           Products, stock quantity, low-stock items and shop-specific inventory
// //           can be managed from one clean dashboard.
// //         </p>

// //         <p>
// //           After sales, stock can be reduced automatically so the owner can check
// //           product movement more easily.
// //         </p>
// //       </>
// //     ),
// //     badge: "Inventory",
// //     image:
// //       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
// //   },
// //   {
// //     title: "Receipts and sales reports",
// //     description: (
// //       <>
// //         <p>
// //           Every receipt can be saved with cashier, shop, payment method and
// //           sales date.
// //         </p>

// //         <p>
// //           Owner can search receipts, reprint bills and check daily sales reports
// //           without complicated steps.
// //         </p>
// //       </>
// //     ),
// //     badge: "Reports",
// //     image:
// //       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
// //   },
// // ];

// // function FloatingFeatureCard({
// //   darkMode,
// //   feature,
// // }: {
// //   darkMode: boolean;
// //   feature: Feature;
// // }) {
// //   const Icon = feature.icon;

// //   return (
// //     <div
// //       className={`relative w-[260px] overflow-hidden rounded-2xl border backdrop-blur-md md:w-[300px] ${
// //         darkMode
// //           ? "border-white/[0.16] bg-[#101827]/95 text-white shadow-[0_28px_80px_rgba(0,0,0,0.58)]"
// //           : "border-white/80 bg-white/90 text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
// //       }`}
// //     >
// //       <div
// //         className={`flex items-center justify-between border-b px-4 py-3 ${
// //           darkMode
// //             ? "border-white/[0.12] bg-white/[0.04]"
// //             : "border-slate-200 bg-slate-50/80"
// //         }`}
// //       >
// //         <div className="flex items-center gap-2">
// //           <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
// //           <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
// //           <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
// //         </div>

// //         <span
// //           className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// //             darkMode
// //               ? "bg-white/[0.08] text-slate-300"
// //               : "bg-slate-100 text-slate-500"
// //           }`}
// //         >
// //           {feature.tag}
// //         </span>
// //       </div>

// //       <div className="p-5">
// //         <div className="flex gap-4">
// //           <span
// //             className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border ${
// //               darkMode
// //                 ? "border-white/[0.16] bg-white text-black shadow-[0_10px_28px_rgba(255,255,255,0.12)]"
// //                 : "border-slate-200 bg-slate-950 text-white"
// //             }`}
// //           >
// //             <Icon className="h-5 w-5" />
// //           </span>

// //           <div className="min-w-0">
// //             <h3
// //               className={`text-base font-black leading-snug ${
// //                 darkMode ? "text-white" : "text-slate-950"
// //               }`}
// //             >
// //               {feature.title}
// //             </h3>

// //             <p
// //               className={`mt-2 text-xs leading-5 ${
// //                 darkMode ? "text-slate-300" : "text-slate-600"
// //               }`}
// //             >
// //               {feature.description}
// //             </p>
// //           </div>
// //         </div>

// //         <div className="mt-5 flex flex-wrap items-center gap-2">
// //           <span
// //             className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// //               darkMode
// //                 ? "bg-emerald-500/[0.14] text-emerald-300 ring-1 ring-emerald-400/15"
// //                 : "bg-emerald-50 text-emerald-700"
// //             }`}
// //           >
// //             POS Ready
// //           </span>

// //           <span
// //             className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// //               darkMode
// //                 ? "bg-amber-500/[0.14] text-amber-300 ring-1 ring-amber-400/15"
// //                 : "bg-amber-50 text-amber-700"
// //             }`}
// //           >
// //             {feature.stat}
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function TracingBeamContent({ darkMode }: { darkMode: boolean }) {
// //   return (
// //     <div className="relative mx-auto mt-28 max-w-[88rem] border-t border-transparent pt-24">
// //       <div
// //         className={`pointer-events-none absolute left-0 right-0 top-0 h-px ${
// //           darkMode
// //             ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
// //             : "bg-gradient-to-r from-transparent via-slate-300 to-transparent"
// //         }`}
// //       />

// //       <div className="mb-14 max-w-3xl">
// //         <motion.div
// //           initial={{ opacity: 0, y: 18 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.55 }}
// //           className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-bold backdrop-blur-md ${
// //             darkMode
// //               ? "border-white/[0.14] bg-white/[0.06] text-slate-200 shadow-[0_10px_36px_rgba(0,0,0,0.28)]"
// //               : "border-slate-200 bg-white/75 text-slate-700"
// //           }`}
// //         >
// //           POS Workflow
// //         </motion.div>

// //         <motion.h2
// //           initial={{ opacity: 0, y: 18 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.55, delay: 0.05 }}
// //           className={`text-4xl font-black tracking-[-0.04em] md:text-6xl ${
// //             darkMode ? "text-white" : "text-slate-950"
// //           }`}
// //         >
// //           A cleaner way to run your shop every day.
// //         </motion.h2>

// //         <motion.p
// //           initial={{ opacity: 0, y: 18 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.55, delay: 0.1 }}
// //           className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${
// //             darkMode ? "text-slate-300" : "text-slate-600"
// //           }`}
// //         >
// //           From checkout to inventory and reports, each POS module is designed to
// //           make daily shop operations faster and easier.
// //         </motion.p>
// //       </div>

// //       <TracingBeam className="px-0 md:px-6">
// //         <div className="relative mx-auto max-w-2xl antialiased">
// //           {workflowContent.map((item, index) => (
// //             <motion.div
// //               key={`workflow-${index}`}
// //               initial={{ opacity: 0, y: 18 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.55, delay: index * 0.06 }}
// //               className={`mb-14 rounded-[1.6rem] border p-5 backdrop-blur-md ${
// //                 darkMode
// //                   ? "border-white/[0.12] bg-[#0f172a]/80 shadow-[0_18px_56px_rgba(0,0,0,0.38)]"
// //                   : "border-slate-200 bg-white/70 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
// //               }`}
// //             >
// //               <h3
// //                 className={`mb-4 w-fit rounded-full px-4 py-1 text-sm font-black ${
// //                   darkMode
// //                     ? "bg-white text-slate-950"
// //                     : "bg-slate-950 text-white"
// //                 }`}
// //               >
// //                 {item.badge}
// //               </h3>

// //               <p
// //                 className={`mb-4 text-xl font-black tracking-tight md:text-2xl ${
// //                   darkMode ? "text-white" : "text-slate-950"
// //                 }`}
// //               >
// //                 {item.title}
// //               </p>

// //               <div
// //                 className={`prose prose-sm max-w-none text-sm leading-7 ${
// //                   darkMode ? "prose-invert text-slate-300" : "text-slate-700"
// //                 }`}
// //               >
// //                 {item.image && (
// //                   <img
// //                     src={item.image}
// //                     alt={item.title}
// //                     height="1000"
// //                     width="1000"
// //                     className={`mb-10 rounded-2xl border object-cover shadow-xl ${
// //                       darkMode ? "border-white/10" : "border-slate-200"
// //                     }`}
// //                   />
// //                 )}

// //                 {item.description}
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </TracingBeam>
// //     </div>
// //   );
// // }

// // export function PosFeatureIsometricSection({
// //   darkMode,
// // }: {
// //   darkMode: boolean;
// // }) {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [isBoxOpen, setIsBoxOpen] = useState(true);
// //   const [showCards, setShowCards] = useState(true);
// //   const [isChanging, setIsChanging] = useState(false);

// //   const activeFeature = features[activeIndex];

// //   const changeFeature = useCallback(
// //     (nextIndex?: number) => {
// //       if (isChanging) return;

// //       setIsChanging(true);

// //       setShowCards(false);

// //       window.setTimeout(() => {
// //         setIsBoxOpen(false);
// //       }, 280);

// //       window.setTimeout(() => {
// //         setActiveIndex((prev) => {
// //           if (typeof nextIndex === "number") return nextIndex;
// //           return (prev + 1) % features.length;
// //         });
// //       }, 720);

// //       window.setTimeout(() => {
// //         setIsBoxOpen(true);
// //       }, 920);

// //       window.setTimeout(() => {
// //         setShowCards(true);
// //         setIsChanging(false);
// //       }, 1220);
// //     },
// //     [isChanging]
// //   );

// //   useEffect(() => {
// //     const timer = window.setInterval(() => {
// //       changeFeature();
// //     }, 6000);

// //     return () => window.clearInterval(timer);
// //   }, [changeFeature]);

// //   const toggleBox = () => {
// //     if (isChanging) return;

// //     if (isBoxOpen) {
// //       setShowCards(false);

// //       window.setTimeout(() => {
// //         setIsBoxOpen(false);
// //       }, 280);
// //     } else {
// //       setIsBoxOpen(true);

// //       window.setTimeout(() => {
// //         setShowCards(true);
// //       }, 300);
// //     }
// //   };

// //   return (
// //     <section
// //       id="features"
// //       className={`relative z-10 overflow-hidden px-5 py-24 md:px-8 lg:px-10 ${
// //         darkMode ? "bg-[#080b12] text-white" : "bg-[#f4f4f5] text-slate-950"
// //       }`}
// //     >
// //       {/* One shared background for both Feature section and TracingBeam section */}
// //       <div className="pointer-events-none absolute inset-0">
// //         {darkMode ? (
// //           <>
// //             <div className="absolute inset-0 bg-[#080b12]" />
// //             <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(59,130,246,0.16)_0%,rgba(14,165,233,0.08)_24%,transparent_52%)]" />
// //             <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_80%,rgba(16,185,129,0.10)_0%,transparent_42%)]" />
// //             <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:120px_100%] opacity-25" />
// //             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_120px] opacity-20" />
// //             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(8,11,18,0.2)_58%,rgba(3,6,12,0.72)_100%)]" />
// //           </>
// //         ) : (
// //           <>
// //             <div className="absolute inset-0 bg-[#f4f4f5]" />
// //             <div className="absolute left-1/2 top-0 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
// //             <div className="absolute right-[-12%] top-[18%] h-[420px] w-[420px] rounded-full bg-amber-200/30 blur-3xl" />
// //             <div className="absolute left-[-10%] bottom-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-200/30 blur-3xl" />
// //           </>
// //         )}
// //       </div>

// //       <div className="relative mx-auto grid max-w-[88rem] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
// //         {/* Left */}
// //         <div>
// //           <motion.div
// //             initial={{ opacity: 0, y: 18 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.55 }}
// //             className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-bold backdrop-blur-md ${
// //               darkMode
// //                 ? "border-white/[0.14] bg-white/[0.06] text-slate-200 shadow-[0_10px_36px_rgba(0,0,0,0.28)]"
// //                 : "border-slate-200 bg-white/75 text-slate-700"
// //             }`}
// //           >
// //             POS Modules
// //           </motion.div>

// //           <motion.h2
// //             initial={{ opacity: 0, y: 18 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.55, delay: 0.05 }}
// //             className={`max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl ${
// //               darkMode ? "text-white" : "text-slate-950"
// //             }`}
// //           >
// //             Everything your shop needs in one clean system.
// //           </motion.h2>

// //           <motion.p
// //             initial={{ opacity: 0, y: 18 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.55, delay: 0.1 }}
// //             className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${
// //               darkMode ? "text-slate-300" : "text-slate-600"
// //             }`}
// //           >
// //             Build a complete POS workflow for supermarket, restaurant, fashion
// //             store and small business operations.
// //           </motion.p>

// //           <div className="mt-10 grid gap-4 sm:grid-cols-2">
// //             {features.map((feature, index) => {
// //               const Icon = feature.icon;
// //               const active = activeIndex === index;

// //               return (
// //                 <motion.button
// //                   key={feature.title}
// //                   type="button"
// //                   disabled={isChanging}
// //                   onClick={() => {
// //                     if (index === activeIndex) {
// //                       toggleBox();
// //                       return;
// //                     }

// //                     changeFeature(index);
// //                   }}
// //                   whileHover={isChanging ? undefined : { y: -6 }}
// //                   whileTap={isChanging ? undefined : { scale: 0.98 }}
// //                   className={`group relative overflow-hidden rounded-[1.6rem] border p-5 text-left transition duration-300 disabled:cursor-not-allowed disabled:opacity-80 ${
// //                     active
// //                       ? darkMode
// //                         ? "border-white/[0.18] bg-[#111827]/95 shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
// //                         : "border-slate-300 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
// //                       : darkMode
// //                         ? "border-white/[0.12] bg-[#0f172a]/80 hover:border-white/[0.2] hover:bg-[#172033]/95 hover:shadow-[0_18px_56px_rgba(0,0,0,0.42)]"
// //                         : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white hover:shadow-xl"
// //                   }`}
// //                 >
// //                   <span
// //                     className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-xl transition duration-300 ${
// //                       active
// //                         ? darkMode
// //                           ? "bg-blue-400/[0.14] opacity-100"
// //                           : "bg-amber-200/60 opacity-100"
// //                         : "opacity-0"
// //                     }`}
// //                   />

// //                   <span
// //                     className={`absolute left-0 top-6 h-12 w-1 rounded-r-full transition ${
// //                       active
// //                         ? darkMode
// //                           ? "bg-blue-300 opacity-100"
// //                           : "bg-slate-950 opacity-100"
// //                         : "opacity-0"
// //                     }`}
// //                   />

// //                   <div className="relative z-10">
// //                     <div className="mb-5 flex items-start justify-between gap-4">
// //                       <span
// //                         className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border transition ${
// //                           active
// //                             ? darkMode
// //                               ? "border-white/[0.16] bg-white text-black shadow-[0_10px_28px_rgba(255,255,255,0.12)]"
// //                               : "border-slate-950/10 bg-slate-950 text-white"
// //                             : darkMode
// //                               ? "border-white/[0.14] bg-white/[0.08] text-slate-100"
// //                               : "border-slate-200 bg-slate-50 text-slate-950"
// //                         }`}
// //                       >
// //                         <Icon className="h-5 w-5" />
// //                       </span>

// //                       <span
// //                         className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// //                           active
// //                             ? darkMode
// //                               ? "bg-white/[0.1] text-slate-200"
// //                               : "bg-slate-100 text-slate-700"
// //                             : darkMode
// //                               ? "bg-white/[0.07] text-slate-400"
// //                               : "bg-slate-100 text-slate-500"
// //                         }`}
// //                       >
// //                         {feature.tag}
// //                       </span>
// //                     </div>

// //                     <h3
// //                       className={`text-base font-black leading-snug ${
// //                         darkMode ? "text-white" : "text-slate-950"
// //                       }`}
// //                     >
// //                       {feature.title}
// //                     </h3>

// //                     <p
// //                       className={`mt-3 text-sm leading-6 ${
// //                         darkMode ? "text-slate-300" : "text-slate-600"
// //                       }`}
// //                     >
// //                       {feature.description}
// //                     </p>

// //                     <div className="mt-5 flex flex-wrap items-center gap-2">
// //                       <span
// //                         className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// //                           darkMode
// //                             ? "bg-emerald-500/[0.14] text-emerald-300 ring-1 ring-emerald-400/15"
// //                             : "bg-emerald-50 text-emerald-700"
// //                         }`}
// //                       >
// //                         {feature.stat}
// //                       </span>

// //                       <span
// //                         className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
// //                           darkMode
// //                             ? "bg-cyan-500/[0.14] text-cyan-300 ring-1 ring-cyan-400/15"
// //                             : "bg-cyan-50 text-cyan-700"
// //                         }`}
// //                       >
// //                         POS Ready
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </motion.button>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* Right visual */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 24, scale: 0.98 }}
// //           whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.65 }}
// //           className={`relative overflow-hidden rounded-[2rem] border p-5 backdrop-blur-md md:p-8 ${
// //             darkMode
// //               ? "border-white/[0.14] bg-[#0b1220]/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
// //               : "border-white/80 bg-white/72 shadow-[0_30px_100px_rgba(15,23,42,0.12)]"
// //           }`}
// //         >
// //           <div className="pointer-events-none absolute inset-0">
// //             {darkMode ? (
// //               <>
// //                 <div className="absolute inset-0 bg-[#0b1220]" />
// //                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.14),transparent_42%)]" />
// //                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_72%,rgba(16,185,129,0.09),transparent_36%)]" />
// //                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/30" />
// //               </>
// //             ) : (
// //               <>
// //                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(251,191,36,0.18),transparent_34%)]" />
// //                 <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/50" />
// //               </>
// //             )}
// //           </div>

// //           <button
// //             type="button"
// //             disabled={isChanging}
// //             onClick={toggleBox}
// //             className={`absolute right-5 top-5 z-50 rounded-full border px-4 py-2 text-xs font-black backdrop-blur-md transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${
// //               darkMode
// //                 ? "border-white/[0.14] bg-white/[0.08] text-slate-200 hover:bg-white/[0.12]"
// //                 : "border-slate-200 bg-white/80 text-slate-700 hover:bg-white"
// //             }`}
// //           >
// //             {isChanging ? "Changing..." : isBoxOpen ? "Close Box" : "Open Box"}
// //           </button>

// //           <div className="relative flex min-h-[540px] items-center justify-center md:min-h-[620px]">
// //             <motion.div
// //               className="relative flex h-[520px] w-full max-w-[560px] items-center justify-center [perspective:1300px]"
// //               animate={{ y: [0, -6, 0] }}
// //               transition={{
// //                 duration: 4.5,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //             >
// //               <AnimatePresence mode="wait">
// //                 {showCards && isBoxOpen && (
// //                   <>
// //                     <motion.div
// //                       key={`glow-${activeIndex}`}
// //                       initial={{ opacity: 0, scale: 0.7 }}
// //                       animate={{ opacity: 1, scale: 1 }}
// //                       exit={{
// //                         opacity: 0,
// //                         scale: 0.62,
// //                         y: 40,
// //                       }}
// //                       transition={{ duration: 0.45 }}
// //                       className={`absolute h-[310px] w-[310px] rounded-full blur-xl ${
// //                         darkMode ? "bg-blue-400/[0.12]" : "bg-amber-200/45"
// //                       }`}
// //                     />

// //                     <motion.div
// //                       key={`mini-${activeIndex}`}
// //                       initial={{
// //                         opacity: 0,
// //                         y: 95,
// //                         scale: 0.6,
// //                         rotateX: 16,
// //                         rotateY: 12,
// //                         rotateZ: 0,
// //                       }}
// //                       animate={{
// //                         opacity: 0.72,
// //                         x: -86,
// //                         y: -120,
// //                         scale: 0.82,
// //                         rotateX: 8,
// //                         rotateY: 16,
// //                         rotateZ: -5,
// //                       }}
// //                       exit={{
// //                         opacity: 0,
// //                         x: 0,
// //                         y: 96,
// //                         scale: 0.54,
// //                         rotateX: 24,
// //                         rotateY: 0,
// //                         rotateZ: 0,
// //                       }}
// //                       transition={{
// //                         type: "spring",
// //                         stiffness: 120,
// //                         damping: 18,
// //                       }}
// //                       className="pointer-events-none absolute z-20"
// //                     >
// //                       <div
// //                         className={`w-[220px] rounded-2xl border p-4 backdrop-blur-md ${
// //                           darkMode
// //                             ? "border-white/[0.14] bg-[#111827]/90 text-white shadow-[0_18px_55px_rgba(0,0,0,0.35)]"
// //                             : "border-white/80 bg-white/80 text-slate-950"
// //                         }`}
// //                       >
// //                         <p
// //                           className={`text-xs leading-5 ${
// //                             darkMode ? "text-slate-400" : "text-slate-500"
// //                           }`}
// //                         >
// //                           Selected module
// //                         </p>
// //                         <p
// //                           className={`mt-2 text-sm font-black ${
// //                             darkMode ? "text-slate-100" : "text-slate-800"
// //                           }`}
// //                         >
// //                           {activeFeature.tag} / {activeFeature.stat}
// //                         </p>
// //                       </div>
// //                     </motion.div>

// //                     <motion.div
// //                       key={`main-${activeIndex}`}
// //                       initial={{
// //                         opacity: 0,
// //                         y: 98,
// //                         x: 0,
// //                         scale: 0.54,
// //                         rotateX: 28,
// //                         rotateY: -10,
// //                         filter: "blur(2px)",
// //                       }}
// //                       animate={{
// //                         opacity: 1,
// //                         y: -155,
// //                         x: 35,
// //                         scale: 1,
// //                         rotateX: 8,
// //                         rotateY: -12,
// //                         filter: "blur(0px)",
// //                       }}
// //                       exit={{
// //                         opacity: 0,
// //                         y: 96,
// //                         x: 0,
// //                         scale: 0.48,
// //                         rotateX: 30,
// //                         rotateY: -6,
// //                         filter: "blur(3px)",
// //                       }}
// //                       transition={{
// //                         type: "spring",
// //                         stiffness: 125,
// //                         damping: 18,
// //                       }}
// //                       className="pointer-events-none absolute z-40 [transform-style:preserve-3d]"
// //                     >
// //                       <FloatingFeatureCard
// //                         darkMode={darkMode}
// //                         feature={activeFeature}
// //                       />
// //                     </motion.div>

// //                     <motion.div
// //                       key={`chip-${activeIndex}`}
// //                       initial={{ opacity: 0, scale: 0.6, y: 40 }}
// //                       animate={{
// //                         opacity: 1,
// //                         scale: 1,
// //                         x: 175,
// //                         y: -42,
// //                         rotate: 7,
// //                       }}
// //                       exit={{
// //                         opacity: 0,
// //                         scale: 0.52,
// //                         x: 0,
// //                         y: 88,
// //                         rotate: 0,
// //                       }}
// //                       transition={{
// //                         type: "spring",
// //                         stiffness: 140,
// //                         damping: 18,
// //                       }}
// //                       className={`pointer-events-none absolute z-30 rounded-full border px-4 py-2 text-xs font-black backdrop-blur-md ${
// //                         darkMode
// //                           ? "border-emerald-400/25 bg-emerald-400/[0.12] text-emerald-300 shadow-[0_14px_40px_rgba(16,185,129,0.12)]"
// //                           : "border-emerald-200 bg-emerald-50 text-emerald-700"
// //                       }`}
// //                     >
// //                       {activeFeature.stat}
// //                     </motion.div>
// //                   </>
// //                 )}
// //               </AnimatePresence>

// //               <motion.div
// //                 animate={{
// //                   y: [82, 88, 82],
// //                   rotateZ: [-1, 1, -1],
// //                   rotateY: [5, -5, 5],
// //                 }}
// //                 transition={{
// //                   duration: 5.2,
// //                   repeat: Infinity,
// //                   ease: "easeInOut",
// //                 }}
// //                 className="relative z-20"
// //               >
// //                 <IsometricBox
// //                   size={285}
// //                   opened={isBoxOpen}
// //                   darkMode={darkMode}
// //                 />
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       <TracingBeamContent darkMode={darkMode} />
// //     </section>
// //   );
// // }



















// "use client";

// import { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import {
//   BarChart3,
//   Boxes,
//   ReceiptText,
//   ShoppingCart,
//   UsersRound,
// } from "lucide-react";

// import { IsometricBox } from "./ui/isometric-box";
// import { TracingBeam } from "@/components/ui/tracing-beam";
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// type Feature = {
//   title: string;
//   description: string;
//   detail: string;
//   icon: React.ElementType;
//   tag: string;
//   stat: string;
// };

// type WorkflowContent = {
//   title: string;
//   description: React.ReactNode;
//   badge: string;
//   image: string;
// };

// const features: Feature[] = [
//   {
//     title: "Fast Cashier Checkout",
//     description:
//       "Barcode scan, cart management, payment and receipt printing in one fast workflow.",
//     detail:
//       "Cashier can scan products, manage cart items, accept payment and print 80mm receipts quickly. This module is designed for supermarket, mini mart and fast retail checkout.",
//     icon: ShoppingCart,
//     tag: "Cashier",
//     stat: "2.4s checkout",
//   },
//   {
//     title: "Inventory Control",
//     description:
//       "Track stock quantity, low-stock products and product movement for every shop.",
//     detail:
//       "Stock can be reduced automatically after sales. Owner can check low-stock products, product quantity and shop-specific inventory from one dashboard.",
//     icon: Boxes,
//     tag: "Stock",
//     stat: "Live stock",
//   },
//   {
//     title: "Receipt & Sales History",
//     description:
//       "Search receipts, reprint bills, export reports and check daily sales quickly.",
//     detail:
//       "Receipts are saved by shop, cashier, payment method and date. Owner can search receipts, reprint bills and export sales history.",
//     icon: ReceiptText,
//     tag: "Receipt",
//     stat: "80mm print",
//   },
//   {
//     title: "Staff & Role Management",
//     description:
//       "Control staff accounts, cashier access, admin actions and shop permissions.",
//     detail:
//       "Owner can assign roles, manage staff access, control cashier actions and track staff activity for each shop.",
//     icon: UsersRound,
//     tag: "Staff",
//     stat: "Role based",
//   },
//   {
//     title: "Business Reports",
//     description:
//       "See sales, orders, payment methods and shop performance from one dashboard.",
//     detail:
//       "Reports show daily sales, receipt count, payment totals, product movement and shop performance in a clean dashboard.",
//     icon: BarChart3,
//     tag: "Report",
//     stat: "Daily report",
//   },
// ];

// const workflowContent: WorkflowContent[] = [
//   {
//     title: "Fast cashier checkout",
//     description: (
//       <>
//         <p>
//           Cashier can scan products, add items to cart, receive payment and
//           print receipts in a simple checkout flow.
//         </p>

//         <p>
//           This helps mini marts, supermarkets and retail shops sell faster
//           during busy hours.
//         </p>
//       </>
//     ),
//     badge: "Checkout",
//     image:
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600",
//   },
//   {
//     title: "Inventory and stock control",
//     description: (
//       <>
//         <p>
//           Products, stock quantity, low-stock items and shop-specific inventory
//           can be managed from one clean dashboard.
//         </p>

//         <p>
//           After sales, stock can be reduced automatically so the owner can check
//           product movement more easily.
//         </p>
//       </>
//     ),
//     badge: "Inventory",
//     image:
//       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
//   },
//   {
//     title: "Receipts and sales reports",
//     description: (
//       <>
//         <p>
//           Every receipt can be saved with cashier, shop, payment method and
//           sales date.
//         </p>

//         <p>
//           Owner can search receipts, reprint bills and check daily sales reports
//           without complicated steps.
//         </p>
//       </>
//     ),
//     badge: "Reports",
//     image:
//       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
//   },
// ];

// const testimonials = [
//   {
//     quote:
//       "The POS checkout flow is fast and simple. Our cashier team can scan products, manage carts and print receipts without confusion.",
//     name: "Sarah Chen",
//     designation: "Mini Mart Owner",
//     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
//   },
//   {
//     quote:
//       "Inventory tracking became much easier. Low stock, product movement and daily sales are now clear from one dashboard.",
//     name: "Michael Rodriguez",
//     designation: "Retail Operations Manager",
//     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
//   },
//   {
//     quote:
//       "The restaurant order workflow helped us manage tables, kitchen orders and payments more smoothly during busy hours.",
//     name: "Emily Watson",
//     designation: "Restaurant Manager",
//     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
//   },
//   {
//     quote:
//       "Receipt history and reports save a lot of time. We can search, reprint and check daily sales without complicated steps.",
//     name: "James Kim",
//     designation: "Shop Admin",
//     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
//   },
//   {
//     quote:
//       "The system is clean, fast and suitable for growing shops. Staff roles and shop-based data control are very useful.",
//     name: "Lisa Thompson",
//     designation: "Business Owner",
//     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
//   },
// ];

// function FloatingFeatureCard({
//   darkMode,
//   feature,
// }: {
//   darkMode: boolean;
//   feature: Feature;
// }) {
//   const Icon = feature.icon;

//   return (
//     <div
//       className={`relative w-[260px] overflow-hidden rounded-2xl border backdrop-blur-md md:w-[300px] ${
//         darkMode
//           ? "border-white/[0.16] bg-[#101827]/95 text-white shadow-[0_28px_80px_rgba(0,0,0,0.58)]"
//           : "border-white/80 bg-white/90 text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
//       }`}
//     >
//       <div
//         className={`flex items-center justify-between border-b px-4 py-3 ${
//           darkMode
//             ? "border-white/[0.12] bg-white/[0.04]"
//             : "border-slate-200 bg-slate-50/80"
//         }`}
//       >
//         <div className="flex items-center gap-2">
//           <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
//           <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
//           <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
//         </div>

//         <span
//           className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
//             darkMode
//               ? "bg-white/[0.08] text-slate-300"
//               : "bg-slate-100 text-slate-500"
//           }`}
//         >
//           {feature.tag}
//         </span>
//       </div>

//       <div className="p-5">
//         <div className="flex gap-4">
//           <span
//             className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border ${
//               darkMode
//                 ? "border-white/[0.16] bg-white text-black shadow-[0_10px_28px_rgba(255,255,255,0.12)]"
//                 : "border-slate-200 bg-slate-950 text-white"
//             }`}
//           >
//             <Icon className="h-5 w-5" />
//           </span>

//           <div className="min-w-0">
//             <h3
//               className={`text-base font-black leading-snug ${
//                 darkMode ? "text-white" : "text-slate-950"
//               }`}
//             >
//               {feature.title}
//             </h3>

//             <p
//               className={`mt-2 text-xs leading-5 ${
//                 darkMode ? "text-slate-300" : "text-slate-600"
//               }`}
//             >
//               {feature.description}
//             </p>
//           </div>
//         </div>

//         <div className="mt-5 flex flex-wrap items-center gap-2">
//           <span
//             className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
//               darkMode
//                 ? "bg-emerald-500/[0.14] text-emerald-300 ring-1 ring-emerald-400/15"
//                 : "bg-emerald-50 text-emerald-700"
//             }`}
//           >
//             POS Ready
//           </span>

//           <span
//             className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
//               darkMode
//                 ? "bg-amber-500/[0.14] text-amber-300 ring-1 ring-amber-400/15"
//                 : "bg-amber-50 text-amber-700"
//             }`}
//           >
//             {feature.stat}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function TracingBeamContent({ darkMode }: { darkMode: boolean }) {
//   return (
//     <div className="relative mx-auto mt-28 max-w-[88rem] border-t border-transparent pt-24">
//       <div
//         className={`pointer-events-none absolute left-0 right-0 top-0 h-px ${
//           darkMode
//             ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
//             : "bg-gradient-to-r from-transparent via-slate-300 to-transparent"
//         }`}
//       />

//       <div className="mb-14 max-w-3xl">
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55 }}
//           className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-bold backdrop-blur-md ${
//             darkMode
//               ? "border-white/[0.14] bg-white/[0.06] text-slate-200 shadow-[0_10px_36px_rgba(0,0,0,0.28)]"
//               : "border-slate-200 bg-white/75 text-slate-700"
//           }`}
//         >
//           POS Workflow
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55, delay: 0.05 }}
//           className={`text-4xl font-black tracking-[-0.04em] md:text-6xl ${
//             darkMode ? "text-white" : "text-slate-950"
//           }`}
//         >
//           A cleaner way to run your shop every day.
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55, delay: 0.1 }}
//           className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${
//             darkMode ? "text-slate-300" : "text-slate-600"
//           }`}
//         >
//           From checkout to inventory and reports, each POS module is designed to
//           make daily shop operations faster and easier.
//         </motion.p>
//       </div>

//       <TracingBeam className="px-0 md:px-6">
//         <div className="relative mx-auto max-w-2xl antialiased">
//           {workflowContent.map((item, index) => (
//             <motion.div
//               key={`workflow-${index}`}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.55, delay: index * 0.06 }}
//               className={`mb-14 rounded-[1.6rem] border p-5 backdrop-blur-md ${
//                 darkMode
//                   ? "border-white/[0.12] bg-[#0f172a]/80 shadow-[0_18px_56px_rgba(0,0,0,0.38)]"
//                   : "border-slate-200 bg-white/70 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
//               }`}
//             >
//               <h3
//                 className={`mb-4 w-fit rounded-full px-4 py-1 text-sm font-black ${
//                   darkMode
//                     ? "bg-white text-slate-950"
//                     : "bg-slate-950 text-white"
//                 }`}
//               >
//                 {item.badge}
//               </h3>

//               <p
//                 className={`mb-4 text-xl font-black tracking-tight md:text-2xl ${
//                   darkMode ? "text-white" : "text-slate-950"
//                 }`}
//               >
//                 {item.title}
//               </p>

//               <div
//                 className={`prose prose-sm max-w-none text-sm leading-7 ${
//                   darkMode ? "prose-invert text-slate-300" : "text-slate-700"
//                 }`}
//               >
//                 {item.image && (
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     height="1000"
//                     width="1000"
//                     className={`mb-10 rounded-2xl border object-cover shadow-xl ${
//                       darkMode ? "border-white/10" : "border-slate-200"
//                     }`}
//                   />
//                 )}

//                 {item.description}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </TracingBeam>
//     </div>
//   );
// }

// function TestimonialsContent({ darkMode }: { darkMode: boolean }) {
//   return (
//     <div className="relative mx-auto mt-28 max-w-[88rem] border-t border-transparent pt-24">
//       <div
//         className={`pointer-events-none absolute left-0 right-0 top-0 h-px ${
//           darkMode
//             ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
//             : "bg-gradient-to-r from-transparent via-slate-300 to-transparent"
//         }`}
//       />

//       <div className="mb-14 max-w-3xl">
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55 }}
//           className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-bold backdrop-blur-md ${
//             darkMode
//               ? "border-white/[0.14] bg-white/[0.06] text-slate-200 shadow-[0_10px_36px_rgba(0,0,0,0.28)]"
//               : "border-slate-200 bg-white/75 text-slate-700"
//           }`}
//         >
//           Customer Stories
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55, delay: 0.05 }}
//           className={`text-4xl font-black tracking-[-0.04em] md:text-6xl ${
//             darkMode ? "text-white" : "text-slate-950"
//           }`}
//         >
//           Trusted by shops that need faster daily operations.
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55, delay: 0.1 }}
//           className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${
//             darkMode ? "text-slate-300" : "text-slate-600"
//           }`}
//         >
//           See how supermarket, restaurant and retail teams use Sakura POS to
//           make checkout, inventory and reporting easier.
//         </motion.p>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 22 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.65 }}
//         className={`relative overflow-hidden rounded-[2rem] border backdrop-blur-md ${
//           darkMode
//             ? "border-white/[0.14] bg-[#0b1220]/70 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
//             : "border-white/80 bg-white/70 shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
//         }`}
//       >
//         <div className="pointer-events-none absolute inset-0">
//           {darkMode ? (
//             <>
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(59,130,246,0.12),transparent_42%)]" />
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_80%,rgba(16,185,129,0.10),transparent_38%)]" />
//             </>
//           ) : (
//             <>
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(59,130,246,0.08),transparent_42%)]" />
//               <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/30" />
//             </>
//           )}
//         </div>

//         <div className="relative">
//           <AnimatedTestimonials testimonials={testimonials} />
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export function PosFeatureIsometricSection({
//   darkMode,
// }: {
//   darkMode: boolean;
// }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isBoxOpen, setIsBoxOpen] = useState(true);
//   const [showCards, setShowCards] = useState(true);
//   const [isChanging, setIsChanging] = useState(false);

//   const activeFeature = features[activeIndex];

//   const changeFeature = useCallback(
//     (nextIndex?: number) => {
//       if (isChanging) return;

//       setIsChanging(true);
//       setShowCards(false);

//       window.setTimeout(() => {
//         setIsBoxOpen(false);
//       }, 280);

//       window.setTimeout(() => {
//         setActiveIndex((prev) => {
//           if (typeof nextIndex === "number") return nextIndex;
//           return (prev + 1) % features.length;
//         });
//       }, 720);

//       window.setTimeout(() => {
//         setIsBoxOpen(true);
//       }, 920);

//       window.setTimeout(() => {
//         setShowCards(true);
//         setIsChanging(false);
//       }, 1220);
//     },
//     [isChanging]
//   );

//   useEffect(() => {
//     const timer = window.setInterval(() => {
//       changeFeature();
//     }, 6000);

//     return () => window.clearInterval(timer);
//   }, [changeFeature]);

//   const toggleBox = () => {
//     if (isChanging) return;

//     if (isBoxOpen) {
//       setShowCards(false);

//       window.setTimeout(() => {
//         setIsBoxOpen(false);
//       }, 280);
//     } else {
//       setIsBoxOpen(true);

//       window.setTimeout(() => {
//         setShowCards(true);
//       }, 300);
//     }
//   };

//   return (
//     <section
//       id="features"
//       className={`relative z-10 overflow-hidden px-5 py-24 md:px-8 lg:px-10 ${
//         darkMode ? "bg-[#080b12] text-white" : "bg-[#f4f4f5] text-slate-950"
//       }`}
//     >
//       {/* One shared background */}
//       <div className="pointer-events-none absolute inset-0">
//         {darkMode ? (
//           <>
//             <div className="absolute inset-0 bg-[#080b12]" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(59,130,246,0.16)_0%,rgba(14,165,233,0.08)_24%,transparent_52%)]" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_80%,rgba(16,185,129,0.10)_0%,transparent_42%)]" />
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:120px_100%] opacity-25" />
//             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_120px] opacity-20" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(8,11,18,0.2)_58%,rgba(3,6,12,0.72)_100%)]" />
//           </>
//         ) : (
//           <>
//             <div className="absolute inset-0 bg-[#f4f4f5]" />
//             <div className="absolute left-1/2 top-0 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
//             <div className="absolute right-[-12%] top-[18%] h-[420px] w-[420px] rounded-full bg-amber-200/30 blur-3xl" />
//             <div className="absolute left-[-10%] bottom-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-200/30 blur-3xl" />
//           </>
//         )}
//       </div>

//       <div className="relative mx-auto grid max-w-[88rem] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
//         {/* Left */}
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55 }}
//             className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-bold backdrop-blur-md ${
//               darkMode
//                 ? "border-white/[0.14] bg-white/[0.06] text-slate-200 shadow-[0_10px_36px_rgba(0,0,0,0.28)]"
//                 : "border-slate-200 bg-white/75 text-slate-700"
//             }`}
//           >
//             POS Modules
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55, delay: 0.05 }}
//             className={`max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl ${
//               darkMode ? "text-white" : "text-slate-950"
//             }`}
//           >
//             Everything your shop needs in one clean system.
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55, delay: 0.1 }}
//             className={`mt-6 max-w-2xl text-base leading-7 md:text-lg ${
//               darkMode ? "text-slate-300" : "text-slate-600"
//             }`}
//           >
//             Build a complete POS workflow for supermarket, restaurant, fashion
//             store and small business operations.
//           </motion.p>

//           <div className="mt-10 grid gap-4 sm:grid-cols-2">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               const active = activeIndex === index;

//               return (
//                 <motion.button
//                   key={feature.title}
//                   type="button"
//                   disabled={isChanging}
//                   onClick={() => {
//                     if (index === activeIndex) {
//                       toggleBox();
//                       return;
//                     }

//                     changeFeature(index);
//                   }}
//                   whileHover={isChanging ? undefined : { y: -6 }}
//                   whileTap={isChanging ? undefined : { scale: 0.98 }}
//                   className={`group relative overflow-hidden rounded-[1.6rem] border p-5 text-left transition duration-300 disabled:cursor-not-allowed disabled:opacity-80 ${
//                     active
//                       ? darkMode
//                         ? "border-white/[0.18] bg-[#111827]/95 shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
//                         : "border-slate-300 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
//                       : darkMode
//                         ? "border-white/[0.12] bg-[#0f172a]/80 hover:border-white/[0.2] hover:bg-[#172033]/95 hover:shadow-[0_18px_56px_rgba(0,0,0,0.42)]"
//                         : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white hover:shadow-xl"
//                   }`}
//                 >
//                   <span
//                     className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-xl transition duration-300 ${
//                       active
//                         ? darkMode
//                           ? "bg-blue-400/[0.14] opacity-100"
//                           : "bg-amber-200/60 opacity-100"
//                         : "opacity-0"
//                     }`}
//                   />

//                   <span
//                     className={`absolute left-0 top-6 h-12 w-1 rounded-r-full transition ${
//                       active
//                         ? darkMode
//                           ? "bg-blue-300 opacity-100"
//                           : "bg-slate-950 opacity-100"
//                         : "opacity-0"
//                     }`}
//                   />

//                   <div className="relative z-10">
//                     <div className="mb-5 flex items-start justify-between gap-4">
//                       <span
//                         className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border transition ${
//                           active
//                             ? darkMode
//                               ? "border-white/[0.16] bg-white text-black shadow-[0_10px_28px_rgba(255,255,255,0.12)]"
//                               : "border-slate-950/10 bg-slate-950 text-white"
//                             : darkMode
//                               ? "border-white/[0.14] bg-white/[0.08] text-slate-100"
//                               : "border-slate-200 bg-slate-50 text-slate-950"
//                         }`}
//                       >
//                         <Icon className="h-5 w-5" />
//                       </span>

//                       <span
//                         className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
//                           active
//                             ? darkMode
//                               ? "bg-white/[0.1] text-slate-200"
//                               : "bg-slate-100 text-slate-700"
//                             : darkMode
//                               ? "bg-white/[0.07] text-slate-400"
//                               : "bg-slate-100 text-slate-500"
//                         }`}
//                       >
//                         {feature.tag}
//                       </span>
//                     </div>

//                     <h3
//                       className={`text-base font-black leading-snug ${
//                         darkMode ? "text-white" : "text-slate-950"
//                       }`}
//                     >
//                       {feature.title}
//                     </h3>

//                     <p
//                       className={`mt-3 text-sm leading-6 ${
//                         darkMode ? "text-slate-300" : "text-slate-600"
//                       }`}
//                     >
//                       {feature.description}
//                     </p>

//                     <div className="mt-5 flex flex-wrap items-center gap-2">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
//                           darkMode
//                             ? "bg-emerald-500/[0.14] text-emerald-300 ring-1 ring-emerald-400/15"
//                             : "bg-emerald-50 text-emerald-700"
//                         }`}
//                       >
//                         {feature.stat}
//                       </span>

//                       <span
//                         className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
//                           darkMode
//                             ? "bg-cyan-500/[0.14] text-cyan-300 ring-1 ring-cyan-400/15"
//                             : "bg-cyan-50 text-cyan-700"
//                         }`}
//                       >
//                         POS Ready
//                       </span>
//                     </div>
//                   </div>
//                 </motion.button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Right visual */}
//         <motion.div
//           initial={{ opacity: 0, y: 24, scale: 0.98 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.65 }}
//           className={`relative overflow-hidden rounded-[2rem] border p-5 backdrop-blur-md md:p-8 ${
//             darkMode
//               ? "border-white/[0.14] bg-[#0b1220]/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
//               : "border-white/80 bg-white/72 shadow-[0_30px_100px_rgba(15,23,42,0.12)]"
//           }`}
//         >
//           <div className="pointer-events-none absolute inset-0">
//             {darkMode ? (
//               <>
//                 <div className="absolute inset-0 bg-[#0b1220]" />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.14),transparent_42%)]" />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_72%,rgba(16,185,129,0.09),transparent_36%)]" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/30" />
//               </>
//             ) : (
//               <>
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(251,191,36,0.18),transparent_34%)]" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/50" />
//               </>
//             )}
//           </div>

//           <button
//             type="button"
//             disabled={isChanging}
//             onClick={toggleBox}
//             className={`absolute right-5 top-5 z-50 rounded-full border px-4 py-2 text-xs font-black backdrop-blur-md transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${
//               darkMode
//                 ? "border-white/[0.14] bg-white/[0.08] text-slate-200 hover:bg-white/[0.12]"
//                 : "border-slate-200 bg-white/80 text-slate-700 hover:bg-white"
//             }`}
//           >
//             {isChanging ? "Changing..." : isBoxOpen ? "Close Box" : "Open Box"}
//           </button>

//           <div className="relative flex min-h-[540px] items-center justify-center md:min-h-[620px]">
//             <motion.div
//               className="relative flex h-[520px] w-full max-w-[560px] items-center justify-center [perspective:1300px]"
//               animate={{ y: [0, -6, 0] }}
//               transition={{
//                 duration: 4.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <AnimatePresence mode="wait">
//                 {showCards && isBoxOpen && (
//                   <>
//                     <motion.div
//                       key={`glow-${activeIndex}`}
//                       initial={{ opacity: 0, scale: 0.7 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{
//                         opacity: 0,
//                         scale: 0.62,
//                         y: 40,
//                       }}
//                       transition={{ duration: 0.45 }}
//                       className={`absolute h-[310px] w-[310px] rounded-full blur-xl ${
//                         darkMode ? "bg-blue-400/[0.12]" : "bg-amber-200/45"
//                       }`}
//                     />

//                     <motion.div
//                       key={`mini-${activeIndex}`}
//                       initial={{
//                         opacity: 0,
//                         y: 95,
//                         scale: 0.6,
//                         rotateX: 16,
//                         rotateY: 12,
//                         rotateZ: 0,
//                       }}
//                       animate={{
//                         opacity: 0.72,
//                         x: -86,
//                         y: -120,
//                         scale: 0.82,
//                         rotateX: 8,
//                         rotateY: 16,
//                         rotateZ: -5,
//                       }}
//                       exit={{
//                         opacity: 0,
//                         x: 0,
//                         y: 96,
//                         scale: 0.54,
//                         rotateX: 24,
//                         rotateY: 0,
//                         rotateZ: 0,
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 120,
//                         damping: 18,
//                       }}
//                       className="pointer-events-none absolute z-20"
//                     >
//                       <div
//                         className={`w-[220px] rounded-2xl border p-4 backdrop-blur-md ${
//                           darkMode
//                             ? "border-white/[0.14] bg-[#111827]/90 text-white shadow-[0_18px_55px_rgba(0,0,0,0.35)]"
//                             : "border-white/80 bg-white/80 text-slate-950"
//                         }`}
//                       >
//                         <p
//                           className={`text-xs leading-5 ${
//                             darkMode ? "text-slate-400" : "text-slate-500"
//                           }`}
//                         >
//                           Selected module
//                         </p>
//                         <p
//                           className={`mt-2 text-sm font-black ${
//                             darkMode ? "text-slate-100" : "text-slate-800"
//                           }`}
//                         >
//                           {activeFeature.tag} / {activeFeature.stat}
//                         </p>
//                       </div>
//                     </motion.div>

//                     <motion.div
//                       key={`main-${activeIndex}`}
//                       initial={{
//                         opacity: 0,
//                         y: 98,
//                         x: 0,
//                         scale: 0.54,
//                         rotateX: 28,
//                         rotateY: -10,
//                         filter: "blur(2px)",
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: -155,
//                         x: 35,
//                         scale: 1,
//                         rotateX: 8,
//                         rotateY: -12,
//                         filter: "blur(0px)",
//                       }}
//                       exit={{
//                         opacity: 0,
//                         y: 96,
//                         x: 0,
//                         scale: 0.48,
//                         rotateX: 30,
//                         rotateY: -6,
//                         filter: "blur(3px)",
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 125,
//                         damping: 18,
//                       }}
//                       className="pointer-events-none absolute z-40 [transform-style:preserve-3d]"
//                     >
//                       <FloatingFeatureCard
//                         darkMode={darkMode}
//                         feature={activeFeature}
//                       />
//                     </motion.div>

//                     <motion.div
//                       key={`chip-${activeIndex}`}
//                       initial={{ opacity: 0, scale: 0.6, y: 40 }}
//                       animate={{
//                         opacity: 1,
//                         scale: 1,
//                         x: 175,
//                         y: -42,
//                         rotate: 7,
//                       }}
//                       exit={{
//                         opacity: 0,
//                         scale: 0.52,
//                         x: 0,
//                         y: 88,
//                         rotate: 0,
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 140,
//                         damping: 18,
//                       }}
//                       className={`pointer-events-none absolute z-30 rounded-full border px-4 py-2 text-xs font-black backdrop-blur-md ${
//                         darkMode
//                           ? "border-emerald-400/25 bg-emerald-400/[0.12] text-emerald-300 shadow-[0_14px_40px_rgba(16,185,129,0.12)]"
//                           : "border-emerald-200 bg-emerald-50 text-emerald-700"
//                       }`}
//                     >
//                       {activeFeature.stat}
//                     </motion.div>
//                   </>
//                 )}
//               </AnimatePresence>

//               <motion.div
//                 animate={{
//                   y: [82, 88, 82],
//                   rotateZ: [-1, 1, -1],
//                   rotateY: [5, -5, 5],
//                 }}
//                 transition={{
//                   duration: 5.2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative z-20"
//               >
//                 <IsometricBox
//                   size={285}
//                   opened={isBoxOpen}
//                   darkMode={darkMode}
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       <TracingBeamContent darkMode={darkMode} />

//       <TestimonialsContent darkMode={darkMode} />
//     </section>
//   );
// }

















"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BarChart3,
  Boxes,
  ReceiptText,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

import { IsometricBox } from "./ui/isometric-box";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

type Feature = {
  title: string;
  description: string;
  detail: string;
  icon: React.ElementType;
  tag: string;
  stat: string;
};

type WorkflowContent = {
  title: string;
  description: React.ReactNode;
  badge: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Fast Cashier Checkout",
    description:
      "Barcode scan, cart management, payment and receipt printing in one fast workflow.",
    detail:
      "Cashier can scan products, manage cart items, accept payment and print 80mm receipts quickly. This module is designed for supermarket, mini mart and fast retail checkout.",
    icon: ShoppingCart,
    tag: "Cashier",
    stat: "2.4s checkout",
  },
  {
    title: "Inventory Control",
    description:
      "Track stock quantity, low-stock products and product movement for every shop.",
    detail:
      "Stock can be reduced automatically after sales. Owner can check low-stock products, product quantity and shop-specific inventory from one dashboard.",
    icon: Boxes,
    tag: "Stock",
    stat: "Live stock",
  },
  {
    title: "Receipt & Sales History",
    description:
      "Search receipts, reprint bills, export reports and check daily sales quickly.",
    detail:
      "Receipts are saved by shop, cashier, payment method and date. Owner can search receipts, reprint bills and export sales history.",
    icon: ReceiptText,
    tag: "Receipt",
    stat: "80mm print",
  },
  {
    title: "Staff & Role Management",
    description:
      "Control staff accounts, cashier access, admin actions and shop permissions.",
    detail:
      "Owner can assign roles, manage staff access, control cashier actions and track staff activity for each shop.",
    icon: UsersRound,
    tag: "Staff",
    stat: "Role based",
  },
  {
    title: "Business Reports",
    description:
      "See sales, orders, payment methods and shop performance from one dashboard.",
    detail:
      "Reports show daily sales, receipt count, payment totals, product movement and shop performance in a clean dashboard.",
    icon: BarChart3,
    tag: "Report",
    stat: "Daily report",
  },
];

const workflowContent: WorkflowContent[] = [
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

const testimonials = [
  {
    quote:
      "The POS checkout flow is fast and simple. Our cashier team can scan products, manage carts and print receipts without confusion.",
    name: "Sarah Chen",
    designation: "Mini Mart Owner",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "Inventory tracking became much easier. Low stock, product movement and daily sales are now clear from one dashboard.",
    name: "Michael Rodriguez",
    designation: "Retail Operations Manager",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "The restaurant order workflow helped us manage tables, kitchen orders and payments more smoothly during busy hours.",
    name: "Emily Watson",
    designation: "Restaurant Manager",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Receipt history and reports save a lot of time. We can search, reprint and check daily sales without complicated steps.",
    name: "James Kim",
    designation: "Shop Admin",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
  },
  {
    quote:
      "The system is clean, fast and suitable for growing shops. Staff roles and shop-based data control are very useful.",
    name: "Lisa Thompson",
    designation: "Business Owner",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
];

function FloatingFeatureCard({
  darkMode,
  feature,
}: {
  darkMode: boolean;
  feature: Feature;
}) {
  const Icon = feature.icon;

  return (
    <div
      className={`relative w-[260px] overflow-hidden rounded-2xl border backdrop-blur-md md:w-[300px] ${
        darkMode
          ? "border-white/[0.16] bg-[#101827]/95 text-white shadow-[0_28px_80px_rgba(0,0,0,0.58)]"
          : "border-white/80 bg-white/90 text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
      }`}
    >
      <div
        className={`flex items-center justify-between border-b px-4 py-3 ${
          darkMode
            ? "border-white/[0.12] bg-white/[0.04]"
            : "border-slate-200 bg-slate-50/80"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
            darkMode
              ? "bg-white/[0.08] text-slate-300"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {feature.tag}
        </span>
      </div>

      <div className="p-5">
        <div className="flex gap-4">
          <span
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border ${
              darkMode
                ? "border-white/[0.16] bg-[#1e293b] text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
                : "border-slate-200 bg-slate-950 text-white"
            }`}
          >
            <Icon className="h-5 w-5" />
          </span>

          <div className="min-w-0">
            <h3
              className={`text-base font-black leading-snug ${
                darkMode ? "text-white" : "text-slate-950"
              }`}
            >
              {feature.title}
            </h3>

            <p
              className={`mt-2 text-xs leading-5 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {feature.description}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
              darkMode
                ? "bg-emerald-500/[0.14] text-emerald-300 ring-1 ring-emerald-400/15"
                : "bg-emerald-50 text-emerald-700"
            }`}
          >
            POS Ready
          </span>

          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
              darkMode
                ? "bg-amber-500/[0.14] text-amber-300 ring-1 ring-amber-400/15"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            {feature.stat}
          </span>
        </div>
      </div>
    </div>
  );
}

function TracingBeamContent({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="relative mx-auto mt-28 max-w-[88rem] border-t border-transparent pt-24">
      <div
        className={`pointer-events-none absolute left-0 right-0 top-0 h-px ${
          darkMode
            ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
            : "bg-gradient-to-r from-transparent via-slate-300 to-transparent"
        }`}
      />

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
          From checkout to inventory and reports, each POS module is designed to
          make daily shop operations faster and easier.
        </motion.p>
      </div>

      <TracingBeam className="px-0 md:px-6">
        <div className="relative mx-auto max-w-2xl antialiased">
          {workflowContent.map((item, index) => (
            <motion.div
              key={`workflow-${index}`}
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
                    ? "bg-[#1e293b] text-white"
                    : "bg-slate-950 text-white"
                }`}
              >
                {item.badge}
              </h3>

              <p
                className={`mb-4 text-xl font-black tracking-tight md:text-2xl ${
                  darkMode ? "text-white" : "text-slate-950"
                }`}
              >
                {item.title}
              </p>

              <div
                className={`prose prose-sm max-w-none text-sm leading-7 ${
                  darkMode
                    ? "prose-invert text-slate-300 [&_p]:!text-slate-300"
                    : "text-slate-700 [&_p]:!text-slate-700"
                }`}
              >
                {item.image && (
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
  );
}

function TestimonialsContent({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="relative mx-auto mt-28 max-w-[88rem] border-t border-transparent pt-24">
      <div
        className={`pointer-events-none absolute left-0 right-0 top-0 h-px ${
          darkMode
            ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
            : "bg-gradient-to-r from-transparent via-slate-300 to-transparent"
        }`}
      />

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
          Customer Stories
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
          Trusted by shops that need faster daily operations.
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
          See how supermarket, restaurant and retail teams use Sakura POS to
          make checkout, inventory and reporting easier.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className={`relative overflow-hidden rounded-[2rem] border backdrop-blur-md ${
          darkMode
            ? [
                "border-white/[0.14] bg-[#0b1220]/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)]",
                "[&_h1]:!text-white",
                "[&_h2]:!text-white",
                "[&_h3]:!text-white",
                "[&_h4]:!text-white",
                "[&_p]:!text-slate-300",
                "[&_span]:!text-slate-300",
                "[&_blockquote]:!text-slate-200",
                "[&_button]:!text-slate-200",
                "[&_svg]:!text-slate-200",
                "[&_*]:selection:bg-white/20",
              ].join(" ")
            : [
                "border-white/80 bg-white/70 shadow-[0_24px_70px_rgba(15,23,42,0.10)]",
                "[&_h1]:!text-slate-950",
                "[&_h2]:!text-slate-950",
                "[&_h3]:!text-slate-950",
                "[&_h4]:!text-slate-950",
                "[&_p]:!text-slate-600",
                "[&_span]:!text-slate-600",
                "[&_blockquote]:!text-slate-700",
                "[&_button]:!text-slate-700",
                "[&_svg]:!text-slate-700",
              ].join(" ")
        }`}
      >
        <div className="pointer-events-none absolute inset-0">
          {darkMode ? (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(59,130,246,0.12),transparent_42%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_80%,rgba(16,185,129,0.10),transparent_38%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.035] via-transparent to-black/20" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(59,130,246,0.08),transparent_42%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/30" />
            </>
          )}
        </div>

        <div className="relative">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </motion.div>
    </div>
  );
}

export function PosFeatureIsometricSection({
  darkMode,
}: {
  darkMode: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBoxOpen, setIsBoxOpen] = useState(true);
  const [showCards, setShowCards] = useState(true);
  const [isChanging, setIsChanging] = useState(false);

  const activeFeature = features[activeIndex];

  const changeFeature = useCallback(
    (nextIndex?: number) => {
      if (isChanging) return;

      setIsChanging(true);
      setShowCards(false);

      window.setTimeout(() => {
        setIsBoxOpen(false);
      }, 280);

      window.setTimeout(() => {
        setActiveIndex((prev) => {
          if (typeof nextIndex === "number") return nextIndex;
          return (prev + 1) % features.length;
        });
      }, 720);

      window.setTimeout(() => {
        setIsBoxOpen(true);
      }, 920);

      window.setTimeout(() => {
        setShowCards(true);
        setIsChanging(false);
      }, 1220);
    },
    [isChanging]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      changeFeature();
    }, 6000);

    return () => window.clearInterval(timer);
  }, [changeFeature]);

  const toggleBox = () => {
    if (isChanging) return;

    if (isBoxOpen) {
      setShowCards(false);

      window.setTimeout(() => {
        setIsBoxOpen(false);
      }, 280);
    } else {
      setIsBoxOpen(true);

      window.setTimeout(() => {
        setShowCards(true);
      }, 300);
    }
  };

  return (
    <section
      id="features"
      className={`relative z-10 overflow-hidden px-5 py-24 md:px-8 lg:px-10 ${
        darkMode ? "bg-[#080b12] text-white" : "bg-[#f4f4f5] text-slate-950"
      }`}
    >
      {/* One shared background */}
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

      <div className="relative mx-auto grid max-w-[88rem] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left */}
        <div>
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
            POS Modules
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className={`max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Everything your shop needs in one clean system.
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
            Build a complete POS workflow for supermarket, restaurant, fashion
            store and small business operations.
          </motion.p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const active = activeIndex === index;

              return (
                <motion.button
                  key={feature.title}
                  type="button"
                  disabled={isChanging}
                  onClick={() => {
                    if (index === activeIndex) {
                      toggleBox();
                      return;
                    }

                    changeFeature(index);
                  }}
                  whileHover={isChanging ? undefined : { y: -6 }}
                  whileTap={isChanging ? undefined : { scale: 0.98 }}
                  className={`group relative overflow-hidden rounded-[1.6rem] border p-5 text-left transition duration-300 disabled:cursor-not-allowed disabled:opacity-80 ${
                    active
                      ? darkMode
                        ? "border-white/[0.18] bg-[#111827]/95 shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
                        : "border-slate-300 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
                      : darkMode
                        ? "border-white/[0.12] bg-[#0f172a]/80 hover:border-white/[0.2] hover:bg-[#172033]/95 hover:shadow-[0_18px_56px_rgba(0,0,0,0.42)]"
                        : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white hover:shadow-xl"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-xl transition duration-300 ${
                      active
                        ? darkMode
                          ? "bg-blue-400/[0.14] opacity-100"
                          : "bg-amber-200/60 opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  <span
                    className={`absolute left-0 top-6 h-12 w-1 rounded-r-full transition ${
                      active
                        ? darkMode
                          ? "bg-blue-300 opacity-100"
                          : "bg-slate-950 opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border transition ${
                          active
                            ? darkMode
                              ? "border-white/[0.16] bg-[#1e293b] text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
                              : "border-slate-950/10 bg-slate-950 text-white"
                            : darkMode
                              ? "border-white/[0.14] bg-white/[0.08] text-slate-100"
                              : "border-slate-200 bg-slate-50 text-slate-950"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
                          active
                            ? darkMode
                              ? "bg-white/[0.1] text-slate-200"
                              : "bg-slate-100 text-slate-700"
                            : darkMode
                              ? "bg-white/[0.07] text-slate-400"
                              : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {feature.tag}
                      </span>
                    </div>

                    <h3
                      className={`text-base font-black leading-snug ${
                        darkMode ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-6 ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {feature.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
                          darkMode
                            ? "bg-emerald-500/[0.14] text-emerald-300 ring-1 ring-emerald-400/15"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {feature.stat}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-black ${
                          darkMode
                            ? "bg-cyan-500/[0.14] text-cyan-300 ring-1 ring-cyan-400/15"
                            : "bg-cyan-50 text-cyan-700"
                        }`}
                      >
                        POS Ready
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className={`relative overflow-hidden rounded-[2rem] border p-5 backdrop-blur-md md:p-8 ${
            darkMode
              ? "border-white/[0.14] bg-[#0b1220]/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
              : "border-white/80 bg-white/72 shadow-[0_30px_100px_rgba(15,23,42,0.12)]"
          }`}
        >
          <div className="pointer-events-none absolute inset-0">
            {darkMode ? (
              <>
                <div className="absolute inset-0 bg-[#0b1220]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.14),transparent_42%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_72%,rgba(16,185,129,0.09),transparent_36%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/30" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(251,191,36,0.18),transparent_34%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/50" />
              </>
            )}
          </div>

          <button
            type="button"
            disabled={isChanging}
            onClick={toggleBox}
            className={`absolute right-5 top-5 z-50 rounded-full border px-4 py-2 text-xs font-black backdrop-blur-md transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${
              darkMode
                ? "border-white/[0.14] bg-white/[0.08] text-slate-200 hover:bg-white/[0.12]"
                : "border-slate-200 bg-white/80 text-slate-700 hover:bg-white"
            }`}
          >
            {isChanging ? "Changing..." : isBoxOpen ? "Close Box" : "Open Box"}
          </button>

          <div className="relative flex min-h-[540px] items-center justify-center md:min-h-[620px]">
            <motion.div
              className="relative flex h-[520px] w-full max-w-[560px] items-center justify-center [perspective:1300px]"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AnimatePresence mode="wait">
                {showCards && isBoxOpen && (
                  <>
                    <motion.div
                      key={`glow-${activeIndex}`}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{
                        opacity: 0,
                        scale: 0.62,
                        y: 40,
                      }}
                      transition={{ duration: 0.45 }}
                      className={`absolute h-[310px] w-[310px] rounded-full blur-xl ${
                        darkMode ? "bg-blue-400/[0.12]" : "bg-amber-200/45"
                      }`}
                    />

                    <motion.div
                      key={`mini-${activeIndex}`}
                      initial={{
                        opacity: 0,
                        y: 95,
                        scale: 0.6,
                        rotateX: 16,
                        rotateY: 12,
                        rotateZ: 0,
                      }}
                      animate={{
                        opacity: 0.72,
                        x: -86,
                        y: -120,
                        scale: 0.82,
                        rotateX: 8,
                        rotateY: 16,
                        rotateZ: -5,
                      }}
                      exit={{
                        opacity: 0,
                        x: 0,
                        y: 96,
                        scale: 0.54,
                        rotateX: 24,
                        rotateY: 0,
                        rotateZ: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                      }}
                      className="pointer-events-none absolute z-20"
                    >
                      <div
                        className={`w-[220px] rounded-2xl border p-4 backdrop-blur-md ${
                          darkMode
                            ? "border-white/[0.14] bg-[#111827]/90 text-white shadow-[0_18px_55px_rgba(0,0,0,0.35)]"
                            : "border-white/80 bg-white/80 text-slate-950"
                        }`}
                      >
                        <p
                          className={`text-xs leading-5 ${
                            darkMode ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          Selected module
                        </p>
                        <p
                          className={`mt-2 text-sm font-black ${
                            darkMode ? "text-slate-100" : "text-slate-800"
                          }`}
                        >
                          {activeFeature.tag} / {activeFeature.stat}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      key={`main-${activeIndex}`}
                      initial={{
                        opacity: 0,
                        y: 98,
                        x: 0,
                        scale: 0.54,
                        rotateX: 28,
                        rotateY: -10,
                        filter: "blur(2px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: -155,
                        x: 35,
                        scale: 1,
                        rotateX: 8,
                        rotateY: -12,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        y: 96,
                        x: 0,
                        scale: 0.48,
                        rotateX: 30,
                        rotateY: -6,
                        filter: "blur(3px)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 125,
                        damping: 18,
                      }}
                      className="pointer-events-none absolute z-40 [transform-style:preserve-3d]"
                    >
                      <FloatingFeatureCard
                        darkMode={darkMode}
                        feature={activeFeature}
                      />
                    </motion.div>

                    <motion.div
                      key={`chip-${activeIndex}`}
                      initial={{ opacity: 0, scale: 0.6, y: 40 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 175,
                        y: -42,
                        rotate: 7,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.52,
                        x: 0,
                        y: 88,
                        rotate: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 18,
                      }}
                      className={`pointer-events-none absolute z-30 rounded-full border px-4 py-2 text-xs font-black backdrop-blur-md ${
                        darkMode
                          ? "border-emerald-400/25 bg-emerald-400/[0.12] text-emerald-300 shadow-[0_14px_40px_rgba(16,185,129,0.12)]"
                          : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {activeFeature.stat}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              <motion.div
                animate={{
                  y: [82, 88, 82],
                  rotateZ: [-1, 1, -1],
                  rotateY: [5, -5, 5],
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <IsometricBox
                  size={285}
                  opened={isBoxOpen}
                  darkMode={darkMode}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <TracingBeamContent darkMode={darkMode} />

      <TestimonialsContent darkMode={darkMode} />
    </section>
  );
}