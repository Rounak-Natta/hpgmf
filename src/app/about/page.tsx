import type { Metadata } from "next";

import Marquee from "@/components/home/marquee";
import Navbar  from "@/components/home/navbar";
import { AboutPageContent } from "@/components/about/about-page-content";

export const metadata: Metadata = {
  title: "About Us | HP Ghosh Memorial Foundation",
  description:
    "Learn about the vision, objectives, leadership, and guiding philosophy of HP Ghosh Memorial Foundation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Marquee />
      <Navbar />

      <AboutPageContent />
    </main>
  );
}