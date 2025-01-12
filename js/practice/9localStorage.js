//// JSON


const user = {
  name: "Poly",
  age: 20,
  loves: "Jaty",
};
const jsonUser = JSON.stringify(user); // переделывает значения в формат рядка JSON

const jsonParse = '{"name":"Mango","age":3,"isGoodBoy":true}';
const parsedJson = JSON.parse(jsonParse); // парсинг из json

// try {
//     JSON.parse("JDajsdzx")
// } catch (error) {
//     console.log(error.name);
// }
// трай кетч (кетч в случае ошибки)

/// local Storage

// console.log(window.localStorage); // console.log(localStorage);
localStorage.setItem("theme", "light"); // добавление в локал стор

const obj = {
  name: "Max",
  age: 20,
  loves: "Poly",
  hobbys: {
    coding: true,
    music: true,
    drugs: false,
  },
};

localStorage.setItem("user", JSON.stringify(obj)); // добавление сложного типа данных

const getObj = JSON.parse(localStorage.getItem("user"));
// console.log(getObj);

localStorage.removeItem("user");
localStorage.removeItem("theme"); // удаление
/// form.reset() - очищает всю форму

/// TASK FOrM

// const key = "feedback_key";

// const form = document.querySelector(".feedback-form");
// const textarea = document.querySelector(".textarea");

// const initialMessage = localStorage.getItem(key);
// if(initialMessage) {
//   textarea.value = initialMessage
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   localStorage.removeItem(key);
//   form.reset();
// });

// textarea.addEventListener("change", (event) => {
//   const message = event.target.value;
//   localStorage.setItem(key, message);
// })

/// TASK

// const formKey = "form_feedback_key";

// const form = document.querySelector(".feedback-form");

// form.addEventListener("change", (event) => {
//   event.preventDefault();
//   const obj = {}
//   const formData = new FormData(form);

//   formData.forEach((value, key) => {
//     obj[key] = value;
//   })
//   localStorage.setItem(formKey, JSON.stringify(obj));
// })

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   localStorage.removeItem(formKey);
//   form.reset()
// })

// const key = "feedback_key";

// const form = document.querySelector(".feedback-form");

// try {
//   const parsedValues = JSON.parse(localStorage.getItem(key));

//   const formArray = Array.from(form.elements);

//   formArray.forEach((el) => {
//     const values = parsedValues[el.name];
//     if (values) {
//       el.value = values;
//     }
//   });
// } catch (error) {
//   console.log(error);
// }

// form.addEventListener("change", () => {
//   const data = new FormData(form);

//   const obj = {};

//   data.forEach((value, key) => {
//     obj[key] = value;
//   });

//   localStorage.setItem(key, JSON.stringify(obj));
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   localStorage.removeItem(key);
//   form.reset();
// });

////// MODULE + import / export
// named export
export function sum(a, b) {
  return a + b;
}
export const sayHi = "Hi";


// default export (может быть всего один)
export default "Im default export or import";
////// ВСЕ ИМПОРТЫ В ДЕЙЛИ JS (2485 строка)



