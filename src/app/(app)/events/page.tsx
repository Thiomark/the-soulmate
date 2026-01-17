"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface EventData {
  id: number | string;
  slug: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
  venue?: string;
  city?: string;
  state?: string;
  image?: string;
  category: 'music' | 'art' | 'fashion';
  type?: string;
  genre?: string;
  price?: {
    min?: number;
    max?: number;
  };
  tags?: string[];
}

async function getEvents(): Promise<EventData[]> {
  try {
    const response = await fetch('/api/events')
    if (!response.ok) {
      throw new Error('Failed to fetch events')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

const categoryColors: Record<string, string> = {
  music: "bg-[#4A90C2]",
  fashion: "bg-[#E8B4B8]",
  art: "bg-[#9B8A7F]"
};

const categoryLabels: Record<string, string> = {
  music: "MUSIC",
  fashion: "FASHION",
  art: "ART"
};

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [upcomingEvents, setUpcomingEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents().then(events => {
      setUpcomingEvents(events);
      setLoading(false);
    });
  }, []);

  // Get unique genres for each category
  const musicGenres = [...new Set(upcomingEvents.filter(event => event.category === "music").map(event => event.genre).filter((g): g is string => !!g))];
  const fashionGenres = [...new Set(upcomingEvents.filter(event => event.category === "fashion").map(event => event.genre).filter((g): g is string => !!g))];
  const artGenres = [...new Set(upcomingEvents.filter(event => event.category === "art").map(event => event.genre).filter((g): g is string => !!g))];

  // Filter events based on selected category and genre
  const filteredEvents = upcomingEvents.filter(event => {
    const categoryMatch = selectedCategory === "all" || event.category === selectedCategory;
    const genreMatch = selectedGenre === "all" || event.genre === selectedGenre;
    return categoryMatch && genreMatch;
  });

  if (loading) {
    return (
      <div className="px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-lg text-gray-600">Loading events...</p>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0 mb-12 sm:mb-16">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-2">
              UPCOMING EVENTS
            </h1>
            <div className="w-32 h-0.5 bg-gray-800"></div>
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 text-center sm:text-right">
            CALENDAR
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-sm font-light tracking-[0.2em] text-gray-600 mb-8">
            {selectedCategory === "all" ? "ALL EVENTS" : `${categoryLabels[selectedCategory as keyof typeof categoryLabels]} EVENTS`}
            {selectedGenre !== "all" && ` • ${selectedGenre.toUpperCase()}`}
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-3 sm:px-4 py-2 text-xs font-light tracking-[0.1em] transition-colors min-h-[44px] ${
                selectedCategory === "all" 
                  ? "bg-gray-800 text-white" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => handleCategoryChange("music")}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 text-xs font-light tracking-[0.1em] transition-colors min-h-[44px] ${
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
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 text-xs font-light tracking-[0.1em] transition-colors min-h-[44px] ${
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
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 text-xs font-light tracking-[0.1em] transition-colors min-h-[44px] ${
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
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              <button
                onClick={() => setSelectedGenre("all")}
                className={`px-3 py-1 text-xs font-light rounded-full transition-colors min-h-[36px] ${
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
                  className={`px-3 py-1 text-xs font-light rounded-full transition-colors min-h-[36px] ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {filteredEvents.map((event) => (
            <Link key={event.id} href={`/events/${event.slug}`} className="group block">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                  <Image
                    src={event.image || "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"}
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
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                    <h3 className="text-lg sm:text-xl font-light text-gray-800 group-hover:text-[#4A90C2] transition-colors">
                      {event.title}
                    </h3>
                    <div className="text-left sm:text-right">
                      <div className="text-lg font-light text-gray-800">
                        R{event.price?.min || 450}
                      </div>
                      <div className="text-xs text-gray-600">
                        from
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-light tracking-[0.1em] text-gray-600 uppercase break-words">
                    {event.type} • {event.city}, {event.state}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {event.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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