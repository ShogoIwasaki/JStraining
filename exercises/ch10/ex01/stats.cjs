module.exports = class BitSet extends AbstractWritableSet {
  constructor(max) {
    super();
    this.max = max; // 保存可能な最大整数。
    this.n = 0; // セット中に含まれる整数の数。
    this.numBytes = Math.floor(max / 8) + 1; // 必要となるバイト数。
    this.data = new Uint8Array(this.numBytes); // バイトの配列。
  }
  // このセットに保存可能な値かどうかを確認する内部メソッド。
  _valid(x) {
    return Number.isInteger(x) && x >= 0 && x <= this.max;
  }
  // data配列のあるバイトのあるビットが立っているかどうかを調べる。
  // trueまたはfalseを返す。
  _has(byte, bit) {
    return (this.data[byte] & BitSet.bits[bit]) !== 0;
  }
  // 値xがBitSetに含まれるかどうか。
  has(x) {
    if (this._valid(x)) {
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      return this._has(byte, bit);
    } else {
      return false;
    }
  }
  // 値xをBitSetに挿入する。
  insert(x) {
    if (this._valid(x)) {
      // 値が正当な場合、
      let byte = Math.floor(x / 8); // バイトとビットに変換する。
      let bit = x % 8;
      if (!this._has(byte, bit)) {
        // そのビットがまだ立っていない場合、
        this.data[byte] |= BitSet.bits[bit]; // ビットを立てる。
        this.n++; // セットの大きさをインクリメントする。
      }
    } else {
      throw new TypeError("Invalid set element: " + x);
    }
  }
  remove(x) {
    if (this._valid(x)) {
      // 値が正当な場合、
      let byte = Math.floor(x / 8); // バイトとビットを計算する。
      let bit = x % 8;
      if (this._has(byte, bit)) {
        // そのビットが立っていた場合、
        this.data[byte] &= BitSet.masks[bit]; // ビットを落とす。
        this.n--; // セットの大きさをデクリメントする。
      }
    } else {
      throw new TypeError("Invalid set element: " + x);
    }
  }
  // セットの大きさを返すゲッターメソッド。
  get size() {
    return this.n;
  }
  // 単にビットが立っているかどうかをチェックすることで巡回する。
  // （このコードはあまり賢くなく、大幅に最適化できる。）
  *[Symbol.iterator]() {
    for (let i = 0; i <= this.max; i++) {
      if (this.has(i)) {
        yield i;
      }
    }
  }
};
