////////////////////////////////////////////////////// LESSON 1 /////////////////////////////////////////////////////////////////////////

// const username = "jatyx";
// console.log(typeof username);

// let age;
// age = 20;
// console.log(age);

// console.log(Number("22.7px")); // NaN - not a number

// const isDead = false;
// console.log(typeof isDead);

// const calls = 5;
// const missedCalls = `You missed ${calls} calls`;
// console.log(missedCalls);  -> Шаблонные рядки

// console.log("500" === 500); - Оператор строгой равности

// console.log("2" > "12"); // true (Unicode);

// console.log("11" > "12"); // true;
// console.log("11".charCodeAt());  - функция для распознавания числа под которым символ

// const element = "13.7px";
// console.log(Number.parseInt(element)); // перетворуэ у ціле число до першого недопустимого символа
// console.log(Number.parseFloat(element)); // перетворую у число з комою

// Class Math.
// const value = "13.9";
// console.log(Math.round(value)); // - округлення до цілого целого числа
// console.log(Math.ceil(value)); // округлення до бильшего целого числа
// console.log(Math.floor(value)); // округлення до меньшого целого числа

// Function

// function showMeName(name, surname) {
//     const fullName = `${name} + ${surname}`;
//     console.log(fullName);
// }

// showMeName("max", "jaty")

// оператор return
// function sum(a, b) {
//     return (a + b) / 3;
// }

// console.log(sum(2, 4));

////////////////////////////////////// LESSON 2 //////////////////////////////////////////

// ** if - условие **

// if(true){
//     console.log("done");
// }

// ** if ... else **

// const massage = "Hi";
// if (massage === "Hi"){
//     console.log("true");
// } else {console.log("false");}

//  /** else if **

// const role = "junior";

// if (role === "senior"){
//     return "Your lvl is high"
// } else if(role === "middle"){
//     return "Your lvl is middle"
// } else {
//     return "You are junior"
// }

// ** ? **

// const drugAddicted = false;

// const rehabMonster = drugAddicted === false ? console.log("you are cool") : console.log("comeToRehab"); // Тернарный оператор

// const daysTillDeadline = 5;

// if (daysTillDeadline === 0){
//     console.log("Today");
// } else if(daysTillDeadline === 1){
//     console.log("Tomorrow");
// } else if(daysTillDeadline === 2){
//     console.log("Over");
// } else {
//     console.log("date in the future");
// }

// *** SWITCH *** --- короткий запис if ... else, если много условий

// const color = "brown";

// switch(color){
//     case "yellow": console.log("No, its yellow");
//     break;
//     case "red": console.log("YES, its red");
//     break;
//     case "green": console.log("No, its green");
//     break;
//     default: console.log("Its another color or smthing special");
//     break;
// }

// task
// 1 - samoviviz 2 - cour 3 - post
// const option = 4;
// let massage = '';

// switch(option){
//     case 1: massage = 'vi zmoz';
//     break;
//     case 2: massage = 'cour';
//     break;
//     case 3: massage = 'vidpr sog';
//     break;
//     default: massage = 'manager';
//     break;
// }

// console.log(massage);

// **** Logic operatot && *******

// const color = "red";
// const background = "light";
// const name = "Max"

// if (color === "red" && background === "light" && name === "Max"){
//     console.log("DONE");
// } else {
//     console.log("No");
// }

// *** LOGIC || *****

// const color = "red";
// const background = "light";
// const name = "Max";

// if (color === "black" || name === "" || background === "dark") {
//     console.log("ABO");
// } else console.log("ne");

// *** LOGIC ! ***

// const isAdmin = true;

// if(!isAdmin){
//     console.log("not admin");
// } else {
//     console.log("Hi^ admin");
// }

// console.log(!NaN);

// function toggleModalVisibility(isVisible) {
//     if(!isVisible) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// TASK
// const sub = "pro";

// if(sub === "vip" || sub === "pro"){
//     console.log("Here is your sub");
// } else if(sub === "free") {
//     console.log("No way");
// }

// TASK
// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// let canOpenChat;

// if (isOnline === true && isFriend === true && isDnd) {
//   canOpenChat = console.log("You can open chat");
// } else {
//   console.log("You cant open chat");
// }

// ******методи рядков

// const string = "Yeh its string   ";

// console.log(string.slice(0, 4));

// console.log(string.toLowerCase() , string.toUpperCase());

// console.log(string.includes("q"));

// console.log(string.startsWith("Yeh") , string.endsWith("ing"));

// console.log(string.indexOf("r"));

// console.log(string.trim());

// TASK
// let link = "https://github.com";

// const linkEndsWith = link.endsWith("/");

// if(!linkEndsWith){
//     link += "/";
// }

// console.log(link);

// TASK
// let url = "https://github.com/jjjjwrk";

// const endWithSlash = url.endsWith("/");

// if(!endWithSlash && url.includes("my-site")) {
//   url += "/";
// }

// console.log(url);

// TASK
// const spam = "spam";
// const sale = "sale";

// const string1 = " HELLO IM PRINCE OF PERSIA I WANNA YOUR KINGDOM ";
// const string2 = " HELLO I OFFER YOU A SALE, ITS NOT a sPaM";

// const string1LowerCase = string1.toLowerCase();
// const string2LowerCase = string2.toLowerCase();

// if (string1LowerCase.includes(spam) || string1LowerCase.includes(sale)){
//     console.log("Its spam link 1");
// }

// if (string2LowerCase.includes(spam) || string2LowerCase.includes(sale)){
//     console.log("Its spam link 2");
// }

// function calculateTotal(number) {
//     let sum = 0;
//     for(let i = 0; i <= number; i += 1) {
//       sum += i;
//     }
//     return sum;
//   }

// console.log(calculateTotal(18));

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(calculateEvenTotal(7));

// const start = 6;
// const end = 17;
// let number;

// for(let number = 0; number < end; number++){
//     if(number % 5 === 0 && number > start){
//       console.log(number);
//       break;
//     }
//   }

//////////************************************************* LESSON 3  ***********************************************/
// МАСИВИ
// const family = ["Max", "Greg", "Anton", "Misha", "Nastya"];
// console.log(family[0]); // значение первого элемента масива
// family[0] = "Jupiter";  // Переопределение
// console.table(family); // удобная вещь показать масив в консоле
// console.log(family.length); // колво элементов масива
// console.log(family.length - 1); // индекс последнего элемента

// TASK
// function getLastElementMeta(array) {
//     const lastElement = array.length - 1;
//     const newArray = [array.length - 1, array[lastElement]];
//     return newArray;
//   };

