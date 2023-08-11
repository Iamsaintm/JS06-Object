// ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
// ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

let username = prompt("username");
let email = prompt("email");
let password = prompt("password");
// let user = {
//   username: username,
//   email: email,
//   password: password,
// };

// Property shorthand
let user = {
  username,
  email,
  password,
};

/* 
  {
    username: <value in username variable>
    email: <value in email variable>
    password: <value in password variable>
  }
*/

console.log(user);
