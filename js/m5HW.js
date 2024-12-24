// TASK 1

const getUserNames = (users) => {
  return users.map((user) => {
    return user.name;
  });
};

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764,
    },
  ])
);

// TASK 2

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  },
];

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => {
    if (user.friends.includes(friendName)) {
      return user;
    }
  });
};
console.log(getUsersWithFriend(allUsers, "Briana Decker"));
console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
console.log(getUsersWithFriend(allUsers, "Adrian Cross"));

// TASK 3

const array = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    gender: "male",
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
    gender: "female",
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
    gender: "female",
  },
];

const sortByDescendingFriendCount = (users) => {
  return users.toSorted((a, b) => {
    return b.friends.length - a.friends.length;
  });
};
console.log(sortByDescendingFriendCount(array));

// TASK 4

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

const getTotalBalanceByGender = (users, gender) => {
    return users.filter((user) => {
        return user.gender === gender;
    }).map((user) => {
        return user.balance;
    }).reduce((acc, balance) => {
        return acc + balance;
    })
}

console.log(getTotalBalanceByGender(clients, "male"));
console.log(getTotalBalanceByGender(clients, "female"));