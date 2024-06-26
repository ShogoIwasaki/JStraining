import { assign } from "./index.js";

describe("assign", () => {
  // コピー元のオブジェクトごとに列挙可能な独自プロパティをコピー先のオブジェクトにコピーする
  it("copies properties from source objects to target", () => {
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    assign(target, source1, source2);
    expect(target).toEqual({ a: 1, b: 2, c: 3 });
  });

  // ターゲットオブジェクトのプロパティを上書き
  it("overwrites properties in target", () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    assign(target, source);
    expect(target).toEqual(Object.assign(target, source));
  });

  // 列挙不可なプロパティのコピーについて確認
  it("does not copy non-enumerable properties", () => {
    const target = { a: 1 };
    const source = Object.defineProperty({}, "b", { value: 2, enumerable: false });
    assign(target, source);
    expect(target).toEqual(Object.assign(target, source));
  });

  // Symbolプロパティのコピー
  it("copies Symbol properties", () => {
    const target = { a: 1 };
    const sym = Symbol("b");
    const source = { [sym]: 2 };
    assign(target, source);
    expect(target).toEqual(Object.assign(target, source));
  });
});