// บรรทัดที่มี * , ** , *** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const product1 = { name: "Coke", price: 18, size: "500mL" };

const product2 = product1;
product2.name = "Pepsi";
product2.price = 19;

console.log(product1); // *
console.log(product2); // **
console.log(product1 === product2); // ***
```;

// *  name:"Pepsi", price:19, size:"500ml" เพราะ product2 ได้ไปเปลี่ยนค่าที่เก็บไว้
// ** name:"Pepsi", price:19, size:"500ml" เพราะ product2 ได้ไปเปลี่ยนค่าที่เก็บไว้
// *** name:"Pepsi", price:19, size:"500ml" เพราะ product1 และ product2 เป็นที่อยู่เดียวกัน
