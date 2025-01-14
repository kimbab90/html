// condition2.js
// 입력받은 숫자 값이 2의 배수인지 또는 3의 배수인지
// 공배수일 경우 모두 표현할 것

let input = Number(prompt('정수를 입력하세요 :'));

console.log(input);

if (Number.isNaN(input) || input == 0) {
  console.log('정확한 값을 입력하세요!')
} else {
  if (input % 2 == 0 && input % 3 == 0) {
    console.log(`${input}은 2와 3의 배수입니다.`);
  } else if (input % 2 == 0) {
    console.log(`${input}은 2의 배수입니다.`);
  } else if (input % 3 == 0) {
    console.log(`${input}은 3의 배수입니다.`)
  } else {
    console.log(`${input}은 2와 3의 배수가 아닙니다.`)
  }
}