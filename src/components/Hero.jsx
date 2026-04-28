const COMPANIES = [
  { name: 'AIR MEDIA-TECH', domain: 'YouTube Creators', logo: '/logos/air-media.svg' },
  { name: 'Sage Seller', domain: 'Amazon Sellers', logo: '/logos/sage-seller.svg' },
  { name: 'Yves Rocher', domain: 'Beauty & Retail', logo: '/logos/yves-rocher.svg', logoClass: 'h-10' },
  { name: 'SONY', domain: 'Consumer Electronics', logo: '/logos/sony.svg', logoClass: 'h-4' },
  { name: 'Kyivstar', domain: 'Telecom', logo: '/logos/kyivstar.svg', logoClass: 'h-10' },
  { name: 'Royalty', domain: 'Crypto Investors', logo: null },
  { name: 'Morshinska', domain: 'Promoters', logo: null },
]

export default function Hero() {
  const items = [...COMPANIES, ...COMPANIES]

  return (
    <section className="pt-36 pb-0">
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-[#888888] text-sm tracking-widest uppercase mb-6">
          Staff Product Designer · UX Architect
        </p>

        <h1 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] tracking-tight max-w-3xl mb-6">
          So hi, I&apos;m Mary Osadcha
        </h1>

        <p className="text-[#888888] text-lg leading-relaxed max-w-2xl mb-10">
          From mapping ecosystems and uncovering drop-off through data to
          translating insights into scalable product decisions.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {['8+ years', 'Creator Economy', '0→1 launches', 'AI prototyping'].map(
            (tag) => (
              <span
                key={tag}
                className="text-[#888888] text-sm px-3 py-1 border border-[#2a2a2a] rounded-full"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="px-6 py-3 bg-white text-black text-sm font-semibold rounded hover:bg-gray-100 transition-colors"
          >
            View Work
          </a>
          <a
            href="/cv"
            className="px-6 py-3 border border-[#2a2a2a] text-white text-sm font-semibold rounded hover:border-white transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="border-t border-[#2a2a2a]">
        <p className="text-center text-[#888888] text-sm py-4 border-b border-[#2a2a2a]">
          Users I&apos;ve designed for
        </p>
        <div className="overflow-hidden border-b border-[#2a2a2a] py-8">
          <div className="marquee-track">
            {items.map((item, i) => (
              <span key={i} className="flex items-center gap-12 px-12 whitespace-nowrap">
                <span className="flex flex-col items-center gap-2">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className={`${item.logoClass ?? 'h-6'} w-auto object-contain opacity-60`}
                    />
                  ) : (
                    <span className="text-white text-sm font-medium">{item.name}</span>
                  )}
                  <span className="text-[#888888] text-xs tracking-widest uppercase">{item.domain}</span>
                </span>
                <span className="text-[#2a2a2a]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
