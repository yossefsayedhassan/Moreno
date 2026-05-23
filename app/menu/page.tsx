import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { MenuClient } from "@/components/sections/MenuClient";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Menu — Moreno Café · Zamalek",
  description: "Explore Moreno Café's full menu. Specialty coffee, matcha, milkshakes, pastries, sandwiches and more.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore"
        title="Our Menu"
        bgImage="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1400&q=80"
      />
      <MenuClient />
      <Footer />
    </>
  );
}
