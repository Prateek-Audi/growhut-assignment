"use client";

import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-30 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="ml-4 text-xl font-semibold">AK Motors</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-icons-outlined text-gray-600">
              <Image src={"/assets/Bell.svg"} alt={""} width={20} height={20} />
            </span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              12
            </span>
          </div>
          <button className="flex items-center gap-2 text-gray-600">
            <span>AK Motors</span>
            <span className="material-icons-outlined">
              <Image
                src={"/assets/down-arrow.svg"}
                alt={""}
                width={20}
                height={20}
              />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
