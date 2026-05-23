import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";

const previewImages = [
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80", alt: "Espresso", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80", alt: "Latte Art", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=80", alt: "Interior", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80", alt: "Atmosphere", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=700&q=80", alt: "Morning", span: "col-span-1" },
];

export function GalleryPreview() {
  return (
    <section className="bg-[#0c0a08] py-20 md:py-28 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-dm text-[9px] tracking-[0.34em] uppercase text-[#c9a96e] mb-3">
            Atmosphere
          </p>
          <h2 className="font-playfair text-[clamp(2rem,4.5vw,3.4rem)] text-[#f2e8d9] font-normal leading-[1.15] mb-10">
            Life at <em className="text-[#c9a96e]">Moreno</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-3 grid-rows-2 gap-1.5 h-[380px] md:h-[420px]">
          {previewImages.map((img, i) => (
            <FadeIn key={img.alt} delay={i * 0.07} className={`${img.span} overflow-hidden rounded-[3px] cursor-pointer group`}>
              <Image
                src={img.src}
                alt={img.alt}
                width={700}
                height={400}
                className="w-full h-full object-cover brightness-[0.72] saturate-[0.8] group-hover:brightness-[0.88] group-hover:saturate-100 group-hover:scale-[1.05] transition-all duration-550"
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.28}>
          <div className="text-center mt-7">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-[10px] tracking-[0.24em] uppercase text-[#c9a96e] hover:text-[#e8c98a] transition-colors"
            >
              Follow {SITE.instagramHandle} →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
