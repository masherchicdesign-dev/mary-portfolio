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
              {['Ownership · 0→1', 'API Feasibility', 'Full Cycle Design'].map(tag => (
                <span key={tag} className="text-sm px-3 py-1.5 rounded-lg text-white font-medium backdrop-blur-md" style={{background: 'rgba(50,50,50,0.75)'}}>{tag}</span>
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
        {false && <Section>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight mb-6">Creators were researching competitors manually for hours.</h2>
            <p className="text-[#888888] text-base leading-relaxed">YouTube creators were already analyzing competitors — manually, daily, across multiple tabs and spreadsheets. AIR had the data to make this effortless. But there was no product connecting the two, and no one had been asked to build it.<br /><br />The mission: create a tool where competitive intelligence isn't a separate workflow — it's built into the platform creators already use.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'YouTube Data API Only',
                body: 'All competitor metrics are built exclusively on public YouTube data — no private partnerships, no third-party agreements, no data creators haven\'t already made public themselves.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                ),
              },
              {
                title: '100% Validated Before Build',
                body: 'Every interviewed creator confirmed the need before a single line of code was written. No assumptions. No guesswork. Just evidence.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                ),
              },
              {
                title: 'End-to-End Ownership',
                body: 'From the first C-level workshop to post-launch adoption measurement — initiated, researched, designed, and measured by one designer.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <div className="w-8 h-8 rounded-lg bg-[#2a2a2a] mb-4 flex items-center justify-center text-[#888888]">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>}

        {/* Context */}
        <Section>
          <div className="text-center mb-12">
            <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">Audience & Domain</p>
            <h2 className="text-3xl font-bold leading-tight mb-6">AIR is the largest YouTube creators ecosystem in Ukraine.</h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">A YouTube creator is a business. They monetize content, grow channels, and compete for audience attention in their niche — every single day. AIR helps them with monetization through a partner program. But to stay relevant, creators needed a reason to open the platform regularly.</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-3xl p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl p-6">
                <p className="text-[#888888] text-sm mb-2 uppercase tracking-widest">The strategic question</p>
                <p className="text-white text-base font-medium leading-relaxed">"What do we build next to improve retention?"</p>
              </div>
              <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl p-6">
                <p className="text-[#888888] text-sm mb-2 uppercase tracking-widest">My hypothesis</p>
                <p className="text-white text-base font-medium leading-relaxed">A competitive analytics hub built directly inside MyAIR. Not a separate tool — a reason to come back every week.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Research */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
            <div>
              <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">Research</p>
              <h2 className="text-3xl font-bold leading-tight mb-6">Strategic Workshop</h2>
              <p className="text-[#888888] text-base leading-relaxed">To understand what was possible, what wasn't, and what was actually needed — I brought the stakeholders together. A workshop with the internal team: how they see the product, what features they want, what they'd already tried.</p>
            </div>
            <ImageBlock src="/cases/workshop.png" alt="Workshop" />
          </div>
          <div className="text-center mt-16 mb-12">
            <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">Competitor Analysis</p>
            <h2 className="text-3xl font-bold leading-tight mb-6">And all of them looked the same — and equally mediocre.</h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">Then I went to the market. A detailed analysis — functional and UX. SubSub, VidIQ, Tubular, MyAIR. An unexpected insight: not all competitors had the majority of features discussed in the workshop. Gap confirmed.</p>
          </div>
          <ImageBlock src="/cases/competitor-analytics.png" alt="Competitor Analytics" />

          <div className="text-center mt-16 mb-12">
            <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">Customer Journey</p>
            <h2 className="text-3xl font-bold leading-tight mb-6">Where does competitor analysis fit?</h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">I mapped the full video creation cycle — from idea generation through publishing, promotion, and performance review. The finding was clear: competitor analysis happens at multiple points in the cycle. Before ideation — to understand what's trending in the niche.</p>
            <div className="mt-6 p-5 bg-[#161616] border border-[#2a2a2a] rounded-2xl max-w-2xl mx-auto text-left">
              <p className="text-[#888888] text-sm mb-1 uppercase tracking-widest">Observation → Design decision</p>
              <p className="text-white text-sm leading-relaxed">Competitor research isn't a one-time task — it's a recurring ritual. Building it into MyAIR means it becomes part of the workflow, not an interruption to it.</p>
            </div>
          </div>
          <ImageBlock src="/cases/cjm.png" alt="Customer Journey Map" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">
            <div>
              <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">Turning Point</p>
              <h2 className="text-3xl font-bold leading-tight mb-6">YouTube Legacy</h2>
              <p className="text-[#888888] text-base leading-relaxed">"Figure out how to stay within YouTube's policies — and we'll build it." I went through all competitors not by screens, but by data sources. Everyone pulls the same thing — exclusively from YouTube's public API. No closed partnerships. No violations. Which means we can do the same.</p>
            </div>
            <ImageBlock src="/cases/api.png" alt="YouTube API" />
          </div>

        </Section>

        {/* AI Prototype */}
        <Section>
          <div className="text-center mb-12">
            <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">AI Prototype Testing</p>
            <h2 className="text-3xl font-bold leading-tight mb-6">To show direction, not a final design.</h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">I built the first prototype quickly — to show direction, not a final design. Ran two separate workshops: one with the KAM team, one with Support. Role-Based Scenarios, Think-Aloud, Dot Voting. Key feedback: unclear difference between Engagement metrics across screens, need for an average across all tracked channels, questions about interface language.</p>
          </div>
          <ImageBlock src="/cases/ai-prototype.png" alt="AI Prototype" />
        </Section>

        {/* Solution */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">Two decisions that defined the product architecture.</h2>
              <p className="text-[#888888] text-base leading-relaxed mb-4"><span className="text-white font-medium">Solution 1 — YouTube public API only.</span> All competitor metrics are built exclusively on public data. No private agreements, no data pulled from connected channels. This isn't a limitation — it's an advantage: any channel can be analyzed without the owner's permission.</p>
              <p className="text-[#888888] text-base leading-relaxed"><span className="text-white font-medium">Solution 2 — built inside the flagship app.</span> Not a separate service. Competitive Insights lives inside MyAIR — where creators already are. That's the retention mechanic.</p>
            </div>
          </div>
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 mb-8">
            <h3 className="text-base font-semibold mb-2">9/9 Creators. Strong-GO.</h3>
            <p className="text-[#888888] text-sm leading-relaxed">9 interviews, 45–68 minutes each. 100% confirmed the need. Every creator was ready to return. After a prioritization workshop — stakeholder voting, cut what wasn't needed, defined the MVP scope.</p>
          </div>
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8 mb-8">
            <p className="text-[#888888] text-sm mb-4">UI Solution — two sections, one product</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-white font-medium mb-2">Data tracker</p>
                <p className="text-[#888888] text-sm leading-relaxed">Competitor channel comparison: Views Growth, Avg. Views per video, Views by Long / Shorts / Live, Engagement, Revenue. Manage columns — customize the metric set. My channel toggle — compare yourself against competitors in a single table.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-2">Competitors hub</p>
                <p className="text-[#888888] text-sm leading-relaxed">List of competitors with Niche, Topics, and Country tags. AI competitors selection automatically surfaces relevant channels by niche and audience match.</p>
              </div>
            </div>
          </div>
          <ImageBlock src="/cases/competitive-insights.png" alt="Competitive Insights UI" />
        </Section>

        {/* Adoption */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <SectionLabel>Adoption</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">"The feature worked. The onboarding failed. Those are two different problems."</h2>
              <p className="text-[#888888] text-base leading-relaxed">After launch, I didn't stop at "shipped." I built an events library — a full analytics architecture covering every event and parameter in the product. Then I pulled raw production data and built my own segmentation methodology.</p>
              <p className="text-[#888888] text-base leading-relaxed mt-4">484 users. Three segments. 93% LOW — not because the feature was bad. 316 people skipped the onboarding modal and never reached the product.</p>
              <p className="text-[#888888] text-base leading-relaxed mt-4">The conclusion that changed the direction: fix the onboarding, not the feature.</p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { segment: 'HIGH', users: '7', pct: '1.4%', behavior: '77% weekly return rate', color: '#c8f563' },
                { segment: 'MED', users: '37', pct: '7.6%', behavior: 'Growth potential', color: '#888888' },
                { segment: 'LOW', users: '440', pct: '90.9%', behavior: 'Skipped onboarding', color: '#444' },
              ].map((row) => (
                <div key={row.segment} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5 flex items-center gap-6">
                  <span className="text-sm font-mono font-bold w-10 shrink-0" style={{color: row.color}}>{row.segment}</span>
                  <span className="text-white text-sm font-medium w-8 shrink-0">{row.users}</span>
                  <span className="text-[#888888] text-sm w-12 shrink-0">{row.pct}</span>
                  <span className="text-[#888888] text-sm">{row.behavior}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-10 flex flex-col gap-10">
            <p className="text-white font-medium leading-tight" style={{fontSize: 'clamp(24px, 3.5vw, 40px)'}}>
              "I've used the Analytics Center multiple times over the past few weeks, especially during preparation for launching new series. On average, I check it several times a week, and sometimes daily. It helped me see clear patterns in revenue fluctuation and content performance."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] shrink-0 overflow-hidden">
                <div className="w-full h-full" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold uppercase tracking-widest">Olesia</p>
                <p className="text-[#888888] text-sm uppercase tracking-widest">Emir Ela Channel · February 2026</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Results */}
        <Section>
          <div className="mb-12">
            <SectionLabel>Impact</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight max-w-xl">Competitive Insights became the benchmark product inside the company.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { value: '77%', label: 'Weekly return rate', sub: 'Among power users' },
              { value: '6×', label: 'Higher consistency', sub: 'vs low-engagement' },
              { value: '9/9', label: 'Creator interviews', sub: 'Strong-GO validation' },
              { value: '484', label: 'Users analyzed', sub: 'Post-launch cohort' },
            ].map((m, i) => (
              <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <p className="text-3xl font-bold text-[#c8f563] mb-1">{m.value}</p>
                <p className="text-white text-sm font-medium mb-1">{m.label}</p>
                <p className="text-[#888888] text-xs">{m.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-[#888888] text-base leading-relaxed max-w-2xl">New analytics modules are now built with it as the reference point. What started as a hypothesis at a strategic session became part of AIR's core system.</p>
        </Section>

        {/* Key Takeaways */}
        <Section>
          <SectionLabel>Key Takeaways</SectionLabel>
          <h2 className="text-3xl font-bold leading-tight mb-10 max-w-xl">What this project proved.</h2>
          <div className="flex flex-col gap-6">
            {[
              {
                title: 'Feasibility is a designer\'s job.',
                body: 'If you don\'t verify the technical constraint yourself, it stays an excuse. The YT API research removed skepticism faster than any presentation could.',
              },
              {
                title: 'Adoption and engagement are different things.',
                body: '93% LOW adoption doesn\'t mean the feature failed. It means there\'s a specific, nameable problem — and a specific fix.',
              },
              {
                title: 'Retrospective research closes the loop.',
                body: 'Without going back to users after launch, you never know if your hypotheses were right.',
              },
              {
                title: 'A designer who measures has more influence than a designer who only designs.',
                body: '',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-[#888888] text-sm font-mono w-6 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                  {item.body && <p className="text-[#888888] text-sm leading-relaxed">{item.body}</p>}
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
