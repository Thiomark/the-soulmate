// Payload CMS Types for The Soulmates

export interface RichTextNode {
  root?: {
    children?: Array<{
      children?: Array<{
        text?: string;
      }>;
    }>;
  };
}

export interface GalleryImage {
  url: string;
  alt?: string;
}

export interface SocialLinks {
  instagram?: string;
  twitter?: string;
  website?: string;
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
  soundcloud?: string;
}

export interface Discography {
  title: string;
  year?: string;
  type?: 'Album' | 'EP' | 'Single' | 'Mixtape';
}

export interface UpcomingShow {
  date: string;
  venue?: string;
  city?: string;
}

export interface Collection {
  name: string;
  season?: string;
  pieces?: string;
}

export interface FashionShow {
  event: string;
  location?: string;
  year?: string;
}

export interface Artwork {
  title: string;
  year?: string;
  dimensions?: string;
  medium?: string;
}

export interface Exhibition {
  title: string;
  venue?: string;
  year?: string;
}

export interface Artist {
  id: number | string;
  name: string;
  slug: string;
  category: 'music' | 'art' | 'fashion';
  tagline?: string;
  shortDescription?: string;
  bio?: RichTextNode | string;
  image?: string;
  galleryImages?: GalleryImage[];
  // Music specific
  genre?: string;
  discography?: Discography[];
  upcomingShows?: UpcomingShow[];
  // Fashion specific
  specialty?: string;
  collections?: Collection[];
  fashionShows?: FashionShow[];
  // Art specific
  medium?: string;
  artworks?: Artwork[];
  exhibitions?: Exhibition[];
  // Social links
  social?: SocialLinks;
}

export interface EventLocation {
  venue?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface EventPrice {
  min?: number;
  max?: number;
  vip?: number;
}

export interface EventContact {
  phone?: string;
  email?: string;
  website?: string;
}

export interface EventTag {
  tag: string;
}

export interface Event {
  id: number | string;
  title: string;
  slug: string;
  category: 'music' | 'art' | 'fashion';
  type?: string;
  genre?: string;
  artist?: string;
  description?: string;
  fullDescription?: RichTextNode | string;
  date: string;
  time?: string;
  doors?: string;
  location?: EventLocation;
  price?: EventPrice;
  capacity?: number;
  image?: string;
  galleryImages?: GalleryImage[];
  tags?: EventTag[];
  ageRestriction?: string;
  dresscode?: string;
  parking?: string;
  accessibility?: string;
  contact?: EventContact;
  featured?: boolean;
}

// Helper function to extract text from rich text
export function extractRichText(richText: RichTextNode | string | undefined, fallback: string = ''): string {
  if (!richText) return fallback;
  if (typeof richText === 'string') return richText;
  return richText.root?.children?.[0]?.children?.[0]?.text || fallback;
}
