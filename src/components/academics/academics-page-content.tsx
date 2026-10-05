import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ======================================================
   DATA
====================================================== */

const courses = [
  {
    label: "Bachelor of Medicine & Bachelor of Surgery",
    title: "MBBS",
    description:
      "Medical education combining scientific foundations, clinical learning and patient-centred healthcare.",
    duration: "5.5 Years",
    admission: "NEET-UG",
    focus: "Medical Education · Clinical Learning",
    href: "#",
  },
  {
    label: "Bachelor of Science in Nursing",
    title: "B.Sc Nursing",
    description:
      "Professional nursing education focused on clinical knowledge, practical skills and compassionate patient care.",
    duration: "4 Years",
    admission: "Applicable Admission Norms",
    focus: "Patient Care · Practical Learning",
    href: "#",
  },
];

const steps = [
  { number: "01", title: "Explore" },
  { number: "02", title: "Eligibility" },
  { number: "03", title: "Apply" },
  { number: "04", title: "Admission" },
  { number: "05", title: "Enrol" },
];

/* ======================================================
   PAGE
====================================================== */

export function AcademicsPageContent() {
  return (
    <>
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-14 pt-10 sm:px-8 sm:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          {/* CONTENT */}

          <div>
            <SectionLabel>Academics</SectionLabel>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/45">
              Medical & Healthcare Education
            </p>

            <h1 className="mt-3 max-w-xl text-[2.7rem] font-semibold leading-[1.03] tracking-[-0.05em] text-navy sm:text-5xl lg:text-[4.1rem]">
              Learning for a
              <span className="block font-normal text-navy/45">
                career in healthcare.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
              Our academic ecosystem brings together professional knowledge,
              practical learning and human values to prepare capable healthcare
              professionals.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-9 bg-red" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-navy/45 sm:text-[10px]">
                Knowledge · Practice · Human Values
              </span>
            </div>
          </div>

          {/* IMAGE */}

          <HeroImage />
        </div>
      </section>

      {/* ==================================================
          COURSES
      ================================================== */}

      <section
        id="courses"
        className="border-y border-border bg-light-grey/55"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div>
            <SectionLabel>Courses</SectionLabel>

            <h2 className="mt-5 max-w-2xl text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-navy sm:text-4xl lg:text-5xl">
              Programmes for tomorrow&apos;s
              <span className="block font-normal text-navy/45">
                healthcare professionals.
              </span>
            </h2>
          </div>

          <div className="mt-9 grid gap-4 lg:mt-11 lg:grid-cols-2">
            {courses.map((course, index) => (
              <article
                key={course.title}
                className="
                  group relative overflow-hidden rounded-[1.5rem]
                  border border-navy/10 bg-white p-5
                  shadow-[0_12px_35px_rgba(23,40,92,0.045)]
                  transition-[transform,box-shadow,border-color] duration-400
                  sm:p-7
                  lg:hover:-translate-y-1
                  lg:hover:border-navy/15
                  lg:hover:shadow-[0_22px_55px_rgba(23,40,92,0.10)]
                "
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-24 w-24 rounded-bl-[5rem] bg-light-blue/35 transition-transform duration-500 group-hover:scale-110"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <p className="max-w-sm text-[9px] font-semibold uppercase leading-5 tracking-[0.17em] text-red sm:text-[10px]">
                      {course.label}
                    </p>

                    <span className="text-[10px] font-medium tracking-[0.18em] text-navy/25">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.045em] text-navy sm:text-[2.6rem]">
                    {course.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-[13px] leading-6 text-muted-foreground sm:text-sm">
                    {course.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 border-y border-border">
                    <div className="py-4">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Duration
                      </p>

                      <p className="mt-1.5 text-sm font-semibold text-navy">
                        {course.duration}
                      </p>
                    </div>

                    <div className="border-l border-border py-4 pl-4">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Admission
                      </p>

                      <p className="mt-1.5 text-sm font-semibold text-navy">
                        {course.admission}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-navy/40">
                      {course.focus}
                    </p>

                    <Link
                      href={course.href}
                      className="group/link inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-red"
                    >
                      Explore

                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                        strokeWidth={1.7}
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          HOW TO APPLY
      ================================================== */}

      <section id="admissions" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <SectionLabel centered>How to Apply</SectionLabel>

            <h2 className="mt-5 text-[2rem] font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
              Your journey starts here.
            </h2>

            <p className="mx-auto mt-3 max-w-md text-[13px] leading-6 text-muted-foreground sm:text-sm">
              A clear pathway from choosing your programme to beginning your
              academic journey.
            </p>
          </div>

          {/* DESKTOP ROADMAP */}

          <div className="relative mx-auto mt-11 hidden max-w-5xl sm:block">
            <div className="absolute left-[9%] right-[9%] top-5 h-px bg-navy/15" />

            <div className="grid grid-cols-5">
              {steps.map((step, index) => (
                <div key={step.number} className="relative text-center">
                  <div
                    className={`
                      relative z-10 mx-auto flex h-10 w-10
                      items-center justify-center rounded-full border
                      shadow-[0_6px_18px_rgba(23,40,92,0.07)]
                      ${
                        index === 0
                          ? "border-red bg-red text-white"
                          : "border-navy/15 bg-white text-red"
                      }
                    `}
                  >
                    <span className="text-[9px] font-semibold tracking-[0.15em]">
                      {step.number}
                    </span>
                  </div>

                  {index !== steps.length - 1 && (
                    <ArrowRight
                      className="absolute -right-2 top-[14px] z-20 h-3 w-3 text-navy/30"
                      strokeWidth={1.5}
                    />
                  )}

                  <p className="mt-3 text-sm font-semibold text-navy">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE ROADMAP */}

          <div className="relative mx-auto mt-8 max-w-sm sm:hidden">
            <div className="absolute bottom-5 left-[17px] top-5 w-px bg-navy/15" />

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex items-center gap-4"
                >
                  <div
                    className={`
                      relative z-10 flex h-9 w-9 shrink-0
                      items-center justify-center rounded-full border
                      shadow-[0_5px_16px_rgba(23,40,92,0.06)]
                      ${
                        index === 0
                          ? "border-red bg-red text-white"
                          : "border-navy/15 bg-white text-red"
                      }
                    `}
                  >
                    <span className="text-[9px] font-semibold tracking-[0.15em]">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex flex-1 items-center justify-between border-b border-border pb-4">
                    <p className="text-sm font-semibold text-navy">
                      {step.title}
                    </p>

                    <ArrowRight
                      className="h-3.5 w-3.5 text-navy/30"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-between gap-4 rounded-2xl border border-light-blue bg-light-blue/35 p-5 text-center shadow-[0_10px_30px_rgba(23,40,92,0.04)] sm:flex-row sm:text-left">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-red">
                Admissions
              </p>

              <p className="mt-1 text-sm text-navy/70">
                Ready to take the next step towards a healthcare career?
              </p>
            </div>

            <Link
              href="#"
              className="group inline-flex h-10 shrink-0 items-center gap-2 rounded-xl bg-red px-5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(237,50,61,0.22)]"
            >
              Apply Now

              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.7}
              />
            </Link>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-[9px] leading-4 text-muted-foreground sm:text-[10px]">
            Eligibility, entrance requirements, counselling procedures and
            document requirements will be published according to the officially
            approved admission framework.
          </p>
        </div>
      </section>

      {/* ==================================================
          FUTURE
      ================================================== */}

      <section className="bg-navy">
        <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-10">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-red">
              Future Academic Pathways
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
              Expanding healthcare education.
            </h2>
          </div>

          <p className="mt-4 max-w-xl text-[12px] leading-5 text-white/50 sm:text-sm sm:leading-6 lg:mt-0">
            Complementary pathways across medical, nursing and allied health
            education will be announced as they are formally established.
          </p>
        </div>
      </section>
    </>
  );
}

/* ======================================================
   HERO IMAGE
====================================================== */

function HeroImage() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-3 top-3 h-full w-full rounded-[1.5rem] bg-light-blue/70 sm:left-4 sm:top-4"
      />

      <div className="group relative h-[270px] overflow-hidden rounded-[1.5rem] ring-1 ring-navy/10 shadow-[0_24px_65px_rgba(23,40,92,0.14)] transition-[transform,box-shadow] duration-500 sm:h-[390px] lg:h-[480px] lg:hover:-translate-y-1 lg:hover:shadow-[0_30px_80px_rgba(23,40,92,0.18)]">
        <Image
          src="/academics/academics-hero.webp"
          alt="Healthcare education at HP Ghosh Memorial Foundation"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
        />

        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />

        <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/90 px-4 py-2 backdrop-blur-md sm:bottom-5 sm:left-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-navy">
            Medical · Nursing · Healthcare
          </span>
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
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-7 bg-red" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-red sm:text-[10px]">
        {children}
      </span>

      {centered && <span className="h-px w-7 bg-red" />}
    </div>
  );
}