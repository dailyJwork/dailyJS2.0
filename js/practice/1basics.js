const username = "jatyx";
console.log(typeof username);

let age;
age = 20;
console.log(age);

console.log(Number("22.7px")); // NaN - not a number

const isDead = false;
console.log(typeof isDead);

const calls = 5;
const missedCalls = `You missed ${calls} calls`;
console.log(missedCalls);  -> Шаблонные рядки

console.log("500" === 500); - Оператор строгой равности

console.log("2" > "12"); // true (Unicode);

console.log("11" > "12"); // true;
console.log("11".charCodeAt());  

const element = "13.7px";
console.log(Number.parseInt(element)); // перетворуэ у ціле число до першого недопустимого символа
console.log(Number.parseFloat(element)); // перетворую у число з комою

// Class Math.
const value = "13.9";
console.log(Math.round(value)); // - округлення до цілого целого числа
console.log(Math.ceil(value)); // округлення до бильшего целого числа
console.log(Math.floor(value)); // округлення до меньшого целого числа

// Function

function showMeName(name, surname) {
    const fullName = `${name} + ${surname}`;
    console.log(fullName);
}

showMeName("max", "jaty")

// оператор return
function sum(a, b) {
    return (a + b) / 3;
}

console.log(sum(2, 4));