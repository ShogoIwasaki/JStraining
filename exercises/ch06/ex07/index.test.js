import { assign } from "./index.js";

describe("assign", () => {
  it("copies properties from source objects to target", () => {
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    assign(target, source1, source2);
    expect(target).toEqual({ a: 1, b: 2, c: 3 });
  });

  it("overwrites properties in target", () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    assign(target, source);
    expect(target).toEqual(Object.assign(target, source));
  });

  it("does not copy non-enumerable properties", () => {
    const target = { a: 1 };
    const source = Object.defineProperty({}, "b", { value: 2, enumerable: false });
    assign(target, source);
    expect(target).toEqual(Object.assign(target, source));
  });

  it("copies Symbol properties", () => {
    const target = { a: 1 };
    const sym = Symbol("b");
    const source = { [sym]: 2 };
    assign(target, source);
    expect(target).toEqual(Object.assign(target, source));
  });
});