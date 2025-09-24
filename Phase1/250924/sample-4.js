for (let i = 1; i <= 5; i++) {
  console.log("カウント:", i);
}

let n = 3;
while (n > 0) {
  console.log("残り:", n);
  n = n - 1;
}
 
let steps = ["材料を用意する", "混ぜる", "焼く"]; // 手順の配列を定義
 
for (let i = 0; i < steps.length; i++) {
  console.log("ステップ", i + 1, ":", steps[i]);
}


for (let step of steps) {
  console.log("やること:", step);
}

let currentStep = 1;

for (let i = 0; i < steps.length; i++) {
  if (i + 1 === currentStep) {
    console.log("👉 現在のステップ:", steps[i]);
  } else {
    console.log("   ステップ", i + 1, ":", steps[i]);
  }
}
