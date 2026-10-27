import { useState } from 'react'
import { HERO, NAV_ITEMS, SITE } from '../content'
import { useActiveSection } from '../hooks/useActiveSection'
import { cvRequestHref } from '../utils'
import { ThemeToggle } from './ThemeToggle'

/**
 * The top navigation bar over the content area: section links on the
 * left, theme toggle and Request CV on the far right, collapsing into a
 * hamburger menu on mobile.
 * @returns The top navigation element.
 */
export function TopNav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((item) => item.href))

  /**
   * Toggles the mobile hamburger menu.
   */
  const handleToggle = () => setOpen((value) => !value)

  /**
   * Closes the mobile menu after a link is chosen.
   */
  const handleNavigate = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/90 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between gap-4 px-5">
        <div className="flex items-center gap-6">
          <a href="#home" className="font-mono text-lg text-ink lg:hidden">
            {SITE.shortName}
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={item.href === active ? 'page' : undefined}
                className={`inline-block py-3 text-xs font-medium uppercase tracking-[0.07em] transition-colors ${
                  item.href === active ? 'text-accent' : 'text-muted hover:text-accent'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={cvRequestHref()}
            className="hidden rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/20 sm:inline-block"
          >
            {HERO.requestCvCta}
          </a>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={open}
            aria-controls="topnav-menu"
            aria-label="Menu"
            className="inline-flex flex-col items-center justify-center gap-1.5 rounded-md border border-line p-2.5 md:hidden"
          >
            <span className="block h-0.5 w-5 bg-ink" aria-hidden="true" />
            <span className="block h-0.5 w-5 bg-ink" aria-hidden="true" />
            <span className="block h-0.5 w-5 bg-ink" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="topnav-menu"
          aria-label="Primary mobile"
          className="flex flex-col gap-1 border-t border-line bg-page px-5 py-3 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigate}
              className="rounded-md px-2 py-2.5 text-sm text-muted transition-colors hover:bg-pill hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={cvRequestHref()}
            className="mt-1 rounded-full border border-accent/50 bg-accent/10 px-4 py-2.5 text-center text-sm text-accent"
          >
            {HERO.requestCvCta}
          </a>
        </nav>
      )}
    </header>
  )
}
