export function sum(arr = []) {
  return arr.reduce((acc, val) => acc + val, 0);
}

export function join(arr, separator = ",") {
  if (arr === undefined) {
    throw new Error("No arguments provided to join function");
  }
  return arr.reduce(
    (acc, val, i) =>
      acc +
      (i > 0 ? separator : "") +
      (val !== null && val !== undefined ? val : ""),
    ""
  );
}

export function reverse(arr) {
  if (arr === undefined) {
    throw new Error("No arguments provided to reverse function");
  }
  return arr.reduce((acc, val) => [val, ...acc], []);
}

export function every(arr = [], func = () => true) {
  return arr.reduce((acc, val, i) => acc && func(val, i, arr), true);
}

export function some(arr = [], func = () => false) {
  return arr.reduce((acc, val, i) => acc || func(val, i, arr), false);
}
