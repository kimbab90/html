// todo2.js

//quiz_1

let num_1 = parseInt((Math.random() * 100) + 1);
let num_2 = parseInt((Math.random() * 100) + 1);
let num_3 = parseInt((Math.random() * 100) + 1);

console.log(num_1, num_2, num_3);

if (num_1 == num_2 && num_1 == num_3) {
    console.log(3);
} else if (num_1 == num_2 || num_1 == num_3 || num_2 == num_3) {
    console.log(2);
} else {
    console.log(0);
}

//quiz_2

let num_4 = parseInt((Math.random() * 100) + 1);
let num_5 = parseInt((Math.random() * 100) + 1);

console.log(num_4, num_5);

let sum = num_4 + num_5;
let sum_even = 10;
let sum_odd = 20;

if (sum % 2 == 0) {
    console.log(sum_even + sum);
} else {
    console.log(sum_odd + sum);
}

//quiz_3

let input_1 = parseInt(prompt('첫 번째 정수 입력:'));
let input_2 = parseInt(prompt('두 번째 정수 입력:'));

console.log(input_1, input_2);

input_1 += 15;
input_2 /= 2;

console.log(input_1 - input_2);

//quiz_4

const time = 2222;

let min = time % 60;
let hour = parseInt(time % (24 * 60));
let day = parseInt(time / (24 * 60));

console.log(`${time} 분은 ${day}일 ${hour}시간 ${min}분 입니다.`)


//quiz_5
