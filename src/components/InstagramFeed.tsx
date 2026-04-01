"use client";

import { useEffect, useRef } from "react";

// Replace these with actual Instagram post URLs
const instagramPostUrls = [
  "https://www.instagram.com/p/DVzn-OGEh2D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DSEuQaLkimd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DSoxWxVDt11/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
];

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script
    const existing = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-process embeds if script already loaded
      (window as unknown as { instgrm?: { Embeds: { process: () => void } } })
        .instgrm?.Embeds.process();
    }
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-[#0d0d0d]">
      <div className="w-full px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <h2 className="serif-heading text-4xl md:text-5xl text-center mb-12">
          Follow Our Feed
        </h2>

        {/* Instagram Embeds */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {instagramPostUrls.map((url, index) => (
            <div key={index} className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#0d0d0d",
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: "100%",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>

        {/* Link to Instagram */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/goodfellasbarberaus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#c5a55a] hover:text-[#c9a84c] font-serif italic text-lg transition-colors"
          >
            Visit @goodfellasbarberaus
          </a>
        </div>
      </div>
    </section>
  );
}
