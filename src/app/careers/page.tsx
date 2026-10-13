import type { Metadata } from "next";

import Navbar from "@/components/home/navbar";
import Marquee from "@/components/home/marquee";
import SiteFooter from "@/components/footer";
import { CareerPageContent } from "@/components/careers/careers-page-content";

export const metadata: Metadata = {
  title: "Careers | HP Ghosh Memorial Foundation",
  description:
    "Explore career opportunities at H P Ghosh Memorial Medical College.",
};

export default function CareersPage() {
  return (
    <>
      <Marquee />
      <Navbar />

      <main className="min-h-screen bg-background">
        <CareerPageContent />
      </main>

      <SiteFooter />
    </>
  );
}