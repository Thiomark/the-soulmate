import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion Artists - Designers & Stylists",
  description: "Discover South African fashion designers and stylists. From streetwear to haute couture, explore collections and book designers for your fashion events.",
  keywords: [
    "South African fashion designers",
    "fashion stylists",
    "streetwear designers",
    "contemporary fashion",
    "fashion collections",
    "book fashion designers",
  ],
  openGraph: {
    title: "Fashion Artists | The Soulmates",
    description: "Discover South African fashion designers and stylists.",
  },
};

export default function FashionArtistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
