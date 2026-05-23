import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <AboutSnippet />
      <GalleryPreview />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </>
  );
}
