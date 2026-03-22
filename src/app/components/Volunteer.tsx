'use client'

import { useEffect, useRef } from 'react'

export default function Volunteer() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (typeof e.data === 'object' && e.data?.type === 'tally-form-height' && iframeRef.current) {
        iframeRef.current.height = String(e.data.height)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <section id="volunteer" className="px-6 md:px-14 py-24 md:py-32" style={{ background: '#fafaf8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="gradient-border-wrap">
          <div
            className="rounded-[24px] p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
            style={{ background: '#ffffff' }}
          >
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#aaa] mb-8">
                Get Involved
              </p>
              <h2 className="text-3xl md:text-4xl font-extralight text-[#0f0f0f] tracking-tight mb-8 leading-tight">
                Help us build
                <br />
                the community
              </h2>
              <p className="text-lg text-[#777] font-light leading-relaxed mb-10">
                Distilled is built by the community, for the community. Help with
                logistics, venues, or bring your network.
              </p>

              <div className="flex flex-col gap-5 border-t border-[#ebebeb] pt-8">
                {[
                  { label: "Venue Partners", desc: "Access to a NYC space for 50–150 people" },
                  { label: "Logistics", desc: "Day-of setup, coordination, and operations" },
                  { label: "Community", desc: "Bring your network and grow ours" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-[#0f0f0f]">{item.label}</span>
                    <span className="text-sm text-[#aaa] font-light">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <iframe
                ref={iframeRef}
                src="https://tally.so/embed/1AE8Kb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="500"
                style={{ border: 'none' }}
                title="Volunteer form"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
