import { fibonacci } from "./index.js";

describe("fib", () => {
  it("returns 5 when fibonacci(5) given", () => {
    expect(fibonacci(5)).toBe(5);
  });

  it("returns 2111485077978050 when fibonacci(75) given", () => {
    expect(fibonacci(75)).toBe(2111485077978050);
  });
});