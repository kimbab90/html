// event.js

let print_button = document.querySelector('#print_button');

print_button.addEventListener('click', function () {
  let number = document.querySelector('#number_input').valueAsNumber;
  let show = document.querySelector('div#show');
  let html = '';

  for (let i = 1; i < 10; i++) {
    html += `<p><b>${number} * ${i}  = ${number * i}</b></p>`;
  }
  show.innerHTML = html;
  // document.write(html);
});