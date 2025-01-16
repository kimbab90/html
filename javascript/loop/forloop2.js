// forloop2.js

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

document.write('<h3>Hello,</h3>');
document.write('<p>World</p>');

let html = '';
html += `<table style='border: 2px dotted red; border-collapse: collapse;'>`;
html += '<tbody>';
for (let j = 2; j < 10; j++) {

}

for (let i = 1; i < 10; i++) {
  html += '<tr>';
  if (i % 2 == 0) {
    html += `<td style='background-color: yellow;'> 2 * ${i} = ${2 * i} </td>`;
  } else {
    html += `<td style='background-color: orange;'> 2 * ${i} = ${2 * i} </td>`;
  }
  html += '</tr>';
}
html += '</tbody>';
html += '</table>';
document.write(html);