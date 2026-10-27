import { About } from './components/About'
import { BottomNav } from './components/BottomNav'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'
import { TopNav } from './components/TopNav'
import { ValueProps } from './components/ValueProps'
import { Work } from './components/Work'

/**
 * Composes the site shell: fixed sidebar on desktop, a top navigation
 * bar over the content with a mobile hamburger, and the sections in
 * order with the stats bar standing alone.
 * @returns The application root element.
 */
export default function App() {
  return (
    <>
      <Sidebar />
      <div className="flex min-h-svh flex-col lg:pl-60">
        <TopNav />
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
