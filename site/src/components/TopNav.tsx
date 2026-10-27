import { useState } from 'react'
import { HERO, SITE } from '../content'
import { cvRequestHref } from '../utils'
import { ThemeToggle } from './ThemeToggle'

/**
 * The slim top bar: theme toggle and Request CV pinned to the far
 * right. On mobile the name shows on the left and the hamburger opens a
 * small menu holding just those same two controls.
 * @returns The top bar element.
 */
export function TopNav() {
  const [open, setOpen] = useState(false)

  /**
   * Toggles the mobile hamburger menu.
   */
  const handleToggle = () => setOpen((value) => !value)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/90 backdrop-blur-lg">
      <div className="flex h-16 items-center gap-4 px-5">
        <a href="#home" className="font-mono text-lg text-ink lg:hidden">
          {SITE.shortName}
        </a>
        <div className="ml-auto flex items-center gap-3">
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
            className="inline-flex flex-col items-center justify-center gap-1.5 rounded-md border border-line p-2.5 sm:hidden"
          >
            <span className="block h-0.5 w-5 bg-ink" aria-hidden="true" />
            <span className="block h-0.5 w-5 bg-ink" aria-hidden="true" />
            <span className="block h-0.5 w-5 bg-ink" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && (
        <div
          id="topnav-menu"
          className="flex items-center justify-between gap-3 border-t border-line bg-page px-5 py-4 sm:hidden"
        >
          <ThemeToggle />
          <a
            href={cvRequestHref()}
            className="rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm text-accent"
          >
            {HERO.requestCvCta}
          </a>
        </div>
      )}
    </header>
  )
}
