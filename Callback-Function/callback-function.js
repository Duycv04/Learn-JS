function greet(name, callback) {
  const message = `Xin chào, ${name}!`;
  callback(message);
}

function logMessage(msg) {
  console.log(msg);
}

greet("Duy", logMessage);

const numbers = [10, 20, 30, 40];
console.log("\nforEach:");
numbers.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});

const doubled = numbers.map((value) => value * 2);
console.log("\nmap:", doubled);

function calculate(a, b, callback) {
  const total = a + b;
  callback(total);
}

console.log("\ncalculate:");
calculate(5, 7, (result) => {
  console.log(`Tổng là: ${result}`);
});

console.log("\nsetTimeout:");
setTimeout(() => {
  console.log("Callback chạy sau 500ms");
}, 500);

const user = {
  name: "Duy",
  sayHi() {
    setTimeout(() => {
      console.log(`Hi, ${this.name}`);
    }, 200);
  },
};

user.sayHi();

const words = ["cat", "dog", "elephant", "fox"];
const shortWords = words.filter((word) => word.length < 5);
console.log("\nfilter:", shortWords);
