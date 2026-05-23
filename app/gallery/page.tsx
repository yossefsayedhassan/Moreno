import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Footer } from "@/components/layout/Footer";
import { GALLERY_IMAGES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery — Moreno Café · Zamalek",
  description: "A visual journey through Moreno Café — specialty coffee, warm interiors, latte art, and Zamalek luxury vibes.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Story"
        title="Gallery"
        bgImage="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1400&q=80"
      />

      <section className="bg-[#0c0a08] py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-dm text-[12px] text-[rgba(237,227,212,0.38)] text-center mb-10 tracking-[0.06em]">
              A curated glimpse into life at Moreno ·{" "}
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a96e] hover:text-[#e8c98a] transition-colors"
              >
                {SITE.instagramHandle}
              </a>
            </p>
          </FadeIn>

          {/* Masonry-style columns */}
          <div className="columns-2 md:columns-3 gap-2">
            {GALLERY_IMAGES.map((img, i) => (
              <FadeIn key={img.alt} delay={i * 0.06} className="mb-2 break-inside-avoid overflow-hidden rounded-[3px] cursor-pointer group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover brightness-[0.72] saturate-[0.78] group-hover:brightness-[0.9] group-hover:saturate-100 group-hover:scale-[1.04] transition-all duration-550"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
