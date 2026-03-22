import { notFound } from 'next/navigation'
import Link from 'next/link'
import { galleryEvents, getEventBySlug } from '@/lib/galleryData'
import GalleryLightbox from '@/app/components/GalleryLightbox'

export async function generateStaticParams() {
  return galleryEvents.map((e) => ({ slug: e.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function EventGalleryPage({ params }: Props) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) notFound()

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <div className="px-6 md:px-14 pt-16 pb-12 border-b border-[#ebebeb]">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#gallery"
            className="text-xs font-medium tracking-[0.1em] uppercase text-[#aaa] hover:text-[#0f0f0f] transition-colors duration-200 mb-8 inline-block"
          >
            ← Back
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#aaa] mb-3">
                {event.location}
              </p>
              <h1 className="text-3xl md:text-5xl font-extralight text-[#0f0f0f] tracking-tight">
                {event.title}
              </h1>
              <p className="text-sm text-[#aaa] mt-2">{event.date}</p>
            </div>
            <a
              href="https://lu.ma/0ewxklf8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#aaa] hover:text-[#0f0f0f] transition-colors whitespace-nowrap"
            >
              Register for next event →
            </a>
          </div>
        </div>
      </div>

      {/* Photo grid with lightbox */}
      <div className="px-6 md:px-14 py-16">
        <div className="max-w-6xl mx-auto">
          {event.photos.length > 0 ? (
            <GalleryLightbox
              photos={event.photos}
              videos={event.videos}
              eventTitle={event.title}
            />
          ) : (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#ebebeb]">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-[4/3] bg-[#f5f5f2]" />
                ))}
              </div>
              <p className="mt-8 text-sm text-[#ccc] text-center font-light">
                Photos will be added here after the event.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
