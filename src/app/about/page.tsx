import type { Metadata } from "next";

import Marquee from "@/components/home/marquee";
import Navbar from "@/components/home/navbar";
import SiteFooter from "@/components/footer";
import { AboutPageContent } from "@/components/about/about-page-content";

export const metadata: Metadata = {
  title: "About Us | HP Ghosh Memorial Foundation",
  description:
    "Learn about the vision, objectives, leadership, and guiding philosophy of HP Ghosh Memorial Foundation.",
};

export default function AboutPage() {
  return (
    <>
      <Marquee />
      <Navbar />

      <main className="min-h-screen bg-background">
        <AboutPageContent />
      </main>

      <SiteFooter />
    </>
  );
}