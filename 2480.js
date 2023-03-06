const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

let result = 0;
let maxRes = 0;

if (a === b && b === c) {
  result = 10000 + a * 1000;
} else if (a === b || b === c || a === c) {
  if (a === b || a === c) {
    result = 1000 + a * 100;
  } else {
    result = 1000 + b * 100;
  }
} else {
  maxRes = Math.max(...input);
  result = maxRes * 100;
}
console.log(result);
