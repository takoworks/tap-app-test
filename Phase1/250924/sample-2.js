function greet(name) {
  return "こんにちは、" + name + "!";
}

console.log(greet("Kosuke"));
console.log(greet("Yuki"));

function showTime() {
  const now = new Date();
  console.log("現在の時刻:", now.toLocaleTimeString());
}

showTime();

function add(a, b) {
  return a + b;
}

console.log(add(5, 7));   // 12
console.log(add(100, 50)); // 150

let currentStep = 1;

function goNext() {
  currentStep = currentStep + 1;
  console.log("現在のステップ:", currentStep);
}

goNext(); // 2
goNext(); // 3
