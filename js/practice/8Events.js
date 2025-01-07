/// делегування событий, процесс сплывания

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", (event) => {
//   console.log("Parent click handler");
//   console.log(event.currentTarget);
//   console.log(event.target);
// });

// child.addEventListener("click", (event) => {
//   console.log("Child click handler");
//   console.log(event.currentTarget);
//   console.log(event.target);
// });

// descendant.addEventListener("click", (event) => {
//   console.log("Descendant click handle");
//   console.log(event.currentTarget);
//   console.log(event.target);
//   console.log(event.target); // ссылка на элемент, на котором подия
// });

/// TASK

// const colorContainer = document.querySelector(".main-users-container");
// const colorOutput = document.querySelector(".colors-output");

// colorContainer.addEventListener("click", (event) => {
//     if(event.target.dataset.id) {
//         colorOutput.textContent = event.target.classList[0];
//     }
// })

/// TASK

const products = [
  {
    id: 31948,
    name: "iPhone",
    model: 13,
    price: "25000 UAN",
    description: "This is 13 iphone, enjoy",
  },
  {
    id: 21319,
    name: "iPhone",
    model: 15,
    price: "40000 UAN",
    description: "This is 15 iphone, enjoy",
  },
  {
    id: 49722,
    name: "ASUS",
    model: "TUF GAMING",
    price: "50000 UAN",
    description: "This is laptop ASUS, enjoy",
  },
  {
    id: 96871,
    name: "iPad",
    model: 7,
    price: "10000 UAN",
    description: "This is ipad 7, enjoy",
  },
];

const container = document.querySelector(".products-container");

const markup = products
  .map((product) => {
    return `<li class="product-item modal-markup-el" data-id = ${product.id}>
    <h2 class="pointer">${product.name}</h2>
    <p class="pointer">${product.model}</p>
    <p class="pointer">${product.description}</p>
    <p class="pointer">${product.price}</p>
  </li>`;
  })
  .join("");

container.insertAdjacentHTML("afterbegin", markup);

container.addEventListener("click", (event) => {
  const targetEl = event.target.dataset.id;

  if (targetEl) {
    const result = products.find((el) => {
      return el.id.toString() === targetEl;
    });

    if (!targetEl) {
      return;
    }

    const modal = basicLightbox.create(`
      <li class="modal modal-el">
      <img
          src="./img/photo_2024-12-01_10-45-30.jpg"
          alt="cart"
          width="250"
          height="180"
          class="daily-img-js"
        />
    <h2 class="pointer">${result.name} ${result.model}</h2>
    <p class="pointer">${result.price}</p>
  </li>
      `);

    modal.show();

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.close();
      }
    });
  }
});

/// Деструкторизация обектов

// const { name, age, hobby:{ first, second } } = {
//     name: "Max",
//     age: 23,
//     hobby: {first: "Coding", second: "Music"},
// } /// глубокая деструкторизация

// console.log(name, age, first, second);

// const {
//   name,
//   skills: { html, css, js, react },
// } = {
//   name: "Max",
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//     react: false,
//   },
// };

// let skillIndo = `${name}: HTML: ${html ? "know" : "dont know"}, CSS: ${
//   css ? "know" : "dont know"
// }, JS: ${js ? "know" : "dont know"}, REACT: ${react ? "know" : "dont know"}`;

///// Деструктуризация масивов

// const array = [1, 2, 4, 5, 6, 9];
// const [ first, second, third, ...rest] = array;

// console.log(rest);  /// rest оператов собирает все невытянутые значения в масив
// console.log(third);

// const anotherArray = [1, 4, 5, 6];
// const [one, two, three, four, five = 9] = anotherArray; /// значение по умолчанию
// console.log(five);

// const aanotherArray = [1, 5, 6, 8, 10];
// const [, , threeee, , fiveeee] = aanotherArray; // пропуск значений
// console.log(threeee, fiveeee);

// const user = {
//   username: "Jaty",
//   skills: { html: true, css: true, js: true, react: false },
// };

// function showSkills({ username, skills:{html, css, js, react}} = user) {
//     console.log(username);
//     console.log(html, css, react, js);
// }
// showSkills();

// function sum ([first, second, third, fourth, five] =  [1, 2, 4, 6, 8]){
//     let sum = 0;
//     sum = first + second + third + fourth + five;
//     console.log(sum);
// } // деструкторизация сразу в функции

// sum();

// деструкторизация в цикле

// const users = [
//   {name: "Max", age: 23},
//   {name: "Poly", age: 20},
//   {name: "Jack", age: 25},
//   {name: "Nastya", age: 19},
// ]

// const names = [];

// for(const { name, age } of users) {
//   names.push(name);
// }

// console.log(names);

///деструкторизация в функции


// function showUserInfo({ name, age, vip, player = false }) {
//   return {name, age, player, vip}
// }

// const userCheck = showUserInfo({
//   name: "Max",
//   age: 23,
//   position: "student",
//   vip: true,
//   player: true,
// });

// console.log(userCheck);


/// TASK 1

// const user = {
//   id:1,
//   username: "horry_potter",
//   profile: {
//     name:"Harry",
//     surname: "Potter",
//     age: 25,
//   }
// };

// const { id, username, profile: { name: myName, surname, age } } = user;

// console.log(`Username : ${username}`);
// console.log(`User id : ${id}`);
// console.log(`name : ${myName}`);
// console.log(`user surname : ${surname}`);
// console.log(`user age : ${age}`);

/// TASK 2

// const product = {
//   name: "Smart TV",
//   price: 6500,
//   category: "Electronic",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: 15.5,
//   },
// }

// function displayProduct({ name, price, category, details:{ brand, color, weight }}) {
//   console.log(`Product name : ${name}`);
//   console.log(`Product price : ${price}`);
//   console.log(`Product category : ${category}`);
//   console.log(`Product details : Brand:${brand}, Color:${color}, Weight:${weight}`);
// };

// displayProduct(product);  

//// TASK 3

// function calcucalePerimetr ({ a, b, c, d, ...rest }) {
//   const perimetr = a + b + c + d + Object.values(rest).reduce((sum, num) => {return sum + num}, 0)
//   return perimetr
// }

// const perimetr = calcucalePerimetr({ a: 5, b: 4, c: 10, d: 9, k:11, j:12});
// console.log(perimetr);
