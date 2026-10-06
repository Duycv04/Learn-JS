# JSON trong JavaScript

JSON là viết tắt của JavaScript Object Notation. Đây là một định dạng dữ liệu nhẹ, dễ đọc và dễ trao đổi giữa các hệ thống.

JSON rất phổ biến trong web development vì nó được sử dụng để:

- gửi dữ liệu giữa client và server
- lưu trữ cấu trúc dữ liệu
- đọc/ghi file dữ liệu dạng text
- làm việc với API

---

## 1. JSON là gì?

JSON là một chuỗi văn bản có định dạng theo cú pháp của object JavaScript, nhưng nó chỉ là dữ liệu, không phải là object JavaScript thực sự.

Ví dụ JSON:

```json
{
  "name": "Duy",
  "age": 20,
  "skills": ["JavaScript", "HTML", "CSS"],
  "isStudent": true
}
```

Đây là dữ liệu JSON hợp lệ, và bạn có thể chuyển đổi giữa JSON và object JavaScript bằng các phương thức built-in.

---

## 2. JSON và Object JavaScript

Object JavaScript:

```js
const user = {
  name: "Duy",
  age: 20,
  skills: ["JavaScript", "HTML", "CSS"],
  isStudent: true,
};
```

JSON tương ứng:

```json
{
  "name": "Duy",
  "age": 20,
  "skills": ["JavaScript", "HTML", "CSS"],
  "isStudent": true
}
```

### Sự khác biệt chính

- Object JavaScript có thể chứa hàm, method
- JSON chỉ chứa dữ liệu dạng text và không có hàm
- JSON luôn dùng dấu nháy kép cho key và value dạng chuỗi

---

## 3. Chuyển Object sang JSON: `JSON.stringify()`

```js
const user = {
  name: "Duy",
  age: 20,
  skills: ["JavaScript", "HTML", "CSS"],
};

const json = JSON.stringify(user);
console.log(json);
```

Kết quả:

```json
{ "name": "Duy", "age": 20, "skills": ["JavaScript", "HTML", "CSS"] }
```

> `JSON.stringify()` chuyển object JavaScript thành chuỗi JSON.

---

## 4. Chuyển JSON sang Object: `JSON.parse()`

```js
const json = '{"name":"Duy","age":20,"skills":["JavaScript","HTML","CSS"]}';

const user = JSON.parse(json);
console.log(user.name); // Duy
console.log(user.skills[0]); // JavaScript
```

> `JSON.parse()` chuyển chuỗi JSON thành object JavaScript.

---

## 5. JSON có những kiểu dữ liệu nào?

JSON hỗ trợ các kiểu dữ liệu sau:

- string
- number
- boolean
- null
- object
- array

Ví dụ:

```json
{
  "name": "Duy",
  "age": 25,
  "active": true,
  "address": {
    "city": "Hanoi"
  },
  "hobbies": ["music", "code"],
  "nickname": null
}
```

---

## 6. JSON với API

Khi làm việc với API, dữ liệu thường được trả về dưới dạng JSON.

Ví dụ:

```js
const response = '{"id":1,"title":"Learn JavaScript","completed":false}';
const todo = JSON.parse(response);

console.log(todo.title); // Learn JavaScript
```

Các ứng dụng web thường dùng JSON để gửi/nhận dữ liệu từ backend.

---

## 7. JSON có dấu nháy kép bắt buộc không?

Đúng. Trong JSON:

```json
{ "name": "Duy" }
```

- key phải là chuỗi
- phải dùng dấu nháy kép
- không được dùng dấu nháy đơn

Ví dụ sai:

```json
{ "name": "Duy" }
```

---

## 8. Một số lưu ý

### 1) JSON không hỗ trợ hàm

```json
{ "sayHi": "function() {}" }
```

Nếu bạn muốn lưu function, bạn cần chuyển function thành string hoặc dùng cấu trúc dữ liệu khác.

### 2) JSON không có comment

Bạn không thể viết comment trong JSON.

### 3) JSON chỉ là chuỗi text

Nó không phải là object thực, nên cần parse trước khi dùng.

---

## 9. Ví dụ hoàn chỉnh

```js
const user = {
  name: "Duy",
  age: 21,
  isStudent: true,
  skills: ["JavaScript", "React"],
};

const jsonString = JSON.stringify(user);
console.log(jsonString);

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name);
console.log(parsedUser.skills);
```

Kết quả:

```js
{"name":"Duy","age":21,"isStudent":true,"skills":["JavaScript","React"]}
Duy
[ 'JavaScript', 'React' ]
```

---

## 10. Tổng kết

JSON là một định dạng dữ liệu rất quan trọng trong JavaScript và web development. Nội dung chính bạn cần nhớ là:

