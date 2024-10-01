type="module"を削除した場合、スクリプトは通常のスクリプトとして扱われ、モジュールスコープではなくグローバルスコープで実行されimportやexportといったES6モジュールの機能が使えなくなるため、DOMContentLoadedイベントリスナーを使用し、HTMLドキュメントが完全に読み込まれてからスクリプトが実行されるように実装する。


```javascript
window.addEventListener('DOMContentLoaded', (event) => {
//index.js中身
}
```

