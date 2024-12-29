// const players = [
//     {id: 1, timePlayed: 440,},
//     {id: 2, timePlayed: 240,},
//     {id: 3, timePlayed: 840,},
// ];

// const maxTimePlayed = Math.max(...players.map((player) => {return player.timePlayed})) ;
// const mappedArray = players.map((player) => {return player.timePlayed});
// console.log(mappedArray);
// console.log(Math.min(...mappedArray));

///// LESSON 6
///// THIS

// TASK

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// function showThis () {
//     console.log(this);
// }

// showThis() --> undefined, потому что строгий режим, либо window если не строгий режим

// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   },
// };
// user.showThis()

// function showThis () {
//     console.log(this);
// }

// const user = {
//     name: "Max",
//     id: 10,
// }

// user.showContent = showThis;

// user.showContent();

// showThis();

// const user = {
//   name: "Max",
//   showThis() {
//     console.log(this);
//   },
// };
// user.showThis();

// const fa = user.showThis;

// fa();

// user.showThis();

// const user = {
//     nickname: "Max",
//     showThis(){
//         console.log(this.nickname);
//     }
// }

// user.showThis();

// function sayHi(onSuccess) {
//     console.log("Hello");
//     user.showThis();
// }

// sayHi(user.showThis);

// function sayHi(callback) {
//     console.log('Hello');
//     callback();
// };

// sayHi(user.showThis);

// TASK

// const chopShop = {
//     stones: [
//         {name:"Emerald", price: 1200, quantity: 4,},
//         {name:"Izumrud", price: 1700, quantity: 2,},
//         {name:"Almaz", price: 3000, quantity: 2,}
//     ],
//     calculateTotalPrice (stoneName) {
//         for(stone of this.stones) {
//             if(stone.name === stoneName){
//                 return stone.price * stone.quantity;
//             }
//         }
//     }
// };

// console.log(chopShop.calculateTotalPrice("Almaz"));

// const chopShop = {
//     stones: [
//         {name:"Emerald", price: 1200, quantity: 4,},
//         {name:"Izumrud", price: 1700, quantity: 2,},
//         {name:"Almaz", price: 3000, quantity: 2,}
//     ],
//     calculateTotalPrice (stoneName) {
//         const foundStone = this.stones.find((stone) => {return stone.name === stoneName});
//         if(foundStone === undefined) {return 0;}
//         return foundStone.price * foundStone.quantity;
//     }
// };

// console.log(chopShop.calculateTotalPrice("Almaz"));
// console.log(chopShop.calculateTotalPrice("Emerald"));
// console.log(chopShop.calculateTotalPrice("Izumrud"));
// console.log(chopShop.calculateTotalPrice("add"));

/// call() apply() bind()

// function sayHey (name) {
//    console.log(`${name}, your room is ${this.room}, your age is ${this.age}`);
// };

// const user = {
//     age: 12,
//     room: 28,
// }

// // sayHey.call(user, "Mango");
// // sayHey.call(user, "Max");
// // sayHey.apply(user, ["Jank"]);
// const newFn = sayHey.bind(user);
// newFn("Key");

// TASK

// const chopShop = {
//     stones: [
//         {name: "Almaz", price: 4000, quantity: 4},
//         {name: "Rubin", price: 1500, quantity: 2},
//         {name: "Saphire", price: 2800, quantity: 3},
//     ],
//     calcStonePrice (stoneName) {
//         const foundStone = this.stones.find((stone) => {return stone.name === stoneName});
//         if(foundStone === undefined) {
//             return `No stone with ${stoneName} name`
//         }
//         return foundStone.price * foundStone.quantity;
//     },
//     calcTotalPrice () {
//         let sum = 0;
//         this.stones.map((stone) => {
//             let value = stone.price * stone.quantity;
//             sum += value;
//         });
//         return sum;
//     }
// };

// console.log(chopShop.calcStonePrice("Rubin"));
// console.log(chopShop.calcTotalPrice());

// bind()

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer));

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount.bind(library));

// const obj = {
//     value: 0,
//     increment () {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     },
// };

// const changeValue = function (operation) {
//     operation()
// };

// changeValue(obj.increment.bind(obj));
// changeValue(obj.increment.bind(obj));
// changeValue(obj.increment.bind(obj));
// changeValue(obj.decrement.bind(obj));
// console.log(obj);

/// Prototypes

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);

// TASK

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// const oneMoreChild = Object.create(child);
// oneMoreChild.name = "Hex";
// oneMoreChild.age = 12;

// console.log(oneMoreChild);

// console.log(parent);

// for (const key in parent){
//     if(parent.hasOwnProperty(key)){
//         console.log(key);
//     }
// }
// -> проверка собственных свойст

// for(const key of Object.keys(parent)) {
//     console.log(key);
// }
// -> проверка свойст сразу, без дополнительного иф

//////// CLASS

// class Car {
//     name = "";
//     speed = 0;
//     model = "";
//     year = 0;
//     constructor (name, speed, model, year) {
//         this.name = name;
//         this.speed = speed;
//         this.model = model;
//         this.year = year;
//     }
// };

