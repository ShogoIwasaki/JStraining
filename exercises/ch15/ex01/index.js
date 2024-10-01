// フォーム、リスト、入力フィールドの要素を取得
const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

// フォームの送信イベントにリスナーを追加
form.addEventListener("submit", (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  // フォームのデフォルトの送信動作をキャンセルするため
  e.preventDefault(); // form のイベントのキャンセルを実施

  // 両端からホワイトスペースを取り除いた文字列を取得する
  if (input.value.trim() === "") {
    return;
  }
  // 入力値を取得し、入力フィールドをクリア
  const todo = input.value.trim();
  // new-todo の中身は空にする
  input.value = "";

  // ここから #todo-list に追加する要素を構築する
  // 新しいリストアイテム要素を作成
  const elem = document.createElement("li");

  // ラベル要素を作成し、テキストと装飾を設定
  const label = document.createElement("label");
  label.textContent = todo;
  label.style.textDecorationLine = "none";

  // チェックボックス要素を作成し、変更イベントにリスナーを追加
  const toggle = document.createElement("input");
  // TODO: toggle が変化 (change) した際に label.style.textDecorationLine を変更しなさい
  toggle.type = "checkbox";
  toggle.addEventListener("change", () => {
    // チェックボックスがチェックされている場合はラベルに取り消し線を追加、そうでない場合は取り消し線を削除
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
  });

  // 削除ボタン要素を作成し、クリックイベントにリスナーを追加
  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に elem を削除しなさい
  destroy.textContent = "❌";
  destroy.addEventListener("click", () => {
    // ボタンがクリックされた場合はリストアイテムをリストから削除
    list.removeChild(elem);
  });
  // TODO: elem 内に toggle, label, destroy を追加しなさい
  // リストアイテムにチェックボックス、ラベル、削除ボタンを追加
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  // リストの先頭に新しいリストアイテムを追加
  list.prepend(elem);
});
