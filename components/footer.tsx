"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

type FooterProps = {
  darkMode: boolean;
};

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "POS System", href: "#pos" },
      { label: "Inventory", href: "#inventory" },
      { label: "Analytics", href: "#analytics" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Supermarket POS", href: "#supermarket" },
      { label: "Restaurant POS", href: "#restaurant" },
      { label: "Staff Management", href: "#staff" },
      { label: "Receipt System", href: "#receipt" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
  },
];

export default function Footer({ darkMode }: FooterProps) {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className={`relative mt-auto overflow-hidden border-t transition-colors duration-500 ${
        darkMode
          ? "border-white/10 bg-slate-950 text-white"
          : "border-slate-200 bg-slate-50 text-slate-950"
      }`}
    >
      {/* background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl ${
            darkMode ? "bg-cyan-400/10" : "bg-blue-500/10"
          }`}
        />
        <div
          className={`absolute -right-24 bottom-0 h-72 w-72 rounded-full blur-3xl ${
            darkMode ? "bg-amber-300/10" : "bg-purple-500/10"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-lg ${
                  darkMode
                    ? "border border-white/15 bg-white/10 text-white"
                    : "bg-slate-950 text-white"
                }`}
              >
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <p
                  className={`text-lg font-bold tracking-tight ${
                    darkMode ? "text-white" : "text-slate-950"
                  }`}
                >
                  Smart POS
                </p>
                <p
                  className={`text-xs ${
                    darkMode ? "text-white/55" : "text-slate-500"
                  }`}
                >
                  Supermarket & Restaurant System
                </p>
              </div>
            </Link>

            <p
              className={`mt-5 max-w-md text-sm leading-6 ${
                darkMode ? "text-white/62" : "text-slate-600"
              }`}
            >
              Manage sales, products, receipts, staff, inventory and analytics
              from one clean POS dashboard.
            </p>

            <div
              className={`mt-6 space-y-3 text-sm ${
                darkMode ? "text-white/62" : "text-slate-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <Mail
                  className={`h-4 w-4 ${
                    darkMode ? "text-white" : "text-slate-950"
                  }`}
                />
                <span>support@smartpos.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  className={`h-4 w-4 ${
                    darkMode ? "text-white" : "text-slate-950"
                  }`}
                />
                <span>+81 90 0000 0000</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  className={`h-4 w-4 ${
                    darkMode ? "text-white" : "text-slate-950"
                  }`}
                />
                <span>Tokyo, Japan</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3
                  className={`text-sm font-semibold ${
                    darkMode ? "text-white" : "text-slate-950"
                  }`}
                >
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`text-sm transition ${
                          darkMode
                            ? "text-white/55 hover:text-white"
                            : "text-slate-600 hover:text-slate-950"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-12 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between ${
            darkMode ? "border-white/10" : "border-slate-200"
          }`}
        >
          <p
            className={`text-sm ${
              darkMode ? "text-white/50" : "text-slate-500"
            }`}
          >
            © {year ?? ""} Smart POS. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: IconBrandFacebook, label: "Facebook" },
              { icon: IconBrandInstagram, label: "Instagram" },
              { icon: IconBrandLinkedin, label: "LinkedIn" },
              { icon: IconBrandGithub, label: "Github" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition hover:-translate-y-0.5 hover:shadow-md ${
                    darkMode
                      ? "border-white/10 bg-white/5 text-white/55 hover:bg-white/10 hover:text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}