// play area

const { Pet } = require("./cyberpet");

class Cat extends Pet {
  constructor(name) {
    super(name);
    // this.breed = breed;
    // this.lives = 9;
  }
  emptyLitter() {
    this.hygiene += 10;
  }
  cardboardBox() {
    this.energy -= 10;
  }
  scratchPost() {
    this.happiness += 10;
  }
}

module.exports = { Cat };