//   console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// TASK
// function getExtremeElements(array) {
//     const firstElement = array[0];
//     const lastElement = array.length - 1;
//     const newArray = [firstElement, array[lastElement]];
//     return newArray;
// }
//   console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//   console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
//   console.log(getExtremeElements([1, 2, 3, 4, 5]));

// Примитивні типи данних під час присвоєння копіюються за значенням.

// let x = 10;
// let y = 20;

// function add(x, y){
//     x = 200;
//     return x + y;
// };
// console.log(add(x,y)); // 220
// console.log(x); // 10 - не поменялся, независимо от функции

// Складні типи данних (масив) копіюються за посиланням

// const numbers = [];
// const names = [];
// console.log(numbers === names); // false, бо це дві окремі ячейки в памяті та два окремих посилання

// const newNames = ["max", "july", "poly"];
// const anotherNames = newNames;
// console.log(anotherNames === newNames); // true, бо це посилання на одну ячейку в памяті, тобто до newNames;

// const numbers = [1, 2, 3, 4];
// const newNumbers = [1, 2, 3, 4];
// console.log(numbers === newNumbers); // false, бо це посилання на різні ячейки

// Приведення до типив данных
// const array = [1, true, "Else"];
// const arrayToString = String(array);
// console.log(String(arrayToString));

// METHDS OF ARRAY
// const array = ["HTML", "CSS", "JS", "REACT"];
// console.log(array.join("")); -> join()

// TASK
// function getLength(array) {
//     const joinArray = array.join("");
//     return joinArray.length;
//   }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));

// const string = "HTML,CSS,JS,REACT";
// console.log(string.split("")); -> split()

// const stringwWIthProb = "HTML-CSS JS REACT";
// console.log(stringwWIthProb.split(" ")); -> split()

// TASK
// function calculateEngravingPrice(message, pricePerWord) {
//     const messageSplit = message.split(" ");
//     const arrayLength = messageSplit.length;
//     console.log(arrayLength);
//     return arrayLength * pricePerWord;
//   }

//   console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// const array = [1, 2, 3, 4, 5];
// console.log(array.slice(0, 2));

// const array1 = ["Mars", "Jupiter", "Saturn", "Earth"];
// const array2 = ["Galactic", "Milky Way", "Goblins"];

// console.log(array1.concat(array2)); -> concat();

// const newArray = ["Job", "FreeWork", "Freelance", "Studing"];
// console.log(newArray.indexOf("Freelance")); -> indexOf();
// console.log(newArray.indexOf("havingRest")); -> indexOf();

// TASK
// function getSlice(array, value) {
//   const indexOfArraysEl = array.indexOf(value);
//   if (indexOfArraysEl !== -1) {
//     return array.slice(0, array.indexOf(value)).concat(value);
//   } else {
//     return [];
//   }
// }

// console.log(getSlice(["Mango", "Poly"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));

// const array = ["lol", "kek", "ahaha"];
// array.push("azaza");
// console.log(array); -> push();

// TASK
// function createArrayOfNumbers(min, max) {
//     let array = [];
//     for(let i = min; i <= max; i++){
//       array.push(i);
//     }
//     return array;
//   }

// console.log(createArrayOfNumbers(1, 3));

// const array = ["Poly", "love", "jatyx"];
// array.pop(); -> pop();
// console.log(array);

// FOR для масиву

// const array = ["lol", "shrek", "xd", "axaxa"];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// };

// TASK
// function calculateTotalPrice(order) {
//     let sum = 0;
//     for(let i = 0; i < order.length; i++){
//         sum += order[i];
//     }
//     return sum;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));

// МЕтод includes();

// const array = ["lol", "shrek", "xd", "axaxa"];

// console.log(array.includes("lol")); -> true;
// console.log(array.includes("2")); -> false;

