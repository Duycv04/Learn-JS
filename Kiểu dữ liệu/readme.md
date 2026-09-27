## 6. Ví dụ tổng hợp

# Kiểu dữ liệu trong JavaScript

JavaScript có 2 nhóm kiểu dữ liệu chính:

- Kiểu dữ liệu nguyên thủy (primitive)
- Kiểu dữ liệu tham chiếu (reference)

## 1. Kiểu dữ liệu nguyên thủy

Giá trị nguyên thủy được xử lý như một giá trị đơn. Các kiểu cơ bản người mới thường gặp nhất là `String`, `Number`, `Boolean`, `undefined` và `null`.

| Kiểu dữ liệu | Ví dụ                   | Mô tả                      |
| ------------ | ----------------------- | -------------------------- |
| `String`     | `"Duy"`, `'JavaScript'` | Chuỗi văn bản              |
| `Number`     | `10`, `3.14`            | Số nguyên hoặc số thực     |
| `Boolean`    | `true`, `false`         | Giá trị logic              |
| `Undefined`  | `undefined`             | Biến chưa được gán giá trị |
| `Null`       | `null`                  | Không có giá trị           |
| `BigInt`     | `9007199254740991n`     | Số nguyên rất lớn          |
| `Symbol`     | `Symbol("id")`          | Giá trị duy nhất           |

### Ví dụ

```js
const name = "Duy";
const age = 20;
const isStudent = true;
const result = null;
let score;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(result);
console.log(score); // undefined
```

## 2. Kiểu dữ liệu tham chiếu

Array và object là kiểu tham chiếu. Khi gán một biến array/object sang biến khác, hai biến cùng tham chiếu tới dữ liệu đó.

### `Object`

```js
const user = {
  name: "Duy",
  age: 20,
  city: "Bắc Giang",
};
```

### `Array`

```js
const numbers = [1, 2, 3, 4];
```

## 3. Phân biệt `undefined` và `null`

```js
let a;
let b = null;

console.log(a); // undefined
console.log(b); // null
```

- `undefined`: biến chưa có giá trị
- `null`: biến đã được gán nhưng có ý nghĩa là "không có giá trị"

## 4. Kiểm tra kiểu dữ liệu

Dùng `typeof` để kiểm tra nhiều kiểu dữ liệu nguyên thủy:

```js
console.log(typeof "Xin chào"); // "string"
console.log(typeof 10); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
```

Có một ngoại lệ lịch sử: `typeof null` trả về `"object"`. Để kiểm tra `null`, so sánh trực tiếp bằng `=== null`.

## 5. Phân biệt array và object

```js
const colors = ["đỏ", "xanh"];
const user = { name: "An" };

console.log(Array.isArray(colors)); // true
console.log(Array.isArray(user)); // false
```

Dùng `Array.isArray()` để kiểm tra array thay vì dựa vào `typeof`.

## 4. Ví dụ tổng hợp

```js
const student = {
  name: "An",
  age: 18,
  hobbies: ["Đọc sách", "Nghe nhạc"],
  active: true,
};

console.log(student.name);
console.log(student.hobbies[0]);
```
