import {
  RESUME,
  RESUME_EDUCATION,
  RESUME_RESEARCH,
  RESUME_ROLES,
  RESUME_SKILLS,
} from '../content'

/**
 * The standalone printable resume page: contact header, summary,
 * experience with bullets, skills, research and education. Styled to
 * match the site in the browser and to stay clean when printed or
 * saved to PDF from the browser print dialog.
 * @returns The resume page element.
 */
export function ResumePage() {
  /**
   * Opens the browser print dialog so the page can be saved as PDF.
   */
  const handlePrint = () => window.print()

  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-left print:py-0">
      <div className="no-print mb-6 flex items-center gap-3">
        <button
          type="button"
          onClick={handlePrint}
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {RESUME.printCta}
        </button>
        <span className="text-sm text-muted">{RESUME.printHint}</span>
      </div>
      <h1 className="!mb-1 !mt-0 text-3xl">{RESUME.heading}</h1>
      <p className="m-0 text-sm text-muted">{RESUME.contact}</p>
      <section className="mt-6">
        <h2 className="!mb-2 border-b border-line pb-1 !text-base !tracking-normal">
          Summary
        </h2>
        <p className="m-0 text-sm leading-6 text-muted">{RESUME.summary}</p>
      </section>
      <section className="mt-6">
        <h2 className="!mb-3 border-b border-line pb-1 !text-base !tracking-normal">
          {RESUME.rolesHeading}
        </h2>
        <div className="space-y-5">
          {RESUME_ROLES.map((role) => (
            <article key={role.title}>
              <h3 className="m-0 text-base font-medium text-ink">{role.title}</h3>
              <p className="m-0 text-sm text-accent">
                {role.organization} · {role.period}
              </p>
              <ul className="mt-2 list-disc space-y-1 ps-5 text-sm leading-6 text-muted">
                {role.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 30)}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-6">
        <h2 className="!mb-3 border-b border-line pb-1 !text-base !tracking-normal">
          {RESUME.skillsHeading}
        </h2>
        <dl className="space-y-1 text-sm leading-6">
          {RESUME_SKILLS.map((row) => (
            <div key={row.label} className="flex gap-2">
              <dt className="w-32 shrink-0 font-medium text-ink">{row.label}</dt>
              <dd className="m-0 text-muted">{row.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mt-6">
        <h2 className="!mb-3 border-b border-line pb-1 !text-base !tracking-normal">
          {RESUME.researchHeading}
        </h2>
        <ul className="m-0 list-disc space-y-1 ps-5 text-sm leading-6 text-muted">
          {RESUME_RESEARCH.map((item) => (
            <li key={item.slice(0, 30)}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-6">
        <h2 className="!mb-3 border-b border-line pb-1 !text-base !tracking-normal">
          {RESUME.educationHeading}
        </h2>
        <ul className="m-0 list-disc space-y-1 ps-5 text-sm leading-6 text-muted">
          {RESUME_EDUCATION.map((item) => (
            <li key={item.slice(0, 30)}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
