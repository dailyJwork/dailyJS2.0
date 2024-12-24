////////////////////////////////////          LESSON 5

////////// CALLBACK FUNCTION

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }

//   const result = makePizza();
//   const pointer = makePizza; -> посилання на функцию makePizza;
// function greet(name) {
//     console.log(`Welcome ${name}!`);
//   }

//   function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
//   }

//   function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//     callback(name);
//   }

//   registerGuest("Mango", greet); // "Registering Mango!" // "Welcome Mango!"

//   registerGuest("Mango", notify); // "Registering Mango!" // "Dear Mango, your room will be ready in 30 minutes"

// TASK
// const user = {
//     name: "Max",
//     vip: true,
// };

// function checkVipStatus (user, onSuccess, onError) {
//     console.log(`Welcome, ${user.name}`);
//     if(user.vip === true) {
//         onSuccess();
//     } else {
//         onError();
//     }
// };

// function trueVip () {
//     console.log(`${user.vip} is ${user.name}'s VIP status`);
// }

// function falseVip () {
//     console.log(`${user.vip} is ${user.name} status`);
// }

// checkVipStatus(user, trueVip, falseVip);

// TASK
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("cappa", makePizza));

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function (name) {
//   console.log(`Welcome ${name}!`);
// });

// TASK

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });  -> инлайн коллбэк

// TASK
// function add (a , b, callback){
//     callback (a + b);
// };

// function showSum(result) {
//     console.log(result);
// };

// function showMinus(result){
//     console.error("no");
// }

// add(4, 7, showMinus);
// add(5, 6, showSum)

// TASK
// function each(array, callback){
//     let result = [];

//     for(const el of array){
//         result.push(callback(el));
//     }
//     return result;
// }

// console.log(each([64, 72, 94, 50], function (value) {
//     return value + 10;
// }));

// TASK

// const btn = {
//     listeners: [],

//     addListener (callback) {
//         this.listeners.push(callback);
//     },

//     onClick() {
//         for(const listener of this.listeners){
//             listener();
//             console.log(listener);
//         }
//     }
// };

// function btnClick() {
//     console.log("clicked");
// };

// function btnClick2() {
//     console.log("clicked2");
// };

// btn.addListener(btnClick);
// btn.addListener(btnClick2);
// btn.addListener(btnClick2);
// btn.onClick();

// TASK

// function each(array, callback) {
//   let result = [];
//     for(const el of array){
//         result.push(callback(el));
//     }
//   return result;
// }

// console.log(
//   each([11, 3, 5, 6, 7], function (value) {
//     return value * 2;
//   })
// );

// TASK

// MAIN FUNCTION
// function add (a, b, callback){
//     console.log(callback(a, b));
// };

// CALLBACK 1
// function showSum (a, b){
//     return a + b;
// };

// // CALLBACK 2
// function showMinus (a, b) {
//     return a - b;
// }

// add(3, 4, showSum);
// add(10, 3, showMinus);

// TASK

// MAIN FUNCTION
// function getPrice(price, callback) {
//     console.log(`Item costs ${price - callback}`);
// };

// // CALLBACK
// function getDiscount(discount) {
//     return discount;
// };

// getPrice(2300, getDiscount(200));

// TASK

// function each(array, callback) {
//     let  result = [];
//     for(const el of array){
//         result.push(callback(el));
//     };
//     return result;
// }

// console.log(
//   each([62, 34, 40, 50], function (value) {
//     return value * 2;
//   })
// );

// function add(newArray) {
//     let sum = 0;
//     for(const el of newArray){
//         sum += el;
//     }
//     console.log(sum);
//     return sum;
// };

// TASK

// function main(a, b, callback){
//     console.log(callback(a, b));
// };

// function odd(a, b){
//     return a * b;
// };

// function minus(a, b){
//     return a - b;
// }

// main(3, 5, odd);
// main(10, 5, minus);
// main(4, 7, function(a, b) {
//     return a + b;
// });

//
////////////////////////// СТРИЛОЧНИ ФУНКЦИИ

// const add = (a, b, c) => {
//     console.log(a + b + c);
// }

// add(3, 5, 4);

// const add2 = (a, b, c) => a + b + c;
// console.log(add2(1, 5, 7));

// TASK

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });

//     return totalPrice;
//   }

//   const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach((item) => {totalPrice += item;});

//     return totalPrice;
//   }

