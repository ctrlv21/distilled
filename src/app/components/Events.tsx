'use client'

import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

// TODO: Update events array with new event data as meetups are scheduled

interface Event {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  location: string;
  lumaUrl: string;
  description?: string;
}

const events: Event[] = [
  {
    id: "march-2026",
    day: "26",
    month: "Mar",
    year: "2026",
    title: "Distilled Meetup",
    location: "New York City",
    lumaUrl: "https://lu.ma/0ewxklf8",
    description:
      "An evening of high-signal conversation with founders, researchers, and builders at the frontier of AI.",
  },
];

export default function Events() {
  return (
    <section id="events" className="px-6 md:px-14 py-24 md:py-32" style={{ background: '#fafaf8' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#aaa] mb-4">
                Upcoming Events
              </p>
              <h2 className="text-3xl md:text-4xl font-extralight text-[#0f0f0f] tracking-tight">
                What&apos;s next
              </h2>
            </div>
            <a
              href="https://lu.ma/0ewxklf8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#aaa] hover:text-[#0f0f0f] transition-colors duration-200"
            >
              View all on Luma →
            </a>
          </div>
        </FadeUp>

        <div className="flex flex-col">
          {events.map((event, index) => (
            <motion.a
              key={event.id}
              href={event.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className={`group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 py-10 border-t border-[#ebebeb] px-4 -mx-4 hover:bg-[#f5f5f2] rounded-xl transition-colors duration-200 ${
                index === events.length - 1 ? "border-b border-[#ebebeb]" : ""
              }`}
            >
              <div className="flex-shrink-0 flex flex-row sm:flex-col items-baseline sm:items-start gap-3 sm:gap-0 sm:w-20">
                <span className="text-5xl font-extralight text-[#0f0f0f] leading-none tracking-tight">
                  {event.day}
                </span>
                <div className="flex flex-row sm:flex-col gap-1">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#aaa]">
                    {event.month}
                  </span>
                  <span className="text-xs tracking-wide text-[#999] sm:mt-0.5">
                    {event.year}
                  </span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-[#ebebeb] flex-shrink-0" />

              <div className="flex-1">
                <h3 className="text-lg font-medium text-[#0f0f0f] mb-1">{event.title}</h3>
                <p className="text-sm text-[#666] mb-3">{event.location}</p>
                {event.description && (
                  <p className="text-sm text-[#555] leading-relaxed max-w-lg">
                    {event.description}
                  </p>
                )}
              </div>

              <div className="hidden sm:flex flex-shrink-0">
                <span className="text-sm text-[#ccc] group-hover:text-[#0f0f0f] group-hover:translate-x-0.5 transition-all duration-200">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {events.length === 0 && (
          <p className="py-16 text-center text-[#aaa] font-light">
            No upcoming events scheduled. Check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
