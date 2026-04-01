"use client";

import { Phone, MapPin } from "lucide-react";
import type { Location } from "@/data/locations";
import Link from "next/link";

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="group relative bg-[#1a2e1a] border border-[#3a4a3a] hover:border-[#c5a55a] transition-all duration-300 overflow-hidden rounded-sm">
      {/* Coming Soon Badge */}
      {location.comingSoon && (
        <div className="absolute top-0 left-0 right-0 z-20 bg-[#c5a55a] text-[#0d0d0d] py-2 text-center font-serif italic font-bold">
          Coming Soon
        </div>
      )}

      {/* Location content container */}
      <div className={`flex flex-col h-full ${location.comingSoon ? "pt-16" : ""}`}>
        {/* Header section */}
        <div className="p-6 border-b border-[#3a4a3a] text-center">
          <h3 className="serif-heading text-2xl md:text-3xl mb-2">
            {location.name}
          </h3>
          <p className="text-[#a0a0a0] text-sm flex items-center justify-center gap-2">
            <MapPin size={16} />
            {location.suburb}
          </p>
        </div>

        {/* Contact Info */}
        {location.phone && !location.comingSoon && (
          <div className="px-6 py-4 border-b border-[#3a4a3a] text-center">
            <Link
              href={`tel:${location.phone}`}
              className="flex items-center justify-center gap-2 text-[#c9a84c] hover:text-[#c5a55a] transition-colors group/phone"
            >
              <Phone size={18} />
              <span className="font-semibold te">{location.phone}</span>
            </Link>
          </div>
        )}

        {/* Opening Hours */}
        {location.hours && location.hours.length > 0 && (
          <div className="flex-1 px-6 py-4">
            <p className="text-[#c9a84c] font-serif italic text-sm mb-3 text-center">
              Opening Hours
            </p>
            <div className="space-y-2">
              {location.hours.map((hour, index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm text-[#e5e5e5]"
                >
                  <span className="text-[#a0a0a0]">{hour.dayRange}</span>
                  <span className="font-semibold">{hour.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Google Maps Embed */}
        {!location.comingSoon && (
          <div className="px-6 py-4 border-t border-[#3a4a3a] mt-auto">
            <iframe
              className="w-full h-36 rounded-sm border border-[#3a4a3a]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(`Goodfellas Barber ${location.suburb}`)}&zoom=15`}
              allowFullScreen
              title={`Map of Goodfellas Barber ${location.name}`}
              style={{ filter: "invert(90%) hue-rotate(180deg)" }}
            />
          </div>
        )}

        {/* Coming soon message */}
        {location.comingSoon && (
          <div className="flex-1 px-6 py-8 flex items-center justify-center text-center">
            <div>
              <p className="text-[#c9a84c] font-serif italic text-lg mb-2">
                Stay tuned for opening details
              </p>
              <p className="text-[#a0a0a0] text-sm">
                Sign up for notifications when we launch at this location
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
