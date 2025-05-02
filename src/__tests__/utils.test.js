import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "tEst";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });

  it("returns 0 for empty string", () => {
    expect(pointsForWord("")).toBe(0)
  })

  it("ignores numbers, symbols, and emojis", () => {
    expect(pointsForWord("Test!🐶")).toBe(7)
  })

  it("throws an error for non-string inputs (number)", () => {
    expect(() => pointsForWord(123)).toThrow(TypeError)
  })

  it("throws an error for non-string input (null)", () => {
    expect(() => pointsForWord(null)).toThrow(TypeError);
  })
});
