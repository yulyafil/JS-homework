//Задача 1
// const name = '«Генератор защитного поля»';
// let price = 1000;

// let firstMessage = `Выбран ${name}, цена за ручку ${price} кредитов`;

// console.log(firstMessage);

// price = 2000;
// secondMessage = `Выбран ${name}, цена за ручку ${price} кредитов`;

// console.log(secondMessage);

// //задача 2
// const invoice = 100;
// const stock = 100;
// let message;

// if (invoice <= 100) {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// } else if (invoice > 100) {
//   message = 'На складе недостаточно товаров!';
// }

// console.log(message);
// const message =
//   invoice <= stock
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно товаров!';
// console.log(message);

//Задача 3

// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }

// console.log(message);

//Задача 4

// const orderPieces = 5;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// // Write code under this line
// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (totalPrice > credits) {
//   message = ACCESS_DENIED;
// } else {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// }

// console.log(message);

//Задача 5

const countryName = 'Австралия';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    case 'Китай':
      price = 100;
      break;

    case 'Австралия':
      price = 170;
      break;

    case 'Индия':
      price = 80;
      break;

    case 'Ямайка':
      price = 120;
      break;

    default:
      message = NO_DELIVERY;
    // Write code under this line
  }
}
if (price > 0) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);
