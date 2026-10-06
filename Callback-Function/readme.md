# Callback Function trong JavaScript

Callback function là một hàm được truyền như một tham số cho một hàm khác và được gọi lại sau khi công việc chính hoàn tất.

Trong JavaScript, callback là một kỹ thuật rất phổ biến trong:

- `forEach`, `map`, `filter`, `reduce`
- sự kiện DOM
- `setTimeout`, `setInterval`
- xử lý bất đồng bộ

## 1. Callback là gì?

Nói ngắn gọn, callback là "hàm được gọi lại".

```js
function greet(name, callback) {
  const message = `Xin chào, ${name}!`;
  callback(message);
}

function logMessage(msg) {
  console.log(msg);
}

greet("Duy", logMessage);
```

Khi chạy, `greet()` sẽ tạo `message` rồi gọi `callback(message)`. Hàm `logMessage` được truyền vào như một callback và thực thi ở phía trong `greet()`.

## 2. Callback trong hàm bậc cao (Higher-order function)

Hàm bậc cao là hàm nhận tham số là hàm hoặc trả về một hàm. Callback chính là một dạng hàm được truyền vào để thực thi trong hàm bậc cao.

```js
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(5, 3, add)); // 8
console.log(applyOperation(5, 3, multiply)); // 15
```

Ví dụ này cho thấy callback giúp ta thay đổi hành vi của hàm mà không cần viết nhiều logic lặp lại. Nói cách khác, bạn đang “đưa logic xử lý” cho một hàm khác quyết định khi nào và như thế nào để chạy.

## 3. Callback với `forEach`

`forEach` nhận callback và gọi callback đó cho từng phần tử của mảng.

```js
const numbers = [10, 20, 30, 40];

numbers.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});
```

Mỗi lần lặp, JavaScript gọi callback với `(value, index, array)`.

## 4. Callback với `map`

`map` là một ví dụ điển hình của higher-order function. Nó nhận vào một callback và dùng callback đó để biến đổi từng phần tử trong mảng, sau đó trả về một mảng mới.

```js
const prices = [100, 200, 300];

const discountPrices = prices.map((price) => price * 0.9);
console.log(discountPrices); // [90, 180, 270]
```

`map` không thay đổi mảng gốc; thay vào đó, nó tạo ra một mảng mới chứa các giá trị đã được xử lý. Cách hoạt động của `map` rất gần với ý nghĩa của callback: bạn “nói” với `map` “hãy biến đổi từng phần tử như thế nào”, và `map` sẽ tự gọi callback cho từng phần tử.

## 5. Callback bất đồng bộ

JavaScript chạy không đồng bộ nhiều khi làm việc với thời gian, request, file, event, ...

```js
console.log("Bắt đầu");

setTimeout(() => {
  console.log("Callback chạy sau 1 giây");
}, 1000);

console.log("Kết thúc");
```

Thứ tự thực thi:

1. `Bắt đầu`
2. `Kết thúc`
3. `Callback chạy sau 1 giây`

Đây là một ví dụ điển hình cho callback trong xử lý bất đồng bộ.

## 6. Callback trong sự kiện

```js
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log("Người dùng vừa click vào nút");
});
```

Khi có sự kiện click xảy ra, callback sẽ được gọi.

## 7. Vì sao callback quan trọng?

Callback giúp ta:

- tái sử dụng logic
- viết code ngắn gọn hơn
- xử lý bất đồng bộ
- tạo ra các API linh hoạt

## 8. Lưu ý khi dùng callback

### Callback hell

Khi callback lồng nhau quá nhiều, code sẽ khó đọc.

```js
doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      console.log("Xong");
    });
  });
});
```

Đây gọi là callback hell. Sau này, JavaScript khuyến khích dùng `Promise` và `async/await` để viết code rõ hơn.

### `this` có thể gây nhầm lẫn

Nếu dùng function bình thường trong callback, `this` phụ thuộc vào ngữ cảnh gọi hàm. Nên dùng arrow function khi cần `this` từ scope ngoài.

```js
const user = {
  name: "Duy",
  sayHi() {
    setTimeout(() => {
      console.log(`Hi, ${this.name}`);
    }, 100);
  },
};

user.sayHi();
```

## 9. Tổng kết

- Callback là hàm được truyền vào hàm khác để thực thi khi cần.
- Callback rất thường gặp trong `forEach`, `map`, `filter`, event và async.
- Chúng giúp code linh hoạt, nhưng quá nhiều callback lồng nhau sẽ làm code khó đọc.
- Khi code bất đồng bộ phức tạp, nên cân nhắc `Promise` và `async/await`.

## Chạy ví dụ

Mở terminal trong thư mục `Callback-Function` và chạy:

```bash
node callback-function.js
```
