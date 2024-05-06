export function sub(a, b) {
  // bの2の補数を取得
  let twoComp = add(~b, 1); // aとbの2の補数を加算することで減算を実行

  // 加算を行うために必要なキャリーがなくなるまでループ
  while (twoComp != 0) {
    // a と b の間でキャリーするべきビットを見つける
    let carry = (a & twoComp) << 1; // XOR 演算を用いて加算
    a = a ^ twoComp; // 次のキャリーを考慮
    twoComp = carry;
  }

  return a;
}
