import { getPayload } from 'payload'
import config from '../payload.config'

// Music Artists Data
const musicArtists = [
  {
    name: "JST.REA",
    category: "music" as const,
    slug: "jst-rea",
    tagline: "Where rhythm meets raw emotion",
    shortDescription: "Smooth melodies with raw stories - tender, bold, and always honest.",
    genre: "R&B / Neo-Soul",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg", alt: "JST.REA portrait" },
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg", alt: "JST.REA performance" }
    ],
    discography: [
      { title: "Midnight Reflections", year: "2024", type: "Album" as const },
      { title: "Tender Nights", year: "2023", type: "EP" as const },
      { title: "Honest", year: "2022", type: "Single" as const }
    ],
    upcomingShows: [
      { date: "2025-01-15", venue: "Blue Note", city: "New York" },
      { date: "2025-02-03", venue: "The Jazz Café", city: "London" }
    ],
    social: {
      instagram: "@jst.betsoe",
      spotify: "https://open.spotify.com/artist/jstrea",
      appleMusic: "https://music.apple.com/artist/jstrea",
      youtube: "https://youtube.com/@jstrea",
      soundcloud: "https://soundcloud.com/jstrea"
    }
  },
  {
    name: "SOUL VIBES",
    category: "music" as const,
    slug: "soul-vibes",
    tagline: "Deep emotional soundscapes",
    shortDescription: "Deep, emotional soundscapes that touch the soul and move the spirit.",
    genre: "Soul / Blues",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg", alt: "Soul Vibes" }
    ],
    discography: [
      { title: "Spiritual Journey", year: "2024", type: "Album" as const },
      { title: "Blues for Tomorrow", year: "2023", type: "Single" as const }
    ],
    upcomingShows: [
      { date: "2025-01-20", venue: "Apollo Theater", city: "Harlem" }
    ],
    social: {
      instagram: "@soulvibes",
      spotify: "https://open.spotify.com/artist/soulvibes"
    }
  },
  {
    name: "RHYTHM COLLECTIVE",
    category: "music" as const,
    slug: "rhythm-collective",
    tagline: "Urban beats meet melodic storytelling",
    shortDescription: "Urban beats meet melodic storytelling in this dynamic collective.",
    genre: "Hip-Hop / R&B",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg", alt: "Rhythm Collective" }
    ],
    discography: [
      { title: "City Stories", year: "2024", type: "Mixtape" as const },
      { title: "Collective Vibe", year: "2023", type: "Album" as const }
    ],
    upcomingShows: [],
    social: {
      instagram: "@rhythmcollective",
      spotify: "https://open.spotify.com/artist/rhythm-collective"
    }
  },
  {
    name: "MELODY MAKERS",
    category: "music" as const,
    slug: "melody-makers",
    tagline: "Experimental sounds with traditional soul",
    shortDescription: "Experimental sounds blending traditional R&B with modern production.",
    genre: "Alternative R&B",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg", alt: "Melody Makers" }
    ],
    discography: [
      { title: "Future Soul", year: "2024", type: "EP" as const },
      { title: "Experimental Love", year: "2023", type: "Single" as const }
    ],
    upcomingShows: [],
    social: {
      instagram: "@melodymakers",
      spotify: "https://open.spotify.com/artist/melody-makers"
    }
  },
  {
    name: "GROOVE THEORY",
    category: "music" as const,
    slug: "groove-theory",
    tagline: "Classic funk rhythms with contemporary soul",
    shortDescription: "Classic funk rhythms with contemporary soul vocals and arrangements.",
    genre: "Funk / Soul",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg", alt: "Groove Theory" }
    ],
    discography: [
      { title: "Funk Revival", year: "2024", type: "Album" as const },
      { title: "Get Down", year: "2023", type: "Single" as const }
    ],
    upcomingShows: [
      { date: "2025-02-14", venue: "Fillmore", city: "San Francisco" }
    ],
    social: {
      instagram: "@groovetheory",
      spotify: "https://open.spotify.com/artist/groove-theory"
    }
  },
  {
    name: "HARMONY HEIGHTS",
    category: "music" as const,
    slug: "harmony-heights",
    tagline: "Soaring vocals and lush harmonies",
    shortDescription: "Soaring vocals and lush harmonies define this contemporary collective.",
    genre: "Contemporary R&B",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg", alt: "Harmony Heights" }
    ],
    discography: [
      { title: "Harmonic Convergence", year: "2024", type: "Album" as const },
      { title: "Voices Unite", year: "2023", type: "EP" as const }
    ],
    upcomingShows: [],
    social: {
      instagram: "@harmonyheights",
      spotify: "https://open.spotify.com/artist/harmony-heights"
    }
  }
]

