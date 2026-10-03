"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/banner/hero1.webp",
    eyebrow: "HP Ghosh Memorial Foundation",
    title: "Where Learning Meets Compassion.",
    description:
      "Building an environment where medical education, clinical experience and human values come together.",
    button: "Explore Academics",
    href: "#academics",
    position: "center center",
  },
  {
    image: "/banner/hero2.webp",
    eyebrow: "A Campus Built for Learning",
    title: "An Environment Designed to Inspire.",
    description:
      "A modern campus created to support learning, collaboration and the healthcare professionals of tomorrow.",
    button: "Explore Campus",
    href: "#campus",
    position: "center center",
  },
  {
    image: "/banner/hero3.webp",
    eyebrow: "Learning Beyond the Classroom",
    title: "Preparing Tomorrow’s Healthcare Professionals.",
    description:
      "Academic learning and practical understanding come together to prepare students for a meaningful future in healthcare.",
    button: "Discover More",
    href: "#about",
    position: "center center",
  },
];

const AUTOPLAY_DELAY = 5000;

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const touchStartX = useRef<number | null>(null);

  const changeSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setAnimationKey((key) => key + 1);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % slides.length);
    setAnimationKey((key) => key + 1);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
    setAnimationKey((key) => key + 1);
  }, []);

  /*
   * Timer restarts every time the active slide changes.
   * This keeps autoplay predictable after clicking/swiping.
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timer);
  }, [currentSlide, animationKey, nextSlide]);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="home"
      aria-label="Homepage highlights"
      className="relative overflow-hidden bg-navy"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
<div className="relative h-[calc(100svh-36px)] min-h-[620px]">
                {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <article
              key={slide.image}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              {/* Image */}
              <div
                key={isActive ? `image-${animationKey}` : undefined}
                className={`absolute inset-0 ${
                  isActive ? "hero-image-active" : ""
                }`}
              >
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    objectPosition: slide.position,
                  }}
                />
              </div>

              {/* Desktop gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/5" />

              {/* Mobile gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden" />

              {/* Content */}
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-5 pb-24 sm:px-6 md:items-center md:pb-0 lg:px-8">
                <div
                  key={isActive ? `content-${animationKey}` : undefined}
                  className="max-w-xl lg:max-w-2xl"
                >
                  <p
                    className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 ${
                      isActive ? "hero-eyebrow-enter" : "opacity-0"
                    }`}
                  >
                    {slide.eyebrow}
                  </p>

                  <h1
                    className={`text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl ${
                      isActive ? "hero-title-enter" : "opacity-0"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className={`mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7 ${
                      isActive ? "hero-description-enter" : "opacity-0"
                    }`}
                  >
                    {slide.description}
                  </p>

                  <div
                    className={
                      isActive ? "hero-button-enter" : "opacity-0"
                    }
                  >
                    <Link
                      href={slide.href}
                      className="group mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-red hover:text-white"
                    >
                      {slide.button}

                      <ArrowRight className="size-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Desktop arrows */}
        <div className="absolute bottom-8 right-8 z-30 hidden items-center gap-2 md:flex lg:right-12">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="group flex size-11 items-center justify-center rounded-full border border-white/35 bg-black/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-navy"
          >
            <ArrowLeft className="size-4 stroke-[1.5] transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="group flex size-11 items-center justify-center rounded-full border border-white/35 bg-black/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-navy"
          >
            <ArrowRight className="size-4 stroke-[1.5] transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Progress */}
        <div className="absolute bottom-7 left-5 z-30 flex items-center gap-2 sm:left-6 md:bottom-8 md:left-1/2 md:-translate-x-1/2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => changeSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : undefined}
              className="relative h-[3px] w-10 overflow-hidden rounded-full bg-white/30"
            >
              {index === currentSlide && (
                <span
                  key={`progress-${currentSlide}-${animationKey}`}
                  className="hero-progress absolute inset-y-0 left-0 bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}