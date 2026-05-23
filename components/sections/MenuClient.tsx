"use client";

import { useState, useCallback } from "react";
import { Search } from "lucide-react";
import { menuCategories } from "@/data/menu";

export function MenuClient() {
  const [activeSlug, setActiveSlug] = useState(menuCategories[0].slug);
  const [search, setSearch] = useState("");

  const active = menuCategories.find((c) => c.slug === activeSlug)!;

  const filtered = active.items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCatChange = useCallback(
    (slug: string) => {
      setActiveSlug(slug);
      setSearch("");
    },
    []
  );

  return (
    <div className="bg-[#0c0a08] pb-24">
      {/* Search */}
      <div className="px-5 md:px-16 pt-8">
        <div className="flex items-center gap-3 bg-[#161310] border border-[rgba(201,169,110,0.2)] rounded-sm px-4 max-w-[420px] focus-within:border-[rgba(201,169,110,0.5)] transition-colors">
          <Search size={15} className="text-[#c9a96e] opacity-50 flex-shrink-0" strokeWidth={1.5} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search drinks & food…"
            className="flex-1 bg-transparent py-3 font-dm text-[13px] text-[#ede3d4] placeholder-[rgba(237,227,212,0.3)] outline-none"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="px-5 md:px-16 pt-6 overflow-x-auto">
        <div className="flex gap-2 w-max pb-2">
          {menuCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCatChange(cat.slug)}
              className={`font-dm text-[10px] tracking-[0.1em] uppercase px-4 py-2 rounded-full whitespace-nowrap transition-all duration-250 border ${
                activeSlug === cat.slug
                  ? "bg-[#c9a96e] border-[#c9a96e] text-[#0c0a08] font-medium"
                  : "border-[rgba(201,169,110,0.22)] text-[rgba(237,227,212,0.45)] hover:border-[rgba(201,169,110,0.5)] hover:text-[#c9a96e]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu list */}
      <div className="px-5 md:px-16 pt-8">
        {/* Category heading */}
        <div className="border-b border-[rgba(201,169,110,0.14)] pb-5 mb-7">
          <h2 className="font-playfair text-[clamp(1.7rem,3.5vw,2.4rem)] text-[#f2e8d9] font-normal">
            {active.label}
          </h2>
          <p className="font-dm text-[11px] text-[rgba(237,227,212,0.3)] mt-1 tracking-[0.1em]">
            {filtered.length} item{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="font-dm text-[14px] text-[rgba(237,227,212,0.25)] py-12 text-center">
            No items found for &ldquo;{search}&rdquo;
          </p>
        ) : (
          <div className="flex flex-col">
            {filtered.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex items-center py-4 border-b border-[rgba(201,169,110,0.07)] group relative overflow-hidden shimmer"
                style={{
                  animation: `itemSlide 0.35s ease ${i * 0.025}s both`,
                }}
              >
                {/* Gold dot */}
                <div className="w-1 h-1 rounded-full bg-[#c9a96e] opacity-40 flex-shrink-0 mr-4" />
                {/* Name */}
                <span className="font-playfair text-[clamp(15px,2.2vw,18px)] text-[rgba(237,227,212,0.72)] group-hover:text-[#ede3d4] transition-colors duration-300 font-normal">
                  {item.name}
                </span>
                {/* Dotted line */}
                <div
                  className="flex-1 mx-4 min-w-[20px]"
                  style={{
                    height: "1px",
                    background:
                      "repeating-linear-gradient(90deg, rgba(201,169,110,0.12) 0px, rgba(201,169,110,0.12) 4px, transparent 4px, transparent 10px)",
                  }}
                />
                {/* Price */}
                <span className="font-dm text-[clamp(12px,1.6vw,14px)] text-[#c9a96e] font-normal tracking-[0.06em] flex-shrink-0">
                  {item.price} EGP
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
