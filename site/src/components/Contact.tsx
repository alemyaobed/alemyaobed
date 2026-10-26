import { CONTACT, HERO, SOCIALS } from '../content'
import { cvRequestHref } from '../utils'
import { Section } from './Section'

/**
 * Closing call to action with the email button, the Request CV button
 * and the social pills.
 * @returns The contact section element.
 */
export function Contact() {
  return (
    <Section id="contact" title={CONTACT.heading}>
      <p className="m-0 max-w-xl text-muted">{CONTACT.lead}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${CONTACT.email}`}
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {CONTACT.emailCta}
        </a>
        <a
          href={cvRequestHref()}
          className="rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
        >
          {HERO.requestCvCta}
        </a>
        {SOCIALS.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line bg-pill px-4 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            {social.label}
          </a>
        ))}
      </div>
    </Section>
  )
}
