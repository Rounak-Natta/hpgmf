import type { Metadata } from "next";

import Navbar from "@/components/home/navbar";
import Marquee from "@/components/home/marquee";
import SiteFooter from "@/components/footer";
import { ContactPageContent } from "@/components/contact/contact-page-content";

export const metadata: Metadata = {
  title: "Contact Us | HP Ghosh Memorial Foundation",
  description:
    "Get in touch with H P Ghosh Memorial Foundation and H P Ghosh Memorial Medical College.",
};

export default function ContactPage() {
  return (
    <>
      <Marquee />
      <Navbar />

      <main className="min-h-screen bg-background">
        <ContactPageContent />
      </main>

      <SiteFooter />
    </>
  );
}