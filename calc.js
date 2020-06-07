const errors = document.querySelector("#errors");
const c = document.querySelector("#c");
const e = document.querySelector("#e");
const d = document.querySelector("#d");
const b = document.querySelector("#b");
const p = document.querySelector("#p");
const p1 = document.querySelector("#p1");
const resultBox = document.querySelector("#result");
const calculateButton = document.querySelector("#calculate");

function toNumber(doc) {
  return parseFloat(doc.value);
}
function calculate() {
  let result = 1;

  const left = (toNumber(c) * toNumber(e) * Math.PI) / 4;
  const center1 = Math.pow(1 - Math.pow(toNumber(b), 4), -0.5);
  const center = Math.pow(toNumber(d), 2) * center1;

  //   console.log(Math.pow(2, -0.5));
  //   console.log(Math.sqrt(2) / 2);
  console.log(center1);
  console.log(center);

  const right1 = 2 * toNumber(p) * toNumber(p1);
  const right = Math.sqrt(right1);

  console.log(left * center * right);
  result = left * center * right;
  resultBox.innerHTML = "m = " + result;
}

calculateButton.addEventListener("click", calculate);
