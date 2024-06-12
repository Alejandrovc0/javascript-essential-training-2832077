/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const computer = {
  name: "Desktop",
  case: {
    brand: "Corsair",
    color: "Black",
    size: "Mid Tower",
    processor: "Intel Core i9 10900KS",
    ram: "64GB",
    storage: {
      ssd: "2TB",
      hdd: "2TB",
    },
    graphicsCard: "NVIDIA GeForce RTX 3090TI",
    powerSupply: "1000W",
    cooling: {
      cpu: "Asus ROG Ryujin 360",
      case: "Corsair Fans x6",
    },
    inCaseMonitor: "Generic 8in",
  },

  peripherals: {
    mouse: "razer viper ultimate",
    keyboard: "Keychron K6",
    headset: "Razer Kraken",
  },

  monitor: "Alienware Curved Qled 160hz 1440p",
  second_monitor: "Alienware 24 in 260hz",
  desk: {
    brand: "DeskUP",
    color: "White",
    size: "Large",
    height: "Adjustable",
  },
  status: false,
  toogleOn: function (status) {
    this.on = status;
  },
};

console.log("The computer object:", computer);
