// whileloop5.js

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

// while 반복문
while (true) {

  // 이름 입력
  let search_name = prompt("찾을 친구 이름 입력:");

  // 반복 종료
  if (search_name == 'stop') {
    break;
  } else {
    // let count = 0;
    let exist = false;

    // 이름 조회 및 포인트 출력
    for (let i = 0; i < members.length; i++) {
      if (search_name == members[i].member_name) {
        alert(`${search_name}의 포인트는 ${members[i]['point']}입니다.`);
        // count++;
        exist = true;
        break;
      } 
    }

    // if (count == 0) {
    //   console.log(`${search_name}은/는 없습니다.`);
    // }
    if (!exist) {
      alert(`${search_name}은/는 없습니다.`);
    }
  }
}
alert('Program stopped')

// let search_name = prompt("찾을 친구 이름 입력:");

// for (let i = 0; i < members.length; i++) {
//   if (search_name == members[i].member_name) {
//     console.log(`${search_name}의 포인트는 ${members[i]['point']}`);
//   }
// }