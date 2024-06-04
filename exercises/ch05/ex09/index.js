export function parseJson(str) {
  try {
    let data = JSON.parse(str);
    return {
        success: true, data: data
    };
  } catch (error) {
    return {
        success: false, error: error.toString()
    };
  }
}

// errorはオブジェクト型で返ってくるので、
// オブジェクトのtoStringメソッドの結果を文字列型に変換したものを、
// 最後に返すためにtoString()で変換する。