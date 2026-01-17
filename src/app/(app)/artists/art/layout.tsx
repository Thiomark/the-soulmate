import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Artists - Contemporary & Mixed Media Art",
  description: "Explore South African visual artists working in contemporary, abstract, digital, and mixed media art. View portfolios and commission artwork.",
  keywords: [
    "South African visual artists",
    "contemporary art",
    "abstract art",
    "digital art",
    "mixed media artists",
    "art exhibitions",
    "commission artwork",
  ],
  openGraph: {
    title: "Visual Artists | The Soulmates",
    description: "Explore South African visual artists working in contemporary and mixed media art.",
  },
};

export default function ArtArtistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
