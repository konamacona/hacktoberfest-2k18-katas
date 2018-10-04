import { is13 } from "./is13";

describe("is13", () => {
  it("Correctly identify the number 13", () => {
    expect(is13(13)).toBe(true);
  });

  it('Correctly identify the string "13"', () => {
    expect(is13("13")).toBe(true);
  });

  it('Correctly identify the string "thirteen"', () => {
    expect(is13("thirteen")).toBe(true);
  });

  it("Returns false for other numbers", () => {
    for (var i = -10000; i < 10000; i++) {
      if (i !== 13) {
        expect(is13(i)).toBe(false);
      }
    }
  });

  it("Returns false for other strings", () => {
    expect(is13("twelve")).toBe(false);
  });

  it("Returns false for null", () => {
    expect(is13(null)).toBe(false);
  });

  it("Returns false for undefined", () => {
    expect(is13(undefined)).toBe(false);
  });

  it("Returns false for an object", () => {
    expect(is13({})).toBe(false);
  });
});
