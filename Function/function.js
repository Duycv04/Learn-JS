// PHẦN 1: FUNCTION CƠ BẢN

// Tạo function in "Hello JavaScript"
function hello() {
  console.log("Hello JavaScript");
}
hello();

// Tạo function in tên
function sayName(name) {
  console.log(`Tên của tôi là ${name}`);
}
sayName("Duy");

// Function nhận tuổi
function showAge(age) {
  console.log(`Tuổi: ${age}`);
}
showAge(20);

// PHẦN 2: PARAMETER + ARGUMENT

// Tính tổng 2 số

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));

// return
// Bình phương

function square(number) {
  return number * number;
}

//FUNCTION + CONDITION
// Kiểm tra số chẵn
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));

//  FUNCTION + STRING
// Chuyển chuỗi thành chữ hoa

function toUpper(text) {
  return text.toUpperCase();
}

console.log(toUpper("javascript"));

// Chuyển chuỗi thành chữ thường

function toLower(text) {
  return text.toLowerCase();
}

console.log(toLower("JAVASCRIPT"));

// FUNCTION + FOR
// Tính tổng từ 1 đến n
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumToN(10));

//  FUNCTION + ARRAY
// Tính tổng Array

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Tính tiền sản phẩm
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(200000, 3));

// Tính giảm giá
function calculateDiscount(price, percent) {
  const discount = (price * percent) / 100;
  return price - discount;
}

console.log(calculateDiscount(1000000, 10));
