import Image from "next/image";
import Link from "next/link";

const musicArtists = [
  {
    id: "jst-rea",
    slug: "jst-rea",
    name: "JST.REA",
    genre: "R&B / Neo-Soul",
    description: "Smooth melodies with raw stories - tender, bold, and always honest.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg"
  },
  {
    id: "soul-vibes",
    slug: "soul-vibes",
    name: "SOUL VIBES",
    genre: "Soul / Blues",
    description: "Deep, emotional soundscapes that touch the soul and move the spirit.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
  },
  {
    id: "rhythm-collective",
    slug: "rhythm-collective",
    name: "RHYTHM COLLECTIVE",
    genre: "Hip-Hop / R&B",
    description: "Urban beats meet melodic storytelling in this dynamic collective.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
  },
  {
    id: "melody-makers",
    slug: "melody-makers",
    name: "MELODY MAKERS",
    genre: "Alternative R&B",
    description: "Experimental sounds blending traditional R&B with modern production.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
  },
  {
    id: "groove-theory",
    slug: "groove-theory",
    name: "GROOVE THEORY",
    genre: "Funk / Soul",
    description: "Classic funk rhythms with contemporary soul vocals and arrangements.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
  },
  {
    id: "harmony-heights",
    slug: "harmony-heights",
    name: "HARMONY HEIGHTS",
    genre: "Contemporary R&B",
    description: "Soaring vocals and lush harmonies define this contemporary collective.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
  }
];

export default function MusicArtists() {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
              MUSIC ARTISTS
            </h1>
            <div className="w-32 h-0.5 bg-gray-800"></div>
          </div>
          <div className="text-4xl md:text-5xl font-light text-gray-800">
            CATALOG
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-sm font-light tracking-[0.2em] text-gray-600 mb-8">
            ALL ARTISTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {musicArtists.map((artist) => (
            <Link key={artist.id} href={`/artists/music/${artist.slug}`} className="group block">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={300}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-gray-800 group-hover:text-[#4A90C2] transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs font-light tracking-[0.1em] text-gray-600 uppercase">
                    {artist.genre}
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
          <p className="text-sm text-gray-600 font-light">
            Discover more artists and their unique sounds
          </p>
        </div>
      </div>
    </div>
  );
}