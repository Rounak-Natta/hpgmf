import Image from "next/image";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/* ======================================================
   PAGE
====================================================== */

export function ContactPageContent() {
  return (
    <>
      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 pb-12 pt-10 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <SectionLabel>Contact</SectionLabel>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/45">
                H P Ghosh Memorial Foundation
              </p>

              <h1 className="mt-3 text-[2.7rem] font-semibold leading-[1.03] tracking-[-0.05em] text-navy sm:text-5xl lg:text-[4.1rem]">
                Have something to ask us?
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-[15px] font-medium leading-7 text-navy sm:text-base">
                We&apos;re here to help with enquiries related to our
                institution, academics, admissions and careers.
              </p>

              <p className="mt-3 text-[13px] leading-6 text-muted-foreground sm:text-[14px] sm:leading-7">
                Reach out to the H P Ghosh Memorial Foundation and our team
                will help direct your enquiry to the appropriate department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTACT + FORM
      ================================================== */}

      <section className="border-y border-border bg-light-grey/55">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-10 lg:py-24">
          {/* CONTACT DETAILS */}

          <div>
            <SectionLabel>Get in Touch</SectionLabel>

            <h2 className="mt-5 max-w-md text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-navy sm:text-4xl">
              We&apos;d be glad to hear from you.
            </h2>

            <p className="mt-4 max-w-md text-[13px] leading-6 text-muted-foreground sm:text-[14px] sm:leading-7">
              For institutional, academic or general enquiries, use the contact
              details below or send us a message.
            </p>

            <div className="mt-8 border-t border-navy/10">
              <ContactItem icon={MapPin} label="Campus">
                <p className="text-[14px] font-medium leading-6 text-navy">
                  H P Ghosh Memorial Medical College
                </p>

                <p className="mt-1 text-[13px] leading-6 text-muted-foreground">
                  Lalchari, Ambassa
                  <br />
                  Dhalai District, Tripura
                </p>
              </ContactItem>

              <ContactItem icon={Mail} label="Email">
                <p className="text-[14px] font-medium text-navy">
                  General enquiry email to be updated
                </p>

                <p className="mt-1 text-[12px] text-muted-foreground">
                  Careers: careers@hpghoshfoundation.org
                </p>
              </ContactItem>

              <ContactItem icon={Phone} label="Phone">
                <p className="text-[14px] font-medium text-navy">
                  Contact number to be updated
                </p>
              </ContactItem>
            </div>
          </div>

          {/* FORM */}

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-3 top-3 h-full w-full rounded-[1.5rem] bg-light-blue/60"
            />

            <div className="relative rounded-[1.5rem] border border-navy/10 bg-white p-5 shadow-[0_20px_55px_rgba(23,40,92,0.09)] sm:p-7 lg:p-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-red">
                Send an Enquiry
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-navy sm:text-2xl">
                How can we help?
              </h3>

              <form className="mt-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    name="name"
                    placeholder="Enter your name"
                  />

                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />

                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                  />

                  <FormField
                    label="Subject"
                    name="subject"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="text-[9px] font-semibold uppercase tracking-[0.16em] text-navy/55"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="
                      mt-2 w-full resize-none rounded-xl
                      border border-border bg-light-grey/20
                      px-4 py-3 text-sm text-navy outline-none
                      transition-[border-color,box-shadow,background-color]
                      duration-200
                      placeholder:text-muted-foreground/65
                      focus:border-navy/40
                      focus:bg-white
                      focus:shadow-[0_0_0_3px_rgba(23,40,92,0.06)]
                    "
                  />
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[10px] leading-5 text-muted-foreground">
                    Connect this form to your email/API handler when the contact
                    submission backend is implemented.
                  </p>

                  <button
                    type="button"
                    className="
                      group inline-flex h-11 w-fit shrink-0
                      items-center justify-center gap-2 rounded-xl
                      bg-red px-5 text-xs font-semibold text-white
                      transition-[transform,box-shadow,opacity] duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_8px_20px_rgba(237,50,61,0.22)]
                      hover:opacity-95
                    "
                  >
                    Send Message

                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.7}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CAMPUS
      ================================================== */}

      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid overflow-hidden rounded-[1.6rem] bg-navy shadow-[0_24px_65px_rgba(23,40,92,0.15)] lg:grid-cols-[0.65fr_1.35fr]">
            {/* CONTENT */}

            <div className="flex items-center p-6 sm:p-8 lg:p-10">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-red">
                  Our Campus
                </p>

                <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                  Lalchari,
                  <span className="block font-normal text-white/45">
                    Ambassa, Tripura.
                  </span>
                </h2>

                <p className="mt-4 max-w-sm text-[13px] leading-6 text-white/55">
                  H P Ghosh Memorial Medical College is located in Dhalai
                  District, Tripura.
                </p>

                <div className="mt-6 flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-red"
                    strokeWidth={1.6}
                  />

                  <p className="text-[12px] leading-5 text-white/70">
                    Lalchari, Ambassa
                    <br />
                    Dhalai District, Tripura
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}

            <div className="group relative h-[270px] overflow-hidden bg-light-grey sm:h-[350px] lg:h-[410px]">
              <Image
                src="/contact/campus.webp"
                alt="H P Ghosh Memorial Medical College campus"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center transition-transform duration-[1400ms] ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent lg:bg-gradient-to-r lg:from-navy/45 lg:via-navy/5 lg:to-transparent" />

              <div className="absolute right-4 top-4 h-12 w-px bg-white/35 sm:right-6 sm:top-6" />

              <div className="absolute right-4 top-4 h-px w-12 bg-white/35 sm:right-6 sm:top-6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ======================================================
   CONTACT ITEM
====================================================== */

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group grid grid-cols-[36px_1fr] gap-4 border-b border-navy/10 py-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy/5 bg-light-blue/55 transition-colors duration-300 group-hover:bg-light-blue">
        <Icon
          className="h-4 w-4 text-navy"
          strokeWidth={1.6}
        />
      </div>

      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-red">
          {label}
        </p>

        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}

/* ======================================================
   FORM FIELD
====================================================== */

function FormField({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[9px] font-semibold uppercase tracking-[0.16em] text-navy/55"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="
          mt-2 h-11 w-full rounded-xl
          border border-border bg-light-grey/20
          px-4 text-sm text-navy outline-none
          transition-[border-color,box-shadow,background-color]
          duration-200
          placeholder:text-muted-foreground/65
          focus:border-navy/40
          focus:bg-white
          focus:shadow-[0_0_0_3px_rgba(23,40,92,0.06)]
        "
      />
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