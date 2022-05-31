const { Pet } = require("./cyberpet");
class Dog extends Pet {
  constructor(name) {
    //Dog specific properties here
    super(name);
    this.name = name;
    this.hunger = 100;
    this.thirst = 100;
    this.health = 100;
    this.happiness = 100;
    this.hygiene = 100;
    this.energy = 100;
  }

  status() {
    return console.table({
      name: this.name,
      health: this.health,
      hunger: this.hunger,
      thirst: this.thirst,
      happiness: this.happiness,
      hygiene: this.hygiene,
      energy: this.energy,
    });
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

  feed() {
    this.hunger += 5;
    this.thirst -= 5;
    this.health += 5;
    this.happiness += 5;
    this.hygiene -= 5;
    this.energy += 5;
    console.log(
      `You feed ${this.name}. ${this.name} has ${this.hunger} hunger.`
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

  putToBed() {
    this.hunger -= 5;
    this.thirst -= 5;
    this.health += 5;
    this.happiness += 5;
    this.hygiene -= 5;
    this.energy += 100;
    console.log(
      `You put ${this.name} to bed. ${this.name} wakes up and now has ${this.energy} energy`
    );
    return this;
  }
}

module.exports = { Dog };
