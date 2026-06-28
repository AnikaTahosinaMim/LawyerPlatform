// "use client";

import { auth } from "@/lib/auth";
import {
  Bars,
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { headers } from "next/headers";
import { BiMoney } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export default async function DashboardSidebar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const role = user?.role;
  console.log(user, "user data");
  const dashBoardItems = {
    user: [
      {
        icon: FaUser,
        label: "hiring-history ",
        link: "/dashboard/user/hiring-history",
      },
      {
        icon: FaUser,
        label: "update-profile",
        link: "/dashboard/user/profile",
      },
      {
        icon: FaUser,
        label: "comments",
        link: "/dashboard/user/comments",
      },
    ],
    lawyer: [
      {
        icon: FaUser,
        label: "hiring-history ",
        link: "/dashboard/lawyer/hiring-history ",
      },
      {
        icon: FaUser,
        label: "update-profile",
        link: "/dashboard/lawyer/manage-legal-profile",
      },
      {
        icon: BiMoney,
        label: "comments",
        link: "/dashboard/user/comments",
      },
    ],
    admin: [
      {
        icon: FaUser,
        label: "manage-users  ",
        link: "/dashboard/admin/manage-users ",
      },
      {
        icon: FaUser,
        label: "all-transactions",
        link: "/dashboard/admin/all-transactions",
      },
      {
        icon: FaUser,
        label: "analytics",
        link: "/dashboard/admin/analytics",
      },
    ],
  };

  const navItems = dashBoardItems[role];
  //   const navItems = [
  //     { icon: House, label: "Home" },
  //     { icon: Magnifier, label: "Search" },
  //     { icon: Bell, label: "Notifications" },
  //     { icon: Envelope, label: "Messages" },
  //     { icon: Person, label: "Profile" },
  //     { icon: Gear, label: "Settings" },
  //   ];

  return (
    <>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Drawer>
          <Drawer.Trigger asChild>
            <Bars />
            Menu
          </Drawer.Trigger>

          <Drawer.Backdrop />

          <Drawer.Content placement="left" className="w-72">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />

              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>

              <Drawer.Body>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-default transition"
                    >
                      <item.icon className="size-5" />
                      {item.label}
                    </button>
                  ))}
                </nav>
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col gap-2 border-r min-h-screen p-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-default transition"
          >
            <item.icon className="size-5" />
            {item.label}
          </button>
        ))}
      </aside>
    </>
  );
}
