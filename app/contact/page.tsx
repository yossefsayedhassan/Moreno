import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Moreno Café · Zamalek",
  description: "Get in touch with Moreno Café. Reservations, events, or just to say hello — we'd love to hear from you.",
};

const details = [
  { label: "Location", value: SITE.address },
  { label: "Hours", value: SITE.hours },
  { label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram },
  { label: "WhatsApp", value: "Chat with us →", href: SITE.whatsapp },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Reach Out"
        title="Contact"
        bgImage="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1400&q=80"
      />

      <section className="bg-[#0c0a08] py-20 md:py-28 px-5 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <FadeIn>
            <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#f2e8d9] font-normal leading-[1.22] mb-4">
              Let&apos;s <em className="text-[#c9a96e]">Connect</em>
            </h2>
            <div className="w-10 h-px bg-[#c9a96e] opacity-55 mb-7" />
            <p className="font-dm text-[14px] text-[rgba(237,227,212,0.55)] leading-[1.9] font-light mb-10">
              For reservations, events, or simply to say hello — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col gap-5">
              {details.map((d) => (
                <div key={d.label} className="border-b border-[rgba(201,169,110,0.09)] pb-5">
                  <p className="font-dm text-[9px] tracking-[0.22em] uppercase text-[rgba(201,169,110,0.5)] mb-1.5">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-dm text-[13.5px] text-[#c9a96e] hover:text-[#e8c98a] transition-colors"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-dm text-[13.5px] text-[rgba(237,227,212,0.62)] leading-relaxed">
                      {d.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.18}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
