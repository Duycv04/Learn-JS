for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//In ra các số từ 1 tới 5

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i <= 5);

//For .. of lấy từng phần từ
const array = [10, 20, 30, 40];
for (const number of array) {
  console.log(number);
}

//For .. in duyệt phần tử key/property của Object;
const user = {
  Id: 1,
  Name: "Duy",
  Age: 21,
  Address: "Bắc Ninh",
};
for (const key in user) {
  console.log(key);
} // lấy key của user
//Id name age address

for (const key in user) {
  console.log(key[user]);
} // lấy property của user
//1 Duy 21 Bắc Ninh

//Break: thoát vòng lặp ngay lập tức
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
} // 0 1 2 3 4

//Continue: bỏ qua lần lặp hiện tại và tiếp tục lặp
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
} // 0 1 2 3 4 6 7 8 9 10
