import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashBoard({ children }) {
  return (
    <div className="h-screen flex  bg-background">
      <div className="flex border   overflow-hidden ">
        <DashboardSidebar></DashboardSidebar>
      </div>

      <div className=" flex-1  overflow-y-hidden">
        <div className=" w-full py-4 border  overflow-y-hidden">navbar </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
