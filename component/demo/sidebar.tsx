
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   BarChart3,
//   Boxes,
//   ClipboardList,
//   Clock1,
//   LayoutDashboard,
//   Package,
//   ReceiptText,
//   Settings,
//   ShoppingCart,
//   Store,
//   Users,
//   X,
//   UserRoundCog,
// } from "lucide-react";

// type DashboardSidebarProps = {
//   open: boolean;
//   collapsed: boolean;
//   onClose: () => void;
// };

// type SidebarItem = {
//   title: string;
//   href: string;
//   icon: React.ElementType;
// };

// const sidebarItems: SidebarItem[] = [
//   {
//     title: "Dashboard",
//     href: "/dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     title: " Admin",
//     href: "/admin",
//     icon: UserRoundCog,
//   },
//   {
//     title: "Products",
//     href: "/dashboard/product",
//     icon: Package,
//   },
//   {
//     title: "Inventory",
//     href: "/dashboard/inventory",
//     icon: Boxes,
//   },
//   {
//     title: "Receipts",
//     href: "/dashboard/receipt-settings",
//     icon: ReceiptText,
//   },
//   {
//     title: "Staff",
//     href: "/dashboard/staff",
//     icon: Users,
//   },
//   {
//     title: "Tasks",
//     href: "/dashboard/tasks",
//     icon: ClipboardList,
//   },
//   {
//     title: "Analytics",
//     href: "/dashboard/sales-analytics",
//     icon: BarChart3,
//   },
//   {
//     title:"Time card",
//     href:"/timecard",
//     icon: Clock1,
//   }


// ];

// export function DashboardSidebar({
//   open,
//   collapsed,
//   onClose,
// }: DashboardSidebarProps) {
//   const pathname = usePathname();

//   const checkIsActive = (href: string) => {
//     if (href === "/dashboard") {
//       return pathname === "/dashboard";
//     }

//     return pathname.startsWith(href);
//   };

//   return (
//     <>
//       {/* Mobile background overlay */}
//       {open && (
//         <button
//           type="button"
//           aria-label="Close sidebar"
//           onClick={onClose}
//           className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
//         />
//       )}


//       <aside
//         className={`
//     fixed bottom-4 left-4 top-[94px] z-[70] lg:z-40
//     flex w-[270px] flex-col
//     rounded-2xl
//     border border-black/[0.1]
//     bg-white shadow-xl
//     transition-[width,transform] duration-300 ease-in-out
//    dark:border-white/10 dark:bg-slate-950
//     lg:translate-x-0
//     ${collapsed ? "lg:w-[76px]" : "lg:w-[220px]"}
//     ${open
//             ? "translate-x-0"
//             : "-translate-x-[calc(100%+2rem)]"
//           }
//   `}
//       >
//         {/* Sidebar header */}
//         <div
//           className={`
//             flex h-16 shrink-0 items-center
//             border-b border-slate-200
//             dark:border-white/10
//             ${collapsed
//               ? "justify-between px-4 lg:justify-center lg:px-2"
//               : "justify-between px-4"
//             }
//           `}
//         >
//           <Link
//             href="/dashboard"
//             onClick={onClose}
//             className="flex min-w-0 items-center gap-3"
//           >
//             {/* Brand icon */}
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
//               <Store size={20} />
//             </div>

//             {/* Brand name */}
//             <div
//               className={`
//                 min-w-0 overflow-hidden
//                 transition-all duration-300
//                 ${collapsed ? "lg:hidden" : "block"}
//               `}
//             >
//               <h1 className="whitespace-nowrap text-sm font-bold text-slate-950 dark:text-white">
//                 Binhlaig POS
//               </h1>

//               <p className="mt-0.5 whitespace-nowrap text-[11px] text-slate-500 dark:text-slate-400">
//                 Shop Dashboard
//               </p>
//             </div>
//           </Link>

//           {/* Mobile close button */}
//           <button
//             type="button"
//             aria-label="Close sidebar"
//             onClick={onClose}
//             className="
//               flex h-9 w-9 shrink-0 items-center justify-center
//               rounded-lg text-slate-500
//               transition hover:bg-slate-100
//               dark:text-slate-300 dark:hover:bg-white/10
//               lg:hidden
//             "
//           >
//             <X size={19} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 space-y-1 overflow-y-auto overflow-x-hidden p-3">
//           <p
//             className={`
//               mb-3 px-3 pt-2
//               text-[10px] font-semibold uppercase
//               tracking-[0.16em] text-slate-400
//               ${collapsed ? "lg:hidden" : "block"}
//             `}
//           >
//             Main menu
//           </p>

