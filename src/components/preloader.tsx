"use client";

import Image from "next/image";

interface PreloaderProps {
  leaving?: boolean;
}

export default function Preloader({ leaving = false }: PreloaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={!leaving}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="sr-only">Loading</span>

      {/* Soft halo behind the logo */}
      <div
        aria-hidden
        className="pl-halo pointer-events-none absolute h-[320px] w-[320px] rounded-full"
      />

      <div
        className={`relative flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          leaving ? "-translate-y-3 scale-[0.97] opacity-0" : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        <div className="pl-logo">
          <Image
            src="/logo.png"
            alt="HP Ghosh Memorial Foundation"
            width={130}
            height={90}
            priority
            className="h-auto w-[105px] object-contain sm:w-[120px]"
          />
        </div>

        {/* Progress hairline */}
        <div className="pl-track mt-8 h-px w-28 overflow-hidden rounded-full">
          <div className="pl-bar h-full w-1/2 rounded-full" />
        </div>
      </div>

      <style>{`
        .pl-halo {
          background: radial-gradient(closest-side, rgba(0,0,0,0.045), rgba(0,0,0,0));
          animation: pl-breathe 3.2s ease-in-out infinite;
        }
        .pl-logo {
          animation: pl-reveal 0.9s cubic-bezier(0.22,1,0.36,1) both;
        }
        .pl-track {
          background: rgba(0,0,0,0.08);
          animation: pl-fade 0.6s 0.3s ease both;
        }
        .pl-bar {
          background: var(--preloader-accent, #111827);
          animation: pl-slide 1.4s cubic-bezier(0.65,0,0.35,1) infinite;
          will-change: transform;
        }
        @keyframes pl-reveal {
          from { opacity: 0; transform: translateY(8px) scale(0.98); filter: blur(6px); }
          to   { opacity: 1; transform: none; filter: blur(0); }
        }
        @keyframes pl-fade {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes pl-slide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes pl-breathe {
          0%, 100% { transform: scale(0.95); opacity: 0.7; }
          50%      { transform: scale(1.05); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pl-halo, .pl-logo, .pl-track { animation: none; }
          .pl-bar { animation: none; width: 100%; opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}