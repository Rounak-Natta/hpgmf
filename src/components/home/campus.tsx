import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Leaf,
  MapPin,
} from "lucide-react";

const gallery = [
  {
    src: "/campus/campus1.webp",
    alt: "Entrance to HP Ghosh Memorial Medical College campus",
  },
  {
    src: "/campus/campus2.webp",
    alt: "Green landscaped road through the campus",
  },
  {
    src: "/campus/campus3.webp",
    alt: "Campus residential and academic buildings",
  },
  {
    src: "/campus/campus4.webp",
    alt: "Residential buildings within the campus",
  },
  {
    src: "/campus/campus5.webp",
    alt: "Campus accommodation and surrounding landscape",
  },
  {
    src: "/campus/campus6.webp",
    alt: "Landscaped healthcare education campus",
  },
];

const highlights = [
  {
    icon: Building2,
    title: "Purpose-built",
    text: "Campus",
  },
  {
    icon: Leaf,
    title: "Green",
    text: "Environment",
  },
  {
    icon: GraduationCap,
    title: "Designed for",
    text: "Learning",
  },
];

export default function Campus() {
  return (
    <section
      id="campus"
      className="relative overflow-hidden bg-[#F4F7FB] py-16 sm:py-20 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-20 size-[520px] rounded-full bg-light-blue/45 blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 size-[520px] rounded-full bg-white blur-[140px]"
      />

      {/* Subtle grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#17285C_1px,transparent_1px),linear-gradient(to_bottom,#17285C_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-red" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-red sm:text-xs">
                Life on Campus
              </span>
            </div>

            <h2 className="max-w-xl text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-navy sm:text-4xl lg:text-[50px]">
              A campus shaped around learning and life.
            </h2>
          </div>

          <div className="lg:pb-1 lg:pl-10">
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Thoughtfully planned academic spaces, landscaped
              surroundings and residential facilities come together
              to create an environment where students can learn,
              connect and grow.
            </p>
          </div>
        </div>

        {/* =====================================================
            DESKTOP 3D CAMPUS COMPOSITION
        ===================================================== */}

        <div className="mt-12 hidden lg:block">
          <div
            className="
              relative
              h-[650px]
              [perspective:1400px]
              xl:h-[700px]
            "
          >
            {/* ===============================================
                MAIN IMAGE
            =============================================== */}

            <div
              className="
                group
                absolute
                left-[5%]
                top-[4%]
                z-10
                h-[78%]
                w-[72%]
                overflow-hidden
                rounded-[34px]
                bg-white
                shadow-[0_35px_90px_rgba(23,40,92,0.18)]
                transition-transform
                duration-700
                ease-out
                [transform:rotateY(2deg)_rotateX(1deg)]
                hover:[transform:rotateY(0deg)_rotateX(0deg)_translateY(-5px)]
              "
            >
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                sizes="75vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />

              {/* Main image caption */}

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-white/70">
                      <MapPin className="size-4 stroke-[1.5]" />

                      <span className="text-[11px] font-medium uppercase tracking-[0.16em]">
                        HP Ghosh Memorial
                      </span>
                    </div>

                    <p className="max-w-md text-2xl font-medium leading-tight tracking-[-0.025em] text-white">
                      An environment designed for the healthcare
                      professionals of tomorrow.
                    </p>
                  </div>

                  <span className="text-xs font-medium text-white/55">
                    Campus View 01
                  </span>
                </div>
              </div>
            </div>

            {/* ===============================================
                FLOATING IMAGE — TOP RIGHT
            =============================================== */}

            <div
              className="
                group
                absolute
                right-[2%]
                top-[12%]
                z-20
                h-[40%]
                w-[31%]
                overflow-hidden
                rounded-[26px]
                border-[5px]
                border-white
                bg-white
                shadow-[0_28px_70px_rgba(23,40,92,0.22)]
                transition-all
                duration-700
                ease-out
                [transform:rotateY(-5deg)_rotateZ(1.5deg)]
                hover:z-30
                hover:[transform:rotateY(0deg)_rotateZ(0deg)_translateY(-8px)]
              "
            >
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                sizes="32vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
            </div>

            {/* ===============================================
                FLOATING IMAGE — BOTTOM RIGHT
            =============================================== */}

            <div
              className="
                group
                absolute
                bottom-[4%]
                right-[8%]
                z-30
                h-[37%]
                w-[28%]
                overflow-hidden
                rounded-[26px]
                border-[5px]
                border-white
                bg-white
                shadow-[0_30px_80px_rgba(23,40,92,0.24)]
                transition-all
                duration-700
                ease-out
                [transform:rotateY(-4deg)_rotateZ(-1.5deg)]
                hover:[transform:rotateY(0deg)_rotateZ(0deg)_translateY(-8px)]
              "
            >
              <Image
                src={gallery[5].src}
                alt={gallery[5].alt}
                fill
                sizes="30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>

            {/* ===============================================
                SMALL IMAGE
            =============================================== */}

            <div
              className="
                group
                absolute
                bottom-[1%]
                left-[14%]
                z-20
                h-[26%]
                w-[27%]
                overflow-hidden
                rounded-[24px]
                border-[5px]
                border-white
                bg-white
                shadow-[0_25px_60px_rgba(23,40,92,0.18)]
                transition-all
                duration-700
                [transform:rotateZ(-2deg)]
                hover:[transform:rotateZ(0deg)_translateY(-6px)]
              "
            >
              <Image
                src={gallery[3].src}
                alt={gallery[3].alt}
                fill
                sizes="28vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            {/* ===============================================
                DEPTH DETAILS
            =============================================== */}

            <div
              aria-hidden="true"
              className="absolute right-[1%] top-[4%] size-32 rounded-full bg-light-blue"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[10%] left-[3%] size-20 rounded-full border-[18px] border-red/10"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[7%] right-[3%] -z-0 h-36 w-64 rounded-full bg-navy/10 blur-3xl"
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE CAMPUS EXPERIENCE
        ===================================================== */}

        <div className="mt-9 lg:hidden">
          {/* Main campus image */}

          <div className="relative overflow-hidden rounded-[24px] bg-navy shadow-[0_18px_45px_rgba(23,40,92,0.16)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101F4D]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 text-white/65">
                  <MapPin className="size-3.5 stroke-[1.5]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em]">
                    HP Ghosh Memorial
                  </span>
                </div>

                <p className="mt-2 max-w-[300px] text-lg font-medium leading-6 text-white">
                  An environment designed for learning and life.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile gallery */}

          <div
            className="
              campus-mobile-gallery
              -mr-5
              mt-3
              flex
              snap-x
              snap-mandatory
              gap-3
              overflow-x-auto
              pr-5
              sm:-mr-6
              sm:pr-6
            "
          >
            {gallery.slice(1).map((image) => (
              <div
                key={image.src}
                className="
                  relative
                  aspect-[4/3]
                  w-[72vw]
                  max-w-[330px]
                  shrink-0
                  snap-start
                  overflow-hidden
                  rounded-[18px]
                  bg-white
                  shadow-[0_10px_30px_rgba(23,40,92,0.12)]
                "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="72vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Swipe indicator */}

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="h-[3px] w-8 rounded-full bg-navy" />
              <span className="h-[3px] w-4 rounded-full bg-navy/15" />
              <span className="h-[3px] w-4 rounded-full bg-navy/15" />
            </div>

            <div className="flex items-center gap-2 text-[10px] font-medium text-muted-foreground">
              Explore campus

              <ArrowRight className="size-3.5 stroke-[1.5]" />
            </div>
          </div>
        </div>

        {/* =====================================================
            CAMPUS HIGHLIGHTS
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-3
            divide-x
            divide-border
            rounded-[22px]
            border
            border-white
            bg-white/85
            px-2
            py-5
            shadow-[0_14px_40px_rgba(23,40,92,0.07)]
            backdrop-blur-sm
            sm:px-5
            sm:py-6
            lg:mt-6
          "
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex flex-col items-center px-2 text-center sm:px-5 lg:flex-row lg:justify-center lg:gap-4 lg:text-left"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-light-blue/70 text-navy sm:size-11">
                  <Icon className="size-4 stroke-[1.5] sm:size-5" />
                </div>

                <div className="mt-2 lg:mt-0">
                  <p className="text-[9px] font-medium text-muted-foreground sm:text-[11px]">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[11px] font-semibold text-navy sm:text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CONTENT
        ===================================================== */}

        <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-10">
          <div className="max-w-2xl">
            <p className="text-lg font-medium leading-7 text-navy sm:text-xl">
              More than a place to study.
            </p>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              A thoughtfully planned environment where academic life,
              community and nature exist side by side.
            </p>
          </div>

          <Link
            href="/campus"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              text-sm
              font-semibold
              text-navy
              transition-colors
              duration-300
              hover:text-red
            "
          >
            Explore the Campus

            <span className="flex size-10 items-center justify-center rounded-full bg-navy text-white transition-all duration-300 group-hover:bg-red">
              <ArrowRight className="size-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}