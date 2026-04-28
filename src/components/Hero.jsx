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
    <section className="pb-0">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-[32px] font-medium leading-[40px] tracking-tight max-w-[640px] mb-5">
          <span className="text-[#888888]">So hi,</span>
          <br />
          I&apos;m Masha Osadcha,
          <br />
          Product Designer
        </h1>

        <p className="text-[#888888] text-sm leading-relaxed max-w-[450px] mb-6">
          I help products make sense — for users, for business, and for the people who build them. I don&apos;t just build systems — I make them intuitive, scalable, and human, across AI infrastructure, Web3, and beyond.
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
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
            href="https://t.me/masherchic"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            Contact me
          </a>
          <a
            href="https://linkedin.com/in/mary-osadcha"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-[#2a2a2a] rounded-xl flex items-center justify-center hover:border-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="relative border-t border-[#2a2a2a]">
        <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 bg-[#0d0d0d] px-4 text-white text-base font-medium whitespace-nowrap">
          Users I&apos;ve designed for
        </p>
        <div className="overflow-hidden border-b border-[#2a2a2a] py-8">
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
