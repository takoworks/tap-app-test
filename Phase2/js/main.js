// js/main.js
import { steps } from "./stepData.js";
import { renderStep } from "./uiHandler.js";
import { nextIndex, prevIndex } from "./navigation.js";

let index = 0;

function showCurrent() {
  renderStep(steps[index]);
}

document.addEventListener("DOMContentLoaded", () => {
  showCurrent();

  const nextBtn = document.querySelector("#next");
  const prevBtn = document.querySelector("#prev");

  nextBtn.addEventListener("click", () => {
    index = nextIndex(index, steps.length);
    showCurrent();
  });

  prevBtn.addEventListener("click", () => {
    index = prevIndex(index, steps.length);
    showCurrent();
  });
});
