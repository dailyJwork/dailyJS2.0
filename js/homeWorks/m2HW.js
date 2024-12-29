// TASK 1
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let sum = quantity * pricePerDroid;
    if (sum > customerCredits){
        return "Insufficient funds!";
    } else {
       return `You ordered ${quantity} droids worth ${sum} credits!`;
    }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// TASK 2
function formatMessage(message, maxLength) {
    if(message.length <= maxLength){
        return message;
    } else {
         const slicedMessage = message.slice(0, maxLength);
         return slicedMessage + "...";
    }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// TASK 3
function checkForSpam(message) {
    let messageToLowerCase = message.toLowerCase();
    if(messageToLowerCase.includes("spam") || messageToLowerCase.includes("sale")) {
        return true;
    } else {return false;}
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// TASK 4
function getShippingCost(country) {
  switch (country) {
    case "China":
      return `Shipping to ${country} will cost 100 credits`;
      break;
    case "Chile":
      return `Shipping to ${country} will cost 250 credits`;
      break;
    case "Australia":
      return `Shipping to ${country} will cost 170 credits`;
      break;
    case "Jamaica":
      return `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      return "Sorry, there is no delivery to your country";
      break;
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
