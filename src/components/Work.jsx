const projects = [
  {
    slug: 'competitive-insights',
    tags: ['0→1', 'Analytics', 'Creator Economy', 'C-level'],
    chips: ['Ownership · 0→1', 'API Feasibility', 'Research', 'Design', 'Analytics'],
    title: 'Competetive Insights',
    image: '/cases/competitive-insights.png',
    icon: '/logos/air-icon.png',
    subtitle: 'AIR MEDIA-TECH',
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
    title: 'Creators Ecosystem',
    icon: '/logos/air-icon.png',
    description:
      'Mapped the full service ecosystem across 30+ products — defining UX architecture that aligned product strategy with creator value delivery.',
  },
  {
    slug: 'royalty',
    tags: ['0→1', 'Crypto', 'Startup'],
    title: 'Royalty',
    description:
      'Designed a blockchain marketplace for creator revenue tokenization — from concept to beta launch, navigating legal ambiguity and evolving product vision.',
  },
  {
    slug: 'oxis-ai-toolkit',
    tags: ['AI Tooling', '0→1', 'Design System'],
    title: 'Oxis AI Toolkit',
    description:
      'Designed an AI toolkit for YouTube creators from scratch — Comments Analyzer, Metadata Lab, and Idea Generator — across full OAuth, payment, and ecosystem flows.',
  },
  {
    slug: 'ai-metadata-translation',
    tags: ['0→1', 'AI', '200+ languages'],
    title: 'AI Metadata Translation',
    description:
      'Led UX for a metadata translation product supporting 200+ languages — 200+ screens in 6 months, including junior designer mentorship.',
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
      <a href={`/work/${project.slug}`} className="flex items-center gap-4 mb-5 hover:opacity-80 transition-opacity">
        <div className="w-14 h-14 rounded-2xl bg-[#161616] border border-[#2a2a2a] flex items-center justify-center shrink-0 overflow-hidden">
          {project.icon
            ? <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
            : <span className="text-white text-sm font-bold">{project.title.split(' ').map(w => w[0]).join('').slice(0,3)}</span>
          }
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{project.title}</h3>
          {project.subtitle && (
            <p className="text-[#888888] text-sm mt-0.5">
              {project.subtitle}
              {project.metric && (
                <><span className="mx-2">·</span><span className="text-[#c8f563]">{project.metric}</span></>
              )}
            </p>
          )}
        </div>
      </a>
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
      </a>
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
  const visible = projects.filter(p => p.slug === 'competitive-insights')

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 pt-12 pb-24">
      <div className="flex flex-col gap-6">
        {visible.map((project) => (
          <FeaturedCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
