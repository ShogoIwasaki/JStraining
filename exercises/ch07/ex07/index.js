function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
let n = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(n));
