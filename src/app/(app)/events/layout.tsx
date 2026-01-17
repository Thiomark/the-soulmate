import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Music, Art & Fashion Shows",
  description: "Browse and book tickets for upcoming music concerts, art exhibitions, and fashion shows in South Africa. Find R&B, neo-soul, funk concerts and more.",
  keywords: [
    "upcoming events South Africa",
    "music concerts",
    "art exhibitions",
    "fashion shows",
    "buy tickets online",
    "live performances",
    "event calendar",
  ],
  openGraph: {
    title: "Events | The Soulmates",
    description: "Browse and book tickets for upcoming music concerts, art exhibitions, and fashion shows in South Africa.",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
