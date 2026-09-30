# Spread và Rest trong JavaScript

Spread và Rest cùng dùng cú pháp ba dấu chấm `...`, nhưng ý nghĩa khác nhau tùy vị trí:

- **Spread** trải các phần tử hoặc property ra.
- **Rest** gom các phần tử hoặc property còn lại vào một biến.

> Đây là cú pháp `...` của JavaScript, không phải một toán tử độc lập.

## 1. Spread với Array

### Sao chép mảng

```js
const original = [1, 2, 3];
const copy = [...original];

console.log(copy); // [1, 2, 3]
console.log(copy === original); // false
```

### Nối mảng

```js
const firstGroup = ["An", "Bình"];
const secondGroup = ["Chi", "Dũng"];
const everyone = [...firstGroup, ...secondGroup];

console.log(everyone); // ["An", "Bình", "Chi", "Dũng"]
```

### Thêm phần tử khi tạo mảng mới

```js
const numbers = [2, 3];
const expandedNumbers = [1, ...numbers, 4];

console.log(expandedNumbers); // [1, 2, 3, 4]
```

### Truyền phần tử mảng thành đối số

```js
const values = [5, 8];
console.log(Math.max(...values)); // 8
```

## 2. Spread với Object

### Sao chép và thêm property

```js
const user = {
  name: "Duy",
  age: 20,
};

const userWithCity = { ...user, city: "Bắc Ninh" };
console.log(userWithCity);
// { name: "Duy", age: 20, city: "Bắc Ninh" }
```

### Gộp Object

```js
const basicInfo = { name: "Duy", age: 20 };
const extraInfo = { city: "Bắc Ninh", isStudent: true };
const profile = { ...basicInfo, ...extraInfo };

console.log(profile);
```

### Property trùng tên

Khi nhiều object có cùng key, giá trị xuất hiện sau sẽ ghi đè giá trị trước.

```js
const defaults = { theme: "light", language: "vi" };
const preferences = { theme: "dark" };
const settings = { ...defaults, ...preferences };

console.log(settings); // { theme: "dark", language: "vi" }
```

## 3. Rest trong tham số function

Rest parameter gom các đối số còn lại thành một mảng. Nó phải là tham số cuối cùng.

```js
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

Có thể kết hợp tham số thường với rest:

```js
function introduce(groupName, ...names) {
  return `${groupName}: ${names.join(", ")}`;
}

console.log(introduce("Lớp", "An", "Bình", "Chi"));
// Lớp: An, Bình, Chi
```

## 4. Rest khi destructuring Array

Rest gom các phần tử chưa được lấy vào một mảng mới và phải đứng cuối.

```js
const scores = [9, 8, 7, 10];
const [topScore, ...otherScores] = scores;

console.log(topScore); // 9
console.log(otherScores); // [8, 7, 10]
```

## 5. Rest khi destructuring Object

```js
const user = {
  name: "Duy",
  age: 20,
  city: "Bắc Ninh",
};

const { name, ...otherDetails } = user;

console.log(name); // Duy
console.log(otherDetails); // { age: 20, city: "Bắc Ninh" }
```

## 6. Spread chuỗi

Chuỗi là iterable, nên có thể trải thành các ký tự.

```js
const letters = [..."JS"];
console.log(letters); // ["J", "S"]
```

## 7. Spread tạo bản sao nông

Spread chỉ sao chép nông (shallow copy). Nếu object hoặc mảng có dữ liệu lồng nhau, phần lồng nhau vẫn được dùng chung tham chiếu.

```js
const originalProfile = {
  name: "An",
  address: { city: "Hà Nội" },
};

const copiedProfile = { ...originalProfile };
copiedProfile.address.city = "Đà Nẵng";

console.log(originalProfile.address.city); // Đà Nẵng
```

Vì vậy, spread phù hợp để sao chép nông; nó không tự tạo bản sao độc lập cho mọi cấp dữ liệu lồng nhau.

## 8. Quy tắc cần nhớ

- `...array` hoặc `...object` ở nơi tạo giá trị là **spread**, dùng để trải dữ liệu.
- `...rest` trong tham số function hoặc destructuring là **rest**, dùng để gom dữ liệu.
- Rest parameter chỉ xuất hiện một lần và phải đứng cuối danh sách tham số.
- Rest trong destructuring cũng phải đứng cuối.
- Spread sao chép object/array theo kiểu nông.
- Khi gộp object, property ở phía sau ghi đè property trùng tên ở phía trước.

## Chạy ví dụ

Mở terminal tại thư mục `Spread-Rest` và chạy:

```bash
node spread-rest.js
```
