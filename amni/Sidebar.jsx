// "use server";
// import { auth } from "@/lib/auth";
// import {
//   Bars,
//   Bell,
//   Envelope,
//   Gear,
//   House,
//   Magnifier,
//   Person,
// } from "@gravity-ui/icons";
// import { Button, Drawer } from "@heroui/react";
// import { ChartArea, User2Icon } from "lucide-react";
// import { headers } from "next/headers";
// import Image from "next/image";
// import Link from "next/link";
// import { BiMoney } from "react-icons/bi";
// import { TbAsset } from "react-icons/tb";

// export default async function Sidebar() {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });
//   const user = session?.user;
//   const role = user?.role;
//   console.log(role);
//   console.log(user, "get session akhne");
//   const dashboardItems = {
//     seller: [
//       { icon: ChartArea, label: "overview", link: "/dashboard/seller" },
//       {
//         icon: TbAsset,
//         label: "seller products",
//         link: "/dashboard/seller/products",
//       },
//       {
//         icon: BiMoney,
//         label: "transection",
//         link: "/dashboard/seller/transection",
//       },
//     ],
//     buyer: [
//       { icon: ChartArea, label: "overview", link: "/dashboard/buyer" },
//       {
//         icon: TbAsset,
//         label: "buyer products",
//         link: "/dashboard/buyer/products",
//       },
//       {
//         icon: BiMoney,
//         label: "transection",
//         link: "/dashboard/buyer/transection",
//       },
//     ],
//     admin: [
//       { icon: ChartArea, label: "overview", link: "/dashboard/admin" },
//       {
//         icon: User2Icon,
//         label: "usermanagement",
//         link: "/dashboard/admin/products",
//       },
//       {
//         icon: BiMoney,
//         label: "transection",
//         link: "/dashboard/admin/transection",
//       },
//     ],
//   };
//   // const navItems = [
//   //   { icon: House, label: "Home" },
//   //   { icon: Magnifier, label: "Search" },
//   //   { icon: Bell, label: "Notifications" },
//   //   { icon: Envelope, label: "Messages" },
//   //   { icon: Person, label: "Profile" },
//   //   { icon: Gear, label: "Settings" },
//   // ];
//   const navItems = dashboardItems[role];

//   return (
//     <Drawer>
//       <Button className={"md:hidden sm:block"} variant="secondary">
//         <Bars />
//         Menu
//       </Button>
//       <nav className="flex flex-col md:block sm:hidden gap-1 w-[200px] mt-5 border border-right-1 ">
//         <Image
//           src={"/logo-xl.png"}
//           height={"100"}
//           width={"100"}
//           className="h-8 w-full object-cover"
//           alt="image"
//         ></Image>
//         {navItems.map((item) => (
//           <Link key={item.label} href={item.link}>
//             <button
//               key={item.label}
//               className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
//               type="button"
//             >
//               <item.icon className="size-5 text-muted" />
//               {item.label}
//             </button>
//           </Link>
//         ))}
//       </nav>
//       <Drawer.Backdrop>
//         <Drawer.Content placement="left">
//           <Drawer.Dialog>
//             <Drawer.CloseTrigger />
//             <Drawer.Header>
//               <Drawer.Heading>Navigation</Drawer.Heading>
//             </Drawer.Header>
//             <Drawer.Body>
//               <nav className="flex flex-col  gap-1">
//                 {navItems.map((item) => (
//                   <Link key={item.label} href={item.link}>
//                     <button
//                       key={item.label}
//                       className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
//                       type="button"
//                     >
//                       <item.icon className="size-5 text-muted" />
//                       {item.label}
//                     </button>
//                   </Link>
//                 ))}
//               </nav>
//             </Drawer.Body>
//           </Drawer.Dialog>
//         </Drawer.Content>
//       </Drawer.Backdrop>
//     </Drawer>
//   );
// }
