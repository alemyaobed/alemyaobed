import { useEffect, useState } from 'react'

/**
 * Tracks which page section is current, deterministically: a section is
 * active once its top passes a third of the viewport, so short first and
 * last sections register reliably. Returns the active href and a setter
 * so navigation clicks can update it immediately.
 * @param hrefs - Section anchors to watch, for example '#home'.
 * @returns The active href and its setter, as a tuple.
 */
export function useActiveSection(hrefs: string[]): [string, (href: string) => void] {
  const [active, setActive] = useState(hrefs[0] ?? '')

  useEffect(() => {
    /**
     * Computes the current section from scroll position.
     */
    const handleScroll = () => {
      const mark = window.scrollY + window.innerHeight * 0.35
      let current = hrefs[0] ?? ''
      for (const href of hrefs) {
        const element = document.querySelector(href)
        if (!element) {
          continue
        }
        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= mark) {
          current = href
        }
      }
      setActive(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hrefs])

  return [active, setActive]
}
