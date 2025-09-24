let score = 10;
const userName = "Kosuke";
let isLoggedIn = true;

console.log(score);
console.log(userName);
console.log(isLoggedIn);

score = 15 ;
console.log(score);

if (isLoggedIn) {
  console.log("マイページへ進みます");
} else {
  console.log("ログインしてください");
}