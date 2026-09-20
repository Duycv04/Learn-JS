# Kiểu dữ liệu trong JavaScript

JavaScript có 2 nhóm kiểu dữ liệu chính:

- Kiểu dữ liệu nguyên thủy (primitive)
- Kiểu dữ liệu tham chiếu (reference)

## 1. Kiểu dữ liệu nguyên thủy

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

## 5. Kết luận

Hiểu rõ kiểu dữ liệu là bước đầu tiên để viết JavaScript hiệu quả. Bạn cần biết:

- Dữ liệu nào là chuỗi, số, boolean
- Khi nào biến là `undefined` hoặc `null`
- `Object` và `Array` dùng để lưu tập hợp dữ liệu phức tạp

---

Bạn có thể tiếp tục học theo các chủ đề:

- [Biến](../Biến/readme.md)
- [Object](../Object/readme.md)
- [Array](../Array/readme.md)
