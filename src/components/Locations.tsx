"use client";

import Image from "next/image";
import { locations } from "@/data/locations";
import LocationCard from "./LocationCard";

export default function Locations() {
  return (
    <section id="locations" className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/locations-section.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2e1a]/60" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
        {/* Section Heading */}
        <h2 className="serif-heading text-4xl md:text-5xl text-center mb-12 md:mb-16">
          Our Locations
        </h2>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
