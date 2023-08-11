console.log("Learn Ref.");

// Copyed by Value
// Copyed by Reference

// PRIMTIVE
let message = "Hello";

// *** COPY BY VALUE
let word = message;

console.log(message);
console.log(word);

message = "Hi";
console.log(message);
console.log(word);

// OBJECT
let user = {
  name: "John",
};

// *** COPY BY REFERENCE
// assign Address ของ user ให้กับ employee
let employees = user;

user.name = "Jane";
console.log(user);
console.log(employees);
employees.name = "Joe";
console.log(user.name);
