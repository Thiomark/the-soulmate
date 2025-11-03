import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
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
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
})