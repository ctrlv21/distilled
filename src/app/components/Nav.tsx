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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300"
        style={
          scrolled || open
            ? { background: "rgba(250,250,248,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #ebebeb" }
            : {}
        }
      >
        <nav className="w-full flex items-center justify-between md:justify-center gap-8 px-6 md:px-14">
          {/* Desktop links */}
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

          {/* Mobile: wordmark left + hamburger right */}
          <span className="md:hidden text-sm font-light tracking-tight text-[#0f0f0f]/60">
            distilled.
          </span>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-px w-5 bg-[#0f0f0f] transition-all duration-300 origin-center"
              style={{ transform: open ? 'translateY(4px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block h-px w-5 bg-[#0f0f0f] transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px w-5 bg-[#0f0f0f] transition-all duration-300 origin-center"
              style={{ transform: open ? 'translateY(-4px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: "rgba(250,250,248,0.97)", backdropFilter: "blur(12px)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-extralight text-[#0f0f0f]/60 hover:text-[#0f0f0f] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
