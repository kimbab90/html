// forloop1.js
let sum = 0;
let i = 1;

for (; i <= 10; i++) {
  console.log(`현재 i의 값 : ${i}`);
  if (i % 2 == 0) sum += i;
  console.log(`현재 sum의 값 : ${sum}`);
}
console.log(`end of for... sum의 값 : ${sum}`);
