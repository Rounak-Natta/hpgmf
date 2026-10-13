import type { Metadata } from "next";

import Navbar from "@/components/home/navbar";
import Marquee from "@/components/home/marquee";
import SiteFooter from "@/components/footer";
import { AcademicsPageContent } from "@/components/academics/academics-page-content";

export const metadata: Metadata = {
  title: "Academics | HP Ghosh Memorial Foundation",
  description:
    "Explore medical and nursing education at HP Ghosh Memorial Foundation.",
};

export default function AcademicsPage() {
  return (
    <>
      <Marquee />
      <Navbar />

      <main className="min-h-screen bg-background">
        <AcademicsPageContent />
      </main>

      <SiteFooter />
    </>
  );
}