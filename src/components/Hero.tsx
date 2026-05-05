"use client";

import { useState, useEffect } from "react";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { locations } from "@/data/locations";

export default function Hero() {
  const openLocationsCount = locations.filter((l) => !l.comingSoon).length;

  const [animationPhase, setAnimationPhase] = useState<
    "overlay" | "fade-logo" | "split" | "done"
  >("overlay");

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setAnimationPhase("fade-logo");
    }, 1200);

    const splitTimer = setTimeout(() => {
      setAnimationPhase("split");
    }, 2000);

    const doneTimer = setTimeout(() => {
      setAnimationPhase("done");
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(splitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const scrollToLocations = () => {
    const locationsSection = document.getElementById("locations");
    locationsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/gb-hero-bg.png"
          alt="Goodfellas Barber"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/10" />
      </div>

      {/* ===== FLORAL CURTAIN OVERLAY ===== */}
      {animationPhase !== "done" && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Left curtain */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              transform:
                animationPhase === "split"
                  ? "translateX(-100%)"
                  : "translateX(0)",
            }}
          >
            <Image
              src="/assets/gb-opening-bg-left-compressed.jpg"
              alt=""
              fill
              className="object-cover object-right"
              priority
            />
          </div>

          {/* Right curtain */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              transform:
                animationPhase === "split"
                  ? "translateX(100%)"
                  : "translateX(0)",
            }}
          >
            <Image
              src="/assets/gb-opening-bg-right-compressed.jpg"
              alt=""
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          {/* Centered GB monogram on overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out z-10"
            style={{
              opacity: animationPhase === "overlay" ? 1 : 0,
            }}
          >
            <Image
              src="/assets/bg-logo-ai-file.ai-ai.png"
              alt="Goodfellas Barber"
              width={300}
              height={300}
              className="w-32 md:w-52"
              priority
            />
          </div>
        </div>
      )}

      {/* Logo — pinned to top center */}
      <div className="absolute top-[4vh] md:top-[5vh] z-10 flex flex-col items-center text-center">
        <Image
          src="/assets/bg-logo-ai-file.ai-ai.png"
          alt="Goodfellas Barber"
          width={400}
          height={400}
          className="w-40 md:w-56 h-auto"
          priority
        />
      </div>

      {/* CTA + Social — vertically centered */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <button
          onClick={scrollToLocations}
          className="mb-10 p-2 md:mb-6 px-4 md:px-5 py-2 md:py-2 border border-[#8a9e8e]/60 text-white/90 font-serif text-sm md:text-base bg-[#5a7a6a]/50 backdrop-blur-sm hover:bg-[#5a7a6a]/80 transition-all duration-300"
        >
          Our Locations
        </button>

        <div className="flex gap-5 md:gap-">
          <a
            href="https://www.facebook.com/goodfellasbarberaus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5a55a] hover:text-[#d4b86a] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={22} className="md:w-6 md:h-6" />
          </a>
          <a
            href="https://instagram.com/goodfellasbarberaus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5a55a] hover:text-[#d4b86a] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={22} className="md:w-6 md:h-6" />
          </a>
        </div>
      </div>

      {/* Stats Bar — pinned to bottom, centered */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
        <div className="grid grid-cols-4 text-center">
          <div className="text-center py-3 md:py-4">
            <div className="text-3xl md:text-4xl font-bold font-serif text-white">2</div>
            <div className="text-xs md:text-sm text-white/70 font-light mt-1 leading-tight">
              Shops<br />Coming Soon
            </div>
          </div>
          <div className="text-center py-3 md:py-4">
            <div className="text-3xl md:text-4xl font-bold font-serif text-white">
              <span className="text-base md:text-lg mr-1 font-normal">+</span>21
            </div>
            <div className="text-xs md:text-sm text-white/70 font-light mt-1 leading-tight">
              Years of<br />Experience
            </div>
          </div>
          <div className="text-center py-3 md:py-4">
            <div className="text-3xl md:text-4xl font-bold font-serif text-white">
              <span className="text-base md:text-lg mr-1 font-normal">+</span>1000
            </div>
            <div className="text-xs md:text-sm text-white/70 font-light mt-1 leading-tight">
              Daily<br />Customers
            </div>
          </div>
          <div className="text-center py-3 md:py-4">
            <div className="text-3xl md:text-4xl font-bold font-serif text-white">{openLocationsCount}</div>
            <div className="text-xs md:text-sm text-white/70 font-light mt-1 leading-tight">
              Open<br />Locations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
