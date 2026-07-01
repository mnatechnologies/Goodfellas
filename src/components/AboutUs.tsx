"use client";

import Image from "next/image";
import { locations } from "@/data/locations";

export default function AboutUs() {
  const openLocationsCount = locations.filter((l) => !l.comingSoon).length;

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/about-us-section.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2e1a]/40" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
        {/* Row 1: Manhal photo (left) + heading & paragraphs (right) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start">
          {/* Left — Manhal photo */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4]">
              <div className="absolute inset-0 border-[10px] border-[#c5a55a] shadow-xl overflow-hidden">
                <div className="absolute inset-3 border-2 border-[#c9a84c]/60" />
                <Image
                  src="/assets/gb-manhal-image.png"
                  alt="Manhal Betto - Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center text-[#c9a84c] font-serif italic text-lg mt-4">
              Manhal Betto
            </div>
          </div>

          {/* Right — heading + intro paragraphs */}
          <div className="flex flex-col gap-6">
            <h2 className="serif-heading text-5xl md:text-7xl lg:text-8xl leading-tight text-right">
              About Us
            </h2>

            <p className="text-[#e5e5e5] leading-relaxed text-base md:text-lg">
              Founded in 2011 by Manhal Betto, Goodfellas Barber was built on a
              clear vision to elevate the standard of men&apos;s grooming through
              precision, consistency, and uncompromising attention to detail.
            </p>

            <p className="text-[#e5e5e5] leading-relaxed text-base md:text-lg">
              Manhal Betto believes in the art of barbering and offers only the
              finest products and services for gentlemen. In addition to its{" "}
              {openLocationsCount} magnificent locations throughout Sydney, Manhal
              has established a new
              industry standard within the barbering community, making Goodfellas
              Barber the barbershop of choice.
            </p>
          </div>
        </div>

        {/* Full-width quote */}
        <div className="border-l-4 border-[#c5a55a] pl-6 md:pl-8 py-4 my-12 md:my-16">
          <p className="text-[#c9a84c] italic font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed">
            &ldquo;We strive to set the standard in men&apos;s grooming,
            combining precision, artistry, and refinement to deliver an
            experience defined by modern luxury&rdquo;
            <span className="text-[#a0a0a0] not-italic text-base md:text-lg ml-2">
              — Manhal Betto
            </span>
          </p>
        </div>

        {/* Row 2: Shop photo (left) + remaining text (right) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start">
          {/* Left — shop interior photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[4/3]">
              <div className="absolute inset-0 border-[10px] border-[#c5a55a] shadow-xl overflow-hidden">
                <div className="absolute inset-3 border-2 border-[#c9a84c]/60" />
                <Image
                  src="/assets/gb-aboutus-teamimage-1.png"
                  alt="Goodfellas Barber Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right — remaining paragraphs in gold */}
          <div className="flex flex-col gap-6">
            <p className="text-[#c9a84c] leading-relaxed text-base md:text-lg">
              Goodfellas Barber combines classic, old-school barbering techniques
              with modern style and contemporary trends, delivered in a refined and
              welcoming environment. From the moment you arrive, you&apos;re
              greeted by name and looked after with genuine care and attention.
            </p>

            <p className="text-[#c9a84c] leading-relaxed text-base md:text-lg">
              From the moment you take a seat in the chair, you can relax knowing
              every aspect of your grooming experience is handled in one place,
              with precision and consistency at the core.
            </p>

            <p className="text-[#c9a84c] leading-relaxed text-base md:text-lg">
              We offer a complete range of men&apos;s grooming services, from
              signature haircuts and straight razor shaves to professional colour
              services, all delivered to the highest standard.
            </p>

            <p className="text-[#c9a84c] leading-relaxed text-base md:text-lg">
              Step into something better. Experience the difference of considered,
              superior barbering and grooming at Goodfellas Barber.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