// const audi = new Car("Audi", "220", "A3", 2015);
// console.log(audi);

// params
// class Book {
//   name = "";
//   author = "";
//   year = 0;

//   #key = "ydaidua-31381-dasnd-222";

//   constructor(params) {
//     this.name = params.name;
//     this.author = params.author;
//     this.year = params.year;
//     this.#key = params.key;
//   }

//   getShowKey() {
//     console.log(`${this.#key} is the key`);
//   }

//   setChangeKey(newKey) {
//     this.#key = newKey;
//   }

//   getShowBook() {
//     console.log(`${this.name} is this book`); // метод класса
//   }

//   setChangeBook(newBook) {
//     this.name = newBook;
//   }

//   getShowYear() {
//     return this.year;
//   } // геттер для year

//   setChangeYear(newYear) {
//     this.year = newYear;
//   }
// }

// // Book.#hoMuchWeHave(); // error, private
// const tomSoyer = new Book({
//   name: "Tom Soyer",
//   author: "Mark Twen",
//   year: 1961,
// }); // передавать через объект
// console.log(tomSoyer);
// tomSoyer.getShowBook();
// tomSoyer.setChangeBook("new book");
// tomSoyer.setChangeKey("djajd-139193-askdoaos");
// tomSoyer.getShowKey();

// const it = new Book({ name: "IT", author: "Stiven King", year: 2010 });
// it.setChangeYear(2013);
// console.log(it.getShowYear());
// console.log(it);

/// new class with get && set

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }

//   // static
//   static myKey = "dyaid-3113-fjaia-222"
// };

// // get set

// const audi = new Car ({brand: "Audi", model: "A3", price: 8000});
// console.log(audi.model); // get
// audi.model = "Q4"; // set
// console.log(audi);

// // static
// console.log(Car.myKey);
// console.log(audi.myKey); // undefined

// TASK

// class Car {
//     static maxPrice = 50000;
//     #price;

//     constructor(params) {
//       this.#price = params.price;
//     }

//     get price() {
//       return this.#price;
//     }

//     set price(newPrice) {
//       if(newPrice <= Car.maxPrice){ // static
//         this.#price = newPrice;
//       } else {return}
//     }
//   }

//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000

//   audi.price = 49000;
//   console.log(audi.price); // 49000

//   audi.price = 51000;
//   console.log(audi.price); // 49000

// TASK
// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if(price > Car.#maxPrice) {
//         return "Error! Price exceeds the maximum";
//     } else {return "Success! Price is within acceptable limits"}
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// extends Наследование
// class Enemy {
//     health = 100;
//     damage = 0;
//     speed = 100;

//     constructor (params) {

//         this.health = params.health;
//         this.damage = params.damage;
//         this.speed = params.speed;
//     }
// }

// const orc = new Enemy ({health: 20, damage: 5, speed:1});
// console.log(orc);

// TASK

// class User  {
//     #email;

//     constructor (email) {
//         this.#email = email;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// class newUser extends User {
//     constructor(params) {
//         super(params.email);
//         this.posts = params.posts;
//     }
// }

// const olllo = new newUser({
//     email: "ollolo@gmail.com",
//     posts: [1, 5, 12],
// })

// console.log(olllo.posts);

// TASK

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

// TASK

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   access;

//   constructor(params) {
//     super(params.email)
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// TASK

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }

//   blacklistedEmails = [];

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// TASK

// class Blogger {
//     name = '';
//     age = 0;
//     numberOfPosts = 0;
//     topics = [];

//     constructor(params) {
//         this.name = params.name;
//         this.age = params.age;
//         this.numberOfPosts = params.numberOfPosts;
//         this.topics = params.topics;
//     }

//     getInfo() {
//         return `Bloger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }

//     updatePostCount(count) {
//         return this.numberOfPosts += count;
//     }
// }

// const mango = new Blogger ({
//     name: "mango@mail.com",
//     age: 24,
//     numberOfPosts: 20,
//     topics: ["tech", "cooking"],
// });

// const poly = new Blogger ({
//     name: "poly@mail.com",
//     age: 19,
//     numberOfPosts: 17,
//     topics: ["sports", "gaming"],
// });

// console.log(mango.getInfo());
// console.log(mango.updatePostCount(5));
// console.log(mango.getInfo());

// console.log(poly.getInfo());
// console.log(poly.updatePostCount(8));
// console.log(poly.getInfo());

// TASK

// class User {
//     #login;
//     #email;

//     constructor(params) {
//         this.#email = params.email;
//         this.#login = params.login;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new User ({
//     login: "Mango",
//     email: "mango@gmail.com",
// });

// console.log(mango.login);
// mango.login = "mangoDOPING";
// console.log(mango.login);

// TASK

// class Storage {
//   items = [];

//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//    this.items = this.items.filter((prod) => {return prod !== item});
//   }
// }

// const storage = new Storage(["banana", "apple", "lemon"]);

// console.log(storage.getItems());


// storage.addItem("watermelon");
// console.log(storage.getItems());

// storage.removeItem("banana");

// console.log(storage.getItems());




