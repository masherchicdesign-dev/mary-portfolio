const projects = [
  {
    slug: 'competitive-insights',
    tags: ['0→1', 'Analytics', 'Creator Economy', 'C-level'],
    chips: ['Ownership · 0→1', 'API Feasibility', 'Full Cycle Design'],
    title: 'Competitive Insights',
    image: '/cases/competitive-insights.png',
    icon: '/logos/air-icon.png',
    subtitle: 'AIR MEDIA-TECH',
    website: 'https://air.io/en',
    metric: '77% weekly return rate · 6× higher consistency',
    description:
      'Initiated and led a 0→1 analytics product for YouTube creators — from C-level workshop and API feasibility research to launch and adoption measurement.',
    metrics: [
      '77% weekly return rate among power users',
      '6× higher consistency vs low-engagement segment',
    ],
    featured: true,
  },
  {
    slug: 'creators-ecosystem',
    tags: ['Ecosystem', 'UX Architecture', 'Strategy'],
    chips: ['UX Architecture', 'Customer Experience', 'Systems Design', 'Strategy'],
    title: 'Creators Ecosystem',
    icon: '/logos/air-icon.svg',
    subtitle: 'AIR MEDIA-TECH',
    website: 'https://air.io/en',
    metric: '3,000+ creators · 70 countries',
    image: '/cases/creators-ecosystem.png',
    description:
      'Mapped the full service ecosystem across 30+ products — defining UX architecture that aligned product strategy with creator value delivery.',
  },
  {
    slug: 'oxis-ai-toolkit',
    tags: ['AI Tooling', '0→1', 'Design System'],
    chips: ['Leadership', 'Managed Design Function', 'Full Cycle Design'],
    title: 'OXYS AI Toolkit',
    icon: '/logos/oxys-icon.svg',
    subtitle: 'AIR MEDIA-TECH',
    website: 'https://oxys.ai/en',
    metric: 'Coming Soon',
    image: '/cases/oxis-ai-toolkit.png',
    comingSoon: true,
    description:
      'Designed an AI toolkit for YouTube creators from scratch — Comments Analyzer, Metadata Lab, and Idea Generator — across full OAuth, payment, and ecosystem flows.',
  },
  {
    slug: 'ai-metadata-translation',
    tags: ['0→1', 'AI', '200+ languages'],
    chips: ['Ownership · 0→1', 'Managed Design Function', 'Full Cycle Design'],
    title: 'AI Metadata Translation',
    icon: '/logos/ai-metadata-icon.svg',
    subtitle: 'AIR MEDIA-TECH',
    website: 'https://metadatatranslation.ai/en',
    metric: 'Coming Soon',
    image: '/cases/ai-metadata-translation.png',
    comingSoon: true,
    description:
      'Led UX for a metadata translation product supporting 200+ languages — 200+ screens in 6 months, including junior designer mentorship.',
  },
  {
    slug: 'royalty',
    tags: ['0→1', 'Crypto', 'Startup'],
    chips: ['Leadership · 0→1', 'Blockchain', 'UX Architecture', 'Full Cycle Design'],
    title: 'Royalty Web3 Platform',
    icon: '/logos/royalty-icon.svg',
    subtitle: 'AIR MEDIA-TECH',
    website: 'https://royalty.io/en',
    metric: 'Coming Soon',
    image: '/cases/royalty.png',
    comingSoon: true,
    description:
      'Designed a blockchain marketplace for creator revenue tokenization — from concept to beta launch, navigating legal ambiguity and evolving product vision.',
  },
]

function Tag({ label }) {
  return (
    <span className="text-[#888888] text-xs px-2 py-0.5 border border-[#2a2a2a] rounded-full">
      {label}
    </span>
  )
}

