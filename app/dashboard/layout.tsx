import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 mt-12 p-6 bg-[#F9F9F9]">{children}</main>
      </div>
    </div>
  );
}
