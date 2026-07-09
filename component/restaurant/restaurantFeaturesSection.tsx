import React from 'react'

const RestaurantFeaturesSection = () => {

    const features = [
        {
            title: "Table Orders",
            description:
                "စားပွဲအလိုက် order တင်ခြင်း၊ table status ကြည့်ခြင်း၊ dine-in order များကို လွယ်ကူစွာ စီမံနိုင်ပါတယ်။",
            icon: "🍽️",
        },
        {
            title: "Kitchen Display",
            description:
                "Kitchen team အတွက် live order list ပြပေးပြီး cooking status ကို real-time update လုပ်နိုင်ပါတယ်။",
            icon: "👨‍🍳",
        },
        {
            title: "Takeaway & Delivery",
            description:
                "Takeaway, delivery order များကို dine-in order နဲ့ ခွဲခြားပြီး တစ်နေရာတည်းမှာ စီမံနိုင်ပါတယ်။",
            icon: "🛵",
        },
        {
            title: "Fast Payment",
            description:
                "Cash, card, wallet payment တွေကို support လုပ်ပြီး receipt print ထုတ်နိုင်ပါတယ်။",
            icon: "💳",
        },
    ];


    return (
        <section
            id="features"
            className="relative overflow-hidden bg-orange-50 px-4 py-24 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/10" />
                <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-red-400/20 blur-3xl dark:bg-red-500/10" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-bold text-orange-700 shadow-sm backdrop-blur dark:border-orange-300/15 dark:bg-white/10 dark:text-orange-200">
                        Restaurant Features
                    </div>

                    <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Everything your restaurant needs
                    </h2>

                    <p className="mt-5 text-base font-medium leading-8 text-slate-700 dark:text-white/65 md:text-lg">
                        Order management, kitchen workflow, delivery, payment checkout
                        တွေအားလုံးကို modern POS system တစ်ခုထဲမှာ အသုံးပြုနိုင်ပါတယ်။
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((item) => (
                        <div
                            key={item.title}
                            className="group rounded-[2rem] border border-orange-100 bg-white/85 p-6 shadow-xl shadow-orange-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-950/10 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20 dark:hover:bg-white/[0.13]"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl shadow-sm transition group-hover:scale-105 dark:bg-orange-400/10">
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

export default RestaurantFeaturesSection
