import { config as dotenvConfig } from 'dotenv'
import { getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

// Load environment variables
dotenvConfig({ path: '.env.local' })

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Inline config for the migration script
const migrationConfig = buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname, '..'),
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      access: {
        delete: () => false,
        update: () => false,
      },
      fields: [],
    },
    {
      slug: 'artists',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Music',
              value: 'music',
            },
            {
              label: 'Art',
              value: 'art',
            },
            {
              label: 'Fashion',
              value: 'fashion',
            },
          ],
        },
        {
          name: 'bio',
          type: 'richText',
          editor: lexicalEditor({}),
        },
        {
          name: 'image',
          type: 'text',
          label: 'Image URL',
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'social',
          type: 'group',
          fields: [
            {
              name: 'instagram',
              type: 'text',
            },
            {
              name: 'twitter',
              type: 'text',
            },
            {
              name: 'website',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      slug: 'events',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor({}),
        },
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'time',
          type: 'text',
        },
        {
          name: 'location',
          type: 'group',
          fields: [
            {
              name: 'venue',
              type: 'text',
            },
            {
              name: 'address',
              type: 'text',
            },
            {
              name: 'city',
              type: 'text',
            },
          ],
        },
        {
          name: 'image',
          type: 'text',
          label: 'Image URL',
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, '..', 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
})

