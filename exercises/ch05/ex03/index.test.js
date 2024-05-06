import { usingIfElse, usingIfSwitch } from "./index.js";

describe("usingIfElse", () => {
  it("returns true for '土'", () => {
    expect(usingIfElse("土")).toBe(true);
  });

  it("returns true for '日'", () => {
    expect(usingIfElse("日")).toBe(true);
  });

  it("returns false for '月'", () => {
    expect(usingIfElse("月")).toBe(false);
  });
});

describe("usingIfSwitch", () => {
  it("returns true for '土'", () => {
    expect(usingIfSwitch("土")).toBe(true);
  });

  it("returns true for '日'", () => {
    expect(usingIfSwitch("日")).toBe(true);
  });

  it("returns false for '月'", () => {
    expect(usingIfSwitch("月")).toBe(false);
  });
});
