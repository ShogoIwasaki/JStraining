// 未実装
import { jest } from '@jest/globals'
const mock = jest.fn();

const obj = {
  x: 0,
  y: 0,
  sum() {
    mock();
    return this.x + this.y;
  },
};

// ここに１行のコードを書く
// Object.defineProperty(obj, "sum", {enumerable: false, value: mock});

obj.x = 1;
obj.y = 2;
expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2}`);
expect(mock).toHaveBeenCalled();

// =>    Expected number of calls: >= 1
// =>    Received number of calls:    0