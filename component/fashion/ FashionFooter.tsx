"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Collections", href: "#collections" },
      { label: "POS Features", href: "#features" },
      { label: "Inventory", href: "#inventory" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Fashion Store",
    links: [
      { label: "Size & Color Stock", href: "#features" },
      { label: "Barcode Checkout", href: "#features" },
      { label: "Sales Report", href: "#features" },
      { label: "Discount Control", href: "#features" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact Sales", href: "#contact" },
      { label: "Documentation", href: "#docs" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];


type FooterProps = {
  darkMode: boolean;
};



const BRAND_NAME = "Binhlaig";
const BRAND_ICON_LIGHT = "/logo/bg.png";
const BRAND_ICON_DARK = "/logo/bg_darkmode.png";


export default function FashionFooter({ darkMode }: FooterProps) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-rose-50 px-4 pt-24 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-300/25 blur-3xl dark:bg-violet-500/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pink-300/60 to-transparent dark:via-white/15" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* CTA Card */}
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-pink-100 bg-white/85 p-6 shadow-2xl shadow-pink-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-black/30 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-bold text-pink-700 dark:border-pink-300/15 dark:bg-pink-400/10 dark:text-pink-200">
                <Sparkles className="h-4 w-4" />
                Ready for your fashion store?
              </div>

              <h2 className="max-w-3xl text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                Manage collections, stock,
                <br className="hidden sm:block" />
                checkout and sales beautifully.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-700 dark:text-white/65">
                Fashion POS ကို အသုံးပြုပြီး size, color, barcode,
                inventory, daily sales report, discount control တွေကို
                တစ်နေရာတည်းမှာ စီမံနိုင်ပါတယ်။
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="#demo"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 text-sm font-black text-white shadow-xl shadow-pink-600/25 transition hover:-translate-y-0.5"
              >
                Start Demo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="mailto:hello@fashionpos.com"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-pink-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Main */}
        <div className="grid gap-12 border-t border-pink-100 py-12 dark:border-white/10 lg:grid-cols-[1.2fr_1.8fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              {/* <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-white shadow-lg shadow-pink-600/25 transition group-hover:scale-105">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-rose-50 dark:ring-slate-950" />
              </div> */}


               <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg">
                            <Image
                              src={darkMode ? BRAND_ICON_DARK : BRAND_ICON_LIGHT}
                              alt=""
                              fill
                              sizes="32px"
                              className="object-contain"
                            />
                          </span>

              <div className="leading-tight">
                <span className="block text-lg font-black tracking-tight text-slate-950 dark:text-white">
                  Fashion POS
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-white/55">
                  Boutique • Inventory • Sales
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-slate-600 dark:text-white/60">
              A modern POS system for fashion stores, boutiques, clothing
              shops, shoe stores, and accessory businesses.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-white/60">
                <Phone className="h-4 w-4 text-pink-600 dark:text-pink-300" />
                <span>+81 90-0000-0000</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-white/60">
                <Mail className="h-4 w-4 text-pink-600 dark:text-pink-300" />
                <span>hello@fashionpos.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-white/60">
                <MapPin className="h-4 w-4 text-pink-600 dark:text-pink-300" />
                <span>Tokyo, Japan</span>
              </div>
            </div>
          </div>

          {/* Link Groups */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-950 dark:text-white">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm font-semibold text-slate-600 transition hover:text-pink-600 dark:text-white/60 dark:hover:text-pink-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-pink-100 py-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-slate-500 dark:text-white/50">
            © {new Date().getFullYear()} Fashion POS. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#privacy"
              className="text-sm font-semibold text-slate-500 transition hover:text-pink-600 dark:text-white/50 dark:hover:text-pink-300"
            >
              Privacy
            </Link>

            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-white/20" />

            <Link
              href="#terms"
              className="text-sm font-semibold text-slate-500 transition hover:text-pink-600 dark:text-white/50 dark:hover:text-pink-300"
            >
              Terms
            </Link>

            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-white/20" />

            <Link
              href="#contact"
              className="text-sm font-semibold text-slate-500 transition hover:text-pink-600 dark:text-white/50 dark:hover:text-pink-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}