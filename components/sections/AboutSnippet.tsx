import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutSnippet() {
  return (
    <section className="bg-[#111009] py-20 md:py-28 px-5 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Image */}
        <FadeIn>
          <div className="relative rounded-[4px] overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80"
              alt="Moreno Café interior"
              width={800}
              height={600}
              className="w-full object-cover brightness-[0.78] saturate-[0.82] group-hover:brightness-85 group-hover:scale-[1.03] transition-all duration-600"
            />
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-[-16px] md:right-[-16px] bg-[#161310] border border-[rgba(201,169,110,0.22)] p-4 md:p-5 rounded-[3px] shadow-lg">
              <p className="font-playfair text-[2.2rem] text-[#c9a96e] leading-none">8+</p>
              <p className="font-dm text-[9px] tracking-[0.18em] uppercase text-[rgba(201,169,110,0.55)] mt-1">
                Years of Craft
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.18}>
          <p className="font-dm text-[9px] tracking-[0.34em] uppercase text-[#c9a96e] mb-4">
            Our Philosophy
          </p>
          <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#f2e8d9] font-normal leading-[1.22] mb-4">
            Where Cairo Meets<br />
            <em className="text-[#c9a96e]">European Coffee</em>
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] opacity-60 mb-6" />
          <p className="font-dm text-[14px] text-[rgba(237,227,212,0.62)] leading-[1.9] font-light mb-4">
            Tucked in the elegant streets of Zamalek, Moreno blends the warmth of Egyptian hospitality with the precision of European specialty coffee.
          </p>
          <p className="font-dm text-[14px] text-[rgba(237,227,212,0.62)] leading-[1.9] font-light mb-8">
            Every cup is a ritual. Every corner, a story.
          </p>
          <div className="flex gap-7">
            {[
              ["Specialty", "Coffee"],
              ["Artisanal", "Pastries"],
              ["Zamalek", "Location"],
            ].map(([val, lbl]) => (
              <div key={lbl} className="border-t border-[rgba(201,169,110,0.22)] pt-3">
                <p className="font-playfair text-[1.15rem] text-[#c9a96e]">{val}</p>
                <p className="font-dm text-[9px] tracking-[0.16em] uppercase text-[rgba(237,227,212,0.3)] mt-1">{lbl}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
