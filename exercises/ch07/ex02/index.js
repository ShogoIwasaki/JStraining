function fizzbuzz(n) {
  [...Array(n)].map((_, i) => {
    const x = i + 1;
    const output = (x % 3 ? "" : "Fizz") + (x % 5 ? "" : "Buzz");
    console.log(output || x);
  });
}

function sumOfSquaredDifference(f, g) {
  return f.reduce((acc, val, i) => acc + (val - g[i]) ** 2, 0);
}

function sumOfEvensIsLargerThan42(array) {
  return (
    array
      .filter((x) => x % 2 === 0)
      .reduce((acc, val) => {
        return acc + val >= 42 ? acc + val : acc;
      }, 0) >= 42
  );
}
