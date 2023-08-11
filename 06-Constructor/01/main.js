// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// let calculator = {
//   x: null,
//   y: null,
//   read: function () {
//     this.x = +prompt("Enter number1"); // calculator.x
//     this.y = +prompt("Enter number2"); // calculator.y
//   },
//   sum: function () {
//     return this.x + this.y;
//   },
//   mul: function () {
//     return this.x * this.y;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

function Calculator(x, y) {
  this.read = `${x},${y}`;
  this.sum = x + y;
  this.mul = x * y;
}

const a = new Calculator(5, 6);
console.log(a.read);
console.log(a.sum);
console.log(a.mul);
