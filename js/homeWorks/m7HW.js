///// TASK 1

// const mainUl = document.querySelector("#categories");
// console.log(`Number of catigories = ${mainUl.children.length}`);

// const liItem = document.querySelector(".item");

// const titles = document.querySelectorAll(".item-title");
// for (const title of titles) {
//   console.log(title.textContent);
// }

// const animals = document.querySelector(".animals-ul");
// console.log(`Animals length = ${animals.children.length}`);

// const products = document.querySelector(".products-ul");
// console.log(`Products length = ${products.children.length}`);

// const technologies = document.querySelector(".technologies-ul");
// console.log(`Technologies length = ${technologies.children.length}`);

///// TASK 2

// const gallery = document.querySelector(".gallery");

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   },
// ];

// const markupIMG = images.map((img) => {
//   return `
//     <li>
//      <img width="300px" src="${img.url}" alt="${img.alt}">
//     </li>
//     `;
// }).join("");


// gallery.insertAdjacentHTML("afterbegin", markupIMG);


//// TASK 3

const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {

    if(event.target.value.trim() === ""){
       return event.target.value === "Anonimus";
    }

    spanName.textContent = event.target.value.trim();

})


///// TASK 4

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if(emailValue === "" || !emailValue.includes("@") || password === "" || password.length < 5){
        alert('All form fields must be filled in')
        loginForm.reset();
        return
    }

    const result = {
        emailValue,
        password
    }

    console.log(result);
    loginForm.reset()
});



/// TASK 5

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const colorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color-span");

colorBtn.addEventListener("click", () => {
    const body = document.querySelector(".body");
    body.style.backgroundColor = getRandomHexColor();
    colorSpan.textContent = getRandomHexColor().toString();
})


/// TASK 6

const renderMarkup = document.querySelector("#boxes");
const colorInput = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const deleteBtn = document.querySelector("button[data-destroy]");


function createBoxes(amount) {
    for(let i = 0; i < amount; i++){

        const element = document.createElement("div");
        element.classList.add("div-color-class");
        element.style.backgroundColor = getRandomHexColor();

        renderMarkup.append( element);

    }
}

createBtn.addEventListener("click", () => {
    const amount = colorInput.value;

    if(amount >= 0 && amount <= 100){
        renderMarkup.innerHTML = '';
        createBoxes(amount);
    } else {console.error("MAX OR LOW VALUE OF COLORS CVADRATIKI");}
});

deleteBtn.addEventListener("click", () => {
    renderMarkup.innerHTML = "";
})

