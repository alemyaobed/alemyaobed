// Small pure helpers shared across components.
import { CONTACT, CV_REQUEST_BODY, CV_REQUEST_SUBJECT } from './content'

/**
 * Builds the mailto link that opens a pre-filled CV request email draft.
 * @returns The mailto URL used by every Request CV button.
 */
export function cvRequestHref(): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(CV_REQUEST_SUBJECT)}&body=${encodeURIComponent(CV_REQUEST_BODY)}`
}
