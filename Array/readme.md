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

### Thay thế phần tử

```js
const fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1, "Mango");

console.log(fruits); // ["Apple", "Mango", "Orange"]
```

## 14. `join()`

`join()` chuyển mảng thành chuỗi.

```js
const fruits = ["Apple", "Banana", "Orange"];
const result = fruits.join(", ");

console.log(result); // Apple, Banana, Orange
```

Ví dụ khác:

```js
console.log(fruits.join(" - ")); // Apple - Banana - Orange
```

## 15. `split()`

`split()` chuyển chuỗi thành mảng.

```js
const text = "Apple,Banana,Orange";
const fruits = text.split(",");

console.log(fruits); // ["Apple", "Banana", "Orange"]
```

## 16. `sort()`

`sort()` sắp xếp các phần tử trong mảng.

### Sắp xếp chuỗi

```js
const fruits = ["Orange", "Apple", "Banana"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Orange"]
```

### Sắp xếp số

```js
const numbers = [10, 2, 30, 5];

numbers.sort((a, b) => a - b);
console.log(numbers); // [2, 5, 10, 30]
```

Giảm dần:

```js
numbers.sort((a, b) => b - a);
console.log(numbers); // [30, 10, 5, 2]
```

> `sort()` mặc định xử lý phần tử như chuỗi, nên khi sắp xếp số cần truyền hàm so sánh.

## 17. `reverse()`

`reverse()` đảo ngược thứ tự mảng.

```js
const fruits = ["Apple", "Banana", "Orange"];
fruits.reverse();

console.log(fruits); // ["Orange", "Banana", "Apple"]
```

## 18. Duyệt mảng bằng `for`

```js
const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Kết quả:

```js
Apple;
Banana;
Orange;
```

## 19. `for...of`

Dùng để lấy từng phần tử trực tiếp.

```js
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Kết quả:

```js
Apple;
Banana;
Orange;
```

## 20. `forEach()`

```js
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
```

## 21. `map()`

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6, 8]
```

## 22. `filter()`

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
```

## 23. `reduce()`

```js
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, number) => sum + number, 0);

console.log(total); // 10
```

## 24. `find()`

`find()` trả về phần tử đầu tiên thỏa điều kiện.

```js
const numbers = [10, 20, 30, 40];
const result = numbers.find((number) => number > 25);

console.log(result); // 30
```

Nếu không tìm thấy, kết quả sẽ là `undefined`.

## 25. `findIndex()`

`findIndex()` trả về vị trí đầu tiên thỏa điều kiện.

```js
const numbers = [10, 20, 30, 40];
const index = numbers.findIndex((number) => number > 25);

console.log(index); // 2
```

## 26. `some()`

`some()` kiểm tra xem có ít nhất một phần tử thỏa điều kiện hay không.

```js
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some((number) => number % 2 === 0);

console.log(hasEven); // true
```

## 27. `every()`

`every()` kiểm tra xem tất cả phần tử có thỏa điều kiện hay không.

```js
const numbers = [2, 4, 6, 8];
const allEven = numbers.every((number) => number % 2 === 0);

console.log(allEven); // true
```

## 28. `concat()`

`concat()` nối hai hoặc nhiều mảng lại với nhau.

```js
const fruits = ["Apple", "Banana"];
const moreFruits = ["Orange", "Grape"];

const result = fruits.concat(moreFruits);
console.log(result); // ["Apple", "Banana", "Orange", "Grape"]
```

## 29. Tổng kết

Mảng là một trong những kiểu dữ liệu quan trọng nhất trong JavaScript
Một số phương thức quan trọng cần ghi nhớ:

- `push()`, `pop()`, `shift()`, `unshift()`
- `indexOf()`, `includes()`
- `slice()`, `splice()`
- `join()`, `split()`
- `sort()`, `reverse()`
- `forEach()`, `map()`, `filter()`, `reduce()`
- `find()`, `findIndex()`, `some()`, `every()`, `concat()`
