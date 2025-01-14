//condition3.js
// 2개의 숫자 입력

let input_1 = prompt('첫 번째 숫자 입력:');
let input_2 = prompt('두 번째 숫자 입력:');

num_1 = parseInt(input_1);
num_2 = parseInt(input_2);

if (isNaN(num_1) || isNaN(num_2) || num_1 == 0 || num_2 == 0) {
  console.log('정확한 값을 입력해주세요.');
} else if (num_1 % 2 == 0 && num_2 % 2 == 0) {
  console.log(`${num_1}, ${num_2} 모두 짝수 입니다.`);
} else if (num_1 % 2 == 0 || num_2 % 2 == 0) {
  console.log(`${num_1}, ${num_2} 둘 중 하나는 짝수입니다.`);
} else {
  console.log(`${num_1}, ${num_2} 모두 짝수가 아닙니다.`);
}
