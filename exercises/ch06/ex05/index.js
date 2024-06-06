// - プロトタイプを一つ以上もつ
// - プロトタイプと同名と同名でない数字、文字列のプロパティをもつ
// - プロトタイプはオブジェクトと同名ではない数字、文字列のプロパティももつ
// - プロトタイプは列挙可のプロパティをもち、それと同名の列挙不可のプロパティをオブジェクトにもたせること

// プロトタイプオブジェクト作成
let prototypeObject = {
  prototypeNumber: 1,
  prototypeString: "prototype",
};

// プロトタイプと同名のプロパティを持つオブジェクト作成
let myObject = Object.create(prototypeObject);
myObject.prototypeNumber = 2;
myObject.prototypeString = "object";
myObject.objectNumber = 3;
myObject.objectString = "object";

// プロトタイプの列挙可能なプロパティと同名の列挙不可能なプロパティをオブジェクトに追加
Object.defineProperty(prototypeObject, "prototypeNumber", {
  enumerable: false,
});

// ループでオブジェクトのプロパティを列挙
for (let property in myObject) {
  console.log(property + ": " + myObject[property]);
}

// => prototypeNumber: 2
// => prototypeString: object
// => objectNumber: 3
// => objectString: object