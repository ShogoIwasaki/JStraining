export function sum(arr = []) { // 配列の全ての要素の合計を計算
  return arr.reduce((acc, val) => acc + val, 0); // 配列の全ての要素を加算
} // reduce関数を使用して、配列の各要素を順に加算し、その合計を返す

export function join(arr, separator = ",") { // 配列の全ての要素を連結
  if (arr === undefined) {
    throw new Error("No arguments provided to join function");
  }
  return arr.reduce( // 配列の全ての要素を連結
    (acc, val, i) =>
      acc +
      (i > 0 ? separator : "") + // 最初の要素以外の前にセパレータを挿入
      (val !== null && val !== undefined ? val : ""), // nullまたはundefinedの要素は空文字列に置き換え
    ""
  );
}

export function reverse(arr) { // 配列の要素を逆順
  if (arr === undefined) {
    throw new Error("No arguments provided to reverse function");
  }
  return arr.reduce((acc, val) => [val, ...acc], []); // 配列の要素を逆順
  // reduce関数を使用して、配列の各要素を新しい配列の先頭に挿入し、その結果を返す
}

export function every(arr = [], func = () => true) { // 配列の全ての要素が指定されたテストをパスするかどうかを判断
  return arr.reduce((acc, val, i) => acc && func(val, i, arr), true);
} // reduce関数を使用して、配列の各要素がテスト関数をパスする場合はtrueを、そうでない場合はfalse

export function some(arr = [], func = () => false) { //配列の少なくとも1つの要素が指定されたテストをパスするかどうかを判断
  return arr.reduce((acc, val, i) => acc || func(val, i, arr), false);
  // reduce関数を使用して、配列の各要素がテスト関数をパスする場合はtrueを、そうでない場合はfalse
}
