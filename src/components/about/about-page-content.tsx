import Image from "next/image";
import { Quote } from "lucide-react";

/* ======================================================
   DATA
====================================================== */

const objectives = [
  {
    number: "01",
    title: "Development",
    text: "Building pathways that strengthen individual and community capabilities and contribute to long-term progress.",
  },
  {
    number: "02",
    title: "Opportunity",
    text: "Creating platforms that enable individuals to pursue meaningful growth, participation and better futures.",
  },
  {
    number: "03",
    title: "Sustainability",
    text: "Supporting institutions and practices that create enduring value for people, communities and the environment.",
  },
  {
    number: "04",
    title: "Community",
    text: "Remaining connected to communities through participation, awareness and shared responsibility.",
  },
];

/* ======================================================
   PAGE
====================================================== */

export function AboutPageContent() {
  return (
    <>
      {/* ==================================================
          ABOUT
      ================================================== */}

      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-14 pt-10 sm:px-8 sm:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          {/* CONTENT */}

          <div className="lg:pr-3">
            <SectionLabel number="01">About Us</SectionLabel>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/45">
              H P Ghosh Memorial Foundation
            </p>

            <h1 className="mt-3 max-w-xl text-[2.7rem] font-semibold leading-[1.03] tracking-[-0.05em] text-navy sm:text-5xl lg:text-[4.1rem]">
              Building Institutions.
              <span className="block font-normal text-navy/45">
                Shaping Futures.
              </span>
            </h1>

            <div className="mt-7 max-w-xl space-y-4 text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
              <p>
                The H P Ghosh Memorial Foundation is driven by a belief that
                meaningful progress begins by creating access to{" "}
                <strong className="font-medium text-navy">
                  knowledge, opportunity and the means to build a better future.
                </strong>
              </p>

              <p>
                Through purposeful institution building, the Foundation seeks
                to create enduring platforms that strengthen capabilities,
                expand opportunity and contribute to{" "}
                <strong className="font-medium text-navy">
                  development, sustainability and stronger communities.
                </strong>
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-9 bg-red" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-navy/45 sm:text-[10px]">
                Creating lasting value across generations
              </p>
            </div>
          </div>

          {/* IMAGE */}

          <ImageFrame
            src="/about/about-hero.webp"
            alt="H P Ghosh Memorial Foundation"
            priority
            className="h-[270px] sm:h-[420px] lg:h-[530px]"
            imageClassName="object-cover object-center"
          >
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent" />

            <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/90 px-4 py-2 backdrop-blur-md sm:bottom-5 sm:left-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-navy">
                Knowledge · Opportunity · Future
              </span>
            </div>
          </ImageFrame>
        </div>
      </section>

      {/* ==================================================
          VISION
      ================================================== */}

      <section
        id="vision"
        className="border-y border-border bg-light-grey/55"
      >
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-10 lg:py-24">
          {/* IMAGE */}

          <div className="order-2 lg:order-1">
            <ImageFrame
              src="/about/vision.webp"
              alt="Vision of H P Ghosh Memorial Foundation"
              className="h-[260px] sm:h-[390px] lg:h-[490px]"
              imageClassName="object-cover object-center"
              offset="left"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
            </ImageFrame>
          </div>

          {/* CONTENT */}

          <div className="order-1 lg:order-2">
            <SectionLabel>Vision</SectionLabel>

            <h2 className="mt-5 max-w-xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.04em] text-navy sm:text-4xl lg:text-[3.35rem]">
              A Better Future Begins
              <span className="block font-normal text-navy/45">
                With Opportunity.
              </span>
            </h2>

            <div className="mt-6 max-w-xl space-y-4 text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
              <p>
                We believe meaningful progress is created when people have the
                knowledge, capabilities and opportunities to shape better
                futures for themselves and their communities.
              </p>

              <p>
                Our vision is to build enduring institutions and initiatives
                that{" "}
                <strong className="font-medium text-navy">
                  strengthen capabilities, expand opportunity and contribute
                  to a better, more sustainable future.
                </strong>
              </p>
            </div>

            <div className="mt-8 border-l-2 border-red bg-white px-5 py-5 shadow-[0_12px_35px_rgba(23,40,92,0.06)]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-red">
                Our Vision
              </p>

              <p className="mt-3 text-[17px] font-medium leading-7 tracking-[-0.015em] text-navy sm:text-xl sm:leading-8">
                To build enduring institutions and initiatives that advance
                development, expand opportunity and create lasting value for
                communities, the region and generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          OBJECTIVES
      ================================================== */}

      <section id="objectives" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-5 border-b border-border pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-11">
            <div>
              <SectionLabel>Objectives</SectionLabel>

              <h2 className="mt-5 max-w-xl text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-navy sm:text-4xl lg:text-5xl">
                Turning Purpose into
                <span className="block font-normal text-navy/45">
                  Lasting Impact.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7 lg:justify-self-end">
              The Foundation creates pathways that enable people, institutions
              and communities to develop capabilities, expand opportunities and
              build stronger, more sustainable futures.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {objectives.map((objective, index) => (
              <article
                key={objective.number}
                className={`
                  group relative py-7 transition-colors duration-300
                  sm:p-7
                  lg:min-h-[245px] lg:p-8
                  lg:hover:bg-light-grey/45
                  ${index % 2 === 0 ? "pr-4" : "pl-4"}
                  ${index < 2 ? "border-b border-border lg:border-b-0" : ""}
                  ${
                    index !== objectives.length - 1
                      ? "lg:border-r lg:border-border"
                      : ""
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-red">
                    {objective.number}
                  </span>

                  <span className="h-px w-5 bg-red/45 transition-all duration-300 group-hover:w-8 group-hover:bg-red" />
                </div>

                <h3 className="mt-5 text-[14px] font-semibold uppercase tracking-[0.08em] text-navy sm:text-base">
                  {objective.title}
                </h3>

                <p className="mt-3 max-w-xs text-[12px] leading-5 text-muted-foreground sm:text-sm sm:leading-6">
                  {objective.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          LEADERSHIP
      ================================================== */}

      <section id="leadership" className="overflow-hidden bg-navy">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-5 lg:grid-cols-2 lg:items-end">
            <div>
              <DarkSectionLabel>Leadership</DarkSectionLabel>

              <h2 className="mt-5 max-w-xl text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                The People Behind
                <span className="block font-normal text-white/45">
                  the Vision.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[14px] leading-6 text-white/55 sm:text-[15px] sm:leading-7 lg:justify-self-end">
              The Foundation&apos;s journey is shaped by people with experience
              across institution building, enterprise, development and
              community engagement.
            </p>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.055] shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:mt-12 lg:grid-cols-[0.42fr_0.58fr]">
            {/* PORTRAIT */}

            <div className="group relative h-[330px] overflow-hidden bg-white/5 sm:h-[440px] lg:h-auto lg:min-h-[560px]">
              <Image
                src="/about/chandra-shekhar-ghosh.webp"
                alt="Chandra Shekhar Ghosh"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/15" />

              <div className="absolute bottom-5 left-5 lg:hidden">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-red">
                  Visionary & Institution Builder
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Chandra Shekhar Ghosh
                </h3>
              </div>
            </div>

            {/* CONTENT */}

            <div className="flex items-center p-6 sm:p-10 lg:p-12 xl:p-14">
              <div>
                <div className="hidden lg:block">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-red">
                    Visionary & Institution Builder
                  </p>

                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-white">
                    Chandra Shekhar Ghosh
                  </h3>
                </div>

                <div className="space-y-4 text-[14px] leading-6 text-white/60 sm:text-[15px] sm:leading-7 lg:mt-7">
                  <p>
                    With more than three decades of experience in institution
                    building, Chandra Shekhar Ghosh&apos;s journey has been
                    rooted in the principles of{" "}
                    <strong className="font-medium text-white">
                      dignity, opportunity and inclusion.
                    </strong>
                  </p>

                  <p>
                    His work has spanned grassroots development, microfinance,
                    banking and public leadership, including the evolution of
                    Bandhan from a development initiative into a universal
                    bank.
                  </p>

                  <p className="hidden sm:block">
                    His broader philosophy has consistently emphasised creating
                    access to opportunity and institutions capable of producing
                    lasting social and economic value.
                  </p>
                </div>

                <div className="mt-7 border-t border-white/10 pt-7 sm:mt-9">
                  <Quote
                    className="h-6 w-6 text-red"
                    strokeWidth={1.5}
                  />

                  <blockquote className="mt-4 max-w-xl text-xl font-medium leading-[1.45] tracking-[-0.02em] text-white sm:text-2xl">
                    “True economic progress is meaningless without accessible
                    health and education for the last person in the line.”
                  </blockquote>
                </div>

                <p className="mt-7 max-w-xl text-[10px] leading-5 text-white/35 sm:text-[11px]">
                  His profile is presented as a visionary perspective and does
                  not imply a legal ownership or promoter role in the Medical
                  College.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ======================================================
   IMAGE FRAME
====================================================== */

function ImageFrame({
  src,
  alt,
  className,
  imageClassName,
  children,
  priority = false,
  offset = "right",
}: {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  children?: React.ReactNode;
  priority?: boolean;
  offset?: "left" | "right";
}) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className={`
          absolute top-3 h-full w-full rounded-[1.5rem] bg-light-blue/70
          ${
            offset === "right"
              ? "left-3 sm:left-4"
              : "-left-3 sm:-left-4"
          }
        `}
      />

      <div
        className={`
          group relative overflow-hidden rounded-[1.5rem]
          ring-1 ring-navy/10
          shadow-[0_24px_65px_rgba(23,40,92,0.14)]
          transition-[transform,box-shadow] duration-500
          lg:hover:-translate-y-1
          lg:hover:shadow-[0_30px_80px_rgba(23,40,92,0.18)]
          ${className}
        `}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={`
            transition-transform duration-[1200ms] ease-out
            motion-safe:group-hover:scale-[1.035]
            motion-reduce:transition-none
            ${imageClassName ?? "object-cover"}
          `}
        />

        {children}
      </div>
    </div>
  );
}

/* ======================================================
   LABELS
====================================================== */

function SectionLabel({
  children,
  number,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {number && (
        <span className="text-[10px] font-semibold tracking-[0.2em] text-navy/40">
          {number}
        </span>
      )}

      <span className="h-px w-7 bg-red" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-red sm:text-[10px]">
        {children}
      </span>
    </div>
  );
}

function DarkSectionLabel({
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