
import Image from "next/image";
import { ArrowRight, Mail, MapPin, BriefcaseBusiness } from "lucide-react";

/* ======================================================
   DATA — EXACT CONTENT FROM PROVIDED DOCUMENT
====================================================== */

const medicalPositions = [
  {
    position: "Principal / Vice Principal / Dean",
    details:
      "Academic Administration (Minimum 10+ years teaching experience as Professor)",
  },
  {
    position:
      "Professors /Associate Professors / Assistant Professors",
    details:
      "Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, Forensic Medicine, Community Medicine, General Medicine, Paediatrics, Psychiatry, Dermatology, General Surgery, Orthopaedics, ENT, Ophthalmology, OBG, Anesthesiology, Radio-Diagnosis, Dentistry and all other Pre-Clinical, Para-Clinical, and Clinical Departments. Qualifications as per NMC Norms",
  },
  {
    position: "Senior Residents / Tutors",
    details:
      "Across all major clinical and non-clinical specialties. Qualifications as per NMC Norms",
  },
];

const nursingPositions = [
  {
    position: "Principal",
    details:
      "M.Sc. (Nursing) having total 15 years’ experience with M.Sc. (Nursing) out of which 10 years after M.Sc. (Nursing) in collegiate program. Ph.D. (Nursing) is desirable",
  },
  {
    position: "Vice Principal",
    details:
      "Vice-Principal cum Professor - Essential Qualification: M.Sc. (Nursing) Experience: M.Sc. (Nursing) Total 12 years’ experience with M.Sc. (Nursing) out of which 10 years teaching experience after M.Sc. (Nursing) Ph.D. (Nursing) is desirable",
  },
  {
    position: "Professor / Associate Professor",
    details:
      "Essential Qualification: M.Sc. (Nursing) Experience: M.Sc. (Nursing) Total 12 years’ experience with M.Sc. (Nursing) out of which 10 / 8 years teaching experience after M.Sc. (Nursing). Ph.D. (Nursing) is desirable",
  },
  {
    position: "Assistant Professor",
    details:
      "M.Sc. Nursing with minimum 3 years of teaching experience",
  },
  {
    position: "Tutors / Clinical Instructors",
    details:
      "M.Sc. Nursing or B.Sc. Nursing / P.B.B.Sc. Nursing with 1 year of experience",
  },
];

/* ======================================================
   MAIN PAGE
====================================================== */

