const steps = [
  "野菜を切る",
  "フライパンを熱する",
  "肉を焼く",
  "調味料を加える",
  "盛り付ける"
];

let currentIndex = 0;

const stepText = document.querySelector("#step");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const bar = document.querySelector("#bar");

// 手順を表示
function showStep() {
  stepText.textContent = steps[currentIndex];
  updateProgress();
}

// 進行状況バーを更新
function updateProgress() {
  const percent = ((currentIndex + 1) / steps.length) * 100;
  bar.style.width = percent + "%";
}

// ボタンイベント
nextBtn.addEventListener("click", () => {
  if (currentIndex < steps.length - 1) {
    currentIndex++;
    showStep();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showStep();
  }
});

// 最初の表示
showStep();
