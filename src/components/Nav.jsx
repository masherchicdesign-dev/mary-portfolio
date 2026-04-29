export default function Nav({ scrolled }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0d0d]/80 backdrop-blur-md border-b border-[#2a2a2a]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white">
          <span style={{fontFamily: "'Tiempos Headline', serif", fontWeight: 500}} className="text-base tracking-tight">Osadcha</span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="#work"
              className="text-[#888888] hover:text-white text-sm transition-colors"
            >
              Work
            </a>
            <a
              href="https://drive.google.com/file/d/1WHZQf2-D0gfG2xbuB0_rOr0yZ_o_okiJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-white text-sm transition-colors"
            >
              CV
            </a>
            <a
              href="https://linkedin.com/in/mary-osadcha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <a
            href="https://t.me/masherchic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-[#2a2a2a] rounded-full text-white hover:border-white transition-colors inline-flex items-center gap-2"
          >
            Get in touch
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}
