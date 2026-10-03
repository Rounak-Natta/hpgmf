import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Stethoscope,
  UsersRound,
} from "lucide-react";

const programs = [
  {
    number: "01",
    title: "MBBS",
    fullName: "Bachelor of Medicine & Bachelor of Surgery",
    tagline: "Learn. Practice. Heal.",
    description:
      "A comprehensive medical education designed to build strong scientific foundations, clinical understanding and a patient-centred approach to healthcare.",
    image: "/home/mbbs.webp",
    href: "/academics/mbbs",
    icon: Stethoscope,
    features: [
      {
        icon: GraduationCap,
        label: "Medical Education",
      },
      {
        icon: Stethoscope,
        label: "Clinical Learning",
      },
    ],
  },
  {
    number: "02",
    title: "B.Sc. Nursing",
    fullName: "Bachelor of Science in Nursing",
    tagline: "Care Today. A Healthier Tomorrow.",
    description:
      "A professional nursing programme focused on developing clinical knowledge, practical skills, compassionate care and confidence across healthcare settings.",
    image: "/home/nursing.webp",
    href: "/academics/bsc-nursing",
    icon: HeartPulse,
    features: [
      {
        icon: HeartPulse,
        label: "Patient Care",
      },
      {
        icon: UsersRound,
        label: "Practical Learning",
      },
    ],
  },
];

/* =========================================================
   PROGRAM CARD
========================================================= */

