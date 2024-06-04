let obj = {};

// プロパティを定義
Object.defineProperty(obj, 'prop', {
  value: 42, // 値：42
  writable: false,  // 書き込み不可
  enumerable: true, // 列挙可能
  configurable: false // 削除、変更不可
});

// プロパティの変更
obj.prop = 77;
console.log(obj.prop); // => 42 
// configurable: falseなので変わらない

// プロパティの削除
delete obj.prop;
console.log(obj.prop); // => 42 
// configurable: falseなので変わらない


// hasOwnPropertyとpropertyIsEnumerableの結果を確認
console.log(obj.hasOwnProperty('prop')); // => true
// objはpropというプロパティを自身のプロパティとして有している

console.log(obj.propertyIsEnumerable('prop')); // => true
// propというプロパティは列挙可能である