//           {sidebarItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = checkIsActive(item.href);

//             return (
//               <div
//                 key={item.href}
//                 className="group relative"
//               >
//                 <Link
//                   href={item.href}
//                   onClick={onClose}
//                   title={collapsed ? item.title : undefined}
//                   aria-label={item.title}
//                   className={`
//                     flex h-11 items-center rounded-xl
//                     text-sm font-medium
//                     transition-all duration-200
//                     ${collapsed
//                       ? "gap-3 px-3 lg:justify-center lg:px-0"
//                       : "gap-3 px-3"
//                     }
//                     ${isActive
//                       ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
//                       : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
//                     }
//                   `}
//                 >
//                   <Icon
//                     size={19}
//                     className="shrink-0"
//                   />

//                   <span
//                     className={`
//                       whitespace-nowrap
//                       ${collapsed ? "lg:hidden" : "block"}
//                     `}
//                   >
//                     {item.title}
//                   </span>
//                 </Link>
//               </div>
//             );
//           })}
//         </nav>

//         {/* Sidebar bottom */}
//         <div className="shrink-0 border-t border-slate-200 p-3 dark:border-white/10">
//           {/* Settings */}
//           <Link
//             href="/dashboard/settings"
//             onClick={onClose}
//             title={collapsed ? "Settings" : undefined}
//             aria-label="Settings"
//             className={`
//               flex h-11 items-center rounded-xl
//               text-sm font-medium
//               transition-all duration-200
//               ${collapsed
//                 ? "gap-3 px-3 lg:justify-center lg:px-0"
//                 : "gap-3 px-3"
//               }
//               ${pathname.startsWith("/dashboard/settings")
//                 ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
//                 : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
//               }
//             `}
//           >
//             <Settings
//               size={19}
//               className="shrink-0"
//             />

//             <span
//               className={`
//                 whitespace-nowrap
//                 ${collapsed ? "lg:hidden" : "block"}
//               `}
//             >
//               Settings
//             </span>
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// }









"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Boxes,
  ChefHat,
  ClipboardList,
  Clock1,
  LayoutDashboard,
  Package,
  ReceiptText,
  Settings,
  Shirt,
  ShoppingCart,
  Store,
  Table2,
  Tags,
  Users,
  UtensilsCrossed,
  X,
  UserRoundCog,
} from "lucide-react";

type DashboardSidebarProps = {
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
};

type SidebarItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

type BusinessType =
  | "supermarket"
  | "restaurant"
  | "fashion";

type SidebarConfig = {
  brandTitle: string;
  brandSubtitle: string;
  icon: React.ElementType;
  homeHref: string;
  items: SidebarItem[];
};

const supermarketItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/demo/supermarket",
    icon: LayoutDashboard,
  },
  {
    title: "Admin",
    href: "/demo/supermarket/admin",
    icon: UserRoundCog,
  },
  {
    title: "Products",
    href: "/demo/supermarket/products",
    icon: Package,
  },
  {
    title: "Inventory",
    href: "/demo/supermarket/inventory",
    icon: Boxes,
  },
  {
    title: "Receipts",
    href: "/demo/supermarket/receipts",
    icon: ReceiptText,
  },
  {
    title: "Staff",
    href: "/demo/supermarket/staff",
    icon: Users,
  },
  {
    title: "Tasks",
    href: "/demo/supermarket/tasks",
    icon: ClipboardList,
  },
  {
    title: "Analytics",
    href: "/demo/supermarket/analytics",
    icon: BarChart3,
  },
  {
    title: "Time Card",
    href: "/demo/supermarket/time-card",
    icon: Clock1,
  },
];

const restaurantItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/demo/restaurant",
    icon: LayoutDashboard,
  },
  {
    title: "Open POS",
    href: "/demo/restaurant/pos",
    icon: ShoppingCart,
  },
  {
    title: "Tables",
    href: "/demo/restaurant/tables",
    icon: Table2,
  },
  {
    title: "Orders",
    href: "/demo/restaurant/orders",
    icon: ReceiptText,
  },
  {
    title: "Menu",
    href: "/demo/restaurant/menu",
    icon: UtensilsCrossed,
  },
  {
    title: "Kitchen",
    href: "/demo/restaurant/kitchen",
    icon: ChefHat,
  },
  {
    title: "Inventory",
    href: "/demo/restaurant/inventory",
    icon: Boxes,
  },
  {
    title: "Staff",
    href: "/demo/restaurant/staff",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/demo/restaurant/analytics",
    icon: BarChart3,
  },
];

const fashionItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/demo/fashion",
    icon: LayoutDashboard,
  },
  {
    title: "Open POS",
    href: "/demo/fashion/pos",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    href: "/demo/fashion/products",
    icon: Shirt,
  },
  {
    title: "Variants",
    href: "/demo/fashion/variants",
    icon: Tags,
  },
  {
    title: "Inventory",
    href: "/demo/fashion/inventory",
    icon: Boxes,
  },
  {
    title: "Receipts",
    href: "/demo/fashion/receipts",
    icon: ReceiptText,
  },
  {
    title: "Staff",
    href: "/demo/fashion/staff",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/demo/fashion/analytics",
    icon: BarChart3,
  },
];

const sidebarConfigs: Record<
  BusinessType,
  SidebarConfig
> = {
  supermarket: {
    brandTitle: "Binhlaig POS",
    brandSubtitle: "Supermarket Dashboard",
    icon: Store,
    homeHref: "/demo/supermarket",
    items: supermarketItems,
  },

  restaurant: {
    brandTitle: "Binhlaig Restaurant",
    brandSubtitle: "Restaurant POS",
    icon: ChefHat,
    homeHref: "/demo/restaurant",
    items: restaurantItems,
  },

  fashion: {
    brandTitle: "Binhlaig Fashion",
    brandSubtitle: "Fashion Store POS",
    icon: Shirt,
    homeHref: "/demo/fashion",
    items: fashionItems,
  },
};

function getBusinessType(
  pathname: string,
): BusinessType {
  if (
    pathname === "/demo/restaurant" ||
    pathname.startsWith("/demo/restaurant/")
  ) {
    return "restaurant";
  }

  if (
    pathname === "/demo/fashion" ||
    pathname.startsWith("/demo/fashion/")
  ) {
    return "fashion";
  }

  return "supermarket";
}

