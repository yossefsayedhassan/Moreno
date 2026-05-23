import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { FEATURED } from "@/lib/constants";

export function FeaturedSection() {
  return (
    <section className="bg-[#0c0a08] py-20 md:py-28 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-dm text-[9px] tracking-[0.34em] uppercase text-[#c9a96e] mb-3">
            House Favourites
          </p>
          <h2 className="font-playfair text-[clamp(2rem,4.5vw,3.4rem)] text-[#f2e8d9] font-normal leading-[1.15] mb-12 md:mb-16">
            Crafted for <br className="hidden sm:block" />
            <em className="text-[#c9a96e]">the Discerning</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {FEATURED.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.12}>
              <div className="border border-[rgba(201,169,110,0.14)] bg-[#161310] rounded-[4px] overflow-hidden group hover:border-[rgba(201,169,110,0.5)] hover:-translate-y-1.5 transition-all duration-350 cursor-default">
                <div className="h-[200px] md:h-[220px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover brightness-75 saturate-[0.8] group-hover:brightness-90 group-hover:scale-[1.04] transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-playfair text-[1.15rem] text-[#ede3d4] font-normal">
                      {item.name}
                    </h3>
                    <span className="font-dm text-[12px] text-[#c9a96e] font-medium tracking-[0.05em] ml-3 whitespace-nowrap">
                      {item.price} EGP
                    </span>
                  </div>
                  <p className="font-dm text-[12.5px] text-[rgba(237,227,212,0.45)] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block border border-[rgba(201,169,110,0.4)] text-[#c9a96e] font-dm text-[10px] tracking-[0.2em] uppercase px-10 py-3.5 rounded-sm hover:bg-[rgba(201,169,110,0.12)] hover:border-[#c9a96e] transition-all duration-300"
            >
              View Full Menu
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
