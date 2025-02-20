"use client";

import Image from "next/image";

interface TableActionsProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function TableActions({ search, onSearchChange }: TableActionsProps) {
  return (
    <div className="w-max flex gap-4">
      <button className="p-2 rounded-lg hover:bg-gray-100">
          <Image src={"/assets/download.svg"} alt={""} width={20} height={20} />
      </button>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
        />
        <span className="material-icons-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <Image src={"/assets/search.svg"} alt={""} width={20} height={20} />
        </span>
      </div>
    </div>
  );
}
