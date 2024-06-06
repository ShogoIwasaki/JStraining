let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;

// oはpおよびqのプロトタイプチェーン上に存在する
console.log(o.isPrototypeOf(p));// =>true
console.log(o.isPrototypeOf(q));// =>true

// pはqのプロトタイプチェーン上に存在する
console.log(p.isPrototypeOf(q));// =>true

let obj = new Object();
let arr = new Array();
let date = new Date();
let map = new Map();

// `Object`, `Array`, `Date`, `Map` の確認
console.log(Object.prototype.isPrototypeOf(obj));// =>true
console.log(Array.prototype.isPrototypeOf(arr));// =>true
console.log(Date.prototype.isPrototypeOf(date));// =>true
console.log(Map.prototype.isPrototypeOf(map));// =>true