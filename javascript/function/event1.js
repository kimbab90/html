// event1.js

let plus = document.querySelector('button[name="plus_button"]');
let minus = document.querySelector('.minus_button');
let clear = document.querySelector('#clear_button');

// let num_1 = parseInt(document.querySelector('#num_1').value);
// let num_2 = document.querySelector('#num_2').valueAsNumber;

// let result = document.querySelector('#result');

plus.addEventListener('click', function () {
  let num_1 = parseInt(document.querySelector('#num_1').value);
  // let num_1_1 = parseInt(document.querySelector('.num_1').value);
  // let num_1_2 = parseInt(document.querySelector('input[name="num_1"]').value);
  // let num_1 = document.querySelector('#num_1').valueAsNumber;

  // console.log(num_1, num_1_1, num_1_2);

  // console.dir(num_1);
  let num_2 = document.querySelector('#num_2').valueAsNumber;
  // console.dir(num_2);

  document.querySelector('#result').value = num_1 + num_2;
  // document.querySelector('#result')['value'] = num_1 + num_2;

});

minus.addEventListener('click', function () {
  let num_1 = parseInt(document.querySelector('#num_1').value);
  let num_2 = document.querySelector('#num_2').valueAsNumber;

  document.querySelector('#result')['value'] = num_1 - num_2;
});

clear.addEventListener('click', function () {
  document.querySelector('.num_1').value = '';
  document.querySelector('input[name="num_2"]').value = '';

  document.querySelector('#result')['value'] = '';
});