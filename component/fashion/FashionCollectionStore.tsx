import React from 'react'

const FashionCollectionStore = () => {
    const categories = ["All", "Dresses", "Bags", "Shoes", "Accessories"];


    const products = [
        {
            name: "Elegant Summer Dress",
            category: "Dresses",
            price: "Ks 45,000",
            oldPrice: "Ks 58,000",
            stock: "In Stock",
            sizes: "S / M / L",
            colors: ["bg-pink-400", "bg-black", "bg-orange-300"],
            image:
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
        },
        {
            name: "Classic Leather Handbag",
            category: "Bags",
            price: "Ks 72,000",
            oldPrice: "Ks 89,000",
            stock: "Best Seller",
            sizes: "One Size",
            colors: ["bg-amber-800", "bg-black", "bg-rose-300"],
            image:
                "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=900&auto=format&fit=crop",
        },
        {
            name: "Street Style Sneakers",
            category: "Shoes",
            price: "Ks 68,000",
            oldPrice: "Ks 78,000",
            stock: "Low Stock",
            sizes: "38 / 39 / 40",
            colors: ["bg-white", "bg-slate-900", "bg-pink-300"],
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
        },
        {
            name: "Premium Sunglasses",
            category: "Accessories",
            price: "Ks 28,000",
            oldPrice: "Ks 35,000",
            stock: "In Stock",
            sizes: "One Size",
            colors: ["bg-black", "bg-yellow-700", "bg-slate-400"],
            image:
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=900&auto=format&fit=crop",
        },
        {
            name: "Modern Casual Outfit",
            category: "Dresses",
            price: "Ks 52,000",
            oldPrice: "Ks 64,000",
            stock: "New Arrival",
            sizes: "S / M / L / XL",
            colors: ["bg-violet-400", "bg-pink-300", "bg-slate-800"],
            image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
        },
        {
            name: "Luxury Shoulder Bag",
            category: "Bags",
            price: "Ks 95,000",
            oldPrice: "Ks 120,000",
            stock: "Limited",
            sizes: "One Size",
            colors: ["bg-red-900", "bg-black", "bg-stone-300"],
            image:
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop",
        },
    ];
    return (
        <section
            id="collections"
            className="relative overflow-hidden bg-white px-4 py-24 text-slate-950 transition-colors duration-500 dark:bg-[#020617] dark:text-white sm:px-6 lg:px-8"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />
                <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-300/25 blur-3xl dark:bg-violet-500/10" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-bold text-pink-700 shadow-sm backdrop-blur dark:border-pink-300/15 dark:bg-pink-400/10 dark:text-pink-200">
                        Fashion Collections
                    </div>

                    <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Explore your fashion store
                    </h2>

                    <p className="mt-5 text-base font-medium leading-8 text-slate-700 dark:text-white/65 md:text-lg">
                        Dresses, bags, shoes, accessories တွေကို size, color, stock,
                        price အလိုက် fashion POS store style နဲ့ ပြသနိုင်ပါတယ်။
                    </p>
                </div>

                {/* Category filter UI */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    {categories.map((item, index) => (
                        <button
                            key={item}
                            type="button"
                            className={`rounded-full border px-5 py-2.5 text-sm font-black transition hover:-translate-y-0.5 ${index === 0
                                    ? "border-transparent bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg shadow-pink-600/20"
                                    : "border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-pink-50 hover:text-slate-950 dark:border-white/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-white"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Product grid */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((item) => (
                        <div
                            key={item.name}
                            className="group overflow-hidden rounded-[2rem] border border-pink-100 bg-white/85 p-3 shadow-xl shadow-pink-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-950/10 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
                        >
                            {/* Image */}
                            <div className="relative h-80 overflow-hidden rounded-[1.5rem] bg-pink-50 dark:bg-white/5">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    draggable={false}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />

                                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-slate-950 shadow-sm backdrop-blur">
                                    {item.category}
                                </div>

                                <div
                                    className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-black shadow-sm backdrop-blur ${item.stock === "Low Stock"
                                            ? "bg-orange-100 text-orange-700"
                                            : item.stock === "Limited"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-emerald-100 text-emerald-700"
                                        }`}
                                >
                                    {item.stock}
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-xl">
                                    <div className="text-lg font-black">{item.name}</div>
                                    <div className="mt-1 text-xs font-semibold text-white/70">
                                        Sizes: {item.sizes}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-black text-slate-950 dark:text-white">
                                            {item.name}
                                        </h3>

                                        <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-white/55">
                                            {item.category}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <div className="text-lg font-black text-slate-950 dark:text-white">
                                            {item.price}
                                        </div>
                                        <div className="text-xs font-bold text-slate-400 line-through dark:text-white/35">
                                            {item.oldPrice}
                                        </div>
                                    </div>
                                </div>

                                {/* Colors */}
                                <div className="mt-5 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-white/35">
                                            Colors
                                        </div>

                                        <div className="mt-2 flex items-center gap-2">
                                            {item.colors.map((color, index) => (
                                                <span
                                                    key={index}
                                                    className={`h-5 w-5 rounded-full border border-white shadow ring-1 ring-slate-200 dark:ring-white/20 ${color}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-pink-600 dark:bg-white dark:text-slate-950 dark:hover:bg-pink-50"
                                    >
                                        Add Item
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom banner */}
                <div className="mt-16 overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-r from-pink-500 to-violet-600 p-8 text-white shadow-2xl shadow-pink-600/20 dark:border-white/10">
                    <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                        <div>
                            <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                                Manage every fashion item beautifully.
                            </h3>

                            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/75">
                                Product variant, barcode, category, stock quantity, daily sales,
                                and discount control တွေကို fashion store အတွက် တစ်နေရာတည်းမှာ
                                စီမံနိုင်ပါတယ်။
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { value: "1.2K", label: "Items" },
                                { value: "24", label: "Brands" },
                                { value: "98%", label: "Ready" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-white/15 bg-white/15 p-4 text-center backdrop-blur"
                                >
                                    <div className="text-2xl font-black">{stat.value}</div>
                                    <div className="mt-1 text-xs font-bold text-white/65">
                                        {stat.label}
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

export default FashionCollectionStore