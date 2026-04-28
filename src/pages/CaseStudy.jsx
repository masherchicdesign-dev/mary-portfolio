import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

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
        <a href="/" className="inline-flex items-center gap-2 text-[#888888] text-sm hover:text-white transition-colors mb-12">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to projects
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6">
              <img src="/logos/air-icon.png" alt="AIR" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[40px] font-bold leading-[1.15] tracking-tight mb-6">
              Competetive Insights
            </h1>
            <p className="text-[#888888] text-base leading-relaxed mb-6">
              Initiated and led a 0→1 analytics product for YouTube creators — from C-level workshop and API feasibility research to launch and adoption measurement.
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
                <p className="text-white font-medium">Product Designer</p>
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
                {['Web App', 'Design System', 'User Research', 'Analytics', 'C-level Workshop'].map(d => (
                  <span key={d} className="text-sm px-4 py-2 bg-[#222222] rounded-xl text-white">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-2xl overflow-hidden">
          <img src="/cases/competitive-insights.png" alt="Competetive Insights" className="w-full object-cover" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
