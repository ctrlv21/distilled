'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[72px] overflow-hidden">

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb-1 absolute rounded-full opacity-30"
          style={{
            width: 600,
            height: 600,
            top: '5%',
            left: '-10%',
            background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="orb-2 absolute rounded-full opacity-25"
          style={{
            width: 500,
            height: 500,
            top: '20%',
            right: '-8%',
            background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          className="orb-3 absolute rounded-full opacity-20"
          style={{
            width: 400,
            height: 400,
            bottom: '10%',
            left: '30%',
            background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
        <motion.h1
          className="flex flex-col items-center gap-1 leading-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease }}
        >
          <span
            className="text-[#0f0f0f]/40 font-light"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.75rem)', letterSpacing: '0.01em' }}
          >
            welcome to
          </span>
          <span
            className="gradient-text font-extralight italic tracking-[-0.03em]"
            style={{ fontSize: 'clamp(4.5rem, 13vw, 10rem)', lineHeight: 0.92 }}
          >
            distilled.
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-[#0f0f0f]/50 font-light leading-relaxed max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, ease, delay: 0.2 }}
        >
          Good people, good conversations, New York City.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.38 }}
        >
          <a
            href="https://lu.ma/0ewxklf8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-[#0f0f0f] text-white px-6 py-3 rounded-full hover:bg-[#333] transition-colors duration-200"
          >
            Register
          </a>
        </motion.div>
      </div>
    </section>
  )
}
