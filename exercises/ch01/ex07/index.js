export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(point) {
    this.x += point.x;
    this.y += point.y;
  }
}

// export class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   distance() {
//     return Math.sqrt(
//       this.x * this.x +
//       this.y * this.y
//     );
//   }
// }

// let p = new Point(1,1);
// p.distance();