// Fashion Artists Data
const fashionArtists = [
  {
    name: "JST.REA",
    category: "fashion" as const,
    slug: "jst-rea-fashion",
    tagline: "Where rhythm meets fabric",
    shortDescription: "Where rhythm meets fabric - bold, clean, and unapologetically authentic fashion.",
    specialty: "Streetwear / Contemporary",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184868/the_soulmates/the_soulmates/fashion-striped-outfit.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184868/the_soulmates/the_soulmates/fashion-striped-outfit.jpg", alt: "JST.REA fashion 1" },
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184871/the_soulmates/the_soulmates/fashion-patchwork-jacket.jpg", alt: "JST.REA fashion 2" },
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/fashion-graphic-tee.jpg", alt: "JST.REA fashion 3" }
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
    social: {
      instagram: "@jst.betsoe",
      website: "#"
    }
  },
  {
    name: "AVANT-GARDE COLLECTIVE",
    category: "fashion" as const,
    slug: "avant-garde-collective",
    tagline: "Pushing boundaries through experimental design",
    shortDescription: "Pushing boundaries with experimental designs and unconventional materials.",
    specialty: "High Fashion / Couture",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg", alt: "Avant-Garde Collective" }
    ],
    collections: [
      { name: "Deconstructed Reality", season: "Spring 2025", pieces: "15 pieces" },
      { name: "Material Rebellion", season: "Fall 2024", pieces: "20 pieces" }
    ],
    fashionShows: [
      { event: "Avant-Garde Fashion Week", location: "Paris", year: "2024" }
    ],
    social: {
      instagram: "@avantgardecollective",
      website: "#"
    }
  },
  {
    name: "SUSTAINABLE STYLE",
    category: "fashion" as const,
    slug: "sustainable-style",
    tagline: "Fashion with a conscience",
    shortDescription: "Environmentally conscious fashion without compromising on style or quality.",
    specialty: "Eco Fashion / Sustainable",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg", alt: "Sustainable Style" }
    ],
    collections: [
      { name: "Earth Conscious", season: "Spring 2025", pieces: "25 pieces" },
      { name: "Green Future", season: "Fall 2024", pieces: "18 pieces" }
    ],
    fashionShows: [
      { event: "Sustainable Fashion Summit", location: "Copenhagen", year: "2024" }
    ],
    social: {
      instagram: "@sustainablestyle",
      website: "#"
    }
  },
  {
    name: "VINTAGE REVIVAL",
    category: "fashion" as const,
    slug: "vintage-revival",
    tagline: "Reimagining classic styles",
    shortDescription: "Reimagining classic styles with modern twists and contemporary fits.",
    specialty: "Vintage / Retro",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg", alt: "Vintage Revival" }
    ],
    collections: [
      { name: "70s Reimagined", season: "Fall 2024", pieces: "16 pieces" },
      { name: "Modern Classics", season: "Spring 2024", pieces: "12 pieces" }
    ],
    fashionShows: [
      { event: "Retro Revival Show", location: "Milan", year: "2024" }
    ],
    social: {
      instagram: "@vintagerevival",
      website: "#"
    }
  },
  {
    name: "MINIMALIST APPROACH",
    category: "fashion" as const,
    slug: "minimalist-approach",
    tagline: "Sophisticated simplicity",
    shortDescription: "Less is more - sophisticated simplicity in every carefully crafted piece.",
    specialty: "Minimalism / Clean Lines",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg", alt: "Minimalist Approach" }
    ],
    collections: [
      { name: "Essential Lines", season: "Spring 2025", pieces: "14 pieces" },
      { name: "Pure Form", season: "Fall 2024", pieces: "11 pieces" }
    ],
    fashionShows: [
      { event: "Minimalist Fashion Week", location: "Tokyo", year: "2024" }
    ],
    social: {
      instagram: "@minimalistapproach",
      website: "#"
    }
  },
  {
    name: "CULTURAL FUSION",
    category: "fashion" as const,
    slug: "cultural-fusion",
    tagline: "Celebrating heritage through contemporary design",
    shortDescription: "Celebrating heritage through contemporary interpretations of traditional wear.",
    specialty: "Cultural / Traditional",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg", alt: "Cultural Fusion" }
    ],
    collections: [
      { name: "Global Threads", season: "Fall 2024", pieces: "22 pieces" },
      { name: "Heritage Modern", season: "Spring 2024", pieces: "18 pieces" }
    ],
    fashionShows: [
      { event: "Cultural Fashion Showcase", location: "Mumbai", year: "2024" }
    ],
    social: {
      instagram: "@culturalfusion",
      website: "#"
    }
  }
]

