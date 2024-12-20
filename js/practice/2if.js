// ** if - условие **

if(true){
    console.log("done");
}

// ** if ... else **

const massage = "Hi";
if (massage === "Hi"){
    console.log("true");
} else {console.log("false");}

//   else if **

const role = "junior";

if (role === "senior"){
    return "Your lvl is high"
} else if(role === "middle"){
    return "Your lvl is middle"
} else {
    return "You are junior"
}

// ** ? **

const drugAddicted = false;

const rehabMonster = drugAddicted === false ? console.log("you are cool") : console.log("comeToRehab"); // Тернарный оператор

const daysTillDeadline = 5;

if (daysTillDeadline === 0){
    console.log("Today");
} else if(daysTillDeadline === 1){
    console.log("Tomorrow");
} else if(daysTillDeadline === 2){
    console.log("Over");
} else {
    console.log("date in the future");
}

// *** SWITCH *** --- короткий запис if ... else, если много условий

const color = "brown";

switch(color){
    case "yellow": console.log("No, its yellow");
    break;
    case "red": console.log("YES, its red");
    break;
    case "green": console.log("No, its green");
    break;
    default: console.log("Its another color or smthing special");
    break;
}

task
1 - samoviviz 2 - cour 3 - post
const option = 4;
let massage = '';

switch(option){
    case 1: massage = 'vi zmoz';
    break;
    case 2: massage = 'cour';
    break;
    case 3: massage = 'vidpr sog';
    break;
    default: massage = 'manager';
    break;
}

console.log(massage);

// **** Logic operatot && *******

const color = "red";
const background = "light";
const name = "Max"

if (color === "red" && background === "light" && name === "Max"){
    console.log("DONE");
} else {
    console.log("No");
}

// *** LOGIC || *****

const color = "red";
const background = "light";
const name = "Max";

if (color === "black" || name === "" || background === "dark") {
    console.log("ABO");
} else console.log("ne");

// *** LOGIC ! ***

const isAdmin = true;

if(!isAdmin){
    console.log("not admin");
} else {
    console.log("Hi^ admin");
}

console.log(!NaN);

function toggleModalVisibility(isVisible) {
    if(!isVisible) {
      return true;
    } else {
      return false;
    }
  }

TASK
const sub = "pro";

if(sub === "vip" || sub === "pro"){
    console.log("Here is your sub");
} else if(sub === "free") {
    console.log("No way");
}

TASK
const isOnline = true;
const isFriend = true;
const isDnd = true;

let canOpenChat;

if (isOnline === true && isFriend === true && isDnd) {
  canOpenChat = console.log("You can open chat");
} else {
  console.log("You cant open chat");
}

// ******методи рядков

const string = "Yeh its string   ";

console.log(string.slice(0, 4));

console.log(string.toLowerCase() , string.toUpperCase());

console.log(string.includes("q"));

console.log(string.startsWith("Yeh") , string.endsWith("ing"));

console.log(string.indexOf("r"));

console.log(string.trim());

TASK
let link = "https://github.com";

const linkEndsWith = link.endsWith("/");

if(!linkEndsWith){
    link += "/";
}

console.log(link);

TASK
let url = "https://github.com/jjjjwrk";

const endWithSlash = url.endsWith("/");

if(!endWithSlash && url.includes("my-site")) {
  url += "/";
}

console.log(url);

TASK
const spam = "spam";
const sale = "sale";

const string1 = " HELLO IM PRINCE OF PERSIA I WANNA YOUR KINGDOM ";
const string2 = " HELLO I OFFER YOU A SALE, ITS NOT a sPaM";

const string1LowerCase = string1.toLowerCase();
const string2LowerCase = string2.toLowerCase();

if (string1LowerCase.includes(spam) || string1LowerCase.includes(sale)){
    console.log("Its spam link 1");
}

if (string2LowerCase.includes(spam) || string2LowerCase.includes(sale)){
    console.log("Its spam link 2");
}

function calculateTotal(number) {
    let sum = 0;
    for(let i = 0; i <= number; i += 1) {
      sum += i;
    }
    return sum;
  }

console.log(calculateTotal(18));

function calculateEvenTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(calculateEvenTotal(7));

const start = 6;
const end = 17;
let number;

for(let number = 0; number < end; number++){
    if(number % 5 === 0 && number > start){
      console.log(number);
      break;
    }
  }