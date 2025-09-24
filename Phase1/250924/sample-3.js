let score = 75;

if (score >= 90) {
  console.log("評価: A");
} else if (score >= 70) {
  console.log("評価: B");
} else {
  console.log("評価: C");
}

let isMember = false;
let purchase = 3000;

if (isMember && purchase > 2000) {
  console.log("20%割引が適用されます");
} else {
  console.log("割引なし");
}

let today = "木";

switch (today) {
  case "月":
    console.log("会議の日");
    break;
  case "火":
    console.log("資料作成の日");
    break;
  case "水":
    console.log("外出の日");
    break;
  default:
    console.log("自由作業の日");
}

let currentStep = 1;
let totalSteps = 3;

function goNext() {
  if (currentStep < totalSteps) {
    currentStep++;
    console.log("現在のステップ:", currentStep);
  } else {
    console.log("最後のステップです！");
  }
}

goNext();
goNext();
goNext();
