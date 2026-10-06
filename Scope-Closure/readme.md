# Scope và Closure trong JavaScript

Scope (phạm vi) xác định nơi một biến có thể được truy cập. Closure xảy ra khi một hàm vẫn giữ quyền truy cập vào các biến thuộc lexical scope nơi hàm được tạo, kể cả sau khi hàm bên ngoài đã kết thúc.

## 1. Các loại scope

### Global scope

Biến được khai báo bên ngoài function và block có thể được truy cập từ những phần code nằm trong phạm vi phù hợp.

```js
const appName = "Learn JavaScript";

function showAppName() {
  console.log(appName);
}

showAppName(); // Learn JavaScript
```

> Cách xử lý biến top-level có khác biệt giữa script chạy trong trình duyệt và module như Node.js; không nên mặc định mọi biến đều trở thành property của `globalThis`.

### Function scope

Biến khai báo bằng `var`, `let` hoặc `const` bên trong function chỉ sử dụng được trong function đó.

```js
function createMessage() {
  const message = "Hello";
  return message;
}

console.log(createMessage()); // Hello
```

### Block scope

Block là phần code nằm trong cặp `{}`. `let` và `const` có phạm vi trong block gần nhất.

```js
if (true) {
  const status = "active";
  console.log(status); // active
}

// status không truy cập được bên ngoài block
```

`var` không có block scope; nó có function scope.

```js
if (true) {
  var legacyValue = "visible after the block";
}

console.log(legacyValue); // visible after the block
```

## 2. Lexical scope và scope chain

Hàm bên trong có thể truy cập biến ở scope bên ngoài. JavaScript tìm biến từ scope hiện tại đi dần ra các scope cha; đó là scope chain.

```js
const outerMessage = "from outer scope";

function outerFunction() {
  const innerMessage = "from outer function";

  function innerFunction() {
    console.log(innerMessage);
    console.log(outerMessage);
  }

  innerFunction();
}

outerFunction();
```

Scope được quyết định theo nơi hàm được **định nghĩa**, không phải nơi hàm được gọi. Cách xác định này gọi là lexical scope.

## 3. Shadowing

Biến ở scope trong có thể dùng cùng tên với biến ở scope ngoài. Biến trong block sẽ che khuất biến ngoài trong phạm vi block đó.

```js
const color = "blue";

if (true) {
  const color = "green";
  console.log(color); // green
}

console.log(color); // blue
```

## 4. Hoisting và Temporal Dead Zone

Khai báo `var` được đưa lên đầu function scope và khởi tạo bằng `undefined`. `let` và `const` cũng được xử lý trước khi chạy block, nhưng không thể truy cập trước dòng khai báo; khoảng thời gian đó gọi là Temporal Dead Zone (TDZ).

```js
console.log(varValue); // undefined
var varValue = 10;
```

Ví dụ sau ném `ReferenceError` vì truy cập `letValue` trước khi khai báo:

```js
{
  console.log(letValue); // ReferenceError: Cannot access before initialization
  let letValue = 10;
}
```

Trong code thông thường, hãy khai báo `let` và `const` trước khi sử dụng.

## 5. Closure là gì?

Closure là function kết hợp với lexical environment nơi function đó được tạo. Vì vậy function có thể tiếp tục dùng biến ngoài kể cả sau khi function tạo nó đã chạy xong.

```js
function createGreeter(name) {
  return function greet() {
    return `Hello, ${name}!`;
  };
}

const greetDuy = createGreeter("Duy");
console.log(greetDuy()); // Hello, Duy!
```

`greetDuy` vẫn đọc được `name` sau khi `createGreeter()` đã trả về.

## 6. Closure để giữ trạng thái riêng

Closure có thể giữ dữ liệu mà code bên ngoài không truy cập trực tiếp được.

```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    getValue() {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue()); // 2
```

Biến `count` chỉ được thao tác thông qua các method mà `createCounter()` trả về.

## 7. Closure trong vòng lặp

`let` tạo binding mới cho mỗi lượt lặp, nên mỗi callback giữ giá trị `i` tương ứng.

```js
const callbacks = [];

for (let i = 0; i < 3; i++) {
  callbacks.push(() => i);
}

console.log(callbacks.map((callback) => callback())); // [0, 1, 2]
```

Nếu thay `let` bằng `var`, các callback dùng chung một biến function-scoped; khi vòng lặp kết thúc, chúng đều đọc giá trị cuối cùng của biến đó.

## 8. Khi nào closure hữu ích?

- Giữ trạng thái riêng tư cho một function hoặc module
- Tạo function tùy biến từ một function tổng quát
- Viết callback, event handler và timer
- Ghi nhớ cấu hình hoặc dữ liệu cần dùng ở những lần gọi tiếp theo

## 9. Ghi nhớ

- Scope quyết định nơi biến có thể được truy cập.
- `let` và `const` có block scope; `var` có function scope.
- JavaScript dùng lexical scope: hàm tra cứu biến dựa trên nơi nó được tạo.
- Closure giữ quyền truy cập lexical environment sau khi scope ngoài kết thúc.
- Tránh tạo biến global không cần thiết; ưu tiên `const`, sau đó dùng `let` khi cần gán lại.

## Chạy ví dụ

Mở terminal tại thư mục `Scope-Closure` và chạy:

```bash
node scope-closure.js
```
