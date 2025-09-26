const steps = ["材料を準備", "切る", "焼く", "盛り付け"];
let current = 0;

const btn = document.querySelector("#stepBtn");
const msg = document.querySelector("#msg");

btn.addEventListener("click", function() {
  if (current < steps.length) {
    msg.textContent = steps[current];
    current++;
  } else {
    msg.textContent = "すべてのステップが終了しました";
  }
});
