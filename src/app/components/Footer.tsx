const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Volunteer", href: "#volunteer" },
];

const socialLinks = [
  { label: "Luma", href: "https://lu.ma/0ewxklf8" },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-14 py-12 border-t border-[#ebebeb]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <span className="text-[#0f0f0f] font-extralight italic text-lg tracking-tight">
            distilled
          </span>

          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.1em] uppercase text-[#aaa] hover:text-[#0f0f0f] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-[0.1em] uppercase text-[#aaa] hover:text-[#0f0f0f] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#ebebeb] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#ccc] font-light">© 2026 Distilled. All rights reserved.</p>
          <p className="text-xs text-[#ccc] font-light">New York City</p>
        </div>
      </div>
    </footer>
  );
}
