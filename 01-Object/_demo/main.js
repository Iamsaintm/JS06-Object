console.log("learn object");

// DataTypes
// - Primitive : Boolean, Number, String etc...
// - Non-Primitive : Object

// ######################
// ### Object Declaration
// ######################
// {} == stand for Object / Scope
// {record_1 , record_2 , record_3 , ...}
// each record => <key_name> : <value>
// <value> any Datatype
// <key_name> Datatype : string
// record === property (คุณสมบัติ, สิ่งที่มี) == key-value pair

// let user = {
//   firstName: "Saint",
//   lastName: "Lee",
//   age: 24,
//   isAdmin: true,
// };

// console.log(user);

// ##########################
// ### ACCESS, MODIFY, DELETE
// ##########################

// Every action NEED <key_name> !!
// Dot Notation <object>.<key_name> === <value>
// ถ้าไม่มี record => return undefined
// ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้

// GET, POLL, READ
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.isAdmin);
// console.log(user.firstName, user.lastName);

// MODIFY, UPDATE
// Syntax : <object>.<old_key> = newValue
// user.firstName = "saint";
// user.age = 25;
// user.age += 2;
// user.age++;

// ADD
// Syntax : <object>.<new_key> = newValue

// user.address = "bangkok";

// DELETE
// Syntax : delete <object>.<key_name>

// delete user.isAdmin;

// #################
// ### NESTED Object
// #################

// const employee = {
//   fullName: "John Doe",
//   salary: 500_000,
//   address: {
//     district: "Phaya Thai",
//     province: "Bangkok",
//     country: "Thailand",
//   },
// };

// // ACCESS, MODIFY, DELETE
// console.log(employee.salary);
// console.log(employee.address);
// console.log(employee.address.province);

// employee.address.province = "Nonthaburian";
// delete employee.address.country;

// PREVENT Crash !!
// Dot ใช้กับ Object เท่านั้น !! <object>.<key>
// ห้าม ใช้กับ undefined <undefined>.<key>
// วิธีแก้ optional chaining => <undefined>?.<key>
// console.log(employee.address);
// console.log(employee.addr) // undifined
// console.log(employee.addr.province); // undefined.province
// console.log(employee.addr?.probince); // ใช้ ? เช็คข้างหน้าว่ามันทำงานได้ไหม

// #############
// ### 4. Check key
// #############

const product = {
  id: 227,
  name: "IPhone",
  price: 50_000,
  //   discount: 0.05,
  "is mobile": true,
};

console.log(product.discount); // undefined

// IN Operator
// Syntax : <key_name_sring> in <object> => BOOL

// "name" in product // => true,false
console.log("name" in product);
console.log("discount" in product);

// method hasOwnProperty
// Syntax : <object>.hasOwnProperty(<key_name>) => BOOL
console.log(product.hasOwnProperty("name"));
console.log(product.hasOwnProperty("discount"));

// #######################
// ### 5. Bracket Notation
// #######################

// Syntax : <object>["<key_name_string>"]
// *** 1. ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// *** 2. ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string
console.log(product.id);
console.log(product["id"]);

// console.log(product.is mobile) crash
console.log(product["is mobile"]);

product["name"] = "IPhone-15";
console.log(product);

let aaa = "name";
console.log(product[aaa]);
console.log(product["name"]);
// console.log(product.aaa); // undefined

// #########################
// ### 6. Property Shorthand
// #########################

/* 
  {
    username: <value in username variable>
    age: <value in age variable>
  }
*/

// let username ="Codecamp"
// let age="15"
