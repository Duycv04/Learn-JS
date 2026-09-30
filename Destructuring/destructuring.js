// DESTRUCTURING - PHÂN RÃ ARRAY VÀ OBJECT
// Chạy file bằng Node.js: node destructuring.js

// 1. Array destructuring: lấy giá trị theo vị trí
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor, thirdColor] = colors;

console.log("array values:", firstColor, secondColor, thirdColor);

// 2. Bỏ qua phần tử không cần lấy
const scores = [8, 9, 10];
const [firstScore, , lastScore] = scores;

console.log("skip an item:", firstScore, lastScore);

// 3. Giá trị mặc định được dùng khi phần tử là undefined
const settings = ["dark"];
const [theme, language = "vi"] = settings;
const [displayName = "Guest"] = [undefined];

console.log("array defaults:", theme, language, displayName);

// 4. Rest gom các phần tử còn lại thành một mảng
const numbers = [10, 20, 30, 40];
const [firstNumber, ...remainingNumbers] = numbers;

console.log("array rest:", firstNumber, remainingNumbers);

// 5. Hoán đổi giá trị không cần biến tạm
let first = "A";
let second = "B";
[first, second] = [second, first];

console.log("swap:", first, second);

// 6. Destructuring mảng lồng nhau
const matrix = [1, [2, 3]];
const [one, [two, three]] = matrix;

console.log("nested array:", one, two, three);

// 7. Object destructuring lấy giá trị theo tên property
const user = {
  name: "Duy",
  age: 20,
  city: "Bắc Ninh",
};
const { name, age } = user;

console.log("object values:", name, age);

// 8. Đổi tên biến khi destructuring
const product = {
  name: "Laptop",
  price: 20000000,
};
const { name: productName, price: productPrice } = product;

console.log("renamed properties:", productName, productPrice);

// 9. Giá trị mặc định cho property không tồn tại
const account = {
  username: "duy",
};
const { username, role = "visitor" } = account;

console.log("object defaults:", username, role);

// 10. Rest gom các property còn lại
const profile = {
  name: "Duy",
  age: 20,
  city: "Bắc Ninh",
};
const { name: profileName, ...otherInfo } = profile;

console.log("object rest:", profileName, otherInfo);

// 11. Destructuring object lồng nhau
const student = {
  name: "An",
  address: {
    city: "Hà Nội",
    district: "Cầu Giấy",
  },
};
const {
  address: { city, district },
} = student;

console.log("nested object:", city, district);

// 12. Dùng tên property được lưu trong biến
const fieldName = "email";
const contact = {
  email: "hello@example.com",
};
const { [fieldName]: emailAddress } = contact;

console.log("computed property:", emailAddress);

// 13. Destructuring trong tham số function
function introduce({ name: personName, age: personAge }) {
  return `${personName} is ${personAge} years old.`;
}

function showOptions({ selectedTheme = "light" } = {}) {
  return selectedTheme;
}

function add([left, right]) {
  return left + right;
}

console.log("object parameter:", introduce({ name: "Duy", age: 20 }));
console.log(
  "default object parameter:",
  showOptions(),
  showOptions({ selectedTheme: "dark" }),
);
console.log("array parameter:", add([3, 4]));

// 14. Rest gom dữ liệu; spread trải dữ liệu ra
const [firstItem, ...restItems] = [1, 2, 3];
const copiedItems = [...restItems, 4];

console.log("rest and spread:", firstItem, restItems, copiedItems);
