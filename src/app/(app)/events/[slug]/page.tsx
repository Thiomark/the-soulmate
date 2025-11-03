import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "../../../components/BackButton";

const upcomingEvents = [
  {
    id: "soulful-sessions-1",
    slug: "soulful-sessions-jhb-jan2025",
    title: "Soulful Sessions Joburg",
    category: "music",
    type: "Concert",
    genre: "R&B",
    artist: "JST.REA & Soul Collective",
    date: "2025-01-15",
    time: "20:00",
    doors: "19:00",
    venue: "The Orbit Jazz Club",
    location: "51 De Korte St, Braamfontein, Johannesburg 2017",
    city: "Johannesburg",
    state: "GP",
    country: "South Africa",
    coordinates: { lat: -26.1929, lng: 28.0322 },
    price: {
      min: 800,
      max: 1500,
      vip: 2200
    },
    capacity: 200,
    description: "An intimate evening of soulful R&B performances featuring JST.REA alongside emerging soul artists.",
    fullDescription: "Join us for an unforgettable night at The Orbit Jazz Club in Braamfontein as JST.REA takes the stage alongside a collective of emerging South African soul artists. This intimate setting provides the perfect backdrop for an evening of raw emotion, smooth melodies, and authentic storytelling through music. Experience the magic of live R&B and neo-soul in one of Joburg's most iconic venues.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    tags: ["R&B", "Neo-Soul", "Live Music", "Intimate"],
    ageRestriction: "18+",
    dresscode: "Smart Casual",
    parking: "Street parking available, Braamfontein parking garage nearby",
    accessibility: "Wheelchair accessible",
    contact: {
      phone: "+27 11 339 6951",
      email: "info@orbitjazzclub.co.za",
      website: "https://www.orbitjazzclub.co.za"
    }
  },
  {
    id: "urban-fashion-week",
    slug: "urban-fashion-week-cpt-feb2025",
    title: "Urban Fashion Week Cape Town",
    category: "fashion",
    type: "Fashion Show",
    genre: "Urban Style",
    artist: "Various Designers",
    date: "2025-02-08",
    time: "19:00",
    doors: "18:00",
    venue: "The V&A Waterfront Amphitheatre",
    location: "V&A Waterfront, Cape Town 8002",
    city: "Cape Town",
    state: "WC",
    country: "South Africa",
    coordinates: { lat: -33.9019, lng: 18.4232 },
    price: {
      min: 1200,
      max: 4500,
      vip: 8000
    },
    capacity: 500,
    description: "Showcase of emerging South African fashion designers presenting their latest collections inspired by street culture and contemporary style.",
    fullDescription: "Urban Fashion Week Cape Town returns to the iconic V&A Waterfront Amphitheatre, transformed into a runway paradise with Table Mountain as the backdrop. This year's showcase features 12 emerging South African designers who are redefining urban fashion through innovative streetwear, sustainable practices, and cultural storytelling. From avant-garde silhouettes to accessible street style, witness the future of South African fashion unfold in the heart of the Mother City.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    tags: ["Fashion", "Urban Style", "Designer Showcase", "Runway"],
    ageRestriction: "18+",
    dresscode: "Fashion Forward",
    parking: "V&A Waterfront parking available, shuttle service",
    accessibility: "Fully accessible venue",
    contact: {
      phone: "+27 21 408 7600",
      email: "events@waterfront.co.za",
      website: "https://www.waterfront.co.za"
    }
  },
  {
    id: "neo-soul-art-gallery",
    slug: "neo-soul-art-gallery-pretoria-feb2025",
    title: "Neo-Soul Art Gallery Opening",
    category: "art",
    type: "Art Exhibition",
    genre: "Contemporary",
    artist: "Collective Artists",
    date: "2025-02-14",
    time: "18:00",
    doors: "17:30",
    venue: "Pretoria Art Museum",
    location: "Corner of Wessels & Schoeman Street, Arcadia, Pretoria 0007",
    city: "Pretoria",
    state: "GP",
    country: "South Africa",
    coordinates: { lat: -25.7545, lng: 28.2314 },
    price: {
      min: 450,
      max: 900,
      vip: 1350
    },
    capacity: 150,
    description: "A curated exhibition featuring contemporary South African art inspired by neo-soul music and culture, showcasing emerging and established artists.",
    fullDescription: "Immerse yourself in the intersection of visual art and neo-soul culture at this carefully curated exhibition at the prestigious Pretoria Art Museum. Featuring works from 15 contemporary South African artists who draw inspiration from the rhythms, emotions, and aesthetics of neo-soul music, this opening reception includes live musical performances, artist talks, and an opportunity to connect with Pretoria's vibrant creative community.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    tags: ["Art", "Neo-Soul", "Exhibition", "Contemporary"],
    ageRestriction: "All Ages",
    dresscode: "Creative Casual",
    parking: "Museum parking available, street parking nearby",
    accessibility: "Wheelchair accessible",
    contact: {
      phone: "+27 12 344 1807",
      email: "info@pretoriaartmuseum.co.za",
      website: "https://www.pretoriaartmuseum.co.za"
    }
  },
  {
    id: "groove-theory-live",
    slug: "groove-theory-live-durban-feb2025",
    title: "Groove Theory Live",
    category: "music",
    type: "Concert",
    genre: "Funk",
    artist: "Groove Theory",
    date: "2025-02-14",
    time: "21:00",
    doors: "20:00",
    venue: "The Playhouse Drama Theatre",
    location: "231 Smith St, Durban Central, Durban 4001",
    city: "Durban",
    state: "KZN",
    country: "South Africa",
    coordinates: { lat: -29.8587, lng: 31.0218 },
    price: {
      min: 950,
      max: 1700,
      vip: 2500
    },
    capacity: 1150,
    description: "Classic funk rhythms meet contemporary soul in this electrifying live performance from Groove Theory.",
    fullDescription: "Get ready to move as Groove Theory brings their infectious funk-soul fusion to Durban's historic Playhouse Drama Theatre. Known for their tight rhythmic foundation and soulful vocal arrangements, Groove Theory creates an irresistible musical experience that celebrates funk's rich heritage while pushing the genre forward. This Valentine's Day show promises to be an unforgettable night of groove, soul, and pure musical joy in the heart of KZN.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    tags: ["Funk", "Soul", "Live Performance", "Dance"],
    ageRestriction: "All Ages",
    dresscode: "Comfortable Dancing Attire",
    parking: "Wilson's Wharf parking available, street parking nearby",
    accessibility: "Wheelchair accessible",
    contact: {
      phone: "+27 31 369 9555",
      email: "info@playhouseco.za",
      website: "https://www.playhouseco.za"
    }
  },
  {
    id: "street-style-showcase",
    slug: "street-style-showcase-stellenbosch-mar2025",
    title: "Street Style Showcase",
    category: "fashion",
    type: "Fashion Show",
    genre: "Streetwear",
    artist: "Urban Collective",
    date: "2025-03-10",
    time: "20:00",
    doors: "19:00",
    venue: "Spier Wine Farm Amphitheatre",
    location: "Lynx Rd, Stellenbosch 7600",
    city: "Stellenbosch",
    state: "WC",
    country: "South Africa",
    coordinates: { lat: -33.9249, lng: 18.7816 },
    price: {
      min: 1150,
      max: 3200,
      vip: 5500
    },
    capacity: 400,
    description: "A vibrant celebration of street fashion and urban culture in the beautiful wine lands of the Western Cape.",
    fullDescription: "Experience the Western Cape's most dynamic fashion event in the scenic setting of Spier Wine Farm. This year's Street Style Showcase brings together 20 of the most innovative South African streetwear designers, each presenting collections that blend urban culture with the natural beauty of the wine lands. Set against the backdrop of rolling vineyards and mountains, this event is equal parts fashion show, cultural celebration, and community gathering.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    tags: ["Street Fashion", "Urban Culture", "Wine Lands", "Streetwear"],
    ageRestriction: "18+",
    dresscode: "Your Best Streetwear",
    parking: "Spier parking available, shuttle service from Stellenbosch",
    accessibility: "Ground level venue, accessible",
    contact: {
      phone: "+27 21 809 1100",
      email: "events@spier.co.za",
      website: "https://www.spier.co.za"
    }
  },
  {
    id: "soul-meets-canvas",
    slug: "soul-meets-canvas-bloemfontein-mar2025",
    title: "Soul Meets Canvas",
    category: "art",
    type: "Art & Music Event",
    genre: "Mixed Media",
    artist: "Various Artists & Musicians",
    date: "2025-03-22",
    time: "19:30",
    doors: "19:00",
    venue: "Oliewenhuis Art Museum",
    location: "36 Harry Smith St, Bloemfontein 9301",
    city: "Bloemfontein",
    state: "FS",
    country: "South Africa",
    coordinates: { lat: -29.0852, lng: 26.1596 },
    price: {
      min: 600,
      max: 1350,
      vip: 2250
    },
    capacity: 300,
    description: "An immersive experience combining live soul music performances with contemporary South African art installations.",
    fullDescription: "The historic Oliewenhuis Art Museum transforms into a multisensory experience where soul music and visual art create perfect harmony. This unique event features live performances by the Free State's finest soul musicians interwoven throughout the museum's galleries, where contemporary South African art installations respond to and complement the musical journey. Experience art through multiple senses in this one-night-only celebration of South African cultural heritage.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
    ],
    tags: ["Art", "Soul Music", "Interactive", "Cultural"],
    ageRestriction: "All Ages",
    dresscode: "Museum Chic",
    parking: "Museum parking available, additional street parking",
    accessibility: "Fully accessible",
    contact: {
      phone: "+27 51 447 9609",
      email: "info@oliewenhuis.co.za",
      website: "https://www.oliewenhuis.co.za"
    }
  }
];

