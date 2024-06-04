function bubbleSort(arr) {
  //調べる範囲の開始位置を１つずつ後ろへ移動するfor文
  for (var i = 0; i < arr.length; i++) {
    //後ろから前に向かって小さい値を浮かび上がらせるfor文
    for (var j = arr.length - 1; j > i; j--) {
      //隣りあう２つの値を比べて、後ろが小さければ交換する
      if (arr[j] < arr[j - 1]) {
        var tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
  }
  return arr;
}
//ソート前の配列データ
let n = [1, 3, 10, 2, 8];
//ソート後の配列の表示
console.log(bubbleSort(n));
