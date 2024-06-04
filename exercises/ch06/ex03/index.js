let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;

console.log(o.isPrototypeOf(p));
console.log(o.isPrototypeOf(q));
// o はp およびq のプロトタイプチェーン上に存在する
console.log(p.isPrototypeOf(q));
// p はq のプロトタイプチェーン上に存在する

let obj = new Object();
let arr = new Array();
let date = new Date();
let map = new Map();

console.log(Object.prototype.isPrototypeOf(obj));
console.log(Array.prototype.isPrototypeOf(arr));
console.log(Date.prototype.isPrototypeOf(date));
console.log(Map.prototype.isPrototypeOf(map));