// play area

const { Pet } = require("./cyberpet");

class Dragon extends Pet {
  constructor(name) {
    super(name);
  }
  // dragon methods
  feed() {
    this.hunger += 30;
    this.thirst -= 10;
    this.happiness += 10;
    this.health += 10;
    return this;
  }

  water() {
    console.log(`You give ${this.name} a drink`);
    this.thirst += 20;
    this.happiness += 10;
    this.health += 5;
    return this;
  }

  ride() {
    console.log(`You have taken ${this.name} for a ride and they loved it!!`);
    this.hunger -= 10;
    this.thirst -= 10;
    this.happiness += 10;
    this.energy -= 10;
    this.hygiene -= 10;
    return this;
  }

  bath() {
    console.log(`${this.name} has takn a bath in the local lake`);
    this.hygiene += 50;
    this.energy -= 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }

  explore() {
    console.log(`${this.name} has been exploring`);
    this.happiness += 10;
    this.hygiene -= 10;
    this.hunger -= 10;
    this.thirst -= 10;
    this.energy -= 10;
    return this;
  }

  fight() {
    console.log(`Naughty ${this.name} getting into a fight`);
    this.health -= 20;
    this.energy -= 10;
    this.hunger -= 10;
    this.happiness -= 10;
    this.thirst -= 10;
    this.hygiene -= 10;
    return this;
  }

  chaseSheep() {
    console.log(
      `Chasing sheep is loads of fun for ${this.name} not so much for the sheep`
    );
    this.happiness += 10;
    this.energy -= 10;
    this.hunger -= 10;
    this.thirst -= 10;
    this.hygiene -= 10;
    return this;
  }

  sleep() {
    console.console.log(
      `Even dragons have a bedtime ${this.name} is going to get some sleep`
    );
    this.energy += 30;
    this.health += 10;
    this.hunger -= 10;
    this.thirst -= 10;
    return this;
  }
}

module.exports = { Dragon };
