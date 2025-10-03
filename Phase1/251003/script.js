// script.js
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.classList.toggle("active");
    });
  });

button.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.classList.toggle("active");
    });
  });