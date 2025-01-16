/// TASK 2


// const form = document.querySelector(".form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const array = Array.from(new FormData(form));
//     const names = array[0];
//     const values = array[1];
//     const delay = names[1] * 1000;
//     if(delay < 0) {return}

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(values[1] === "fulfilled") {
//                 resolve(`✅Fulfilled promise in ${delay / 1000}s`)
//             }
//             else if(values[1] === "rejected") {
//                 reject(`❌ Rejected promise in ${delay / 1000}s`)
//             }
//         }, delay)
//     }).then((res) => {
//         // console.log(res);
//         console.log(res);
//     }).catch((error) => {
//         console.log(error);
//     })
// })

