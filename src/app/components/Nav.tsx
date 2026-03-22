"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Volunteer", href: "#volunteer" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300"
      style={
        scrolled
          ? { background: "rgba(250,250,248,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #ebebeb" }
          : {}
      }
    >
      <nav className="w-full flex items-center justify-center gap-8 px-8 md:px-14">
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}
