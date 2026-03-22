'use client'

import { useEffect, useState } from 'react'

type Phase = 'entering' | 'visible' | 'exiting' | 'done'

export default function SplashScreen() {
  const [phase, setPhase] = useState<Phase>('entering')

  useEffect(() => {
    // Only show splash once per browser session
    if (sessionStorage.getItem('splashSeen')) {
      setPhase('done')
      return
    }

    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setPhase('visible'), 60)
    const t2 = setTimeout(() => setPhase('exiting'), 2000)
    const t3 = setTimeout(() => {
      setPhase('done')
      sessionStorage.setItem('splashSeen', '1')
      document.body.style.overflow = ''
    }, 2850)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[200] bg-[#fafaf8] flex items-center justify-center"
      style={{
        transform: phase === 'exiting' ? 'translateY(-100%)' : 'translateY(0)',
        transition: phase === 'exiting' ? 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      }}
    >
      <div
        style={{
          opacity: phase === 'entering' ? 0 : 1,
          transform: phase === 'entering' ? 'scale(0.92)' : 'scale(1)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Abstract logo mark — a geometric distillation symbol */}
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
            <linearGradient id="g2" x1="72" y1="0" x2="0" y2="72" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>

          {/* Outer diamond */}
          <path
            d="M36 4 L68 36 L36 68 L4 36 Z"
            stroke="url(#g1)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Inner diamond rotated */}
          <path
            d="M36 16 L56 36 L36 56 L16 36 Z"
            stroke="url(#g2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />

          {/* Center dot */}
          <circle cx="36" cy="36" r="3.5" fill="url(#g1)" />

          {/* Corner accent dots */}
          <circle cx="36" cy="4" r="2" fill="#818cf8" opacity="0.5" />
          <circle cx="68" cy="36" r="2" fill="#c084fc" opacity="0.5" />
          <circle cx="36" cy="68" r="2" fill="#f472b6" opacity="0.5" />
          <circle cx="4" cy="36" r="2" fill="#38bdf8" opacity="0.5" />

          {/* Cross lines — very light */}
          <line x1="36" y1="4" x2="36" y2="68" stroke="url(#g1)" strokeWidth="0.5" opacity="0.2" />
          <line x1="4" y1="36" x2="68" y2="36" stroke="url(#g2)" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>
    </div>
  )
}
