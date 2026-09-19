1. Array là gì?
   Array là kiểu dữ liệu dùng để lưu nhiều giá trị trong cùng một biến.

Ví dụ:
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

Kết quả:
["Apple", "Banana", "Orange"]

2. Tạo Array
   Cách 1 - Array literal

Cách thường dùng nhất:

let numbers = [10, 20, 30, 40];
let names = ["An", "Bình", "Cường"];

Cách 2 - new Array()
let numbers = new Array(10, 20, 30);

console.log(numbers);

Kết quả: [10, 20, 30]

Thông thường nên dùng:

let numbers = [10, 20, 30];

3. Array có thể chứa nhiều kiểu dữ liệu
   let data = [
   "Duy",
   20,
   true,
   null,
   undefined
   ];

Một Array có thể chứa:

String
Number
Boolean
Object
Array
Function
null
undefined

Ví dụ:

let student = [
"Nguyễn Văn A",
20,
true,
{
city: "Bắc Giang"
}
]; 4. Index trong Array

Array sử dụng index để xác định vị trí.

Index bắt đầu từ 0.

let fruits = ["Apple", "Banana", "Orange"];
Index Value
0 Apple
1 Banana
2 Orange

Lấy phần tử:

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

Kết quả:

Apple
Banana
Orange

Lấy phần tử cuối
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[fruits.length - 1]);

Kết quả: Orange

Vì: fruits.length bằng 3.

Index cuối:

length

length trả về số lượng phần tử.

let numbers = [10, 20, 30, 40];

console.log(numbers.length);

Kết quả:4

Ví dụ:

let names = ["An", "Bình", "Cường"];

console.log(names.length);

Kết quả: 3

Thay đổi phần tử
let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";

console.log(fruits);

Kết quả:

["Apple", "Mango", "Orange"]

Thêm phần tử bằng push()

push() thêm phần tử vào cuối Array.

let fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);

Kết quả:

["Apple", "Banana", "Orange"]

Có thể thêm nhiều phần tử:

fruits.push("Mango", "Grape");

Xóa phần tử cuối bằng pop()
let fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

console.log(fruits);

Kết quả:

["Apple", "Banana"]

pop() trả về phần tử bị xóa:

let fruits = ["Apple", "Banana", "Orange"];

let removed = fruits.pop();

console.log(removed);

Kết quả:Orange

Thêm phần tử đầu bằng unshift()
let fruits = ["Banana", "Orange"];

fruits.unshift("Apple");

console.log(fruits);

Kết quả:

["Apple", "Banana", "Orange"]

Xóa phần tử đầu bằng shift()
let fruits = ["Apple", "Banana", "Orange"];

fruits.shift();

console.log(fruits);

Kết quả:

["Banana", "Orange"]

Các phương thức cơ bản
Method Chức năng
push() Thêm cuối
pop() Xóa cuối
unshift() Thêm đầu
shift() Xóa đầu

Ví dụ:
let numbers = [2, 3];

numbers.push(4);
numbers.unshift(1);

console.log(numbers);

Kết quả:

[1, 2, 3, 4]

indexOf()
Tìm vị trí của phần tử.

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Banana"));

Kết quả:1
Nếu không tìm thấy:
console.log(fruits.indexOf("Mango"));

Kết quả :-1

includes()
Kiểm tra Array có chứa phần tử hay không.

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana"));

Kết quả: true
console.log(fruits.includes("Mango"));

Kết quả:false

15. slice()

Dùng để lấy một phần của Array.
let numbers = [10, 20, 30, 40, 50];
let result = numbers.slice(1, 4);

console.log(result);
Kết quả:[20, 30, 40]

splice()
splice() có thể:

Xóa
Thêm
Thay thế

Ví dụ xóa:

let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1);

console.log(fruits);

Kết quả:

["Apple", "Orange"]

Cấu trúc:

splice(start, deleteCount)
Thêm phần tử bằng splice()
let fruits = ["Apple", "Orange"];

fruits.splice(1, 0, "Banana");

console.log(fruits);

Kết quả:

["Apple", "Banana", "Orange"]
Thay thế phần tử
let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1, "Mango");

console.log(fruits);

Kết quả:

["Apple", "Mango", "Orange"]

join()

Chuyển Array thành String.

let fruits = ["Apple", "Banana", "Orange"];

let result = fruits.join(", ");

console.log(result);

Kết quả:

Apple, Banana, Orange

Ví dụ:

console.log(fruits.join(" - "));

Kết quả:

Apple - Banana - Orange

split()

split() thường dùng để chuyển String thành Array.

let text = "Apple,Banana,Orange";

let fruits = text.split(",");

console.log(fruits);

Kết: ["Apple", "Banana", "Orange"]

sort()
Sắp xếp Array.

String
let fruits = ["Orange", "Apple", "Banana"];

fruits.sort();

console.log(fruits);

Kết quả:

["Apple", "Banana", "Orange"]
Sort Number

Không nên:

let numbers = [10, 2, 30, 5];

numbers.sort();

console.log(numbers);

Có thể cho kết quả không đúng mong muốn vì sort() mặc định xử lý như String.

Nên dùng:

numbers.sort((a, b) => a - b);

Tăng dần:

let numbers = [10, 2, 30, 5];

numbers.sort((a, b) => a - b);

console.log(numbers);

Kết quả:

[2, 5, 10, 30]

Giảm dần:

numbers.sort((a, b) => b - a);
for với Array

Có thể dùng for để duyệt Array.

let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

Kết quả:

Apple
Banana
Orange

Đây là cách rất quan trọng.

for...of
Dùng để lấy trực tiếp từng phần tử.
let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
console.log(fruit);
}

Kết quả:

Apple
Banana
Orange

So với for:

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}
for...of ngắn hơn khi chỉ cần giá trị.

forEach()
Dùng để duyệt từng phần tử.

let numbers = [10, 20, 30];

numbers.forEach(function(number) {
console.log(number);
});

filter()
Lọc phần tử theo điều kiện.

Ví dụ lấy số chẵn:

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);

Kết quả: [2, 4, 6]

find()
Tìm phần tử đầu tiên thỏa điều kiện.

let numbers = [10, 20, 30, 40];

let result = numbers.find(number => number > 25);

console.log(result);

Kết quả: 30

Nếu không tìm thấy: undefined

findIndex()

Tìm index của phần tử đầu tiên thỏa điều kiện.

let numbers = [10, 20, 30, 40];

let index = numbers.findIndex(number => number > 25);

console.log(index);

Kết quả:

2
