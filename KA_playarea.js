// play area

const { Pet } = require("./cyberpet");

class Cat extends Pet {
  constructor(name) {
    super(name);
    // this.breed = breed;
    this.lives = 9;
  }
}

module.exports = { Cat };

// // cat methods
// feed(howMuch) {
//   if (this.hunger < 100 - howMuch) {
//     this.hunger += howMuch;
//   } else {
//     this.hygiene -= 10;
//     console.log(
//       `You have over fed ${this.name}, they have been sick everywhere`
//     );
//     if (this.health > 10) {
//       this.health -= 10;
//     } else {
//       console.log(`${this.name} needs to go the vet ASAP`);
//     }
//   }
// }
// water(howMuch) {
//   if (this.thirst < 100 - howMuch) {
//     this.thirst += howMuch;
//   } else {
//     this.hygiene -= 10;
//     console.log(`Please dont over water`);
//   }
// }
// stroke() {
//   if (this.happiness > 50) {
//     this.happiness = 100;
//     console.log(`PURRRR PURRR`);
//   } else {
//     this.happiness -= 10;
//     console.log(`${this.name} is not happy with you`);
//   }
// }
// emptyLitter() {
//   this.hygiene = 100;
//   console.log(`Purr purr nice clean litter tray`);
// }
// box() {
//   this.happiness = 100;
//   this.energy -= 20;
// }
// scratchPost() {
//   this.happiness += 10;
// }
