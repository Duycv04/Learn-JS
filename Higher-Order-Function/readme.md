# Higher-Order Function trong JavaScript

Higher-order function (HOF) là kiểu hàm mà:

- nhận một hàm khác làm tham số, hoặc
- trả về một hàm khác.

Nói cách khác, trong JavaScript, hàm là object cấp một (first-class citizen), nên ta có thể truyền hàm như biến, lưu vào mảng, trả về từ hàm, hay gọi từ trong hàm khác.

## 1. Khái niệm cơ bản

```js
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(5, 3, add)); // 8
console.log(applyOperation(5, 3, multiply)); // 15
```

`applyOperation` là higher-order function vì nó nhận `operation` là một hàm và gọi lại nó bên trong.

---

## 2. Hàm trả về hàm

```js
function createMultiplier(factor) {
  return function (value) {
    return value * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

Trong ví dụ này, `createMultiplier()` không trả về một số, mà trả về một hàm mới. Đây là một dạng rất phổ biến của higher-order function.

---

## 3. Ví dụ phổ biến: `map`, `filter`, `reduce`

Các phương thức mảng dưới đây đều là higher-order function:

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens); // [2, 4]
console.log(total); // 15
```

- `map`: biến đổi từng phần tử bằng callback
- `filter`: giữ lại các phần tử thỏa điều kiện
- `reduce`: gom các phần tử thành một giá trị cuối cùng

---

## 4. Tại sao gọi là "higher-order"?

Câu hỏi đơn giản là: vì hàm này "ở mức cao hơn" so với hàm bình thường. Nó thao tác với các hàm khác như dữ liệu đầu vào hoặc như giá trị trả về.

Điều này giúp bạn:

- tái sử dụng logic tốt hơn
- viết code gọn hơn
- đóng gói hành vi và thay đổi chúng linh hoạt
- xây dựng các API mạnh mẽ hơn

---

## 5. Higher-order function trong thực tế

```js
function runTask(task, name) {
  console.log(`Bắt đầu task: ${name}`);
  return task();
}

const greet = () => console.log("Xin chào!");

runTask(greet, "greet");
```

Ở đây, `runTask` nhận một hàm `task` và thực thi nó khi cần. Đây là cách rất thường gặp khi làm việc với callback, event, async và framework.

---

## 6. Lợi ích của higher-order function

### 1) Tái sử dụng logic

Bạn có thể tạo các hàm chung và truyền hành vi khác nhau vào đó.

### 2) Giảm lặp code

Thay vì viết nhiều hàm tương tự, bạn chỉ cần viết logic chính một lần và truyền callback.

### 3) Dễ mở rộng

Bạn có thể thay đổi hành vi mà không cần sửa phần lõi của chương trình.

---

## 7. Một số lưu ý

### Không phải mọi hàm đều là higher-order function

Nếu một hàm chỉ thực hiện tính toán đơn giản và không nhận hay trả về hàm, nó không phải higher-order function.

### Chú ý với `this`

Khi truyền hàm dạng method hoặc function bình thường, `this` có thể thay đổi tùy ngữ cảnh. Nếu cần giữ `this`, hãy dùng arrow function hoặc bind.

```js
const user = {
  name: "Duy",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

const fn = user.sayHi;
fn(); // this không còn là user
```

---

## 8. Tổng kết

Higher-order function là một khái niệm rất quan trọng trong JavaScript vì nó giúp bạn viết code linh hoạt, sạch và dễ mở rộng.

Bạn đã thấy:

- hàm có thể nhận hàm làm tham số
- hàm có thể trả về hàm
- `map`, `filter`, `reduce` là những ví dụ điển hình
- callback và higher-order function thường đi cùng nhau

## Chạy ví dụ

Mở terminal trong thư mục `Higher-Order-Function` và chạy:

```bash
node higher-order-function.js
```
