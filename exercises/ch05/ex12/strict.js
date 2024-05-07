let obj = { prop1: "value1", prop2: "value2", prop3: "value3" };

let start = performance.now();
for (let i = 0; i < 1000000; i++) {
  with (obj) {
    let y1 = prop1;
    let y2 = prop2;
    let y3 = prop3;
  }
}
let end = performance.now();
console.log("Property access time with `with`: " + (end - start) + " ms");
