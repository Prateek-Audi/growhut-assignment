import { OrdersTable } from "@/components/OrdersTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Orders",
  description: "View and manage all orders",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl font-medium text-[#151515]">All Order</span>
      <OrdersTable />
    </div>
  );
}
