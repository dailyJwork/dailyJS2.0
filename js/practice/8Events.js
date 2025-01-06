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
    return `<li class="product-item modal-el modal-markup-el" data-id = ${product.id}>
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

/// Деструкторизация

const {name, age, hobby:{ first, second} } = {
    name: "Max",
    age: 23,
    hobby: {first: "Coding", second: "Music"},
} /// глубокая деструкторизация


