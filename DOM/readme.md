# DOM trong JavaScript

DOM là viết tắt của Document Object Model. Nó là một cấu trúc cây biểu diễn toàn bộ trang web trong trình duyệt, giúp JavaScript tương tác với các phần tử HTML như: thẻ, text, thuộc tính, class, sự kiện, v.v.

Nói ngắn gọn: DOM là "bản đồ đối tượng" của trang web, và JavaScript có thể đọc, sửa, xóa, thêm mới các phần tử trên đó.

---

## 1. DOM là gì?

Khi trình duyệt đọc file HTML, nó sẽ tạo ra một cây DOM tương ứng. Ví dụ:

```html
<div id="app">
  <h1 id="title">Xin chào</h1>
  <button id="btn">Click me</button>
</div>
```

Browser sẽ chuyển HTML trên thành một cây các đối tượng như:

```text
document
└── html
    ├── head
    └── body
        └── div#app
            ├── h1#title
            └── button#btn
```

Nhờ có DOM, JavaScript có thể làm những việc như:

- lấy phần tử HTML
- đổi nội dung text
- thêm hoặc xóa element
- lắng nghe sự kiện click, submit, input...
- thay đổi style, class

---

## 2. Truy cập phần tử

Có 3 cách phổ biến nhất:

```js
const title = document.getElementById("title");
const button = document.querySelector("#btn");
const items = document.querySelectorAll(".item");
```

### `getElementById()`

Lấy phần tử theo `id`.

```js
const title = document.getElementById("title");
console.log(title.textContent); // Xin chào
```

### `querySelector()`

Lấy 1 phần tử đầu tiên phù hợp với selector.

```js
const button = document.querySelector("button");
console.log(button.textContent);
```

### `querySelectorAll()`

Lấy tất cả phần tử phù hợp.

```js
const cards = document.querySelectorAll(".card");
console.log(cards.length);
```

---

## 3. Thay đổi nội dung

Bạn có thể cập nhật text, HTML hoặc thuộc tính.

```js
const title = document.getElementById("title");

title.textContent = "Chào bạn!";
title.innerHTML = "<strong>Chào bạn!</strong>";
```

### `textContent`

Thay đổi nội dung văn bản thuần túy.

```js
title.textContent = "Học DOM thật vui";
```

### `innerHTML`

Thay đổi nội dung HTML bên trong phần tử.

```js
title.innerHTML = "<span>Học DOM thật vui</span>";
```

> Dùng `textContent` khi chỉ cần text, và `innerHTML` khi cần chèn HTML.

---

## 4. Thêm và xóa phần tử

```js
const app = document.getElementById("app");

const newItem = document.createElement("p");
newItem.textContent = "Mục mới";
app.appendChild(newItem);
```

Nếu muốn xóa:

```js
app.removeChild(newItem);
```

Hoặc xóa trực tiếp trên chính phần tử:

```js
newItem.remove();
```

---

## 5. Lắng nghe sự kiện

DOM rất mạnh ở chỗ cho phép bạn phản ứng với các hành động của người dùng.

```js
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log("Bạn vừa click vào nút!");
});
```

Ví dụ thực tế hơn:

```js
const title = document.getElementById("title");

button.addEventListener("click", () => {
  title.textContent = "Bạn đã click!";
});
```

---

## 6. Thay đổi class và style

### Thêm class

```js
button.classList.add("active");
```

### Xóa class

```js
button.classList.remove("active");
```

### Toggle class

```js
button.classList.toggle("active");
```

### Thay đổi style

```js
button.style.backgroundColor = "tomato";
button.style.color = "white";
```

---

## 7. Ví dụ hoàn chỉnh

```html
<div id="app">
  <h1 id="title">Xin chào</h1>
  <button id="btn">Click me</button>
</div>

<script>
  const title = document.getElementById("title");
  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    title.textContent = "Bạn đã bấm nút!";
    button.textContent = "Đã click";
  });
</script>
```

Khi người dùng bấm nút, `title` sẽ đổi text và `button` sẽ đổi nội dung hiển thị.

---

## 8. Một số lưu ý quan trọng

### 1) DOM chỉ tồn tại trong trình duyệt

Trong Node.js, bạn không có `document` tự nhiên như trong browser. Vì vậy khi làm việc với DOM, bạn thường chạy code trong file HTML hoặc dùng môi trường browser.

### 2) Hãy chọn đúng phương thức

- `getElementById()` cho phần tử có `id`
- `querySelector()` cho selector đơn giản
- `querySelectorAll()` cho nhiều phần tử

### 3) Event-based programming

DOM dựa trên sự kiện. Khi người dùng thao tác với trang, browser sẽ phát ra các sự kiện, và bạn có thể 'lắng nghe' và xử lý chúng.

---

## 9. Tổng kết

DOM là nền tảng để JavaScript tương tác với giao diện người dùng trên trình duyệt. Nếu bạn hiểu DOM, bạn có thể:

- truy xuất phần tử HTML
- thay đổi nội dung và giao diện
- xử lý sự kiện và tương tác
- xây dựng các ứng dụng web động

Một cách dễ nhớ: DOM là cầu nối giữa HTML và JavaScript.

## Chạy ví dụ

Trong thư mục `DOM`, bạn có thể chạy:

```bash
node dom.js
```

File `dom.js` minh họa cách mô phỏng hoạt động cơ bản của DOM bằng JavaScript thuần, giúp bạn dễ hình dung logic.
