//basic.js
/* */

let name = "김철수";
let tel = "연락처";

let object = {
  name: "김철수",
  tel: "010-1234-5498",
  address: "대구시",
};

let large_number = 10000000000000000000000000000000000n;

let scores = [10, 20, 30];

let unknown;

let error = null;

const blood_type = "O";
const PI = 3.14;

object.name = "이민수";

console.log(object);
console.log(object.name);
console.log(object.tel);
console.log(object.address);

console.log('내 이름은 ' + object.name + '입니다.');
console.log(`연락처는 ${object.tel}입니다.`);
console.log(`주소는 ${object.address}입니다.`);
console.log(`반지름이 5인 원의 넓이는 ${5 * 5 * PI}입니다.`)

console.log(typeof object.name);
console.log(typeof large_number);
console.log(typeof (PI == 3));

console.log(large_number);
console.log(typeof object);
console.log(typeof scores);
console.log(typeof unknown);
console.log(typeof error);