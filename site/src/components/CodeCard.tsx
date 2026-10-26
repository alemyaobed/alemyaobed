import { useEffect, useMemo, useRef, useState } from 'react'
import type { CodeToken } from '../types'
import { CODE_CARD_BANNER, CODE_CARD_LINES, CODE_CARD_TITLE } from '../content'

/** Colour classes used for each token tone in the editor card. */
const TONE_CLASSES: Record<CodeToken['tone'], string> = {
  plain: 'text-muted',
  key: 'text-ink',
  string: 'text-emerald-600 dark:text-emerald-400',
  keyword: 'text-accent',
  boolean: 'text-amber-600 dark:text-amber-400',
  comment: 'italic text-muted',
}

/** Milliseconds between revealed characters. */
const TYPE_INTERVAL_MS = 14

/**
 * The engineer.js editor pane as its own section: the object types
 * itself out character by character once the card scrolls into view,
 * like a terminal. Reduced-motion preferences skip the animation.
 * @returns The code card element.
 */
export function CodeCard() {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)
  const [typed, setTyped] = useState(0)

  const total = useMemo(
    () => CODE_CARD_LINES.reduce((sum, line) => sum + line.reduce((n, t) => n + t.text.length, 0), 0),
    [],
  )

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }
    /**
     * Starts the typing effect the first time the card is visible.
     * @param entries - Observer entries for the card.
     */
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setInView(true)
        observer.disconnect()
      }
    }
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '0px 0px -20% 0px',
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) {
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(total)
      return
    }
    const id = window.setInterval(() => {
      setTyped((count) => {
        if (count >= total) {
          window.clearInterval(id)
          return count
        }
        return count + 1
      })
    }, TYPE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [inView, total])

  let budget = typed
  const typing = typed < total

  return (
    <figure ref={ref} className="m-0">
      <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-lg">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-3 rounded-full bg-red-400" aria-hidden="true" />
          <span className="size-3 rounded-full bg-amber-400" aria-hidden="true" />
          <span className="size-3 rounded-full bg-emerald-400" aria-hidden="true" />
          <figcaption className="ml-2 font-mono text-sm text-muted">
            {CODE_CARD_TITLE}
          </figcaption>
        </div>
        <div className="overflow-x-auto px-4 py-4 text-left">
          {CODE_CARD_LINES.map((line, lineIndex) => (
            <p
              key={lineIndex}
              className="m-0 flex gap-4 font-mono text-[13px] leading-6 sm:text-[15px]"
            >
              <span className="w-4 shrink-0 text-right text-xs text-muted/60">
                {lineIndex + 1}
              </span>
              <span className="whitespace-pre">
                {line.map((token, tokenIndex) => {
                  const take = Math.max(0, Math.min(token.text.length, budget))
                  budget -= take
                  return (
                    <span key={tokenIndex} className={TONE_CLASSES[token.tone]}>
                      {token.text.slice(0, take)}
                    </span>
                  )
                })}
              </span>
            </p>
          ))}
          {typing && (
            <span className="ml-8 inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
          )}
        </div>
      </div>
      <p className="mt-4 rounded-lg border border-accent/50 bg-accent/10 px-4 py-3 text-center text-sm text-accent">
        {CODE_CARD_BANNER}
      </p>
    </figure>
  )
}
