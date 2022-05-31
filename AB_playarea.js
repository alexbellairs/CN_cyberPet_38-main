// play area

const { Pet } = require("./cyberpet");

class Dragon extends Pet {
  constructor(name) {
    super(name);
  }
  // dragon methods

  ride() {
    this.happiness += 10;
    this.energy -= 10;
    this.hygiene -= 10;
  }

  bath() {
    this.hygiene += 50;
  }

  explore() {
    this.happiness += 10;
    this.hygiene -= 10;
    this.energy -= 10;
  }
}

module.exports = { Dragon };

// fight() {
//   console.log(`Naughty ${this.name} getting into a fight`);
//   this.health -= 20;
//   this.energy -= 10;
//   this.hunger -= 10;
//   this.happiness -= 10;
//   this.thirst -= 10;
//   this.hygiene -= 10;
//   return this;
// }

// chaseSheep() {
//   console.log(
//     `Chasing sheep is loads of fun for ${this.name} not so much for the sheep`
//   );
//   this.happiness += 10;
//   this.energy -= 10;
//   this.hunger -= 10;
//   this.thirst -= 10;
//   this.hygiene -= 10;
//   return this;
// }

//   sleep() {
//     console.console.log(
//       `Even dragons have a bedtime ${this.name} is going to get some sleep`
//     );
//     this.energy += 30;
//     this.health += 10;
//     this.hunger -= 10;
//     this.thirst -= 10;
//     return this;
//   }
// }
