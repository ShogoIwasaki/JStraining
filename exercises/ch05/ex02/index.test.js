import { usingIfElse, usingSwitch } from "./index.js";

const testStr1 = "\u0000\u0008\u0009\u000A\u000BHello";
const testStr2 = "\u000C\u000D\u0022\u0027\u005CWorld";

const expectedStr1 = "\\0\\b\\t\\n\\vHello";
console.log(expectedStr1);
const expectedStr2 = "\\f" + "\\r" + '\\"' + "\\'" + "\\" + "\u005C" + "World";
console.log(expectedStr2);

describe("usingIfElse", () => {
  it("returns expectedStr1 for usingIfElse(testStr1)", () => {
    expect(usingIfElse(testStr1)).toBe(expectedStr1);
  });

  it("returns expectedStr2 for usingIfElse(testStr2)", () => {
    expect(usingIfElse(testStr2)).toBe(expectedStr2);
  });
});

describe("usingSwitch", () => {
  it("returns expectedStr1 for usingSwitch(testStr1)", () => {
    expect(usingSwitch(testStr1)).toBe(expectedStr1);
  });

  it("returns expectedStr2 for usingSwitch(testStr2)", () => {
    expect(usingSwitch(testStr2)).toBe(expectedStr2);
  });
});
