import type { Metadata } from "next";

import Navbar from "@/components/home/navbar";
import Marquee from "@/components/home/marquee";
import { AcademicsPageContent } from "@/components/academics/academics-page-content";

export const metadata: Metadata = {
  title: "Academics | HP Ghosh Memorial Foundation",
  description:
    "Explore medical and nursing education at HP Ghosh Memorial Foundation.",
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Marquee />
      <Navbar />

      <AcademicsPageContent />
    </main>
  );
}