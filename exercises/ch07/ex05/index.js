export function pop(arr) {
  return arr.slice(0, arr.length - 1);
}

export function push(arr, item) {
  return [...arr, item];
}

export function shift(arr) {
  return arr.slice(1);
}

export function unshift(arr, item) {
  return [item, ...arr];
}

export function sort(arr, compareFunction) {
  return [...arr].sort(compareFunction);
}