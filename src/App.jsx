import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-background text-white font-sans min-h-screen">
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
