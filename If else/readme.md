# Câu lệnh điều kiện trong JavaScript

Câu lệnh điều kiện giúp chương trình quyết định thực hiện hành động nào dựa trên điều kiện.

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

Dùng khi có nhiều điều kiện.

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
