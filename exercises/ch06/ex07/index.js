export function assign(target, ...sources) {
  sources.forEach((source) => {
    // Reflect.ownKeys ... 指定されたオブジェクトの全ての独自プロパティキーを配列として返す
    Reflect.ownKeys(source).forEach((key) => {
      Reflect.set(target, key, source[key]);
    });
  });
  return target;
}