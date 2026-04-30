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
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">A YouTube creator is a business. They grow channels, build audiences, and compete for attention in their niche — every single day. AIR supports them through a partner program. But to stay relevant, creators needed a reason to open the platform regularly.</p>
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
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">I analyzed four direct competitors — SubSub, VidIQ, Tubular, and MyAIR — across functionality and UX. What I found was surprising: none of them covered even half of what creators said they needed. And visually, they all looked like the same product made by different teams. The gap was real, and it was wide.</p>
          </div>
          <ImageBlock src="/cases/competitor-analytics.png" alt="Competitor Analytics" />

          <div className="text-center mt-16 mb-12">
            <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">Customer Journey</p>
            <h2 className="text-3xl font-bold leading-tight mb-6">Where does competitor analysis fit?</h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">I mapped the full video creation process — from idea generation through publishing, promotion, and performance review. The finding was clear: competitor analysis happens at multiple points along the way. Before ideation — to understand what's trending in the niche.</p>
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
            <h2 className="text-3xl font-bold leading-tight mb-6">Fast enough to test. Real enough to matter.</h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">I put together the first prototype quickly — to show direction, not a final design. Ran two separate workshops: one with the KAM team, one with Support. Role-Based Scenarios, Think-Aloud, Dot Voting. Key feedback: unclear difference between Engagement metrics across screens, need for an average across all tracked channels, questions about interface language.</p>
          </div>
          <ImageBlock src="/cases/ai-prototype.png" alt="AI Prototype" />
        </Section>

        {/* User Research Setup */}
        <Section>
          <div className="text-center mb-12">
            <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">User Research</p>
            <h2 className="text-3xl font-bold leading-tight mb-6">From prioritization to users: setting up the research</h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">The goal wasn't to test whether people liked the interface. Three questions mattered: does this close the need for competitor research, is it easier than collecting data manually, and would they return weekly.</p>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto mt-4">Before each session I updated the AI prototype with real data tailored to that creator — niche, competitors, channel metrics. 9 sessions, 45–68 minutes each, fully documented.</p>
          </div>
          <ImageBlock src="/cases/research.png" alt="User Research" />
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 mt-4">
            <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{background: 'rgba(180,140,30,0.25)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fbbf24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold mb-2">9/9 Creators. Strong-GO.</h3>
            <p className="text-[#888888] text-sm leading-relaxed">9 interviews, 45–68 minutes each. 100% confirmed the need. Every creator was ready to return.</p>
          </div>
        </Section>

        {/* Solution */}
        <Section>
          <div className="text-center mb-12">
            <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">Solution</p>
            <h2 className="text-3xl font-bold leading-tight">Decisions that defined the product architecture.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                title: 'YouTube Public API Only',
                body: 'All competitor metrics are built exclusively on public data. No private agreements, no data pulled from connected channels. Any channel can be analyzed without the owner\'s permission.',
                bg: 'rgba(99,60,180,0.25)',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a78bfa" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                ),
              },
              {
                title: 'Built Inside the Flagship App',
                body: 'Not a separate service. Competitive Insights lives inside MyAIR — where creators already are. That\'s the retention mechanic.',
                bg: 'rgba(30,80,140,0.35)',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#60a5fa" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3m-6-3.75H6.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h.75c.207 0 .375-.168.375-.375v-1.5a.375.375 0 0 0-.375-.375Z" />
                  </svg>
                ),
              },
              {
                title: 'AI Competitor Selection',
                body: 'AI automatically surfaces relevant channels by niche and audience match — so creators don\'t start from a blank list.',
                bg: 'rgba(15,100,90,0.35)',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#34d399" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{background: item.bg}}>
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <p className="text-[#c8f563] text-sm mb-4 uppercase tracking-widest">The UI Solution</p>
              <h2 className="text-[32px] font-bold leading-tight mb-6">Two sections. One product.</h2>
              <p className="text-[#888888] text-base leading-relaxed mb-8">Competitive intelligence embedded into the platform creators already use — not a standalone tool they'd have to remember to open.</p>
              <div className="flex flex-col gap-3">
                {[
                  'UI built in accordance with the internal design system',
                  'Dedicated video analytics page with full metric breakdown per video on the channel',
                  'Manage columns — customize your metric set',
                  'AI competitor selection by niche and audience match',
                  'Channel analytics page for each competitor — performance over a selected period with key metrics',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{background: 'rgba(200,245,99,0.15)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#c8f563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p className="text-[#888888] text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <ImageBlock src="/cases/competitive-insights-screen.png" alt="Competitive Insights UI" />
          </div>
          <ImageBlock src="/cases/channel-videos-analytics.png" alt="Channel Videos Analytics" />
        </Section>

        {/* Measurement System */}
        <Section>
          <div className="text-center mb-12">
            <p className="text-[#c8f563] text-sm mb-3 uppercase tracking-widest">Events Library</p>
            <h2 className="text-3xl font-bold leading-tight mb-6">Before measuring, I built the measurement system.</h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto">Shipping the product wasn't enough. I needed to know what actually happens inside it.</p>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto mt-4">I created an events library from scratch — every user action documented: every modal view, every competitor added, every section opened, every skipped onboarding step. Each event mapped with its trigger, parameters, and values.</p>
            <p className="text-[#888888] text-base leading-relaxed max-w-2xl mx-auto mt-4">Then I visualized it as an event map in Miro — connecting user scenarios to specific events, showing exactly where each signal fires in the journey.</p>
          </div>
          <ImageBlock src="/cases/events-map.png" alt="Events Map" />
        </Section>

        {/* Adoption */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <SectionLabel>Adoption</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">How we measured what actually happened.</h2>
              <p className="text-[#888888] text-base leading-relaxed">Then I pulled raw production data and built my own segmentation methodology for returning users. 48.4% of the total client base engaged with the product in the first weeks. Three segments: HIGH, MED, LOW.</p>
            </div>
            <ImageBlock src="/cases/weeks.png" alt="Weekly engagement data" />
          </div>

          {/* Data findings */}
          <p className="text-white text-xl font-bold mb-6 mt-8">What the data actually showed.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                label: 'HIGH users',
                body: 'Added competitors in the first session, came back within 72 hours to add more. That early behavior was the strongest signal of long-term engagement.',
                color: '#c8f563',
                bg: 'rgba(200,245,99,0.08)',
              },
              {
                label: 'LOW users',
                body: 'Added only their own channel and never returned. The hypothesis: they thought the tool was for monitoring their own performance — not competitors. No habit formed.',
                color: '#888888',
                bg: 'rgba(255,255,255,0.04)',
              },
              {
                label: 'The conclusion',
                body: 'A user who doesn\'t add at least two competitor channels in the first session is unlikely to become active. Fix the onboarding. Not the feature.',
                color: '#60a5fa',
                bg: 'rgba(96,165,250,0.08)',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6" style={{background: item.bg}}>
                <p className="text-sm font-semibold mb-3 uppercase tracking-widest" style={{color: item.color}}>{item.label}</p>
                <p className="text-[#888888] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-10 flex flex-col gap-10">
            <p className="text-white font-medium leading-tight" style={{fontSize: 'clamp(24px, 3.5vw, 40px)'}}>
              "I've used the Analytics Center multiple times over the past few weeks, especially during preparation for launching new series. On average, I check it several times a week, and sometimes daily. It helped me see clear patterns in revenue fluctuation and content performance."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl shrink-0 overflow-hidden">
                <img src="/cases/emir-ela.jpeg" alt="Emir Ela" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold uppercase tracking-widest">Emir Ela Channel</p>
                <p className="text-[#888888] text-sm uppercase tracking-widest">February 2026</p>
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
              { value: '72h', label: 'Return window', sub: 'HIGH users came back within' },
              { value: '48.4%', label: 'Clients engaged', sub: 'Post-launch cohort' },
            ].map((m, i) => (
              <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <p className="text-3xl font-bold text-[#c8f563] mb-1">{m.value}</p>
                <p className="text-white text-sm font-medium mb-1">{m.label}</p>
                <p className="text-[#888888] text-xs">{m.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-[#888888] text-base leading-relaxed max-w-2xl mb-8">New analytics modules are now built with it as the reference point. What started as a hypothesis at a strategic session became part of AIR's core system.</p>
          <ImageBlock src="/cases/competitive-insights.png" alt="Competitive Insights" />
        </Section>

        {/* Key Takeaways */}
        {false &&
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
        </Section>}

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
