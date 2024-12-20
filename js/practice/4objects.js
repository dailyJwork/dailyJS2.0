OBJECTS

const book = {
    title: "Harry Potter",
    author: "J Rollings",
    rating: 10,
    price: "500 grn",
}
console.log(book);
console.log(book.title);
console.log(book.rating);

const car = {
    model: "Audi TT",
    price: 8000,
    value: "USD",
    yearOfRelease: 2012,
    anotherModel: {
        newModel: "Audi A4",
        price: 5000,
        value: "USD"
    },
    drivingTest: function(){
        console.log("Audi TT drives");
    },
    engine: ["good", "new", "powerful"],
};

car.drivingTest();
console.log(car.anotherModel.price);
console.log(car.engine[0]);

const car2 = car;
car2.anotherModel.newModel = "Audi A3";
console.log(car2);
console.log(car.anotherModel);

const whatModel = "model";
console.log(car[whatModel]); -> доступ за квадратними дужками

const whatEngine = "engine";
console.log(car2[whatEngine]); -> доступ за квадратними дужками

const userColor = "#9310381";
const userColorValue = "green";

const color = {
    "red": "#8831309",
    "white": "#o13eqw",
    "yellow": "#8319847",
    [userColor]: userColorValue,
}

console.log(color["red"]);
console.log(color[userColor]); -> userColorValue -> green

for ... in objects (ПЕРЕБОР ОБЕКТОВ)
const values = {
    value1: 10,
    value2: 20,
    value3: 45,
    value4: 120,
}

for(const key in values){
    console.log(key);
    console.log(values[key]);
}

Object.keys()

const values = {
    value1: 10,
    value2: 20,
    value3: 45,
    value4: 120,
}

const keys = Object.keys(values); -> це будэ масив
// console.log(keys);

for(const key of keys){
    console.log(key);
    console.log(values[key]);
}

Object.values()

const values = {
  value1: 10,
  value2: 20,
  value3: 45,
  value4: 120,
};

const valuesOfObject = Object.values(values);
// console.log(valuesOfObject);
for (const value of valuesOfObject) {
  console.log(value);
}

TASK
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for(const key of keys){
    values.push(apartment[key]);
}

TASK
function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(object);
   for(const key of keys){
    if (object.hasOwnProperty(key)) {
        propCount += 1;
      }
   }
  return propCount;
}

console.log(countProps({
    value1: 10,
    value2: 20,
    value3: 45,
    value4: 120,
  }));

TASK

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const salariesValue = Object.values(salaries);
  for(const value of salariesValue){
    totalSalary += value;
  }
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

TASK
const user = {
  name: "Mango",
  age: 25,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydrive";
user.premium = false;
const keys = Object.keys(user);

for(const key of keys){
    console.log(`${key} : ${user[key]}`);
}

TASK
const salaries = {
    JohnCena: 120,
    TheMiz: 140,
    CMPunk: 500,
}

let sum = 0;
const salariesValues = Object.values(salaries);
for(let i = 0; i < salariesValues.length; i++){
    sum += salariesValues[i];
}
console.log(sum);

TASK

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for(const color of colors){
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
}

TASK

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (product.name === productName) {
    return (product.price);
    }
  }
  return null;
}

console.log(getProductPrice("Scanner"));

TASK
const friends = [
  {
    id: 1,
    name: "Max",
    age: 23,
    country: "Ukraine",
    online: true,
  },
  {
    id: 2,
    name: "Polya",
    age: 20,
    country: "France",
    online: false,
  },
  {
    id: 3,
    name: "Misha",
    age: 12,
    country: "Ukraine",
    online: false,
  },
  {
    id: 4,
    name: "Greg",
    age: 12,
    country: "Ukraine",
    online: true,
  },
];

const friendsNames = [];
for (const friend of friends) {
  friendsNames.push(friend.name);
}
console.log(friendsNames);

const friendsOnline = [];

for(const friend of friends){
    if(friend.online === true){
        friendsOnline.push(friend.name);
    }
}
console.log(friendsOnline);

TASK

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const resultArray = [];
  for(const product of products){
    for(const key in product){
        if(key === propName){
            resultArray.push(product[key]);
        }
    }
  }
  return resultArray;
}

console.log(getAllPropValues("quantity"));

TASK

const stones = [
    {
        name: "Saph", price: 2000, id:1,
    },
    {
        name: "Efir", price: 2500, id:2,
    },
    {
        name: "Almaz", price: 3000, id:3,
    }
];

function calculateTotal (stones, stoneName){
    let totalPrice = 0;
    for(const stone of stones){
        for(const key in stone){
            if(stone[key] === stone.price){
                totalPrice += stone.price;
            }
        }
    }
    return totalPrice;
}

console.log(calculateTotal(stones, "Saph"));

TASK

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let totalPrice = 0;
  for(const product of products){
    if(product.name === productName){
       return totalPrice = product.price * product.quantity;
    }
  }
  return `Product ${productName} not found!`
}

console.log(calculateTotalPrice("Scanner"));

/// METHODS OF OBJECT

const atTheOldToad = {
  potionName: "evil potion",
  potions: [],
  getPotions() {
    return "List of all available potions";
  },
  addPotions(potionName) {
    return `Adding ${potionName}`;
  },
  showPotion() {
    console.log(this.potionName);
  },
};

console.log(atTheOldToad.addPotions("XD"));
atTheOldToad.showPotion();

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

TASK
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for(const potion of this.potions){
        totalPrice += potion.price;
    }
    return totalPrice;
  },
};
console.log(atTheOldToad.getTotalPrice());

TASK
const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Stone skin", price: 520 },
    ],
    getPotions() {
      return this.potions;
    },
    updatePotionName(oldName, newName) {
        for(const potion of this.potions){
            if(potion.name === oldName){
                potion.name = newName;
            }
        }
    },
  };

  atTheOldToad.updatePotionName("Stone skin", "Invisibility");
  atTheOldToad.updatePotionName("Speed potion", "Polymorth");

  console.log(atTheOldToad);

///// SPREAD , REST (...)

TASK
function add (...args){
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return sum;
};

console.log(add(10, 7));

task
function addOverNum(value, ...args) {
    let sum = 0;
    for(const agr of args){
        if(agr > value){
            sum += agr;
        }
    }
    return sum;
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

TASK

function getExtremeScores(scores) {
    let result = {};
    const minNum = Math.min(...scores);
    const maxNum = Math.max(...scores);
    result.best = maxNum;
    result.worst = minNum;
    return result;
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

TASK

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores]; -> spread
const bestScore = Math.max(...allScores); -> rest
const worstScore = Math.min(...allScores); -> rest