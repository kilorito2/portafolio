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
import { stripBrackets } from '@/lib/text'

function App() {
  useEffect(() => {
    document.title = `${stripBrackets(portfolio.name)} · ${stripBrackets(portfolio.role)}`

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', portfolio.tagline)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