// Art Artists Data
const artArtists = [
  {
    name: "ABSTRACT VISIONS",
    category: "art" as const,
    slug: "abstract-visions",
    tagline: "Challenging perception through color and form",
    shortDescription: "Bold abstract compositions that challenge perception and emotion.",
    medium: "Mixed Media / Abstract",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg", alt: "Abstract Visions 1" },
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg", alt: "Abstract Visions 2" }
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
    social: {
      instagram: "@abstractvisions",
      website: "#"
    }
  },
  {
    name: "COLOR THEORY",
    category: "art" as const,
    slug: "color-theory",
    tagline: "Exploring the psychology of color",
    shortDescription: "Vibrant color studies exploring the psychology of hue and form.",
    medium: "Acrylic / Canvas",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg", alt: "Color Theory" }
    ],
    artworks: [
      { title: "Chromatic Harmony", year: "2024", dimensions: "40\" x 30\"", medium: "Acrylic on Canvas" },
      { title: "Primary Emotions", year: "2023", dimensions: "36\" x 36\"", medium: "Acrylic on Canvas" }
    ],
    exhibitions: [
      { title: "Color Studies", venue: "Art Institute", year: "2024" }
    ],
    social: {
      instagram: "@colortheoryart",
      website: "#"
    }
  },
  {
    name: "URBAN EXPRESSIONS",
    category: "art" as const,
    slug: "urban-expressions",
    tagline: "Bringing urban stories to public spaces",
    shortDescription: "Contemporary street art bringing urban stories to public spaces.",
    medium: "Street Art / Murals",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg", alt: "Urban Expressions" }
    ],
    artworks: [
      { title: "City Voices", year: "2024", dimensions: "20' x 30'", medium: "Spray Paint on Wall" },
      { title: "Community Spirit", year: "2023", dimensions: "15' x 25'", medium: "Acrylic Mural" }
    ],
    exhibitions: [
      { title: "Street Art Collective", venue: "Public Art Festival", year: "2024" }
    ],
    social: {
      instagram: "@urbanexpressions",
      website: "#"
    }
  },
  {
    name: "DIGITAL DREAMS",
    category: "art" as const,
    slug: "digital-dreams",
    tagline: "Pushing boundaries in digital art",
    shortDescription: "Cutting-edge digital artwork pushing the boundaries of visual art.",
    medium: "Digital Art / NFT",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg", alt: "Digital Dreams" }
    ],
    artworks: [
      { title: "Virtual Reality", year: "2024", dimensions: "Digital", medium: "3D Animation" },
      { title: "Cyber Landscape", year: "2023", dimensions: "4K Resolution", medium: "Digital Collage" }
    ],
    exhibitions: [
      { title: "Digital Art Now", venue: "Tech Art Gallery", year: "2024" }
    ],
    social: {
      instagram: "@digitaldreams",
      website: "#"
    }
  },
  {
    name: "BOTANICAL BEAUTY",
    category: "art" as const,
    slug: "botanical-beauty",
    tagline: "Celebrating natural beauty and form",
    shortDescription: "Delicate botanical illustrations celebrating natural beauty and form.",
    medium: "Watercolor / Nature",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg", alt: "Botanical Beauty" }
    ],
    artworks: [
      { title: "Garden Series", year: "2024", dimensions: "12\" x 16\"", medium: "Watercolor on Paper" },
      { title: "Floral Study", year: "2023", dimensions: "9\" x 12\"", medium: "Watercolor" }
    ],
    exhibitions: [
      { title: "Nature Studies", venue: "Botanical Gallery", year: "2024" }
    ],
    social: {
      instagram: "@botanicalbeauty",
      website: "#"
    }
  },
  {
    name: "SCULPTURAL FORMS",
    category: "art" as const,
    slug: "sculptural-forms",
    tagline: "Exploring space, material, and meaning",
    shortDescription: "Three-dimensional explorations of space, material, and meaning.",
    medium: "Sculpture / Installation",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg", alt: "Sculptural Forms" }
    ],
    artworks: [
      { title: "Spatial Dialogue", year: "2024", dimensions: "8' x 6' x 4'", medium: "Steel and Wood" },
      { title: "Material Memory", year: "2023", dimensions: "5' x 3' x 3'", medium: "Bronze and Stone" }
    ],
    exhibitions: [
      { title: "Sculptural Visions", venue: "Modern Sculpture Park", year: "2024" }
    ],
    social: {
      instagram: "@sculpturalforms",
      website: "#"
    }
  }
]