export function DashboardSidebar({
  open,
  collapsed,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  const businessType =
    getBusinessType(pathname);

  const config =
    sidebarConfigs[businessType];

  const BrandIcon = config.icon;

  const checkIsActive = (
    href: string,
  ) => {
    if (href === config.homeHref) {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const settingsHref =
    businessType === "restaurant"
      ? "/demo/restaurant/settings"
      : businessType === "fashion"
        ? "/demo/fashion/settings"
        : "/demo/supermarket/settings";

  return (
    <>
      {/* Mobile background overlay */}
      {open && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="
            fixed inset-0
            z-40
            bg-black/40
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          bottom-4
          left-4
          top-[94px]
          z-[70]

          flex
          w-[270px]
          flex-col

          rounded-2xl

          border
          border-black/[0.1]

          bg-white

          shadow-xl

          transition-[width,transform]
          duration-300
          ease-in-out

          dark:border-white/10
          dark:bg-slate-950

          lg:z-40
          lg:translate-x-0

          ${
            collapsed
              ? "lg:w-[76px]"
              : "lg:w-[220px]"
          }

          ${
            open
              ? "translate-x-0"
              : "-translate-x-[calc(100%+2rem)]"
          }
        `}
      >
        {/* Header */}
        <div
          className={`
            flex
            h-16
            shrink-0
            items-center

            border-b
            border-slate-200

            dark:border-white/10

            ${
              collapsed
                ? "justify-between px-4 lg:justify-center lg:px-2"
                : "justify-between px-4"
            }
          `}
        >
          <Link
            href={config.homeHref}
            onClick={onClose}
            className="
              flex
              min-w-0
              items-center
              gap-3
            "
          >
            {/* Business icon */}
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center

                rounded-xl

                bg-blue-600
                text-white

                shadow-md
                shadow-blue-600/20

                transition-colors
                duration-300
              "
            >
              <BrandIcon size={20} />
            </div>

            {/* Brand text */}
            <div
              className={`
                min-w-0
                overflow-hidden

                transition-all
                duration-300

                ${
                  collapsed
                    ? "lg:hidden"
                    : "block"
                }
              `}
            >
              <h1
                className="
                  whitespace-nowrap
                  text-sm
                  font-bold
                  text-slate-950

                  dark:text-white
                "
              >
                {config.brandTitle}
              </h1>

              <p
                className="
                  mt-0.5
                  whitespace-nowrap
                  text-[11px]
                  text-slate-500

                  dark:text-slate-400
                "
              >
                {config.brandSubtitle}
              </p>
            </div>
          </Link>

          {/* Mobile close */}
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={onClose}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center

              rounded-lg

              text-slate-500

              transition

              hover:bg-slate-100

              dark:text-slate-300
              dark:hover:bg-white/10

              lg:hidden
            "
          >
            <X size={19} />
          </button>
        </div>

        {/* Navigation */}
        <nav
          className="
            flex-1
            space-y-1
            overflow-y-auto
            overflow-x-hidden
            p-3
          "
        >
          <p
            className={`
              mb-3
              px-3
              pt-2

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-slate-400

              ${
                collapsed
                  ? "lg:hidden"
                  : "block"
              }
            `}
          >
            {businessType === "restaurant"
              ? "Restaurant"
              : businessType === "fashion"
                ? "Fashion store"
                : "Main menu"}
          </p>

          {config.items.map((item) => {
            const Icon = item.icon;

            const isActive =
              checkIsActive(item.href);

            return (
              <div
                key={item.href}
                className="group relative"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  title={
                    collapsed
                      ? item.title
                      : undefined
                  }
                  aria-label={item.title}
                  className={`
                    flex
                    h-11
                    items-center

                    rounded-xl

                    text-sm
                    font-medium

                    transition-all
                    duration-200

                    ${
                      collapsed
                        ? "gap-3 px-3 lg:justify-center lg:px-0"
                        : "gap-3 px-3"
                    }

                    ${
                      isActive
                        ? `
                          bg-blue-600
                          text-white

                          shadow-md
                          shadow-blue-600/20
                        `
                        : `
                          text-slate-600

                          hover:bg-blue-50
                          hover:text-blue-700

                          dark:text-slate-300
                          dark:hover:bg-blue-500/10
                          dark:hover:text-blue-400
                        `
                    }
                  `}
                >
                  <Icon
                    size={19}
                    className="shrink-0"
                  />

                  <span
                    className={`
                      whitespace-nowrap

                      ${
                        collapsed
                          ? "lg:hidden"
                          : "block"
                      }
                    `}
                  >
                    {item.title}
                  </span>
                </Link>

                {/* Collapsed tooltip */}
                {collapsed && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[calc(100%+12px)]
                      top-1/2
                      z-[100]

                      hidden
                      -translate-y-1/2

                      whitespace-nowrap

                      rounded-lg

                      bg-slate-950

                      px-3
                      py-2

                      text-xs
                      font-medium
                      text-white

                      opacity-0

                      shadow-xl

                      transition-opacity

                      group-hover:opacity-100

                      dark:bg-white
                      dark:text-slate-950

                      lg:block
                    "
                  >
                    {item.title}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom */}
        <div
          className="
            shrink-0

            border-t
            border-slate-200

            p-3

            dark:border-white/10
          "
        >
          <Link
            href={settingsHref}
            onClick={onClose}
            title={
              collapsed
                ? "Settings"
                : undefined
            }
            aria-label="Settings"
            className={`
              flex
              h-11
              items-center

              rounded-xl

              text-sm
              font-medium

              transition-all
              duration-200

              ${
                collapsed
                  ? "gap-3 px-3 lg:justify-center lg:px-0"
                  : "gap-3 px-3"
              }

              ${
                pathname === settingsHref ||
                pathname.startsWith(`${settingsHref}/`)
                  ? `
                    bg-blue-600
                    text-white

                    shadow-md
                    shadow-blue-600/20
                  `
                  : `
                    text-slate-600

                    hover:bg-blue-50
                    hover:text-blue-700

                    dark:text-slate-300
                    dark:hover:bg-blue-500/10
                    dark:hover:text-blue-400
                  `
              }
            `}
          >
            <Settings
              size={19}
              className="shrink-0"
            />

            <span
              className={`
                whitespace-nowrap

                ${
                  collapsed
                    ? "lg:hidden"
                    : "block"
                }
              `}
            >
              Settings
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
}