export function CareerPageContent() {
  return (
    <>
      {/* HERO */}

      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-16 pt-12 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <SectionLabel>Careers</SectionLabel>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/45">
              H.P. Ghosh Memorial Foundation
            </p>

            <h1 className="mt-4 max-w-xl text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.05em] text-navy sm:text-5xl lg:text-[4rem]">
              Build a career.
              <span className="block font-normal text-navy/45">
                Shape the future of healthcare.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[14px] leading-7 text-muted-foreground sm:text-[15px]">
              The H.P. Ghosh Memorial Foundation, an initiative driven by the vision of inclusive healthcare and education across Eastern and North-Eastern India, invites applications from distinguished academicians, medical professionals, and visionary leaders for its upcoming state-of-the-art medical and nursing institutions.
            </p>

            <a
              href="#openings"
              className="group mt-8 inline-flex h-12 items-center gap-3 rounded-xl bg-red px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Opportunities
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.7}
              />
            </a>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-4 h-full w-full rounded-[1.5rem] bg-light-blue/70" />

            <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] shadow-[0_24px_65px_rgba(23,40,92,0.14)] sm:h-[420px] lg:h-[490px]">
              <Image
                src="/careers/careers-hero.webp"
                alt="Careers at H.P. Ghosh Memorial Foundation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-navy/65 to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy">
                Medical · Nursing · Education
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING INSTITUTIONS */}

      <section className="border-y border-border bg-light-grey/55">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionLabel>Our Institutions</SectionLabel>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
            Our upcoming milestone projects
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <InstitutionCard
              number="01"
              title="H.P. Ghosh Medical College"
              location="Ambassa, Tripura"
              description="A 100-seat Medical College."
            />

            <InstitutionCard
              number="02"
              title="H.P. Ghosh Nursing College"
              location="Ambassa, Tripura & Kolkata, West Bengal"
              description="H.P. Ghosh Nursing College (Ambassa, Tripura & Kolkata, West Bengal)."
            />
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-muted-foreground">
            We are looking for passionate, NMC/INC-qualified faculty members to build these institutions as temples of academic and clinical excellence.
          </p>
        </div>
      </section>

      {/* MEDICAL COLLEGE VACANCIES */}

      <section id="openings" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <SectionLabel>Faculty Opportunities</SectionLabel>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
                H.P. GHOSH MEDICAL COLLEGE, AMBASSA, TRIPURA
              </h2>
            </div>

            <span className="rounded-full border border-red/15 bg-red/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-red">
              Medical Faculty
            </span>
          </div>

          <div className="mt-9 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_12px_40px_rgba(23,40,92,0.04)]">
            <div className="hidden grid-cols-[0.85fr_1.6fr] bg-navy px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white md:grid">
              <span>Position</span>
              <span>Departments / Specialties</span>
            </div>

            {medicalPositions.map((item, index) => (
              <PositionRow
                key={index}
                number={index + 1}
                position={item.position}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NURSING COLLEGE VACANCIES */}

      <section className="border-y border-border bg-light-grey/55">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <SectionLabel>Nursing Faculty</SectionLabel>

          <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
            H.P. GHOSH NURSING COLLEGE | AMBASSA (TRIPURA) & KOLKATA (WEST BENGAL)
          </h2>

          <div className="mt-9 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_12px_40px_rgba(23,40,92,0.04)]">
            <div className="hidden grid-cols-[0.85fr_1.6fr] bg-navy px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white md:grid">
              <span>Position</span>
              <span>Qualifications & Experience</span>
            </div>

            {nursingPositions.map((item, index) => (
              <PositionRow
                key={index}
                number={index + 1}
                position={item.position}
                details={item.details}
              />
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-light-blue bg-light-blue/40 p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-red">
              Nursing Specialties
            </p>

            <p className="mt-3 text-sm leading-7 text-navy/75">
              Specialties required for Nursing Faculty: Medical-Surgical, OBG, Child Health (Paediatrics), Mental Health (Psychiatry), and Community Health Nursing. All qualifications as per INC & State Nursing Council Norms
            </p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY AND COMPENSATION */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <SectionLabel>Faculty Information</SectionLabel>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
            ELIGIBILITY & COMPENSATION
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <InfoCard
              number="01"
              title="Qualifications"
              content="All requisite qualifications, teaching experience, and publications must strictly adhere to the latest National Medical Commission (NMC) and Indian Nursing Council (INC) guidelines."
            />

            <InfoCard
              number="02"
              title="Compensation"
              content="Highly competitive remuneration package matching industry standards. Accommodation and campus facilities will be provided for outstation faculty in Ambassa."
            />
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}

      <section id="apply" className="scroll-mt-24 border-t border-border bg-light-grey/55">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel centered>Applications</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
              HOW TO APPLY
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Interested candidates are requested to submit their updated CV, recent passport-size photograph, and scanned copies of all relevant educational and experience certificates.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white shadow-[0_18px_55px_rgba(23,40,92,0.06)]">
            <div className="p-6 sm:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-light-blue text-red">
                  <Mail className="h-5 w-5" strokeWidth={1.7} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-red">
                    Email your application to:
                  </p>

                  <a
                    href="mailto:careers@hpghoshfoundation.org"
                    className="mt-2 block break-all text-base font-semibold text-navy hover:text-red sm:text-xl"
                  >
                    careers@hpghoshfoundation.org
                  </a>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Please mention the Position, Specialty, and Preferred Location in the subject line.
                  </p>
                </div>
              </div>

              <div className="my-7 h-px bg-border" />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-red">
                    Last Date for Application:
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-navy">
                    [Insert Date / e.g., 30th September 2026]
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-red">
                    For inquiries, contact:
                  </p>

                  <p className="mt-2 text-sm font-medium text-navy">
                    +91-[0000000000] |
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-5 border-t border-border bg-light-blue/30 p-6 sm:flex-row sm:items-center sm:p-8">
              <p className="max-w-sm text-sm leading-6 text-navy/70">
                Submit your application with the required documents via email.
              </p>

              <a
                href="mailto:careers@hpghoshfoundation.org"
                className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-red px-6 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Apply via Email
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.7}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}

      <section className="bg-navy">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-red">
            Our Locations
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            H.P. GHOSH MEMORIAL FOUNDATION
          </h2>

          <div className="mt-9 grid gap-7 border-t border-white/15 pt-8 md:grid-cols-3">
            <LocationItem
              label="Registered Office"
              address="DN 32, Sector V, Salt Lake, Kolkata, West Bengal - 700091"
            />

            <LocationItem
              label="Campus in Tripura"
              address="Lalchhari, Ambassa, Dhalai District, Tripura"
            />

            <LocationItem
              label="Campus in West Bengal"
              address="Nimta, Birati, Kolkata, West Bengal"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ======================================================
   REUSABLE COMPONENTS
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

      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red">
        {children}
      </span>

      {centered && <span className="h-px w-7 bg-red" />}
    </div>
  );
}

