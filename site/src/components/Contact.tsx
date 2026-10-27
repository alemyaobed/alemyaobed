import { CONTACT, HERO } from '../content'
import { cvRequestHref } from '../utils'
import { Section } from './Section'

/**
 * The closing call-to-action band: heading, lead and the two actions,
 * email and CV request.
 * @returns The contact section element.
 */
export function Contact() {
  return (
    <Section id="contact" title={CONTACT.heading} subtitle={CONTACT.lead} bordered={false}>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${CONTACT.email}`}
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {CONTACT.emailCta}
        </a>
        <a
          href={cvRequestHref()}
          className="rounded-full border border-accent/50 bg-accent/10 px-6 py-3 text-sm text-accent transition-colors hover:bg-accent/20"
        >
          {HERO.requestCvCta}
        </a>
      </div>
    </Section>
  )
}
