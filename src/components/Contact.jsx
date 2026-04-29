export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 flex justify-center">
      <a
        href="https://t.me/masherchic"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-6 hover:opacity-80 transition-opacity"
      >
        <span
          className="text-white font-bold leading-none"
          style={{ fontSize: 'clamp(56px, 10vw, 140px)' }}
        >
          Get in touch
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 'clamp(48px, 7vw, 100px)', height: 'clamp(48px, 7vw, 100px)', flexShrink: 0 }}
        >
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>
    </section>
  )
}
