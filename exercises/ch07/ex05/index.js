export function pop(arr) { //配列の末尾の要素を削除した新しい配列を返す 
  return arr.slice(0, arr.length - 1);
}

export function push(arr, item) { //配列の末尾に新しい要素を追加した新しい配列を返す
  return [...arr, item];
}

export function shift(arr) { //配列の先頭の要素を削除した新しい配列を返す
  return arr.slice(1);
}

export function unshift(arr, item) { // 配列の先頭に新しい要素を追加した新しい配列を返す
  return [item, ...arr];
}

export function sort(arr, compareFunction) { // 配列の要素をソートした新しい配列を返す
  return [...arr].sort(compareFunction);
}