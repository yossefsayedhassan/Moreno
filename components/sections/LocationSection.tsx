import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";

export function LocationSection() {
  return (
    <section className="bg-[#0c0a08] py-20 md:py-28 px-5 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <FadeIn>
          <p className="font-dm text-[9px] tracking-[0.34em] uppercase text-[#c9a96e] mb-4">
            Visit Us
          </p>
          <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#f2e8d9] font-normal leading-[1.22] mb-5">
            Find Your<br />
            <em className="text-[#c9a96e]">Corner of Calm</em>
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] opacity-55 mb-8" />
          <div className="flex flex-col gap-5">
            {[
              { label: "Address", value: SITE.address },
              { label: "Hours", value: SITE.hours },
              { label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram },
            ].map((item) => (
              <div key={item.label} className="border-b border-[rgba(201,169,110,0.09)] pb-5">
                <p className="font-dm text-[9px] tracking-[0.22em] uppercase text-[rgba(201,169,110,0.5)] mb-1.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-dm text-[13.5px] text-[#c9a96e] hover:text-[#e8c98a] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-dm text-[13.5px] text-[rgba(237,227,212,0.65)] leading-relaxed">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-[#c9a96e] text-[#0c0a08] font-dm text-[11px] tracking-[0.16em] uppercase font-medium px-8 py-3.5 rounded-sm hover:bg-[#e8c98a] transition-colors"
          >
            Get Directions →
          </a>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="rounded-[4px] overflow-hidden border border-[rgba(201,169,110,0.15)] h-[320px] md:h-[420px] w-full">
            <iframe
              title="Moreno Café Location"
              src={SITE.mapsEmbed}
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: "block",
                filter: "invert(0.88) hue-rotate(180deg) saturate(0.45) brightness(0.85)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
