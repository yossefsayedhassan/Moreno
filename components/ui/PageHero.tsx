interface PageHeroProps {
  eyebrow: string;
  title: string;
  bgImage: string;
  height?: string;
}

export function PageHero({ eyebrow, title, bgImage, height = "h-[280px] md:h-[340px]" }: PageHeroProps) {
  return (
    <div
      className={`relative ${height} flex items-end pb-10 md:pb-14 px-5 md:px-16 overflow-hidden`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(12,10,8,0.5)] to-[rgba(12,10,8,0.92)]" />
      <div className="relative">
        <p className="font-dm text-[9px] tracking-[0.34em] uppercase text-[#c9a96e] mb-2">
          {eyebrow}
        </p>
        <h1 className="font-playfair text-[clamp(2.2rem,5.5vw,4rem)] text-[#f2e8d9] font-normal leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}
