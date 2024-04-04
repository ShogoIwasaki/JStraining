import { abs, sum, factorial } from "./index.js";
// import { abs } from "./index.js";

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
    it("returns sum(6) when array([1, 2, 3]) given", () => {
      expect(sum([1, 2, 3])).toBe(6);
    });
    it("returns negative numbers sum(-6) when array([-1, -2, -3]) given", () => {
      expect(sum([-1, -2, -3])).toBe(-6);
    });
    it("returns sum(0) when empty array([]) given", () => {
      expect(sum([])).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns product(6) when positive value(3) given", () => {
      expect(factorial(3)).toBe(6);
    });
    it("returns product(1) when 1 is given when positive value(1) given", () => {
      expect(factorial(1)).toBe(1);
    });
    it("returns product(1) when 0 is given when value(0) given", () => {
      expect(factorial(0)).toBe(1);
    });
  });

});