// TASK
// function getCommonElements(array1, array2) {
//   let resultArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     if(array2.includes(array1[i])){
//         resultArray.push(array1[i])
//     }
//   }
//   return resultArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// ЦИКЛ for ... of для перебору кожного элемента масиву

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets){
//     console.log(planet);
// }

// TASK
// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (const number of order) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([164, 48, 291]));

// TASK
// const nums = [1, 2, 5, 8, 10, 14, 15, 24];

// let lotal = 0;

// function sum(nums) {
//   let resultArray = [];
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0){
//         resultArray.push(nums[i]);
//     }
//   }
//     return resultArray;
//   }

// console.log(sum(nums));

// TASK
// const names = "Wiliam, Max, Oleh, Poly";
// const phones = "11111, 22222, 33333, 44444";

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');

// console.log(namesArray[0], phonesArray[0]);

// TASK

// const str = "aaaaa             eeee aaddadas dasfsxca apdpaspdpa          pppppp";
// const strArray = str.split(' ');
// const newArray = strArray.slice(1, strArray.length - 1);
// const result = newArray.join(' ').trim();
// console.log(result);

// TASK
// const values = [10, 6, 8];
// let min = values[0];

// for (const value of values) {
//     if (min > value){
//         min = value;
//     }
// }
// console.log(min);

// function name(a, b, c) {
//     console.log(arguments);
//     const array = Array.from(arguments); -> создать масив из псевдомасива;
//     console.log(array);
// };
// name(1, 2, 3);

// Параметры по умолчанию
// function getName (name = "Guest") {
//     console.log(`Hello, ${name}`);
// };
// getName(); -> Hello, Guest;
// getName("Max"); -> Hello, Max;

// function count (from, to, step = 1) {
//     console.log(`from: ${from}, to: ${to}, step: ${step}`);
//   }

//   count(1, 15, 4); // "from: 1, to: 15, step: 4"
//   count(1, 15); // "from: 1, to: 15, step: 1

// function expression
// const functionA = function hello () {
//     console.log(hello);
// };

// functionA();
// Функция в переменной

// sayHello();
// sayHello2();

// function sayHello () {
//     console.log('hello');
// }

// let sayHello2 = function () {
//     console.log("hello2");
// }

// TASK
// const add = function () {
//     let sum = 0;
//     for (const number of arguments){
//         sum += number;
//     }
//     return sum;
// };

// console.log(add(4, 6, 8));

// const add = function () {
//     let sum = 0;
//     const array = Array.from(arguments);
//     for (let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }

// console.log(add(5, 4, 10));

// TASK

// function middleNumber() {
//     let result = 0;
//     let sum = 0;
//     const array = Array.from(arguments);
//     for (let i = 0; i < array.length; i++){
//         sum += array[i];
//         result = sum / array.length;
//     }
//     return result;
// }

// console.log(middleNumber(1, 2, 3, 4));

// TASK

// function logItems(items) {
//     for (let i = 0; i < items.length; i++){
//         console.log(`${i + 1} - ${items[i]}`);
//     }
// }

// logItems(["mango", "poly"]);
// logItems([1, 2, 5, 7]);

// TASK
// function printInfo(names, phones){
//    const nameArray = names.split(", ");
//    const phonesArray = phones.split(", ");
//    for(let i = 0; i < nameArray.length; i++){
//     console.log(`${nameArray[i]} phone number is ${phonesArray[i]}`);
//    }
// };

// printInfo('Jacob, William, Max, Jack', "1111, 2222, 3333, 444");

// TASK
// function formatTime(minutes){
// const hours = Math.floor(minutes / 60);
// const mins = minutes % 60;
// return `${hours} - hours; ${mins} - minutes`;
// };

// console.log(formatTime(70));
// console.log(formatTime(120));
// console.log(formatTime(230));

//////////************************************************* LESSON 4  ***********************************************/
// OBJECTS

// const book = {
//     title: "Harry Potter",
//     author: "J Rollings",
//     rating: 10,
//     price: "500 grn",
// }
// console.log(book);
// console.log(book.title);
// console.log(book.rating);

// const car = {
//     model: "Audi TT",
//     price: 8000,
//     value: "USD",
//     yearOfRelease: 2012,
//     anotherModel: {
//         newModel: "Audi A4",
//         price: 5000,
//         value: "USD"
//     },
//     drivingTest: function(){
//         console.log("Audi TT drives");
//     },
//     engine: ["good", "new", "powerful"],
// };

// car.drivingTest();
// console.log(car.anotherModel.price);
// console.log(car.engine[0]);

// const car2 = car;
// car2.anotherModel.newModel = "Audi A3";
// console.log(car2);
// console.log(car.anotherModel);

// const whatModel = "model";
// console.log(car[whatModel]); -> доступ за квадратними дужками

// const whatEngine = "engine";
// console.log(car2[whatEngine]); -> доступ за квадратними дужками

// const userColor = "#9310381";
// const userColorValue = "green";

// const color = {
//     "red": "#8831309",
//     "white": "#o13eqw",
//     "yellow": "#8319847",
//     [userColor]: userColorValue,
// }

// console.log(color["red"]);
// console.log(color[userColor]); -> userColorValue -> green

// for ... in objects (ПЕРЕБОР ОБЕКТОВ)
// const values = {
//     value1: 10,
//     value2: 20,
//     value3: 45,
//     value4: 120,
// }

// for(const key in values){
//     console.log(key);
//     console.log(values[key]);
// }

// Object.keys()

// const values = {
//     value1: 10,
//     value2: 20,
//     value3: 45,
//     value4: 120,
// }

// const keys = Object.keys(values); -> це будэ масив
// // console.log(keys);

// for(const key of keys){
//     console.log(key);
//     console.log(values[key]);
// }

// Object.values()

// const values = {
//   value1: 10,
//   value2: 20,
//   value3: 45,
//   value4: 120,
// };

// const valuesOfObject = Object.values(values);
// // console.log(valuesOfObject);
// for (const value of valuesOfObject) {
//   console.log(value);
// }

// TASK
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for(const key of keys){
//     values.push(apartment[key]);
// }

// TASK
// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//    for(const key of keys){
//     if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//    }
//   return propCount;
// }

// console.log(countProps({
//     value1: 10,
//     value2: 20,
//     value3: 45,
//     value4: 120,
//   }));

// TASK

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salariesValue = Object.values(salaries);
//   for(const value of salariesValue){
//     totalSalary += value;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// TASK
// const user = {
//   name: "Mango",
//   age: 25,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydrive";
// user.premium = false;
// const keys = Object.keys(user);

// for(const key of keys){
//     console.log(`${key} : ${user[key]}`);
// }

// TASK
// const salaries = {
//     JohnCena: 120,
//     TheMiz: 140,
//     CMPunk: 500,
// }

// let sum = 0;
// const salariesValues = Object.values(salaries);
// for(let i = 0; i < salariesValues.length; i++){
//     sum += salariesValues[i];
// }
// console.log(sum);

// TASK

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for(const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// TASK

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//     return (product.price);
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Scanner"));

// TASK
// const friends = [
//   {
//     id: 1,
//     name: "Max",
//     age: 23,
//     country: "Ukraine",
//     online: true,
//   },
//   {
//     id: 2,
//     name: "Polya",
//     age: 20,
//     country: "France",
//     online: false,
//   },
//   {
//     id: 3,
//     name: "Misha",
//     age: 12,
//     country: "Ukraine",
//     online: false,
//   },
//   {
//     id: 4,
//     name: "Greg",
//     age: 12,
//     country: "Ukraine",
//     online: true,
//   },
// ];

// const friendsNames = [];
// for (const friend of friends) {
//   friendsNames.push(friend.name);
// }
// console.log(friendsNames);

// const friendsOnline = [];

// for(const friend of friends){
//     if(friend.online === true){
//         friendsOnline.push(friend.name);
//     }
// }
// console.log(friendsOnline);

// TASK

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const resultArray = [];
//   for(const product of products){
//     for(const key in product){
//         if(key === propName){
//             resultArray.push(product[key]);
//         }
//     }
//   }
//   return resultArray;
// }

// console.log(getAllPropValues("quantity"));

// TASK

// const stones = [
//     {
//         name: "Saph", price: 2000, id:1,
//     },
//     {
//         name: "Efir", price: 2500, id:2,
//     },
//     {
//         name: "Almaz", price: 3000, id:3,
//     }
// ];

// function calculateTotal (stones, stoneName){
//     let totalPrice = 0;
//     for(const stone of stones){
//         for(const key in stone){
//             if(stone[key] === stone.price){
//                 totalPrice += stone.price;
//             }
//         }
//     }
//     return totalPrice;
// }

// console.log(calculateTotal(stones, "Saph"));

// TASK

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let totalPrice = 0;
//   for(const product of products){
//     if(product.name === productName){
//        return totalPrice = product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`
// }

// console.log(calculateTotalPrice("Scanner"));

///// METHODS OF OBJECT

// const atTheOldToad = {
//   potionName: "evil potion",
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotions(potionName) {
//     return `Adding ${potionName}`;
//   },
//   showPotion() {
//     console.log(this.potionName);
//   },
// };

// console.log(atTheOldToad.addPotions("XD"));
// atTheOldToad.showPotion();

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

// TASK
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for(const potion of this.potions){
//         totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };
// console.log(atTheOldToad.getTotalPrice());

// TASK
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for(const potion of this.potions){
//             if(potion.name === oldName){
//                 potion.name = newName;
//             }
//         }
//     },
//   };

//   atTheOldToad.updatePotionName("Stone skin", "Invisibility");
//   atTheOldToad.updatePotionName("Speed potion", "Polymorth");

//   console.log(atTheOldToad);

/////// SPREAD , REST (...)

//TASK
// function add (...args){
//     let sum = 0;
//     for(const arg of args){
//         sum += arg;
//     }
//     return sum;
// };

// console.log(add(10, 7));

//task
// function addOverNum(value, ...args) {
//     let sum = 0;
//     for(const agr of args){
//         if(agr > value){
//             sum += agr;
//         }
//     }
//     return sum;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// TASK

// function getExtremeScores(scores) {
//     let result = {};
//     const minNum = Math.min(...scores);
//     const maxNum = Math.max(...scores);
//     result.best = maxNum;
//     result.worst = minNum;
//     return result;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// TASK

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores]; -> spread
// const bestScore = Math.max(...allScores); -> rest
// const worstScore = Math.min(...allScores); -> rest

// TASK

// const transaction = {
//   deposit: "dep",
//   withdraw: "withdraw",
// };

// const account = {
//   balance: 0,
//   transactions: [], // {id: string, amount: number, type: "dep" || "withdraw" }

//   createTransaction(amount, type) {
//     const Transaction = {
//       id: (this.transactions.length + 1).toString(),
//       amount,
//       type,
//     };
//     return Transaction;
//   },

//   deposit (amount) {
//     this.balance += amount;
//     const depositTransaction = this.createTransaction(amount, transaction.deposit);
//     this.transactions.push(depositTransaction);
//   },

//   withdraw (amount) {
//     if(amount > this.balance){
//         console.error("You dont have enough money");
//         return;
//     }
//     this.balance -= amount;
//     const withdrawTransaction = this.createTransaction(amount, transaction.withdraw);
//     this.transactions.push(withdrawTransaction);
//   },

//   showBalance () {
//     return this.balance;
//   },

//   getTransactionId(id) {
//     for(const transaction of this.transactions){
//         if(transaction.id === id){
//             console.log(transaction);
//             return transaction;
//         }
//     }
//     console.warn(`No transaction by this "${id}" id`);
//   },

//   getTransactionTotal (type) {
//     let totalAmount = 0;
//     for(const transaction of this.transactions) {
//         if(transaction.type === type){
//             totalAmount += transaction.amount;
//         }
//     };
//     return totalAmount;
//   }

// };

// account.deposit(1000);
// account.deposit(1000);
// account.withdraw(500);
// account.withdraw(500);
// console.log(account);
// account.getTransactionId('7');
// account.getTransactionId('1');
// console.log(account.getTransactionTotal(transaction.withdraw));

// const newTransaction = account.createTransaction(1000, transaction.deposit);
// console.log(newTransaction);

////////////////////////// LESSON 5
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
// const account = {
//     name: "max",
//     status: "VIP",
// }

// function checkStatus (account, callback){
//     const status = account.status.toLowerCase();
//     if(status === "vip") {
//         callback();
//     } else {
//         console.log("SORRY, you are broke");
//     }
// };

// function VIPstatus () {
//     console.log(`${account.name},VIP STATUS ON`);
// };

// checkStatus(account, VIPstatus);

// TASK

// function betterThanAverage(classPoints, yourPoints) {
//   let total = 0;
//   let avagange = 0;
//   for (let i = 0; i < classPoints.length; i++) {
//     total += classPoints[i];
//     avagange = total / classPoints.length;
//   }
//   if(yourPoints > avagange){
//     console.log(true);
//   } else{console.log(false)};
// }

// betterThanAverage([2, 3], 5);
// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)
// betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)
// betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)
// betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21);

// TASK

// const numbers = [5, 10, 15, 20, 25];
// let total = 0

// const sum = numbers.forEach((number) => total += number);
// console.log(total);

// reduce ()

// const array = [2, 6, 10, 9];
// const sumArray = array.reduce((acc, number) => {
//     console.log(acc);
//     return acc + number;
// }, 0);
// console.log(sumArray);

// TASK

// const salaryList = {
//     mango: 200,
//     ajax: 100,
//     max: 420,
// };

// const salaryTotal = Object.values(salaryList).reduce((acc, number) => {
//     return acc + number;
// }, 0);
// console.log(salaryTotal);

// TASK

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, number) => {
//     return acc + number;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// TASK

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const total = students.reduce((acc, student) => {
//  return acc + student.score;
// },0);
// console.log(total / students.length);

// TASK

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//     let result = player.playtime / player.gamesPlayed;
//     return acc + result;
// }, 0);

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

// const calculateTotalBalance = (users) => {
//     return users.reduce((acc, user) => {
//         return acc + user.balance;
//     }, 0)
// };

// console.log(calculateTotalBalance(array));

// TASK
// const cart = [
//     { name:"apple", price: 100, quantity: 4, },
//     { name:"banana", price: 150, quantity: 2, },
//     { name:"applePie", price: 300, quantity: 1, },
// ];

// const totalPrice = cart.reduce((acc, fruit) => {
//     let result = fruit.price * fruit.quantity;
//     return acc + result;
// }, 0)

// console.log(totalPrice);

/// toSorted()

// TASK

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = authors.toSorted();
// console.log(alphabeticalAuthors);

// TASK

// const releaseDates = [1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => {return a - b});
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => {return b - a});
// console.log(descendingReleaseDates);

// TASK

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => { return a.localeCompare(b)});

// const authorsInReversedOrder = authors.toSorted((a, b) => { return b.localeCompare(a)});

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
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) => {
//     return a.author.localeCompare(b.author);
// });

// const sortedByReversedAuthorName = books.toSorted((a, b) => {
//     return b.author.localeCompare(a.author);
// });

// const sortedByAscendingRating = books.toSorted((a, b) => {
//     return a.rating - b.rating;
// });
// const sortedByDescentingRating = books.toSorted((a, b) => {
//     return b.rating - a.rating;
// });

// TASK

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const result = students.toSorted((a, b) => {
//     return a.score - b.score;
// }).map((student) => {
//     return student.name;
// })
// console.log(result);

// const uniqueSortedCourses = students.flatMap(student => student.courses).filter((course, i, array) => {
//     return array.indexOf(course) === i;}).toSorted((a, b) => {
//         return a.localeCompare(b);
//     });
//     console.log(uniqueSortedCourses);

/// TASK

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
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter((book) => {
//     return book.rating > MIN_BOOK_RATING;
// }).map((book) => {return book.author}).toSorted((a, b) => {
//     return a.localeCompare(b);
// })
// console.log(names);

//task

// const array = [0, 10, 5, 7, 88, 104];
// const result = array.sort((a, b) => {
//     return a - b;
// })
// const result1 = result.slice(1, result.length - 1)
// console.log(result1);

// TASK

// const array = [ 2, 4, 10];

// const result = array.reduce((acc, number) => {
//     return acc * number;
// });

// console.log(result);

// TASK

// const str = "Max dua as ty dhaisandoais hasda duahqh";

// const strArray = str.split(" ");
// console.log(strArray);
// let min = strArray[0];
// for(const word of strArray) {
//     if(min.length > word.length) {
//         min = word;
//     }
// }

// console.log(min);

// TASK

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// const positiveNumbs = array.filter((number) => {return number >= 0});
// const negatibeNumbs = array.filter((number) => {return number <= 0});
// const result = [];
// result.push(positiveNumbs.length);
// let sumOfNegative = 0;
// for(const number of negatibeNumbs) {
//     sumOfNegative += number;
// }
// result.push(sumOfNegative);
// console.log(result);

// TASK
// const str = "Sam Harris";
// let final = "";

// const result = str
//   .split(" ")
//   .map((name) => {
//     return (final = name[0]);
//   })
//   .join(".");

// console.log(result);

// function abbrevName(name){
// let final = '';
//     // code away
// const result = name.split(" ").map((word) => {return final = word[0]}).join(".");
// return result.toUpperCase( );
// }

// console.log(abbrevName("p Favuzzi"));

// let sum = 0;
// for(const number of array) {
//     sum += number;
//     if(sum % 2 === 0) {
//         return "odd";
//     } else if (sum % 2 !== 0) {
//         return "even";
//     } else {return 0}
// }

// TASK
// function oddOrEven(array) {
//     let sum = 0;
//     for(const number of array) {
//         sum += number;
//     }
//     if(sum % 2 === 0){
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// console.log(oddOrEven([1,2]));

// TASK

// function XO(str) {
//   //code here
//   const lowerCaseStr = str.toLowerCase();
//   let o = [];
//   let x = [];
//   const array = lowerCaseStr.split("");
//   for (const letter of array) {
//     if (letter === "o") {
//       o.push(letter);
//     } else if (letter === "x") {
//       x.push(letter);
//     }
//   }
//   if (o.length === x.length) {
//     return true;
//   } else if (o.length !== x.length) {
//     return false;
//   } else { return true;
//   }
// }

// console.log(XO("asdas"));

// const obj = {
//     name: "Max",
//     isHuman: true,
// };

// const animal = Object.create(obj);
// animal.name = "Dog";
// animal.isHuman = false;
// animal.type = "home doggy";
// console.log(animal);
// console.log(obj.isPrototypeOf(animal));

// for(const key in animal) {
//     if(animal.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// for(const key of Object.values(animal)){
//     console.log(key);
// }

// TASK

// rock, scissors, paper

// rock -> scissors
// scissors -> paper;
// paper -> rock

// const rps = (p1, p2) => {
//   if (p1 === "rock" && p2 === "scissors") {
//     console.log("p1 win");
//   } else if (p1 === "scissors" && p2 === "rock") {
//     console.log("p2 wins");
//   } else if (p1 === "scissors" && p2 === "paper") {
//     console.log("p1 win");
//   } else if (p1 === "paper" && p2 === "scissors") {
//     console.log("p2 wins");
//   } else if (p1 === "paper" && p2 === "rock") {
//     console.log("p1 win");
//   } else if (p1 === "rock" && p2 === "paper") {
//     console.log("p2 wins");
//   } else {
//     console.log("draw");
//     return "draw";
//   }
// };

// rps("rock", "paper")

// TASk
// function areYouPlayingBanjo(name) {
//   // Implement me
//   if(name[0] === "R" || name[0] === "r"){
//     return `${name} plays banjo`;
//   } else {return `${name} does not play banjo`}
// }

// TASK

// function makeNegative(num) {
//     // Code?
//     return -num;
//   }
// console.log(makeNegative(9));

//TASK

// const str = "The quick brown fox jumps over the lazy dog.";

// function reverse (str) {
//    const array = str.split(" ").reverse().join(" ");
//    console.log(array);

// }
// reverse(str);

// TASK
// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }

// console.log(
//   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// );

// TASK

// const array = [1, 2, 3];

// function maps(x){
//    return x.map((number) => {return number * 2});
// }

// console.log(maps(array));

// TASK
// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }

// TASK
// function enough(cap, on, wait) {
//   // your code here
//   if (on + wait < cap) {
//     return 0;
//   } else {
//     return on - wait;
//   }
// }

// console.log(enough(55, 49, 40))

// TASK

// function squareSum(numbers){
//     const array = numbers.map((number) => {return number**2});
//     let result = 0;
//     for(const number of array) {
//         result += number;
//     }
//     return result;
// }

// console.log(squareSum([0, 3, 4, 5]));

// TASK

// function numberToString(num) {
//   // Return a string of the number here!
//   return num.toString();
// }

// console.log(numberToString(-110));
// console.log(-110);

// TASK

// function isTriangle(a, b, c) {
//     if(a === 0 || b === 0 || c === 0 || a + b < c || a + c < b || b + c < a || a + b === c || a + c === b || b + c === a){
//         return false;
//     } else {return true};
// }
// console.log(isTriangle(1,2,2));
// console.log(isTriangle(7,2,2));
// console.log(isTriangle(6,1,5));

// TASK

// function firstNonConsecutive (arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i + 1] - arr[i] !== 1 ) {
//             return arr[i]
//         }
//     }
//     return null;
// }

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
// console.log(firstNonConsecutive([2,3,5,7,8,9,10,11]));

// TASK
// 1-2 && 12 - 1; 3-5 - 2; 6-8 - 3; 9-11 - 4;

// const quarterOf = (month) => {
// if(month === 1 || month === 2 || month === 12) {return "winter"};
// if(month === 3 || month === 4 || month === 5) {return "spring"};
// if(month === 6 || month === 7 || month === 8) {return "summer"};
// if(month === 9 || month === 10 || month === 11) {return "autumn"};
// };

// console.log(quarterOf(4));

// TASK

// function solution(str) {
//     return str.split("").reverse().join("");
// }

// console.log(solution('world'));

/// QUESTIONS

// TASK

// const server = {
//   users: [],

//   showUsers() {
//     console.log(this.users);
//   },

// };

// const createUserOnServer = (newUser, onSuccess, onError) => {
//   if (newUser) {
//     onSuccess();
//     server.users.push(newUser);
//   } else {
//     onError();
//   }
// };

// const successUser = () => {
//   console.log("User created");
// };

// const errorCreateUser = () => {
//   console.error("Error, try ones more");
// };

// createUserOnServer(
//   { name: "Max", age: 23, id: 4 },
//   successUser,
//   errorCreateUser
// );

// server.showUsers();

// TASK

// function getAge(inputString) {
//   // return the girl's correct age as an integer. Happy coding :)
//     return Number.parseInt(inputString);
// }

// console.log(getAge("9 years old"));

// TASK

// function removeSmallest(numbers) {
//   let smallest = numbers[0];
//   for(let i = 0; i < numbers.length; i++){
//     if(smallest > numbers[i]) {
//         smallest = numbers[i];
//     }
//   }
//   return numbers.filter((num) => {return num !== smallest});
// }

// console.log(removeSmallest([5, 10, 7, 2, 1, 1000, 0]));

// TASK

// const array = [1, 5, 6, 1, 5, 7, 1, 8, 10];

// const uniqArray = array.filter((num, i) => {
//   return array.indexOf(num) === i;
// });

// console.log(uniqArray);

// TASK

// function basicOp(operation, value1, value2) {
//   //Code
//   if(operation === '+') {return value1 + value2}
//   else if(operation === '/') {return value1 / value2}
//   else if(operation === '-') {return value1 - value2}
//   else if(operation === "*") {return value1 * value2}
// }

// TASK

// const deleteById = (array, id) => {
//     return array.filter((user) => user.id !== id);
// }

// console.log(deleteById([{ name: "max", id:2 },{ name: "max", id:3 }], 2));

// TASK
// function validatePIN(pin) {
//    if(!Number(pin)) {return false}

//    if(pin.length === 4 || pin.length === 6){
//     return true;
//    } else {return false}

// };

// TASK

// function sumTwoSmallestNumbers(numbers) {
//     //Code here
//     const result = numbers.sort((a, b) => {return a - b});
//     return result[0] + result[1];
//   }

// const array = [1, 6, 12, 5, 7]

// console.log(sumTwoSmallestNumbers(array));

// TASK

// function noSpace(x) {
//   return x
//     .split("")
//     .filter((symbol) => {
//       return symbol !== " ";
//     })
//     .join("");
// }

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// TASK

// function countSheeps(sheep) {
//   // TODO
//   const result = [];
//   for (const value of sheep) {
//     if (value === true) {
//       result.push(value);
//     }
//   }
//   return result.length;
// }

// console.log(
//   countSheeps([undefined, null, false, true, true, false, null, undefined])
// );

// TASK

// function move(position, roll) {
//   // return the new position
//   return roll * 2 + position;
// }

// console.log(move(3, 6));

/// TASK

// function switchItUp(number) {
//   //Write your own Code!
//   if(number === 0) {
//     return "Zero"
//   } else if(number === 1) {
//     return "One"
//   } else if(number === 2) {
//     return "Two"
//   } else if(number === 3) {
//     return "Three"
//   } else if(number === 4) {
//     return "Four"
//   } else if(number === 5) {
//     return "Five"
//   } else if(number === 6) {
//     return "Six"
//   } else if(number === 7) {
//     return "Seven"
//   } else if(number === 8) {
//     return "Eight"
//   } else if(number === 9) {
//     return "Nine"
//   }
// }

// TASK

// function addBinary(a,b) {
//     const sum = a + b;
//     const result = sum**2;
//     return result.toString()
// }

// console.log(addBinary(5, 9));

// TASK

// function doubleChar(str) {
//   // Your code here
//     let array = str.split("");
//     let result = [];
//     for(let i = 0; i < array.length; i++){
//         result.push(array[i] + array[i]);
//     }
//     return result.join("")
// }

// console.log(doubleChar("1337"));

// TASK

// function findDifference(a, b) {
//   //loading...
//   let aResult = a.reduce((acc, el) => acc * el);
//   let bResult = b.reduce((acc, el) => acc * el);
//   if (aResult > bResult) {
//     return aResult - bResult;
//   } else if (aResult < bResult) {
//     return bResult - aResult;
//   } else {
//     return 0;
//   }
// }

// console.log(findDifference([3, 2, 5], [1, 4, 4]));
// console.log(findDifference([9, 7, 2], [5, 2, 2]));
// console.log(findDifference([15, 20, 25], [10, 30, 25]));

// TASK

// function descendingOrder(n) {
//   //...
//     const array = Array.from(String(n));
//     const result = array.toSorted((a, b) => {return b - a});
//     return result.join("")
// }

// console.log(descendingOrder(1021));
// console.log(descendingOrder(123456789));

// TASK

// function getCount(str) {
//     const array = Array.from(str);
//     let OArray = [];
//     for(const letter of array) {
//         if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
//             OArray.push(letter);
//         }
//     }
//     return OArray.length;
// }

// console.log(getCount(""));

// TASK

// function cubeChecker(volume, side) {
//     if(volume % side === 0 && volume > 0 && side > 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(cubeChecker(12, 2 ));

// TASK

// function solution(str, ending) {
//   // TODO: complete
//   if(str.endsWith(ending)) {return true}
//   else { return false}
// }

// console.log(solution('abcde', 'aa'));

//// TASK
// function longestConsec(strarr, k) {
//   // your code
//    const array = Array.from(strarr);
//    let biggest = array[0];
//    for(const word of array){
//     if(biggest.length < word.length) {
//         biggest = word;
//     }
//    }
//    return biggest + strarr[k];
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));

/// TASK

// function removeEveryOther(arr) {
//   //your code here
//     let array = Array.from(arr);
//     return array.filter((word) => {
//         return array.indexOf(word) % 2 === 0
//     })
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'dkakda', 'dakdka']));

// TASK
// function disemvowel(str) {
//     const array = str.split("");
//     const result = array.filter((letter) => {
//       return letter !== "e" && letter !== "y" && letter !== "u" && letter !== "i" && letter !== "o" && letter !== "a" && letter !== "j"
//     })
//     return result.join("")
// }

// console.log(disemvowel("This website is for winners LOL!"));

// TASK

// function stray(numbers) {
//     return numbers.filter((num) => {
//       if(numbers.indexOf(num) > 0){return num}
//     }).toString()
// }
// console.log(stray([1, 1, 2]));
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// TASK

// const uniqueInOrder = function (iterable) {
//   //your code here - remember iterable can be a string or an array
//     const array = Array.from(iterable);
//     console.log(array);
//     let result = '';

//     for(let i = 0; i < array.length; i++){
//         if(array.indexOf(array[i]) >= i){
//             result += array[i];
//         }
//     }
//     return result.split("");
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));

// TASK
// const min = function (list) {
//     let min = list[0];
//     for(let i = 0; i < list.length; i++){
//         if(min > list[i]) {
//             min = list[i];
//         }
//     }
//     return min
// };

// const max = function (list) {
//     let max = list[0];
//     for(let i = 0; i < list.length; i++){
//         if(max < list[i]) {
//             max = list[i];
//         }
//     }
//     return max
// };

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([4,6,2,1,9,63,-134,566]));

/// TASK
// function sum(numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//          sum += num;
//   }
//   return sum;
// }

// console.log(sum([0]));

/// TASK

// function digitize(n) {
//   //code here
//   return n.toString().split("").reverse().map((num) => + num);
// }

// console.log(digitize(35231));

/// TASK

// function likes(names) {
//   // TODO
//   const array = Array.from(names);
//   if (array.length === 0) {
//     return "no one likes this";
//   } else if (array.length > 3) {
//     return `${array[0]}, ${array[1]} and ${array.length - 2} others like this`;
//   } else if (array.length === 2) {
//     return `${array[0]} and ${array[1]} like this`;
//   } else if (array.length === 3) {
//     return `${array[0]}, ${array[1]} and ${array[2]} like this`;
//   } else if (array.length === 1) {
//     return `${array[0]} likes this`
//   }
// }

// // console.log(likes(['Max', 'John', 'Mark']));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "dajsjdk", "daj"]));
// console.log(likes(["Alex", "Jacob", "jdajd"]));

/// TASK

// function past(h, m, s) {
//   //#Happy Coding! ^_^
//   return h * 3600000 + m * 60000 + s * 1000;
// }

// console.log(past(1,1,1));

// TASK

// function hero(bullets, dragons) {
//   //Get Coding!
//   if (bullets / dragons >= 2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(hero(10, 5));

//// TASK
// function countBy(x, n) {
//     let array = [];
//     for(let i = x; i <= n; i++){
//         array.push(x * i)
//     }
//     return array;
// }

// console.log(countBy(1,10));

/// TASK

// function highAndLow(numbers) {
//   // ...
//   const array = numbers.split(" ");
//   let min = +array[0];
//   let max = +array[0];

//   for (const num of array) {
//     if (min > +num) {
//       min = +num;
//     }
//     if (max < +num) {
//       max = +num;
//     }
//   }
//   return `${max} ${min}`
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
// console.log(highAndLow("6666 111 31231 0"));

/// TASK

// function queueTime(customers, n) {
//   //TODO
//     const array = Array.from(customers);
//     const sum = array.reduce((acc, num) => {return acc + num}, 0);
//     return sum / n;
// }

// console.log(queueTime([2,2,3,3,4,4], 2));
// console.log(queueTime([1,2,3,4], 1));

/// TASK

// function smash(words) {
//     return Array.from(words).join(' ')
// }

// console.log(smash(["hello", "amazing", "world"]));

// function findOdd(A) {
//   //happy coding!

//     const stringArray = [];

//   const array = Array.from(A);
//   for(const num of array) {
//     if(num % 2 !== 0){
//         stringArray.push(num);
//     }
//   }
//   return stringArray.reduce((acc, num) => {return acc + num}, 0)
// }

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

/// TASK

// const fu = (array) => {
//   const numsArray = Array.from(array);
//   const resultArray = [];

//   for (let i = 0; i < numsArray.length; i++) {
//     if (i === numsArray.indexOf(numsArray[i])) {
//       resultArray.push(numsArray[i]);
//     }
//   }
//   return resultArray.reduce((acc, num) => {
//     return acc + num;
//   }, 0);
// };

// console.log(fu([1, 5, 1, 7, 2, 7, 8, 2, 1, 2]));

// TASK
// function check(a, x) {
//   // your code here
//   if (a.includes(x)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(check([1, 2, 4,], 1));

/// TASK

// function feast(beast, dish) {
//     beast = beast.toLowerCase();
//     dish = dish.toLowerCase();
//   //your function here
//   if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
//     return true;
//   } else {return false}
// }

// console.log(feast("great blue heron", "garlic naan"));

//   function gooseFilter(birds) {
//     var geese = [
//       "African",
//       "Roman Tufted",
//       "Toulouse",
//       "Pilgrim",
//       "Steinbacher",
//     ];

//     return birds.filter((word) => {return geese.includes(word)})
//   }

// console.log(
//   gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
// );

/// TASK

// function strCount(str, letter){
//     //code here
//     let result = 0;
//     const array = str.split("");
//     for(const value of array){
//         if(value === letter) {
//             result += 1
//         }
//     }
//     return result
// }

// console.log(strCount('Hello', 'l'));

/// TASK

// function minMax(arr) {
//   let result = [];
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   result.push(min, max);
//   return result
// }

// console.log(minMax([5, 5]));

/// TASK

// function twoSort(s) {
//   const array = s.sort();
//   const firstWord = array[0].split("");
//     let lastEl = firstWord[firstWord.length - 1];
//   return firstWord.filter((el) => {
//     return el !== lastEl
//   }).map((letter) => {
//     return letter + "***";
//   }).join("") + lastEl
// }

// console.log(
//   twoSort([
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// );

/// TASK
// function finalGrade(exam, projects) {
//     if(exam >= 90 && projects >= 10) {return 100} else
//     if(exam >= 75 && exam < 90 && projects >= 5 && projects < 10) {return 90} else
//     if(exam >= 50 && exam < 75 && projects >= 2 && projects < 5) {return 75} else {return 0}
// }

// console.log(finalGrade(0, 11));

/// TASK

// function rentalCarCost(d) {
//   // Your solution here
//   let totalPrice = 0;
//   if (d >= 0 && d < 3) {
//     totalPrice = 40 * d;
//   } else if (d >= 3 && d < 7) {
//     totalPrice = 40 * d - 20;
//   } else if (d >= 7) {
//     totalPrice = 40 * d - 50;
//   }
//   return totalPrice
// }

// console.log(rentalCarCost(10));

/// TASK
// function removeChar(str) {
//   //You got this!
//   return str.slice(1, length - 1);
// }

// console.log(removeChar("country"));

//// TASK

// function howMuchILoveYou(nbPetals) {
//   // your code
//   if(nbPetals > 6 && nbPetals === 7) {
//     return "I love you"
//   } else if (nbPetals > 6 && nbPetals === 8) {return "a little"}
//   else if(nbPetals > 6 && nbPetals === 9) {return "a lot"}
//   else if(nbPetals > 6 && nbPetals === 10) {return "passionately"}
//   else if(nbPetals > 6 && nbPetals === 11) {return "madly"}
//   else {return "not at all"}
// }
// console.log(howMuchILoveYou(3));

/// TASK
// function isIsogram(str) {
//     let result = true;
//   const array = str.toLowerCase().split("");
//   for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(array[i]) === i) {
//       result = true;
//     } else if(array.indexOf(array[i]) !== i){
//       result = false
//     }
//   }
//   return result
// }

// console.log(isIsogram("isIsogram"));

/// TASK

// function friend(friends) {
//   //your code here
//   return friends.filter((word) => {
//   return word.length === 4
//   })
// }

// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));

//// TASK

// function countSmileys(arr) {
//   const array = Array.from(arr);
//   return array.filter((smile) => {
//     return smile === ":)" || smile === ":D" || smile === ";)" || smile === ";D" || smile === ";-D" || smile === ";~D" || smile === ";-)" ||
//     smile === ";~)" || smile === ":-D" || smile === ":-)" || smile === ":~)" || smile === ":~D"
//   }).length
// }

// console.log(countSmileys([':D',':~)',';~D',':)']))
// console.log(countSmileys([':)',':(',':D',':O',':;']     ));
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));

