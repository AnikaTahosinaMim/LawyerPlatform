import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Link from "next/link";

export default function DashBoard({ children }) {
  return (
    <div className="h-screen flex bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col">
        {/* Dashboard Navbar */}
        <div className="h-16 border-b flex items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-semibold hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="font-semibold hover:text-blue-600"
            >
              Dashboard
            </Link>
          </div>

          <h2 className="font-bold text-lg">
            Lawyer Platform
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {children}
        </div>
      </div>
    </div>
  );
}