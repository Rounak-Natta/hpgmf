import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
} from "lucide-react";

/* ======================================================
   DATA
====================================================== */

const positions = [
  "Principal",
  "Vice Principal",
  "Dean",
  "Professors",
  "Associate Professors",
  "Assistant Professors",
  "Senior Residents",
  "Tutors",
];

/* ======================================================
   PAGE
====================================================== */

export function CareersPageContent() {
  return (
    <>
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-14 pt-10 sm:px-8 sm:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          {/* CONTENT */}

          <div>
            <SectionLabel>Careers</SectionLabel>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/45">
              H P Ghosh Memorial Medical College
            </p>

            <h1 className="mt-3 max-w-xl text-[2.7rem] font-semibold leading-[1.03] tracking-[-0.05em] text-navy sm:text-5xl lg:text-[4.1rem]">
              Grow With Us.
              <span className="block font-normal text-navy/45">
                Shape healthcare futures.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
              Be part of building an institution committed to developing the
              next generation of healthcare professionals.
            </p>

            <p className="mt-4 max-w-xl text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
              We welcome academicians, clinicians and professionals who share
              our commitment to{" "}
              <strong className="font-medium text-navy">
                academic excellence, clinical learning and compassionate care.
              </strong>
            </p>

            <a
              href="#openings"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-red"
            >
              View current openings

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.7}
              />
            </a>
          </div>

          {/* IMAGE */}

          <CareerImage />
        </div>
      </section>

      {/* ==================================================
          OPENINGS
      ================================================== */}

      <section
        id="openings"
        className="border-y border-border bg-light-grey/55"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-5 border-b border-navy/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Current Openings</SectionLabel>

              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
                Faculty Recruitment
                <span className="font-normal text-navy/45"> 2026</span>
              </h2>
            </div>

            <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
              <MapPin
                className="h-4 w-4 text-red"
                strokeWidth={1.6}
              />

              Lalchari, Ambassa, Tripura
            </div>
          </div>

          <div className="grid gap-10 pt-8 lg:grid-cols-[1fr_290px] lg:gap-16">
            {/* POSITIONS */}

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-navy/45">
                Positions
              </p>

              <div className="mt-4 grid border-t border-border sm:grid-cols-2">
                {positions.map((position, index) => (
                  <div
                    key={position}
                    className={`
                      group flex items-center gap-4 border-b border-border py-4
                      transition-colors duration-300
                      hover:bg-white
                      ${index % 2 === 0 ? "sm:pr-7" : "sm:border-l sm:pl-7"}
                    `}
                  >
                    <span className="text-[9px] font-semibold tabular-nums text-red">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[14px] font-medium text-navy sm:text-[15px]">
                      {position}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[12px] leading-5 text-muted-foreground">
                <span className="font-medium text-navy">Qualifications:</span>{" "}
                As per applicable NMC norms.
              </p>
            </div>

            {/* DETAILS */}

            <aside className="border-t border-navy/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <div className="flex items-center gap-2">
                  <CalendarDays
                    className="h-4 w-4 text-red"
                    strokeWidth={1.6}
                  />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Application Deadline
                  </p>
                </div>

                <p className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-navy">
                  14 October
                </p>

                <p className="text-sm text-navy/55">2026</p>
              </div>

              <div className="mt-7 border-t border-border pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  What We Offer
                </p>

                <p className="mt-3 text-[14px] leading-6 text-navy">
                  Competitive compensation, accommodation and food.
                </p>
              </div>

              <a
                href="/careers/hpgmf_jd.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 border-b border-navy pb-1.5 text-[13px] font-semibold text-navy transition-colors hover:border-red hover:text-red"
              >
                View Job Description

                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.6}
                />
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ==================================================
          APPLY
      ================================================== */}

      <section id="apply" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid overflow-hidden rounded-[1.5rem] bg-navy shadow-[0_24px_65px_rgba(23,40,92,0.14)] lg:grid-cols-[1fr_0.8fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-red">
                Apply
              </p>

              <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Ready to Join Us?
              </h2>

              <p className="mt-4 max-w-lg text-[13px] leading-6 text-white/55 sm:text-[14px]">
                Review the relevant Job Description and send your application
                with the required details to our recruitment team.
              </p>
            </div>

            <div className="border-t border-white/10 bg-white/[0.045] p-6 sm:p-8 lg:flex lg:flex-col lg:justify-center lg:border-l lg:border-t-0 lg:p-10">
              <div className="flex items-center gap-2">
                <Mail
                  className="h-4 w-4 text-red"
                  strokeWidth={1.6}
                />

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Send Your Application
                </p>
              </div>

              <a
                href="mailto:careers@hpghoshfoundation.org?subject=Application%20-%20Faculty%20Recruitment%202026"
                className="mt-3 block break-all text-[16px] font-medium text-white transition-colors hover:text-red sm:text-lg"
              >
                careers@hpghoshfoundation.org
              </a>

              <a
                href="mailto:careers@hpghoshfoundation.org?subject=Application%20-%20Faculty%20Recruitment%202026"
                className="group mt-6 inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-white"
              >
                Apply via Email

                <ArrowRight
                  className="h-4 w-4 text-red transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ======================================================
   CAREER IMAGE
====================================================== */

function CareerImage() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-3 top-3 h-full w-full rounded-[1.5rem] bg-light-blue/70 sm:left-4 sm:top-4"
      />

      <div className="group relative h-[270px] overflow-hidden rounded-[1.5rem] ring-1 ring-navy/10 shadow-[0_24px_65px_rgba(23,40,92,0.14)] transition-[transform,box-shadow] duration-500 sm:h-[390px] lg:h-[480px] lg:hover:-translate-y-1 lg:hover:shadow-[0_30px_80px_rgba(23,40,92,0.18)]">
        <Image
          src="/careers/careers-hero.webp"
          alt="Careers at H P Ghosh Memorial Medical College"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/70 via-navy/15 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
            H P Ghosh Memorial
          </p>

          <div className="mt-1 flex items-end justify-between gap-4">
            <p className="text-lg font-medium text-white sm:text-xl">
              Medical College
            </p>

            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:block">
              Learn · Lead · Serve
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   LABEL
====================================================== */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-7 bg-red" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-red sm:text-[10px]">
        {children}
      </span>
    </div>
  );
}