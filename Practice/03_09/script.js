/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },

  changeName: function (newName) {
    this.name = newName;
  },

  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },

  newPocketNum: function (newNum) {
    this.pocketNum = newNum;
  },
};

console.log("The backpack name is: ", backpack.name);
console.log("The volume is:", backpack.volume);
console.log("The pocketnum is:", backpack.pocketNum);
console.log(
  "The strap lenghts are:",
  backpack.strapLength.left,
  backpack.strapLength.right
);

backpack.changeName("School backpack");
backpack.changeVolume(50);
backpack.newPocketNum(20);
backpack.newStrapLength(10, 10);

console.log("The backpack name is: ", backpack.name);
console.log("The volume is:", backpack.volume);
console.log("The pocketnum is:", backpack.pocketNum);
console.log(
  "The strap lenghts are:",
  backpack.strapLength.left,
  backpack.strapLength.right
);
