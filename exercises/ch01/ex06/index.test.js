import { fibonacci } from "./index.js";

describe("fib", () => {
  it("returns 5 for fib(5)", () => {
    expect(fibonacci(5)).toBe(5);
  });

  it("returns 2111485077978050 for fib(75)", () => {
    expect(fibonacci(75)).toBe(2111485077978050);
  });
});