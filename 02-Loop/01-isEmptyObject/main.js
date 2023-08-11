// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

// let ct = 0;
// const user = {};
// let empty = () => {
//   for (let key in user) {
//     if (user[key]) {
//       ct += 1;
//     }
//   }
//   if (ct > 0) {
//     return "object";
//   } else {
//     return "Empty object";
//   }
// };
// console.log(empty());

function isEmptyObj(obj) {
  let isEmpty = true;
  for (let key in obj) {
    isEmpty = false;
  }
  return isEmpty;
}
