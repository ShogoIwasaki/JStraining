// オブジェクトリテラル{}で独自プロパティを持つオブジェクトを定義
var parent = {
  name: "Parent",
  showParent: function () {
    console.log(this.name);
  },
};

// Object.create を使用してその継承オブジェクトを生成
var child = Object.create(parent);

// Object.getPrototypeOf() を利用して、生成した継承オブジェクトのプロトタイプが
// Object.create で渡したオブジェクトになっていることを確認
// console.log(Object.getPrototypeOf(child));
console.log(Object.getPrototypeOf(child) === parent); // =>true
