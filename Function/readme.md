Khai báo Function

Cú pháp:
function tenFunction() {
// code
}

Gọi Function
Khai báo function không có nghĩa là function tự chạy.
Muốn chạy function phải gọi:
tenFunction();

Tham số giúp truyền dữ liệu vào function.

function hello(name) {
console.log(`Hello ${name}`);
}

hello("Duy");

Kết quả: Hello Duy

name là parameter.
"Duy" là argument.

Parameter và Argument

Ví dụ:
function sum(a, b) {
console.log(a + b);
}
sum(10, 20);

Trong:
function sum(a, b) a, b là parameter.

Trong:
sum(10, 20); 10, 20 là argument.

Nhiều tham số
Một function có thể có nhiều parameter:

function introduce(name, age, city) {
console.log(name);
console.log(age);
console.log(city);
}

introduce("Duy", 20, "Bắc Giang");

7. return
   return dùng để trả kết quả từ function.

function sum(a, b) {
return a + b;
}

const result = sum(10, 20);

console.log(result);

Kết quả:30

8. return khác console.log
   console.log

Chỉ in kết quả:

function sum(a, b) {
console.log(a + b);
}
return

Trả kết quả để có thể sử dụng tiếp:

function sum(a, b) {
return a + b;
}

const result = sum(10, 20);

console.log(result \* 2);

Kết quả:60

Function không có return

Nếu function không có return:

function hello() {
console.log("Hello");
}

const result = hello();
console.log(result);

Kết quả: Hello
undefined

Giá trị trả về mặc định là:undefined

return kết thúc Function
Khi JavaScript gặp return, function dừng ngay.
function test() {
console.log("A");
return;
console.log("B");
}
test();
Kết quả:A
console.log("B") không chạy.

Default Parameter

Có thể đặt giá trị mặc định cho parameter.

function hello(name = "Guest") {
console.log(`Hello ${name}`);
}
hello();

Kết quả:Hello Guest

Nếu truyền giá trị:hello("Duy");

Kết quả:Hello Duy

Function Expression
Có thể lưu function vào biến.
const hello = function () {
console.log("Hello");
};

hello();

Đây gọi là:Function Expression

Function Declaration
Cách khai báo thông thường:
function hello() {
console.log("Hello");
}
Đây gọi là: Function Declaration

Arrow Function
Arrow function là cách viết function ngắn hơn.
const hello = () => {
console.log("Hello");
};

hello();
Function có thể gọi Function khác
function add(a, b) {
return a + b;
}

function double(number) {
return number \* 2;
}

const result = double(add(10, 20));
console.log(result);

Kết quả:60

Callback Function
Function có thể được truyền vào một function khác.

function sayHello() {
console.log("Hello");
}

function execute(callback) {
callback();
}

execute(sayHello);

sayHello là callback function.

Anonymous Function

Function không có tên:
const hello = function () {
console.log("Hello");
};

Function này được gọi là anonymous function.

Recursive Function
Function có thể tự gọi chính nó.
Ví dụ tính giai thừa:
function factorial(n) {

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);

}

console.log(factorial(5));

Kết quả:120

Đây gọi là recursion.

Function Declaration và Hoisting

Function declaration có thể được gọi trước khi khai báo:
hello();
function hello() {
console.log("Hello");
}

Điều này hoạt động do JavaScript xử lý function declaration trước khi thực thi code.

Tuy nhiên, khi học cơ bản nên khai báo function trước rồi mới gọi để code dễ đọc.
