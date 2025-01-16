//// async

// console.log(5);
// console.log(10);
// console.log(15);
// /// синхронный код, каждый консоль лог ждет выполнения предыдущего

// console.log("first");
// setTimeout(() => {
//     console.log("second")
// }, 2000);
// console.log("third");
// асинхронный код, сет таймаут илициализирует колбэк функцию, которая выполнится через 2 секунды

// clearTimeout()

// const timer = setTimeout(() => {
//     console.log("Im timer");
// }, 1000);

// clearTimeout(timer); /// специальная функция

/// setInterval();

// const interval = setInterval(() => {
//     console.log(Math.random());
// }, 1000)

// const newInterval = setInterval(() => {
//     console.log(Math.random());
// }, 1000);

// setTimeout(() => {
//     clearInterval(newInterval); /// чистит интервал
// }, 3000);

/// TASK
// const showBtn = document.querySelector(".show-btn");

// showBtn.addEventListener("click", () => {
//     showBtn.classList.add("btn-timeout");

//     setTimeout(() => {showBtn.classList.remove("btn-timeout")}, 3000);
// });

//// DATE AND TIME
// const date = new Date();
// console.log(date);

// console.log(new Date(0)); /// unix , 1970, Jan

// console.log(date.getTime()); //  колво мс после 1970
// console.log(Date.now()); //  колво мс после 1970

// console.log(date.getHours()); // getter
// date.setMinutes(19); // setter
// console.log(date.getMinutes());

/// TASK TIMER

// class Timer {
//     #elementTimer;
//     #time = 0;
//     #timerId;

//   constructor(selector) {
//     this.#elementTimer = document.querySelector(selector);
//     this.#render()
//   }

//   start() {
//     if(this.#timerId) {return}
//     this.#timerId = setInterval(() => {
//         this.#time += 1000;
//         this.#render()
//     }, 1000)
//   }

//   stop() {
//     if(this.#timerId) {
//         clearInterval(this.#timerId);
//         this.#timerId = null;
//     }
//   }

//   clear() {
//     this.#elementTimer.textContent = "00:00:00";
//     this.#time = 0;
//   }

//   #getTimeComponents() {
//     const hours = this.#pad(
//       Math.floor((this.#time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.#pad(
//       Math.floor((this.#time % (1000 * 60 * 60)) / (1000 * 60))
//     );
//     const seconds = this.#pad(Math.floor((this.#time % (1000 * 60)) / 1000));

//     return { hours, mins, seconds };
//   }

//   #render() {
//     if(!this.#elementTimer) {return}
//     const { hours, mins, seconds } = this.#getTimeComponents();
//     this.#elementTimer.textContent = `${hours}:${mins}:${seconds}`
//   }

//   #pad(value) {
//     return String(value).padStart(2, "0");
//   }
// }

// const startBtn = document.querySelector("button[data-action-start]");
// const stopBtn = document.querySelector("button[data-action-stop]");
// const clearBtn = document.querySelector("button[data-action-clear]")

// const timer = new Timer(".clocks");
// startBtn.addEventListener("click", timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));
// clearBtn.addEventListener("click", timer.clear.bind(timer));

///// PROMISE

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//     const isUser = Math.random() > 0.5;

//     setTimeout(() => {
//         if(isUser) {
//             resolve({name: "Max", age: 23})
//         } else {
//             reject({user: "NO USER"})
//         }
//     }, 2000)
// }
// );

// setTimeout(() => {
//     console.log(promise);
// }, 3000)

// const newPromise = new Promise((resolve, reject) => {
//     console.log("Hello");

//     resolve("Success");
//     reject("Error");
// });

// console.log(newPromise);

///// then() catch()

// const promise = new Promise((resolve, reject) => {
//   const isUser = Math.random() > 0.5;

//   setTimeout(() => {
//     if (isUser) {
//       resolve(JSON.stringify({ name: "Max", age: 23 }));
//     } else {
//       reject({ user: "ERROR, NO USER" });
//     }
//   }, 2000);
// });

// promise
//   .then((success) => {
//     return JSON.parse(success);
//   })
//   .then((success2) => {
//     console.log(success2);
//   })                           // цепочки кэтч
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("FINNALY");
//   });
// // then() - для обработки успешного выполнения промиса,  catch() - для обработки ошибки промиса, finnaly() - выполниьтся в любом случае

// setTimeout(() => {
//     console.log("TIMEOUT");
// }, 0);    ///// MACROTASK, выполнится позже чем промис

// const newPromise = new Promise((resolve, reject) => {
//     resolve("IM RESOLVE");
//     reject("ERROR");
// }).then((resolve) => {
//     console.log(resolve);
// }).catch((error) => {
//     console.log(error);
// }) //// MICROTASK, выполнится быстрее чем сеттаймаут(макротаски)

/// Promise.resolve() Promise.reject()

// const fu = () => {
//     const randomNumber = Math.random();
//     if(randomNumber > 0.5) {
//         Promise.resolve(console.log("YES"))
//     } else {
//         Promise.reject(console.log("NO"))
//     }
// }

// fu()

////// Промисификация функции

// const fu = (username, onSuccess, onError) => {
//     console.log(`${username} is cool`);

// };

// fu("mango", (username) => {console.log(username)}, (error) => {console.log("Error")}); /// обычные колбэки

// const fu2 = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`${username} is awesome`);

//     setTimeout(() => {
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve("success");
//       } else {
//         reject("error");
//       }
//     }, 1000);
//   });
// };

// fu2("Mango")
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//// TASK   /// переделать на промис async функцию

// const makeOrder = (dish) => {
//   const passed = Math.random() > 0.5;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (passed) {
//         resolve(`Here is your ${dish}`);
//       } else {
//         reject("Error, no product, sorry");
//       }
//     }, 1000);
//   });
// };

// makeOrder("cake")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("We finnaly got result of promise");
//   })

///// TASK /// переделать на промис синхронную функцию

// const prepareDish = (dish) => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     return Promise.resolve(`Here is your ${dish}`);
//   } else {
//     return Promise.reject("Error");
//   }
// };

// prepareDish("Cake")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

///// CASINO TASK
// 🤑 👾

const startGame = document.querySelector(".start-casino-btn");
const casinoContainer = document.querySelector(".casino-game");
const result = document.querySelector(".casino-result");

startGame.addEventListener("click", gameStart);


function gameStart () {
  startGame.disabled = true;
  let array = Array.from(casinoContainer.children);
  const promiseArray = array.map((el, i) => {
    return new Promise((resolve, reject) => {
      const isWinner = Math.random() > 0.5;
      el.textContent = "";
      result.textContent = "";
      const symbol = isWinner ? ("🤑") : ("👾");
      setTimeout(() => {
        el.textContent = symbol;
        isWinner ? resolve("🤑") : reject("👾")
      }, 1000 + i * 1000)
    })
  });
  
  Promise.allSettled(promiseArray)
  .then((res) => {
    const resultSet = new Set(res.map(({ value, reason }) => {return value || reason })).size === 1;
    result.textContent = resultSet ? "Winner" : "Loser";
    startGame.disabled = false;
  });
}