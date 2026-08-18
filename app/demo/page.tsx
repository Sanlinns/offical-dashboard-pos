import Link from "next/link";
import {
  ShoppingBasket,
  UtensilsCrossed,
  Shirt,
  ArrowRight,
} from "lucide-react";

const demos = [
  {
    title: "Supermarket POS",
    description:
      "Explore products, barcode checkout, inventory and sales workflow.",
    href: "/demo/supermarket",
    icon: ShoppingBasket,
    features: ["Products", "Barcode", "Inventory", "Checkout"],
  },
  {
    title: "Restaurant POS",
    description:
      "Try table management, ordering, checkout and restaurant workflow.",
    href: "/demo/restaurant",
    icon: UtensilsCrossed,
    features: ["Tables", "Orders", "Menu", "Checkout"],
  },
  {
    title: "Fashion POS",
    description:
      "Explore fashion inventory with size, color and product variants.",
    href: "/demo/fashion",
    icon: Shirt,
    features: ["Products", "Size", "Color", "Inventory"],
  },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full border px-4 py-1.5 text-sm text-muted-foreground">
            Binhlaig POS Demo
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Experience Binhlaig POS
            <span className="block text-primary">
              before getting started
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Choose a business type and explore how Binhlaig POS works
            using sample data.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => {
            const Icon = demo.icon;

            return (
              <div
                key={demo.title}
                className="group rounded-3xl border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  {demo.title}
                </h2>

                <p className="mt-3 text-muted-foreground">
                  {demo.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {demo.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border bg-muted/50 px-3 py-1 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={demo.href}
                  className="mt-8 inline-flex items-center gap-2 font-medium text-primary"
                >
                  Try Demo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          Demo mode uses sample data and does not affect production data.
        </div>
      </section>
    </main>
  );
}