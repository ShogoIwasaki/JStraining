// - プロトタイプを一つ以上もつ
// - プロトタイプと同名と同名でない数字、文字列のプロパティをもつ
// - プロトタイプはオブジェクトと同名ではない数字、文字列のプロパティももつ
// - プロトタイプは列挙可のプロパティをもち、それと同名の列挙不可のプロパティをオブジェクトにもたせること

let prototypeObject = {
  prototypeNumber: 1,
  prototypeString: "prototype",
};

let myObject = Object.create(prototypeObject);
myObject.prototypeNumber = 2;
myObject.prototypeString = "object";
myObject.objectNumber = 3;
myObject.objectString = "object";

Object.defineProperty(prototypeObject, "prototypeNumber", {
  enumerable: false,
});

for (let property in myObject) {
  console.log(property + ": " + myObject[property]);
}

// => objectNumber: 3
// => objectString: object