// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

const fruits = {};

key = prompt("Enter Fruit");
value = +prompt("Enter Quantity");

if (value == 1) {
  fruits[key] = value;
} else if (value > 1) {
  fruits[`${key}s`] = value;
}

console.log(fruits);
