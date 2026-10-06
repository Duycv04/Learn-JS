const user = {
  name: "Duy",
  age: 21,
  isStudent: true,
  skills: ["JavaScript", "HTML", "CSS"],
};

const jsonString = JSON.stringify(user, null, 2);
console.log("JSON string:");
console.log(jsonString);

const parsedUser = JSON.parse(jsonString);
console.log("\nParsed object:");
console.log(parsedUser.name);
console.log(parsedUser.age);
console.log(parsedUser.skills);

const apiResponse = '{"id":1,"title":"Learn JavaScript","completed":false}';
const todo = JSON.parse(apiResponse);
console.log("\nTodo from API:");
console.log(todo.title, todo.completed);
