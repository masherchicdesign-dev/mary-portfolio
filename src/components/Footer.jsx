export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#888888] text-sm">
        <span>Mary Osadcha · Staff Product Designer</span>
        <span>© 2026 Mary Osadcha</span>
        <div className="flex gap-5">
          <a
            href="https://linkedin.com/in/mary-osadcha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a href="/cv" className="hover:text-white transition-colors">
            CV
          </a>
        </div>
      </div>
    </footer>
  )
}
