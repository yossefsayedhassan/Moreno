import Link from "next/link";
import { SITE } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const menuLinks = ["Hot Drinks", "Coffee", "Matcha", "Pastries", "Sandwiches"];

export function Footer() {
  return (
    <footer className="bg-[#080605] border-t border-[rgba(201,169,110,0.1)] pt-16 pb-7 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-playfair text-xl tracking-[0.18em] text-[#c9a96e] hover:text-[#e8c98a] transition-colors"
            >
              MORENO
            </Link>
            <p className="font-dm text-[13px] text-[rgba(237,227,212,0.38)] leading-relaxed mt-3 max-w-[210px] font-light">
              Specialty coffee in the heart of Zamalek. A place to pause, connect, and savour.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-[12px] text-[rgba(201,169,110,0.45)] hover:text-[#c9a96e] transition-colors"
              >
                Instagram
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-[12px] text-[rgba(201,169,110,0.45)] hover:text-[#c9a96e] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-dm text-[9px] tracking-[0.26em] uppercase text-[#c9a96e] mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-dm text-[13px] text-[rgba(237,227,212,0.38)] hover:text-[rgba(237,227,212,0.85)] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <p className="font-dm text-[9px] tracking-[0.26em] uppercase text-[#c9a96e] mb-4">
              Menu
            </p>
            <div className="flex flex-col gap-2.5">
              {menuLinks.map((l) => (
                <Link
                  key={l}
                  href="/menu"
                  className="font-dm text-[13px] text-[rgba(237,227,212,0.38)] hover:text-[rgba(237,227,212,0.85)] transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div>
            <p className="font-dm text-[9px] tracking-[0.26em] uppercase text-[#c9a96e] mb-4">
              Visit
            </p>
            <div className="flex flex-col gap-2.5">
              <p className="font-dm text-[13px] text-[rgba(237,227,212,0.38)]">
                Zamalek, Cairo
              </p>
              <p className="font-dm text-[13px] text-[rgba(237,227,212,0.38)]">
                Daily 8AM–12AM
              </p>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-[13px] text-[rgba(237,227,212,0.38)] hover:text-[#c9a96e] transition-colors"
              >
                @moreno.eg
              </a>
              <Link
                href="/contact"
                className="font-dm text-[13px] text-[rgba(237,227,212,0.38)] hover:text-[rgba(237,227,212,0.85)] transition-colors"
              >
                Reservations
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(201,169,110,0.08)] pt-5 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-dm text-[11px] text-[rgba(237,227,212,0.22)]">
            © {new Date().getFullYear()} Moreno Café · All rights reserved
          </p>
          <p className="font-dm text-[11px] text-[rgba(237,227,212,0.22)]">
            8/10 Bahgat Ali Street, Zamalek, Cairo
          </p>
        </div>
      </div>
    </footer>
  );
}
