"use client";

import Link from "next/link";
import { Drawer, Button } from "@heroui/react";
import { House, Bars } from "@gravity-ui/icons";
import { AiOutlineProduct } from "react-icons/ai";
import Image from "next/image";
import Icon from "@/Assets/icon.png";
import { authClient } from "@/lib/auth-client";
import { IoAddCircleOutline } from "react-icons/io5";
import {
  MdManageAccounts,
  MdOutlineSettingsApplications,
} from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function DashboardSideBar() {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const role = user?.role || "founder";
  console.log(role, "user");
  const dashboardItems = {
    founder: [
      { icon: House, label: "Home", href: "/" },
      {
        icon: GrOverview,
        label: "Overview",
        href: "/dashboard/founder/overview",
      },
      {
        icon: AiOutlineProduct,
        label: "My Startup",
        href: "/dashboard/founder/startups",
      },
      {
        icon: IoAddCircleOutline,
        label: "Add Opportunity",
        href: "/dashboard/founder/add-opportunity",
      },
      {
        icon: MdManageAccounts,
        label: "Manage Opportunities",
        href: "/dashboard/founder/opportunities",
      },
      {
        icon: MdOutlineSettingsApplications,
        label: "Applications",
        href: "/dashboard/founder/applications",
      },
    ],
    collaborator: [
      { icon: House, label: "Home", href: "/" },
      {
        icon: GrOverview,
        label: "Overview",
        href: "/dashboard/collaborator/overview",
      },
      {
        icon: MdOutlineSettingsApplications,
        label: "Applications",
        href: "/dashboard/collaborator/applications",
      },
    ],
    admin: [
      { icon: House, label: "Home", href: "/" },
      {
        icon: GrOverview,
        label: "Overview",
        href: "/dashboard/admin/overview",
      },
      {
        icon: FaUserLarge,
        label: "Manage Users",
        href: "/dashboard/admin/users",
      },
      {
        icon: MdManageAccounts,
        label: "Manage Startups",
        href: "/dashboard/admin/manage-startups",
      },
      {
        icon: RiMoneyDollarCircleFill,
        label: "Transactions",
        href: "/dashboard/admin/transtions",
      },
    ],
  };
  const navItems = dashboardItems[role];

  return (
    <>
      <div className="lg:hidden">
        <Drawer>
          <Drawer.Trigger>
            <div variant="bordered" className="flex items-center gap-2">
              <Bars className="size-5" />
            </div>
          </Drawer.Trigger>
          <Drawer.Backdrop />
          <Drawer.Content placement="left">
            <Drawer.Dialog className="w-60 bg-white dark:bg-slate-950">
              <Drawer.CloseTrigger className="bg-blue-200 text-black mt-3" />

              <Drawer.Header>
                <Drawer.Heading>
                  {" "}
                  <Link
                    href="/"
                    className="flex items-center gap-1 text-orange-600 dark:text-white border rounded-2xl shadow-2xl w-40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center border text-2xl rounded-xl shadow">
                      <Image
                        src={Icon}
                        alt="logo"
                        height={25}
                        width={25}
                        className="w-6"
                      />
                    </div>
                    <span className="text-xs font-bold">StartUp Forge</span>
                  </Link>
                </Drawer.Heading>
                <hr />
              </Drawer.Header>

              <Drawer.Body>
                <nav className="flex flex-col gap-2 mt-4">
                  {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="
                          flex items-center gap-3
                          rounded-xl px-3 py-2.5
                          text-sm
                          text-slate-700 dark:text-slate-300
                          hover:bg-slate-100 dark:hover:bg-white/5
                          transition
                        "
                      >
                        <Icon className="size-5 opacity-80" />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer>
      </div>

      <aside
        className="
          hidden lg:flex
          flex-col
          w-60
          h-screen
          border-r-2
          border-slate-200/60
          dark:border-white/10
          bg-white/70
          dark:bg-slate-950/70
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-200/60 dark:border-white/10">
          <Link
            href="/"
            className="flex items-center gap-1 text-orange-600 dark:text-white border rounded-2xl shadow-xl w-50 h-12 pl-2"
          >
            <div className="flex h-10 w-10 items-center justify-center border text-2xl rounded-xl shadow">
              <Image
                src={Icon}
                alt="logo"
                height={25}
                width={25}
                className="w-6"
              />
            </div>
            <span className="text-xl font-bold">StartUp Forge</span>
          </Link>
        </div>
        <hr />
        {/* Nav */}
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="
                  flex items-center gap-3
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  text-slate-700 dark:text-slate-300
                  hover:bg-slate-100 dark:hover:bg-white/5
                  hover:text-indigo-600
                  transition
                "
              >
                <Icon className="size-5 opacity-80" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Drawer, Button } from "@heroui/react";
// import { House, Bars } from "@gravity-ui/icons";
// import { AiOutlineProduct } from "react-icons/ai";
// import { IoAddCircleOutline } from "react-icons/io5";
// import {
//   MdManageAccounts,
//   MdOutlineSettingsApplications,
// } from "react-icons/md";
// import { GrOverview } from "react-icons/gr";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
// import { FaUserLarge } from "react-icons/fa6";
// import { usePathname } from "next/navigation";

// import Icon from "@/Assets/icon.png";
// import { authClient } from "@/lib/auth-client";

// export default function DashboardSideBar() {
//   const pathname = usePathname();

//   const { data: session, isPending } = authClient.useSession();

//   const dashboardItems = {
//     founder: [
//       { icon: House, label: "Home", href: "/" },
//       {
//         icon: GrOverview,
//         label: "Overview",
//         href: "/dashboard/founder/overview",
//       },
//       {
//         icon: AiOutlineProduct,
//         label: "My Startup",
//         href: "/dashboard/founder/startups",
//       },
//       {
//         icon: IoAddCircleOutline,
//         label: "Add Opportunity",
//         href: "/dashboard/founder/add-opportunity",
//       },
//       {
//         icon: MdManageAccounts,
//         label: "Manage Opportunities",
//         href: "/dashboard/founder/opportunities",
//       },
//       {
//         icon: MdOutlineSettingsApplications,
//         label: "Applications",
//         href: "/dashboard/founder/applications",
//       },
//     ],

//     collaborator: [
//       { icon: House, label: "Home", href: "/" },
//       {
//         icon: GrOverview,
//         label: "Overview",
//         href: "/dashboard/collaborator/overview",
//       },
//       {
//         icon: MdOutlineSettingsApplications,
//         label: "Applications",
//         href: "/dashboard/collaborator/applications",
//       },
//     ],

//     admin: [
//       { icon: House, label: "Home", href: "/" },
//       {
//         icon: GrOverview,
//         label: "Overview",
//         href: "/dashboard/admin/overview",
//       },
//       {
//         icon: FaUserLarge,
//         label: "Manage Users",
//         href: "/dashboard/admin/users",
//       },
//       {
//         icon: MdManageAccounts,
//         label: "Manage Startups",
//         href: "/dashboard/admin/manage-startups",
//       },
//       {
//         icon: RiMoneyDollarCircleFill,
//         label: "Transactions",
//         href: "/dashboard/admin/transactions",
//       },
//     ],
//   };

//   if (isPending) {
//     return (
//       <aside className="hidden lg:flex w-72 h-screen border-r border-slate-200 dark:border-white/10">
//         <div className="p-6">Loading...</div>
//       </aside>
//     );
//   }

//   const role = session?.user?.role?.toLowerCase() || "founder";

//   const navItems = dashboardItems[role] || dashboardItems.founder;

//   return (
//     <>
//       {/* Mobile Sidebar */}
//       <div className="lg:hidden">
//         <Drawer>
//           <Drawer.Trigger>
//             <div variant="light" className="fixed left-4 z-50">
//               <Bars />
//             </div>
//           </Drawer.Trigger>

//           <Drawer.Backdrop />

//           <Drawer.Content placement="left">
//             <Drawer.Dialog className="w-60 bg-white dark:bg-slate-950">
//               <Drawer.CloseTrigger className="bg-blue-200 text-black mt-3" />

//               <Drawer.Header>
//                 <Drawer.Heading>
//                   <Link
//                     href="/"
//                     className="flex items-center gap-1 text-orange-600 dark:text-white border rounded-2xl shadow-2xl w-40"
//                   >
//                     <div className="flex h-10 w-10 items-center justify-center border rounded-xl shadow">
//                       <Image
//                         src={Icon}
//                         alt="logo"
//                         height={25}
//                         width={25}
//                         className="w-6"
//                       />
//                     </div>

//                     <span className="text-xs font-bold">StartUp Forge</span>
//                   </Link>
//                 </Drawer.Heading>
//               </Drawer.Header>

//               <Drawer.Body>
//                 <nav className="flex flex-col gap-2 mt-4">
//                   {navItems.map((item) => {
//                     const ItemIcon = item.icon;
//                     const isActive = pathname === item.href;

//                     return (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition
//                         ${
//                           isActive
//                             ? "bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
//                             : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
//                         }`}
//                       >
//                         <ItemIcon className="size-5 opacity-80" />
//                         {item.label}
//                       </Link>
//                     );
//                   })}
//                 </nav>
//               </Drawer.Body>
//             </Drawer.Dialog>
//           </Drawer.Content>
//         </Drawer>
//       </div>

//       {/* Desktop Sidebar */}
//       <aside
//         className="
//           hidden lg:flex
//           flex-col
//           w-72
//           sticky top-0
//           h-screen
//           overflow-y-auto
//           border-r
//           border-slate-200/60
//           dark:border-white/10
//           bg-white/70
//           dark:bg-slate-950/70
//           backdrop-blur-xl
//         "
//       >
//         <div className="p-6 border-b border-slate-200/60 dark:border-white/10">
//           <Link
//             href="/"
//             className="flex items-center gap-1 text-orange-600 dark:text-white border rounded-2xl shadow-xl w-fit px-2 py-1"
//           >
//             <div className="flex h-10 w-10 items-center justify-center border rounded-xl shadow">
//               <Image
//                 src={Icon}
//                 alt="logo"
//                 height={25}
//                 width={25}
//                 className="w-6"
//               />
//             </div>

//             <span className="text-xl font-bold">StartUp Forge</span>
//           </Link>
//         </div>

//         <nav className="flex flex-col gap-2 p-4">
//           {navItems.map((item) => {
//             const ItemIcon = item.icon;
//             const isActive = pathname === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition
//                 ${
//                   isActive
//                     ? "bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
//                     : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-indigo-600"
//                 }`}
//               >
//                 <ItemIcon className="size-5 opacity-80" />
//                 {item.label}
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>
//     </>
//   );
// }
