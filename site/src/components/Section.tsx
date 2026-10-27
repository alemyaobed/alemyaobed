import type { ReactNode } from 'react'

/** Props accepted by the Section wrapper. */
export interface SectionProps {
  /** Anchor id targeted by the navigation links. */
  id: string
  /** Section heading text. */
  title: string
  /** Optional small line under the heading. */
  subtitle?: string
  /** Section content rendered under the heading. */
  children: ReactNode
}

/**
 * Wraps a page section with its anchor, left-aligned heading and
 * shared spacing, with the content in a centered column.
 * @param props - The section id, heading, optional subtitle and content.
 * @returns The section element.
 */
export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="border-b border-line px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-1 text-center tracking-tight">{title}</h2>
        {subtitle && <p className="m-0 text-center text-sm text-muted">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
