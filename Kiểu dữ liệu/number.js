//number

let age = 20;
let price = 150000;
let score = 8.5;
let temperature = -10;

console.log(age);
console.log(price);
console.log(score);
console.log(temperature);


// Số nguyên và thập phân

let integer = 100;
let decimal = 10.5;

console.log(integer);
console.log(decimal);

// Hệ cơ số
// Decimal - hệ 10
let decimalNumber = 100;
// Binary - hệ 2
let binaryNumber = 0b1010;
// Octal - hệ 8
let octalNumber = 0o12;
// Hexadecimal - hệ 16
let hexNumber = 0xFF;

console.log(decimalNumber); // 100
console.log(binaryNumber);  // 10
console.log(octalNumber);   // 10
console.log(hexNumber);     // 255

// 4. CÁC PHÉP TOÁN CƠ BẢN
let a = 10;
let b = 3;

console.log(a + b); // Cộng
console.log(a - b); // Trừ
console.log(a * b); // Nhân
console.log(a / b); // Chia
console.log(a % b); // Chia lấy dư
console.log(a ** b); // Lũy thừa

// TOÁN TỬ ++
let x = 5;
x++;

console.log(x); // 6
// x = x + 1;

// TOÁN TỬ --
let y = 5;
y--;
console.log(y); // 4
// Tương đương:
// y = y - 1;

//  PREFIX ++x
let number1 = 5;
console.log(++number1); // 6
console.log(number1);   // 6
// Tăng trước → lấy giá trị sau

// POSTFIX x++
let number2 = 5;
console.log(number2++); // 5
console.log(number2);   // 6
// Lấy giá trị trước → tăng sau

//  PREFIX --x
let number3 = 5;
console.log(--number3); // 4
console.log(number3);   // 4


//  POSTFIX x--
let number4 = 5;

console.log(number4--); // 5
console.log(number4);   // 4

//  +=
let money = 100;
money += 50;
console.log(money); // 150
// money = money + 50;

// -=
let money2 = 100;
money2 -= 30;
console.log(money2); // 70

//  *=
let number5 = 10;
number5 *= 5;
console.log(number5); // 50

//  /=
let number6 = 100;
number6 /= 4;
console.log(number6); // 25


// 15. %=
let number7 = 10;
number7 %= 3;
console.log(number7); // 1


//  **=
let number8 = 2;
number8 **= 3;
console.log(number8); // 8


// Math
// Math.PI
console.log(Math.PI);
// Math.E
console.log(Math.E);


// Math.round()
// Làm tròn gần nhất
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5


//  Math.floor()
// Làm tròn xuống
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4


//  Math.ceil()
// Làm tròn lên
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5


//  Math.trunc()
// Bỏ phần thập phân
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4

// Math.abs()
// Giá trị tuyệt đối
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10));  // 10

//  Math.max()
// Số lớn nhất
console.log(Math.max(10, 20, 30, 5)); // 30

//  Math.min()
// Số nhỏ nhất
console.log(Math.min(10, 20, 30, 5)); // 5
//  Math.pow()
// Lũy thừa

console.log(Math.pow(2, 3)); // 8
// Có thể dùng:
// 2 ** 3

// Math.sqrt()
// Căn bậc hai
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(16)); // 4

// Math.cbrt()
// Căn bậc ba
console.log(Math.cbrt(27)); // 3

//  Math.random()
// Số ngẫu nhiên từ 0 đến < 1
console.log(Math.random());

//  ÉP CHUỖI SANG NUMBER
let strNumber = "100";
let num = Number(strNumber);
console.log(num);
console.log(typeof num);

//  Number.parseInt()
// Chuyển sang số nguyên
console.log(Number.parseInt("100"));      // 100
console.log(Number.parseInt("100.55"));   // 100
console.log(Number.parseInt("100px"));    // 100

// Number.parseFloat()
// Chuyển sang số thực
console.log(Number.parseFloat("100.55")); // 100.55
console.log(Number.parseFloat("10.5px")); // 10.5

// parseInt() và parseFloat()
let width = "500px";
console.log(parseInt(width));   // 500
console.log(parseFloat("10.5px")); // 10.5


// NaN
// Not a Number
let result = Number("hello");
console.log(result); // NaN


// Number.isNaN()
// Kiểm tra có phải NaN không
console.log(Number.isNaN(NaN));   // true
console.log(Number.isNaN(100));   // false
console.log(Number.isNaN("hello")); // false