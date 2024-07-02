1.nest.nm()を実行時
nm()は通常の関数なため、thisは呼び出し元のオブジェクト（nest）を指す。
よってthis === obj はfalse、this === nestはtrueとなる。

2.nest.arrow()を実行時
arrowはアロー関数なため、thisは定義されたスコープ(om関数のスコープ)のthisを継承する。
よってthis === obj はtrue、this === nestはfalseになる。