// Events Data
const eventsData = [
  {
    title: "Soulful Sessions Joburg",
    slug: "soulful-sessions-jhb-jan2025",
    category: "music" as const,
    type: "Concert",
    genre: "R&B",
    artist: "JST.REA & Soul Collective",
    description: "An intimate evening of soulful R&B performances featuring JST.REA alongside emerging soul artists.",
    date: "2025-01-15",
    time: "20:00",
    doors: "19:00",
    location: {
      venue: "The Orbit Jazz Club",
      address: "51 De Korte St, Braamfontein, Johannesburg 2017",
      city: "Johannesburg",
      state: "GP",
      country: "South Africa"
    },
    price: { min: 800, max: 1500, vip: 2200 },
    capacity: 200,
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg" },
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg" }
    ],
    tags: [{ tag: "R&B" }, { tag: "Neo-Soul" }, { tag: "Live Music" }, { tag: "Intimate" }],
    ageRestriction: "18+",
    dresscode: "Smart Casual",
    parking: "Street parking available, Braamfontein parking garage nearby",
    accessibility: "Wheelchair accessible",
    contact: {
      phone: "+27 11 339 6951",
      email: "info@orbitjazzclub.co.za",
      website: "https://www.orbitjazzclub.co.za"
    },
    featured: true
  },
  {
    title: "Urban Fashion Week Cape Town",
    slug: "urban-fashion-week-cpt-feb2025",
    category: "fashion" as const,
    type: "Fashion Show",
    genre: "Urban Style",
    artist: "Various Designers",
    description: "Showcase of emerging South African fashion designers presenting their latest collections inspired by street culture and contemporary style.",
    date: "2025-02-08",
    time: "19:00",
    doors: "18:00",
    location: {
      venue: "The V&A Waterfront Amphitheatre",
      address: "V&A Waterfront, Cape Town 8002",
      city: "Cape Town",
      state: "WC",
      country: "South Africa"
    },
    price: { min: 1200, max: 4500, vip: 8000 },
    capacity: 500,
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg" }
    ],
    tags: [{ tag: "Fashion" }, { tag: "Urban Style" }, { tag: "Designer Showcase" }, { tag: "Runway" }],
    ageRestriction: "18+",
    dresscode: "Fashion Forward",
    parking: "V&A Waterfront parking available, shuttle service",
    accessibility: "Fully accessible venue",
    contact: {
      phone: "+27 21 408 7600",
      email: "events@waterfront.co.za",
      website: "https://www.waterfront.co.za"
    },
    featured: true
  },
  {
    title: "Neo-Soul Art Gallery Opening",
    slug: "neo-soul-art-gallery-pretoria-feb2025",
    category: "art" as const,
    type: "Art Exhibition",
    genre: "Contemporary",
    artist: "Collective Artists",
    description: "A curated exhibition featuring contemporary South African art inspired by neo-soul music and culture, showcasing emerging and established artists.",
    date: "2025-02-14",
    time: "18:00",
    doors: "17:30",
    location: {
      venue: "Pretoria Art Museum",
      address: "Corner of Wessels & Schoeman Street, Arcadia, Pretoria 0007",
      city: "Pretoria",
      state: "GP",
      country: "South Africa"
    },
    price: { min: 450, max: 900, vip: 1350 },
    capacity: 150,
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg" }
    ],
    tags: [{ tag: "Art" }, { tag: "Neo-Soul" }, { tag: "Exhibition" }, { tag: "Contemporary" }],
    ageRestriction: "All Ages",
    dresscode: "Creative Casual",
    parking: "Museum parking available, street parking nearby",
    accessibility: "Wheelchair accessible",
    contact: {
      phone: "+27 12 344 1807",
      email: "info@pretoriaartmuseum.co.za",
      website: "https://www.pretoriaartmuseum.co.za"
    },
    featured: false
  },
  {
    title: "Groove Theory Live",
    slug: "groove-theory-live-durban-feb2025",
    category: "music" as const,
    type: "Concert",
    genre: "Funk",
    artist: "Groove Theory",
    description: "Classic funk rhythms meet contemporary soul in this electrifying live performance from Groove Theory.",
    date: "2025-02-14",
    time: "21:00",
    doors: "20:00",
    location: {
      venue: "The Playhouse Drama Theatre",
      address: "231 Smith St, Durban Central, Durban 4001",
      city: "Durban",
      state: "KZN",
      country: "South Africa"
    },
    price: { min: 950, max: 1700, vip: 2500 },
    capacity: 1150,
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg" }
    ],
    tags: [{ tag: "Funk" }, { tag: "Soul" }, { tag: "Live Performance" }, { tag: "Dance" }],
    ageRestriction: "All Ages",
    dresscode: "Comfortable Dancing Attire",
    parking: "Wilson's Wharf parking available, street parking nearby",
    accessibility: "Wheelchair accessible",
    contact: {
      phone: "+27 31 369 9555",
      email: "info@playhouseco.za",
      website: "https://www.playhouseco.za"
    },
    featured: false
  },
  {
    title: "Street Style Showcase",
    slug: "street-style-showcase-stellenbosch-mar2025",
    category: "fashion" as const,
    type: "Fashion Show",
    genre: "Streetwear",
    artist: "Urban Collective",
    description: "A vibrant celebration of street fashion and urban culture in the beautiful wine lands of the Western Cape.",
    date: "2025-03-10",
    time: "20:00",
    doors: "19:00",
    location: {
      venue: "Spier Wine Farm Amphitheatre",
      address: "Lynx Rd, Stellenbosch 7600",
      city: "Stellenbosch",
      state: "WC",
      country: "South Africa"
    },
    price: { min: 1150, max: 3200, vip: 5500 },
    capacity: 400,
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg" }
    ],
    tags: [{ tag: "Street Fashion" }, { tag: "Urban Culture" }, { tag: "Wine Lands" }, { tag: "Streetwear" }],
    ageRestriction: "18+",
    dresscode: "Your Best Streetwear",
    parking: "Spier parking available, shuttle service from Stellenbosch",
    accessibility: "Ground level venue, accessible",
    contact: {
      phone: "+27 21 809 1100",
      email: "events@spier.co.za",
      website: "https://www.spier.co.za"
    },
    featured: false
  },
  {
    title: "Soul Meets Canvas",
    slug: "soul-meets-canvas-bloemfontein-mar2025",
    category: "art" as const,
    type: "Art & Music Event",
    genre: "Mixed Media",
    artist: "Various Artists & Musicians",
    description: "An immersive experience combining live soul music performances with contemporary South African art installations.",
    date: "2025-03-22",
    time: "19:30",
    doors: "19:00",
    location: {
      venue: "Oliewenhuis Art Museum",
      address: "36 Harry Smith St, Bloemfontein 9301",
      city: "Bloemfontein",
      state: "FS",
      country: "South Africa"
    },
    price: { min: 600, max: 1350, vip: 2250 },
    capacity: 300,
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      { url: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg" }
    ],
    tags: [{ tag: "Art" }, { tag: "Soul Music" }, { tag: "Interactive" }, { tag: "Cultural" }],
    ageRestriction: "All Ages",
    dresscode: "Museum Chic",
    parking: "Museum parking available, additional street parking",
    accessibility: "Fully accessible",
    contact: {
      phone: "+27 51 447 9609",
      email: "info@oliewenhuis.co.za",
      website: "https://www.oliewenhuis.co.za"
    },
    featured: false
  }
]

