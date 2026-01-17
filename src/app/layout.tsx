import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Soulmates | Music, Art & Fashion Events in South Africa",
    template: "%s | The Soulmates",
  },
  description: "Discover and book tickets for the best music concerts, art exhibitions, and fashion shows in South Africa. Experience soulful performances, contemporary art, and cutting-edge fashion with The Soulmates.",
  keywords: [
    "music events South Africa",
    "concerts Johannesburg",
    "art exhibitions Cape Town",
    "fashion shows South Africa",
    "R&B concerts",
    "neo-soul music",
    "live music events",
    "book event tickets",
    "South African artists",
    "cultural events",
    "music festivals",
    "fashion week",
    "contemporary art",
  ],
  authors: [{ name: "The Soulmates" }],
  creator: "The Soulmates",
  publisher: "The Soulmates",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thesoulmates.co.za"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "The Soulmates",
    title: "The Soulmates | Music, Art & Fashion Events in South Africa",
    description: "Discover and book tickets for the best music concerts, art exhibitions, and fashion shows in South Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Soulmates - Music, Art & Fashion Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Soulmates | Music, Art & Fashion Events",
    description: "Discover and book tickets for the best music concerts, art exhibitions, and fashion shows in South Africa.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
