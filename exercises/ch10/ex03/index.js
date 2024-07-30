// index.js

// module.jsから関数とクラスをインポート
const { greet, Person } = require("./module.js");

// 関数の利用
console.log(greet("A"));

// クラスの利用
const shogo = new Person("B", 30);
console.log(shogo.introduce());
