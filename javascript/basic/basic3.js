//basic3.js

let number_1 = Number(prompt('숫자1 입력: '));
let number_2 = prompt('숫자2 입력: ');
// number_1 = Number(number_1) + 1;
// number_1 = number_1++;
// number_1 = ++number_1;
// number_1++;
number_1 += 3;

// number_2 = Number(number_2) - 1;
// number_2 = number_2--;
// number_2 = --number_2;
// number_2--;
number_2 -= 3;

// let result = ++number_1 / --number_2;
// let result = number_1 / number_2;
let result = number_1 % number_2;

// let result = Number(number_1) * Number(number_2);
// let result = number_1 * number_2;

console.log(number_1);
// console.log(typeof number_1);
console.log(number_2);
// console.log(typeof number_2);
console.log(result);
// console.log(typeof result);3