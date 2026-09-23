import { describe, expect, it } from "vitest";
import { applyFeedbackFilters } from "../src/filters.js";
import type { FeedbackRecord } from "../src/types.js";

function makeRecord(overrides: Partial<FeedbackRecord> = {}): FeedbackRecord {
  return {
    id: "fb-1",
    type: "bug",
    message: "Test",
    status: "open",
    projectName: "demo",
    url: "/",
    urlPattern: null,
    authorName: "Alice",
    authorEmail: "alice@example.com",
    viewport: "1280x720",
    userAgent: "test",
    clientId: "client",
    resolvedAt: null,
    createdAt: new Date("2026-01-01T00:00:00.000Z"),
    updatedAt: new Date("2026-01-01T00:00:00.000Z"),
    annotations: [],
    screenshotUrl: null,
    screenshotRegion: null,
    diagnostics: null,
    ...overrides,
  };
}

describe("applyFeedbackFilters — author filter", () => {
  it("filters by author when both authorName and authorEmail are set", () => {
    const items = [
      makeRecord({ id: "mine", authorName: " Alice ", authorEmail: "Alice@Example.COM" }),
      makeRecord({ id: "other", authorName: "Bob", authorEmail: "bob@example.com" }),
    ];

    const { feedbacks, total } = applyFeedbackFilters(items, {
      projectName: "demo",
      authorName: "Alice",
      authorEmail: "alice@example.com",
    });

    expect(total).toBe(1);
    expect(feedbacks.map((f) => f.id)).toEqual(["mine"]);
  });

  it("ignores author filter when only one field is set", () => {
    const items = [makeRecord({ id: "a" }), makeRecord({ id: "b", authorName: "Bob" })];

    const nameOnly = applyFeedbackFilters(items, { projectName: "demo", authorName: "Alice" });
    const emailOnly = applyFeedbackFilters(items, { projectName: "demo", authorEmail: "alice@example.com" });

    expect(nameOnly.total).toBe(2);
    expect(emailOnly.total).toBe(2);
  });
});
