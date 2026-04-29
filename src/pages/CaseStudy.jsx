import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

function SectionLabel({ children }) {
  return <p className="text-[#888888] text-sm mb-3 uppercase tracking-widest">{children}</p>
}

function ImageBlock({ src, alt }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-[#161616]">
      {src ? <img src={src} alt={alt || ''} className="w-full object-cover" /> : <div className="w-full aspect-video" />}
    </div>
  )
}

function Section({ children, className = '' }) {
  return <section className={`py-16 border-t border-[#2a2a2a] ${className}`}>{children}</section>
}

export default function CaseStudy() {
  const { slug } = useParams()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-[#0d0d0d] text-white font-sans min-h-screen">
      <Nav scrolled={scrolled} />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">

        {/* Back */}
        <a href="/" className="inline-flex items-center gap-2 text-[#888888] text-sm hover:text-white transition-colors mb-12">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to projects
        </a>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6">
              <img src="/logos/air-icon.png" alt="AIR" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[40px] font-bold leading-[1.15] tracking-tight mb-6">
              Competitive Analytics Hub for YouTube Creators
            </h1>
            <p className="text-[#888888] text-base leading-relaxed mb-6">
              A competitive analytics tool for YouTube creators — built from scratch, validated with real creators, and measured end-to-end in production, achieving 77% weekly return rate among power users.
            </p>
            <div className="flex flex-wrap gap-2">
              {['0→1', 'Analytics', 'Creator Economy', 'C-level'].map(tag => (
                <span key={tag} className="text-sm px-4 py-2 bg-[#222222] rounded-xl text-white">{tag}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-[#2a2a2a]">
              <div>
                <p className="text-[#888888] text-sm mb-1">Role</p>
                <p className="text-white font-medium">Staff Product Designer</p>
              </div>
              <div>
                <p className="text-[#888888] text-sm mb-1">Timeline</p>
                <p className="text-white font-medium">6 months</p>
              </div>
              <div>
                <p className="text-[#888888] text-sm mb-1">Team</p>
                <p className="text-white font-medium">8 people</p>
              </div>
              <div>
                <p className="text-[#888888] text-sm mb-1">Market</p>
                <p className="text-white font-medium">Global</p>
              </div>
            </div>
            <div>
              <p className="text-[#888888] text-sm mb-3">Deliverables</p>
              <div className="flex flex-wrap gap-2">
                {['Competitor Analysis', 'Customer Journey Map', 'API Feasibility', 'Secondary Research', 'AI Prototype', 'Design', 'Events Map', 'Adoption Methodology'].map(d => (
                  <span key={d} className="text-[#888888] text-sm px-3 py-1 border border-[#2a2a2a] rounded-full">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The Challenge */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">—</h2>
              <p className="text-[#888888] text-base leading-relaxed">—</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <div className="w-8 h-8 rounded-lg bg-[#2a2a2a] mb-4" />
                <h3 className="text-base font-semibold mb-2">—</h3>
                <p className="text-[#888888] text-sm leading-relaxed">—</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Research */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <SectionLabel>Research</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">—</h2>
              <p className="text-[#888888] text-base leading-relaxed">—</p>
            </div>
          </div>
          <ImageBlock />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <div className="w-full aspect-video bg-[#2a2a2a] rounded-xl mb-4" />
                <h3 className="text-base font-semibold mb-2">—</h3>
                <p className="text-[#888888] text-sm leading-relaxed">—</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Solution / Design */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">—</h2>
              <p className="text-[#888888] text-base leading-relaxed mb-4">—</p>
              <p className="text-[#888888] text-base leading-relaxed">—</p>
            </div>
          </div>
          <ImageBlock />
        </Section>

        {/* Results */}
        <Section>
          <div className="mb-12">
            <SectionLabel>Results</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight">—</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '77%', label: 'Weekly return rate', sub: 'Among power users' },
              { value: '6×', label: 'Higher consistency', sub: 'vs low-engagement' },
              { value: '—', label: '—', sub: '—' },
              { value: '—', label: '—', sub: '—' },
            ].map((m, i) => (
              <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <p className="text-3xl font-bold text-[#c8f563] mb-1">{m.value}</p>
                <p className="text-white text-sm font-medium mb-1">{m.label}</p>
                <p className="text-[#888888] text-xs">{m.sub}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Key Takeaways */}
        <Section>
          <SectionLabel>Key Takeaways</SectionLabel>
          <h2 className="text-3xl font-bold leading-tight mb-10">—</h2>
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-[#888888] text-sm font-mono w-6 shrink-0">{i}</span>
                <div>
                  <h3 className="text-base font-semibold mb-1">—</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">—</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Back */}
        <div className="pt-8">
          <a href="/" className="inline-flex items-center gap-2 text-[#888888] text-sm hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to all projects
          </a>
        </div>

      </main>

      <Footer />
    </div>
  )
}
