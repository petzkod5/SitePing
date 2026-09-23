import type { SitepingIdentity } from "./types.js";

/** Trim-only — matches the widget retry-queue identity comparison. */
export function normalizeAuthorName(value: string): string {
  return value.trim();
}

/** Trim + lowercase — matches the widget retry-queue identity comparison. */
export function normalizeAuthorEmail(value: string): string {
  return value.trim().toLowerCase();
}

/** Whether a feedback record was submitted by `identity`. */
export function feedbackMatchesAuthor(
  feedback: Pick<{ authorName: string; authorEmail: string }, "authorName" | "authorEmail">,
  identity: SitepingIdentity,
): boolean {
  return (
    normalizeAuthorName(feedback.authorName) === normalizeAuthorName(identity.name) &&
    normalizeAuthorEmail(feedback.authorEmail) === normalizeAuthorEmail(identity.email)
  );
}
