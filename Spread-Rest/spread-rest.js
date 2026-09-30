// SPREAD VÀ REST TRONG JAVASCRIPT
// Chạy file bằng Node.js: node spread-rest.js

// 1. Spread: sao chép và nối Array
const originalNumbers = [1, 2, 3];
const copiedNumbers = [...originalNumbers];
const extendedNumbers = [0, ...originalNumbers, 4];

console.log("array copy:", copiedNumbers);
console.log("different array:", copiedNumbers !== originalNumbers);
console.log("array combine:", extendedNumbers);

// 2. Spread: truyền các phần tử Array thành đối số
const measurements = [12, 25, 18];
console.log("maximum:", Math.max(...measurements));

// 3. Spread: sao chép, gộp và cập nhật Object
const basicUser = {
  name: "Duy",
  age: 20,
};
const userWithCity = { ...basicUser, city: "Bắc Ninh" };
const userUpdate = { ...basicUser, age: 21 };

console.log("object copy with property:", userWithCity);
console.log("object update:", userUpdate);

// Property phía sau ghi đè property trùng tên phía trước.
const defaultSettings = { theme: "light", language: "vi" };
const customSettings = { theme: "dark" };
const mergedSettings = { ...defaultSettings, ...customSettings };

console.log("merged object:", mergedSettings);

// 4. Rest parameter: gom các đối số thành một Array
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

function introduce(groupName, ...names) {
  return `${groupName}: ${names.join(", ")}`;
}

console.log("sum:", sum(1, 2, 3, 4));
console.log("rest parameters:", introduce("Lớp", "An", "Bình", "Chi"));

// 5. Rest trong Array destructuring
const scores = [9, 8, 7, 10];
const [topScore, ...otherScores] = scores;

console.log("array rest:", topScore, otherScores);

// 6. Rest trong Object destructuring
const profile = {
  name: "Duy",
  age: 20,
  city: "Bắc Ninh",
};
const { name: profileName, ...otherDetails } = profile;

console.log("object rest:", profileName, otherDetails);

// 7. Spread chuỗi thành các ký tự
const letters = [..."JS"];
console.log("string spread:", letters);

// 8. Spread chỉ tạo bản sao nông
const originalProfile = {
  name: "An",
  address: { city: "Hà Nội" },
};
const shallowCopy = { ...originalProfile };
shallowCopy.address.city = "Đà Nẵng";

console.log("nested value after shallow copy:", originalProfile.address.city);
