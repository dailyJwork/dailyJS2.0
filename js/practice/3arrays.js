// МАСИВИ
const family = ["Max", "Greg", "Anton", "Misha", "Nastya"];
console.log(family[0]); // значение первого элемента масива
family[0] = "Jupiter";  // Переопределение
console.table(family); // удобная вещь показать масив в консоле
console.log(family.length); // колво элементов масива
console.log(family.length - 1); // индекс последнего элемента

// TASK
function getLastElementMeta(array) {
    const lastElement = array.length - 1;
    const newArray = [array.length - 1, array[lastElement]];
    return newArray;
  };

  console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// TASK
function getExtremeElements(array) {
    const firstElement = array[0];
    const lastElement = array.length - 1;
    const newArray = [firstElement, array[lastElement]];
    return newArray;
}
  console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
  console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
  console.log(getExtremeElements([1, 2, 3, 4, 5]));

// Примитивні типи данних під час присвоєння копіюються за значенням.

let x = 10;
let y = 20;

function add(x, y){
    x = 200;
    return x + y;
};
console.log(add(x,y)); // 220
console.log(x); // 10 - не поменялся, независимо от функции

// Складні типи данних (масив) копіюються за посиланням

const numbers = [];
const names = [];
console.log(numbers === names); // false, бо це дві окремі ячейки в памяті та два окремих посилання

const newNames = ["max", "july", "poly"];
const anotherNames = newNames;
console.log(anotherNames === newNames); // true, бо це посилання на одну ячейку в памяті, тобто до newNames;

const numbers = [1, 2, 3, 4];
const newNumbers = [1, 2, 3, 4];
console.log(numbers === newNumbers); // false, бо це посилання на різні ячейки

// Приведення до типив данных
const array = [1, true, "Else"];
const arrayToString = String(array);
console.log(String(arrayToString));

// METHDS OF ARRAY
const array = ["HTML", "CSS", "JS", "REACT"];
console.log(array.join("")); -> join()

// TASK
function getLength(array) {
    const joinArray = array.join("");
    return joinArray.length;
  }
console.log(getLength(["Mango", "hurries", "to", "the", "train"]));

const string = "HTML,CSS,JS,REACT";
console.log(string.split("")); -> split()

const stringwWIthProb = "HTML-CSS JS REACT";
console.log(stringwWIthProb.split(" ")); -> split()

// TASK
function calculateEngravingPrice(message, pricePerWord) {
    const messageSplit = message.split(" ");
    const arrayLength = messageSplit.length;
    console.log(arrayLength);
    return arrayLength * pricePerWord;
  }

  console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

const array = [1, 2, 3, 4, 5];
console.log(array.slice(0, 2));

const array1 = ["Mars", "Jupiter", "Saturn", "Earth"];
const array2 = ["Galactic", "Milky Way", "Goblins"];

console.log(array1.concat(array2)); -> concat();

const newArray = ["Job", "FreeWork", "Freelance", "Studing"];
console.log(newArray.indexOf("Freelance")); -> indexOf();
console.log(newArray.indexOf("havingRest")); -> indexOf();

// TASK
function getSlice(array, value) {
  const indexOfArraysEl = array.indexOf(value);
  if (indexOfArraysEl !== -1) {
    return array.slice(0, array.indexOf(value)).concat(value);
  } else {
    return [];
  }
}

console.log(getSlice(["Mango", "Poly"], "Poly"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));

const array = ["lol", "kek", "ahaha"];
array.push("azaza");
console.log(array); -> push();

// TASK
function createArrayOfNumbers(min, max) {
    let array = [];
    for(let i = min; i <= max; i++){
      array.push(i);
    }
    return array;
  }

console.log(createArrayOfNumbers(1, 3));

const array = ["Poly", "love", "jatyx"];
array.pop(); -> pop();
console.log(array);

// FOR для масиву

const array = ["lol", "shrek", "xd", "axaxa"];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
};

