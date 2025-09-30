// 親要素（リスト）を取得
const list = document.querySelector("#list");
const addBtn = document.querySelector("#addBtn");
const box = document.querySelector("#list");


// ボタンを押したときの処理
addBtn.addEventListener("click", () => {
  // li要素を作成
  const li = document.createElement("li");
  li.textContent = "新しい項目";

  // 削除ボタンを作成
  const delBtn = document.createElement("button");
  delBtn.textContent = "削除";

  // 削除ボタンにクリックイベントを追加
  delBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  // liに削除ボタンを追加
  li.appendChild(delBtn);

  // アニメーション用クラスを追加
  li.classList.add("fade");

    // リストにliを追加
  list.appendChild(li);

    li.addEventListener("click", () => {
    li.classList.toggle("active");
    });

  
});