function InstitutionCard({
  number,
  title,
  location,
  description,
}: {
  number: string;
  title: string;
  location: string;
  description: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white p-7 shadow-[0_12px_35px_rgba(23,40,92,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[5rem] bg-light-blue/40" />

      <div className="relative">
        <span className="text-xs font-semibold tracking-widest text-red">
          {number}
        </span>

        <BriefcaseBusiness
          className="mt-7 h-7 w-7 text-navy"
          strokeWidth={1.5}
        />

        <h3 className="mt-5 max-w-sm text-2xl font-semibold tracking-[-0.035em] text-navy">
          {title}
        </h3>

        <div className="mt-4 flex items-start gap-2 text-sm text-navy/60">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red" />
          <span>{location}</span>
        </div>

        <p className="mt-5 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}

function PositionRow({
  number,
  position,
  details,
}: {
  number: number;
  position: string;
  details: string;
}) {
  return (
    <div className="grid gap-4 border-b border-border px-5 py-6 transition-colors last:border-b-0 hover:bg-light-blue/20 sm:px-7 md:grid-cols-[0.85fr_1.6fr] md:gap-8">
      <div className="flex items-start gap-4">
        <span className="mt-1 text-[10px] font-semibold tracking-wider text-red">
          {String(number).padStart(2, "0")}
        </span>

        <h3 className="text-sm font-semibold leading-6 text-navy sm:text-[15px]">
          {position}
        </h3>
      </div>

      <p className="pl-7 text-[13px] leading-7 text-muted-foreground sm:text-sm md:pl-0">
        {details}
      </p>
    </div>
  );
}

function InfoCard({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-navy/10 bg-white p-7 shadow-[0_12px_35px_rgba(23,40,92,0.045)] sm:p-9">
      <span className="text-[11px] font-semibold tracking-widest text-red">
        {number}
      </span>

      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-navy">
        {title}
      </h3>

      <div className="mt-5 h-px w-10 bg-red" />

      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        {content}
      </p>
    </article>
  );
}

function LocationItem({
  label,
  address,
}: {
  label: string;
  address: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <MapPin
        className="mt-0.5 h-5 w-5 shrink-0 text-red"
        strokeWidth={1.6}
      />

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
          {label}
        </p>

        <p className="mt-3 max-w-xs text-sm leading-6 text-white/85">
          {address}
        </p>
      </div>
    </div>
  );
}
