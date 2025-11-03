"use client";

import KIPCards from "@/src/modules/dashboard/components/kip-cards";
import RecentOrders from "@/src/modules/dashboard/components/recent-orders";
import RevenueChart from "@/src/modules/dashboard/components/revenue-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* ---- KPI CARDS ---- */}
      <KIPCards />

      {/* ---- REVENUE CHART ---- */}
      <RevenueChart />

      {/* ---- RECENT ORDERS ---- */}
      <RecentOrders />
    </div>
  );
}
