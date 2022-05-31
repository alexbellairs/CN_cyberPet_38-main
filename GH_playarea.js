const { Pet } = require("./cyberpet");

class Dog extends Pet {
  constructor(name) {
    super(name);
  }

  //Dog specific methods

  walks() {
    this.hunger -= 5;
    this.thirst -= 5;
    this.health += 5;
    this.happiness += 10;
    this.hygiene -= 5;
    this.energy -= 10;
    console.log(
      `You take ${this.name} for a walk. ${this.name} is ${this.happiness} happy and has ${this.energy} energy.`
    );
    return this;
  }

  playTug() {
    this.hunger -= 5;
    this.thirst -= 5;
    this.health += 5;
    this.happiness += 10;
    this.hygiene -= 5;
    this.energy -= 10;
    console.log(
      `You play tug with ${this.name}. ${this.name} is ${this.happiness} happy and has ${this.energy} energy.`
    );
    return this;
  }

  playFetch() {
    this.hunger -= 5;
    this.thirst -= 5;
    this.health += 5;
    this.happiness += 10;
    this.hygiene -= 5;
    this.energy -= 10;
    console.log(
      `You play fetch with ${this.name}. ${this.name} is ${this.happiness} happy and has ${this.energy} energy.`
    );
    return this;
  }

  giveTreat() {
    this.hunger += 5;
    this.happiness += 5;
    this.thirst -= 5;
    console.log(`You give ${this.name} a treat`);
    return this;
  }

  giveBath() {
    this.thirst -= 5;
    this.happiness += 5;
    this.hygiene += 100;
    this.energy -= 5;
    // return this;
    console.log(
      `You give ${this.name} a bath. ${this.name} is now ${this.hygiene} clean`
    );
    return this;
  }
}

module.exports = { Dog };
