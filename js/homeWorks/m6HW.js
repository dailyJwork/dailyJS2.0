// TASK 1

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// TASK 2

class Storage {
  #items = [];

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(item) {
    this.#items = this.#items.filter((thing) => {
      return thing !== item;
    });
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// TASK 3

class StringBuilder {
    value;

  constructor(value) {
    this.value = value;
  }

  get val() {
    return this.value;
  }

  set val(value) {
    this.value = value;
  }

  append(str) {
    this.value += str;
  }

  prepend(str) {
    this.value = str + this.value;
  }
  // додає елемент на поч і в кін
  pad(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder('.');

// const value = builder.value();
// console.log(this.value);

builder.append('^');
console.log(builder.value); // '.^'


builder.prepend('^');
console.log(builder.value) // '^.^'