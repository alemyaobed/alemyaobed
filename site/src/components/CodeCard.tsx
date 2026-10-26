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

/**
 * The developer.js editor pane shown beside the hero: a title bar with
 * traffic-light dots, numbered colour-coded lines, and the availability
 * banner underneath.
 * @returns The code card element.
 */
export function CodeCard() {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-xl border border-line bg-panel text-left shadow-lg">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-3 rounded-full bg-red-400" aria-hidden="true" />
          <span className="size-3 rounded-full bg-amber-400" aria-hidden="true" />
          <span className="size-3 rounded-full bg-emerald-400" aria-hidden="true" />
          <figcaption className="ml-2 font-mono text-sm text-muted">
            {CODE_CARD_TITLE}
          </figcaption>
        </div>
        <div className="px-4 py-4">
          {CODE_CARD_LINES.map((line, lineIndex) => (
            <p key={lineIndex} className="m-0 flex gap-4 font-mono text-[15px] leading-6">
              <span className="w-4 shrink-0 text-right text-xs text-muted/60">
                {lineIndex + 1}
              </span>
              <span className="whitespace-pre">
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} className={TONE_CLASSES[token.tone]}>
                    {token.text}
                  </span>
                ))}
              </span>
            </p>
          ))}
        </div>
      </div>
      <p className="mt-4 rounded-lg border border-accent/50 bg-accent/10 px-4 py-3 text-center text-sm text-accent">
        {CODE_CARD_BANNER}
      </p>
    </figure>
  )
}
