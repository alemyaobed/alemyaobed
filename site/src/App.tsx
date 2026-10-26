import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'
import { Work } from './components/Work'

/**
 * Composes the single-page portfolio from its sections.
 * @returns The application root element.
 */
export default function App() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
