/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Watch {
  constructor(
    // Define parameters
    brand,
    type,
    color,
    size,
    price
  ) {
    this.brand = brand;
    this.type = type;
    this.color = color;
    this.size = size;
    this.price = price;
  }

  toggleOn(watchStatus) {
    this.watchOn = watchStatus;
  }
  watchCharge(batteryPercentage) {
    this.watchBattery = batteryPercentage;
  }
}

const fancyWatch = new Watch(
    "Bulova", 
    "Party Watch", 
    "Gold", 
    "Medium", 
    600
);

const smartWatch = new Watch(
  "Samsung",
  "Everyday Watch",
  "Black",
  "Medium",
  500
);

console.log ("Watches: ", fancyWatch, smartWatch)
export default Watch;
