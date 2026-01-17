import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import { getPayload } from 'payload'
import config from '../../../../../payload.config'
import { Event, extractRichText, RichTextNode, GalleryImage, EventTag } from '@/types/payload'

async function getEvent(slug: string) {
  try {
    const payload = await getPayload({ config })

    const { docs: events } = await payload.find({
      collection: 'events',
      where: {
        slug: {
          equals: slug
        }
      }
    })

    if (events.length === 0) return null

    const event = events[0] as unknown as Event
    return {
      id: event.id,
      slug: event.slug,
      title: event.title,
      category: event.category || 'music',
      type: event.type || 'Concert',
      genre: event.genre || 'R&B',
      artist: event.artist,
      date: event.date,
      time: event.time,
      doors: event.doors,
      venue: event.location?.venue,
      location: event.location?.address,
      city: event.location?.city,
      state: event.location?.state,
      country: event.location?.country,
      price: {
        min: event.price?.min || 450,
        max: event.price?.max || 1500,
        vip: event.price?.vip
      },
      capacity: event.capacity,
      description: event.description,
      fullDescription: extractRichText(event.fullDescription as RichTextNode, event.description || ''),
      image: event.image,
      galleryImages: event.galleryImages?.map((img: GalleryImage) => img.url) || [event.image],
      tags: event.tags?.map((t: EventTag) => t.tag) || [],
      ageRestriction: event.ageRestriction,
      dresscode: event.dresscode,
      parking: event.parking,
      accessibility: event.accessibility,
      contact: {
        phone: event.contact?.phone,
        email: event.contact?.email,
        website: event.contact?.website
      }
    }
  } catch (error) {
    console.error('Error fetching event:', error)
    return null
  }
}

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
  const event = await getEvent(slug);

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
                {event.tags.map((tag: string, index: number) => (
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
                src={event.image || "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"}
                alt={event.title}
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-light text-gray-800">Event Details</h3>

              <div className="space-y-4">
                {event.capacity && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Capacity</span>
                    <span className="text-sm text-gray-800">{event.capacity} people</span>
                  </div>
                )}
                {event.ageRestriction && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Age Restriction</span>
                    <span className="text-sm text-gray-800">{event.ageRestriction}</span>
                  </div>
                )}
                {event.dresscode && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Dress Code</span>
                    <span className="text-sm text-gray-800">{event.dresscode}</span>
                  </div>
                )}
                {event.parking && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Parking</span>
                    <span className="text-sm text-gray-800 text-right max-w-[60%]">{event.parking}</span>
                  </div>
                )}
                {event.accessibility && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Accessibility</span>
                    <span className="text-sm text-gray-800">{event.accessibility}</span>
                  </div>
                )}
              </div>
            </div>

            {(event.contact?.phone || event.contact?.email || event.contact?.website) && (
              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-800">Venue Contact</h3>
                <div className="space-y-2">
                  {event.contact.phone && (
                    <p className="text-sm text-gray-600">
                      Phone: <span className="text-gray-800">{event.contact.phone}</span>
                    </p>
                  )}
                  {event.contact.email && (
                    <p className="text-sm text-gray-600">
                      Email: <Link href={`mailto:${event.contact.email}`} className="text-[#4A90C2] hover:underline">{event.contact.email}</Link>
                    </p>
                  )}
                  {event.contact.website && (
                    <p className="text-sm text-gray-600">
                      Website: <Link href={event.contact.website} target="_blank" rel="noopener noreferrer" className="text-[#4A90C2] hover:underline">Visit venue website</Link>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {event.galleryImages && event.galleryImages.length > 1 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.galleryImages.slice(1).filter((img): img is string => !!img).map((image, index) => (
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
