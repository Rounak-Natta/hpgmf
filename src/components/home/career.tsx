import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Mail,
  MapPin,
} from "lucide-react";

const roles = [
  "Principal",
  "Vice Principal",
  "Dean",
  "Professors",
  "Associate Professors",
  "Assistant Professors",
  "Senior Residents",
  "Tutors",
];

export default function Career() {
  return (
    <section
      id="career"
      className="relative overflow-hidden bg-[#F4F7FC] py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND DEPTH
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-12 size-[420px] rounded-full bg-light-blue/60 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 size-[420px] rounded-full bg-white blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-16 size-28 rounded-full border-[22px] border-light-blue/35"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-red" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red sm:text-xs">
              Careers
            </span>

            <span className="h-px w-7 bg-red" />
          </div>

          <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-navy sm:text-4xl lg:text-[44px]">
            Grow with us.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
            Join HP Ghosh Memorial Medical College and help shape the
            next generation of healthcare professionals.
          </p>
        </div>

        {/* =====================================================
            CARD WRAPPER
        ===================================================== */}

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12">
          {/* Deep shadow plate */}

          <div
            aria-hidden="true"
            className="absolute inset-x-8 -bottom-4 top-10 rounded-[30px] bg-navy/[0.10] blur-2xl sm:inset-x-14"
          />

          {/* Offset blue layer */}

          <div
            aria-hidden="true"
            className="absolute -right-2 -top-2 hidden h-full w-full rounded-[30px] bg-light-blue/60 sm:block"
          />

          {/* ===================================================
              MAIN CARD
          =================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-white
              bg-white
              shadow-[0_24px_65px_rgba(23,40,92,0.12)]
              sm:rounded-[28px]
            "
          >
            {/* Top brand line */}

            <div className="h-[3px] w-full bg-gradient-to-r from-red via-red to-navy" />

            <div className="grid lg:grid-cols-[1fr_300px]">
              {/* =================================================
                  LEFT
              ================================================= */}

              <div className="relative p-5 sm:p-7 lg:p-8">
                {/* Soft internal blue shape */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-24 -top-24 size-56 rounded-full bg-light-blue/35 blur-[50px]"
                />

                <div className="relative">
                  {/* Status / Location */}

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#ECF8F2] px-3 py-1.5">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#279763] opacity-40" />

                        <span className="relative inline-flex size-2 rounded-full bg-[#279763]" />
                      </span>

                      <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#197448] sm:text-[10px]">
                        Now Hiring
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-[11px]">
                      <MapPin className="size-3.5 stroke-[1.5] text-red" />

                      Lalchari, Ambassa, Tripura
                    </div>
                  </div>

                  {/* Title */}

                  <div className="mt-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-red sm:text-[10px]">
                      Faculty Recruitment 2026
                    </p>

                    <h3 className="mt-2 text-[22px] font-semibold leading-[1.15] tracking-[-0.025em] text-navy sm:text-[27px]">
                      Recruitment for Faculty Positions
                    </h3>
                  </div>

                  {/* =============================================
                      ROLES
                  ============================================= */}

                  <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {roles.map((role) => (
                      <div
                        key={role}
                        className="
                          group
                          flex
                          min-h-[48px]
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-[#E5EAF1]
                          bg-[#F8FAFD]
                          px-3
                          py-2.5
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-light-blue
                          hover:bg-light-blue/35
                          hover:shadow-[0_8px_20px_rgba(23,40,92,0.07)]
                        "
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-light-blue text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                          <Check className="size-2.5 stroke-[2]" />
                        </span>

                        <span className="text-[10px] font-medium leading-4 text-navy sm:text-[11px]">
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Qualification */}

                  <div className="mt-5 flex items-center gap-2.5 rounded-xl bg-light-blue/35 px-3.5 py-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                      <Check className="size-3 stroke-[2]" />
                    </span>

                    <p className="text-[11px] leading-5 text-navy sm:text-xs">
                      <span className="font-semibold">
                        Qualification:
                      </span>{" "}
                      As per NMC norms.
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT APPLICATION PANEL
              ================================================= */}

              <aside
                className="
                  relative
                  overflow-hidden
                  bg-navy
                  p-5
                  text-white
                  sm:p-7
                  lg:flex
                  lg:flex-col
                  lg:justify-center
                  lg:p-8
                "
              >
                {/* Decorative circles */}

                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-40 rounded-full border-[30px] border-white/[0.04]"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-16 size-40 rounded-full bg-[#263B76]"
                />

                <div className="relative">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                    Application Deadline
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <CalendarDays className="size-4.5 stroke-[1.5]" />
                    </div>

                    <div>
                      <p className="text-xl font-semibold tracking-[-0.02em] sm:text-[22px]">
                        14 October
                      </p>

                      <p className="text-xs text-white/50">
                        2026
                      </p>
                    </div>
                  </div>

                  {/* Divider */}

                  <div className="my-5 h-px bg-white/10" />

                  {/* Benefits */}

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    We Offer
                  </p>

                  <p className="mt-2 text-xs leading-6 text-white/70">
                    Lucrative compensation, accommodation and fooding.
                  </p>

                  {/* Apply */}

                  <a
                    href="mailto:pradip.bandyopadhyay@fitrust.org?subject=Application%20for%20Faculty%20Position%20-%20HP%20Ghosh%20Memorial%20Medical%20College"
                    className="
                      group
                      mt-5
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      bg-red
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_10px_25px_rgba(237,50,61,0.25)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-white
                      hover:text-navy
                    "
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="size-4 stroke-[1.5]" />

                      Send Your CV
                    </span>

                    <ArrowUpRight className="size-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <p className="mt-3 break-all text-[9px] leading-4 text-white/40">
                    pradip.bandyopadhyay@fitrust.org
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}