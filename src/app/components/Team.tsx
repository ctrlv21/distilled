'use client'

import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

interface TeamMember {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  twitter?: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  {
    id: "vipul",
    name: "Vipul Gupta",
    role: "Organizer",
    company: "Scale",
    photo: "/team/vipul.jpg",
    twitter: "https://x.com/vipul_1011",
  },
  {
    id: "rucha",
    name: "Rucha Gavaskar",
    role: "Community Builder",
    company: "JP Morgan",
    photo: "/team/rucha.jpg",
    twitter: "https://x.com/ruchagav_",
  },
  {
    id: "madhuri",
    name: "Madhuri Popuri",
    role: "Community Builder",
    company: "Andromeda",
    photo: "/team/madhuri.jpg",
    twitter: "https://x.com/alastor_madeye_",
  },
  {
    id: "puyuan",
    name: "Puyuan Peng",
    role: "Community Builder",
    company: "Meta",
    photo: "/team/puyuan.jpg",
    twitter: "https://x.com/PuyuanPeng",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="px-6 md:px-14 py-24 md:py-32"
      style={{ background: "#fafaf8" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extralight text-[#0f0f0f] tracking-tight">
            Meet the team
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="flex flex-col items-center text-center rounded-2xl px-6 pt-8 pb-6"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 2px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <div
                className="w-24 h-24 rounded-full overflow-hidden mb-5"
                style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.06)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-sm font-semibold text-[#0f0f0f] leading-tight">
                {member.name}
              </h3>
              <p className="text-xs font-medium text-[#555] mt-1">{member.role}</p>
              <p className="text-xs text-[#bbb] mt-0.5 tracking-wide uppercase" style={{ fontSize: '10px' }}>{member.company}</p>

              <div className="flex gap-3 mt-5 pt-4 border-t border-[#f0f0f0] w-full justify-center">
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ccc] hover:text-[#0f0f0f] transition-colors duration-200"
                    aria-label="X"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.993l4.256 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ccc] hover:text-[#0f0f0f] transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
