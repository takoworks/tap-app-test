// 表示したい配列
const fruits = ["リンゴ", "バナナ", "みかん", "ぶどう"];

// 現在の位置を記録する変数
let index = 0;

// DOM要素を取得
const button = document.querySelector("#nextBtn");
const display = document.querySelector("#displayArea");

// ボタンが押されたときの処理
button.addEventListener("click", () => {
  display.textContent = fruits[index]; // 配列の要素を表示
  index++; // 次の位置へ進める

  // 配列の最後まで行ったら最初に戻す
  if (index >= fruits.length) {
    index = 0;
  }
});
