function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("apply add:", applyOperation(5, 3, add));
console.log("apply multiply:", applyOperation(5, 3, multiply));

function createMultiplier(factor) {
  return function (value) {
    return value * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("double:", double(5));
console.log("triple:", triple(5));

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log("doubled:", doubled);
console.log("evens:", evens);
console.log("total:", total);

function runTask(task, name) {
  console.log(`Bắt đầu task: ${name}`);
  return task();
}

const greet = () => console.log("Xin chào!");
runTask(greet, "greet");

const user = {
  name: "Duy",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

const fn = user.sayHi;
console.log("method assigned to variable:");
fn();
