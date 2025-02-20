import { OrdersTable } from "@/components/OrdersTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Orders",
  description: "View and manage all orders",
};

export default function DashboardPage() {
  return <OrdersTable />;
}
