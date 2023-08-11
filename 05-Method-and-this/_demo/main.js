console.log("Method and this keyword");

// ##############################
// ####### 1. Intro Method ######
// ##############################

// Object === Collection of properties and/or method
// each record => called property
// each property => <key>:<value>

// some record => <key>:<FN>
// called method == ความสามารถของ Object

// const programer = {
//   name: "Saint",
//   age: "24",
//   dev: devWebsite,
//   meet: meeting,
//   sleep,
// };

// function devWebsite() {
//   console.log("I'm working");
// }
// function meeting() {
//   console.log("I'm meeting");
// }
// function sleep() {
//   console.log("I'm sleeping");
// }

// // property
// // Syntax <obj>.<key>
// console.log(programer.name);
// console.log(programer.age);

// // method
// // Syntax : <ovj>.<method>()

// // programer.dev // devWebsite
// programer.dev();
// programer.meet();
// programer.sleep();

// ##############################
// #### 2. Alternative Syntax ###
// ##############################

// const programer = {
//   // property shorthand
//   name: "John",
//   age: 30,
//   dev: function () {
//     console.log("I'm working");
//   },
//   meet: () => console.log("I'm meeting"),

//   // method shorthand
//   sleep() {
//     console.log("I'm sleeping");
//   },
//   // sleep : () => console,.log("I'm sleeping")
// };

// programer.dev();
// programer.meet();
// programer.sleep();

// Mini-lab
// สร้าง Object ของตัวเอง
// ระบุคุณสมบัติขของตัวเองสัก 2-3 ข้อ
// ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)
// key : namedFunction
// key : anonymous FN
// key : arrorFN
// key : shorthand

// const me = {
//   name: "Saint",
//   age: 24,
//   eye: "Brown",
//   sport: function playsport(type) {
//     console.log(`I'm playing ${type}`);
//   },
//   sleep: function () {
//     console.log("I'm Sleeping");
//   },
//   eatAllNight: (menu = "sushi") => {
//     console.log(`I'm eat ${menu} the time`);
//   },
//   focus(task) {
//     console.log(`I'm working on ${task} in focus mode`);
//   },
// };
// me.sport("football");
// me.sleep();
// me.eatAllNight("Pizza");
// me.focus("javascript lab");

// ##############################
// ####### 3. Intro OOP #########
// ##############################

// OOP : Object Oriented Program

// const car = {
//   brand: "Tesla",
//   model: "X",
//   speed: 80,
//   drive: () => console.log("Driving"),
//   "auto pilot": () => console.log("Self Driving"),
// };

// console.log(car.brand, car.model);

// // called.method
// car.drive();
// car["auto pilot"]();

// const calculator = {
//   sum: (x, y) => x + y,
//   minus: (x, y) => x - y,
// };
// let r1 = calculator.sum(5, 7);
// let r2 = calculator.minus(7, 3);
// let newSpeed = calculator.sum(car.speed, 20);
// console.log(newSpeed);
// console.log(r1, r2);

// ##############################
// ####### 4.This Keyword #######
// ##############################

// JS Keyword : if, else, for ,while, do, switch, this

// const user = {
//   name: "codecamp",
//   age: 15,
//   sayHi: function () {
//     console.log(`Hello ${this.name}`);
//   },
//   growOld: function () {
//     // console.log(this);
//     // this == user , this.age == user.age
//     this.age++;
//   },
// };

// Question : ทำอย่างไร method จะสามารถเข้าถึง property ของตัวเองได้
// user.sayHi();
// user.name = "software park";
// user.sayHi();

// console.log(user.age);
// user.growOld();
// console.log(user.age);

// Q : ค่าของ This ถูก Solve ตั้งแต่ตอนที่เขียน function หรือป่าว?
// A : ไม่
// function dev(feature) {
//   console.log(`${feature} developed by ${this.name}`);
// }

// const programer1 = {
//   name: "John",
//   develop: dev,
// };

// const programer2 = {
//   name: "Jane",
//   develop: dev,
// };

// A : this ถูก solve ตอนเรียกใช้ Method

// Caller.method => this == Caller == Object before the dot

// Checkpoint-1 : this == object ที่เรียกใช้ method
// programer1.develop("Login");
// programer2.develop("Register");

// #################################
// # 5. Excution Context == Caller #
// #################################

// Global(Browser) Context : window object
// window.alert("I'm Global") ;
// this.alert("I'm Global this") ;
// alert("I'm execute in window") ;

// FN Declaration จะทำให้ sayHi ไปติดใน windowObj
// Hoisting
// function sayHi() {
//   console.log(this);
// }
// var a = "m";

// Execute Context = Window
// window.sayHi()
// this.sayHi()
// sayHi()

// Function Context
var name = "Codecamp";
function sayHello() {
  console.log(this.name);
}

// Window Caller
sayHello();
window.sayHello();

const user = {
  name: "John",
  say: sayHello,
  scream: () => {
    console.log(`scream by ${this.name}`);
  },
  srcm: function () {
    console.log(`scream by ${this.name}`);
  },
};

// user Caller
user.say();

// SUMMARY : this == Object Caller

// Arrow ไม่มีความสามารถสร้าง context
// Loose Context => Chain to window
user.scream(); // don't use this keyword with arrow function
user.srcm();
