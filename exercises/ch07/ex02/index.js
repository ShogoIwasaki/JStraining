function fizzbuzz(n) {
  [...Array(n)].map((_, i) => { // nまでの配列を作成し各要素に対しmap関数を使用
    const x = i + 1; // インデックスは0から始まるため、1を加え、実際の数値を取得
    const output = (x % 3 ? "" : "Fizz") + (x % 5 ? "" : "Buzz");
    console.log(output || x); // outputが空文字列（数値が3でも5でも割り切れない）の場合は数値自体を出力する
  });
}

function sumOfSquaredDifference(f, g) {
  // 配列fの各要素と配列gの対応する要素の差の二乗を計算し、それらの合計を返す
  return f.reduce((acc, val, i) => acc + (val - g[i]) ** 2, 0);
}

function sumOfEvensIsLargerThan42(array) { // 配列内の偶数の合計が42以上か判断
  return (
    array
      .filter((x) => x % 2 === 0) // 配列から偶数だけを抽出
      .reduce((acc, val) => {
        return acc + val >= 42 ? acc + val : acc; // 偶数の合計が42以上になった場合は、その後の偶数を加算せずに合計値をそのまま保持
      }, 0) >= 42
  );
}
