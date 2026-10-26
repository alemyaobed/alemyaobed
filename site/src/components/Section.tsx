import type { ReactNode } from 'react'

/** Props accepted by the Section wrapper. */
export interface SectionProps {
  /** Anchor id targeted by the navigation links. */
  id: string
  /** Section heading text. */
  title: string
  /** Section content rendered under the heading. */
  children: ReactNode
}

/**
 * Wraps a page section with its anchor, heading and shared spacing.
 * @param props - The section id, heading text and content.
 * @returns The section element.
 */
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line px-5 py-16">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="mb-8 tracking-tight">{title}</h2>
        {children}
      </div>
    </section>
  )
}
