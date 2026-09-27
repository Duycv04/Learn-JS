# Function trong JavaScript

Hàm là một khối code có thể được gọi nhiều lần để thực hiện một công việc cụ thể.

## 1. Khai báo function

Khai báo hàm bằng `function`, đặt tên mô tả công việc rồi viết phần thân trong `{}`.

```js
function sayHello() {
  console.log("Hello");
}
```

## 2. Gọi function

```js
sayHello();
```

> Khi khai báo function, code bên trong chưa chạy cho đến khi bạn gọi nó.

## 3. Tham số và đối số

```js
function hello(name) {
  console.log(`Hello ${name}`);
}

hello("Duy");
```

Kết quả:

```js
Hello Duy
```

- `name` là parameter
- `"Duy"` là argument

## 4. Nhiều tham số

```js
function introduce(name, age, city) {
  console.log(name);
  console.log(age);
  console.log(city);
}

introduce("Duy", 20, "Bắc Giang");
```

## 5. `return`

`return` dùng để trả kết quả từ function.

```js
function sum(a, b) {
  return a + b;
}

const result = sum(10, 20);
console.log(result); // 30
```

### `return` khác `console.log`

`console.log()` chỉ hiển thị dữ liệu; `return` gửi kết quả về nơi gọi để có thể tiếp tục sử dụng.

```js
function sum(a, b) {
  console.log(a + b);
}
```

Đây chỉ in ra màn hình, không trả giá trị cho code bên ngoài.

```js
function sum(a, b) {
  return a + b;
}

const result = sum(10, 20);
console.log(result * 2); // 60
```

## 6. Function không có `return`

```js
function hello() {
  console.log("Hello");
}

const result = hello();
console.log(result); // undefined
```

> Nếu không có `return`, function sẽ trả về `undefined` theo mặc định.

## 7. `return` dừng function

```js
function test() {
  console.log("A");
  return;
  console.log("B");
}

test();
```

Kết quả:

```js
A;
```

`console.log("B")` không chạy vì function đã dừng.

## 8. Default parameter

Giá trị mặc định được dùng khi đối số bị bỏ qua hoặc có giá trị `undefined`.

```js
function hello(name = "Guest") {
  console.log(`Hello ${name}`);
}

hello(); // Hello Guest
hello("Duy"); // Hello Duy
```

## 9. Function Expression

```js
const hello = function () {
  console.log("Hello");
};

hello();
```

Đây được gọi là `Function Expression`.

## 10. Function Declaration

```js
function hello() {
  console.log("Hello");
}
```

Đây là cách khai báo function truyền thống.

## 11. Arrow Function

```js
const hello = () => {
  console.log("Hello");
};

hello();
```

Arrow function là cú pháp ngắn gọn hơn.

Khi thân hàm chỉ có một biểu thức, có thể bỏ `{}` và `return`:

```js
const square = (number) => number * number;
console.log(square(4)); // 16
```

## 12. Gọi function từ function khác

```js
function add(a, b) {
  return a + b;
}

function double(number) {
  return number * 2;
}

const result = double(add(10, 20));
console.log(result); // 60
```

## 13. Callback Function

```js
function sayHello() {
  console.log("Hello");
}

function execute(callback) {
  callback();
}

execute(sayHello);
```

`sayHello` ở đây là callback function.

## 14. Anonymous Function

```js
const hello = function () {
  console.log("Hello");
};
```

Hàm này không có tên, nên gọi là anonymous function.

## 15. Recursive Function

```js
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

> Hàm đệ quy là hàm tự gọi chính nó.

## 16. Hoisting

```js
hello();

function hello() {
  console.log("Hello");
}
```

Function declaration có thể được gọi trước khi khai báo.

Function expression gán cho `const` không dùng được trước dòng khai báo:

```js
const greet = function () {
  console.log("Xin chào");
};

greet();
```

## 17. Cách viết một hàm dễ dùng

- Đặt tên hàm theo hành động, ví dụ `calculateTotal`.
- Mỗi hàm nên tập trung vào một việc.
- Dùng `return` nếu cần lấy kết quả để xử lý tiếp.
- Truyền dữ liệu qua tham số thay vì phụ thuộc vào biến bên ngoài.
