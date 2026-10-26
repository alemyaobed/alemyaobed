import { About } from './components/About'
import { BottomNav } from './components/BottomNav'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'
import { ValueProps } from './components/ValueProps'
import { Work } from './components/Work'

/**
 * Composes the site shell around the reference layout: a fixed left
 * sidebar on desktop with the content beside it, a top header plus
 * bottom tab bar on mobile, and the sections in reference order.
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
          <Stats />
          <Skills />
          <ValueProps />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      <BottomNav />
    </>
  )
}
