import Image from "next/image";
import Link from "next/link";

const fashionArtists = [
  {
    id: "jst-rea-fashion",
    slug: "jst-rea",
    name: "JST.REA",
    specialty: "Streetwear / Contemporary",
    description: "Where rhythm meets fabric - bold, clean, and unapologetically authentic fashion.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184868/the_soulmates/the_soulmates/fashion-striped-outfit.jpg"
  },
  {
    id: "avant-garde-collective",
    slug: "avant-garde-collective",
    name: "AVANT-GARDE COLLECTIVE",
    specialty: "High Fashion / Couture",
    description: "Pushing boundaries with experimental designs and unconventional materials.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
  },
  {
    id: "sustainable-style",
    slug: "sustainable-style",
    name: "SUSTAINABLE STYLE",
    specialty: "Eco Fashion / Sustainable",
    description: "Environmentally conscious fashion without compromising on style or quality.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
  },
  {
    id: "vintage-revival",
    slug: "vintage-revival",
    name: "VINTAGE REVIVAL",
    specialty: "Vintage / Retro",
    description: "Reimagining classic styles with modern twists and contemporary fits.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
  },
  {
    id: "minimalist-approach",
    slug: "minimalist-approach",
    name: "MINIMALIST APPROACH",
    specialty: "Minimalism / Clean Lines",
    description: "Less is more - sophisticated simplicity in every carefully crafted piece.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
  },
  {
    id: "cultural-fusion",
    slug: "cultural-fusion",
    name: "CULTURAL FUSION",
    specialty: "Cultural / Traditional",
    description: "Celebrating heritage through contemporary interpretations of traditional wear.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
  }
];

export default function FashionArtists() {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
              FASHION ARTISTS
            </h1>
            <div className="w-32 h-0.5 bg-gray-800"></div>
          </div>
          <div className="text-4xl md:text-5xl font-light text-gray-800">
            RUNWAY
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-sm font-light tracking-[0.2em] text-gray-600 mb-8">
            ALL DESIGNERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {fashionArtists.map((artist) => (
            <Link key={artist.id} href={`/artists/fashion/${artist.slug}`} className="group block">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-gray-800 group-hover:text-[#E67E50] transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs font-light tracking-[0.1em] text-gray-600 uppercase">
                    {artist.specialty}
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
              <button className="hover:text-[#E67E50] transition-colors">STREETWEAR</button>
              <button className="hover:text-[#E67E50] transition-colors">COUTURE</button>
              <button className="hover:text-[#E67E50] transition-colors">SUSTAINABLE</button>
              <button className="hover:text-[#E67E50] transition-colors">VINTAGE</button>
            </div>
            <p className="text-sm text-gray-600 font-light">
              Where creativity meets craftsmanship in fashion design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}