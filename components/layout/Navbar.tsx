"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[62px] flex items-center justify-between px-5 md:px-12 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(12,10,8,0.95)] backdrop-blur-md border-b border-[rgba(201,169,110,0.18)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-playfair text-[22px] tracking-[0.18em] text-[#c9a96e] hover:text-[#e8c98a] transition-colors"
        >
          MORENO
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-dm text-[11px] tracking-[0.14em] uppercase transition-colors relative pb-0.5 group ${
                pathname === l.href
                  ? "text-[#c9a96e]"
                  : "text-[rgba(237,227,212,0.45)] hover:text-[#c9a96e]"
              }`}
            >
              {l.label}
              <span
                className={`absolute bottom-0 left-0 h-px bg-[#c9a96e] transition-all duration-300 ${
                  pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#c9a96e] text-[#0c0a08] font-dm text-[10px] tracking-[0.16em] uppercase font-medium px-5 py-2 rounded-sm hover:bg-[#e8c98a] transition-colors"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#c9a96e] p-1"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 bg-[#0c0a08] z-[99] flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-[#c9a96e]"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X size={26} strokeWidth={1.5} />
        </button>
        <span className="font-playfair text-3xl tracking-[0.18em] text-[#c9a96e]">
          MORENO
        </span>
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-playfair text-3xl text-[#ede3d4] hover:text-[#c9a96e] transition-colors"
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            {l.label}
          </Link>
        ))}
        <span className="font-dm text-[10px] tracking-[0.28em] uppercase text-[rgba(237,227,212,0.3)] mt-4">
          @moreno.eg
        </span>
      </div>
    </>
  );
}
