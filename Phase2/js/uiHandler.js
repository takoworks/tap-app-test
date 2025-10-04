// js/uiHandler.js
export function renderStep(step) {
    const list = document.querySelector("#list");
    list.innerHTML = ""; // クリア
    const li = document.createElement("li");
    li.textContent = step.text;
    list.appendChild(li);
  }
  