import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const academicLinks = [
  { label: "MBBS", href: "/academics#courses" },
  { label: "B.Sc Nursing", href: "/academics#courses" },
  { label: "Admissions", href: "/academics#admissions" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-navy text-white">
      {/* ==================================================
          TOP CTA
      ================================================== */}

      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-red sm:text-[10px]">
                H P Ghosh Memorial Foundation
              </p>

              <h2 className="mt-4 max-w-2xl text-[1.8rem] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-3xl lg:text-[2.5rem]">
                Building institutions.
                <span className="block font-normal text-white/45">
                  Shaping futures.
                </span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                h-11
                w-fit
                items-center
                gap-2
                rounded-xl
                bg-red
                px-5
                text-xs
                font-semibold
                text-white
                transition-[transform,box-shadow,opacity]
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_10px_28px_rgba(237,50,61,0.25)]
                hover:opacity-95
              "
            >
              Get in Touch

              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.7}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ==================================================
          MAIN FOOTER
      ================================================== */}

      <div className="relative">
        {/* subtle decorative depth */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-24 h-[360px] w-[360px] rounded-full border-[70px] border-white/[0.025]"
        />

        <div className="relative mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.75fr_0.85fr_1.1fr] lg:gap-12">
            {/* ============================================
                BRAND
            ============================================ */}

            <div>
              <Link href="/" className="inline-block">
                <p className="text-xl font-semibold tracking-[-0.03em] text-white">
                  HPGMF
                </p>

                <p className="mt-1 max-w-[220px] text-[9px] font-medium uppercase leading-4 tracking-[0.17em] text-white/40">
                  H P Ghosh Memorial Foundation
                </p>
              </Link>

              <p className="mt-5 max-w-sm text-[13px] leading-6 text-white/50">
                Creating enduring institutions and opportunities across
                education, healthcare and community development.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-red" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/35">
                  Knowledge · Opportunity · Future
                </span>
              </div>
            </div>

            {/* ============================================
                EXPLORE
            ============================================ */}

            <FooterColumn title="Explore">
              {primaryLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </FooterColumn>

            {/* ============================================
                ACADEMICS
            ============================================ */}

            <FooterColumn title="Academics">
              {academicLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </FooterColumn>

            {/* ============================================
                CONTACT
            ============================================ */}

            <div>
              <FooterHeading>Contact</FooterHeading>

              <div className="mt-5 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-red"
                    strokeWidth={1.6}
                  />

                  <div>
                    <p className="text-[13px] font-medium text-white/85">
                      Medical College Campus
                    </p>

                    <p className="mt-1 text-[12px] leading-5 text-white/45">
                      Lalchari, Ambassa
                      <br />
                      Dhalai District, Tripura
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-red"
                    strokeWidth={1.6}
                  />

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                      Careers
                    </p>

                    <a
                      href="mailto:careers@hpghoshfoundation.org"
                      className="mt-1 block break-all text-[12px] text-white/70 transition-colors hover:text-white"
                    >
                      careers@hpghoshfoundation.org
                    </a>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[12px] font-semibold text-white"
                >
                  Contact Us

                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-red transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.6}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          BOTTOM
      ================================================== */}

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-[10px] text-white/35">
            © {year} H P Ghosh Memorial Foundation. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-[10px] text-white/35 transition-colors hover:text-white/70"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-[10px] text-white/35 transition-colors hover:text-white/70"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ======================================================
   FOOTER HELPERS
====================================================== */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-red" />

      <h3 className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
        {children}
      </h3>
    </div>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>

      <div className="mt-5 flex flex-col gap-3.5">
        {children}
      </div>
    </div>
  );
}

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        w-fit
        items-center
        gap-2
        text-[13px]
        text-white/55
        transition-colors
        duration-200
        hover:text-white
      "
    >
      <span className="h-px w-0 bg-red transition-all duration-300 group-hover:w-3" />

      {label}
    </Link>
  );
}