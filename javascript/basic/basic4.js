// basic4.js
// 시 -> 일/시
// 분 -> 일/시/분

let input_1 = Number(prompt('시간 입력'));

let hour_1 = input_1 % 24;
let date_1 = (input_1 - hour_1) / 24;

console.log(`${input_1} 시간은 ${date_1} 일 ${hour_1} 시입니다.`);

// let input_2 = Number(prompt('분 입력'));
let input_2 = 89345;

let minute_2 = input_2 % 60;
let hour_2 = (input_2 - minute_2) / 60 % 24;
let date_2 = (input_2 - (hour_2 * 60) - minute_2) / 60 / 24;

console.log(`${input_2} 분은 ${date_2} 일 ${hour_2} 시간 ${minute_2} 분입니다.`);

let input_3 = 89345;

let minute_3 = input_3 % 60;
let hour_3 = parseInt(input_3 % (24 * 60) / 60);
let date_3 = parseInt(input_3 / (24 * 60));

console.log(`${input_3} 분은 ${date_3} 일 ${hour_3} 시간 ${minute_3} 분입니다.`);
