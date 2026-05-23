import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About — Moreno Café · Zamalek",
  description: "The story behind Moreno Café — specialty coffee, warm interiors, and the art of hospitality in Zamalek, Cairo.",
};

const values = [
  { title: "Craft", desc: "Every cup is handcrafted by trained baristas using single-origin beans sourced from the world's finest growing regions." },
  { title: "Space", desc: "Moreno is designed as a refuge — warm lighting, considered interiors, and a pace that encourages you to slow down." },
  { title: "Community", desc: "From Zamalek locals to international travellers, Moreno is Cairo's gathering point for those who appreciate the finer things." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Moreno"
        bgImage="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1400&q=80"
        height="h-[260px] md:h-[340px]"
      />

      <section className="bg-[#0c0a08] py-20 md:py-28 px-5 md:px-12">
        <div className="max-w-[860px] mx-auto">
          <FadeIn>
            <p className="font-cormorant text-[clamp(1.2rem,2.8vw,1.65rem)] text-[rgba(237,227,212,0.72)] leading-[1.82] text-center italic font-light mb-14">
              &ldquo;We didn&apos;t open a coffee shop.<br />We opened a sanctuary.&rdquo;
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 items-center">
            <FadeIn>
              <div className="rounded-[4px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=700&q=80"
                  alt="Barista craft"
                  width={700}
                  height={500}
                  className="w-full object-cover brightness-[0.78] hover:brightness-85 hover:scale-[1.03] transition-all duration-600"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="font-dm text-[9px] tracking-[0.34em] uppercase text-[#c9a96e] mb-4">
                Founded in Zamalek
              </p>
              <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#f2e8d9] font-normal leading-[1.2] mb-5">
                A <em className="text-[#c9a96e]">World-Class</em><br />Experience
              </h2>
              <div className="w-10 h-px bg-[#c9a96e] opacity-55 mb-6" />
              <p className="font-dm text-[14px] text-[rgba(237,227,212,0.62)] leading-[1.92] font-light mb-4">
                Born in the heart of Zamalek — Cairo&apos;s most international neighbourhood — Moreno was founded with one vision: to bring world-class specialty coffee to Egypt&apos;s most discerning guests.
              </p>
              <p className="font-dm text-[14px] text-[rgba(237,227,212,0.62)] leading-[1.92] font-light">
                Inspired by café culture in Paris, London, and Tokyo, every element — from the hand-selected espresso blends to the warm amber lighting — is a deliberate act of hospitality.
              </p>
            </FadeIn>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.12}>
                <div className="border-t-2 border-[#c9a96e] pt-5">
                  <h3 className="font-playfair text-[1.4rem] text-[#c9a96e] font-normal mb-3">
                    {v.title}
                  </h3>
                  <p className="font-dm text-[13px] text-[rgba(237,227,212,0.5)] leading-[1.85] font-light">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Hours card */}
          <FadeIn delay={0.2}>
            <div className="bg-[#161310] border border-[rgba(201,169,110,0.18)] rounded-[4px] p-8 md:p-12 text-center">
              <p className="font-dm text-[9px] tracking-[0.34em] uppercase text-[#c9a96e] mb-3">
                Opening Hours
              </p>
              <p className="font-playfair text-[clamp(1.4rem,3vw,2rem)] text-[#f2e8d9] font-normal">
                Daily · 8:00 AM – 12:00 AM
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
