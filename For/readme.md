# Vòng lặp trong JavaScript

Vòng lặp giúp thực thi một đoạn code nhiều lần mà không cần viết lại.

## 1. `for`

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Kết quả:

```js
0;
1;
2;
3;
4;
```

### Cấu trúc

```js
for (khởi_tạo; điều_kiện; cập_nhật) {
  // code
}
```

## 2. `while`

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

`while` sẽ chạy khi điều kiện còn đúng.

## 3. `do ... while`

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

> `do...while` chạy ít nhất một lần trước khi kiểm tra điều kiện.

## 4. `for...in`

Dùng `for...in` để duyệt các key của object. Khi duyệt mảng, nên dùng vòng `for` hoặc `for...of` để tránh nhầm key (index) với giá trị.

```js
const user = {
  id: 1,
  name: "Duy",
  age: 21,
  address: "Bắc Ninh",
};

for (const key in user) {
  console.log(key);
}
```

Kết quả:

```js
id;
name;
age;
address;
```

Để lấy giá trị:

```js
for (const key in user) {
  console.log(user[key]);
}
```

Kết quả:

```js
1
Duy
21
Bắc Ninh
```

## 5. `break`

`break` dùng để thoát vòng lặp ngay lập tức.

```js
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

Kết quả:

```js
0;
1;
2;
3;
4;
```

## 6. `continue`

`continue` bỏ qua lần lặp hiện tại và tiếp tục vòng lặp.

```js
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

Kết quả:

```js
0;
1;
2;
3;
4;
6;
7;
8;
9;
10;
```

## 7. So sánh nhanh

| Loại vòng lặp | Dùng khi                                   |
| ------------- | ------------------------------------------ |
| `for`         | Biết trước số lần lặp                      |
| `while`       | Không biết trước số lần, dựa vào điều kiện |
| `do...while`  | Phải chạy ít nhất 1 lần                    |
| `for...in`    | Duyệt key của object                       |
| `for...of`    | Duyệt giá trị trong array hoặc chuỗi       |

## 8. Duyệt mảng với `for...of`

```js
const fruits = ["Táo", "Cam", "Xoài"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

## 9. Tránh vòng lặp vô hạn

Trong `while`, hãy đảm bảo phần thân vòng lặp có thể làm điều kiện trở thành `false`.

```js
let count = 0;

while (count < 3) {
  console.log(count);
  count++; // Nếu quên cập nhật count, vòng lặp không kết thúc.
}
```
