import { useState } from 'react'
import { HERO, NAV_ITEMS, SITE } from '../content'
import { cvRequestHref } from '../utils'

/**
 * Sticky top bar with the owner's short name, the section links and the
 * Request CV button. Below the sm breakpoint the links collapse into a
 * toggle menu.
 * @returns The navigation bar element.
 */
export function Nav() {
  const [open, setOpen] = useState(false)

  /**
   * Opens or closes the mobile menu. Attached to the menu button.
   */
  const handleToggle = () => setOpen((value) => !value)

  /**
   * Closes the mobile menu once a link inside it is chosen.
   */
  const handleNavigate = () => setOpen(false)

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-page/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4"
        aria-label="Primary"
      >
        <a href="#home" className="font-mono text-lg text-ink">
          {SITE.shortName}
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={cvRequestHref()}
            className="rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/20"
          >
            {HERO.requestCvCta}
          </a>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-md border border-line px-3 py-2 font-mono text-sm text-muted sm:hidden"
          >
            Menu
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line px-5 py-3 sm:hidden">
          <div className="mx-auto flex max-w-4xl flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigate}
                className="rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-pill hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
