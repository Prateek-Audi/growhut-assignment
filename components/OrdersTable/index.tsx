"use client";

import { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { orders } from "./data";
import { FilterBar } from "./FilterBar";
import { TableActions } from "./TableActions";

// Define the type for an order
interface Order {
  date: string;
  orderId: string;
  dealership: string;
  customerName: string;
  serviceType: string;
  modeOfOrder: string;
  status: string;
}

// Explicitly type filters
const columns: { key: keyof Order; label: string }[] = [
  { key: "date", label: "Date" },
  { key: "orderId", label: "Order ID" },
  { key: "dealership", label: "Dealership" },
  { key: "customerName", label: "Customer Name" },
  { key: "serviceType", label: "Service Type" },
  { key: "modeOfOrder", label: "Mode of Order" },
  { key: "status", label: "Status" },
];

export function OrdersTable() {
  const [filters, setFilters] = useState({
    dealership: "All",
    serviceType: "All",
    modeOfOrder: "All",
    status: "All",
  });
  const [search, setSearch] = useState("");

  const filteredData = orders.filter((order) => {
    const matchesSearch = Object.values(order).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    );

    const matchesFilters = Object.entries(filters).every(([key, value]) =>
      value === "All" ? true : order[key as keyof Order] === value
    );

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="space-y-4 rounded-lg bg-white py-4">
      <div className="flex justify-between items-center gap-8 px-4">
        <FilterBar filters={filters} onFilterChange={setFilters} />
        <TableActions search={search} onSearchChange={setSearch} />
      </div>

      <Table
        aria-label="Orders table"
        classNames={{
          wrapper: "min-h-[400px] border-none shadow-none rounded-lg",base:"bg-white rounded-lg"
        }}
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn
              key={column.key}
              className="bg-[#F9F9F9] text-[#6F6F6F]"
            >
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={index} className="border-b border-[#FAFAFA]">
              {columns.map((column) => (
                <TableCell key={column.key} className="py-5 text-sm font-normal text-black">
                  {column.key === "status" ? (
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        row.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {row[column.key as keyof Order]}
                    </span>
                  ) : (
                    row[column.key as keyof Order]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
