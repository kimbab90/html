// condition.js

// const object = {
//   name: "홍길동",
//   age: 20,
//   showName: function() { // method
//     console.log(object.name);
//   }
// }

// object.showName();

// console.log(parseInt(Math.random() * 10) + 1); // 0 < x < 1 
let num_1 = parseInt(Math.random() * 10) + 1;
let num_2 = parseInt(Math.random() * 10) + 1;

let sum_even = 10;
let sum_odd = 20;

// truthy : 
// falsy : false, 0, "", '', null, undefined, NaN

if (num_1 % 2) {
  sum_odd += num_1;
  // sum_even = num_1 + sum_even;
} else {
  sum_even += num_1;
}

if (num_2 % 2 == 0) {
  sum_even += num_2;
} else {
  sum_odd += num_2;
}

console.log(num_1, num_2);
console.log(`추출된 숫자는 ${num_1},${num_2} 이며, 결과값은 ${sum_even}, ${sum_odd} 이다`);