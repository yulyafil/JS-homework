// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   message += `${key}: ${user[key]}\n`;
// }
// console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */

//Задача  2

// const countProps = function (obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

//Задача 3

// const findBestEmployee = function (employees) {
//   let nameBestEmployee = '';
//   let max = 0;
//   const entries = Object.entries(employees);

//   for (const [name, rating] of entries) {
//     if ([rating] > max) {
//       max = rating;
//       nameBestEmployee = name;
//     }
//   }

//   return nameBestEmployee;
// };

// const findBestEmployee = function (employees) {
//   let nameBestEmployee = '';
//   let maxValue = 0;
//   let keys = Object.keys(employees);
//   for (const key of keys) {
//     if (employees[key] > maxValue) {
//       maxValue = employees[key];
//       nameBestEmployee = key;
//     }
//   }
//   return nameBestEmployee;
// };
// Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'

// //Задача 4

// const countTotalSalary = function (employees) {
//   const values = Object.values(employees);
//   let salary = 0;

//   for (const value of values) {
//     salary += value;
//   }
//   return salary;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

//Задача 5

// function getAllPropValues(array, prop) {
//   const propValue = [];

//   for (const product of products) {
//     if (prop in product) {
//       propValue.push(product[prop]);
//     }
//   }
//   return propValue;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват'];

// console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2];

// console.log(getAllPropValues(products, 'category'));
// [];

//  Задача 6
function calculateTotalPrice(allProdcuts, productName) {
  let totalPrice = 0;
  for (const product of allProdcuts) {
    if (product.name === productName) {
      totalPrice += product.price * product.quantity;
    }
  }
  return totalPrice;
}

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
