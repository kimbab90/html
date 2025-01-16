// function2.js

let array_1 = [3, 15, 22, 7];
let array_2 = [23, 11, 45, 30];
let array_3 = [];

for (let i = 0; i < 5; i++) {
  array_3[i] = parseInt(Math.random() * 50);
}

// function getMax(number_array = []) {
function getMax(number_array) {

  let max = 0;
  for (let i = 0; i < number_array.length; i++) {
    if (max < number_array[i]) {
      max = number_array[i];
    }
  }
  // console.log(number_array);
  console.log(max);
  // alert(`${number_array} 배열의 최고값은 ${max} 입니다!`);
  return max;
}

document.write(getMax(array_1));
alert(getMax(array_2));
getMax(array_3);

// undefined