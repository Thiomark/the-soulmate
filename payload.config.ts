import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Determine server URL for Payload admin
const getServerURL = () => {
  if (process.env.NEXT_PUBLIC_SERVER_URL) {
    return process.env.NEXT_PUBLIC_SERVER_URL
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

export default buildConfig({
  serverURL: getServerURL(),
  admin: {
    user: 'users',
    theme: 'light',
    meta: {
      titleSuffix: ' | The Soulmates Admin',
      icons: [],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      access: {
        create: ({ req }) => !!req.user,  // Only logged-in admins can create new users
        delete: () => false,
        update: () => false,
      },
      fields: [],
    },
    {
      slug: 'artists',
      admin: {
        useAsTitle: 'name',
        livePreview: {
          url: ({ data }) => {
            const category = data?.category || 'music'
            const slug = data?.slug || ''
            return `${getServerURL()}/artists/${category}/${slug}`
          },
        },
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
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline/Quote',
        },
        {
          name: 'shortDescription',
          type: 'textarea',
          label: 'Short Description',
        },
        {
          name: 'bio',
          type: 'richText',
          editor: lexicalEditor({}),
          label: 'Full Bio',
        },
        {
          name: 'image',
          type: 'text',
          label: 'Profile Image',
          admin: {
            components: {
              Field: '@/components/admin/CloudinaryUpload#CloudinaryUpload',
            },
          },
        },
        {
          name: 'galleryImages',
          type: 'json',
          label: 'Gallery Images',
          admin: {
            components: {
              Field: '@/components/admin/CloudinaryGallery#CloudinaryGallery',
            },
          },
        },
        // Music artist specific fields
        {
          name: 'genre',
          type: 'text',
          label: 'Genre (for music artists)',
          admin: {
            condition: (data) => data?.category === 'music',
          },
        },
        {
          name: 'discography',
          type: 'array',
          label: 'Discography',
          admin: {
            condition: (data) => data?.category === 'music',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'year',
              type: 'text',
            },
            {
              name: 'type',
              type: 'select',
              options: [
                { label: 'Album', value: 'Album' },
                { label: 'EP', value: 'EP' },
                { label: 'Single', value: 'Single' },
                { label: 'Mixtape', value: 'Mixtape' },
              ],
            },
          ],
        },
        {
          name: 'upcomingShows',
          type: 'array',
          label: 'Upcoming Shows',
          admin: {
            condition: (data) => data?.category === 'music',
          },
          fields: [
            {
              name: 'date',
              type: 'date',
              required: true,
            },
            {
              name: 'venue',
              type: 'text',
            },
            {
              name: 'city',
              type: 'text',
            },
          ],
        },
        // Fashion artist specific fields
        {
          name: 'specialty',
          type: 'text',
          label: 'Specialty (for fashion artists)',
          admin: {
            condition: (data) => data?.category === 'fashion',
          },
        },
        {
          name: 'collections',
          type: 'array',
          label: 'Collections',
          admin: {
            condition: (data) => data?.category === 'fashion',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'season',
              type: 'text',
            },
            {
              name: 'pieces',
              type: 'text',
            },
          ],
        },
        {
          name: 'fashionShows',
          type: 'array',
          label: 'Fashion Shows',
          admin: {
            condition: (data) => data?.category === 'fashion',
          },
          fields: [
            {
              name: 'event',
              type: 'text',
              required: true,
            },
            {
              name: 'location',
              type: 'text',
            },
            {
              name: 'year',
              type: 'text',
            },
          ],
        },
        // Art artist specific fields
        {
          name: 'medium',
          type: 'text',
          label: 'Medium (for art artists)',
          admin: {
            condition: (data) => data?.category === 'art',
          },
        },
        {
          name: 'artworks',
          type: 'array',
          label: 'Artworks',
          admin: {
            condition: (data) => data?.category === 'art',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'year',
              type: 'text',
            },
            {
              name: 'dimensions',
              type: 'text',
            },
            {
              name: 'medium',
              type: 'text',
            },
          ],
        },
        {
          name: 'exhibitions',
          type: 'array',
          label: 'Exhibitions',
          admin: {
            condition: (data) => data?.category === 'art',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'venue',
              type: 'text',
            },
            {
              name: 'year',
              type: 'text',
            },
          ],
        },
        // Social links for all
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
            {
              name: 'spotify',
              type: 'text',
              admin: {
                condition: (data) => data?.category === 'music',
              },
            },
            {
              name: 'appleMusic',
              type: 'text',
              admin: {
                condition: (data) => data?.category === 'music',
              },
            },
            {
              name: 'youtube',
              type: 'text',
              admin: {
                condition: (data) => data?.category === 'music',
              },
            },
            {
              name: 'soundcloud',
              type: 'text',
              admin: {
                condition: (data) => data?.category === 'music',
              },
            },
          ],
        },
      ],
    },
    {
      slug: 'events',
      admin: {
        useAsTitle: 'title',
        livePreview: {
          url: ({ data }) => {
            const slug = data?.slug || ''
            return `${getServerURL()}/events/${slug}`
          },
        },
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
          name: 'category',
          type: 'select',
          required: true,
          options: [
            { label: 'Music', value: 'music' },
            { label: 'Fashion', value: 'fashion' },
            { label: 'Art', value: 'art' },
          ],
        },
        {
          name: 'type',
          type: 'text',
          label: 'Event Type (e.g., Concert, Fashion Show, Art Exhibition)',
        },
        {
          name: 'genre',
          type: 'text',
          label: 'Genre/Style',
        },
        {
          name: 'artist',
          type: 'text',
          label: 'Artist/Performer',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Short Description',
        },
        {
          name: 'fullDescription',
          type: 'richText',
          editor: lexicalEditor({}),
          label: 'Full Description',
        },
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'time',
          type: 'text',
          label: 'Show Time',
        },
        {
          name: 'doors',
          type: 'text',
          label: 'Doors Open',
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
            {
              name: 'state',
              type: 'text',
            },
            {
              name: 'country',
              type: 'text',
            },
          ],
        },
        {
          name: 'price',
          type: 'group',
          fields: [
            {
              name: 'min',
              type: 'number',
            },
            {
              name: 'max',
              type: 'number',
            },
            {
              name: 'vip',
              type: 'number',
            },
          ],
        },
        {
          name: 'capacity',
          type: 'number',
        },
        {
          name: 'image',
          type: 'text',
          label: 'Main Image',
          admin: {
            components: {
              Field: '@/components/admin/CloudinaryUpload#CloudinaryUpload',
            },
          },
        },
        {
          name: 'galleryImages',
          type: 'json',
          label: 'Gallery Images',
          admin: {
            components: {
              Field: '@/components/admin/CloudinaryGallery#CloudinaryGallery',
            },
          },
        },
        {
          name: 'tags',
          type: 'array',
          label: 'Tags',
          fields: [
            {
              name: 'tag',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'ageRestriction',
          type: 'text',
          label: 'Age Restriction',
        },
        {
          name: 'dresscode',
          type: 'text',
          label: 'Dress Code',
        },
        {
          name: 'parking',
          type: 'text',
          label: 'Parking Information',
        },
        {
          name: 'accessibility',
          type: 'text',
          label: 'Accessibility',
        },
        {
          name: 'contact',
          type: 'group',
          label: 'Venue Contact',
          fields: [
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'email',
              type: 'text',
            },
            {
              name: 'website',
              type: 'text',
            },
          ],
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      slug: 'siteSettings',
      admin: {
        useAsTitle: 'siteName',
      },
      fields: [
        {
          name: 'siteName',
          type: 'text',
          defaultValue: 'The Soulmates',
        },
        {
          name: 'contactEmail',
          type: 'text',
        },
        {
          name: 'socialLinks',
          type: 'group',
          fields: [
            {
              name: 'instagram',
              type: 'text',
            },
            {
              name: 'youtube',
              type: 'text',
            },
            {
              name: 'spotify',
              type: 'text',
            },
            {
              name: 'appleMusic',
              type: 'text',
            },
            {
              name: 'soundcloud',
              type: 'text',
            },
          ],
        },
        {
          name: 'serviceSectionImages',
          type: 'group',
          label: 'Service Section Images',
          fields: [
            {
              name: 'musicImage',
              type: 'text',
              label: 'Music Image',
              admin: {
                components: {
                  Field: '@/components/admin/CloudinaryUpload#CloudinaryUpload',
                },
              },
            },
            {
              name: 'artImage',
              type: 'text',
              label: 'Art Image',
              admin: {
                components: {
                  Field: '@/components/admin/CloudinaryUpload#CloudinaryUpload',
                },
              },
            },
            {
              name: 'fashionImage',
              type: 'text',
              label: 'Fashion Image',
              admin: {
                components: {
                  Field: '@/components/admin/CloudinaryUpload#CloudinaryUpload',
                },
              },
            },
          ],
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
})