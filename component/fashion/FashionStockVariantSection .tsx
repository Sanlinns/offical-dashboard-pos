import React from 'react'

const FashionStockVariantSection  = () => {

    const variants = [
    {
      product: "Summer Dress",
      sku: "DRS-1024",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
      variants: [
        { size: "S", color: "Pink", stock: 18, status: "Good" },
        { size: "M", color: "Pink", stock: 6, status: "Low" },
        { size: "L", color: "Black", stock: 24, status: "Good" },
      ],
    },
    {
      product: "Leather Handbag",
      sku: "BAG-2088",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop",
      variants: [
        { size: "One", color: "Brown", stock: 12, status: "Good" },
        { size: "One", color: "Black", stock: 4, status: "Low" },
        { size: "One", color: "Red", stock: 0, status: "Out" },
      ],
    },
  ];


  const summary = [
    { label: "Total Products", value: "1,284" },
    { label: "Low Stock", value: "18" },
    { label: "Out of Stock", value: "7" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-violet-300/25 blur-3xl dark:bg-violet-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-bold text-pink-700 shadow-sm backdrop-blur dark:border-pink-300/15 dark:bg-pink-400/10 dark:text-pink-200">
              Stock & Variant Control
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Track size, color,
              <br />
              and stock easily.
            </h2>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-700 dark:text-white/65 md:text-lg">
              Fashion store တွေမှာ product တစ်ခုချင်းစီမှာ size, color,
              style variant များတာကြောင့် stock ကို သေချာခွဲခြားစီမံနိုင်ဖို့
              အရေးကြီးပါတယ်။
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {summary.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-pink-100 bg-white/85 p-5 text-center shadow-xl shadow-pink-950/5 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
              >
                <div className="text-2xl font-black text-slate-950 dark:text-white">
                  {item.value}
                </div>
                <div className="mt-2 text-xs font-bold text-slate-500 dark:text-white/55">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {variants.map((item) => (
            <div
              key={item.sku}
              className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white/85 p-4 shadow-2xl shadow-pink-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-black/30"
            >
              <div className="grid gap-5 md:grid-cols-[220px_1fr]">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-pink-50 dark:bg-white/5 md:h-full">
                  <img
                    src={item.image}
                    alt={item.product}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-xl">
                    <div className="text-lg font-black">{item.product}</div>
                    <div className="mt-1 text-xs font-semibold text-white/70">
                      SKU: {item.sku}
                    </div>
                  </div>
                </div>

                {/* Variant List */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-black text-slate-950 dark:text-white">
                          Variant Inventory
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-500 dark:text-white/55">
                          Size, color and stock quantity
                        </p>
                      </div>

                      <div className="rounded-full bg-pink-100 px-4 py-2 text-xs font-black text-pink-700 dark:bg-pink-400/10 dark:text-pink-200">
                        LIVE
                      </div>
                    </div>

                    <div className="space-y-3">
                      {item.variants.map((variant) => (
                        <div
                          key={`${variant.size}-${variant.color}`}
                          className="flex items-center justify-between rounded-3xl border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950 shadow-sm dark:bg-white/10 dark:text-white">
                              {variant.size}
                            </div>

                            <div>
                              <div className="font-black text-slate-950 dark:text-white">
                                {variant.color}
                              </div>
                              <div className="text-xs font-semibold text-slate-500 dark:text-white/55">
                                Stock: {variant.stock} items
                              </div>
                            </div>
                          </div>

                          <div
                            className={`rounded-full px-3 py-1.5 text-xs font-black ${
                              variant.status === "Good"
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"
                                : variant.status === "Low"
                                  ? "bg-orange-100 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300"
                                  : "bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-300"
                            }`}
                          >
                            {variant.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl bg-gradient-to-r from-pink-500 to-violet-600 p-5 text-white shadow-xl shadow-pink-600/20">
                    <div className="text-sm font-bold text-white/75">
                      Stock Alert
                    </div>
                    <div className="mt-2 text-xl font-black">
                      Low stock items need reorder
                    </div>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/70">
                      Quantity နည်းတဲ့ variant တွေကို system ထဲမှာ alert
                      ပြပေးနိုင်ပါတယ်။
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 rounded-[2rem] border border-pink-100 bg-pink-50/80 p-8 shadow-xl shadow-pink-950/5 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                Perfect for clothing shops, boutiques and fashion stores.
              </h3>

              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-700 dark:text-white/65">
                Fashion POS system မှာ product တစ်ခုကို color/size variant
                အများကြီးခွဲထားနိုင်ပြီး stock report, sales report,
                low stock warning တွေကို တစ်နေရာတည်းကနေ စီမံနိုင်ပါတယ်။
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "S / M / L", label: "Size Control" },
                { value: "Color", label: "Variant Stock" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/50"
                >
                  <div className="text-xl font-black text-slate-950 dark:text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 text-xs font-bold text-slate-500 dark:text-white/55">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FashionStockVariantSection 