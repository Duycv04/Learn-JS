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
0
1
2
3
4
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

Dùng để duyệt các key hoặc property của object.

```js
const user = {
  id: 1,
  name: "Duy",
  age: 21,
  address: "Bắc Ninh"
};

for (const key in user) {
  console.log(key);
}
```

Kết quả:

```js
id
name
age
address
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
0
1
2
3
4
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
0
1
2
3
4
6
7
8
9
10
```

## 7. So sánh nhanh

| Loại vòng lặp | Dùng khi |
| --- | --- |
| `for` | Biết trước số lần lặp |
| `while` | Không biết trước số lần, dựa vào điều kiện |
| `do...while` | Phải chạy ít nhất 1 lần |
| `for...in` | Duyệt key của object |

## 8. Kết luận

Vòng lặp là công cụ quan trọng để xử lý dữ liệu lặp lại. Bạn nên nắm vững `for`, `while`, `break` và `continue` trước khi học các kỹ thuật nâng cao hơn.
