// ARRAY METHODS - CÁC PHƯƠNG THỨC THƯỜNG DÙNG
// Chạy file bằng Node.js: node array-method.js

// 1. Thêm và xóa phần tử ở đầu/cuối mảng
// Các method này thay đổi mảng ban đầu.
const fruits = ["Apple", "Banana"];

fruits.push("Orange"); // thêm vào cuối
console.log("push:", fruits); // ["Apple", "Banana", "Orange"]

const lastFruit = fruits.pop(); // xóa và trả về phần tử cuối
console.log("pop:", lastFruit, fruits); // Orange ["Apple", "Banana"]

fruits.unshift("Mango"); // thêm vào đầu
console.log("unshift:", fruits); // ["Mango", "Apple", "Banana"]

const firstFruit = fruits.shift(); // xóa và trả về phần tử đầu
console.log("shift:", firstFruit, fruits); // Mango ["Apple", "Banana"]

// 2. Tìm kiếm phần tử
const scores = [7, 9, 5, 9, 10];

console.log("indexOf:", scores.indexOf(9)); // 1, vị trí đầu tiên
console.log("lastIndexOf:", scores.lastIndexOf(9)); // 3, vị trí cuối cùng
console.log("includes:", scores.includes(10)); // true
console.log("not included:", scores.includes(4)); // false

// 3. Tìm phần tử theo điều kiện
const firstHighScore = scores.find((score) => score >= 9);
const firstHighScoreIndex = scores.findIndex((score) => score >= 9);

console.log("find:", firstHighScore); // 9
console.log("findIndex:", firstHighScoreIndex); // 1
console.log(
  "not found:",
  scores.find((score) => score > 10),
); // undefined
console.log(
  "no matching index:",
  scores.findIndex((score) => score > 10),
); // -1

// 4. Kiểm tra điều kiện
console.log(
  "some:",
  scores.some((score) => score < 6),
); // true, có ít nhất một phần tử
console.log(
  "every:",
  scores.every((score) => score >= 0),
); // true, tất cả phần tử

// 5. Cắt và thay đổi mảng
const numbers = [10, 20, 30, 40, 50];

const middleNumbers = numbers.slice(1, 4); // lấy index 1 đến trước index 4, không sửa mảng gốc
console.log("slice:", middleNumbers); // [20, 30, 40]
console.log("after slice:", numbers); // [10, 20, 30, 40, 50]

const removedNumbers = numbers.splice(1, 2, 25, 35); // từ index 1, xóa 2 phần tử rồi thêm 25, 35
console.log("splice removed:", removedNumbers); // [20, 30]
console.log("after splice:", numbers); // [10, 25, 35, 40, 50]

// 6. Nối mảng và chuyển đổi giữa Array/String
const moreNumbers = [60, 70];
const allNumbers = numbers.concat(moreNumbers); // tạo mảng mới
console.log("concat:", allNumbers);

const joinedNumbers = numbers.join(" - ");
console.log("join:", joinedNumbers); // "10 - 25 - 35 - 40 - 50"

const languages = "HTML,CSS,JavaScript".split(",");
console.log("split:", languages); // ["HTML", "CSS", "JavaScript"]

// 7. Duyệt mảng
const colors = ["Red", "Green", "Blue"];

colors.forEach((color, index) => {
  console.log(`forEach ${index}:`, color);
});

// forEach phù hợp để thực hiện hành động; nó không tạo mảng kết quả.
const forEachResult = colors.forEach((color) => color.toLowerCase());
console.log("forEach return:", forEachResult); // undefined

// 8. Biến đổi từng phần tử với map()
const prices = [10, 20, 30];
const pricesWithTax = prices.map((price) => price * 1.1);

console.log("map:", pricesWithTax); // [11, 22, 33]
console.log("original prices:", prices); // [10, 20, 30], không đổi

// 9. Lọc phần tử với filter()
const allScores = [4, 8, 6, 10, 3];
const passingScores = allScores.filter((score) => score >= 5);

console.log("filter:", passingScores); // [8, 6, 10]

// 10. Gộp dữ liệu với reduce()
const cartPrices = [120, 80, 50];
const cartTotal = cartPrices.reduce((total, price) => total + price, 0);

console.log("reduce total:", cartTotal); // 250

// reduceRight() xử lý từ phải sang trái.
const letters = ["A", "B", "C"];
const rightToLeft = letters.reduceRight((text, letter) => text + letter, "");
console.log("reduceRight:", rightToLeft); // "CBA"

// 11. Sắp xếp
const unsortedNumbers = [10, 2, 30, 5];

unsortedNumbers.sort((a, b) => a - b); // tăng dần; sort sửa mảng gốc
console.log("sort ascending:", unsortedNumbers); // [2, 5, 10, 30]

unsortedNumbers.sort((a, b) => b - a); // giảm dần
console.log("sort descending:", unsortedNumbers); // [30, 10, 5, 2]

const names = ["Mai", "An", "Bình"];
names.sort((a, b) => a.localeCompare(b, "vi"));
console.log("sort strings:", names); // sắp xếp chuỗi theo tiếng Việt

// 12. Đảo thứ tự
const directions = ["North", "East", "South", "West"];
directions.reverse(); // reverse sửa mảng gốc
console.log("reverse:", directions); // ["West", "South", "East", "North"]

// 13. Mảng nhiều chiều
const nestedNumbers = [1, [2, 3], [4, [5]]];

console.log("flat depth 1:", nestedNumbers.flat()); // [1, 2, 3, 4, [5]]
console.log("flat all levels:", nestedNumbers.flat(Infinity)); // [1, 2, 3, 4, 5]

const words = ["hello world", "array methods"];
const splitWords = words.flatMap((word) => word.split(" "));
console.log("flatMap:", splitWords); // ["hello", "world", "array", "methods"]

// 14. Tạo và kiểm tra mảng
console.log("isArray:", Array.isArray([1, 2, 3])); // true
console.log("not an array:", Array.isArray("JavaScript")); // false

const characters = Array.from("JS");
console.log("Array.from string:", characters); // ["J", "S"]

const doubledRange = Array.from([1, 2, 3], (number) => number * 2);
console.log("Array.from map:", doubledRange); // [2, 4, 6]

console.log("Array.of:", Array.of(4)); // [4], không phải mảng có 4 phần tử trống

// 15. Điền giá trị
const emptySlots = Array(3).fill(0);
console.log("fill:", emptySlots); // [0, 0, 0]

// 16. Lấy phần tử bằng at()
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
console.log("at first:", weekdays.at(0)); // "Mon"
console.log("at last:", weekdays.at(-1)); // "Fri"

// 17. Destructuring và rest để lấy dữ liệu từ mảng
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;
console.log("destructuring:", red, green, blue);

const [firstColor, ...otherColors] = colors;
console.log("rest:", firstColor, otherColors); // "Red" ["Green", "Blue"]

// Ghi nhớ:
// - Thay đổi mảng gốc: push, pop, shift, unshift, splice, sort, reverse, fill.
// - Trả về mảng/kết quả mới: concat, slice, map, filter, flat, flatMap.
// - Tìm/kiểm tra: indexOf, lastIndexOf, includes, find, findIndex, some, every.
