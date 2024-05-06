import { fib } from "./index.js";

describe("fib", () => {
  it("returns 1 for the first call", () => {
    const gen = fib();
    expect(gen.next().value).toBe(1);
  });

  it("returns 1 for the second call", () => {
    const gen = fib();
    gen.next();
    expect(gen.next().value).toBe(1);
  });

  it("returns 2 for the third call", () => {
    const gen = fib();
    gen.next();
    gen.next();
    expect(gen.next().value).toBe(2);
  });
});
