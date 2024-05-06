function resize1(params) {
  // params が undefined または null でなく、params.max~が存在する場合にその値を返す
  // 値が存在しない場合はデフォルト値を使用する
  let maxWidth = (params && params.maxWidth) || 600;
  let maxHeight = (params && params.maxHeight) || 480;

  console.log({ maxWidth, maxHeight });
}

resize1({});

function resize2(params) {
  // params が undefined または null でない場合に params.max~ にアクセスする。
  // params.max~ が undefined または null の場合、null合体演算子 (??) を使用してデフォルト値を返す。
  let maxWidth = params?.maxWidth ?? 600;
  let maxHeight = params?.maxHeight ?? 480;

  console.log({ maxWidth, maxHeight });
}

resize2({});

// // - params には undefined またはオブジェクトが与えられる
// // - params.maxWidth が与えられる場合 (正の整数と仮定して良い) はその値を利用する
// // - params.maxHeight が与えられる場合 (正の整数と仮定して良い) はその値を利用する
// function resize(params) {
//     let maxWidth = 600;
//     let maxHeight = 480;

//     if (params && params.maxWidth) {
//       maxWidth = params.maxWidth;
//     }

//     if (params && params.maxHeight) {
//       maxHeight = params.maxHeight;
//     }

//     console.log({ maxWidth, maxHeight });
//   }
