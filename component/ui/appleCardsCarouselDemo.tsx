// "use client";

// import React from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// export function AppleCardsCarouselDemo() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         Get to know your iSad.
//       </h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <img
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];







"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-20">
      <div className="mx-auto mb-10 max-w-7xl px-4">
        <p className="mb-3 w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
          Supermarket POS System
        </p>

        <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl">
          Supermarket လုပ်ငန်းကို ပိုမြန်၊ ပိုလွယ်၊ ပိုစနစ်ကျအောင် စီမံပါ
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
          Barcode checkout, product stock, cashier, receipt print, inventory
          နဲ့ daily sales report များကို တစ်နေရာတည်းကနေ စီမံနိုင်တဲ့ modern POS
          system ဖြစ်ပါတယ်။
        </p>
      </div>

      <Carousel items={cards} />
    </section>
  );
}

const SupermarketContent = ({
  title,
  description,
  image,
  points,
}: {
  title: string;
  description: string;
  image: string;
  points: string[];
}) => {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-[#F5F5F7] p-6 dark:bg-neutral-800 md:p-10">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              Smart Supermarket POS
            </p>

            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 md:text-4xl">
              {title}
            </h3>

            <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>

            <div className="mt-6 space-y-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 shadow-sm dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    ✓
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-white/10 dark:bg-neutral-900">
            <img
              src={image}
              alt={title}
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Checkout",
    title: "Barcode scan နဲ့ အရောင်းလုပ်ငန်းကို မြန်ဆန်စေပါ",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    content: (
      <SupermarketContent
        title="Fast Checkout System"
        description="Supermarket cashier အတွက် barcode scan, cart calculation, payment နဲ့ receipt print များကို မြန်မြန်ဆန်ဆန် လုပ်နိုင်အောင် ဒီဇိုင်းပြုလုပ်ထားပါတယ်။"
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
        points={[
          "Barcode scan ဖြင့် product ရှာဖွေခြင်း",
          "Cash / Card payment support",
          "80mm receipt print အတွက် အဆင်ပြေခြင်း",
        ]}
      />
    ),
  },
  {
    category: "Products",
    title: "Product, price နဲ့ stock များကို လွယ်ကူစွာ စီမံပါ",
    src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1600&auto=format&fit=crop",
    content: (
      <SupermarketContent
        title="Product Management"
        description="Supermarket ထဲရှိ product များကို SKU, barcode, category, price, discount နဲ့ stock amount အလိုက် စနစ်တကျ ထည့်သွင်း၊ ပြင်ဆင်နိုင်ပါတယ်။"
        image="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1600&auto=format&fit=crop"
        points={[
          "Product image, SKU, barcode ထည့်သွင်းနိုင်ခြင်း",
          "Category အလိုက် product များ ခွဲခြားနိုင်ခြင်း",
          "Discount နှင့် price ကို လွယ်ကူစွာ ပြင်နိုင်ခြင်း",
        ]}
      />
    ),
  },
  {
    category: "Inventory",
    title: "Stock အဝင်/အထွက်ကို အချိန်တိုင်း စနစ်တကျ သိနိုင်ပါ",
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
    content: (
      <SupermarketContent
        title="Inventory Control"
        description="ပစ္စည်းလက်ကျန်နည်းလာတာ၊ stock အဝင်/အထွက်၊ category အလိုက် inventory status များကို admin dashboard မှာ ရှင်းရှင်းလင်းလင်း ကြည့်နိုင်ပါတယ်။"
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
        points={[
          "Low stock alert ပြနိုင်ခြင်း",
          "Stock amount ကို အလိုအလျောက် update လုပ်နိုင်ခြင်း",
          "Inventory report များကို category အလိုက် ကြည့်နိုင်ခြင်း",
        ]}
      />
    ),
  },
  {
    category: "Cashier",
    title: "Cashier staff များအတွက် အသုံးပြုရလွယ်သော POS",
    src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1600&auto=format&fit=crop",
    content: (
      <SupermarketContent
        title="Cashier Friendly Interface"
        description="Cashier များအတွက် ရှင်းလင်းပြီး လျင်မြန်တဲ့ POS interface ဖြစ်လို့ customer queue များတဲ့အချိန်မှာလည်း အရောင်းလုပ်ငန်းကို အဆင်ပြေစေပါတယ်။"
        image="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1600&auto=format&fit=crop"
        points={[
          "Touch screen နှင့် အသုံးပြုရလွယ်ခြင်း",
          "Cart item များကို ရှင်းရှင်းလင်းလင်း မြင်နိုင်ခြင်း",
          "Staff ID ဖြင့် cashier activity သိနိုင်ခြင်း",
        ]}
      />
    ),
  },
  {
    category: "Reports",
    title: "Daily sales report နဲ့ ဆိုင်အခြေအနေကို လွယ်ကူစွာ စစ်ပါ",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    content: (
      <SupermarketContent
        title="Sales Report & Analytics"
        description="နေ့စဉ်အရောင်း၊ receipt count, sold items, payment method နဲ့ profit report များကို dashboard မှာ ကြည့်နိုင်အောင် စီမံထားပါတယ်။"
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop"
        points={[
          "Daily / weekly / monthly sales report",
          "Receipt history နှင့် reprint support",
          "အရောင်းအကောင်းဆုံး product များကို ကြည့်နိုင်ခြင်း",
        ]}
      />
    ),
  },
  {
    category: "Receipt",
    title: "Customer receipt များကို သန့်ရှင်းလှပစွာ print ထုတ်ပါ",
    src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1600&auto=format&fit=crop",
    content: (
      <SupermarketContent
        title="Receipt & Payment Records"
        description="Customer payment ပြီးတာနဲ့ receipt ကို ချက်ချင်း print ထုတ်နိုင်ပြီး shop name, address, phone နဲ့ footer message များလည်း ထည့်သွင်းနိုင်ပါတယ်။"
        image="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1600&auto=format&fit=crop"
        points={[
          "80mm thermal printer အတွက် layout သင့်တော်ခြင်း",
          "Shop information ထည့်နိုင်ခြင်း",
          "Receipt history ကို ပြန်လည်ကြည့်နိုင်ခြင်း",
        ]}
      />
    ),
  },
];