'use client'

import React, { useState, useCallback, useRef } from 'react'
import { useField } from '@payloadcms/ui'

interface CloudinaryUploadProps {
  path: string
  label?: string
  required?: boolean
}

export const CloudinaryUpload: React.FC<CloudinaryUploadProps> = ({
  path,
  label,
  required,
}) => {
  const { value, setValue } = useField<string>({ path })
  const [isUploading, setIsUploading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = useCallback(
    async (file: File) => {
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file')
        return
      }

      setIsUploading(true)
      setError(null)

      try {
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
        setValue(data.url)
      } catch (err) {
        setError('Failed to upload image. Please try again.')
        console.error('Upload error:', err)
      } finally {
        setIsUploading(false)
      }
    },
    [setValue]
  )

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        handleUpload(file)
      }
    },
    [handleUpload]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files?.[0]
      if (file) {
        handleUpload(file)
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

  const handleRemove = useCallback(() => {
    setValue('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }, [setValue])

  const handleUrlChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

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
        {label || 'Image'}
        {required && <span style={{ color: '#dc2626', marginLeft: '4px' }}>*</span>}
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
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="M12 12v9" />
              <path d="m16 16-4-4-4 4" />
            </svg>
            <p style={{ color: '#374151', margin: '0 0 4px', fontWeight: 500 }}>
              Drop an image here or click to browse
            </p>
            <p style={{ color: '#9ca3af', margin: 0, fontSize: '13px' }}>
              PNG, JPG, GIF, WebP up to 10MB
            </p>
          </div>
        )}
      </div>

      {/* URL Input as fallback */}
      <div style={{ marginBottom: '12px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '4px',
            fontSize: '12px',
            color: '#6b7280',
          }}
        >
          Or paste image URL directly:
        </label>
        <input
          type="text"
          value={value || ''}
          onChange={handleUrlChange}
          placeholder="https://res.cloudinary.com/..."
          style={{
            width: '100%',
            padding: '10px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p style={{ color: '#dc2626', fontSize: '13px', margin: '8px 0' }}>
          {error}
        </p>
      )}

      {/* Image Preview */}
      {value && (
        <div
          style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#f3f4f6',
            border: '1px solid #e5e7eb',
          }}
        >
          <img
            src={value}
            alt="Preview"
            style={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
              display: 'block',
            }}
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          <button
            type="button"
            onClick={handleRemove}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Remove
          </button>
          <div
            style={{
              padding: '12px',
              backgroundColor: 'white',
              borderTop: '1px solid #e5e7eb',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '12px',
                color: '#6b7280',
                wordBreak: 'break-all',
              }}
            >
              {value}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CloudinaryUpload
