import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

function SectionLabel({ children, id }) {
  return (
    <p id={id} className="inline-block text-white text-xs px-3 py-1 border border-[#2a2a2a] rounded-full uppercase tracking-widest mb-4">
      {children}
    </p>
  )
}

function ImageBlock({ src, alt, onClick }) {
  return (
    <div
      className={`w-full rounded-2xl overflow-hidden bg-[#161616] ${src ? 'cursor-zoom-in' : ''}`}
      onClick={() => src && onClick && onClick(src, alt)}
    >
      {src
        ? <img src={src} alt={alt || ''} className="w-full object-cover" />
        : <div className="w-full aspect-video" />}
    </div>
  )
}

function Section({ children, className = '', id = '' }) {
  return (
    <section id={id} className={`py-16 border-t border-[#2a2a2a] ${className}`}>
      {children}
    </section>
  )
}

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6 sm:p-12"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-[#161616] border border-[#2a2a2a]"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt || ''} className="w-full object-contain" />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0d0d0d]/80 flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function CreatorsEcosystem() {
  const [scrolled, setScrolled] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-[#0d0d0d] text-white font-sans min-h-screen">
      <Nav scrolled={scrolled} />
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

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
              <img src="/logos/air-icon.svg" alt="AIR" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[40px] font-bold leading-[1.15] tracking-tight mb-6">
              AIR Creators Ecosystem
            </h1>
            <div className="w-fit">
              <p className="text-[#888888] text-base leading-relaxed mb-6 max-w-[400px]">
                The personal cabinet for 3,000+ YouTube creators across 70 countries. I came in without a brief and left having built the strategic foundation the entire platform still runs on.
              </p>
              <div className="flex flex-wrap gap-2">
                {['UX Architecture', 'Customer Experience', 'Systems Design', 'Strategy'].map(tag => (
                  <span key={tag} className="text-sm px-3 py-1.5 rounded-lg text-white font-medium backdrop-blur-md" style={{background: 'rgba(50,50,50,0.75)'}}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-[#2a2a2a]">
              <div>
                <p className="text-[#888888] text-sm mb-1">Role</p>
                <p className="text-white font-medium">UX Architect</p>
              </div>
              <div>
                <p className="text-[#888888] text-sm mb-1">Timeline</p>
                <p className="text-white font-medium">1.5 years · ongoing</p>
              </div>
              <div>
                <p className="text-[#888888] text-sm mb-2">Users</p>
                <span className="text-white text-sm px-3 py-1 border border-[#2a2a2a] rounded-full inline-flex items-center gap-1.5">
                  <img src="/youtube.svg" alt="YouTube" className="w-3.5 h-auto brightness-0 invert" />
                  YouTube Creators
                </span>
              </div>
              <div>
                <p className="text-[#888888] text-sm mb-1">Market</p>
                <p className="text-white font-medium">Global · 70+ countries</p>
              </div>
            </div>
            <div>
              <p className="text-[#888888] text-sm mb-3">Deliverables</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'User Research', href: '#research' },
                  { label: 'Service Blueprint', href: '#additional-research' },
                  { label: 'Lifecycle Strategy', href: '#strategy' },
                  { label: 'UX Architecture', href: '#design' },
                  { label: 'Widget System', href: '#widgets' },
                  { label: 'Conversion Audit', href: '#additional-research' },
                ].map(d => (
                  <a key={d.label} href={d.href} className="text-[#888888] text-sm px-3 py-1 border border-[#2a2a2a] rounded-full hover:text-white hover:border-white transition-colors no-underline">{d.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Context */}
        <Section id="context">
          <div className="text-center mb-12 max-w-[620px] mx-auto">
            <div className="flex justify-center mb-4">
              <span className="text-white text-xs px-3 py-1 border border-[#2a2a2a] rounded-full uppercase tracking-widest">Audience & Domain</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight mb-6">AIR is the #1 YouTube partner network</h2>
            <p className="text-[#888888] text-base leading-relaxed">Every creator is focused on growth, monetization, and standing out in their niche. AIR meets creators where they are: adapting to their experience level and goals, from landing first stable results to addressing highly personal ambitions.</p>
          </div>
          <ImageBlock onClick={(src, alt) => setLightbox({ src, alt })} src="/cases/air-in-figures.png" alt="AIR in figures" />
          <div className="text-center mt-16 mb-8">
            <p className="inline-block text-white text-xs px-3 py-1 border border-[#2a2a2a] rounded-full uppercase tracking-widest mb-4">All apps in one place</p>
            <h2 className="text-3xl font-bold leading-tight mb-6">Web platform for channel growth</h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-[620px] mx-auto">AIR is an ecosystem of products built to support that: giving creators the tools and conditions to grow their audience, hit their channel goals, and build something sustainable.</p>
          </div>
          <ImageBlock onClick={(src, alt) => setLightbox({ src, alt })} src="/cases/air-unified-ecosystem.png" alt="AIR builds a unified ecosystem" />
        </Section>

        {/* Research */}
        <Section id="research">
          <div className="text-center mb-12 max-w-[620px] mx-auto">
            <SectionLabel>User Research</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight mb-6">We thought they weren't reading messages.<br />Turns out — they had no reason to open the cabinet at all.</h2>
            <p className="text-[#888888] text-base leading-relaxed">
              Together with the Head of Product, I ran deep interviews with 7 creators — AIR partners with different tenure and channel scale. What we heard changed the framing of the problem entirely.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                n: '01',
                title: 'One scenario. One route. Cabinet closes.',
                quote: '"The algorithm for working with the cabinet is always the same. It narrows down to one visit per month — when you need to withdraw money. You go in, click Request Payout, they say thank you — you close the tab. That\'s it."',
                insight: 'The cabinet had to show value before the user even reached the finance section.',
              },
              {
                n: '02',
                title: 'Messages exist. But aren\'t perceived as important.',
                quote: '"There are a lot of messages but I didn\'t read them. A few times I went in — just filler. Then I didn\'t even know they\'d arrived."',
                insight: 'Communication had to be tied to user actions and goals — not to the manager\'s schedule.',
              },
              {
                n: '03',
                title: '50 products. Knew about none of them.',
                quote: '"I only found out we had 50 products when I was making a marketing presentation. Some unclear buttons that meant nothing to me. I was surprised to learn AIR makes thumbnails. But everyone stays quiet about it — like some wild secret."',
                insight: 'Products had to be recommended personally — through the creator\'s specific goals and metrics, not through a general catalogue.',
              },
              {
                n: '04',
                title: 'Personal manager was the glue. When they left — the connection broke.',
                quote: '"We had a person — a real human who called us, not just wrote somewhere in a chat. She could call and say there\'s a copyright issue. Then one left, then another, then a third — and they just stopped caring about us."',
                insight: 'The cabinet had to compensate for the loss of personal contact — through personalisation and proactive hints.',
              },
              {
                n: '05',
                title: 'The price became visible. The value didn\'t.',
                quote: '"We earned $10,000, paid AIR $3,000. We calculate: withdraw directly — $750. Jaiр separately — $50. Total $800. Where are our $2,200?"',
                insight: 'The cabinet had to show what the creator gets from the partnership — not just how much they pay.',
              },
              {
                n: '06',
                title: 'Products exist. But discovered by accident.',
                quote: '"I don\'t even know this section with products. This is the only thing I used — the service to set up ads. About the catalogue I don\'t really know what else is there."',
                insight: 'A personalised recommendation at the right moment is more valuable than a full catalogue.',
              },
              {
                n: '07',
                title: 'AIR knows more about the channel than the creator does. But stays silent.',
                quote: '"If there was such an option — send a video for review and within 4–5 hours get feedback: you have a copyright risk here, we recommend cutting — that would be very good." And the most powerful moment: "When I connected it was $15–20 per month — now it\'s $1,500."',
                insight: 'AIR genuinely helps creators grow. But creators don\'t connect that growth to the platform — because the platform doesn\'t talk about it.',
              },
            ].map(item => (
              <div key={item.n} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[2rem_1fr] gap-4 sm:gap-8">
                <p className="text-[#2a2a2a] text-sm font-mono font-bold mt-0.5">{item.n}</p>
                <div>
                  <h3 className="text-base font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed italic mb-4">{item.quote}</p>
                  <div className="border-t border-[#2a2a2a] pt-4">
                    <p className="text-[#c8f563] text-sm leading-relaxed">→ {item.insight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8">
            <p className="text-[#888888] text-sm uppercase tracking-widest mb-4">What unites all insights</p>
            <p className="text-white text-base leading-relaxed max-w-[620px]">
              Two completely different creators — an experienced partner on the edge of leaving and a loyal newcomer who is growing — were saying the same thing in different words: AIR helps, but doesn't show how. Creators were paying for partnership — but didn't feel like partners.
            </p>
            <p className="text-[#c8f563] text-sm mt-4 leading-relaxed">This wasn't a UX problem. It was a problem of communicating value.</p>
          </div>
        </Section>

        {/* Additional Research */}
        <Section id="additional-research">
          <div className="text-center mb-12 max-w-[620px] mx-auto">
            <SectionLabel>Additional Research</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight mb-6">Three more studies to complete the picture</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: 'Churn Research',
                stat: '121',
                statLabel: 'disconnected accounts',
                body: 'Top reasons for leaving: "Doesn\'t explain" (19%) · "Doesn\'t see value of partnership" (14%) · "Doesn\'t want to pay" (11.5%) · "Disappointed in service" (9.9%). By vertical: Entertainment (31) · Gaming (20) · Kids&Teens (15).',
              },
              {
                label: 'Service Blueprint',
                stat: '1',
                statLabel: 'full journey mapped',
                body: 'Full journey map from acquisition to churn — with the line of visibility and interaction. Revealed key friction points: scattered communication flow, messenger more convenient than the cabinet, and a "distribution by conscience" pattern.',
              },
              {
                label: 'Conversion Funnel',
                stat: '40+',
                statLabel: 'products audited',
                body: 'Analysed conversion funnels for each product in the ecosystem. 1,844 clicks from "Try it" → 21,644 registrations. Documented core user journey, AHA moment and time to value for each product.',
              },
            ].map(item => (
              <div key={item.label} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col">
                <p className="text-[#888888] text-xs uppercase tracking-widest mb-4">{item.label}</p>
                <p className="text-white text-3xl font-bold mb-1">{item.stat}</p>
                <p className="text-[#888888] text-sm mb-4">{item.statLabel}</p>
                <p className="text-[#888888] text-sm leading-relaxed flex-1">{item.body}</p>
              </div>
            ))}
          </div>

          <ImageBlock src="" alt="Service Blueprint" onClick={(src, alt) => setLightbox({ src, alt })} />
        </Section>

        {/* Strategy */}
        <Section id="strategy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <SectionLabel>Strategy</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">From insights — to a C-level decision</h2>
              <p className="text-[#888888] text-base leading-relaxed">
                The data from research became the basis of a strategic pitch. I prepared an AIR partnership map: a development axis from $0 to $15,000+, a point of frustration and departure, an axis of our influence, and key needs for each segment.
                <br /><br />
                Head of Product pitched it to C-level — and the decision was made to develop the cabinet.
              </p>
            </div>
            <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
              <p className="text-[#888888] text-xs uppercase tracking-widest mb-4">The core question</p>
              <p className="text-white text-base font-medium leading-relaxed mb-6">"Why do creators leave — and what would make them stay and grow?"</p>
              <div className="border-t border-[#2a2a2a] pt-4">
                <p className="text-[#888888] text-sm leading-relaxed">The answer wasn't a single feature. It was a system — one that makes AIR's value visible at every stage of creator growth.</p>
              </div>
            </div>
          </div>

          <ImageBlock src="" alt="Partnership value map" onClick={(src, alt) => setLightbox({ src, alt })} />

          <div className="mt-16">
            <div className="text-center mb-8 max-w-[620px] mx-auto">
              <SectionLabel>Lifecycle Framework</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">Tokyo Metro — Creator Lifecycle Evolution</h2>
              <p className="text-[#888888] text-base leading-relaxed">
                I built a strategic framework for creator development — from Beginner ($0) to Superstar ($15,000+). For each segment: pains, expectations from AIR, key values, relevant products at that stage.
                <br /><br />
                The framework never became a separate product screen — but it became a shared language for the entire team. Product managers, KAMs, support started talking about the same people using the same categories.
              </p>
            </div>
            <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl overflow-hidden">
              <ImageBlock src="" alt="Creator Lifecycle Framework — Tokyo Metro" onClick={(src, alt) => setLightbox({ src, alt })} />
              <div className="p-5">
                <p className="text-[#888888] text-sm mb-1 uppercase tracking-widest">Team reaction</p>
                <p className="text-white text-sm leading-relaxed italic">"Tokyo Metro is my personal object of admiration: everything is clear, understandable, transparent. Seriously, I'm in awe — I used to make things like this exclusively myself."</p>
                <p className="text-[#888888] text-sm mt-2">— Maria Bogorska, Head of Design</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-8 max-w-[620px] mx-auto">
              <SectionLabel>Archetypes</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">Explorer · Influencer · Fintech · Revshare</h2>
              <p className="text-[#888888] text-base leading-relaxed">
                Detailed profiles for each segment: definition, behaviour, needs, recommendation filters. Explorer alone makes up 40% of AIR's entire base. For each archetype — a separate logic of what to show and when.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Explorer', share: '40%', desc: 'Growing channels, focused on discovery. Need product recommendations tied to their growth goals, not a general catalogue.' },
                { name: 'Influencer', share: '—', desc: 'Established creators with audience and leverage. Need tools that amplify what they already do well.' },
                { name: 'Fintech', share: '—', desc: 'Finance-first mindset. Revenue clarity, payment flows, and transparent fee structures are the deciding factor.' },
                { name: 'Revshare', share: '—', desc: 'Revenue-split model creators. Partnership value must be visible and provable at every billing cycle.' },
              ].map(a => (
                <div key={a.name} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-semibold text-white">{a.name}</h3>
                    {a.share !== '—' && <span className="text-[#c8f563] text-sm font-medium">{a.share} of base</span>}
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-8 max-w-[620px] mx-auto">
              <SectionLabel>Recommendation System</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight mb-6">The right product, at the right moment</h2>
              <p className="text-[#888888] text-base leading-relaxed">
                A product tree by categories with priorities and filtering rules: by niche, income, and subscriber count. AIR Manager — a backend tool for the team to configure recommendation rules without involving developers.
                <br /><br />
                Validated through a KAM Workshop — recommendations tested across all roles and scenarios.
              </p>
            </div>
            <ImageBlock src="" alt="Recommendation system" onClick={(src, alt) => setLightbox({ src, alt })} />
          </div>
        </Section>

        {/* Design */}
        <Section id="design">
          <div className="text-center mb-12 max-w-[620px] mx-auto">
            <SectionLabel>Design Process</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight mb-6">Hypothesis, architecture, documentation</h2>
            <p className="text-[#888888] text-base leading-relaxed">
              The initial hypothesis: an updated dashboard would change user behaviour. But a dashboard without the context of goals is just a pretty screen. That opened more important questions than the ones we started with.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                title: 'Architectural Matrix',
                body: 'Three layout grid options → final selection. State matrix: New / Connected × Profile Oriented / Channel Oriented × user roles.',
              },
              {
                title: 'Widget Documentation',
                body: 'For each widget: Business Context · Functional Requirements · Feature Design · Project Decomposition. Developers got clear logic without extra meetings.',
              },
              {
                title: 'Conversion Research',
                body: 'User Journey Global across 40+ products in FigJam: standalone vs functional, before/after flows, AHA moment, time to value. Currently in implementation.',
              },
            ].map(item => (
              <div key={item.title} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <ImageBlock src="" alt="Architecture matrix" onClick={(src, alt) => setLightbox({ src, alt })} />
        </Section>

        {/* Widgets */}
        <Section id="widgets">
          <div className="text-center mb-12 max-w-[620px] mx-auto">
            <SectionLabel>Final Design</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight mb-6">Four widgets — four different lessons</h2>
          </div>

          {/* Wizard */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
              <div>
                <SectionLabel>Widget 01</SectionLabel>
                <h2 className="text-3xl font-bold leading-tight mb-4">Wizard</h2>
                <p className="text-[#888888] text-base leading-relaxed mb-6">
                  Step-by-step onboarding for channel connection. Two scenarios: Explorer/Freelancer and Influencer. Solved the core problem from interviews — not understanding how to connect or what you'd get.
                </p>
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5">
                  <p className="text-[#c8f563] text-2xl font-bold mb-1">+40%</p>
                  <p className="text-[#888888] text-sm">conversion in channel addition</p>
                  <p className="text-white text-sm mt-3 leading-relaxed">But the result was unexpected: small channels without monetisation didn't convert to partnerships. Those who wanted to join us most — were those the business couldn't accept. This opened a new strategic problem.</p>
                </div>
              </div>
              <ImageBlock src="" alt="Wizard widget" onClick={(src, alt) => setLightbox({ src, alt })} />
            </div>
          </div>

          <hr className="border-t border-[#2a2a2a] my-12" />

          {/* Niche Snapshot */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
              <div>
                <SectionLabel>Widget 02</SectionLabel>
                <h2 className="text-3xl font-bold leading-tight mb-4">Niche Snapshot</h2>
                <p className="text-[#888888] text-base leading-relaxed mb-4">
                  An analytics widget for niche comparison. Filters: Niche + Period. Metrics: Views, Commercial views, Traffic Sources, Videos Published Daily.
                </p>
                <p className="text-[#888888] text-base leading-relaxed italic mb-6">
                  "As a creator I don't always understand if my videos reach the level of my neighbours. If a competitor's CTR is 12% and mine is 10% — it means I need to improve my thumbnails. I as a creator can't get that information — but you have it."
                </p>
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5">
                  <p className="text-white text-sm font-medium mb-1">Used daily by partners</p>
                  <p className="text-[#888888] text-sm leading-relaxed">Opened demand for deeper analytics — became the starting point for a separate product: Competitive Insights.</p>
                </div>
              </div>
              <ImageBlock src="" alt="Niche Snapshot widget" onClick={(src, alt) => setLightbox({ src, alt })} />
            </div>
          </div>

          <hr className="border-t border-[#2a2a2a] my-12" />

          {/* Audit Pro */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
              <div>
                <SectionLabel>Widget 03</SectionLabel>
                <h2 className="text-3xl font-bold leading-tight mb-4">Audit Pro</h2>
                <p className="text-[#888888] text-base leading-relaxed mb-6">
                  6 states of the full audit lifecycle: Request → Received → In Progress → Ready → Thank you → Request again.
                </p>
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5">
                  <p className="text-white text-sm font-medium mb-2">Support asked to turn it off</p>
                  <p className="text-[#888888] text-sm leading-relaxed">Demand was so high that the support team couldn't handle the load and asked to disable the widget. It's hard to imagine a better confirmation of product-market fit.</p>
                </div>
              </div>
              <ImageBlock src="" alt="Audit Pro widget" onClick={(src, alt) => setLightbox({ src, alt })} />
            </div>
          </div>

          <hr className="border-t border-[#2a2a2a] my-12" />

          {/* Ecosystem Pulse */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
              <div>
                <SectionLabel>Widget 04</SectionLabel>
                <h2 className="text-3xl font-bold leading-tight mb-4">Ecosystem Pulse</h2>
                <p className="text-[#888888] text-base leading-relaxed mb-6">
                  Personalised product recommendations by role and development stage. Full state system + mobile version.
                </p>
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5">
                  <p className="text-white text-sm font-medium mb-2">Didn't ship — but changed everything</p>
                  <p className="text-[#888888] text-sm leading-relaxed">Revealed that AIR doesn't track product delivery across all channels. Without that data, showing a correct status was impossible. Design as a diagnostic tool — triggered a separate infrastructure track.</p>
                </div>
              </div>
              <ImageBlock src="" alt="Ecosystem Pulse widget" onClick={(src, alt) => setLightbox({ src, alt })} />
            </div>
          </div>
        </Section>

        {/* Ecosystem Map */}
        <Section id="ecosystem">
          <div className="text-center mb-12 max-w-[620px] mx-auto">
            <SectionLabel>Ecosystem</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight mb-6">The cabinet turned out to be a platform</h2>
            <p className="text-[#888888] text-base leading-relaxed">
              When I started — the task was to make the cabinet more understandable. But the deeper I went into research, the clearer it became: the problem wasn't the interface. The problem was that 30+ products existed separately — with no shared logic, no navigation between them, no understanding of where the user was in their development.
              <br /><br />
              MyAIR became the assembly point. Not just a cabinet — but a platform that connects all layers of the ecosystem into one system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { category: 'Lead Generators', products: ['Ambassador Program', 'pin.top Affiliate', 'Gyre Affiliate'] },
              { category: 'Activation', products: ['Channel Experts Audit', 'Troubleshooting'] },
              { category: 'Core', products: ['MilX Finance Hub', 'MilX Payments', 'Strike Resolution', 'Hack Protection', 'Daily Video Moderation', 'Content ID'] },
              { category: 'Value Generators', products: ['VidIQ', 'Promotion', 'Gyre', '24/7 Live Streaming', 'Ads Boost', 'Design & Animation'] },
              { category: 'Profit Generators', products: ['pin.top', 'Altmon', 'MilX Advance Payments', 'MilX Active Funds'] },
              { category: 'Engagement Generators', products: ['Comment Analyzer', 'AI Idea Generator', 'AI Metadata Lab', 'Competitive Insights'] },
              { category: 'Upsale Generators', products: ['AI Metadata Translation', 'YouTube Localization', 'AI Dubbing', 'Geo-Blocking', 'Epidemic Sound'] },
              { category: 'Retention Generators', products: ['Music Playlist Pitching', 'Music Release Promotion', 'Music Distribution'] },
            ].map(group => (
              <div key={group.category} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5">
                <p className="text-[#888888] text-xs uppercase tracking-widest mb-3">{group.category}</p>
                <div className="flex flex-col gap-1.5">
                  {group.products.map(p => (
                    <p key={p} className="text-white text-sm">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section id="results">
          <div className="text-center mb-12 max-w-[620px] mx-auto">
            <SectionLabel>Results</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight mb-6">What shipped, what didn't, and what both revealed</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                metric: '+40%',
                label: 'Channel connection conversion',
                body: 'Wizard onboarding improved the flow from zero to first channel connected — and exposed a strategic gap between who wants to join and who the business can accept.',
              },
              {
                metric: 'Off by request',
                label: 'Audit Pro disabled',
                body: 'Support asked to turn off Audit Pro because demand exceeded team capacity. The best confirmation of product-market fit is when the product overwhelms your own team.',
              },
              {
                metric: '40+',
                label: 'Products with documented funnels',
                body: 'AHA moments, time to value, and core user journeys documented for the entire ecosystem. Currently in implementation.',
              },
              {
                metric: '1 platform',
                label: 'Parent for all AIR products',
                body: 'Creators Ecosystem became the strategic foundation from which Competitive Insights, OXYS AI Toolkit, AI Metadata Translation, and Royalty all grew.',
              },
            ].map(item => (
              <div key={item.label} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <p className="text-[#c8f563] text-2xl font-bold mb-1">{item.metric}</p>
                <p className="text-white text-sm font-medium mb-3">{item.label}</p>
                <p className="text-[#888888] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Reflections */}
        <Section id="reflections">
          <div className="text-center mb-12 max-w-[620px] mx-auto">
            <SectionLabel>Reflection</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight mb-6">What this taught me</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                n: '01',
                title: 'A dashboard doesn\'t change behaviour',
                body: 'An interface without the context of a goal is just a screen. You need to speak the language of user progress — not the language of product features.',
              },
              {
                n: '02',
                title: 'The best metrics arrive unexpectedly',
                body: '+40% is good. But "support asked to turn it off" is better confirmation of value than any spreadsheet.',
              },
              {
                n: '03',
                title: 'Design is diagnostics',
                body: 'Ecosystem Pulse never shipped. But it revealed a systemic problem that nobody had seen before. Sometimes the most valuable result isn\'t the product — it\'s the question it raises.',
              },
              {
                n: '04',
                title: 'Small channels want in — the business isn\'t ready',
                body: 'Wizard surfaced a tension between who wants to join and who the business is prepared to accept. A strategic question that goes beyond design — and is now on the agenda.',
              },
            ].map(item => (
              <div key={item.n} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                <p className="text-[#888888] text-xs font-mono mb-3">{item.n}</p>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  )
}
