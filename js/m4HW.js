// TASK 1
function isEnoughCapacity(products, containerSize) {
    let sum = 0;
    const amounts = Object.values(products);
    for(const amount of amounts){
        sum += amount;
    }
    if(sum <= containerSize){
        return true;
    } else {return false;}
}

console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true

  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false

  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true

  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false

// TASK 2
function calcAverageCalories(days) {
  let totalCalories = 0;
  for (const day of days) {
    totalCalories += day.calories;
  }
  if (totalCalories === 0) {
    return 0;
  } else {
    return totalCalories / days.length;
  }
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

// TASK 3

const profile = {
  username: "Jacob",
  playTime: 300,
};

profile.changeUsername = function (newName) {
  if (this.username !== newName) {
    this.username = newName;
  }
};

profile.updatePlayTime = function (hours) {
  this.playTime += hours;
};

profile.getInfo = function () {
  return `${this.username} has ${this.playTime} active hours!`;
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
