"use client";

import { useEffect, useState } from "react";
import { getAnalytics } from "@/lib/api/hiring";

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    getAnalytics().then((data) => {
      setAnalytics(data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        Analytics Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-4xl font-bold">
            {analytics.totalUsers}
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-gray-500">Total Lawyers</h3>
          <p className="text-4xl font-bold">
            {analytics.totalLawyers}
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-gray-500">Total Hires</h3>
          <p className="text-4xl font-bold">
            {analytics.totalHires}
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-gray-500">Total Revenue</h3>
          <p className="text-4xl font-bold">
            ৳ {analytics.totalRevenue}
          </p>
        </div>

      </div>
    </div>
  );
}