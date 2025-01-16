// function5.js
// this 
let object = {
  name: "홍길동",
  birth: "1998-01-01",
  blood_type: "O",
  showInfo: function () {
    console.log(`이름은 ${this.name}`);
    console.log(`생일은 ${this.birth}`)
    console.log(`혈액형은 ${this.blood_type}`)
  },
  addNumber: function (num_1 = 0, num_2 = 0) {
    return num_1 + num_2;
  },
  calculateFnc: function (num_1, num_2, calFnc) {
    return calFnc(num_1, num_2);
  }
}


object.showInfo();
console.log(object.calculateFnc(10, 20, function(a, b) {
  return a - b;
}));
console.log(object.calculateFnc(10, 20, function(a, b) {
  return a + b;
}));
console.log(object.calculateFnc(10, 20, object.addNumber));