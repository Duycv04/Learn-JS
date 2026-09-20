# Array trong JavaScript

Mảng là kiểu dữ liệu dùng để lưu trữ nhiều giá trị trong cùng một biến.

## 1. Array là gì?

```js
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
```

Kết quả:

```js
["Apple", "Banana", "Orange"];
```

Array cho phép lưu nhiều phần tử, có thể là số, chuỗi, object, thậm chí là mảng khác.

## 2. Cách tạo Array

### Cách 1: Literal

```js
const numbers = [10, 20, 30, 40];
const names = ["An", "Bình", "Cường"];
```

### Cách 2: Dùng `new Array()`

```js
const numbers = new Array(10, 20, 30);
console.log(numbers); // [10, 20, 30]
```

> Nên dùng cách literal vì ngắn gọn và dễ đọc hơn.

## 3. Array có thể chứa nhiều kiểu dữ liệu

```js
const data = ["Duy", 20, true, null, undefined, { city: "Bắc Giang" }];

console.log(data);
```

## 4. Index trong Array

Index bắt đầu từ 0.

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange
```

### Lấy phần tử cuối

```js
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[fruits.length - 1]); // Orange
```

## 5. `length`

`length` trả về số lượng phần tử trong mảng.

```js
const numbers = [10, 20, 30, 40];
console.log(numbers.length); // 4
```

## 6. Thay đổi phần tử

```js
const fruits = ["Apple", "Banana", "Orange"];
fruits[1] = "Mango";

console.log(fruits); // ["Apple", "Mango", "Orange"]
```

## 7. Thêm phần tử

### `push()` — thêm vào cuối

```js
const fruits = ["Apple", "Banana"];
fruits.push("Orange");

console.log(fruits); // ["Apple", "Banana", "Orange"]
```

### `unshift()` — thêm vào đầu

```js
const fruits = ["Banana", "Orange"];
fruits.unshift("Apple");

console.log(fruits); // ["Apple", "Banana", "Orange"]
```

## 8. Xóa phần tử

### `pop()` — xóa phần tử cuối

```js
const fruits = ["Apple", "Banana", "Orange"];
fruits.pop();

console.log(fruits); // ["Apple", "Banana"]
```

### `shift()` — xóa phần tử đầu

```js
const fruits = ["Apple", "Banana", "Orange"];
fruits.shift();

console.log(fruits); // ["Banana", "Orange"]
```

## 9. Các phương thức cơ bản

| Method       | Chức năng                         |
| ------------ | --------------------------------- |
| `push()`     | Thêm phần tử vào cuối             |
| `pop()`      | Xóa phần tử cuối                  |
| `unshift()`  | Thêm phần tử vào đầu              |
| `shift()`    | Xóa phần tử đầu                   |
| `indexOf()`  | Tìm vị trí phần tử                |
| `includes()` | Kiểm tra phần tử có tồn tại không |
| `slice()`    | Cắt một phần của mảng             |
| `splice()`   | Xóa, thêm hoặc thay thế phần tử   |

## 10. `indexOf()`

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Mango")); // -1
```

## 11. `includes()`

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Mango")); // false
```

## 12. `slice()`

```js
const numbers = [10, 20, 30, 40, 50];
const result = numbers.slice(1, 4);

console.log(result); // [20, 30, 40]
```

## 13. `splice()`

### Xóa phần tử

```js
const fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1);

console.log(fruits); // ["Apple", "Orange"]
```

### Thêm phần tử

```js
const fruits = ["Apple", "Orange"];
fruits.splice(1, 0, "Banana");

console.log(fruits); // ["Apple", "Banana", "Orange"]
```

## 14. Tổng kết

Mảng là công cụ cực kỳ quan trọng trong JavaScript. Bạn sẽ sử dụng nó thường xuyên trong:

- Quản lý danh sách dữ liệu
- Duyệt dữ liệu
- Xử lý form
- Làm việc với API
- Thiết kế web app

---

Nếu bạn muốn, mình có thể tiếp tục viết thêm:

- `map()`, `filter()`, `reduce()`
- Duyệt mảng bằng `forEach()`
- Bài tập mảng thực hành

Kết quả:

["Apple", "Orange"]

Cấu trúc:

splice(start, deleteCount)
Thêm phần tử bằng splice()
let fruits = ["Apple", "Orange"];

fruits.splice(1, 0, "Banana");

console.log(fruits);

Kết quả:

["Apple", "Banana", "Orange"]
Thay thế phần tử
let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1, "Mango");

console.log(fruits);

Kết quả:

["Apple", "Mango", "Orange"]

join()

Chuyển Array thành String.

let fruits = ["Apple", "Banana", "Orange"];

let result = fruits.join(", ");

console.log(result);

Kết quả:

Apple, Banana, Orange

Ví dụ:

console.log(fruits.join(" - "));

Kết quả:

Apple - Banana - Orange

split()

split() thường dùng để chuyển String thành Array.

let text = "Apple,Banana,Orange";

let fruits = text.split(",");

console.log(fruits);

Kết: ["Apple", "Banana", "Orange"]

sort()
Sắp xếp Array.

String
let fruits = ["Orange", "Apple", "Banana"];

fruits.sort();

console.log(fruits);

Kết quả:

["Apple", "Banana", "Orange"]
Sort Number

Không nên:

let numbers = [10, 2, 30, 5];

numbers.sort();

console.log(numbers);

Có thể cho kết quả không đúng mong muốn vì sort() mặc định xử lý như String.

Nên dùng:

numbers.sort((a, b) => a - b);

Tăng dần:

let numbers = [10, 2, 30, 5];

numbers.sort((a, b) => a - b);

console.log(numbers);

Kết quả:

[2, 5, 10, 30]

Giảm dần:

numbers.sort((a, b) => b - a);
for với Array

Có thể dùng for để duyệt Array.

let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

Kết quả:

Apple
Banana
Orange

Đây là cách rất quan trọng.

for...of
Dùng để lấy trực tiếp từng phần tử.
let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
console.log(fruit);
}

Kết quả:

Apple
Banana
Orange

So với for:

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}
for...of ngắn hơn khi chỉ cần giá trị.

forEach()
Dùng để duyệt từng phần tử.

let numbers = [10, 20, 30];

numbers.forEach(function(number) {
console.log(number);
});

filter()
Lọc phần tử theo điều kiện.

Ví dụ lấy số chẵn:

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);

Kết quả: [2, 4, 6]

find()
Tìm phần tử đầu tiên thỏa điều kiện.

let numbers = [10, 20, 30, 40];

let result = numbers.find(number => number > 25);

console.log(result);

Kết quả: 30

Nếu không tìm thấy: undefined

findIndex()

Tìm index của phần tử đầu tiên thỏa điều kiện.

let numbers = [10, 20, 30, 40];

let index = numbers.findIndex(number => number > 25);

console.log(index);

Kết quả:

2
