"use client";

import { Phone } from "lucide-react";

export default function TopMarquee() {
  const notice = (
    <div className="flex shrink-0 items-center gap-5 px-8 text-xs sm:text-sm">
      <div className="flex items-center gap-2 whitespace-nowrap">
        <span className="font-semibold">Notice:</span>
        <span className="text-white/85">
          Admissions are now open.
        </span>
      </div>

      <span className="h-3 w-px bg-white/30" />

      <div className="flex items-center gap-2 whitespace-nowrap">
        <Phone className="size-3.5 stroke-[1.5]" />
        <span>For enquiries: +91 95641 36341</span>
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden bg-navy text-white">
      <div className="flex h-9 items-center">
        <div className="marquee-track flex shrink-0 items-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>{notice}</div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="marquee-track flex shrink-0 items-center"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>{notice}</div>
          ))}
        </div>
      </div>
    </div>
  );
}