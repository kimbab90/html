// forloop4.js

// let student_count = 10;

//Math.random() 0<= x < 1 >>> 0 <= x < 100 >>> 1 <= x < 101
// 0 <= x < 1

let scores = []; // 점수 배열
let sum_score = 0; // 점수 총합
let high_score = 0; // 최고 점수
let average; // 평균 점수

//반복문 1~10
for (let i = 0; i < 10; i++) {
  //점수 저장, 50 ~ 100 범위
  scores[i] = parseInt((Math.random() * 51) + 50);
  console.log(scores[i]);
  
  // 점수 총합
  sum_score += scores[i];
  
  // 최고 점수
  if (scores[i] > high_score) {
      high_score = scores[i];
  }
}
// 평균 점수
average = sum_score / 10;

//출력
console.log(`점수 : ${scores}`);
console.log(`최고 점수 : ${high_score}`);
console.log(`평균 : ${average}`);