// SCOPE VÀ CLOSURE TRONG JAVASCRIPT
// Chạy file bằng Node.js: node scope-closure.js

// 1. Lexical scope: hàm trong truy cập biến ở scope cha
const appName = "Learn JavaScript";

function showAppName() {
  const message = "Current app:";

  function logAppName() {
    console.log("lexical scope:", message, appName);
  }

  logAppName();
}

showAppName();

// 2. Block scope của let và const
if (true) {
  const blockMessage = "inside the block";
  console.log("block scope:", blockMessage);
}

// 3. var có function scope, không có block scope
if (true) {
  var varValue = "var is visible after this block";
}
console.log("var scope:", varValue);

function showFunctionScope() {
  const functionValue = "only inside this function";
  return functionValue;
}
console.log("function scope:", showFunctionScope());

// 4. Shadowing: biến trong block che khuất biến cùng tên ở scope ngoài
const color = "blue";

if (true) {
  const color = "green";
  console.log("shadowed value:", color);
}

console.log("outer value:", color);

// 5. var được khởi tạo bằng undefined trước dòng khai báo
console.log("var hoisting:", hoistedValue);
var hoistedValue = 10;

// let/const ở TDZ cho đến dòng khai báo; bắt lỗi để script vẫn chạy tiếp.
{
  try {
    console.log("before let declaration:", tdzValue);
  } catch (error) {
    console.log("temporal dead zone:", error.name);
  }

  let tdzValue = 20;
  console.log("after let declaration:", tdzValue);
}

// 6. Closure: greet vẫn truy cập name sau khi createGreeter kết thúc
function createGreeter(name) {
  return function greet() {
    return `Hello, ${name}!`;
  };
}

const greetDuy = createGreeter("Duy");
console.log("closure greeting:", greetDuy());

// 7. Closure dùng để giữ trạng thái riêng
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
console.log("counter:", counter.increment(), counter.increment());
console.log("counter value:", counter.getValue());

// 8. Mỗi callback giữ binding i của lượt lặp tương ứng nhờ let
const callbacks = [];

for (let i = 0; i < 3; i++) {
  callbacks.push(() => i);
}

console.log(
  "closure in loop with let:",
  callbacks.map((callback) => callback()),
);
