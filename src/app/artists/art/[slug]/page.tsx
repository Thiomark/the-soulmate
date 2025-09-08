import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "../../../../components/BackButton";

const artArtists = [
  {
    id: "abstract-visions",
    slug: "abstract-visions",
    name: "ABSTRACT VISIONS",
    medium: "Mixed Media / Abstract",
    tagline: "Challenging perception through color and form",
    shortDescription: "Bold abstract compositions that challenge perception and emotion.",
    fullBio: "Abstract Visions creates powerful compositions that transcend traditional artistic boundaries. Through bold use of color, texture, and form, this artist challenges viewers to question their perceptions and connect with their deepest emotions. Each piece is a journey into the subconscious, revealing hidden truths through abstract expression.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg"
    ],
    artworks: [
      { title: "Emotional Spectrum", year: "2024", dimensions: "48\" x 36\"", medium: "Acrylic on Canvas" },
      { title: "Fragments of Time", year: "2024", dimensions: "60\" x 40\"", medium: "Mixed Media" },
      { title: "Inner Dialogue", year: "2023", dimensions: "36\" x 48\"", medium: "Oil and Collage" }
    ],
    exhibitions: [
      { title: "Contemporary Visions", venue: "Modern Art Gallery", year: "2024" },
      { title: "Abstract Expressions", venue: "City Arts Center", year: "2023" }
    ],
    socialLinks: {
      instagram: "@abstractvisions",
      website: "#"
    }
  },
  {
    id: "color-theory",
    slug: "color-theory",
    name: "COLOR THEORY",
    medium: "Acrylic / Canvas",
    tagline: "Exploring the psychology of color",
    shortDescription: "Vibrant color studies exploring the psychology of hue and form.",
    fullBio: "Color Theory delves deep into the psychological and emotional impact of color in visual art. Through systematic exploration of hue relationships and their effects on human perception, this artist creates works that are both scientifically informed and emotionally resonant. Each piece serves as both artwork and color study.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg"
    ],
    artworks: [
      { title: "Chromatic Harmony", year: "2024", dimensions: "40\" x 30\"", medium: "Acrylic on Canvas" },
      { title: "Primary Emotions", year: "2023", dimensions: "36\" x 36\"", medium: "Acrylic on Canvas" }
    ],
    exhibitions: [
      { title: "Color Studies", venue: "Art Institute", year: "2024" }
    ],
    socialLinks: {
      instagram: "@colortheoryart",
      website: "#"
    }
  },
  {
    id: "urban-expressions",
    slug: "urban-expressions",
    name: "URBAN EXPRESSIONS",
    medium: "Street Art / Murals",
    tagline: "Bringing urban stories to public spaces",
    shortDescription: "Contemporary street art bringing urban stories to public spaces.",
    fullBio: "Urban Expressions transforms public spaces into galleries, bringing art directly to the community. Through large-scale murals and street art installations, this artist tells the stories of urban life, celebrating culture, diversity, and the human experience in the cityscape.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg"
    ],
    artworks: [
      { title: "City Voices", year: "2024", dimensions: "20' x 30'", medium: "Spray Paint on Wall" },
      { title: "Community Spirit", year: "2023", dimensions: "15' x 25'", medium: "Acrylic Mural" }
    ],
    exhibitions: [
      { title: "Street Art Collective", venue: "Public Art Festival", year: "2024" }
    ],
    socialLinks: {
      instagram: "@urbanexpressions",
      website: "#"
    }
  },
  {
    id: "digital-dreams",
    slug: "digital-dreams",
    name: "DIGITAL DREAMS",
    medium: "Digital Art / NFT",
    tagline: "Pushing boundaries in digital art",
    shortDescription: "Cutting-edge digital artwork pushing the boundaries of visual art.",
    fullBio: "Digital Dreams explores the intersection of technology and artistic expression, creating immersive digital experiences that challenge traditional notions of art. Through innovative use of digital tools and NFT technology, this artist is pioneering new forms of creative expression in the digital age.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg"
    ],
    artworks: [
      { title: "Virtual Reality", year: "2024", dimensions: "Digital", medium: "3D Animation" },
      { title: "Cyber Landscape", year: "2023", dimensions: "4K Resolution", medium: "Digital Collage" }
    ],
    exhibitions: [
      { title: "Digital Art Now", venue: "Tech Art Gallery", year: "2024" }
    ],
    socialLinks: {
      instagram: "@digitaldreams",
      website: "#"
    }
  },
  {
    id: "botanical-beauty",
    slug: "botanical-beauty",
    name: "BOTANICAL BEAUTY",
    medium: "Watercolor / Nature",
    tagline: "Celebrating natural beauty and form",
    shortDescription: "Delicate botanical illustrations celebrating natural beauty and form.",
    fullBio: "Botanical Beauty captures the intricate details and subtle beauty of the natural world through delicate watercolor techniques. Each piece is a meditation on nature's perfection, revealing the complex patterns and harmonious relationships found in botanical forms.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg"
    ],
    artworks: [
      { title: "Garden Series", year: "2024", dimensions: "12\" x 16\"", medium: "Watercolor on Paper" },
      { title: "Floral Study", year: "2023", dimensions: "9\" x 12\"", medium: "Watercolor" }
    ],
    exhibitions: [
      { title: "Nature Studies", venue: "Botanical Gallery", year: "2024" }
    ],
    socialLinks: {
      instagram: "@botanicalbeauty",
      website: "#"
    }
  },
  {
    id: "sculptural-forms",
    slug: "sculptural-forms",
    name: "SCULPTURAL FORMS",
    medium: "Sculpture / Installation",
    tagline: "Exploring space, material, and meaning",
    shortDescription: "Three-dimensional explorations of space, material, and meaning.",
    fullBio: "Sculptural Forms creates three-dimensional works that explore the relationship between space, material, and human experience. Through innovative use of traditional and contemporary materials, this artist creates installations that invite viewers to reconsider their physical and emotional relationship to space.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg"
    ],
    artworks: [
      { title: "Spatial Dialogue", year: "2024", dimensions: "8' x 6' x 4'", medium: "Steel and Wood" },
      { title: "Material Memory", year: "2023", dimensions: "5' x 3' x 3'", medium: "Bronze and Stone" }
    ],
    exhibitions: [
      { title: "Sculptural Visions", venue: "Modern Sculpture Park", year: "2024" }
    ],
    socialLinks: {
      instagram: "@sculpturalforms",
      website: "#"
    }
  }
];

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArtArtistDetail({ params }: Props) {
  const { slug } = await params;
  const artist = artArtists.find(a => a.slug === slug);

  if (!artist) {
    notFound();
  }

  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/artists/art" className="hover:text-[#E67E50] transition-colors">
            Art Artists
          </Link>
          <span>/</span>
          <span className="text-gray-800">{artist.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="lg:order-2 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-light tracking-[0.1em] text-gray-600 uppercase">
                {artist.medium}
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

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border border-gray-600 rounded flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  {artist.socialLinks.instagram}
                </span>
              </div>
              <Link href={artist.socialLinks.website} className="text-gray-600 hover:text-[#E67E50] transition-colors text-sm">
                Website
              </Link>
            </div>
          </div>

          <div className="lg:order-1 aspect-square rounded-lg overflow-hidden">
            <Image
              src={artist.profileImage}
              alt={artist.name}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
            Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artist.artworks.map((artwork, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#E67E50] to-[#D65A30] rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-wide mb-2">
                      {artwork.year}
                    </p>
                    <p className="text-xs">
                      {artwork.dimensions}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-light text-gray-800 mb-1">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {artwork.medium}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {artist.exhibitions.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Recent Exhibitions
            </h2>
            <div className="space-y-4">
              {artist.exhibitions.map((exhibition, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-300">
                  <div className="flex items-center space-x-8">
                    <div className="text-sm text-gray-600 w-16">
                      {exhibition.year}
                    </div>
                    <div>
                      <h3 className="font-light text-gray-800">
                        {exhibition.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {exhibition.venue}
                      </p>
                    </div>
                  </div>
                  <button className="px-6 py-2 border border-[#E67E50] text-[#E67E50] hover:bg-[#E67E50] hover:text-white transition-colors text-sm">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-20 bg-white/50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            Artist Statement
          </h2>
          <div className="text-6xl md:text-8xl font-bold text-[#E67E50] mb-6 leading-none">
            CREATE
            <br />
            INSPIRE
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            &quot;My work explores the intersection between {artist.medium.toLowerCase()} and human emotion. 
            Each piece is a dialogue between technique and intuition, tradition and innovation. 
            I believe art has the power to transform both the creator and the observer, 
            opening new pathways for understanding and connection.&quot;
          </p>
        </div>

        {artist.galleryImages.length > 1 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Studio &amp; Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artist.galleryImages.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${artist.name} studio ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}