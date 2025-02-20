"use client";

import { FilterChip } from "../Filter";
import { dealerships, serviceTypes, modeOfOrders, statuses } from "./data";

export interface Filters {
  dealership: string;
  serviceType: string;
  modeOfOrder: string;
  status: string;
}

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="w-max flex items-center gap-4">
      <FilterChip
        label="Dealership"
        options={dealerships}
        value={filters.dealership}
        onChange={(value) => onFilterChange({ ...filters, dealership: value })}
      />
      <FilterChip
        label="Service type"
        options={serviceTypes}
        value={filters.serviceType}
        onChange={(value) => onFilterChange({ ...filters, serviceType: value })}
      />
      <FilterChip
        label="Mode of order"
        options={modeOfOrders}
        value={filters.modeOfOrder}
        onChange={(value) => onFilterChange({ ...filters, modeOfOrder: value })}
      />
      <FilterChip
        label="Status"
        options={statuses}
        value={filters.status}
        onChange={(value) => onFilterChange({ ...filters, status: value })}
      />
    </div>
  );
}