// Site Settings Data
const siteSettingsData = {
  siteName: "The Soulmates",
  contactEmail: "contact@jstrea.com",
  socialLinks: {
    instagram: "https://instagram.com/jst.betsoe",
    youtube: "https://youtube.com/@jstrea",
    spotify: "https://open.spotify.com/artist/jstrea",
    appleMusic: "https://music.apple.com/artist/jstrea",
    soundcloud: "https://soundcloud.com/jstrea"
  },
  serviceSectionImages: {
    musicImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
    artImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    fashionImage: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
  }
}

async function seedData() {
  console.log('🌱 Starting to seed data...')

  const payload = await getPayload({ config })

  // Clear existing data
  console.log('🗑️  Clearing existing data...')

  try {
    const existingArtists = await payload.find({ collection: 'artists', limit: 1000 })
    for (const artist of existingArtists.docs) {
      await payload.delete({ collection: 'artists', id: artist.id })
    }
    console.log(`   Deleted ${existingArtists.docs.length} existing artists`)
  } catch (e) {
    console.log('   No existing artists to delete')
  }

  try {
    const existingEvents = await payload.find({ collection: 'events', limit: 1000 })
    for (const event of existingEvents.docs) {
      await payload.delete({ collection: 'events', id: event.id })
    }
    console.log(`   Deleted ${existingEvents.docs.length} existing events`)
  } catch (e) {
    console.log('   No existing events to delete')
  }

  try {
    const existingSettings = await payload.find({ collection: 'siteSettings', limit: 10 })
    for (const setting of existingSettings.docs) {
      await payload.delete({ collection: 'siteSettings', id: setting.id })
    }
    console.log(`   Deleted ${existingSettings.docs.length} existing site settings`)
  } catch (e) {
    console.log('   No existing site settings to delete')
  }

  // Seed Music Artists
  console.log('🎵 Seeding music artists...')
  for (const artist of musicArtists) {
    try {
      await payload.create({
        collection: 'artists',
        data: artist as any
      })
      console.log(`   ✅ Created music artist: ${artist.name}`)
    } catch (e: any) {
      console.log(`   ❌ Error creating ${artist.name}: ${e.message}`)
    }
  }

  // Seed Fashion Artists
  console.log('👗 Seeding fashion artists...')
  for (const artist of fashionArtists) {
    try {
      await payload.create({
        collection: 'artists',
        data: artist as any
      })
      console.log(`   ✅ Created fashion artist: ${artist.name}`)
    } catch (e: any) {
      console.log(`   ❌ Error creating ${artist.name}: ${e.message}`)
    }
  }

  // Seed Art Artists
  console.log('🎨 Seeding art artists...')
  for (const artist of artArtists) {
    try {
      await payload.create({
        collection: 'artists',
        data: artist as any
      })
      console.log(`   ✅ Created art artist: ${artist.name}`)
    } catch (e: any) {
      console.log(`   ❌ Error creating ${artist.name}: ${e.message}`)
    }
  }

  // Seed Events
  console.log('📅 Seeding events...')
  for (const event of eventsData) {
    try {
      await payload.create({
        collection: 'events',
        data: event as any
      })
      console.log(`   ✅ Created event: ${event.title}`)
    } catch (e: any) {
      console.log(`   ❌ Error creating ${event.title}: ${e.message}`)
    }
  }

  // Seed Site Settings
  console.log('⚙️  Seeding site settings...')
  try {
    await payload.create({
      collection: 'siteSettings',
      data: siteSettingsData as any
    })
    console.log('   ✅ Created site settings')
  } catch (e: any) {
    console.log(`   ❌ Error creating site settings: ${e.message}`)
  }

  console.log('\n✨ Seed completed!')
  console.log('\nSummary:')
  console.log(`   - ${musicArtists.length} music artists`)
  console.log(`   - ${fashionArtists.length} fashion artists`)
  console.log(`   - ${artArtists.length} art artists`)
  console.log(`   - ${eventsData.length} events`)
  console.log('   - 1 site settings entry')

  process.exit(0)
}

seedData().catch((e) => {
  console.error('❌ Seed failed:', e)
  process.exit(1)
})
