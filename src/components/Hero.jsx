export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-36 pb-24">
      <p className="text-[#888888] text-sm tracking-widest uppercase mb-6">
        Staff Product Designer · UX Architect
      </p>

      <h1 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] tracking-tight max-w-3xl mb-6">
        I don&apos;t just build systems — I bring them to life.
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
    </section>
  )
}
