# Câu lệnh điều kiện trong JavaScript

Câu lệnh điều kiện giúp chương trình quyết định thực hiện hành động nào dựa trên điều kiện.
Điều kiện được JavaScript đánh giá thành `true` hoặc `false`. Dùng `===` để so sánh cả giá trị lẫn kiểu dữ liệu.

## 1. `if`

```js
if (condition) {
  // code chạy khi điều kiện đúng
}
```

Ví dụ:

```js
const age = 18;

if (age >= 18) {
  console.log("Bạn đã đủ tuổi");
}
```

## 2. `if ... else`

```js
if (condition) {
  // true
} else {
  // false
}
```

Ví dụ:

```js
const score = 7;

if (score >= 5) {
  console.log("Đậu");
} else {
  console.log("Rớt");
}
```

## 3. `else if`

Dùng khi có nhiều trường hợp loại trừ nhau. Viết điều kiện cụ thể hoặc giới hạn cao trước để nhánh rộng không bắt mất trường hợp phía sau.

```js
const score = 8;

if (score >= 9) {
  console.log("Xuất sắc");
} else if (score >= 7) {
  console.log("Giỏi");
} else if (score >= 5) {
  console.log("Khá");
} else {
  console.log("Yếu");
}
```

## 4. `switch`

```js
const day = 2;

switch (day) {
  case 1:
    console.log("Thứ Hai");
    break;
  case 2:
    console.log("Thứ Ba");
    break;
  default:
    console.log("Ngày không xác định");
}
```

### Lưu ý

- `break` giúp dừng việc kiểm tra các `case` còn lại
- `default` chạy khi không có `case` nào khớp

## 5. Toán tử ba ngôi

Cú pháp:

```js
condition ? expression1 : expression2;
```

Ví dụ:

```js
const age = 18;
const message = age >= 18 ? "Đủ tuổi" : "Chưa đủ tuổi";

console.log(message);
```

Đây là cách viết rút gọn của `if...else`.

## 6. Tổng kết

- `if` dùng cho điều kiện đơn
- `if...else` dùng cho 2 trường hợp
- `else if` dùng cho nhiều điều kiện
- `switch` hợp lý khi có nhiều lựa chọn cố định
- `? :` là dạng rút gọn cho điều kiện đơn giản

## Toán tử so sánh thường dùng

| Toán tử   | Ý nghĩa                     | Ví dụ                 |
| --------- | --------------------------- | --------------------- |
| `===`     | Bằng cả giá trị và kiểu     | `5 === 5` là `true`   |
| `!==`     | Khác giá trị hoặc khác kiểu | `5 !== "5"` là `true` |
| `>` / `<` | Lớn hơn / nhỏ hơn           | `age >= 18`           |
| `&&`      | Cả hai điều kiện đều đúng   | `age >= 18 && hasId`  |
| `!`       | Đảo ngược giá trị đúng/sai  | `!isReady`            |

Toán tử `||` trả về điều kiện đúng khi ít nhất một vế đúng, ví dụ `isAdmin || isOwner`.

## 8. Ví dụ kiểm tra khoảng điểm

```js
const score = 8;

if (score < 0 || score > 10) {
  console.log("Điểm không hợp lệ");
} else if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 5) {
  console.log("Đạt");
} else {
  console.log("Chưa đạt");
}
```

Kiểm tra dữ liệu không hợp lệ trước, rồi mới xét các mức điểm.