type CategoryKey = "music" | "fashion" | "art";

const categoryColors: Record<CategoryKey, { primary: string; light: string; text: string }> = {
  music: {
    primary: "bg-[#4A90C2]",
    light: "bg-[#4A90C2]/10",
    text: "text-[#4A90C2]"
  },
  fashion: {
    primary: "bg-[#E8B4B8]",
    light: "bg-[#E8B4B8]/10", 
    text: "text-[#E8B4B8]"
  },
  art: {
    primary: "bg-[#9B8A7F]",
    light: "bg-[#9B8A7F]/10",
    text: "text-[#9B8A7F]"
  }
};

const categoryLabels: Record<CategoryKey, string> = {
  music: "MUSIC",
  fashion: "FASHION", 
  art: "ART"
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventDetail({ params }: Props) {
  const { slug } = await params;
  const event = upcomingEvents.find(e => e.slug === slug);

  if (!event) {
    notFound();
  }

  const categoryStyle = categoryColors[event.category as CategoryKey];

  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/events" className="hover:text-[#4A90C2] transition-colors">
            Events
          </Link>
          <span>/</span>
          <span className="text-gray-800">{event.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 ${categoryStyle.primary} rounded-full`}>
                  <span className="text-xs font-light tracking-[0.1em] text-white">
                    {categoryLabels[event.category as CategoryKey]}
                  </span>
                </div>
                <p className="text-sm font-light tracking-[0.1em] text-gray-600 uppercase">
                  {event.type}
                </p>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                {event.title}
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-gray-700 italic">
                {event.artist}
              </p>
            </div>

            <div className={`p-6 ${categoryStyle.light} rounded-lg`}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-2">DATE & TIME</h3>
                  <p className="text-lg font-light text-gray-800">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-sm text-gray-600">
                    Doors: {event.doors} • Show: {event.time}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-2">PRICE RANGE</h3>
                  <p className="text-2xl font-light text-gray-800">
                    R{event.price.min} - R{event.price.max}
                  </p>
                  {event.price.vip && (
                    <p className="text-sm text-gray-600">
                      VIP: R{event.price.vip}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-800 mb-2">VENUE</h3>
                <p className="text-lg font-light text-gray-800">{event.venue}</p>
                <p className="text-sm text-gray-600">{event.location}</p>
                <p className="text-sm text-gray-600">{event.city}, {event.state}</p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className={`w-full py-4 ${categoryStyle.primary} text-white font-light tracking-wide hover:opacity-90 transition-opacity`}>
                  GET TICKETS
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light text-gray-800">About This Event</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {event.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span key={index} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-light text-gray-800">Event Details</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Capacity</span>
                  <span className="text-sm text-gray-800">{event.capacity} people</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Age Restriction</span>
                  <span className="text-sm text-gray-800">{event.ageRestriction}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Dress Code</span>
                  <span className="text-sm text-gray-800">{event.dresscode}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Parking</span>
                  <span className="text-sm text-gray-800 text-right max-w-[60%]">{event.parking}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Accessibility</span>
                  <span className="text-sm text-gray-800">{event.accessibility}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-light text-gray-800">Venue Contact</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Phone: <span className="text-gray-800">{event.contact.phone}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Email: <Link href={`mailto:${event.contact.email}`} className="text-[#4A90C2] hover:underline">{event.contact.email}</Link>
                </p>
                <p className="text-sm text-gray-600">
                  Website: <Link href={event.contact.website} target="_blank" rel="noopener noreferrer" className="text-[#4A90C2] hover:underline">Visit venue website</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {event.galleryImages.length > 1 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.galleryImages.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${event.title} gallery ${index + 1}`}
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