/// import / export
// named import
// import { sayHi, sum } from "./practice/9localStorage.js";
// console.log(sum(1, 2), sayHi);

// // default import
// import something from "./practice/9localStorage.js";
// console.log(something);

// // all inport
// import * as allImport from "./practice/9localStorage.js"; /// весь импорт
// console.log(allImport);

// ⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀
// ⠀⠀⠀⠀⡏⢢⡁⠂⠤⣀⣀⣀⣀⣀ ⠤⠐⢈⡔⢹
// ⠀⠀⠀⠀⢿⡀⠙⠆⠀⠉⠀⠀⠀⠀⠉⠀⠰⠋⢀⡿
// ⠀⠀⠀⠀⠈⢷⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡾⠁
// ⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹
// ⣰⠊⠉⠉⠉⡇⠀⠢⣤⣄⠀⠀ ⣠⣤⠔⠀⢸
// ⠙⠓⠒⢦⠀⠱⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠎
// ⠀⠀⠀⠀⡇⠀⠀⠏⠑⠒⠀⠉⠀⠒⠊⠹
// ⡎⠉⢹⠀⠙⡶⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢦⠀⠀⡏⠉⢱
// ⢧⡈⠛⠉⠉⠀⠀⣠⠀⠀⠀⠀⠀ ⠀⠀⣄⠀⠉⠉⠋⢁⡼
// ⠀⢉⣿⠖⠚⠛⢋⢀⠀⠀⠀⠀⠀⠀⠀⡀⡙⠛⠓⠲⣿⣄
// ⠀⢸⡇⠀⠀⠀⡞⠁⠈⡃⠀⠀⠀⠀⢘⠁⠈⢳⠀⠀⠀⢸⡇
// ⠀⠈⢷⣄⠀⠀⠙⠦⠌⠑⠢⠤⠔⠊⠁⢠⠎⠀⠀⣠⡾⠁
// ⠀⠀⠀⠈⠛⠲⠤⣤⣀⣀⣀⣀⣠⣤⣚⣡⠤⠖⠛⠁

