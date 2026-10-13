"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

/* ======================================================
   NAVIGATION
====================================================== */

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Academics",
    href: "/academics",
  },
  {
    label: "Campus",
    href: "/campus",
  },
  {
    label: "Career",
    href: "/careers",
  },
];

/* ======================================================
   COMPONENT
====================================================== */

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === "/";

  /* ======================================================
     SCROLL
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ======================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ====================================================== */

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* ======================================================
     HEADER STATE
  ====================================================== */

  const showSolidHeader =
    !isHomePage || isScrolled || isOpen;

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

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

        ${isScrolled ? "top-0" : "top-9"}

        ${
          showSolidHeader
            ? "border-b border-border/80 bg-white/95 shadow-[0_8px_30px_rgba(23,40,92,0.07)] backdrop-blur-xl"
            : "border-b border-white/15 bg-transparent backdrop-blur-[6px]"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-[1240px]
          items-center
          justify-between
          px-5

          sm:px-6
          lg:px-8
        "
      >
        {/* ==================================================
            LEFT — LOGO
        ================================================== */}

        <div className="flex shrink-0 items-center">
          <Link
            href="/"
            aria-label="HP Ghosh Memorial Foundation - Home"
            className="
              relative
              z-10
              flex
              items-center
              transition-opacity
              duration-300
              hover:opacity-85
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
                w-[78px]
                object-contain

                sm:w-[84px]
                lg:w-[88px]
              "
            />
          </Link>
        </div>

        {/* ==================================================
            CENTER — DESKTOP NAVIGATION
        ================================================== */}

        <nav
          aria-label="Primary navigation"
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-7

            lg:flex
            xl:gap-9
          "
        >
          {navItems.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                scroll
                className={`
                  group
                  relative
                  py-2
                  text-[14px]
                  font-medium
                  transition-colors
                  duration-300

                  ${
                    showSolidHeader
                      ? isActive
                        ? "text-red"
                        : "text-navy hover:text-red"
                      : isActive
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                  }
                `}
              >
                {item.label}

                {/* ACTIVE / HOVER LINE */}
                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      showSolidHeader
                        ? "bg-red"
                        : "bg-white"
                    }

                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* ==================================================
            RIGHT — CTA
        ================================================== */}

        <div className="ml-auto hidden items-center lg:flex">
          <Link
            href="/contact"
            scroll
            className="
              inline-flex
              h-11
              items-center
              justify-center
              rounded-xl
              bg-red
              px-6
              text-sm
              font-semibold
              text-white
              shadow-[0_8px_24px_rgba(237,50,61,0.18)]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-[0_12px_28px_rgba(237,50,61,0.25)]
              hover:brightness-[0.97]
            "
          >
            Contact Us
          </Link>
        </div>

        {/* ==================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
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
            <X className="size-6 stroke-[1.6]" />
          ) : (
            <Menu className="size-6 stroke-[1.6]" />
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
              ? "max-h-[520px] border-t border-border/80 opacity-100"
              : "max-h-0 border-t border-transparent opacity-0"
          }
        `}
      >
        <nav
          aria-label="Mobile navigation"
          className="
            mx-auto
            max-w-[1240px]
            px-5
            pb-6
            pt-2

            sm:px-6
          "
        >
          {navItems.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                scroll
                onClick={() => setIsOpen(false)}
                className={`
                  flex
                  min-h-14
                  items-center
                  border-b
                  border-border/70
                  text-[15px]
                  font-medium
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? "text-red"
                      : "text-navy hover:text-red"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}

          {/* MOBILE CTA */}

          <Link
            href="/contact"
            scroll
            onClick={() => setIsOpen(false)}
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
              shadow-[0_8px_24px_rgba(237,50,61,0.18)]
              transition-all
              duration-300

              hover:brightness-[0.97]
            "
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}