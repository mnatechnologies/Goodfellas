"use client";

import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-[#3a4a3a]">
      <div className="w-full px-6 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Logo */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="inline-flex flex-col items-center md:items-start hover:opacity-80 transition-opacity"
            >
              <Image
                src="/assets/gb-logo-secondary.png"
                alt="Goodfellas Barber"
                width={120}
                height={80}
                className="w-20 h-auto"
              />
              <div className="mt-2 text-base font-serif tracking-[0.3em] text-[#c9a84c]">
                GOODFELLAS
              </div>
              <div className="text-xs font-serif tracking-[0.4em] text-[#c9a84c]">
                BARBER
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <p className="text-[#a0a0a0] text-sm uppercase tracking-widest mb-4 font-bold">
              HOME
            </p>
            <nav className="space-y-2 flex flex-col">
              <a
                href="#"
                className="text-[#e5e5e5] hover:text-[#c5a55a] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-[#e5e5e5] hover:text-[#c5a55a] transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#locations"
                className="text-[#e5e5e5] hover:text-[#c5a55a] transition-colors"
              >
                Locations
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <p className="text-[#a0a0a0] text-sm uppercase tracking-widest mb-4 font-bold">
              FOLLOW US
            </p>
            <div className="flex gap-6 justify-center md:justify-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a55a] hover:text-[#c9a84c] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/goodfellasbarberaus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a55a] hover:text-[#c9a84c] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-right text-[#a0a0a0] text-sm">
          <p>Goodfellas Barber {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
