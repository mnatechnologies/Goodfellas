"use client";

import Image from "next/image";

export default function FloralDivider() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Floral wallpaper header image */}
      <div className="relative w-full h-32 md:h-56">
        <Image
          src="/assets/gb-wallpaper-header-1.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
