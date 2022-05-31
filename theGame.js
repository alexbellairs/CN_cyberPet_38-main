const inquirer = require("inquirer");

const { Pet } = require("./cyberpet");
const { Cat } = require("./KA_playarea");
const { Dog } = require("./GH_playarea");
const { Dragon } = require("./AB_playarea");

let myPet = "";

try {
  const start = async () => {
    //    typeOfPet (
    const typeOfPet = await inquirer.prompt({
      type: "list",
      //   typeOfPet.typeOfPetName
      name: "typeOfPetName",
      message:
        "What type of pet would you like? Please choose from the following",
      choices: [
        {
          key: "a",
          name: "Cat",
          value: "Cat",
        },
        {
          key: "b",
          name: "Dog",
          value: "Dog",
        },
        {
          key: "c",
          name: "Dragon",
          value: "Dragon",
        },
      ],
    });

    const petName = await inquirer.prompt({
      type: "input",
      name: "petName",
      message: "What is your pet called?",
    });
    if (typeOfPet.typeOfPetName === "Cat") {
      myPet = new Cat(petName);
    } else if (typeOfPet.typeOfPetName === "Dog") {
      myPet = new Dog(petName);
    } else if (typeOfPet.typeOfPetName === "Dragon") {
      myPet = new Dragon(petName);
    }
  };

  // this.name now myPet.name
  console.log(myPet.name);
  // myPet.feed();
  // myPet.water();
  // myPet.sleep();
  // myPet.vet();
  // myPet.status();

  // list of options
  // list of options
  const typeOfAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      {
        key: "a",
        name: "Feed Pet",
        value: this.feed(),
      },
      {
        key: "b",
        name: "Water pet",
        value: this.water(),
      },
      {
        key: "c",
        name: "Sleep",
        value: this.sleep(),
      },
      {
        key: "c",
        name: "Vet",
        value: this.vet(),
      },
    ],
  });

  //
  start();
} catch (error) {
  console.log("error");
}