/// TASK

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // TODO
//   if (distanceToPump / mpg >= fuelLeft) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(zeroFuel(50, 25, 2));

// TASK

// function sumStr(a, b) {
//     return (+a + +b).toString();
// }

// console.log(sumStr("4","5"));

// TASK

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   // your code here
//   const twiceOldSon = sonYearsOld * 2;
//   if(twiceOldSon - dadYearsOld <= 0) {
//     return (twiceOldSon - dadYearsOld) * -1;
//   } else {return twiceOldSon - dadYearsOld}
// }

// console.log(twiceAsOld(51,19))

//// TASK COUNTER

// const counterValueText = document.querySelector(".couneter-value");
// const plusBtn = document.querySelector(".counterPlus");
// const minusBtn = document.querySelector(".counterMinus");
// let value = 0;

// plusBtn.addEventListener("click", () => {
//     value += 1;
//     counterValueText.textContent = value;
// });

// minusBtn.addEventListener("click", () => {
//     value -= 1;
//     counterValueText.textContent = value;
// });

/// TASK
// function getMiddle(s) {
//   //Code goes here!
//     const array = Array.from(s);
//     if(array.length % 2 === 0) {
//         return [array[array.length / 2 - 1], array[array.length / 2]].join("")
//     } else if(array.length % 2 !== 0) {
//         return array[(array.length - 1) / 2]
//     }
// }

