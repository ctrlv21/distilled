import FadeUp from './FadeUp'

interface Sponsor {
  name: string
  logo: string
  url: string
}

const sponsors: Sponsor[] = [
  {
    name: 'Andromeda',
    logo: '/logos/andromeda.avif',
    url: 'https://andromeda.ai',
  },
  {
    name: 'Scale AI',
    logo: '/logos/Scale AI Logo.svg',
    url: 'https://scale.com',
  },
]

export default function Sponsors() {
  return (
    <section className="px-6 md:px-14 py-20 md:py-28" style={{ background: '#fafaf8' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#888] mb-12 text-center">
            Supported by
          </p>

          <div className="flex flex-wrap items-stretch justify-center gap-4 md:gap-6">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-5 rounded-2xl px-16 py-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{ background: '#0f0f0f', minWidth: '220px' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-9 w-auto object-contain"
              />
              <span className="text-xs tracking-[0.15em] uppercase font-medium text-white/40 group-hover:text-white/70 transition-colors duration-200">
                {sponsor.name}
              </span>
            </a>
          ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