// TASK
function calculateTotalPrice(order) {
    let sum = 0;
    for(let i = 0; i < order.length; i++){
        sum += order[i];
    }
    return sum;
  }
  console.log(calculateTotalPrice([12, 85, 37, 4]));

// МЕтод includes();

const array = ["lol", "shrek", "xd", "axaxa"];

console.log(array.includes("lol")); -> true;
console.log(array.includes("2")); -> false;

// TASK
function getCommonElements(array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    if(array2.includes(array1[i])){
        resultArray.push(array1[i])
    }
  }
  return resultArray;
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// ЦИКЛ for ... of для перебору кожного элемента масиву

const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets){
    console.log(planet);
}

TASK
function calculateTotalPrice(order) {
  let sum = 0;
  for (const number of order) {
    sum += number;
  }
  return sum;
}

console.log(calculateTotalPrice([164, 48, 291]));

TASK
const nums = [1, 2, 5, 8, 10, 14, 15, 24];

let lotal = 0;

function sum(nums) {
  let resultArray = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
        resultArray.push(nums[i]);
    }
  }
    return resultArray;
  }

console.log(sum(nums));

TASK
const names = "Wiliam, Max, Oleh, Poly";
const phones = "11111, 22222, 33333, 44444";

const namesArray = names.split(',');
const phonesArray = phones.split(',');

console.log(namesArray[0], phonesArray[0]);

TASK

const str = "aaaaa             eeee aaddadas dasfsxca apdpaspdpa          pppppp";
const strArray = str.split(' ');
const newArray = strArray.slice(1, strArray.length - 1);
const result = newArray.join(' ').trim();
console.log(result);

TASK
const values = [10, 6, 8];
let min = values[0];

for (const value of values) {
    if (min > value){
        min = value;
    }
}
console.log(min);

function name(a, b, c) {
    console.log(arguments);
    const array = Array.from(arguments); -> создать масив из псевдомасива;
    console.log(array);
};
name(1, 2, 3);

Параметры по умолчанию
function getName (name = "Guest") {
    console.log(`Hello, ${name}`);
};
getName(); -> Hello, Guest;
getName("Max"); -> Hello, Max;

function count (from, to, step = 1) {
    console.log(`from: ${from}, to: ${to}, step: ${step}`);
  }

  count(1, 15, 4); // "from: 1, to: 15, step: 4"
  count(1, 15); // "from: 1, to: 15, step: 1

function expression
const functionA = function hello () {
    console.log(hello);
};

functionA();
Функция в переменной

sayHello();
sayHello2();

function sayHello () {
    console.log('hello');
}

let sayHello2 = function () {
    console.log("hello2");
}

TASK
const add = function () {
    let sum = 0;
    for (const number of arguments){
        sum += number;
    }
    return sum;
};

console.log(add(4, 6, 8));

const add = function () {
    let sum = 0;
    const array = Array.from(arguments);
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(add(5, 4, 10));

TASK

function middleNumber() {
    let result = 0;
    let sum = 0;
    const array = Array.from(arguments);
    for (let i = 0; i < array.length; i++){
        sum += array[i];
        result = sum / array.length;
    }
    return result;
}

console.log(middleNumber(1, 2, 3, 4));

TASK

function logItems(items) {
    for (let i = 0; i < items.length; i++){
        console.log(`${i + 1} - ${items[i]}`);
    }
}

logItems(["mango", "poly"]);
logItems([1, 2, 5, 7]);

TASK
function printInfo(names, phones){
   const nameArray = names.split(", ");
   const phonesArray = phones.split(", ");
   for(let i = 0; i < nameArray.length; i++){
    console.log(`${nameArray[i]} phone number is ${phonesArray[i]}`);
   }
};

printInfo('Jacob, William, Max, Jack', "1111, 2222, 3333, 444");

TASK
function formatTime(minutes){
const hours = Math.floor(minutes / 60);
const mins = minutes % 60;
return `${hours} - hours; ${mins} - minutes`;
};

console.log(formatTime(70));
console.log(formatTime(120));
console.log(formatTime(230));