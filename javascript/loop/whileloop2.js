// whileloop2.js

// let scores = [];

// 최고 점수
let high_score = 0;

// 반복문 실행
while (true) {
  // 값 입력
  let input_value = prompt('점수 입력 : ');
  console.log(input_value);

  // // 값 조건 비교
  // if (input_value == 'stop') {
  //   // 반복문 종료
  //   break;
  // } else {
  //   // 자료형 변환 
  //   let input_number = parseInt(input_value);
  //   // NaN 확인
  //   if (isNaN(input_number)) {
  //     console.log('입력 오류!');
  //   } else if (high_score < input_number) {
  //     // 최고 점수 비교
  //     high_score = input_number
  //   }
  // }

  let temp = parseInt(input_value);
  if (isNaN(temp)) {
    if (input_value == 'stop') {
      break;
    } else {
      alert('정수를 입력해주세요!');
    }
  } else if (high_score < temp) {
    // 최고 점수 비교
    high_score = temp;
  }
}

console.log(`최고 점수 : ${high_score}`);
console.log('while loop end');