// forloop3.js

let num_array = [10, 20, 30, 40]; //배열 생성
num_array[4] = 50;
num_array[5] = 60;
num_array[6] = 70;
num_array[7] = 80;

console.log(num_array);
console.log(num_array.length);

let sum = 0;

for (let i = 0; i < num_array.length; i++) {
  sum += num_array[i];
  console.log(num_array[i]);
  console.log(sum);
}

//
let pos = 3;
let temp = num_array[pos];
num_array[pos] = num_array[pos + 1];
num_array[pos + 1] = temp;

console.log(num_array);
