console.log("Constructor Function");

const dev1 = {
  name: "John",
  age: 32,
  role: "dev",
  salary: 40_000,
  dev: function () {
    console.log("I'm develop some features");
  },
};

// Object Creators == Constructor Function

function Developer(name, age) {
  this.name = name; // {name: "Saint"}
  this.age = age; // {name: "Saint",age:24}
  this.role = "dev"; //{name: "Saint",age:24,role:"dev"}
  this.salary = 40_000;
  this.dev = function () {
    console.log(`${this.name} develop some features`);
  }; // {name...,dev:fn()}
  // [2] Implicit Return this
  // return {name...,dev:fn()}
}

// this == dev2
// [3] this === Instance
// Instance           Constructor
const dev2 = new Developer("Saint", 24);
console.log(dev2);
dev2.dev();

const dev3 = new Developer("Jane", 30);
console.log(dev3);
