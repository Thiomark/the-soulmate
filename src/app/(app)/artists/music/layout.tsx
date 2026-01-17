import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Artists - R&B, Soul & Neo-Soul Musicians",
  description: "Explore our roster of talented music artists including R&B, soul, neo-soul, and funk musicians. Book them for your events or discover their latest releases.",
  keywords: [
    "R&B musicians South Africa",
    "soul artists",
    "neo-soul singers",
    "funk bands",
    "live music performers",
    "book musicians",
  ],
  openGraph: {
    title: "Music Artists | The Soulmates",
    description: "Explore our roster of talented R&B, soul, and neo-soul musicians.",
  },
};

export default function MusicArtistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
