import { getPayload } from 'payload'
import config from '../../../../payload.config'
import { NextResponse } from 'next/server'
import { Event, extractRichText, RichTextNode, GalleryImage, EventTag } from '@/types/payload'

export async function GET() {
  try {
    const payload = await getPayload({ config })

    const { docs: events } = await payload.find({
      collection: 'events',
      sort: 'date'
    })

    // Transform events to match the expected format
    const transformedEvents = (events as unknown as Event[]).map(event => ({
      id: event.id,
      slug: event.slug,
      title: event.title,
      description: event.description || event.title,
      fullDescription: extractRichText(event.fullDescription as RichTextNode, event.description || ''),
      date: event.date,
      time: event.time,
      doors: event.doors,
      venue: event.location?.venue,
      location: event.location?.address,
      city: event.location?.city,
      state: event.location?.state,
      country: event.location?.country,
      image: event.image,
      galleryImages: event.galleryImages?.map((img: GalleryImage) => img.url) || [event.image],
      featured: event.featured,
      category: event.category || 'music',
      type: event.type || 'Concert',
      genre: event.genre || 'R&B',
      artist: event.artist,
      price: {
        min: event.price?.min || 450,
        max: event.price?.max || 1500,
        vip: event.price?.vip
      },
      capacity: event.capacity,
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
    }))

    return NextResponse.json(transformedEvents)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json([], { status: 500 })
  }
}