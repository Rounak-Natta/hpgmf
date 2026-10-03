"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

/* ======================================================
   NAVIGATION
   ====================================================== */

const leftNavItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Academics",
    href: "#academics",
  },
];

const rightNavItems = [
  {
    label: "Campus",
    href: "#campus",
  },
  {
    label: "Career",
    href: "#career",
  },
];

/* ======================================================
   COMPONENT
   ====================================================== */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileNavItems = [
    ...leftNavItems,
    ...rightNavItems,
  ];

  /* ======================================================
     SCROLL STATE
     ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ======================================================
     HELPERS
     ====================================================== */

  const closeMenu = () => {
    setIsOpen(false);
  };

  const showSolidHeader =
    isScrolled || isOpen;

  /* ======================================================
     RENDER
     ====================================================== */

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        z-50
        transition-[top,background-color,border-color,box-shadow]
        duration-500
        ease-out

        ${
          isScrolled
            ? "top-0"
            : "top-9"
        }

        ${
          showSolidHeader
            ? "border-b border-border bg-white shadow-[0_8px_30px_rgba(23,40,92,0.08)]"
            : "border-b border-white/15 bg-transparent backdrop-blur-[8px]"
        }
      `}
    >
      {/* ==================================================
          MAIN NAVBAR
          ================================================== */}

      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        {/* ==================================================
            DESKTOP NAVIGATION
            ================================================== */}

        <div className="hidden w-full items-center justify-center lg:flex">
          {/* LEFT */}

          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-8 pr-12"
          >
            {leftNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  text-sm
                  font-medium
                  transition-colors
                  duration-300

                  ${
                    showSolidHeader
                      ? "text-navy hover:text-red"
                      : "text-white hover:text-white/70"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CENTER LOGO SPACE */}

          <div
            aria-hidden="true"
            className="w-20 shrink-0"
          />

          {/* RIGHT */}

          <nav
            aria-label="Secondary navigation"
            className="flex items-center gap-8 pl-12"
          >
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  text-sm
                  font-medium
                  transition-colors
                  duration-300

                  ${
                    showSolidHeader
                      ? "text-navy hover:text-red"
                      : "text-white hover:text-white/70"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

            {/* CONTACT */}

            <Link
              href="#contact"
              className="
                inline-flex
                h-11
                items-center
                justify-center
                rounded-xl
                bg-red
                px-5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:opacity-90
              "
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* ==================================================
            LOGO

            Mobile  -> left
            Desktop -> center
            ================================================== */}

        <Link
          href="/"
          onClick={closeMenu}
          aria-label="HP Ghosh Memorial Foundation - Home"
          className="
            absolute
            left-5
            top-1/2
            z-10
            -translate-y-1/2

            sm:left-6

            lg:left-1/2
            lg:-translate-x-1/2
          "
        >
          <Image
            src="/logo.png"
            alt="HP Ghosh Memorial Foundation"
            width={180}
            height={80}
            priority
            className="
              h-auto
              w-[80px]
              object-contain
              lg:w-[80px]
            "
          />
        </Link>

        {/* ==================================================
            MOBILE MENU BUTTON
            ================================================== */}

        <button
          type="button"
          onClick={() =>
            setIsOpen((current) => !current)
          }
          aria-label={
            isOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className={`
            ml-auto
            flex
            size-10
            items-center
            justify-center
            rounded-lg
            transition-all
            duration-300
            lg:hidden

            ${
              showSolidHeader
                ? "text-navy hover:bg-light-grey"
                : "text-white hover:bg-white/10"
            }
          `}
        >
          {isOpen ? (
            <X className="size-6 stroke-[1.5]" />
          ) : (
            <Menu className="size-6 stroke-[1.5]" />
          )}
        </button>
      </div>

      {/* ==================================================
          MOBILE NAVIGATION
          ================================================== */}

      <div
        id="mobile-navigation"
        className={`
          overflow-hidden
          bg-white
          transition-[max-height,opacity]
          duration-300
          ease-out
          lg:hidden

          ${
            isOpen
              ? "max-h-[520px] border-t border-border opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-7xl px-5 pb-6 pt-2 sm:px-6"
        >
          {mobileNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="
                flex
                min-h-14
                items-center
                border-b
                border-border/70
                text-base
                font-medium
                text-navy
                transition-colors
                duration-200
                hover:text-red
              "
            >
              {item.label}
            </Link>
          ))}

          {/* MOBILE CONTACT */}

          <Link
            href="#contact"
            onClick={closeMenu}
            className="
              mt-5
              flex
              h-12
              w-full
              items-center
              justify-center
              rounded-xl
              bg-red
              px-5
              text-sm
              font-semibold
              text-white
              transition-opacity
              duration-300
              hover:opacity-90
            "
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}