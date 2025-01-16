// function4.js

let item = document.querySelector('button');
console.log(item);

item.addEventListener('click', function () {
  alert('마우스 클릭!');
});

item.addEventListener('mouseover', function () {
  item.style.backgroundColor = 'yellow';
});

item.addEventListener('mouseout', function () {
  item.style.backgroundColor = '';
});

