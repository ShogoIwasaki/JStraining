// export function sub(a, b) {
//   // bの2の補数を取得
//   let twoComp = add(~b, 1); // aとbの2の補数を加算することで減算を実行

//   // 加算を行うために必要なキャリーがなくなるまでループ
//   while (twoComp != 0) {
//     // a と b の間でキャリーするべきビットを見つける
//     let carry = (a & twoComp) << 1; // XOR 演算を用いて加算
//     a = a ^ twoComp; // 次のキャリーを考慮
//     twoComp = carry;
//   }

//   return a;
// }

///////////////

export function sub(a, b) { // b の 2 の補数を取得するために、まず b のビットを反転させます。 
  let invertB = ~b; // b の 2 の補数を得るために、反転させた b に 1 を加えます。 
  // ここで + 演算子は禁止されているため、1 を加える操作をビット演算で表現します。 
  let twoComplementB = add(invertB, 1); // a から b を引く代わりに、a に b の 2 の補数を加えます。 
  return add(a, twoComplementB); 
} 
function add(x, y) { 
  // キャリーがなくなるまでループします 
  while (y != 0) { // x と y の間でキャリーを計算します（共に 1 のビットが立っている部分） 
    let carry = (x & y) << 1; // x に y を加えますが、キャリーは無視して XOR を使います 
    x = x ^ y; // 次の計算のために、キャリーを y に代入します 
    y = carry; 
  } 
    return x; 
} 


  // 使用例 console.log(sub(10, 4)); // 6 console.log(sub(15, 20)); // -5
  // このコードでは、sub関数内でまず引き算をする数bのビットを反転させ、
  // その後1を加えることでbの2の補数を計算しています。
  // JavaScriptでは直接+演算子を使用することができないため、add関数を定義し、
  // その関数内でビット演算を用いて加算を行っています。
  // add関数では、キャリー（桁上がり）を考慮しながらxとyを加算しています。
  // 具体的には、xとyの間のキャリーを計算し（&演算子後に1ビット左シフト）、
  // xにyをXOR演算子(^)を使って加算します。
  // その後、計算したキャリーをyに代入し、キャリーが0になるまでこのプロセスを繰り返します。