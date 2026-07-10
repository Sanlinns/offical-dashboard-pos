import React from 'react'

const FashionPOSFeaturesSection = () => {
    const features = [
        {
            title: "Size & Color Variants",
            description:
                "အဝတ်အစား၊ ဖိနပ်၊ အိတ်များကို size, color, style အလိုက် stock ခွဲပြီး စီမံနိုင်ပါတယ်။",
            icon: "👗",
        },
        {
            title: "Barcode Checkout",
            description:
                "Barcode scan ဖြင့် item ကို cart ထဲမြန်မြန်ထည့်ပြီး payment checkout လုပ်နိုင်ပါတယ်။",
            icon: "🏷️",
        },
        {
            title: "Inventory Control",
            description:
                "Stock quantity, low stock alert, category, brand, discount တွေကို တစ်နေရာတည်းကနေ စီမံနိုင်ပါတယ်။",
            icon: "📦",
        },
        {
            title: "Sales Report",
            description:
                "နေ့စဉ် sales, best seller products, total revenue, staff performance တွေကို ကြည့်နိုင်ပါတယ်။",
            icon: "📊",
        },
    ];
    return (
        <section
            id="features"
            className="relative overflow-hidden bg-white px-4 py-24 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />
                <div className="absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-violet-300/25 blur-3xl dark:bg-violet-500/10" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-bold text-pink-700 shadow-sm backdrop-blur dark:border-pink-300/15 dark:bg-pink-400/10 dark:text-pink-200">
                        Fashion POS Features
                    </div>

                    <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Manage your fashion store
                        <br />
                        with smart POS tools.
                    </h2>

                    <p className="mt-5 text-base font-medium leading-8 text-slate-700 dark:text-white/65 md:text-lg">
                        Clothing, shoes, bags, accessories တွေကို size, color, barcode,
                        stock, sales report နဲ့ အပြည့်အစုံ စီမံနိုင်တဲ့ fashion POS system။
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((item) => (
                        <div
                            key={item.title}
                            className="group rounded-[2rem] border border-pink-100 bg-white/85 p-6 shadow-xl shadow-pink-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-950/10 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20 dark:hover:bg-white/[0.13]"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-3xl shadow-sm transition group-hover:scale-105 dark:bg-pink-400/10">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-black text-slate-950 dark:text-white">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm font-medium leading-7 text-slate-600 dark:text-white/60">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FashionPOSFeaturesSection