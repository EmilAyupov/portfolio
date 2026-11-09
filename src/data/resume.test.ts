import { describe, expect, it } from "vitest";
import { resume } from "./resume";

describe("resume content", () => {
  it("contains the public identity and role", () => {
    expect(resume.name).toBe("Emil Ayupov");
    expect(resume.role).toContain("PHP");
  });

  it("exposes only the intended public contact channels", () => {
    expect(Object.keys(resume.contacts).sort()).toEqual([
      "email",
      "setka",
      "telegram",
    ]);
  });

  it("contains the six supplied work experiences", () => {
    expect(resume.experienceItems).toHaveLength(6);
  });
});
