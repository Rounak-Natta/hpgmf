import { ArrowUpRight, Mail } from "lucide-react";

const EMAIL = "info@hpghoshmemorial.org";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F4F7FC] py-16 sm:py-20 lg:py-24"
    >
      {/* soft background depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-light-blue/60 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-white blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[26px] bg-navy shadow-[0_28px_70px_rgba(23,40,92,0.18)] sm:rounded-[32px]">
          {/* subtle background shapes */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-32 h-[360px] w-[360px] rounded-full border-[70px] border-white/[0.035]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 right-[18%] h-[300px] w-[300px] rounded-full bg-[#243B79]/60"
          />

          <div
            aria-hidden="true"
            className="absolute left-[45%] top-0 hidden h-full w-px bg-white/[0.07] lg:block"
          />

          {/* red brand accent */}
          <div className="absolute left-0 top-0 h-1 w-24 bg-red sm:w-32" />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* =================================================
                LEFT
            ================================================= */}

            <div className="px-6 pb-8 pt-10 sm:px-9 sm:pb-10 sm:pt-12 lg:px-12 lg:py-14 xl:px-14">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-px w-6 bg-red" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  Contact Us
                </span>
              </div>

              <h2 className="mt-5 max-w-lg text-[32px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[46px]">
                Have something
                <span className="block text-white/45">
                  to ask us?
                </span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/55 sm:text-[15px]">
                For general enquiries, send us an email and our team
                will get back to you.
              </p>
            </div>

            {/* =================================================
                RIGHT
            ================================================= */}

            <div className="px-6 pb-8 sm:px-9 sm:pb-10 lg:px-12 lg:py-14 xl:px-14">
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm sm:p-6">
                {/* light blue glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-14 size-40 rounded-full bg-light-blue/10 blur-2xl"
                />

                <div className="relative">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Mail className="size-4.5 stroke-[1.5]" />
                  </div>

                  <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Write to us
                  </p>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-2 block break-all text-[19px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-75 sm:text-[22px]"
                  >
                    {EMAIL}
                  </a>

                  <div className="mt-6 h-px bg-white/10" />

                  <a
                    href={`mailto:${EMAIL}`}
                    className="
                      group
                      mt-5
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-[14px]
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      text-navy
                      shadow-[0_10px_25px_rgba(0,0,0,0.10)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-red
                      hover:text-white
                      sm:w-auto
                      sm:min-w-[190px]
                    "
                  >
                    <span>Send an email</span>

                    <span className="ml-6 flex size-8 items-center justify-center rounded-full bg-light-blue/70 transition-colors duration-300 group-hover:bg-white/15">
                      <ArrowUpRight className="size-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom detail */}
          <div className="relative mx-6 border-t border-white/[0.07] py-4 sm:mx-9 lg:mx-12 xl:mx-14">
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/25">
              HP Ghosh Memorial Foundation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

