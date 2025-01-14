// condition5.js

let num_1 = parseInt((Math.random() * 45) + 1);
let num_2 = parseInt((Math.random() * 45) + 1);
let num_3 = parseInt((Math.random() * 45) + 1);
let num_4 = parseInt((Math.random() * 45) + 1);
let num_5 = parseInt((Math.random() * 45) + 1);
let num_6 = parseInt((Math.random() * 45) + 1);
let num_7 = parseInt((Math.random() * 45) + 1);

// 두 수의 차

console.log(num_1, num_2, num_3);
console.log(num_4, num_5, num_6);
console.log(num_5);
// if (num_1 > num_2) {
//   console.log(num_1 - num_2);
// } else {
//   console.log(num_2 - num_1);
// }

// 가장 큰 값 출력

if (num_1 >= num_2) {
  if (num_1 >= num_3) {
    console.log(num_1);
  } else {
    console.log(num_3);
  }
} else if (num_2 >= num_3) {
  console.log(num_2);
} else {
  console.log(num_3);
}

if (num_1 >= num_2 && num_1 >= num_3) {
  console.log(num_1);
} else if (num_2 >= num_1 && num_2 >= num_3) {
  console.log(num_2);
} else{
  console.log(num_3);
}