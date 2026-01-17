import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import BackButton from "@/components/BackButton";
import { LivePreviewListener } from "@/components/LivePreviewListener";
import { getPayload } from 'payload'
import config from '../../../../../../payload.config'
import { Artist, extractRichText, RichTextNode, GalleryImage, Artwork, Exhibition } from '@/types/payload'

async function getArtArtist(slug: string) {
  try {
    const payload = await getPayload({ config })

    const { docs: artists } = await payload.find({
      collection: 'artists',
      where: {
        and: [
          { slug: { equals: slug } },
          { category: { equals: 'art' } }
        ]
      }
    })

    if (artists.length === 0) return null

    const artist = artists[0] as unknown as Artist
    return {
      id: artist.id,
      slug: artist.slug,
      name: artist.name,
      medium: artist.medium || 'Mixed Media',
      tagline: artist.tagline || 'Visual artist',
      shortDescription: artist.shortDescription || '',
      fullBio: extractRichText(artist.bio as RichTextNode, artist.shortDescription || ''),
      profileImage: artist.image || "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
      galleryImages: artist.galleryImages?.map((img: GalleryImage) => img.url) || [artist.image],
      artworks: artist.artworks || [],
      exhibitions: artist.exhibitions || [],
      socialLinks: {
        instagram: artist.social?.instagram || '',
        website: artist.social?.website || '#'
      }
    }
  } catch (error) {
    console.error('Error fetching art artist:', error)
    return null
  }
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArtArtistDetail({ params }: Props) {
  const { slug } = await params;
  const artist = await getArtArtist(slug);
  const { isEnabled: isDraftMode } = await draftMode();

  if (!artist) {
    notFound();
  }

  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-16">
      {isDraftMode && <LivePreviewListener />}
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
              {artist.fullBio || artist.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4">
              {artist.socialLinks.instagram && (
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
              )}
              {artist.socialLinks.website && artist.socialLinks.website !== '#' && (
                <Link href={artist.socialLinks.website} className="flex items-center space-x-2 text-gray-600 hover:text-[#9B8A7F] transition-colors text-sm min-h-[44px]">
                  <div className="w-8 h-8 sm:w-6 sm:h-6 bg-[#9B8A7F] rounded flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </div>
                  <span className="hidden sm:inline">Website</span>
                </Link>
              )}
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

        {artist.artworks && artist.artworks.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Featured Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artist.artworks.map((artwork: Artwork, index: number) => (
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
        )}

        {artist.exhibitions && artist.exhibitions.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Recent Exhibitions
            </h2>
            <div className="space-y-4">
              {artist.exhibitions.map((exhibition: Exhibition, index: number) => (
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
            &quot;My work explores the intersection between {artist.medium?.toLowerCase() || 'art'} and human emotion.
            Each piece is a dialogue between technique and intuition, tradition and innovation.
            I believe art has the power to transform both the creator and the observer,
            opening new pathways for understanding and connection.&quot;
          </p>
        </div>

        {artist.galleryImages && artist.galleryImages.length > 1 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Studio &amp; Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artist.galleryImages.slice(1).filter((img): img is string => !!img).map((image, index) => (
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