// console.log(getMiddle("test"));

//// TASK

// function getDivisorsCnt(n) {
//   // todo
//   const result = [];
//   for(let i = 1; i <= n; i++) {
//     if(n % i === 0) {
//         result.push(i)
//     }
//   }
//   return result.length
// }

// console.log(getDivisorsCnt(11));

/// TASK

// function bmi(weight, height) {
//   const bmi = weight / height **2;
//   if(bmi <= 18.5) {return "Underweight"} else
//   if(bmi <= 25.0 && bmi > 18.5) {return "Normal"} else
//   if(bmi <= 30.0 && bmi > 25.0) {return "Overweight"} else
//   if(bmi > 30) {return "Obese"}
// }

// console.log(bmi(100, 1.80));

/// TASK
// const areaOrPerimeter = function (l, w) {
//   // Return your answer
//   if(l === w) {return l * w} else {return l * 2 + w * 2}
// };

// TASK

// function pipeFix(numbers){
//     let first = numbers[0];
//     let last = numbers[numbers.length - 1];
//     const result = [];
//     for(let i = first; i <= last; i++) {
//         result.push(i)
//     }
//     return result;
// }

// console.log(pipeFix([1,2,3,5,6,8,9]));

//// TASK

// function longest(s1, s2) {
//   // your code
//   const result = [];
//   const str = s1 + s2;
//   const array = str.split("");
//   for(let i = 0; i < array.length; i++) {
//     if(array.indexOf(array[i]) === i){
//         result.push(array[i]);
//     }
//   }
//   return result.sort().join("");
  
// }

// console.log(longest("aretheyhere", "yestheyarehere"));