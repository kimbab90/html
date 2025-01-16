// function3.js

function getAverage(num_1 = 0, num_2 = 0) {
  let sum = 0, avg = 0;
  sum = num_1 + num_2;
  avg = sum / 2;
  return avg;
}

document.write(`<p>${getAverage(20)}</p>`);
document.write(`<p>${getAverage(getAverage(20, 30), getAverage(80, 10))}</p>`);