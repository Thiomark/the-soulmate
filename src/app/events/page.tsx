"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    venue: "The Orbit Jazz Club",
    location: "51 De Korte St, Braamfontein, Johannesburg 2017",
    city: "Johannesburg",
    state: "GP",
    price: {
      min: 800,
      max: 1500
    },
    description: "An intimate evening of soulful R&B performances featuring JST.REA alongside emerging soul artists.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
    tags: ["R&B", "Neo-Soul", "Live Music", "Intimate"]
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
    venue: "The V&A Waterfront Amphitheatre",
    location: "V&A Waterfront, Cape Town 8002",
    city: "Cape Town",
    state: "WC",
    price: {
      min: 1200,
      max: 4500
    },
    description: "Showcase of emerging South African fashion designers presenting their latest collections inspired by street culture and contemporary style.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    tags: ["Fashion", "Urban Style", "Designer Showcase", "Runway"]
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
    venue: "Pretoria Art Museum",
    location: "Corner of Wessels & Schoeman Street, Arcadia, Pretoria 0007",
    city: "Pretoria",
    state: "GP",
    price: {
      min: 450,
      max: 900
    },
    description: "A curated exhibition featuring contemporary South African art inspired by neo-soul music and culture, showcasing emerging and established artists.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    tags: ["Art", "Neo-Soul", "Exhibition", "Contemporary"]
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
    venue: "The Playhouse Drama Theatre",
    location: "231 Smith St, Durban Central, Durban 4001",
    city: "Durban",
    state: "KZN",
    price: {
      min: 950,
      max: 1700
    },
    description: "Classic funk rhythms meet contemporary soul in this electrifying live performance from Groove Theory.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    tags: ["Funk", "Soul", "Live Performance", "Dance"]
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
    venue: "Spier Wine Farm Amphitheatre",
    location: "Lynx Rd, Stellenbosch 7600",
    city: "Stellenbosch",
    state: "WC",
    price: {
      min: 1150,
      max: 3200
    },
    description: "A vibrant celebration of street fashion and urban culture in the beautiful wine lands of the Western Cape.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    tags: ["Street Fashion", "Urban Culture", "Wine Lands", "Streetwear"]
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
    venue: "Oliewenhuis Art Museum",
    location: "36 Harry Smith St, Bloemfontein 9301",
    city: "Bloemfontein",
    state: "FS",
    price: {
      min: 600,
      max: 1350
    },
    description: "An immersive experience combining live soul music performances with contemporary South African art installations.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    tags: ["Art", "Soul Music", "Interactive", "Cultural"]
  }
];

const categoryColors = {
  music: "bg-[#4A90C2]",
  fashion: "bg-[#E8B4B8]", 
  art: "bg-[#9B8A7F]"
};

const categoryLabels = {
  music: "MUSIC",
  fashion: "FASHION", 
  art: "ART"
};

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");

  // Get unique genres for each category
  const musicGenres = [...new Set(upcomingEvents.filter(event => event.category === "music").map(event => event.genre))];
  const fashionGenres = [...new Set(upcomingEvents.filter(event => event.category === "fashion").map(event => event.genre))];
  const artGenres = [...new Set(upcomingEvents.filter(event => event.category === "art").map(event => event.genre))];

  // Filter events based on selected category and genre
  const filteredEvents = upcomingEvents.filter(event => {
    const categoryMatch = selectedCategory === "all" || event.category === selectedCategory;
    const genreMatch = selectedGenre === "all" || event.genre === selectedGenre;
    return categoryMatch && genreMatch;
  });

  // Get available genres for current category
  const getAvailableGenres = () => {
    if (selectedCategory === "music") return musicGenres;
    if (selectedCategory === "fashion") return fashionGenres;
    if (selectedCategory === "art") return artGenres;
    return [...musicGenres, ...fashionGenres, ...artGenres];
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedGenre("all"); // Reset genre when category changes
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
              UPCOMING EVENTS
            </h1>
            <div className="w-32 h-0.5 bg-gray-800"></div>
          </div>
          <div className="text-4xl md:text-5xl font-light text-gray-800">
            CALENDAR
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-sm font-light tracking-[0.2em] text-gray-600 mb-8">
            {selectedCategory === "all" ? "ALL EVENTS" : `${categoryLabels[selectedCategory as keyof typeof categoryLabels]} EVENTS`}
            {selectedGenre !== "all" && ` • ${selectedGenre.toUpperCase()}`}
          </h2>
          
          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-4 py-2 text-xs font-light tracking-[0.1em] transition-colors ${
                selectedCategory === "all" 
                  ? "bg-gray-800 text-white" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => handleCategoryChange("music")}
              className={`flex items-center space-x-2 px-4 py-2 text-xs font-light tracking-[0.1em] transition-colors ${
                selectedCategory === "music" 
                  ? "bg-[#4A90C2] text-white" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <div className={`w-3 h-3 rounded ${categoryColors.music}`}></div>
              <span>MUSIC</span>
            </button>
            <button
              onClick={() => handleCategoryChange("fashion")}
              className={`flex items-center space-x-2 px-4 py-2 text-xs font-light tracking-[0.1em] transition-colors ${
                selectedCategory === "fashion" 
                  ? "bg-[#E8B4B8] text-white" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <div className={`w-3 h-3 rounded ${categoryColors.fashion}`}></div>
              <span>FASHION</span>
            </button>
            <button
              onClick={() => handleCategoryChange("art")}
              className={`flex items-center space-x-2 px-4 py-2 text-xs font-light tracking-[0.1em] transition-colors ${
                selectedCategory === "art" 
                  ? "bg-[#9B8A7F] text-white" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <div className={`w-3 h-3 rounded ${categoryColors.art}`}></div>
              <span>ART</span>
            </button>
          </div>

          {/* Genre Filter */}
          {selectedCategory !== "all" && getAvailableGenres().length > 0 && (
            <div className="flex justify-center space-x-3 mb-8">
              <button
                onClick={() => setSelectedGenre("all")}
                className={`px-3 py-1 text-xs font-light rounded-full transition-colors ${
                  selectedGenre === "all" 
                    ? "bg-gray-200 text-gray-800" 
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                All Genres
              </button>
              {getAvailableGenres().map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-3 py-1 text-xs font-light rounded-full transition-colors ${
                    selectedGenre === genre 
                      ? "bg-gray-200 text-gray-800" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          )}
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 mb-4">
              No events found matching your criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedGenre("all");
              }}
              className="px-6 py-2 bg-gray-800 text-white text-sm font-light tracking-wide hover:bg-gray-700 transition-colors"
            >
              Show All Events
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredEvents.map((event) => (
            <Link key={event.id} href={`/events/${event.slug}`} className="group block">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 ${categoryColors[event.category as keyof typeof categoryColors]} rounded-full`}>
                    <span className="text-xs font-light tracking-[0.1em] text-white">
                      {categoryLabels[event.category as keyof typeof categoryLabels]}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-light">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="text-xs opacity-90">
                      {event.time}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-light text-gray-800 group-hover:text-[#4A90C2] transition-colors">
                      {event.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-lg font-light text-gray-800">
                        R{event.price.min}
                      </div>
                      <div className="text-xs text-gray-600">
                        from
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-light tracking-[0.1em] text-gray-600 uppercase">
                    {event.type} • {event.city}, {event.state}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {event.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-sm text-gray-600 font-light">
            {filteredEvents.length > 0 
              ? `Showing ${filteredEvents.length} of ${upcomingEvents.length} events` 
              : "More events coming soon - follow us for updates"
            }
          </p>
        </div>
      </div>
    </div>
  );
}