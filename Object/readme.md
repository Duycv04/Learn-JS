# Object trong JavaScript

Object là kiểu dữ liệu dùng để lưu trữ nhiều thông tin có liên quan với nhau theo dạng `key: value`.

## 1. Object là gì?

```js
const user = {
  name: "Duy",
  age: 20,
  city: "Bắc Giang",
};
```

Trong ví dụ trên:

- `name` là key
- `"Duy"` là value
- `age` là key
- `20` là value

## 2. Tạo Object

```js
const user = {
  name: "Duy",
  age: 20,
  isStudent: true,
};
```

Object có thể chứa nhiều loại dữ liệu khác nhau như:

- String
- Number
- Boolean
- Array
- Object khác
- Function

## 3. Property của Object

Dữ liệu bên trong object được gọi là property.

```js
const user = {
  name: "Duy",
  age: 20,
};
```

Có 2 property là:

- `name`
- `age`

## 4. Truy cập property

### Cách 1: Dot notation

```js
const user = {
  name: "Duy",
  age: 20,
};

console.log(user.name); // Duy
console.log(user.age); // 20
```

### Cách 2: Bracket notation

```js
console.log(user["name"]); // Duy
console.log(user["age"]); // 20
```

## 5. Thêm property

```js
const user = {
  name: "Duy",
};

user.age = 20;
user.city = "Bắc Giang";

console.log(user);
```

## 6. Sửa property

```js
const user = {
  name: "Duy",
  age: 20,
};

user.age = 21;
console.log(user.age); // 21
```

## 7. Xóa property

```js
const user = {
  name: "Duy",
  age: 20,
  city: "Bắc Giang",
};

delete user.city;
console.log(user);
```

## 8. Object chứa Array

```js
const user = {
  name: "Duy",
  skills: ["HTML", "CSS", "JavaScript"],
};

console.log(user.skills);
console.log(user.skills[0]); // HTML
```

## 9. Object chứa Object

```js
const user = {
  name: "Duy",
  address: {
    city: "Bắc Giang",
    district: "Việt Yên",
  },
};

console.log(user.address.city); // Bắc Giang
```

Đây gọi là nested object.

## 10. Object chứa Function

Function trong object được gọi là method.

```js
const user = {
  name: "Duy",
  sayHello: function () {
    console.log("Hello");
  },
};

user.sayHello();
```

Cách viết gọn hơn:

```js
const user = {
  name: "Duy",
  sayHello() {
    console.log("Hello");
  },
};

user.sayHello();
```

## 11. `this` trong Object

```js
const user = {
  name: "Duy",
  introduce() {
    console.log(this.name);
  },
};

user.introduce(); // Duy
```

`this` ở đây đại diện cho object đang gọi method.

## 12. Kiểm tra property có tồn tại không

### Dùng `in`

```js
const user = {
  name: "Duy",
  age: 20,
};

console.log("name" in user); // true
console.log("email" in user); // false
```

### Dùng `hasOwnProperty()`

```js
console.log(user.hasOwnProperty("name")); // true
```

## 13. `Object.keys()`

```js
const user = {
  name: "Duy",
  age: 20,
  city: "Bắc Giang",
};

console.log(Object.keys(user)); // ["name", "age", "city"]
```

## 14. Kết luận

Object là kiểu dữ liệu cực kỳ quan trọng trong JavaScript. Nó giúp bạn lưu trữ dữ liệu có cấu trúc, mô phỏng thực thể trong ứng dụng và làm việc rất hiệu quả với dữ liệu phức tạp.

---

Bạn nên luyện tập nhiều với ví dụ như:

- Thông tin sinh viên
- Thông tin sản phẩm
- Thông tin người dùng
- Danh sách công việc

Object.values()
Lấy danh sách value.

console.log(Object.values(user));

Kết quả: ["Duy", 20, "Bắc Giang"]

Object.entries()

Lấy cả key và value.
console.log(Object.entries(user));

Kết quả:
[
["name", "Duy"],
["age", 20],
["city", "Bắc Giang"]
]
