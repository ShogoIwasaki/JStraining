import { usingWhile, usingDoWhile, usingFor } from "./index.js";

const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

describe("usingWhile", () => {
  it("returns the first 10 numbers of the Fibonacci sequence", () => {
    expect(usingWhile()).toEqual(expected);
  });
});

describe("usingDoWhile", () => {
  it("returns the first 10 numbers of the Fibonacci sequence", () => {
    expect(usingDoWhile()).toEqual(expected);
  });
});

describe("usingFor", () => {
  it("returns the first 10 numbers of the Fibonacci sequence", () => {
    expect(usingFor()).toEqual(expected);
  });
});
