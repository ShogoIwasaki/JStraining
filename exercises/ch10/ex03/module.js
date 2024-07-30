// module.js

/**
 * 指定された名前に対して挨拶を返す関数
 *
 * @param {string} name - 挨拶する対象の名前
 * @return {string} 挨拶
 */
function greet(name) {
  return `Hello, ${name}!`;
}

/**
 * Personクラス
 */
class Person {
  /**
   * Personクラスのコンストラクタ
   *
   * @param {string} name - 名前
   * @param {number} age - 年齢
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * 自己紹介メッセージを返すメソッド
   *
   * @return {string} 自己紹介メッセージ
   */
  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

// 関数とクラスをエクスポート
module.exports = {
  greet,
  Person,
};
