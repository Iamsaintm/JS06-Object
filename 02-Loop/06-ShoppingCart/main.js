// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

product = {};
pName = prompt("Product name");
numP = +prompt("Number of product");
priceP = +prompt("Price of product");
disP = +prompt("Discount of product");
disP = disP / 100;
product.name = pName;
product.quantity = numP;
product.price = priceP;
if (disP != 0) {
  product.discount = disP;
}
// console.log(product);
// let cal = 1;
// const calP = (obj) => {
//   for (let key in obj) {
//     if (isNaN(+obj[`${key}`])) {
//       continue;
//     }
//     if (typeof +obj[`${key}`] == "number") {
//       cal *= obj[`${key}`];
//     }
//   }
//   return cal;
// };

const calP = (product) => {
  let price = product.price;
  let quantity = product.quantity;
  let discount = product.discount ? product.discount : 0;
  return price * quantity * (1 - discount);
};
console.log(calP(product));
