import TopMarquee from "@/components/home/marquee";
import Navbar from "@/components/home/navbar";
import HeroCarousel from "@/components/home/hero-carousel";
import About from "@/components/home/about";
import Academics from "@/components/home/academics";
import Campus from "@/components/home/campus";
import Career from "@/components/home/career";
import Contact from "@/components/home/contact";
import SiteFooter from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <TopMarquee />

      <Navbar />

      <main>
        <HeroCarousel />
        <About />
        <Academics />
        <Campus />
        <Career />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}