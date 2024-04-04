// import { abs, sum, factorial } from "./index.js";
import { abs } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("returns the correct sum of positive numbers in an array", () => {
      expect(sum([1, 2, 3])).toBe(6);
    });
    it("returns 0 when an empty array is given", () => {
      expect(sum([])).toBe(0);
    });
    it("returns the correct sum of negative numbers in an array", () => {
      expect(sum([-1, -2, -3])).toBe(-6);
    });
  });

  describe("factorial", () => {
    it("returns the correct factorial of a positive integer", () => {
      expect(factorial(5)).toBe(120);
    });
    it("returns 1 when 0 is given", () => {
      expect(factorial(0)).toBe(1);
    });
    it("returns 1 when 1 is given", () => {
      expect(factorial(1)).toBe(1);
    });
  });

});
