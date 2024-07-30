// app.js

// module.jsから関数とクラスをインポート
// 名前変更を伴うインポート(greet関数をhelloGreetとしてインポート)
import { greet as helloGreet } from "./module.js";
// Personクラスをデフォルトインポート
import Person from "./module.js";

// 関数の利用
console.log(helloGreet("A"));

// クラスの利用
const shogo = new Person("B", 30);
console.log(shogo.introduce());
