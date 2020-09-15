// const object = { num: 2 };
// function getNum(obj) {
//   return obj.num;
// }
// console.log(getNum(object)); // 2

// const object = { num: 2 };
// //const num = object.num;
// const { num } = object;
// console.log(num); // 2

// const object = { num: 2 };
// // function getNum(obj) {
// //   return obj.num;
// // }
// function getNum({ num }) {
//   return num;
// }
// console.log(getNum(object));

//Задача 1
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// //const getUserNames = ({ name }) => users.map(user => user.name);

// const getUserNames = array => array.map(({ name }) => name);

// console.log(getUserNames(users));

//Задача 2

// const getUsersWithEyeColor = (array, color) =>
//   array.filter(({ eyeColor }) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));

/* [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  }
] */

//Задача   3

// const getUsersWithGender = (array, gen) =>
//   array.filter(({ gender }) => gender === gen).map(({ name }) => name);

// console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = numbers
//   .filter(x => x % 2 === 0)
//   .map(y => y * 2)
//   .reverse();

// console.log(result);

//Задача 4

// const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);

// console.log(getInactiveUsers(users));

//Задача 5

const getUserWithEmail = (array, mail) =>
  array.find(({ email }) => email === mail);

console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));
console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

//Задача 6

// const getUsersWithAge = (array, min, max) =>
//   array
//     .filter(({ age }) => age >= min && age <= max)
//     .map(({ name, email }) => ({ ['name']: name, ['email']: email }));

// console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */

//Задача 7

// const calculateTotalBalance = array =>
//   array.reduce((totalBalance, { balance }) => totalBalance + balance, 0);
// console.log(calculateTotalBalance(users));
// // 20916

//Задача 8
// const getUsersWithFriend = (array, friendName) =>
//   array
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);

// //.map(({ name }) => name);
// //array.filter(({ friends }) => friends).includes(friends);

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]

// //Задача 9

// const getNamesSortedByFriendsCount = array =>
//   [...array]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Задача 10

//const getSortedUniqueSkills = users => users.map(({ skills }) => [...skills]);
const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, { skills }) => [...allSkills, ...skills], [])
    .filter((skill, index, skills) => skills.indexOf(skill) === index)
    .sort();
console.log(getSortedUniqueSkills(users));

//console.log(getSortedUniqueSkills(users));
//console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident'
 'tempor', 'velit',
 'veniam' ]; */

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

function disemvowel(str) {
  return str.replace(/[aeiouy]+/gi, '');
}
console.log(disemvowel('This website is for losers LOL!'));
console.log(disemvowel('This is my look of the DAY'));

const heading = document.createElement('h1');
console.log(heading); // <h1></h1>

heading.textContent = 'This is a heading';
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement('img');
image.setAttribute('src', 'https://placeimg.com/640/480/nature');
image.setAttribute('alt', 'nature');

console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">