// TASK
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if(number > value) {
//             filteredNumbers.push(number);
//         }
//     })
//     return filteredNumbers;
// }

// TASK

// const showSum = (a, b, callback) => {console.log(callback(a, b))};

// const add = (a, b) => a + b;

// showSum(3, 11, add);

// const showSum = (a, b, callback) => callback (a + b);
// showSum(4, 10, (result) => {console.log(result);});

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// TASK
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function callback (element) {
//     totalPrice += element;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([164, 48, 291]));

// TASK

// function filterArray(numbers, value) {
//     let resultArray = [];
//     numbers.forEach(function callback(number) {
//         if(number > value){
//             resultArray.push(number);
//         }
//     });
//     return resultArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// TASK

// function calculateAverage (...args) {
//     let total = 0;

//     args.forEach((number) => {total += number;})
//     return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4));

// TASK
// function changeEven(numbers, value) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//     return numbers;
//   }

// const changeEven = (numbers, value) => {
//     let resultArray = [];
//     numbers.forEach((number) => {
//         if(number % 2 === 0){
//             number = number + value;
//         }
//         resultArray.push(number);
//     })
//     return resultArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// map()
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// const newPlanetsLength = planets.map((planet) => planet.length * 2);
// console.log(newPlanetsLength);

// TASK

// const array = [
//     {name: "Max", age: 23, hobbys:["JS", "MUSIC"]},
//     {name: "Polya", age: 20, hobbys:["Paint", "MUSIC"]},
//     {name: "Greg", age: 12, hobbys:["football", "MUSIC"]},
//     {name: "Mikal", age: 12, hobbys:["football", "chests"]},
// ];

// const changeAge = array.map((person) => {
//     return {
//         ...person,
//         age: person.name === "Greg" ? person.age : person.age - 3,
//     }
// })

// console.log(changeAge);

// const changeName = array.map((person) => {
//   return {
//     ...person,
//     name: person.name === "Polya" ? (person.name = "LOl") : person.name,
//   };
// });

// console.log(changeName);

// TASK

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => {
//     return book.title;
// });
// console.log(titles);

// const updateRaiting = books.map((book) => {
//     const newRaiting = 7.34;
//     return {
//         ...book,
//         rating: book.title === "The Dream of a Ridiculous Man" || book.title === "Redder Than Blood"  ? book.rating = newRaiting : book.rating,
//     }
// })

// console.log(books);

// TASK
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => {
//     return book.genres;
// });

// TASK

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
// ];

// const getUserEmails = users.map((user) => {
//   return user.email;
// });

// console.log(getUserEmails);

// TASK

// function foo(callback){
//     return callback(10 * 50);
// };

// function logger(value) {
//     console.log(value);
// };

// foo(logger);

//// filter ()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => {return number % 2 === 0});
// const oddNumbers = numbers.filter((number) => {return number % 2 !== 0});

// const users = [
//     {id: 1},
//     {id: 2},
//     {id: 3},
//     {id: 4},
//     {id: 5},
// ]

// const idUserToDelete = 3;

// const array = users.filter((user) => {return user.id !== 3});
// console.log(array);

// TASK

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const highScoresArray = students.filter((student) => {return student.score >= HIGH_SCORE});
// console.log(highScoresArray);

// const lowScoresArray = students.filter((student) => {return student.score <= LOW_SCORE});
// console.log(lowScoresArray);

// const middleScroresArray = students.filter((student) => {return student.score >= LOW_SCORE && student.score <= HIGH_SCORE});
// console.log(middleScroresArray);

// TASK

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter((book) => {return book.rating >= MIN_RATING});
// const booksByAuthor = books.filter((book) => {return book.author === AUTHOR});

// TASK

// const array = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
// ];

// const getUsersWithEyeColor = (users, color) => {
//    return users.filter((user) => {return user.eyeColor === color});
// };

// console.log(getUsersWithEyeColor(array, "blue"));

// TASK

// const array = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//   ]

//   const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter((user) => {return user.age >= minAge && user.age <= maxAge})
//   };

//   console.log(getUsersWithAge(array, 25, 35));

////// find()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => {return book.title === BOOK_TITLE});
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// TASK

// const array = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
// ];

// const getUserWithEmail = (users, email) => {
//     return users.find((user) => {return user.email === email});
// };

/// every()

// TASK

// const array = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
// ];

// const isEveryUserActive = (users) => {
//   return users.every((user) => {
//     return user.isActive;
//   });
// };

// console.log(isEveryUserActive(array));

// some()

// TASK

// const array = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
// ];

// const isAnyUserActive = (users) => {
//     return users.some((user) => user.isActive);
// };


//// reduce()

// const array = [1, 4, 6, 9];
// const reducedArray = array.reduce((acc, initialValue) => {return acc + initialValue}, 0);
// console.log(reducedArray);

