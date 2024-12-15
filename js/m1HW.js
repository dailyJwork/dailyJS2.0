// TASK 1
function makeTransaction(quantity, pricePerDroid) {
    return `You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500)); 

// TASK 2
function getShippingMessage(country, price, deliveryFee) {
    return `Shipping to ${country} will cost ${price + deliveryFee} credits`
}
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));

// TASK 3
function getElementWidth(content, padding, border) {
    let contentNum = Number.parseFloat(content);
    let paddingNum = Number.parseFloat(padding);
    let borderNum = Number.parseFloat(border);
    return contentNum + paddingNum * 2 + borderNum * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));