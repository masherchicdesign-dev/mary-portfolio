export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 text-center border-t border-[#2a2a2a]"
    >
      <h2 className="text-2xl font-semibold mb-4">Let&apos;s work together</h2>
      <p className="text-[#888888] text-sm mb-10">
        Open to Senior Product Designer and UX Architect roles.
        <br />
        Based in Ukraine · Available remotely.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="mailto:masherchic.design@gmail.com"
          className="text-white text-sm hover:text-[#888888] transition-colors underline underline-offset-4"
        >
          masherchic.design@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/mary-osadcha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm hover:text-[#888888] transition-colors underline underline-offset-4"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
