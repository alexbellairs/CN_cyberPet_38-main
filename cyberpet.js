// Kat and Gareth and ALex cyberpet

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
    this.hunger += 10;
  }

  water() {
    this.thirst += 10;
  }

  sleep() {
    this.energy += 10;
  }

  vet() {
    this.health += 10;
  }
}

module.exports = { Pet };
