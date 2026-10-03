"use client";

import { useEffect, useState } from "react";

import TopMarquee from "@/components/home/marquee";
import Navbar from "@/components/home/navbar";
import HeroCarousel from "@/components/home/hero-carousel";
import Preloader from "@/components/preloader";
import About from "@/components/home/about";
import Academics from "@/components/home/academics";
import Campus from "@/components/home/campus";
import Career from "@/components/home/career";
import Contact from "@/components/home/contact";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Keep the preloader visible briefly so it does not flash too quickly.
    const startExit = window.setTimeout(() => {
      setLeaving(true);
    }, 1000);

    // Remove the preloader after the fade-out animation.
    const finishLoading = window.setTimeout(() => {
      setLoading(false);
    }, 1450);

    return () => {
      window.clearTimeout(startExit);
      window.clearTimeout(finishLoading);
    };
  }, []);

  return (
    <>
      {/* Homepage */}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <TopMarquee />

        <Navbar />

        <main>
          <HeroCarousel />
          <About/>
          <Academics/>
          <Campus/>
          <Career/>
          <Contact/>
        </main>
      </div>

      {/* Preloader */}
      {loading && <Preloader leaving={leaving} />}
    </>
  );
}