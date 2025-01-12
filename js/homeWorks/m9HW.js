/// TASK 1
// import SimpleLightbox from "/node_modules/simplelightbox/src/simple-lightbox.js";

// let gallery = document.querySelector(".gallery");

// const images = [
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
//     description: "Hokkaido Flower",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
//     description: "Container Haulage Freight",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
//     description: "Aerial Beach View",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
//     description: "Flower Blooms",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
//     description: "Alpine Mountains",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
//     description: "Mountain Lake Sailing",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     description: "Alpine Spring Meadows",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     description: "Nature Landscape",
//   },
// ];

// const markup = images
//   .map(({ original, description }) => {
//     return `
//     <li class="gallery-item">
//     <img 
//     class="gallery-image" 
//     src=${original} 
//     alt=${description}
//     />
// </li>
//     `;
//   })
//   .join("");

// gallery.insertAdjacentHTML("afterbegin", markup);

// const showLightbox =  new SimpleLightbox('.gallery');

// showLightbox.show();

// showLightbox.on('error.simplelightbox', function (e) {
// 	console.log(e); // Some usefull information
// });

/// TASK 2

// const form = document.querySelector(".feedback-form")

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     form.reset();
// })

// form.addEventListener("change", () => {
//     const data = new FormData(form);
    
//     const array = Array.from(data);
//     array.forEach((el) => {
//         JSON.stringify(localStorage.setItem(el[0], el[1]))
//     })
// })
