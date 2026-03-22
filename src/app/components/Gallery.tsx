'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { galleryEvents } from '@/lib/galleryData'
import FadeUp from './FadeUp'

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 md:px-14 py-24 md:py-32" style={{ background: '#f7f5fc' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#aaa] mb-4">
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight text-[#0f0f0f] tracking-tight">
            Past events
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {galleryEvents.map((event, i) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            >
              <Link
                href={`/gallery/${event.slug}`}
                className="group relative block aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Media */}
                {event.coverPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={event.coverPhoto}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : event.videos?.[0] ? (
                  <video
                    src={event.videos[0]}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="w-full h-full" style={{ background: '#eceaf7' }} />
                )}

                {/* Title label — visible at rest, fades out on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 group-hover:opacity-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)' }}
                >
                  <span className="text-white font-light text-lg">{event.title}</span>
                </div>

                {/* Liquid glass overlay — slides up on hover */}
                <div
                  className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  style={{
                    background: 'rgba(255,255,255,0.72)',
                    backdropFilter: 'blur(28px) saturate(200%) brightness(1.05)',
                    WebkitBackdropFilter: 'blur(28px) saturate(200%) brightness(1.05)',
                    borderTop: '1px solid rgba(255,255,255,0.8)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
                  }}
                >
                  <div className="p-6">
                    <p className="text-xs text-[#999] mb-1 tracking-wide font-medium">{event.title}</p>
                    <h3 className="text-xl font-semibold text-[#0f0f0f] leading-tight">{event.location}</h3>
                    <p className="text-sm text-[#777] mt-1 mb-4">{event.date}</p>
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#aaa]">
                      View gallery →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
