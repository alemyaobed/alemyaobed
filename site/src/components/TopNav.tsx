import { useEffect, useRef, useState } from 'react'
import { HERO, SITE } from '../content'
import { cvRequestHref } from '../utils'
import { IconX } from './icons'
import { ThemeToggle } from './ThemeToggle'

/**
 * The slim top bar aligned to the page column: on desktop, theme toggle
 * and Request CV at the column's right edge; on mobile, a clean bar with
 * the initials and a hamburger that morphs to an X and opens a stacked
 * menu. Tapping outside or pressing Escape closes the menu.
 * @returns The top bar element.
 */
export function TopNav() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) {
      return
    }
    /**
     * Closes the menu when a pointer press lands outside it.
     * @param event - The pointer down event.
     */
    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    /**
     * Closes the menu on Escape.
     * @param event - The key down event.
     */
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  /**
   * Toggles the mobile hamburger menu.
   */
  const handleToggle = () => setOpen((value) => !value)

  return (
    <header ref={rootRef} className="sticky top-0 z-40 border-b border-line bg-page/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-5">
        <a
          href="#home"
          className="font-mono text-lg font-medium tracking-widest text-ink lg:hidden"
        >
          {SITE.initials}
        </a>
        <div className="ml-auto flex items-center gap-3">
          <span className="hidden sm:inline-flex">
            <ThemeToggle />
          </span>
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
            aria-label={open ? 'Close menu' : 'Menu'}
            className="inline-flex items-center justify-center rounded-md border border-line p-2.5 text-muted transition-colors hover:text-accent sm:hidden"
          >
            {open ? (
              <IconX className="h-5 w-5" />
            ) : (
              <span className="flex flex-col items-center gap-1.5">
                <span className="block h-0.5 w-5 bg-ink" aria-hidden="true" />
                <span className="block h-0.5 w-5 bg-ink" aria-hidden="true" />
                <span className="block h-0.5 w-5 bg-ink" aria-hidden="true" />
              </span>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div
          id="topnav-menu"
          className="mx-auto flex max-w-5xl flex-col items-start gap-3 border-t border-line bg-page px-5 py-4 sm:hidden"
        >
          <ThemeToggle />
          <a
            href={cvRequestHref()}
            className="rounded-full border border-accent/50 bg-accent/10 px-6 py-2.5 text-sm text-accent"
          >
            {HERO.requestCvCta}
          </a>
        </div>
      )}
    </header>
  )
}