// Mock data from the existing pages
const mockArtists = [
  // Music Artists
  {
    name: "JST.REA",
    category: "music",
    bio: "Smooth melodies with raw stories - tender, bold, and always honest.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
    slug: "jst-rea",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "SOUL VIBES",
    category: "music", 
    bio: "Deep, emotional soundscapes that touch the soul and move the spirit.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    slug: "soul-vibes",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "RHYTHM COLLECTIVE",
    category: "music",
    bio: "Urban beats meet melodic storytelling in this dynamic collective.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    slug: "rhythm-collective",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "MELODY MAKERS",
    category: "music",
    bio: "Experimental sounds blending traditional R&B with modern production.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    slug: "melody-makers",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  // Art Artists
  {
    name: "ABSTRACT VISIONS",
    category: "art",
    bio: "Bold abstract compositions that challenge perception and emotion.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    slug: "abstract-visions",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "COLOR THEORY",
    category: "art",
    bio: "Vibrant color studies exploring the psychology of hue and form.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    slug: "color-theory",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "URBAN EXPRESSIONS",
    category: "art",
    bio: "Contemporary street art bringing urban stories to public spaces.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    slug: "urban-expressions",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "DIGITAL DREAMS",
    category: "art",
    bio: "Cutting-edge digital artwork pushing the boundaries of visual art.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    slug: "digital-dreams",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "BOTANICAL BEAUTY",
    category: "art",
    bio: "Delicate botanical illustrations celebrating natural beauty and form.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    slug: "botanical-beauty",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "SCULPTURAL FORMS",
    category: "art",
    bio: "Three-dimensional explorations of space, material, and meaning.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg",
    slug: "sculptural-forms",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  // Fashion Artists
  {
    name: "JST.REA",
    category: "fashion",
    bio: "Where rhythm meets fabric - bold, clean, and unapologetically authentic fashion.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184868/the_soulmates/the_soulmates/fashion-striped-outfit.jpg",
    slug: "jst-rea-fashion",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "AVANT-GARDE COLLECTIVE",
    category: "fashion",
    bio: "Pushing boundaries with experimental designs and unconventional materials.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    slug: "avant-garde-collective",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "SUSTAINABLE STYLE",
    category: "fashion",
    bio: "Environmentally conscious fashion without compromising on style or quality.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    slug: "sustainable-style",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "VINTAGE REVIVAL",
    category: "fashion",
    bio: "Reimagining classic styles with modern twists and contemporary fits.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    slug: "vintage-revival",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "MINIMALIST APPROACH",
    category: "fashion",
    bio: "Less is more - sophisticated simplicity in every carefully crafted piece.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    slug: "minimalist-approach",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  },
  {
    name: "CULTURAL FUSION",
    category: "fashion",
    bio: "Celebrating heritage through contemporary interpretations of traditional wear.",
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg",
    slug: "cultural-fusion",
    social: {
      instagram: "",
      twitter: "",
      website: ""
    }
  }
]

const mockEvents = [
  {
    title: "Soulful Sessions Joburg",
    slug: "soulful-sessions-jhb-jan2025",
    description: "An intimate evening of soulful R&B performances featuring JST.REA alongside emerging soul artists.",
    date: "2025-01-15",
    time: "20:00",
    location: {
      venue: "The Orbit Jazz Club",
      address: "51 De Korte St, Braamfontein",
      city: "Johannesburg"
    },
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757184869/the_soulmates/the_soulmates/artist-portrait.jpg",
    featured: true
  },
  {
    title: "Urban Fashion Week Cape Town",
    slug: "urban-fashion-week-cpt-feb2025",
    description: "Showcase of emerging South African fashion designers presenting their latest collections inspired by street culture and contemporary style.",
    date: "2025-02-08",
    time: "19:00",
    location: {
      venue: "The V&A Waterfront Amphitheatre",
      address: "V&A Waterfront",
      city: "Cape Town"
    },
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    featured: false
  },
  {
    title: "Neo-Soul Art Gallery Opening",
    slug: "neo-soul-art-gallery-pretoria-feb2025",
    description: "A curated exhibition featuring contemporary South African art inspired by neo-soul music and culture, showcasing emerging and established artists.",
    date: "2025-02-14",
    time: "18:00",
    location: {
      venue: "Pretoria Art Museum",
      address: "Corner of Wessels & Schoeman Street, Arcadia",
      city: "Pretoria"
    },
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    featured: false
  },
  {
    title: "Groove Theory Live",
    slug: "groove-theory-live-durban-feb2025",
    description: "Classic funk rhythms meet contemporary soul in this electrifying live performance from Groove Theory.",
    date: "2025-02-14",
    time: "21:00",
    location: {
      venue: "The Playhouse Drama Theatre",
      address: "231 Smith St, Durban Central",
      city: "Durban"
    },
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    featured: false
  },
  {
    title: "Street Style Showcase",
    slug: "street-style-showcase-stellenbosch-mar2025",
    description: "A vibrant celebration of street fashion and urban culture in the beautiful wine lands of the Western Cape.",
    date: "2025-03-10",
    time: "20:00",
    location: {
      venue: "Spier Wine Farm Amphitheatre",
      address: "Lynx Rd",
      city: "Stellenbosch"
    },
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    featured: false
  },
  {
    title: "Soul Meets Canvas",
    slug: "soul-meets-canvas-bloemfontein-mar2025", 
    description: "An immersive experience combining live soul music performances with contemporary South African art installations.",
    date: "2025-03-22",
    time: "19:30",
    location: {
      venue: "Oliewenhuis Art Museum",
      address: "36 Harry Smith St",
      city: "Bloemfontein"
    },
    image: "https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg",
    featured: false
  }
]

async function migrateData() {
  console.log('Starting data migration...')
  console.log('Payload secret exists:', !!process.env.PAYLOAD_SECRET)
  console.log('Database URL exists:', !!process.env.DATABASE_URL)
  
  try {
    const payload = await getPayload({ config: migrationConfig })
    console.log('Connected to Payload CMS')

    // Migrate Artists
    console.log('Migrating artists...')
    for (const artist of mockArtists) {
      try {
        const result = await payload.create({
          collection: 'artists',
          data: artist
        })
        console.log(`✓ Created artist: ${artist.name} (${artist.category})`)
      } catch (error) {
        console.error(`✗ Failed to create artist ${artist.name}:`, error)
      }
    }

    // Migrate Events
    console.log('Migrating events...')
    for (const event of mockEvents) {
      try {
        const result = await payload.create({
          collection: 'events',
          data: event
        })
        console.log(`✓ Created event: ${event.title}`)
      } catch (error) {
        console.error(`✗ Failed to create event ${event.title}:`, error)
      }
    }

    console.log('✅ Data migration completed successfully!')
    
    // Display summary
    const artistCount = await payload.count({ collection: 'artists' })
    const eventCount = await payload.count({ collection: 'events' })
    
    console.log(`\n📊 Migration Summary:`)
    console.log(`Artists: ${artistCount.totalDocs}`)
    console.log(`Events: ${eventCount.totalDocs}`)
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
  
  process.exit(0)
}

migrateData()