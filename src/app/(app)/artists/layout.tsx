import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists - Music, Art & Fashion Creators",
  description: "Discover talented South African artists in music, visual arts, and fashion. Explore their portfolios, upcoming shows, and book them for events.",
  keywords: [
    "South African artists",
    "musicians",
    "visual artists",
    "fashion designers",
    "R&B artists",
    "neo-soul musicians",
    "contemporary artists",
    "emerging talent",
  ],
  openGraph: {
    title: "Artists | The Soulmates",
    description: "Discover talented South African artists in music, visual arts, and fashion.",
  },
};

export default function ArtistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
