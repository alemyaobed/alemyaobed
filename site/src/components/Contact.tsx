import { CONTACT, HERO, SOCIALS } from '../content'
import { cvRequestHref } from '../utils'
import { IconGitHub, IconLinkedIn } from './icons'

/** Map from social label to its brand icon component. */
const SOCIAL_ICONS: Record<string, typeof IconGitHub> = {
  GitHub: IconGitHub,
  LinkedIn: IconLinkedIn,
}

/**
 * The closing call-to-action band: a deliberately centered exception in
 * the otherwise left-aligned page, like the reference.
 * @returns The contact section element.
 */
export function Contact() {
  return (
    <section id="contact" className="border-b border-line px-5 py-20 text-center">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 tracking-tight">{CONTACT.heading}</h2>
        <p className="m-0 text-sm text-muted">{CONTACT.lead}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </section>
  )
}
