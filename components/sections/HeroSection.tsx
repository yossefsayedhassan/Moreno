"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-svh min-h-[580px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-transform duration-[2400ms] ease-out ${loaded ? "scale-100" : "scale-[1.06]"}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1800&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.28) saturate(0.7)",
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(12,10,8,0.65)_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0a08] pointer-events-none" />

      {/* Content */}
      <div className="relative text-center px-6 max-w-[700px]">
        <p
          className="font-dm text-[10px] tracking-[0.36em] uppercase text-[#c9a96e] mb-5"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(14px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}
        >
          Zamalek · Cairo · Egypt
        </p>
        <h1
          className="font-playfair text-[clamp(3.2rem,9vw,6.5rem)] font-normal leading-[1.04] text-[#f2e8d9] tracking-[0.04em] mb-5"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transition: "opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s",
          }}
        >
          Moreno<br />
          <em className="text-[#c9a96e]">Café</em>
        </h1>
        <p
          className="font-dm text-[clamp(12px,1.8vw,14px)] text-[rgba(237,227,212,0.55)] tracking-[0.1em] leading-[1.8] mb-12 font-light"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(14px)",
            transition: "opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s",
          }}
        >
          Specialty Coffee in the Heart of Zamalek
        </p>
        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(12px)",
            transition: "opacity 0.7s ease 1.1s, transform 0.7s ease 1.1s",
          }}
        >
          <Link
            href="/menu"
            className="bg-[#c9a96e] text-[#0c0a08] font-dm text-[11px] tracking-[0.16em] uppercase font-medium px-9 py-3.5 rounded-sm hover:bg-[#e8c98a] transition-colors"
          >
            Explore Menu
          </Link>
          <Link
            href="/about"
            className="border border-[rgba(201,169,110,0.4)] text-[#c9a96e] font-dm text-[11px] tracking-[0.16em] uppercase px-9 py-3.5 rounded-sm hover:bg-[rgba(201,169,110,0.12)] hover:border-[#c9a96e] transition-all"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 0.45 : 0,
          transition: "opacity 1s ease 1.9s",
          animation: loaded ? "bounceScroll 2.2s ease 2s infinite" : "none",
        }}
      >
        <span className="font-dm text-[8px] tracking-[0.3em] uppercase text-[#c9a96e]">
          Scroll
        </span>
        <div className="w-5 h-7 border border-[rgba(201,169,110,0.35)] rounded-[10px] relative">
          <span
            className="absolute left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-[#c9a96e] rounded-full"
            style={{ animation: "scrollDot 2s ease infinite" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes bounceScroll {
          0%,100%{transform:translateX(-50%) translateY(0)}
          50%{transform:translateX(-50%) translateY(6px)}
        }
      `}</style>
    </section>
  );
}
