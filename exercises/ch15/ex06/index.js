// ブラウザのユーザーエージェントヘッダーを取得
var txt = "<b>User-agent header:</b> " + navigator.userAgent + "<br>";

// IDが'info'の要素のHTML内容を作成した文字列で置き換える
var info = document.getElementById('info');
info.innerHTML = txt;
