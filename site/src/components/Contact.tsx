import { CONTACT, HERO, SOCIALS } from '../content'
import { cvRequestHref } from '../utils'
import { IconGitHub, IconLinkedIn } from './icons'
import { Section } from './Section'

/** Map from social label to its brand icon component. */
const SOCIAL_ICONS: Record<string, typeof IconGitHub> = {
  GitHub: IconGitHub,
  LinkedIn: IconLinkedIn,
}

/**
 * The closing call-to-action band: heading, lead, the email button,
 * the CV button and contact icon buttons, all centered.
 * @returns The contact section element.
 */
export function Contact() {
  return (
    <Section id="contact" title={CONTACT.heading} subtitle={CONTACT.lead}>
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
        {SOCIALS.map((social) => {
          const Icon = SOCIAL_ICONS[social.label]
          return (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex items-center justify-center rounded-full border border-line bg-pill p-3 text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              {Icon ? <Icon className="h-4 w-4" /> : social.label}
            </a>
          )
        })}
      </div>
    </Section>
  )
}
