// script.js
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "新しいアイテム";
 
    li.addEventListener("click", () => {
        li.classList.toggle("highlight"); // クラスを付け外し
      });
  
    list.appendChild(li);
  });

 