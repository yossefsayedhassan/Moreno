import { FadeIn } from "@/components/ui/FadeIn";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="bg-[#111009] py-20 md:py-28 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-dm text-[9px] tracking-[0.34em] uppercase text-[#c9a96e] mb-3 text-center">
            Voices
          </p>
          <h2 className="font-playfair text-[clamp(2rem,4.5vw,3.4rem)] text-[#f2e8d9] font-normal leading-[1.15] mb-12 text-center">
            What Our <em className="text-[#c9a96e]">Guests Say</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.14}>
              <div className="bg-[#161310] border border-[rgba(201,169,110,0.12)] rounded-[4px] p-6 md:p-7 h-full flex flex-col justify-between">
                <p className="font-cormorant text-[clamp(1.05rem,1.8vw,1.2rem)] text-[rgba(237,227,212,0.78)] leading-[1.82] italic font-light mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[rgba(201,169,110,0.13)] pt-4">
                  <p className="font-dm text-[12.5px] text-[#c9a96e] font-medium">{t.name}</p>
                  <p className="font-dm text-[10px] tracking-[0.1em] text-[rgba(237,227,212,0.32)] mt-0.5">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
