import { describe, expect, it } from "vitest";
import { feedbackMatchesAuthor, normalizeAuthorEmail, normalizeAuthorName } from "../src/author-match.js";

describe("author-match", () => {
  it("normalizes author name by trimming", () => {
    expect(normalizeAuthorName("  Alice  ")).toBe("Alice");
  });

  it("normalizes author email by trimming and lowercasing", () => {
    expect(normalizeAuthorEmail("  Alice@Example.COM  ")).toBe("alice@example.com");
  });

  it("matches feedback authors with normalized comparison", () => {
    expect(
      feedbackMatchesAuthor(
        { authorName: " Alice ", authorEmail: "Alice@Example.COM" },
        { name: "Alice", email: "alice@example.com" },
      ),
    ).toBe(true);
    expect(
      feedbackMatchesAuthor(
        { authorName: "Bob", authorEmail: "bob@example.com" },
        { name: "Alice", email: "alice@example.com" },
      ),
    ).toBe(false);
  });
});
