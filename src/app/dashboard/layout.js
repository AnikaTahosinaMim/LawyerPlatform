import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Link from "next/link";

export default function DashBoard({ children }) {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Dashboard Navbar */}
        <header className="border-b px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <Link
                href="/"
                className="font-semibold hover:text-blue-600 transition-colors"
              >
                Home
              </Link>

              <Link
                href="/dashboard"
                className="font-semibold hover:text-blue-600 transition-colors"
              >
                Dashboard
              </Link>
            </div>

            <h2 className="text-lg sm:text-xl font-bold">
              Lawyer Platform
            </h2>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-5 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}