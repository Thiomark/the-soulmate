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
      spotify: "https://open.spotify.com/artist/jstrea",
      appleMusic: "https://music.apple.com/artist/jstrea",
      youtube: "https://youtube.com/@jstrea",
      soundcloud: "https://soundcloud.com/jstrea"
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
      spotify: "https://open.spotify.com/artist/soulvibes",
      appleMusic: "https://music.apple.com/artist/soulvibes",
      youtube: "https://youtube.com/@soulvibes",
      soundcloud: "https://soundcloud.com/soulvibes"
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
      spotify: "https://open.spotify.com/artist/rhythm-collective",
      appleMusic: "https://music.apple.com/artist/rhythm-collective",
      youtube: "https://youtube.com/@rhythm-collective",
      soundcloud: "https://soundcloud.com/rhythm-collective"
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
      spotify: "https://open.spotify.com/artist/melody-makers",
      appleMusic: "https://music.apple.com/artist/melody-makers",
      youtube: "https://youtube.com/@melody-makers",
      soundcloud: "https://soundcloud.com/melody-makers"
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
      spotify: "https://open.spotify.com/artist/groove-theory",
      appleMusic: "https://music.apple.com/artist/groove-theory",
      youtube: "https://youtube.com/@groove-theory",
      soundcloud: "https://soundcloud.com/groove-theory"
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
      spotify: "https://open.spotify.com/artist/harmony-heights",
      appleMusic: "https://music.apple.com/artist/harmony-heights",
      youtube: "https://youtube.com/@harmony-heights",
      soundcloud: "https://soundcloud.com/harmony-heights"
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
              <a href={`https://instagram.com/${artist.socialLinks.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-6 h-6 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">
                  {artist.socialLinks.instagram}
                </span>
              </a>
              <Link href={artist.socialLinks.spotify} className="flex items-center space-x-2 text-gray-600 hover:text-[#1DB954] transition-colors text-sm">
                <div className="w-6 h-6 bg-[#1DB954] rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <span>Spotify</span>
              </Link>
              <Link href={artist.socialLinks.appleMusic} className="flex items-center space-x-2 text-gray-600 hover:text-[#FA243C] transition-colors text-sm">
                <div className="w-6 h-6 bg-[#FA243C] rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.557-.016-1.113-.016-1.67-.016H7.534c-.557 0-1.113 0-1.67.015-.525.016-1.046.058-1.563.151-.674.12-1.304.353-1.878.727-1.118.733-1.863 1.732-2.18 3.043-.175.72-.24 1.452-.24 2.19 0 .738 0 1.476 0 2.214v7.325c0 .738 0 1.477 0 2.215 0 .737.065 1.47.24 2.189.317 1.312 1.062 2.312 2.18 3.044.574.374 1.204.606 1.878.727.517.092 1.038.135 1.563.15.557.016 1.113.016 1.67.016h8.932c.557 0 1.113 0 1.67-.015.526-.016 1.047-.059 1.564-.151.674-.121 1.304-.353 1.878-.727 1.118-.732 1.863-1.732 2.18-3.044.175-.72.24-1.452.24-2.19 0-.737 0-1.476 0-2.214V8.338c0-.738 0-1.476 0-2.214zM9.68 16.614c0 .454-.353.817-.788.817-.436 0-.788-.363-.788-.817V9.548l-2.48 4.042c-.15.245-.418.394-.705.394s-.554-.149-.705-.394L2.734 9.548v7.066c0 .454-.353.817-.788.817-.436 0-.788-.363-.788-.817V7.614c0-.454.353-.817.788-.817.31 0 .593.182.72.467l2.945 4.8 2.945-4.8c.127-.285.41-.467.72-.467.435 0 .788.363.788.817v8.999zm11.535-3.434c0 1.45-.353 2.595-.935 3.402-.653.903-1.57 1.355-2.723 1.355-.93 0-1.64-.286-2.108-.85-.233-.282-.233-.704 0-.986s.614-.282.847 0c.244.294.573.438.93.438.61 0 1.108-.244 1.479-.724.353-.456.545-1.108.545-1.937v-.225c-.353.188-.773.282-1.248.282-1.186 0-2.14-.438-2.835-1.298-.695-.86-1.047-2.034-1.047-3.489 0-1.455.352-2.629 1.047-3.489.695-.86 1.649-1.298 2.835-1.298.99 0 1.756.376 2.273 1.118.517.742.775 1.79.775 3.113v4.788z"/>
                  </svg>
                </div>
                <span>Apple Music</span>
              </Link>
              <Link href={artist.socialLinks.youtube} className="flex items-center space-x-2 text-gray-600 hover:text-[#FF0000] transition-colors text-sm">
                <div className="w-6 h-6 bg-[#FF0000] rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span>YouTube</span>
              </Link>
              <Link href={artist.socialLinks.soundcloud} className="flex items-center space-x-2 text-gray-600 hover:text-[#FF5500] transition-colors text-sm">
                <div className="w-6 h-6 bg-[#FF5500] rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.255-2.154c-.009-.057-.049-.1-.099-.1zm1.49.047c-.049 0-.089.044-.098.097L2.39 14.479l.176 2.108c.009.053.049.094.098.094.048 0 .085-.041.094-.094l.191-2.108-.191-2.11c-.009-.053-.046-.097-.094-.097zm1.893 0c-.048 0-.087.044-.094.097l-.183 2.11.183 2.108c.007.053.046.094.094.094.047 0 .086-.041.091-.094l.201-2.108-.201-2.11c-.005-.053-.044-.097-.091-.097zm-1.37-.047c-.049 0-.089.044-.096.097L2.915 14.479l.177 2.108c.007.053.047.094.096.094s.089-.041.096-.094l.194-2.108-.194-2.157c-.007-.053-.047-.097-.096-.097zm3.231.007c-.05 0-.089.04-.094.09l-.191 2.103.191 2.122c.005.053.044.094.094.094.049 0 .089-.041.094-.094l.208-2.122-.208-2.103c-.005-.05-.045-.09-.094-.09zm1.494-.047c-.05 0-.089.044-.096.097l-.183 2.15.183 2.08c.007.053.046.094.096.094.048 0 .085-.041.094-.094l.201-2.08-.201-2.15c-.009-.053-.046-.097-.094-.097zm1.387 0c-.049 0-.087.044-.094.097l-.183 2.15.183 2.08c.007.053.045.094.094.094.047 0 .087-.041.094-.094l.194-2.08-.194-2.15c-.007-.053-.047-.097-.094-.097zm1.494.047c-.048 0-.085.04-.091.09l-.194 2.103.194 2.122c.006.053.043.094.091.094.05 0 .089-.041.096-.094l.208-2.122-.208-2.103c-.007-.05-.046-.09-.096-.09zm1.387 0c-.05 0-.089.04-.096.09l-.191 2.103.191 2.122c.007.053.046.094.096.094.049 0 .089-.041.094-.094l.201-2.122-.201-2.103c-.005-.05-.045-.09-.094-.09zm1.493-.047c-.049 0-.087.044-.094.097l-.183 2.15.183 2.08c.007.053.045.094.094.094.048 0 .086-.041.094-.094l.194-2.08-.194-2.15c-.008-.053-.046-.097-.094-.097zm1.387.047c-.05 0-.089.04-.096.09l-.183 2.103.183 2.122c.007.053.046.094.096.094.049 0 .087-.041.094-.094l.194-2.122-.194-2.103c-.007-.05-.045-.09-.094-.09zm3.231.047c-.05 0-.089.04-.094.09l-.194 2.056.194 2.169c.005.053.044.094.094.094.049 0 .089-.041.094-.094l.208-2.169-.208-2.056c-.005-.05-.045-.09-.094-.09zm-1.387-.047c-.049 0-.087.044-.094.097l-.183 2.15.183 2.08c.007.053.045.094.094.094.048 0 .086-.041.094-.094l.194-2.08-.194-2.15c-.008-.053-.046-.097-.094-.097zm3.231.094c-.05 0-.089.041-.094.094l-.201 1.962.201 2.162c.005.053.044.094.094.094.049 0 .089-.041.094-.094l.208-2.162-.208-1.962c-.005-.053-.045-.094-.094-.094zm1.387-.047c-.05 0-.089.044-.096.097l-.183 2.009.183 2.115c.007.053.046.094.096.094.049 0 .087-.041.094-.094l.194-2.115-.194-2.009c-.007-.053-.045-.097-.094-.097zm1.49-.005c-.049 0-.089.042-.094.095l-.191 2.004.191 2.119c.005.053.045.094.094.094.05 0 .089-.041.096-.094l.201-2.119-.201-2.004c-.007-.053-.046-.095-.096-.095z"/>
                  </svg>
                </div>
                <span>SoundCloud</span>
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