import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";

const artArtists = [
  {
    id: "abstract-visions",
    name: "ABSTRACT VISIONS",
    medium: "Mixed Media / Abstract",
    description: "Bold abstract compositions that challenge perception and emotion.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    href: "#"
  },
  {
    id: "color-theory",
    name: "COLOR THEORY",
    medium: "Acrylic / Canvas",
    description: "Vibrant color studies exploring the psychology of hue and form.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    href: "#"
  },
  {
    id: "urban-expressions",
    name: "URBAN EXPRESSIONS",
    medium: "Street Art / Murals",
    description: "Contemporary street art bringing urban stories to public spaces.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    href: "#"
  },
  {
    id: "digital-dreams",
    name: "DIGITAL DREAMS",
    medium: "Digital Art / NFT",
    description: "Cutting-edge digital artwork pushing the boundaries of visual art.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    href: "#"
  },
  {
    id: "botanical-beauty",
    name: "BOTANICAL BEAUTY",
    medium: "Watercolor / Nature",
    description: "Delicate botanical illustrations celebrating natural beauty and form.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    href: "#"
  },
  {
    id: "sculptural-forms",
    name: "SCULPTURAL FORMS",
    medium: "Sculpture / Installation",
    description: "Three-dimensional explorations of space, material, and meaning.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    href: "#"
  }
];

export default function ArtArtists() {
  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      <Header />

      <main className="px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
                ART ARTISTS
              </h1>
              <div className="w-32 h-0.5 bg-gray-800"></div>
            </div>
            <div className="text-4xl md:text-5xl font-light text-gray-800">
              GALLERY
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-sm font-light tracking-[0.2em] text-gray-600 mb-8">
              ALL ARTISTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artArtists.map((artist) => (
              <Link key={artist.id} href={artist.href} className="group block">
                <div className="space-y-4">
                  <div className="aspect-square rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={350}
                      height={350}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-light text-gray-800 group-hover:text-[#E67E50] transition-colors">
                      {artist.name}
                    </h3>
                    <p className="text-xs font-light tracking-[0.1em] text-gray-600 uppercase">
                      {artist.medium}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {artist.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="space-y-4">
              <div className="flex justify-center space-x-8 text-xs font-light tracking-[0.1em] text-gray-600 uppercase">
                <button className="hover:text-[#E67E50] transition-colors">ABSTRACT</button>
                <button className="hover:text-[#E67E50] transition-colors">DIGITAL</button>
                <button className="hover:text-[#E67E50] transition-colors">SCULPTURE</button>
                <button className="hover:text-[#E67E50] transition-colors">MIXED MEDIA</button>
              </div>
              <p className="text-sm text-gray-600 font-light">
                Explore diverse artistic expressions and creative visions
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}