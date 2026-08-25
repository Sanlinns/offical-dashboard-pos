"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Binhlaig POS နဲ့ checkout လုပ်ရတာ ပိုမြန်သွားပြီး barcode scan ကနေ payment နဲ့ receipt print အထိ အလုပ်လုပ်ရတာ အများကြီးလွယ်ကူလာပါတယ်။",
    name: "Supermarket Owner",
    title: "Fast Checkout",
  },
  {
    quote:
      "ကုန်ပစ္စည်းလက်ကျန်၊ stock အဝင်အထွက်နဲ့ low-stock items တွေကို dashboard တစ်ခုတည်းကနေ real-time စောင့်ကြည့်နိုင်တာ အရမ်းအသုံးဝင်ပါတယ်။",
    name: "Store Manager",
    title: "Inventory Control",
  },
  {
    quote:
      "Products, prices, discounts နဲ့ categories တွေကို တစ်နေရာတည်းမှာ စီမံနိုင်လို့ နေ့စဉ်ဆိုင်အလုပ်တွေ ပိုစနစ်ကျလာပါတယ်။",
    name: "Shop Administrator",
    title: "Product Management",
  },
  {
    quote:
      "Cashier နဲ့ staff တစ်ယောက်ချင်းစီအတွက် role နဲ့ permission သတ်မှတ်နိုင်တာကြောင့် ဆိုင်ရဲ့လုပ်ငန်းပိုင်းကို ပိုလုံခြုံစွာ စီမံနိုင်ပါတယ်။",
    name: "Business Owner",
    title: "Staff & Role Management",
  },
  {
    quote:
      "Daily sales, receipts နဲ့ transaction history တွေကို report အဖြစ်ကြည့်နိုင်လို့ ဆိုင်ရဲ့အရောင်းအခြေအနေကို မြန်မြန်ဆုံးသိနိုင်ပါတယ်။",
    name: "Store Owner",
    title: "Sales & Reports",
  },
];