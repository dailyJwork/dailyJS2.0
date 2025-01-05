/// DOM (Document Object Model)

// const btn = document.querySelector(".js-btn"); // -> 1 el by class
// console.log(btn);

// const mainLi = document.querySelectorAll(".js-main-li"); // -> all li by class
// console.log(mainLi);

// mainLi.forEach((el) => {console.log(el);}) // mainLi - [];

// console.log(document.body.firstElementChild); // nav DOM
// console.log(document.body.lastElementChild); // nav DOM

// const dailyImg = document.querySelector(".daily-img-js");
// console.log(dailyImg.src); // достучатся до властивостей
// console.log(dailyImg.alt);
// dailyImg.alt = "DAILY IMG CART";
// console.log(dailyImg.alt);

// const p = document.querySelector(".paragraph-2"); //  textContent
// console.log(p.textContent);
// p.textContent = "iS YES YES YES";
// console.log(p.textContent);

///Data
// const btn = document.querySelector(".js-btn");
// console.log(btn.dataset.btn); // черезе дата атрибуты и dataaset

// btn.dataset.btn = "dailyBtn";
// console.log(btn.dataset.btn);

// classList
// const mainLi = document.querySelector(".js-main-li-1");
// console.log(mainLi.classList);
// mainLi.classList.add("new-class");
// mainLi.classList.remove("new-class", "js-main-li-1");
// mainLi.classList.toggle("new-class");
// console.log(mainLi.classList.contains("new-class"));
// mainLi.classList.replace("new-class", "new-replaced-class");

/// DOM API
// createElement

const title = document.createElement("h1");
title.classList.add("main-title");
title.textContent = "DAILY JS 2.0";

const ul = document.querySelector(".js-main-ul");
// ul.append(title); // добавляем элемент после всех детей, то есть в конце.
ul.prepend(title); // добавляем элемент перед дутьми, то есть в начале.

// remove el
const li3 = document.querySelector(".js-main-li-3");
li3.remove();

/// create / innerHTML

const newLi = document.createElement("li");
newLi.classList.add("js-main-li-3");
newLi.textContent = "AMAZING";

/// before and after

const titleBeforeUl = document.createElement("h2");
titleBeforeUl.classList.add("main-title");
titleBeforeUl.textContent = "CODING YYEYEEYEYYE";

ul.before(titleBeforeUl);

const titleAfterUl = document.createElement("h3");
titleAfterUl.textContent = "ebashyyy";

ul.after(titleAfterUl);

//// добавление коллекции

const colorPeaker = [
  { color: "pink", label: "IM pink" },
  { color: "green", label: "IM GREEN" },
  { color: "yellow", label: "IM YELLOW" },
];

// берем див для добавления

const colorContainer = document.querySelector(".color-container");

const colorElement = colorPeaker.map((el) => {
  const colorEl = document.createElement("div");
  colorEl.classList.add("element-color");
  colorEl.style.backgroundColor = el.color;
  return colorEl;
});

colorContainer.append(...colorElement);

/// inerHTML /// создание дефолтной разметки

const list = document.querySelector(".list");

const arrayForHTML = ["HTML", "CSS", "JS"];

const markup = arrayForHTML
  .map((el) => {
    return `<li class="js-main-ul">${el}</li>`;
  })
  .join("");

list.innerHTML = markup;

// insetrAdjastmentHTML

// const transactionList = document.querySelector(".transaction-list");

// const arrayOfEl = [
//   { id: 999, name: "First transaction", owner: "Jack", date: "20.04.12" },
//   { id: "<3", name: "second transaction", owner: "Poly", date: "21.04.12" },
//   { id: "<33", name: "thind transaction", owner: "Max", date: "21.04.12" },
//   { id: 171, name: "four transaction", owner: "JaMishack", date: "22.04.12" },
//   { id: 1222, name: "five transaction", owner: "Greg", date: "22.05.12" },
// ];

