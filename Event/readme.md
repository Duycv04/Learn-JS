# Event trong JavaScript

Event là một khái niệm rất quan trọng trong JavaScript, đặc biệt khi làm việc với web browser. Event biểu thị một "sự kiện" xảy ra trong chương trình hoặc trên trang web, ví dụ như:

- click vào nút
- di chuột vào phần tử
- gõ phím
- tải trang xong
- submit form
- thay đổi giá trị input

Khi sự kiện xảy ra, JavaScript có thể "lắng nghe" và thực hiện một hành động tương ứng.

---

## 1. Event là gì?

Nói đơn giản, event là một thông báo: "đã xảy ra điều gì đó".

Ví dụ:

```js
button.addEventListener("click", () => {
  console.log("Nút đã được click!");
});
```

Trong đoạn code trên:

- `click` là event
- `addEventListener` là cách đăng ký lắng nghe sự kiện
- callback là hành động sẽ chạy khi sự kiện xảy ra

---

## 2. Cách lắng nghe sự kiện

### `addEventListener()`

Đây là cách phổ biến nhất để xử lý sự kiện trong DOM.

```js
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  console.log("Bạn vừa nhấn nút");
});
```

Khi người dùng click vào nút, callback sẽ được gọi.

---

## 3. Các dạng event phổ biến

### Click event

```js
button.addEventListener("click", () => {
  console.log("Click!");
});
```

### Mouseover event

```js
button.addEventListener("mouseover", () => {
  console.log("Chuột đang ở trên nút");
});
```

### Input event

```js
const input = document.getElementById("name");

input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

### Submit event

```js
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form đã được submit");
});
```

---

## 4. Event object

Khi sự kiện xảy ra, browser sẽ truyền một object `event` vào callback. Object này chứa thông tin về sự kiện đó.

```js
button.addEventListener("click", (event) => {
  console.log(event.type); // click
  console.log(event.target); // phần tử đã kích hoạt sự kiện
});
```

### Một số thuộc tính thường dùng

- `event.type`: loại sự kiện
- `event.target`: đối tượng phát sinh sự kiện
- `event.preventDefault()`: chặn hành vi mặc định của trình duyệt
- `event.stopPropagation()`: dừng lan truyền sự kiện

---

## 5. Bubbling và capturing

### Bubbling

Sự kiện bắt đầu từ phần tử con và nổi lên cha mẹ.

```html
<div id="parent">
  <button id="child">Click</button>
</div>
<script>
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
  });
</script>
```

Khi click vào button, thứ tự sẽ là:

1. child
2. parent

### `stopPropagation()`

Dùng để dừng sự kiện tiếp tục lan ra ngoài:

```js
button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Dừng bubbling");
});
```

---

## 6. Event trong JavaScript thuần

Trong Node.js không có DOM thật, nhưng bạn vẫn có thể hiểu ý tưởng bằng một mẫu event đơn giản.

```js
function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function (eventName, callback) {
  if (!this.events[eventName]) {
    this.events[eventName] = [];
  }

  this.events[eventName].push(callback);
};

EventEmitter.prototype.emit = function (eventName, data) {
  if (!this.events[eventName]) return;

  this.events[eventName].forEach((callback) => callback(data));
};
```

Dùng như sau:

```js
const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(`User ${user} đã đăng nhập`);
});

emitter.emit("login", "Duy");
```

Đây là nguyên lý tương tự event system trong browser.

---

## 7. Ví dụ thực tế

```js
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  button.textContent = "Đã click";
  button.style.backgroundColor = "green";
});
```

Khi người dùng click nút:

- text của nút thay đổi
- màu nền đổi màu
- giao diện phản hồi ngay

---

## 8. Tổng kết

Event là cách JavaScript biết khi có tương tác xảy ra với người dùng hoặc với trang web. Bạn đã học:

- event là "sự kiện"
- `addEventListener()` dùng để lắng nghe
- callback chạy khi sự kiện xảy ra
- `event` object chứa thông tin chi tiết
- event có thể lan truyền theo bubbling

Nắm vững event là bước quan trọng để làm việc với DOM và UI web.

## Chạy ví dụ

Mở terminal trong thư mục `Event` và chạy:

```bash
node event.js
```
