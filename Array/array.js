// TẠO ARRAY

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);

// TRUY CẬP PHẦN TỬ

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// LẤY PHẦN TỬ CUỐI

console.log(fruits[fruits.length - 1]);

// ARRAY.LENGTH

console.log("Số lượng:", fruits.length);

// THAY ĐỔI PHẦN TỬ

fruits[1] = "Mango";

console.log(fruits);

// THÊM PHẦN TỬ VỚI PUSH()

fruits.push("Grape");

console.log(fruits);

// XÓA PHẦN TỬ VỚI POP()

let removedFruit = fruits.pop();

console.log("Phần tử bị xóa:", removedFruit);
console.log(fruits);

// THÊM PHẦN TỬ ĐẦU VỚI UNSHIFT()

fruits.unshift("Watermelon");

console.log(fruits);

//  XÓA PHẦN TỬ ĐẦU VỚI SHIFT()

let firstFruit = fruits.shift();

console.log("Phần tử bị xóa:", firstFruit);
console.log(fruits);

// TÌM INDEX VỚI INDEXOF()

let index = fruits.indexOf("Mango");

console.log("Index của Mango:", index);

// KIỂM TRA PHẦN TỬ VỚI INCLUDES()

console.log(fruits.includes("Mango"));
console.log(fruits.includes("Durian"));

// CẮT ARRAY VỚI SLICE()

let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result);

//  XÓA PHẦN TỬ VỚI SPLICE()

let colors = ["Red", "Green", "Blue", "Yellow"];

colors.splice(1, 1);

console.log(colors);

// THÊM PHẦN TỬ VỚI SPLICE()

let animals = ["Dog", "Cat"];

animals.splice(1, 0, "Tiger");

console.log(animals);

// THAY THẾ PHẦN TỬ VỚI SPLICE()

let cities = ["Hanoi", "Danang", "Saigon"];

cities.splice(1, 1, "Haiphong");

console.log(cities);

// CHUYỂN ARRAY THÀNH STRING VỚI JOIN()

let names = ["An", "Bình", "Cường"];

let text = names.join(", ");

console.log(text);

// CHUYỂN STRING THÀNH ARRAY VỚI SPLIT()

let data = "HTML,CSS,JavaScript";

let languages = data.split(",");

console.log(languages);

// ĐẢO NGƯỢC ARRAY VỚI REVERSE()

let nums = [1, 2, 3, 4, 5];

nums.reverse();

console.log(nums);

// SẮP XẾP STRING VỚI SORT()

let fruits2 = ["Orange", "Apple", "Banana"];

fruits2.sort();

console.log(fruits2);

//  SẮP XẾP NUMBER TĂNG DẦN

let numbers2 = [10, 2, 30, 5, 1];

numbers2.sort((a, b) => {
  return a - b;
});

console.log(numbers2);

//  SẮP XẾP NUMBER GIẢM DẦN

numbers2.sort((a, b) => {
  return b - a;
});

console.log(numbers2);

// DUYỆT ARRAY VỚI FOR

let scores = [8, 7, 9, 6, 10];

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

//  DUYỆT ARRAY VỚI FOR...OF

for (let score of scores) {
  console.log("Điểm:", score);
}

// DUYỆT ARRAY VỚI FOREACH()

scores.forEach((score) => {
  console.log("Score:", score);
});

//  MAP()

let numbers3 = [1, 2, 3, 4, 5];

let doubled = numbers3.map((number) => {
  return number * 2;
});

console.log(doubled);

//  FILTER()

let evenNumbers = numbers3.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);

// FIND()

let foundNumber = numbers3.find((number) => {
  return number > 3;
});

console.log(foundNumber);

// FINDINDEX()

let foundIndex = numbers3.findIndex((number) => {
  return number > 3;
});

console.log(foundIndex);
