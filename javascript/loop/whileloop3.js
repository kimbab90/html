// whileloop.js
// object

let my_info = {
  name: "홍길동",
  age: 20,
  height: 170,
  weight: 65
}; //object

console.log(my_info);
console.log(`이름 : ${my_info.name}, 나이 : ${my_info['age']}`);
console.log(`신장 : ${my_info.height}, 체중 : ${my_info['weight']}`);

//for.. in 
for (let prop in my_info) {
  console.log(`속성 : ${prop}, 값: ${my_info[prop]}`);
}

let name_array = ['홍길동', '김민석', '박석민', '김민수'];

for (let name of name_array) {
  console.log(`이름 : ${name}`);
}

let my_friend_1 = {
  name: "홍길동",
  phone: "010-1111-2222",
  address: "대구시"
}

let my_friend_2 = {
  name: "홍길도",
  phone: "010-2222-2222",
  address: "서울시"
}

let my_friend_3 = {
  name: "홍길돈",
  phone: "010-3333-222",
  address: "부산시"
}

let friends = [my_friend_1, my_friend_2, my_friend_3];
friends[3] = {name: "홍길두", phone: "010-4444-2222", address: "제주시"}

console.log(friends[0].name);
console.log(friends[1]['phone']);
console.log(friends[2]['address']);

for (let i = 0; i < friends.length; i++) {
  console.log(`이름 : ${friends[i].name}`);
  console.log(`이름 : ${friends[i]['phone']}`);
}









// for (let friend of friends) {
//   for (let info in friend) {
//     console.log(friend[info]);
//   }
// }