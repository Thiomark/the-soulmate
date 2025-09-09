import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "../../../../components/BackButton";

const fashionArtists = [
  {
    id: "jst-rea-fashion",
    slug: "jst-rea",
    name: "JST.REA",
    specialty: "Streetwear / Contemporary",
    tagline: "Where rhythm meets fabric",
    shortDescription: "Where rhythm meets fabric - bold, clean, and unapologetically authentic fashion.",
    fullBio: "JST.REA's fashion is an extension of her musical artistry - bold, clean, and unapologetically authentic. From curated fits to custom concepts, she wears stories the same way she sings them: with intention and edge. Her style philosophy centers on pieces that empower and express, creating looks that are both timeless and distinctly contemporary.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184868/the_soulmates/the_soulmates/fashion-striped-outfit.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184868/the_soulmates/the_soulmates/fashion-striped-outfit.jpg",
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184871/the_soulmates/the_soulmates/fashion-patchwork-jacket.jpg",
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/fashion-graphic-tee.jpg"
    ],
    collections: [
      { name: "Rhythm & Blues", season: "Fall 2024", pieces: "12 pieces" },
      { name: "Urban Poetry", season: "Spring 2024", pieces: "8 pieces" },
      { name: "Midnight Sessions", season: "Fall 2023", pieces: "10 pieces" }
    ],
    fashionShows: [
      { event: "Fashion Week Emerging", location: "New York", year: "2024" },
      { event: "Independent Designers Showcase", location: "Los Angeles", year: "2023" }
    ],
    socialLinks: {
      instagram: "@jst.betsoe",
      website: "#"
    }
  },
  {
    id: "avant-garde-collective",
    slug: "avant-garde-collective",
    name: "AVANT-GARDE COLLECTIVE",
    specialty: "High Fashion / Couture",
    tagline: "Pushing boundaries through experimental design",
    shortDescription: "Pushing boundaries with experimental designs and unconventional materials.",
    fullBio: "Avant-Garde Collective challenges conventional fashion through experimental design and unconventional material use. Each piece is a statement that questions traditional fashion norms while creating wearable art. Their approach combines haute couture techniques with innovative concepts that push the boundaries of what fashion can be.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
    ],
    collections: [
      { name: "Deconstructed Reality", season: "Spring 2025", pieces: "15 pieces" },
      { name: "Material Rebellion", season: "Fall 2024", pieces: "20 pieces" }
    ],
    fashionShows: [
      { event: "Avant-Garde Fashion Week", location: "Paris", year: "2024" }
    ],
    socialLinks: {
      instagram: "@avantgardecollective",
      website: "#"
    }
  },
  {
    id: "sustainable-style",
    slug: "sustainable-style",
    name: "SUSTAINABLE STYLE",
    specialty: "Eco Fashion / Sustainable",
    tagline: "Fashion with a conscience",
    shortDescription: "Environmentally conscious fashion without compromising on style or quality.",
    fullBio: "Sustainable Style proves that environmental consciousness and high fashion can coexist beautifully. Using only sustainable materials and ethical production methods, this brand creates stunning pieces that don't compromise on style or quality. Every garment tells a story of responsible fashion and positive environmental impact.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
    ],
    collections: [
      { name: "Earth Conscious", season: "Spring 2025", pieces: "25 pieces" },
      { name: "Green Future", season: "Fall 2024", pieces: "18 pieces" }
    ],
    fashionShows: [
      { event: "Sustainable Fashion Summit", location: "Copenhagen", year: "2024" }
    ],
    socialLinks: {
      instagram: "@sustainablestyle",
      website: "#"
    }
  },
  {
    id: "vintage-revival",
    slug: "vintage-revival",
    name: "VINTAGE REVIVAL",
    specialty: "Vintage / Retro",
    tagline: "Reimagining classic styles",
    shortDescription: "Reimagining classic styles with modern twists and contemporary fits.",
    fullBio: "Vintage Revival breathes new life into classic fashion by reimagining iconic styles with modern sensibilities. Each piece honors the timeless elegance of past eras while incorporating contemporary fits and updated details that make vintage fashion relevant for today's wardrobe.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
    ],
    collections: [
      { name: "70s Reimagined", season: "Fall 2024", pieces: "16 pieces" },
      { name: "Modern Classics", season: "Spring 2024", pieces: "12 pieces" }
    ],
    fashionShows: [
      { event: "Retro Revival Show", location: "Milan", year: "2024" }
    ],
    socialLinks: {
      instagram: "@vintagerevival",
      website: "#"
    }
  },
  {
    id: "minimalist-approach",
    slug: "minimalist-approach",
    name: "MINIMALIST APPROACH",
    specialty: "Minimalism / Clean Lines",
    tagline: "Sophisticated simplicity",
    shortDescription: "Less is more - sophisticated simplicity in every carefully crafted piece.",
    fullBio: "Minimalist Approach embodies the philosophy that less is more, creating sophisticated pieces that showcase the beauty of simplicity. Every line, every detail is carefully considered to create garments that are both timeless and modern, proving that true elegance lies in restraint and precision.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
    ],
    collections: [
      { name: "Essential Lines", season: "Spring 2025", pieces: "14 pieces" },
      { name: "Pure Form", season: "Fall 2024", pieces: "11 pieces" }
    ],
    fashionShows: [
      { event: "Minimalist Fashion Week", location: "Tokyo", year: "2024" }
    ],
    socialLinks: {
      instagram: "@minimalistapproach",
      website: "#"
    }
  },
  {
    id: "cultural-fusion",
    slug: "cultural-fusion",
    name: "CULTURAL FUSION",
    specialty: "Cultural / Traditional",
    tagline: "Celebrating heritage through contemporary design",
    shortDescription: "Celebrating heritage through contemporary interpretations of traditional wear.",
    fullBio: "Cultural Fusion honors traditional craftsmanship and cultural heritage while creating contemporary fashion that speaks to modern sensibilities. Each piece is a bridge between past and present, celebrating the rich traditions of global fashion while making them accessible and relevant for today's diverse world.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
    ],
    collections: [
      { name: "Global Threads", season: "Fall 2024", pieces: "22 pieces" },
      { name: "Heritage Modern", season: "Spring 2024", pieces: "18 pieces" }
    ],
    fashionShows: [
      { event: "Cultural Fashion Showcase", location: "Mumbai", year: "2024" }
    ],
    socialLinks: {
      instagram: "@culturalfusion",
      website: "#"
    }
  }
];

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function FashionArtistDetail({ params }: Props) {
  const { slug } = await params;
  const artist = fashionArtists.find(a => a.slug === slug);

  if (!artist) {
    notFound();
  }

  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton />
        </div>
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/artists/fashion" className="hover:text-[#E67E50] transition-colors">
              Fashion Artists
            </Link>
            <span>/</span>
            <span className="text-gray-800">{artist.name}</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={artist.profileImage}
                alt={artist.name}
                width={500}
                height={667}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <p className="text-sm font-light tracking-[0.1em] text-gray-600 uppercase">
                  {artist.specialty}
                </p>
                <h1 className="text-6xl md:text-8xl font-bold text-[#E67E50] leading-tight">
                  {artist.name}
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-700 italic">
                  {artist.tagline}
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {artist.fullBio}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4">
                <a href={`https://instagram.com/${artist.socialLinks.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition-opacity min-h-[44px]">
                  <div className="w-8 h-8 sm:w-6 sm:h-6 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] rounded flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm hidden sm:inline">
                    {artist.socialLinks.instagram}
                  </span>
                </a>
                <Link href={artist.socialLinks.website} className="flex items-center space-x-2 text-gray-600 hover:text-[#E67E50] transition-colors text-sm min-h-[44px]">
                  <div className="w-8 h-8 sm:w-6 sm:h-6 bg-[#E67E50] rounded flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </div>
                  <span className="hidden sm:inline">Website</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Brand Philosophy */}
          <div className="mb-20 text-center">
            <div className="text-6xl md:text-8xl font-bold text-[#E67E50] leading-none mb-8">
              MY
              <br />
              BRAND
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                &quot;Fashion is more than clothing - it&apos;s a form of self-expression, 
                a way to tell stories without words, and a bridge between 
                personal identity and universal beauty.&quot;
              </p>
            </div>
          </div>

          {/* Collections Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Recent Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artist.collections.map((collection, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#E67E50] to-[#D65A30] rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                    <div className="text-center text-white p-6">
                      <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <p className="text-xs uppercase tracking-wide mb-2">
                        {collection.season}
                      </p>
                      <p className="text-xs">
                        {collection.pieces}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-light text-gray-800 mb-1">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {collection.season}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fashion Shows */}
          {artist.fashionShows.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
                Fashion Shows & Events
              </h2>
              <div className="space-y-4">
                {artist.fashionShows.map((show, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-gray-300">
                    <div className="flex items-center space-x-8">
                      <div className="text-sm text-gray-600 w-16">
                        {show.year}
                      </div>
                      <div>
                        <h3 className="font-light text-gray-800">
                          {show.event}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {show.location}
                        </p>
                      </div>
                    </div>
                    <button className="px-6 py-2 border border-[#E67E50] text-[#E67E50] hover:bg-[#E67E50] hover:text-white transition-colors text-sm">
                      View Lookbook
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lookbook Gallery */}
          {artist.galleryImages.length > 1 && (
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
                Lookbook
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artist.galleryImages.slice(1).map((image, index) => (
                  <div key={index} className="aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={image}
                      alt={`${artist.name} lookbook ${index + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Design Process */}
          <div className="mb-20 bg-white/50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                  Design Process
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E67E50] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Inspiration & Research</h3>
                      <p className="text-sm">Drawing inspiration from culture, music, and personal experiences to create authentic designs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E67E50] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Sketching & Concept Development</h3>
                      <p className="text-sm">Translating ideas into detailed sketches and developing the core concept for each piece.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E67E50] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Material Selection & Production</h3>
                      <p className="text-sm">Carefully choosing fabrics and working with skilled artisans to bring designs to life.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#E67E50] to-[#D65A30] rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <p className="text-lg font-light">
                    Crafted with Passion
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
