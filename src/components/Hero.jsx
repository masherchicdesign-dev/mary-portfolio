const COMPANIES = [
  { name: 'AIR MEDIA-TECH', domain: 'YouTube Creators', logo: '/logos/air-media.svg' },
  { name: 'Sage Seller', domain: 'Amazon Sellers', logo: '/logos/sage-seller.svg' },
  { name: 'Yves Rocher', domain: 'Beauty & Retailers', logo: '/logos/yves-rocher.svg', logoClass: 'h-6' },
  { name: 'SONY', domain: 'Internal Learners', logo: '/logos/sony.svg', logoClass: 'h-3' },
  { name: 'Kyivstar', domain: 'B2C Customers', logo: '/logos/kyivstar.svg', logoClass: 'h-8' },
  { name: 'Royalty', domain: 'Crypto Investors', logo: '/logos/royalty.svg' },
]

export default function Hero() {
  const items = [...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES]

  return (
    <section className="pt-36 pb-0">
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h1 className="text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.15] tracking-tight max-w-3xl mb-6">
          <span className="text-[#888888]">So hi,</span>
          <br />
          I&apos;m Mary Osadcha,
          <br />
          Product Designer
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

      <div className="relative border-t border-[#2a2a2a]">
        <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 bg-[#0d0d0d] px-4 text-white text-base font-medium whitespace-nowrap">
          Users I&apos;ve designed for
        </p>
        <div className="overflow-hidden border-b border-[#2a2a2a] py-8 mt-6">
          <div className="marquee-track">
            {items.map((item, i) => (
              <span key={i} className="flex items-center px-8 whitespace-nowrap">
                <span className="flex flex-col items-center gap-2">
                  <span className="flex items-center justify-center h-8">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.name}
                        className={`${item.logoClass ?? 'h-5'} w-auto object-contain brightness-0 invert`}
                      />
                    ) : (
                      <span className="text-white text-sm font-medium">{item.name}</span>
                    )}
                  </span>
                  <span className="text-[#888888] text-xs tracking-widest uppercase">{item.domain}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
