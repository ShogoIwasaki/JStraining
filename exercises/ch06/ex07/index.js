export function assign(target, ...sources) {
  sources.forEach((source) => {
    // 静的な Reflect.ownKeys() メソッドは、target オブジェクトが持つプロパティキーの配列を返します
    Reflect.ownKeys(source).forEach((key) => {
      Reflect.set(target, key, source[key]);
    });
  });
  return target;
}