import type { Metadata } from "next";

import Navbar from "@/components/home/navbar";
import Marquee from "@/components/home/marquee";
import { CareersPageContent } from "@/components/careers/careers-page-content";

export const metadata: Metadata = {
  title: "Careers | HP Ghosh Memorial Foundation",
  description:
    "Explore career opportunities at H P Ghosh Memorial Medical College.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Marquee />
      <Navbar />

      <CareersPageContent />
    </main>
  );
}