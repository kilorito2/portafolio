import { useEffect } from 'react'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Journey } from '@/components/Journey'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { portfolio } from '@/data/portfolio'
import { destroyLenis, initLenis } from '@/lib/lenis'
import { stripBrackets } from '@/lib/text'

function App() {
  useEffect(() => {
    document.title = `${stripBrackets(portfolio.name)} · ${stripBrackets(portfolio.role)}`

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', portfolio.tagline)
    }
  }, [])

  useEffect(() => {
    initLenis()
    return () => destroyLenis()
  }, [])

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