function ImagePlaceholder({ image }) {
  if (image) {
    return (
      <div className="w-full aspect-[4/3]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    )
  }
  return (
    <div className="w-full aspect-[4/3] bg-[#1c1c1e] flex items-center justify-center p-4">
      <div className="w-full h-full bg-[#2c2c2e] rounded-lg" />
    </div>
  )
}

function FeaturedCard({ project }) {
  return (
    <div>
      <div className="flex items-start gap-4 mb-5">
        <a href={project.comingSoon ? undefined : `/work/${project.slug}`} className={`shrink-0 ${!project.comingSoon ? 'hover:opacity-80 transition-opacity' : 'cursor-default'}`}>
          <div className="w-14 h-14 rounded-2xl bg-[#161616] border border-[#2a2a2a] flex items-center justify-center overflow-hidden">
            {project.icon
              ? <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
              : <span className="text-white text-sm font-bold">{project.title.split(' ').map(w => w[0]).join('').slice(0,3)}</span>
            }
          </div>
        </a>
        <div className="flex-1 min-w-0">
          <a href={project.comingSoon ? undefined : `/work/${project.slug}`} className={!project.comingSoon ? 'hover:opacity-80 transition-opacity' : 'cursor-default'}>
            <h3 className="text-base font-semibold text-white">{project.title}</h3>
          </a>
          {project.subtitle && (
            <div className="flex items-center justify-between mt-0.5">
              <p className="text-[#888888] text-sm">
                {project.subtitle}
                {project.metric && (
                  <><span className="mx-2">·</span><span className="text-[#c8f563]">{project.metric}</span></>
                )}
              </p>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-white hover:underline text-sm transition-colors inline-flex items-center gap-1.5 shrink-0 ml-4"
                >
                  Live product
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {project.comingSoon ? (
        <div className="block bg-[#161616] border border-[#2a2a2a] rounded-3xl overflow-hidden relative">
          <ImagePlaceholder image={project.image} />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.chips && project.chips.map(chip => (
              <span key={chip} className="text-sm px-3 py-1.5 rounded-lg text-white font-medium backdrop-blur-md" style={{background: 'rgba(50,50,50,0.75)'}}>{chip}</span>
            ))}
          </div>
        </div>
      ) : (
        <a
          href={`/work/${project.slug}`}
          className="block bg-[#161616] border border-[#2a2a2a] rounded-3xl overflow-hidden hover:border-[#444] transition-colors cursor-pointer relative"
        >
          <ImagePlaceholder image={project.image} />
          {project.chips && (
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {project.chips.map(chip => (
                <span key={chip} className="text-sm px-3 py-1.5 rounded-lg text-white font-medium backdrop-blur-md" style={{background: 'rgba(50,50,50,0.75)'}}>{chip}</span>
              ))}
            </div>
          )}
          <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full border border-[#555] flex items-center justify-center transition-all duration-200 hover:border-[#888]" style={{background: 'rgba(40,40,40,0.9)'}} onMouseEnter={e => e.currentTarget.style.background='rgba(10,10,10,0.95)'} onMouseLeave={e => e.currentTarget.style.background='rgba(40,40,40,0.9)'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </a>
      )}
    </div>
  )
}

function Card({ project }) {
  return (
    <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg overflow-hidden flex flex-col">
      <ImagePlaceholder />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <h3 className="text-base font-semibold mb-2">{project.title}</h3>
        <p className="text-[#888888] text-sm leading-relaxed flex-1 mb-6">
          {project.description}
        </p>
        <a
          href={`/work/${project.slug}`}
          className="text-sm text-white hover:text-[#888888] transition-colors"
        >
          View Case →
        </a>
      </div>
    </div>
  )
}

export default function Work() {
  const visible = projects.filter(p => ['competitive-insights', 'creators-ecosystem', 'oxis-ai-toolkit', 'ai-metadata-translation', 'royalty'].includes(p.slug))

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 pt-12 pb-8">
      <div className="flex flex-col gap-12">
        {visible.map((project) => (
          <FeaturedCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
