const projects = [
  {
    slug: 'competitive-insights',
    tags: ['0→1', 'Analytics', 'Creator Economy', 'C-level'],
    title: 'Competitive Insights',
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

function ImagePlaceholder({ aspectRatio = 'aspect-video' }) {
  return (
    <div className={`w-full ${aspectRatio} bg-[#1e1e1e] rounded-sm`} />
  )
}

function FeaturedCard({ project }) {
  return (
    <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg overflow-hidden">
      <ImagePlaceholder />
      <div className="p-8 md:p-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-[#888888] text-sm leading-relaxed mb-6 max-w-2xl">
          {project.description}
        </p>
        {project.metrics && (
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {project.metrics.map((m) => (
              <div
                key={m}
                className="flex-1 border border-[#2a2a2a] rounded px-4 py-3"
              >
                <p className="text-white text-sm font-medium">{m}</p>
              </div>
            ))}
          </div>
        )}
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
  const [featured] = projects

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold mb-12">Selected Work</h2>

      <div className="flex flex-col gap-6">
        <FeaturedCard project={featured} />
      </div>
    </section>
  )
}
