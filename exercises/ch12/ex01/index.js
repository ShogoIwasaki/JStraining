import { counterIter, counterGen } from "./iterator.js";

// 明示的にイテレータインタフェースのメソッドを呼ぶ
console.log("Explicit iterator interface method calls:");
let iter = counterIter(3);
console.log(iter.next()); // => counterIter: next{ value: 1, done: false }
console.log(iter.next()); // => counterIter: next{ value: 2, done: false }
console.log(iter.next()); // => counterIter: next{ value: 3, done: false }
console.log(iter.next()); // => counterIter: next{ value: undefined, done: true }

// 間接的にイテレータインタフェースのメソッドを呼ぶ
console.log("\nImplicit iterator interface method calls:");
for (let value of counterGen(3)) {
  console.log(value);
  // 1回目=>counterIter: next 1, 2回目=>counterIter: next 2, 3回目=>counterIter: next 3, 4回目=>counterGen: finally
}

// ジェネレータ関数によって生成されたオブジェクトがイテレータインタフェースを満たしていることを確認する
console.log(
  "\nCheck if the object generated by the generator function satisfies the iterator interface:"
);
let gen = counterGen(3);
console.log(typeof gen[Symbol.iterator] === "function"); // true
console.log(typeof gen.next === "function"); // true
console.log(typeof gen.return === "function"); // true
console.log(typeof gen.throw === "function"); // true

// return() や throw() がどのようなときに呼ばれるのか確認する
console.log("\nCheck when return() and throw() are called:");
gen = counterGen(3);
console.log(gen.next());
console.log(gen.return("End early"));
try {
  gen.throw(new Error("An error occurred"));
} catch (e) {
  console.error(e.message);
}
// Check when return() and throw() are called:
// counterGen
// counterGen: next
// { value: 1, done: false }
// counterGen: finally
// { value: 'End early', done: true }
// An error occurred

// return()メソッドはイテレーションを早期終了させる。
// このメソッドが呼び出されるとジェネレータはその時点で終了しfinallyブロックが実行。returnメソッドに与えられた値が渡される。
// throw()メソッドはイテレータにエラーを送信するために使用される。これが呼び出されるとジェネレータはその時点でエラーをスローする。

// ジェネレータ関数の中身がどのタイミングで初めて実行されるか確認する動作
console.log(
  "\nCheck when the contents of the generator function are first executed:"
);
gen = counterGen(3);
console.log("After generator creation");
console.log(gen.next());
console.log("After first next() call");
// Check when the contents of the generator function are first executed:
// After generator creation
// counterGen
// counterGen: next
// { value: 1, done: false }
// After first next() call

// next()が実行されたときにGenの中身が実行されている。
