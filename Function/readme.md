# Function trong JavaScript

Hàm là một khối code có thể được gọi nhiều lần để thực hiện một công việc cụ thể.

## 1. Khai báo function

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
A
```

`console.log("B")` không chạy vì function đã dừng.

## 8. Default parameter

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

## Kết luận

Function là một phần cốt lõi của JavaScript. Nắm rõ cách khai báo, truyền tham số, trả về giá trị và gọi hàm sẽ giúp bạn viết code hiệu quả hơn rất nhiều.
