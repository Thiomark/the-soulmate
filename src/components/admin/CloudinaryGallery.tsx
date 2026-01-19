'use client'

import React, { useState, useCallback, useRef } from 'react'
import { useField } from '@payloadcms/ui'

interface GalleryImage {
  url: string
  alt?: string
  id?: string
}

interface CloudinaryGalleryProps {
  path: string
  label?: string
}

export const CloudinaryGallery: React.FC<CloudinaryGalleryProps> = ({
  path,
  label,
}) => {
  const { value, setValue } = useField<GalleryImage[]>({ path })
  const [isUploading, setIsUploading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [editingAlt, setEditingAlt] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const images = value || []

  const handleUpload = useCallback(
    async (files: FileList) => {
      const imageFiles = Array.from(files).filter((file) =>
        file.type.startsWith('image/')
      )

      if (imageFiles.length === 0) {
        setError('Please upload image files')
        return
      }

      setIsUploading(true)
      setError(null)

      try {
        const uploadPromises = imageFiles.map(async (file) => {
          const formData = new FormData()
          formData.append('file', file)

          const response = await fetch('/api/cloudinary/upload', {
            method: 'POST',
            body: formData,
          })

          if (!response.ok) {
            throw new Error('Upload failed')
          }

          const data = await response.json()
          return {
            url: data.url,
            alt: file.name.replace(/\.[^/.]+$/, ''),
            id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          }
        })

        const newImages = await Promise.all(uploadPromises)
        setValue([...images, ...newImages])
      } catch (err) {
        setError('Failed to upload one or more images. Please try again.')
        console.error('Upload error:', err)
      } finally {
        setIsUploading(false)
      }
    },
    [images, setValue]
  )

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        handleUpload(files)
      }
    },
    [handleUpload]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const files = e.dataTransfer.files
      if (files && files.length > 0) {
        handleUpload(files)
      }
    },
    [handleUpload]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleRemove = useCallback(
    (index: number) => {
      const newImages = images.filter((_, i) => i !== index)
      setValue(newImages)
    },
    [images, setValue]
  )

  const handleAltChange = useCallback(
    (index: number, alt: string) => {
      const newImages = [...images]
      newImages[index] = { ...newImages[index], alt }
      setValue(newImages)
    },
    [images, setValue]
  )

  const handleMoveUp = useCallback(
    (index: number) => {
      if (index === 0) return
      const newImages = [...images]
      ;[newImages[index - 1], newImages[index]] = [
        newImages[index],
        newImages[index - 1],
      ]
      setValue(newImages)
    },
    [images, setValue]
  )

  const handleMoveDown = useCallback(
    (index: number) => {
      if (index === images.length - 1) return
      const newImages = [...images]
      ;[newImages[index], newImages[index + 1]] = [
        newImages[index + 1],
        newImages[index],
      ]
      setValue(newImages)
    },
    [images, setValue]
  )

  const handleAddUrl = useCallback(() => {
    const url = prompt('Enter image URL:')
    if (url) {
      setValue([
        ...images,
        {
          url,
          alt: '',
          id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        },
      ])
    }
  }, [images, setValue])

  return (
    <div style={{ marginBottom: '24px' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: 500,
          fontSize: '14px',
          color: '#1a1a1a',
        }}
      >
        {label || 'Gallery Images'}
      </label>

      {/* Upload Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => !isUploading && fileInputRef.current?.click()}
        style={{
          border: `2px dashed ${isDragging ? '#3b82f6' : '#d1d5db'}`,
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center',
          cursor: isUploading ? 'wait' : 'pointer',
          backgroundColor: isDragging ? '#eff6ff' : '#fafafa',
          transition: 'all 0.2s ease',
          marginBottom: '12px',
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
          disabled={isUploading}
        />

        {isUploading ? (
          <div>
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '3px solid #e5e7eb',
                borderTopColor: '#3b82f6',
                borderRadius: '50%',
                margin: '0 auto 12px',
                animation: 'spin 1s linear infinite',
              }}
            />
            <p style={{ color: '#6b7280', margin: 0 }}>Uploading...</p>
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : (
          <div>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.5"
              style={{ margin: '0 auto 12px', display: 'block' }}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <p style={{ color: '#374151', margin: '0 0 4px', fontWeight: 500 }}>
              Drop images here or click to browse
            </p>
            <p style={{ color: '#9ca3af', margin: 0, fontSize: '13px' }}>
              Upload multiple images at once
            </p>
          </div>
        )}
      </div>

      {/* Add URL Button */}
      <button
        type="button"
        onClick={handleAddUrl}
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '13px',
          color: '#6b7280',
          marginBottom: '16px',
        }}
      >
        + Add image by URL
      </button>

      {/* Error Message */}
      {error && (
        <p style={{ color: '#dc2626', fontSize: '13px', margin: '8px 0' }}>
          {error}
        </p>
      )}

      {/* Image Grid */}
      {images.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {images.map((image, index) => (
            <div
              key={image.id || index}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#f3f4f6',
                border: '1px solid #e5e7eb',
              }}
            >
              {/* Image */}
              <div
                style={{
                  aspectRatio: '1',
                  position: 'relative',
                  backgroundColor: '#e5e7eb',
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />

                {/* Action Buttons Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    display: 'flex',
                    gap: '4px',
                  }}
                >
                  {/* Move Up */}
                  <button
                    type="button"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    style={{
                      backgroundColor: index === 0 ? '#9ca3af' : '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      width: '28px',
                      height: '28px',
                      cursor: index === 0 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    title="Move up"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  </button>

                  {/* Move Down */}
                  <button
                    type="button"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === images.length - 1}
                    style={{
                      backgroundColor: index === images.length - 1 ? '#9ca3af' : '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      width: '28px',
                      height: '28px',
                      cursor: index === images.length - 1 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    title="Move down"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => handleRemove(index)}
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      width: '28px',
                      height: '28px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    title="Remove"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Index Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    borderRadius: '4px',
                    padding: '2px 8px',
                    fontSize: '12px',
                  }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Alt Text Input */}
              <div style={{ padding: '8px' }}>
                {editingAlt === index ? (
                  <input
                    type="text"
                    value={image.alt || ''}
                    onChange={(e) => handleAltChange(index, e.target.value)}
                    onBlur={() => setEditingAlt(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setEditingAlt(null)
                    }}
                    placeholder="Alt text"
                    autoFocus
                    style={{
                      width: '100%',
                      padding: '6px 8px',
                      border: '1px solid #3b82f6',
                      borderRadius: '6px',
                      fontSize: '12px',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                ) : (
                  <div
                    onClick={() => setEditingAlt(index)}
                    style={{
                      padding: '6px 8px',
                      backgroundColor: '#f9fafb',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: image.alt ? '#374151' : '#9ca3af',
                      cursor: 'text',
                      minHeight: '24px',
                    }}
                  >
                    {image.alt || 'Click to add alt text...'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {images.length === 0 && !isUploading && (
        <p
          style={{
            color: '#9ca3af',
            fontSize: '13px',
            textAlign: 'center',
            padding: '16px',
          }}
        >
          No images in gallery yet. Upload some images to get started.
        </p>
      )}
    </div>
  )
}

export default CloudinaryGallery
