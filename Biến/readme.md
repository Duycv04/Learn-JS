# Biến trong JavaScript

Biến là nơi lưu trữ dữ liệu trong chương trình.

## 1. Khái niệm cơ bản

```js
const name = "Duy";
let age = 20;
var city = "Bắc Giang";
```

- `name` lưu chuỗi
- `age` lưu số
- `city` lưu tên thành phố

## 2. Các cách khai báo biến

### `var`

```js
var x = 10;
x = 20;
console.log(x); // 20
```

Đặc điểm:

- Có thể gán lại giá trị
- Có thể khai báo lại cùng tên
- Có phạm vi function scope
- Không nên dùng `var` trong JavaScript hiện đại

### `let`

```js
let y = 10;
y = 25;
console.log(y); // 25
```

Đặc điểm:

- Có thể gán lại giá trị
- Không thể khai báo lại cùng tên trong cùng scope
- Có phạm vi block scope

### `const`

```js
const z = 10;
// z = 20; // lỗi: không thể gán lại
console.log(z); // 10
```

Đặc điểm:

- Không thể gán lại giá trị
- Không thể khai báo lại cùng tên
- Có phạm vi block scope

## 3. So sánh nhanh

| Từ khóa | Gán lại được | Khai báo lại | Scope    |
| ------- | ------------ | ------------ | -------- |
| `var`   | Có           | Có           | Function |
| `let`   | Có           | Không        | Block    |
| `const` | Không        | Không        | Block    |

## 4. Ví dụ về block scope

```js
if (true) {
  let message = "Hello";
  const age = 20;
  console.log(message); // Hello
}

console.log(age); // lỗi: age is not defined
```

## 5. Quy tắc nên dùng

- Dùng `const` nếu giá trị không thay đổi
- Dùng `let` nếu giá trị cần cập nhật
- Tránh `var` trong code mới

## 6. Ví dụ tổng hợp

```js
const name = "Duy";
let age = 21;

age = 22;

console.log(name); // Duy
console.log(age); // 22
```
