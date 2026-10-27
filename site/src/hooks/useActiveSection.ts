import { useEffect, useState } from 'react'

/**
 * Tracks which page section is currently in view so navigation can
 * highlight it. The observer treats the middle band of the viewport as
 * the active zone, which keeps the highlight stable while scrolling.
 * @param hrefs - Section anchors to watch, for example '#home'.
 * @returns The href of the section currently in view.
 */
export function useActiveSection(hrefs: string[]): string {
  const [active, setActive] = useState(hrefs[0] ?? '')

  useEffect(() => {
    /**
     * Marks the first intersecting section as active.
     * @param entries - Observer entries for the watched sections.
     */
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`)
        }
      }
    }
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -60% 0px',
    })
    for (const href of hrefs) {
      const element = document.querySelector(href)
      if (element) {
        observer.observe(element)
      }
    }
    return () => observer.disconnect()
  }, [hrefs])

  return active
}
