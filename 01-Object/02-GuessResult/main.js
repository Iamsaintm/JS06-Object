// บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
const user = {
  email: "cc@gmail.com",
  isActive: true,
};

user.isActive = false;
console.log(user); // *
user = {};
console.log(user); // **

// ```

// *  { email: 'cc@gmail.com',isActive: false} เพราะมีการกำหนดค่าใหม่แล้ว
// ** error เพราะ const เปลี่ยนค่าไม่ได้
