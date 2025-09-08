import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "../../../../components/BackButton";

const musicArtists = [
  {
    id: "jst-rea",
    slug: "jst-rea",
    name: "JST.REA",
    genre: "R&B / Neo-Soul",
    tagline: "Where rhythm meets raw emotion",
    shortDescription: "Smooth melodies with raw stories - tender, bold, and always honest.",
    fullBio: "Born from late-night thoughts and real emotions, JST.REA's sound emerged in 2020 as a fresh voice in the R&B landscape. Her music blends smooth melodies with raw stories, creating an intimate sonic experience that resonates deeply with listeners. Whether exploring themes of love, heartbreak, or healing, JST.REA says what many feel but few can express, making her one of the most authentic voices in contemporary R&B.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    discography: [
      { title: "Midnight Reflections", year: "2024", type: "Album" },
      { title: "Tender Nights", year: "2023", type: "EP" },
      { title: "Honest", year: "2022", type: "Single" }
    ],
    socialLinks: {
      instagram: "@jst.betsoe",
      spotify: "#",
      appleMusic: "#"
    },
    upcomingShows: [
      { date: "2025-01-15", venue: "Blue Note", city: "New York" },
      { date: "2025-02-03", venue: "The Jazz Café", city: "London" }
    ]
  },
  {
    id: "soul-vibes",
    slug: "soul-vibes",
    name: "SOUL VIBES",
    genre: "Soul / Blues",
    tagline: "Deep emotional soundscapes",
    shortDescription: "Deep, emotional soundscapes that touch the soul and move the spirit.",
    fullBio: "Soul Vibes represents the convergence of classic soul traditions with contemporary emotional depth. Drawing inspiration from the great soul legends while crafting a distinctly modern sound, this artist creates music that resonates on a spiritual level. Each track is a journey through the complexities of human emotion, delivered with powerful vocals and rich instrumental arrangements.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    discography: [
      { title: "Spiritual Journey", year: "2024", type: "Album" },
      { title: "Blues for Tomorrow", year: "2023", type: "Single" }
    ],
    socialLinks: {
      instagram: "@soulvibes",
      spotify: "#",
      appleMusic: "#"
    },
    upcomingShows: [
      { date: "2025-01-20", venue: "Apollo Theater", city: "Harlem" }
    ]
  },
  {
    id: "rhythm-collective",
    slug: "rhythm-collective",
    name: "RHYTHM COLLECTIVE",
    genre: "Hip-Hop / R&B",
    tagline: "Urban beats meet melodic storytelling",
    shortDescription: "Urban beats meet melodic storytelling in this dynamic collective.",
    fullBio: "Rhythm Collective brings together the best of hip-hop's rhythmic complexity with R&B's melodic sophistication. This dynamic group creates music that speaks to the urban experience while maintaining universal appeal. Their collaborative approach results in rich, layered compositions that showcase individual talents within a cohesive artistic vision.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    discography: [
      { title: "City Stories", year: "2024", type: "Mixtape" },
      { title: "Collective Vibe", year: "2023", type: "Album" }
    ],
    socialLinks: {
      instagram: "@rhythmcollective",
      spotify: "#",
      appleMusic: "#"
    },
    upcomingShows: []
  },
  {
    id: "melody-makers",
    slug: "melody-makers",
    name: "MELODY MAKERS",
    genre: "Alternative R&B",
    tagline: "Experimental sounds with traditional soul",
    shortDescription: "Experimental sounds blending traditional R&B with modern production.",
    fullBio: "Melody Makers push the boundaries of what R&B can be, incorporating experimental production techniques while honoring the genre's soulful roots. Their innovative approach to songwriting and sound design creates immersive musical experiences that challenge conventional genre definitions while remaining deeply emotional and accessible.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    discography: [
      { title: "Future Soul", year: "2024", type: "EP" },
      { title: "Experimental Love", year: "2023", type: "Single" }
    ],
    socialLinks: {
      instagram: "@melodymakers",
      spotify: "#",
      appleMusic: "#"
    },
    upcomingShows: []
  },
  {
    id: "groove-theory",
    slug: "groove-theory",
    name: "GROOVE THEORY",
    genre: "Funk / Soul",
    tagline: "Classic funk rhythms with contemporary soul",
    shortDescription: "Classic funk rhythms with contemporary soul vocals and arrangements.",
    fullBio: "Groove Theory revitalizes the golden age of funk with contemporary sensibilities. Their tight rhythmic foundation and soulful vocal arrangements create an irresistible musical experience that gets bodies moving and spirits soaring. Each performance is a celebration of funk's rich heritage while pushing the genre forward.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    discography: [
      { title: "Funk Revival", year: "2024", type: "Album" },
      { title: "Get Down", year: "2023", type: "Single" }
    ],
    socialLinks: {
      instagram: "@groovetheory",
      spotify: "#",
      appleMusic: "#"
    },
    upcomingShows: [
      { date: "2025-02-14", venue: "Fillmore", city: "San Francisco" }
    ]
  },
  {
    id: "harmony-heights",
    slug: "harmony-heights",
    name: "HARMONY HEIGHTS",
    genre: "Contemporary R&B",
    tagline: "Soaring vocals and lush harmonies",
    shortDescription: "Soaring vocals and lush harmonies define this contemporary collective.",
    fullBio: "Harmony Heights showcases the power of vocal excellence in contemporary R&B. Their sophisticated arrangements and crystal-clear harmonies create a lush sonic landscape that elevates the genre to new artistic heights. Each member brings unique vocal qualities that blend seamlessly into a cohesive and powerful sound.",
    profileImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    discography: [
      { title: "Harmonic Convergence", year: "2024", type: "Album" },
      { title: "Voices Unite", year: "2023", type: "EP" }
    ],
    socialLinks: {
      instagram: "@harmonyheights",
      spotify: "#",
      appleMusic: "#"
    },
    upcomingShows: []
  }
];

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MusicArtistDetail({ params }: Props) {
  const { slug } = await params;
  const artist = musicArtists.find(a => a.slug === slug);

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
              {artist.fullBio}
            </p>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border border-gray-600 rounded flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="m7 11 5-5 5 5" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  {artist.socialLinks.instagram}
                </span>
              </div>
              <Link href={artist.socialLinks.spotify} className="text-gray-600 hover:text-[#4A90C2] transition-colors text-sm">
                Spotify
              </Link>
              <Link href={artist.socialLinks.appleMusic} className="text-gray-600 hover:text-[#4A90C2] transition-colors text-sm">
                Apple Music
              </Link>
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

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
            Discography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artist.discography.map((release, index) => (
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

        {artist.upcomingShows.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Upcoming Shows
            </h2>
            <div className="space-y-4">
              {artist.upcomingShows.map((show, index) => (
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

        {artist.galleryImages.length > 1 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artist.galleryImages.slice(1).map((image, index) => (
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