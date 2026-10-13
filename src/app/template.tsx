"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const startExit = window.setTimeout(() => {
      setLeaving(true);
    }, 720);

    const finishLoading = window.setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      window.clearTimeout(startExit);
      window.clearTimeout(finishLoading);
    };
  }, []);

  return (
    <>
      {/* PAGE */}
      <div
        className={`
          transition-opacity
          duration-500
          ease-out
          ${loading ? "opacity-0" : "opacity-100"}
        `}
      >
        {children}
      </div>

      {/* PRELOADER */}
      {loading && (
        <div
          role="status"
          aria-label="Loading page"
          className={`
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#f7f9fc]
            transition-opacity
            duration-300
            ease-out
            ${
              leaving
                ? "pointer-events-none opacity-0"
                : "opacity-100"
            }
          `}
        >
          {/* SOFT BACKGROUND DEPTH */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[360px]
              w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-light-blue/60
              blur-[90px]

              sm:h-[480px]
              sm:w-[480px]
            "
          />

          {/* SUBTLE HORIZONTAL DEPTH */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-[48%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-navy/[0.04]
              to-transparent
            "
          />

          {/* CONTENT */}
          <div
            className={`
              relative
              flex
              flex-col
              items-center
              px-6
              transition-all
              duration-500
              ease-out
              ${
                leaving
                  ? "-translate-y-1 scale-[0.99] opacity-0"
                  : "translate-y-0 scale-100 opacity-100"
              }
            `}
          >
            {/* LOGO */}
            <div className="preloader-logo">
              <Image
                src="/logo-old.png"
                alt="H P Ghosh Memorial Foundation"
                width={300}
                height={120}
                priority
                className="
                  h-auto
                  w-[195px]
                  object-contain

                  sm:w-[235px]
                "
              />
            </div>

            {/* DIVIDER */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-7 bg-navy/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              <span className="h-px w-7 bg-navy/15" />
            </div>

            {/* BRAND */}
            <p
              className="
                preloader-brand
                mt-4
                text-center
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-navy/40

                sm:text-[9px]
              "
            >
              H P Ghosh Memorial Foundation
            </p>

            <span className="sr-only">Loading</span>
          </div>
        </div>
      )}
    </>
  );
}