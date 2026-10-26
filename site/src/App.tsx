import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'
import { ValueProps } from './components/ValueProps'
import { Work } from './components/Work'

/**
 * Composes the single-page portfolio, ordered to match the reference:
 * hero, about, work, stats, skills, what I do, experience, contact.
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
        <Stats />
        <Skills />
        <ValueProps />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
