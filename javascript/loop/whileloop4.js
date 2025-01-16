// whileloop4.js

// member_id, member_name, point

let member_1 = {
  member_id: "user01",
  member_name: "홍길동",
  point: 80
}

let member_2 = {
  member_id: "user02",
  member_name: "홍길돈",
  point: 90
}

let member_3 = {
  member_id: "user03",
  member_name: "홍길덕",
  point: 85
}

let members = [];

members = [member_1, member_2, member_3];

// members[0] = member_1;
// members[1] = member_2;
// members[2] = member_3;

console.log(members);

//=============================
let max_point = 0;
let max_id = '';
let max = members[0];

for (let member of members) {
  if (max['point'] < member['point']) {
    max = member;
  }
}

console.log(`최고 포인트: ${max['point']}, 소유자: ${max['member_name']}, ${max['member_id']}`);

// for (let i = 0; i < members.length; i++) {
//   if (max_point < members[i].point) {
//     max_point = members[i].point;
//     max_id = members[i]['member_id'];
//   }
// }

// console.log(`최고 포인트는 ${max_point}이고, 소유자는 ${max_id}`);