function ProgramCard({
  program,
}: {
  program: (typeof programs)[number];
}) {
  const ProgramIcon = program.icon;

  return (
    <article
      className="
        group
        relative
        h-[510px]
        overflow-hidden
        rounded-[26px]
        bg-navy
        shadow-[0_18px_50px_rgba(23,40,92,0.18)]
        transition-all
        duration-500
        sm:h-[530px]
        sm:rounded-[30px]
        lg:h-[540px]
        lg:hover:-translate-y-1
        lg:hover:shadow-[0_30px_70px_rgba(23,40,92,0.22)]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={program.image}
        alt=""
        fill
        sizes="(max-width: 1024px) 90vw, 50vw"
        className="
          object-cover
          transition-transform
          duration-[900ms]
          ease-out
          lg:group-hover:scale-[1.04]
        "
      />

      {/* Base tint */}
      <div className="absolute inset-0 bg-navy/15" />

      {/* Desktop side gradient */}
      <div
        className="
          absolute
          inset-0
          hidden
          bg-gradient-to-r
          from-[#101F4D]/95
          via-[#17285C]/75
          to-[#17285C]/10
          lg:block
        "
      />

      {/* Mobile gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#091638]/95
          via-[#17285C]/45
          to-black/5
          lg:hidden
        "
      />

      {/* Desktop bottom depth */}
      <div
        className="
          absolute
          inset-0
          hidden
          bg-gradient-to-t
          from-[#0B173D]/90
          via-transparent
          to-transparent
          lg:block
        "
      />

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
        <div
          className="
            flex
            size-11
            items-center
            justify-center
            rounded-xl
            border
            border-white/20
            bg-black/10
            text-white
            shadow-[0_8px_24px_rgba(0,0,0,0.12)]
            backdrop-blur-md
            sm:size-12
            sm:rounded-2xl
          "
        >
          <ProgramIcon className="size-5 stroke-[1.5]" />
        </div>

        <span
          className="
            rounded-full
            border
            border-white/20
            bg-black/10
            px-3
            py-1.5
            text-[10px]
            font-semibold
            tracking-[0.18em]
            text-white/80
            backdrop-blur-md
          "
        >
          {program.number}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7 lg:p-8">
        <div className="max-w-[500px]">
          {/* Full course name */}

          <p className="max-w-[300px] text-[9px] font-semibold uppercase leading-4 tracking-[0.13em] text-white/60 sm:text-[10px] lg:text-[11px]">
            {program.fullName}
          </p>

          {/* Course */}

          <h3 className="mt-2 text-[30px] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-[36px] lg:text-[40px]">
            {program.title}
          </h3>

          {/* Tagline */}

          <div className="mt-3 flex items-center gap-2">
            <span className="h-px w-6 shrink-0 bg-red" />

            <p className="text-xs font-semibold text-white/90 sm:text-sm">
              {program.tagline}
            </p>
          </div>

          {/* Description */}

          <p className="mt-4 line-clamp-3 max-w-[470px] text-[12px] leading-6 text-white/70 sm:text-sm sm:leading-7 lg:line-clamp-none">
            {program.description}
          </p>

          {/* Features */}

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {program.features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <div
                  key={feature.label}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-2.5
                    py-1.5
                    text-[9px]
                    font-medium
                    text-white/90
                    backdrop-blur-md
                    sm:gap-2
                    sm:px-3
                    sm:py-2
                    sm:text-[11px]
                  "
                >
                  <FeatureIcon className="size-3 stroke-[1.5] sm:size-3.5" />

                  {feature.label}
                </div>
              );
            })}
          </div>

          {/* CTA */}

          <div className="mt-5 border-t border-white/15 pt-4 sm:mt-6 sm:pt-5">
            <Link
              href={program.href}
              className="
                group/link
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-white
              "
            >
              Explore Program

              <span
                className="
                  flex
                  size-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-navy
                  transition-all
                  duration-300
                  group-hover/link:bg-red
                  group-hover/link:text-white
                "
              >
                <ArrowRight className="size-4 stroke-[1.5] transition-transform duration-300 group-hover/link:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hover detail */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-[3px]
          w-0
          bg-red
          transition-all
          duration-500
          lg:group-hover:w-full
        "
      />
    </article>
  );
}

/* =========================================================
   ACADEMICS
========================================================= */

export default function Academics() {
  return (
    <section
      id="academics"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 size-[480px] rounded-full bg-light-blue/30 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 size-[480px] rounded-full bg-light-blue/25 blur-[150px]"
      />

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-red" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-red sm:text-xs">
              Our Programs
            </span>
          </div>

          <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-navy sm:text-4xl lg:text-[48px]">
            Courses We Offer
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Preparing future healthcare professionals through
            knowledge, practical learning and a commitment to
            compassionate care.
          </p>
        </div>
      </div>

      {/* =====================================================
          MOBILE CAROUSEL
      ===================================================== */}

      <div className="relative mt-9 lg:hidden">
        {/*
          Important:
          Intentionally not inside max-w container.
          This allows horizontal swipe.
        */}

        <div
          className="
            academics-mobile-slider
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            scroll-smooth
            pl-5
            pr-10
            sm:pl-6
            sm:pr-14
          "
        >
          {programs.map((program) => (
            <div
              key={program.title}
              className="
                w-[86vw]
                max-w-[430px]
                shrink-0
                snap-start
                first:ml-0
              "
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>

        {/* Swipe hint */}

        <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between px-5 sm:px-6">
          <div className="flex items-center gap-2">
            {programs.map((program, index) => (
              <span
                key={program.title}
                className={
                  index === 0
                    ? "h-[3px] w-8 rounded-full bg-navy"
                    : "h-[3px] w-5 rounded-full bg-navy/15"
                }
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
            <span>Swipe to explore</span>

            <ArrowRight className="size-3.5 stroke-[1.5]" />
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP GRID
      ===================================================== */}

      <div className="relative mx-auto mt-14 hidden max-w-7xl px-5 sm:px-6 lg:block lg:px-8">
        <div className="grid grid-cols-2 gap-6">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              program={program}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <div className="relative mx-auto mt-10 max-w-7xl px-5 sm:px-6 lg:mt-8 lg:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-[22px]
            bg-[#F3F6FB]
            px-5
            py-6
            sm:flex
            sm:items-center
            sm:justify-between
            sm:gap-8
            sm:px-7
            lg:px-9
          "
        >
          {/* Decorative circle */}

          <div
            aria-hidden="true"
            className="absolute -right-14 -top-20 size-52 rounded-full bg-light-blue/60"
          />

          <div className="relative z-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red">
              Begin Your Journey
            </p>

            <p className="mt-2 max-w-xl text-base font-semibold leading-6 text-navy sm:text-lg">
              Explore academics, admissions and opportunities to
              begin your journey in healthcare.
            </p>
          </div>

          <Link
            href="/admissions"
            className="
              group
              relative
              z-10
              mt-5
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-full
              bg-navy
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-red
              sm:mt-0
            "
          >
            Admissions

            <ArrowRight className="size-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}