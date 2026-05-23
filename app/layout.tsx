import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Moreno Café — Specialty Coffee · Zamalek, Cairo",
  description:
    "Premium specialty coffee café in the heart of Zamalek, Cairo. Experience world-class espresso, artisanal drinks, and warm luxury atmosphere.",
  keywords: ["Moreno Café", "specialty coffee Cairo", "Zamalek café", "best coffee Cairo", "luxury café Egypt"],
  openGraph: {
    title: "Moreno Café — Specialty Coffee · Zamalek",
    description: "Specialty Coffee in the Heart of Zamalek, Cairo.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0c0a08" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0c0a08] text-[#ede3d4] antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
