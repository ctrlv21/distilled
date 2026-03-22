'use client'

import { useState, useEffect, useCallback } from 'react'

interface Props {
  photos: string[]
  videos?: string[]
  eventTitle: string
}

type MediaItem = { type: 'photo'; src: string } | { type: 'video'; src: string }

export default function GalleryLightbox({ photos, videos = [], eventTitle }: Props) {
  const items: MediaItem[] = [
    ...photos.map((src) => ({ type: 'photo' as const, src })),
    ...videos.map((src) => ({ type: 'video' as const, src })),
  ]

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length])
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, prev, next, close])

  const current = items[index]

  return (
    <>
      {/* Grid */}
      <div className={`grid gap-2 ${items.length === 1 ? 'grid-cols-1' : items.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); setOpen(true) }}
            className="aspect-[4/3] w-full overflow-hidden focus:outline-none group relative rounded-xl"
          >
            {item.type === 'photo' ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={`${eventTitle} ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="relative w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photos[0]}
                  alt={`${eventTitle} video`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f0f0f">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10 p-2"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
            {index + 1} / {items.length}
          </div>

          {/* Media */}
          <div
            className="relative max-w-5xl w-full mx-6 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {current.type === 'photo' ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={current.src}
                alt={`${eventTitle} ${index + 1}`}
                className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
              />
            ) : (
              <video
                key={current.src}
                src={current.src}
                poster={photos[0] ?? undefined}
                className="max-h-[80vh] w-full max-w-full rounded-xl"
                controls
                playsInline
              />
            )}
          </div>

          {/* Prev */}
          {items.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3"
              aria-label="Previous"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Next */}
          {items.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3"
              aria-label="Next"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  )
}
