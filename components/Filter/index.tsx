"use client";

import Image from "next/image";

interface FilterChipProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function FilterChip({
  label,
  options,
  value,
  onChange,
}: FilterChipProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white border border-[#F5F5F5] rounded-[4px] px-4 py-2 pr-8 text-sm font-normal focus:outline-none focus:border-gray-300"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {label}: {option}
          </option>
        ))}
      </select>
      <span className="material-icons-outlined absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
        <Image src={"/assets/down-arrow.svg"} alt={""} width={20} height={20} />
      </span>
    </div>
  );
}
