"use client";

import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { icon: "dashboard", label: "Dashboard", path: "/dashboard" },
  { icon: "dealer", label: "Dealerships", path: "/dashboard" },
  { icon: "users", label: "Customers", path: "/dashboard" },
  { icon: "list", label: "All Orders", path: "/dashboard" },
  { icon: "user", label: "Employees", path: "/dashboard" },
];

const InventoryItems = [
  { icon: "inventory", label: "Inventory", path: "/dashboard" },
  { icon: "req", label: "Fulfillment requests", path: "/dashboard" },
];
const settingsItems = [
  { icon: "car", label: "Vehicle Directory", path: "/dashboard" },
  { icon: "wrench", label: "Services Database", path: "/dashboard" },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-gray-200">
      <div className="h-full px-3 py-4 flex flex-col">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100 ${
                item.label === "All Orders" ? "bg-red-50 text-red-500" : ""
              }`}
            >
              <span
                className={`material-icons-outlined text-xl ${
                  item.label === "All Orders" ? "text-red-500" : "text-gray-500"
                }`}
              >
                <Image
                  src={`/assets/${item.icon}.svg`}
                  alt={""}
                  width={20}
                  height={20}
                />
              </span>
              <span className="ml-3">{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="px-2 text-sm font-medium text-gray-500">
            Inventory Management
          </h3>
          <div className="mt-2 space-y-2">
            {InventoryItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100 ${
                  item.label === "All Orders" ? "bg-red-50 text-red-500" : ""
                }`}
              >
                <span
                  className={`material-icons-outlined text-xl ${
                    item.label === "All Orders"
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  <Image
                    src={`/assets/${item.icon}.svg`}
                    alt={""}
                    width={20}
                    height={20}
                  />
                </span>
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="px-2 text-sm font-medium text-gray-500">Settings</h3>
          <div className="mt-2 space-y-2">
            {settingsItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100 ${
                  item.label === "All Orders" ? "bg-red-50 text-red-500" : ""
                }`}
              >
                <span
                  className={`material-icons-outlined text-xl ${
                    item.label === "All Orders"
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  <Image
                    src={`/assets/${item.icon}.svg`}
                    alt={""}
                    width={20}
                    height={20}
                  />
                </span>
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
