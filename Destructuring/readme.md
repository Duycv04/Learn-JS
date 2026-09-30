# Destructuring trong JavaScript

Destructuring (phân rã) là cú pháp giúp lấy dữ liệu từ `Array` hoặc `Object` và gán vào các biến một cách ngắn gọn.

## 1. Array destructuring

Các biến nhận giá trị theo thứ tự phần tử trong mảng.

```js
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Red
console.log(secondColor); // Green
console.log(thirdColor); // Blue
```

## 2. Bỏ qua phần tử

Dùng dấu phẩy để bỏ qua vị trí không cần lấy.

```js
const scores = [8, 9, 10];
const [firstScore, , lastScore] = scores;

console.log(firstScore); // 8
console.log(lastScore); // 10
```

## 3. Giá trị mặc định trong Array

Giá trị mặc định được dùng khi phần tử tương ứng là `undefined`.

```js
const settings = ["dark"];
const [theme, language = "vi"] = settings;

console.log(theme); // dark
console.log(language); // vi
```

Giá trị `null` không kích hoạt giá trị mặc định:

```js
const [displayName = "Guest"] = [null];
console.log(displayName); // null
```

## 4. Phần còn lại với rest

`...rest` gom các phần tử chưa được gán vào một mảng mới. Rest phải nằm ở cuối.

```js
const numbers = [10, 20, 30, 40];
const [firstNumber, ...remainingNumbers] = numbers;

console.log(firstNumber); // 10
console.log(remainingNumbers); // [20, 30, 40]
```

## 5. Hoán đổi giá trị

```js
let first = "A";
let second = "B";

[first, second] = [second, first];

console.log(first); // B
console.log(second); // A
```

## 6. Destructuring mảng lồng nhau

```js
const matrix = [1, [2, 3]];
const [one, [two, three]] = matrix;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
```

## 7. Object destructuring

Tên biến mặc định phải trùng với tên property.

```js
const user = {
  name: "Duy",
  age: 20,
};

const { name, age } = user;

console.log(name); // Duy
console.log(age); // 20
```

Thứ tự khai báo không cần trùng thứ tự property trong object.

## 8. Đổi tên biến

Dùng cú pháp `property: tenBienMoi`.

```js
const product = {
  name: "Laptop",
  price: 20000000,
};

const { name: productName, price: productPrice } = product;

console.log(productName); // Laptop
console.log(productPrice); // 20000000
```

## 9. Giá trị mặc định trong Object

```js
const account = {
  username: "duy",
};

const { username, role = "visitor" } = account;

console.log(username); // duy
console.log(role); // visitor
```

Giá trị mặc định chỉ dùng khi property có giá trị `undefined`, không dùng khi giá trị là `null`.

## 10. Phần còn lại của Object

Object rest gom những property chưa được lấy thành một object mới.

```js
const profile = {
  name: "Duy",
  age: 20,
  city: "Bắc Ninh",
};

const { name: profileName, ...otherInfo } = profile;

console.log(profileName); // Duy
console.log(otherInfo); // { age: 20, city: "Bắc Ninh" }
```

## 11. Destructuring Object lồng nhau

```js
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

console.log(city); // Hà Nội
console.log(district); // Cầu Giấy
```

## 12. Lấy property có tên động

Dùng `[]` khi tên property được lưu trong một biến.

```js
const fieldName = "email";
const contact = {
  email: "hello@example.com",
};

const { [fieldName]: emailAddress } = contact;
console.log(emailAddress); // hello@example.com
```

## 13. Destructuring trong tham số function

### Với Object

```js
function introduce({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

introduce({ name: "Duy", age: 20 });
```

Có thể đặt object mặc định để function gọi không truyền đối số vẫn chạy:

```js
function showOptions({ theme = "light" } = {}) {
  console.log(theme);
}

showOptions(); // light
showOptions({ theme: "dark" }); // dark
```

### Với Array

```js
function add([firstNumber, secondNumber]) {
  return firstNumber + secondNumber;
}

console.log(add([3, 4])); // 7
```

## 14. Phân biệt rest và spread

Cả hai cùng dùng dấu `...`, nhưng chức năng tùy theo vị trí:

- **Rest** gom nhiều phần tử/property thành một biến.
- **Spread** trải các phần tử/property ra.

```js
const [firstItem, ...restItems] = [1, 2, 3]; // rest: gom lại
const copiedItems = [...restItems, 4]; // spread: trải ra

console.log(firstItem); // 1
console.log(copiedItems); // [2, 3, 4]
```

## 15. Lưu ý

- Array destructuring lấy theo **vị trí**; Object destructuring lấy theo **tên property**.
- Nếu phần tử hoặc property không tồn tại, biến nhận `undefined` trừ khi có giá trị mặc định.
- `const` và `let` đều dùng được để khai báo biến destructuring.
- Với Object, đổi tên dùng `property: tenBienMoi`, không phải cú pháp gán thông thường.

## Tổng kết

Destructuring giúp code ngắn gọn khi lấy dữ liệu từ mảng và object. Hãy luyện tập với array, object lồng nhau, giá trị mặc định, rest và tham số function để sử dụng thành thạo.

## Chạy ví dụ

Mở terminal tại thư mục `Destructuring` và chạy:

```bash
node destructuring.js
```
