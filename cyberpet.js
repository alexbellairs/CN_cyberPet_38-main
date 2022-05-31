// Kat and Gareth and Alex cyberpet

class Pet {
  constructor(name) {
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

  feed() {
    console.log(`${this.name} says YUM YUM YUM `);
    this.hunger += 10;
    console.log(`${this.name} Hunger: ${this.hunger}`);
  }

  water() {
    console.log(`${this.name} says GLUG SLURP`);
    this.thirst += 10;
    console.log(`${this.name} Thirst: ${this.thirst}`);
  }

  sleep() {
    console.log(`${this.name} says zzzZZZ`);
    this.energy += 10;
    console.log(`${this.name} Energy: ${this.energy}`);
  }

  vet() {
    console.log(`${this.name} says <3 <3`);
    this.health += 10;
    console.log(`${this.name} Health: ${this.health}`);
  }
}

module.exports = { Pet };