- JSON là chuỗi dữ liệu có định dạng rõ ràng
- `JSON.stringify()` chuyển object thành JSON
- `JSON.parse()` chuyển JSON thành object
- JSON thường được dùng để giao tiếp với API

Nếu bạn biết cách làm việc với JSON, bạn sẽ dễ dàng xử lý dữ liệu từ backend, API và ứng dụng web.

## Chạy ví dụ

Mở terminal trong thư mục `JSON` và chạy:

```bash
node json.js
```

# JSON trong JavaScript

JSON là viết tắt của JavaScript Object Notation. Đây là một định dạng dữ liệu phổ biến để trao đổi thông tin giữa client và server, hoặc giữa các ứng dụng.

JSON có cú pháp rất gần với object JavaScript, nhưng nó chỉ có thể chứa:

- string
- number
- boolean
- null
- array
- object

Không hỗ trợ các loại như `undefined`, function, symbol.

---

## 1. JSON là gì?

JSON được dùng nhiều trong:

- API web
- lưu trữ dữ liệu
- gửi dữ liệu qua mạng
- cấu hình ứng dụng

Ví dụ JSON:

```json
{
  "name": "Duy",
  "age": 20,
  "isStudent": true,
  "skills": ["JavaScript", "HTML", "CSS"],
  "address": {
    "city": "Hà Nội"
  }
}
```

Dữ liệu trên là một chuỗi JSON hợp lệ.

---

## 2. JSON vs Object JavaScript

### Object JavaScript

```js
const user = {
  name: "Duy",
  age: 20,
  isStudent: true,
};
```

### JSON

```json
{
  "name": "Duy",
  "age": 20,
  "isStudent": true
}
```

Sự khác biệt chính:

- Object JavaScript có thể chứa method, `undefined`, `Date`, ...
- JSON chỉ là chuỗi dữ liệu chuẩn, không có function
- JSON luôn dùng dấu ngoặc kép cho key và string

---

## 3. Chuyển object sang JSON: `JSON.stringify()`

```js
const user = {
  name: "Duy",
  age: 20,
  isStudent: true,
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
```

Kết quả:

```json
{ "name": "Duy", "age": 20, "isStudent": true }
```

### Ví dụ với mảng

```js
const students = ["An", "Binh", "Cường"];
console.log(JSON.stringify(students));
```

Kết quả:

```json
["An", "Binh", "Cường"]
```

---

## 4. Chuyển JSON sang object: `JSON.parse()`

```js
const jsonString = '{"name":"Duy","age":20,"isStudent":true}';
const user = JSON.parse(jsonString);

console.log(user.name); // Duy
console.log(user.age); // 20
```

`JSON.parse()` biến chuỗi JSON thành object JavaScript để bạn thao tác dễ dàng hơn.

---

## 5. JSON và API

JSON thường được dùng khi giao tiếp với API.

Ví dụ dữ liệu trả về từ server:

```json
{
  "id": 1,
  "title": "JavaScript",
  "completed": false
}
```

Trong code JavaScript, bạn có thể làm:

```js
const response = '{"id":1,"title":"JavaScript","completed":false}';
const data = JSON.parse(response);

console.log(data.title); // JavaScript
```

---

## 6. Một số lưu ý quan trọng

### 1) Key và string phải dùng dấu nháy kép

```json
{ "name": "Duy" }
```

### 2) Không dùng comment trong JSON

JSON không cho phép bình luận như JavaScript.

### 3) Dữ liệu phải đúng định dạng

```json
{ "age": 20, "name": "Duy" }
```

Đúng, nhưng nếu bạn viết:

```json
{ "age": 20, "name": "Duy" }
```

Sẽ sai vì `age` không có dấu nháy kép.

---

## 7. JSON.stringify() với dữ liệu phức tạp

```js
const user = {
  name: "Duy",
  age: 20,
  address: {
    city: "Hà Nội",
  },
  skills: ["JS", "HTML"],
};

console.log(JSON.stringify(user, null, 2));
```

Tham số `null, 2` giúp format JSON rõ ràng hơn khi in ra.

---

## 8. Tổng kết

JSON là định dạng dữ liệu chuẩn để:

- lưu trữ dữ liệu
- truyền dữ liệu qua API
- làm việc giữa các ngôn ngữ khác nhau

Trong JavaScript bạn sẽ thường dùng 2 phương thức chính:

- `JSON.stringify()` → object sang JSON string
- `JSON.parse()` → JSON string sang object

Hiểu JSON là kỹ năng rất quan trọng khi học frontend, backend, API và ứng dụng web.

## Chạy ví dụ

Mở terminal trong thư mục `JSON` và chạy:

```bash
node json.js
```
