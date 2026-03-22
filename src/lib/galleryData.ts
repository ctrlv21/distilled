// TODO: Fill in actual event dates, locations, and photo paths
// Photos should be placed in /public/gallery/[slug]/ as jpg/png files
// and listed in the `photos` array for each event

export interface GalleryEvent {
  slug: string
  title: string
  date: string
  location: string
  coverPhoto: string | null  // path relative to /public
  photos: string[]            // photo paths for the event gallery page
  videos?: string[]           // optional video paths (.mov, .mp4) for the event gallery page
}

export const galleryEvents: GalleryEvent[] = [
  {
    slug: 'distilled-1',
    title: 'Distilled #1',
    date: 'February 27, 2026',
    location: 'Rafele, 7th Ave',
    coverPhoto: '/gallery/distilled-1/rafele_2026-02-27_group.jpeg',
    photos: [
      '/gallery/distilled-1/rafele_2026-02-27_group.jpeg',
      '/gallery/distilled-1/rafele_2026-02-27_venue.jpeg',
    ],
    videos: [
      '/gallery/distilled-1/rafele_2026-02-27_web.mp4',
    ],
  },
  {
    slug: 'distilled-2',
    title: 'Distilled #2',
    date: 'March 13, 2026',
    location: "Leon's, Broadway",
    coverPhoto: '/gallery/distilled-2/leons_2026-03-13_group.jpg',
    photos: [
      '/gallery/distilled-2/leons_2026-03-13_group.jpg',
      '/gallery/distilled-2/leons_2026-03-13_venue.jpg',
    ],
  },
]

export function getEventBySlug(slug: string): GalleryEvent | undefined {
  return galleryEvents.find((e) => e.slug === slug)
}
