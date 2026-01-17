import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import BackButton from "@/components/BackButton";
import { LivePreviewListener } from "@/components/LivePreviewListener";
import { getPayload } from 'payload'
import config from '../../../../../../payload.config'
import { Artist, extractRichText, RichTextNode, GalleryImage, Discography, UpcomingShow } from '@/types/payload'

async function getMusicArtist(slug: string) {
  try {
    const payload = await getPayload({ config })

    const { docs: artists } = await payload.find({
      collection: 'artists',
      where: {
        and: [
          { slug: { equals: slug } },
          { category: { equals: 'music' } }
        ]
      }
    })

    if (artists.length === 0) return null

    const artist = artists[0] as unknown as Artist
    return {
      id: artist.id,
      slug: artist.slug,
      name: artist.name,
      genre: artist.genre || 'R&B / Neo-Soul',
      tagline: artist.tagline || 'Musical artist',
      shortDescription: artist.shortDescription || '',
      fullBio: extractRichText(artist.bio as RichTextNode, artist.shortDescription || ''),
      profileImage: artist.image || "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
      galleryImages: artist.galleryImages?.map((img: GalleryImage) => img.url) || [artist.image],
      discography: artist.discography || [],
      upcomingShows: artist.upcomingShows || [],
      socialLinks: {
        instagram: artist.social?.instagram || '',
        spotify: artist.social?.spotify || '',
        appleMusic: artist.social?.appleMusic || '',
        youtube: artist.social?.youtube || '',
        soundcloud: artist.social?.soundcloud || ''
      }
    }
  } catch (error) {
    console.error('Error fetching music artist:', error)
    return null
  }
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MusicArtistDetail({ params }: Props) {
  const { slug } = await params;
  const artist = await getMusicArtist(slug);
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
          <Link href="/artists/music" className="hover:text-[#4A90C2] transition-colors">
            Music Artists
          </Link>
          <span>/</span>
          <span className="text-gray-800">{artist.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-light tracking-[0.1em] text-gray-600 uppercase">
                {artist.genre}
              </p>
              <h1 className="text-6xl md:text-8xl font-bold text-[#4A90C2] leading-tight">
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
              {artist.socialLinks.spotify && (
                <Link href={artist.socialLinks.spotify} className="flex items-center space-x-2 text-gray-600 hover:text-[#1DB954] transition-colors text-sm min-h-[44px]">
                  <div className="w-8 h-8 sm:w-6 sm:h-6 bg-[#1DB954] rounded flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <span className="hidden sm:inline">Spotify</span>
                </Link>
              )}
              {artist.socialLinks.appleMusic && (
                <Link href={artist.socialLinks.appleMusic} className="flex items-center space-x-2 text-gray-600 hover:text-[#FA243C] transition-colors text-sm min-h-[44px]">
                  <div className="w-8 h-8 sm:w-6 sm:h-6 bg-[#FA243C] rounded flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.557-.016-1.113-.016-1.67-.016H7.534c-.557 0-1.113 0-1.67.015-.525.016-1.046.058-1.563.151-.674.12-1.304.353-1.878.727-1.118.733-1.863 1.732-2.18 3.043-.175.72-.24 1.452-.24 2.19 0 .738 0 1.476 0 2.214v7.325c0 .738 0 1.477 0 2.215 0 .737.065 1.47.24 2.189.317 1.312 1.062 2.312 2.18 3.044.574.374 1.204.606 1.878.727.517.092 1.038.135 1.563.15.557.016 1.113.016 1.67.016h8.932c.557 0 1.113 0 1.67-.015.526-.016 1.047-.059 1.564-.151.674-.121 1.304-.353 1.878-.727 1.118-.732 1.863-1.732 2.18-3.044.175-.72.24-1.452.24-2.19 0-.737 0-1.476 0-2.214V8.338c0-.738 0-1.476 0-2.214z"/>
                    </svg>
                  </div>
                  <span className="hidden sm:inline">Apple Music</span>
                </Link>
              )}
              {artist.socialLinks.youtube && (
                <Link href={artist.socialLinks.youtube} className="flex items-center space-x-2 text-gray-600 hover:text-[#FF0000] transition-colors text-sm min-h-[44px]">
                  <div className="w-8 h-8 sm:w-6 sm:h-6 bg-[#FF0000] rounded flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="hidden sm:inline">YouTube</span>
                </Link>
              )}
              {artist.socialLinks.soundcloud && (
                <Link href={artist.socialLinks.soundcloud} className="flex items-center space-x-2 text-gray-600 hover:text-[#FF5500] transition-colors text-sm min-h-[44px]">
                  <div className="w-8 h-8 sm:w-6 sm:h-6 bg-[#FF5500] rounded flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.255-2.154c-.009-.057-.049-.1-.099-.1z"/>
                    </svg>
                  </div>
                  <span className="hidden sm:inline">SoundCloud</span>
                </Link>
              )}
            </div>
          </div>

          <div className="aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src={artist.profileImage}
              alt={artist.name}
              width={500}
              height={625}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {artist.discography && artist.discography.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Discography
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artist.discography.map((release: Discography, index: number) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-square bg-[#4A90C2] rounded-lg mb-4 flex items-center justify-center group-hover:bg-[#3A7BA2] transition-colors">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 mx-auto mb-2">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                      <p className="text-xs uppercase tracking-wide">
                        {release.type}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-light text-gray-800 mb-1">
                      {release.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {release.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {artist.upcomingShows && artist.upcomingShows.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Upcoming Shows
            </h2>
            <div className="space-y-4">
              {artist.upcomingShows.map((show: UpcomingShow, index: number) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-300">
                  <div className="flex items-center space-x-8">
                    <div className="text-sm text-gray-600">
                      {new Date(show.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div>
                      <h3 className="font-light text-gray-800">
                        {show.venue}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {show.city}
                      </p>
                    </div>
                  </div>
                  <button className="px-6 py-2 border border-[#4A90C2] text-[#4A90C2] hover:bg-[#4A90C2] hover:text-white transition-colors text-sm">
                    Tickets
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {artist.galleryImages && artist.galleryImages.length > 1 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artist.galleryImages.slice(1).filter((img): img is string => !!img).map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${artist.name} gallery ${index + 1}`}
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
