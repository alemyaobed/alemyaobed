import { About } from './components/About'
import { BottomNav } from './components/BottomNav'
import { CodeCard } from './components/CodeCard'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Section } from './components/Section'
import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'
import { ValueProps } from './components/ValueProps'
import { Work } from './components/Work'
import { CODE_SECTION_TITLE } from './content'

/**
 * Composes the site shell: fixed sidebar on desktop with content beside
 * it, top header and bottom tab bar on mobile, sections in reference
 * order with the typing engineer card as its own section.
 * @returns The application root element.
 */
export default function App() {
  return (
    <>
      <Sidebar />
      <div className="flex min-h-svh flex-col lg:pl-60">
        <Nav />
        <main className="flex-1 pb-20 lg:pb-0">
          <Hero />
          <About />
          <Work />
          <Skills />
          <ValueProps />
          <Section id="engineer" title={CODE_SECTION_TITLE}>
            <CodeCard />
          </Section>
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      <BottomNav />
    </>
  )
}
