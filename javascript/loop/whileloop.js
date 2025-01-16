// whileloop.js


let i = 1;

while (i <= 10) {
  console.log(`현재 i의 값 ${i}`);
  i++;
}

let run = true;

while (run) {
  let temp = parseInt((Math.random() * 100) + 1);
  console.log(temp);
  if (temp < 40) {
    run = false;
    // break;
  }
}

console.log(`while loop end`);