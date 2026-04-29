export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#888888] text-sm">
<span>© 2026 Masha Osadcha</span>
        <div className="flex gap-5">
          <a href="https://drive.google.com/file/d/1WHZQf2-D0gfG2xbuB0_rOr0yZ_o_okiJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            CV
          </a>
          <a
            href="https://linkedin.com/in/mary-osadcha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
