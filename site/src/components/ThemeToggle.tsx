import { useState } from 'react'
import { IconMoon, IconSun } from './icons'

/**
 * Light and dark theme toggle: flips the html element's theme class,
 * persists the choice, and shows the icon of the theme it switches to.
 * @returns The toggle button element.
 */
export function ThemeToggle() {
  const [light, setLight] = useState(() =>
    document.documentElement.classList.contains('light'),
  )

  /**
   * Switches the theme class and stores the choice.
   */
  const handleToggle = () => {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
    document.documentElement.classList.toggle('dark', !next)
    localStorage.setItem('theme', next ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
      className="inline-flex items-center justify-center rounded-full border border-line p-2 text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      {light ? <IconMoon className="h-4 w-4" /> : <IconSun className="h-4 w-4" />}
    </button>
  )
}
