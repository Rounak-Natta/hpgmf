import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const images = [
  {
    src: "/home/abt1.webp",
    alt: "Medical students learning together",
  },
  {
    src: "/home/abt2.webp",
    alt: "Healthcare professionals collaborating",
  },
  {
    src: "/home/abt3.webp",
    alt: "Students walking through the campus",
  },
  {
    src: "/home/abt4.webp",
    alt: "Medical students taking part in practical learning",
  },
];

const commitments = [
  { number: "01", title: "Education" },
  { number: "02", title: "Development" },
  { number: "03", title: "Opportunity" },
  { number: "04", title: "Community" },
];

/* ======================================================
   IMAGE COLLAGE
   ====================================================== */

function ImageCollage({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <div className="relative">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-8 size-32 rounded-full bg-light-blue/70"
        />

        <div
          aria-hidden="true"
          className="absolute -left-12 bottom-5 size-40 rounded-full bg-white/70 blur-2xl"
        />

        <div className="relative">
          {/* Featured Image */}
          <div className="group relative aspect-[16/10] overflow-hidden rounded-[22px] border border-white bg-white shadow-[0_18px_45px_rgba(23,40,92,0.16)]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-transparent to-transparent" />
          </div>

          {/* Secondary Images */}
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {images.slice(1).map((image) => (
              <div
                key={image.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-[16px] border border-white bg-white shadow-[0_10px_25px_rgba(23,40,92,0.12)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      {/* Background plate */}
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-light-blue/55 via-white/40 to-transparent"
      />

      {/* Blue decoration */}
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-8 size-36 rounded-full bg-light-blue/80"
      />

      {/* Red detail */}
      <div
        aria-hidden="true"
        className="absolute -bottom-5 left-[5%] z-20 flex size-12 items-center justify-center rounded-full bg-red shadow-[0_12px_30px_rgba(237,50,61,0.25)]"
      >
        <span className="size-2 rounded-full bg-white" />
      </div>

      {/* Images */}
      <div className="relative z-10 grid grid-cols-2 gap-4">
        <DesktopImage image={images[0]} />

        <DesktopImage
          image={images[1]}
          className="mt-12"
        />

        <DesktopImage
          image={images[2]}
          className="-mt-12"
        />

        <DesktopImage image={images[3]} />
      </div>
    </div>
  );
}

/* ======================================================
   DESKTOP IMAGE
   ====================================================== */

function DesktopImage({
  image,
  className = "",
}: {
  image: (typeof images)[number];
  className?: string;
}) {
  return (
    <div
      className={`
        group
        relative
        aspect-[4/5]
        overflow-hidden
        rounded-[28px]
        border
        border-white
        bg-white
        shadow-[0_24px_60px_rgba(23,40,92,0.17)]
        ${className}
      `}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="320px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20" />
    </div>
  );
}

/* ======================================================
   CONTENT CARD
   ====================================================== */

function PurposeContent() {
  return (
    <div className="relative">
      {/* Shadow underneath */}
      <div
        aria-hidden="true"
        className="absolute inset-x-5 bottom-[-14px] top-10 rounded-[30px] bg-navy/[0.07] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[24px] border border-white bg-white p-5 shadow-[0_20px_55px_rgba(23,40,92,0.09)] sm:rounded-[28px] sm:p-8 lg:p-9">
        {/* Red accent */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-7 h-14 w-[3px] rounded-r-full bg-red sm:top-9 sm:h-16"
        />

        {/* Main statement */}
        <p className="pl-2 text-[18px] font-medium leading-8 tracking-[-0.015em] text-navy sm:pl-0 sm:text-xl sm:leading-9">
          We believe meaningful progress begins by creating access to
          knowledge, opportunity and the means to build a better
          future.
        </p>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-[15px]">
          The HP Ghosh Memorial Foundation seeks to translate this
          belief into enduring institutions and initiatives that bring
          together education, development, sustainability and
          community engagement—creating opportunities for individuals
          while contributing to stronger, more resilient communities.
        </p>

        {/* Highlight */}
        <div className="mt-5 rounded-2xl bg-[#F0F4FB] px-4 py-4 sm:mt-7 sm:px-5">
          <p className="text-sm font-semibold leading-6 text-navy sm:text-[15px]">
            More than institutions. A purpose for generations.
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-border sm:my-7" />

        {/* Commitment title */}
        <p className="text-[13px] font-medium leading-6 text-navy sm:text-sm">
          Our approach is guided by four interconnected commitments:
        </p>

        {/* Commitments */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
          {commitments.map((commitment) => (
            <div
              key={commitment.number}
              className="group flex min-w-0 items-center gap-2.5 rounded-xl bg-[#F8FAFD] px-2.5 py-2.5 transition-all duration-300 hover:bg-light-blue/50 sm:gap-3 sm:px-3"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-light-blue text-[9px] font-semibold text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white sm:size-8 sm:text-[10px]">
                {commitment.number}
              </span>

              <span className="min-w-0 text-[12px] font-medium text-navy sm:text-sm">
                {commitment.title}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/about"
          className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-navy transition-colors duration-300 hover:text-red sm:mt-8"
        >
          Discover our story

          <span className="flex size-9 items-center justify-center rounded-full border border-border bg-white shadow-[0_4px_12px_rgba(23,40,92,0.08)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-red group-hover:bg-red group-hover:text-white">
            <ArrowUpRight className="size-4 stroke-[1.5]" />
          </span>
        </Link>
      </div>
    </div>
  );
}

/* ======================================================
   ABOUT
   ====================================================== */

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F9FC] py-16 sm:py-20 lg:py-28 xl:py-32"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 size-[500px] rounded-full bg-light-blue/40 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 size-[500px] rounded-full bg-light-blue/35 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ==================================================
            INTRO
        ================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          {/* Label */}

          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
            <span className="h-px w-7 bg-red sm:w-9" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-red sm:text-xs">
              Vision &amp; Purpose
            </span>

            <span className="h-px w-7 bg-red sm:w-9" />
          </div>

          {/* Heading */}

          <h2 className="mx-auto max-w-[880px] text-balance text-[30px] font-semibold leading-[1.12] tracking-[-0.035em] text-navy sm:text-4xl lg:text-[50px]">
            A vision for a better future through education,
            development and opportunity.
          </h2>

          {/* Intro copy */}

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:mt-6 sm:text-base">
            Creating meaningful pathways that enable individuals,
            institutions and communities to learn, grow and build
            stronger futures.
          </p>
        </div>

        {/* ==================================================
            MOBILE

            Intro
              ↓
            Images
              ↓
            Content
        ================================================== */}

        <div className="mt-9 space-y-10 lg:hidden">
          <ImageCollage mobile />

          <PurposeContent />
        </div>

        {/* ==================================================
            DESKTOP

            Content | Images
        ================================================== */}

        <div className="mt-20 hidden grid-cols-[0.9fr_1.1fr] items-center gap-14 lg:grid xl:gap-20">
          <PurposeContent />

          <ImageCollage />
        </div>
      </div>
    </section>
  );
}