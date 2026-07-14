"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Utensils,
} from "lucide-react";
import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";
import Image from "next/image";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Menu Control", href: "#menu" },
      { label: "Pricing", href: "#pricing" },
      { label: "Demo", href: "#demo" },
    ],
  },
  {
    title: "Restaurant",
    links: [
      { label: "Table Orders", href: "#features" },
      { label: "Kitchen Display", href: "#features" },
      { label: "Delivery Orders", href: "#features" },
      { label: "Payments", href: "#features" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact Us", href: "#contact" },
      { label: "Documentation", href: "#docs" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];


const BRAND_NAME = "Binhlaig";
const BRAND_ICON_LIGHT = "/logo/bg.png";
const BRAND_ICON_DARK = "/logo/bg_darkmode.png";

export default function RestaurantFooter() {
  const darkMode = false;

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-orange-50 px-4 pt-24 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-300/25 blur-3xl dark:bg-orange-500/10" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-red-300/20 blur-3xl dark:bg-red-500/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent dark:via-white/15" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* CTA Card */}
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-orange-100 bg-white/85 p-6 shadow-2xl shadow-orange-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:shadow-black/30 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-700 dark:border-orange-300/15 dark:bg-orange-400/10 dark:text-orange-200">
                <Utensils className="h-4 w-4" />
                Ready for your restaurant?
              </div>

              <h2 className="max-w-3xl text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                Start managing orders, tables,
                <br className="hidden sm:block" />
                kitchen and payments today.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-700 dark:text-white/65">
                Restaurant POS ကို အသုံးပြုပြီး table order, takeaway,
                delivery, kitchen workflow, payment checkout တွေကို
                တစ်နေရာတည်းမှာ စီမံနိုင်ပါတယ်။
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="#demo"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 text-sm font-black text-white shadow-xl shadow-orange-600/25 transition hover:-translate-y-0.5"
              >
                Start Demo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="mailto:hello@restaurantpos.com"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Main */}
        <div className="grid gap-12 border-t border-orange-100 py-12 dark:border-white/10 lg:grid-cols-[1.2fr_1.8fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg">
                <Image
                  // src={BRAND_ICON}
                  src={darkMode ? BRAND_ICON_DARK : BRAND_ICON_LIGHT}
                  alt=""
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </span>

              <div className="leading-tight">
                <span className="block text-lg font-black tracking-tight text-slate-950 dark:text-white">
                  Restaurant POS
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-white/55">
                  Table • Kitchen • Orders
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-slate-600 dark:text-white/60">
              A modern POS system for restaurants, cafes, food courts and
              delivery-focused businesses.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-white/60">
                <Phone className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                <span>+81 90-0000-0000</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-white/60">
                <Mail className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                <span>hello@restaurantpos.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-white/60">
                <MapPin className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                <span>Tokyo, Japan</span>
              </div>
            </div>
          </div>

          {/* Links */}
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
                        className="text-sm font-semibold text-slate-600 transition hover:text-orange-600 dark:text-white/60 dark:hover:text-orange-300"
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
        <div className="flex flex-col gap-5 border-t border-orange-100 py-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-slate-500 dark:text-white/50">
            © {new Date().getFullYear()} Restaurant POS. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-50 hover:text-orange-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-orange-300"
            >
              <IconBrandFacebook className="h-4 w-4" />
            </Link>


            <Link
              href="#"
              aria-label="Twitter"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-50 hover:text-orange-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-orange-300"
            >
              <IconBrandTwitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}