// const result = arrayOfEl
//   .map((el) => {
//     return `<li class="transaction-el">
//     <p>ID: ${el.id}</p>
//     <p>Name: ${el.name}</p>
//     <p>Owner: ${el.owner}</p>
//     <p>Date: ${el.date}</p>
//   </li>`;
//   })
//   .join(" ");

// transactionList.insertAdjacentHTML("beforeend", result);

///// действия

const jsEventBtn = document.querySelector(".js-addEvent-btn");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// jsEventBtn.addEventListener("click", firstCallback);
// jsEventBtn.addEventListener("mouseover", secondCallback);
// jsEventBtn.addEventListener("click", thirdCallback);

const divEl = document.querySelector(".js-div");

const onClickBtn = () => {
  divEl.classList.toggle("js-adding-div");
};
jsEventBtn.addEventListener("click", onClickBtn);

const mainImg = document.querySelector(".daily-img-js");
const mainBtn = document.querySelector(".js-btn");

const handlerEvent = (event) => {
  console.log("event: ", event); /// object of event
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
  mainBtn.removeEventListener("click", handlerEvent);
};

mainBtn.addEventListener("click", handlerEvent);

/// input
const input = document.querySelector(".js-input");
const inputBtn = document.querySelector(".js-input-btn");

let username = "";

input.addEventListener("input", (event) => {
  username = event.target.value;
});

inputBtn.addEventListener("click", () => {
  if (`${username}` === "") {
    alert("ERROR! ENTER CORRECT NAME");
  } else if (`${username}`.length <= 2) {
    alert("ERROR! ENTER CORRECT NAME");
  } else {
    alert(`Welcome home, ${username}`);
  }
  username = "";
  input.value = "";
});

/// подии на клавиатуре

// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event)
// })

// const keyBtn = document.querySelector(".key-btn");
// const keyList = document.querySelector(".key-list");

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <ul class="js-main-ul">
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   keyList.insertAdjacentHTML("afterbegin", markup);

// }

// function reset() {
//   keyList.innerHTML = "";
// }

// document.addEventListener("keydown", logMessage);

// keyBtn.addEventListener("click", reset);

/// FORMS

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // const data = new FormData(event.target);
  // data.forEach((value, key) => {
  //   console.log(value, key);
  // })

  const eventForm = event.target;
  const login = eventForm.elements.login.value;
  const password = eventForm.elements.password.value;

  if (
    login === "" ||
    password === "" ||
    login.length < 4 ||
    password.length < 4
  ) {
    form.reset();
    return alert("Please fill in all the fields!");
  }
  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

///// TASK

const cars = [
  {
    id: 1,
    car: "Audi",
    model: "A6",
    price: 30000,
  },
  {
    id: 2,
    car: "Audi",
    model: "A3",
    price: 15000,
  },
  {
    id: 3,
    car: "BMW",
    model: "q5",
    price: 10000,
  },
  {
    id: 4,
    car: "BMW",
    model: "q2",
    price: 9000,
  },
  {
    id: 5,
    car: "Mercedec",
    model: "Benz",
    price: 17000,
  },
  {
    id: 6,
    car: "Mercedec",
    model: "Benz 222",
    price: 9000,
  },
  {
    id: 1,
    car: "Porshe",
    model: "Cayen",
    price: 23000,
  },
];

const carForm = document.querySelector(".js-form");
const carContainer = document.querySelector(".car-list");

const renderAllCars = (inputValue, selectValue = "car") => {
  let searchedCars = cars;

  if(inputValue) {
    searchedCars = searchedCars.filter((car) => {return car[selectValue].toLowerCase().includes(inputValue.toLowerCase())})
  }

  const renderCars = searchedCars.map((car) => {
    return `
  <li class="js-car-item">
  <h3>${car.car}</h3>
  <p>${car.model}</p>
  <p>${car.price}</p>
  </li>
  `;
  }).join("");

  carContainer.innerHTML = renderCars;
};
renderAllCars();

carForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = event.target.elements.query.value;
  const selectValue = event.target.elements.options.value;

  renderAllCars(inputValue, selectValue);
})


