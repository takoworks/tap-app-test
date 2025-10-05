// js/uiHandler.js
// Stepオブジェクトを受け取り、UI上に1件だけ表示する関数
export function renderStep(step) {
  // <ul id="list"> を取得
  const list = document.querySelector("#list");
  list.innerHTML = ""; // 一度リストを空にする（前のステップを消す）
  const li = document.createElement("li"); // 新しい<li>を生成
  li.textContent = step.text; // テキストを設定
  list.appendChild(li); // <ul>に<li>を追加
}
