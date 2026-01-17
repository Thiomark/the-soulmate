'use client'

import { RefreshRouteOnSave } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

const getServerURL = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
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

export function LivePreviewListener() {
  const router = useRouter()

  return (
    <RefreshRouteOnSave
      refresh={() => router.refresh()}
      serverURL={getServerURL()}
    />
  )
}
