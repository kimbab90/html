// fucntion1.js

let number_array_1 = [1, 2, 3];
let number_array_2 = [4, 5, 6];
let number_array_3 = [7, 8, 9];

function array_sum(number_array = []) {
  let sum = 0;
  for (let number of number_array) {
    sum += number;
  }
  alert(`배열의 합은 ${sum}`);
}

// for (let i = 0; i < number_array_2.length; i++) {
//   sum += number_array_2[i]W;
// }

// for (let i = 0; i < number_array_3.length; i++) {
//   sum += number_array_3[i];
// }

array_sum(number_array_1);
array_sum(number_array_2);
array_sum(number_array_3);
array_sum([10, 30, 50]);
