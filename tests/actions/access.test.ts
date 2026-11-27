import { describe, expect, it } from "vitest";
import { assertMentorOwner } from "../../lib/actions/access";

describe("F5.1 — RBAC de administração", () => {
  it("permite somente MENTOR_OWNER", () => {
    expect(() => assertMentorOwner("MENTOR_OWNER")).not.toThrow();
    expect(() => assertMentorOwner("MENTEE")).toThrow("FORBIDDEN");
    expect(() => assertMentorOwner("PLATFORM_ADMIN")).toThrow("FORBIDDEN");
  });
});
