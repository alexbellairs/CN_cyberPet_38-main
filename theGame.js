const inquirer = require("inquirer");

// const { Pet } = require("./cyberpet"); // main class alreay in from cat/dog/dragon
const { Cat } = require("./KA_playarea");
const { Dog } = require("./GH_playarea");
const { Dragon } = require("./AB_playarea");

// list of pet choices (Thanks JOSH!)
choiceOfPetsList = [
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
];

// list of action choices (Thanks JOSH!)
actionList = [
  {
    key: "a",
    name: "Feed",
    value: "feed",
  },
  {
    key: "b",
    name: "Water",
    value: "water",
  },
  {
    key: "c",
    name: "Sleep",
    value: "sleep",
  },
  {
    key: "d",
    name: "Vet",
    value: "vet",
  },
];

// list of act action choices
catActionList = [
  {
    key: "e",
    name: "EmptyLitter",
    value: "emptyLitter",
  },
  {
    key: "f",
    name: "CardboardBox",
    value: "cardboardBox",
  },
  {
    key: "g",
    name: "scratchPost",
    value: "scratchPost",
  },
];

// list of act action choices
dogActionList = [
  {
    key: "e",
    name: "walk",
    value: "walk",
  },
  {
    key: "f",
    name: "playTug",
    value: "playTug",
  },
  {
    key: "g",
    name: "playFetch",
    value: "playFetch",
  },
];

// list of act action choices
dragonActionList = [
  {
    key: "e",
    name: "fly",
    value: "fly",
  },
  {
    key: "f",
    name: "ride",
    value: "ride",
  },
  {
    key: "g",
    name: "explore",
    value: "explore",
  },
];

// start !!!!

let myPet = "";

try {
  const start = async () => {
    //    1st input - type of pet
    const typeOfPet = await inquirer.prompt({
      type: "list",
      name: "typeOfPetName",
      message:
        "What type of pet would you like? Please choose from the following",
      choices: choiceOfPetsList,
    });

    // name the pet
    const petName = await inquirer.prompt({
      type: "input",
      name: "petName",
      message: "What is your pet called?",
    });
    if (typeOfPet.typeOfPetName === "Cat") {
      myPet = new Cat(petName);
      actionList = actionList.concat(catActionList);
    } else if (typeOfPet.typeOfPetName === "Dog") {
      myPet = new Dog(petName);
      actionList = actionList.concat(dogActionList);
    } else if (typeOfPet.typeOfPetName === "Dragon") {
      myPet = new Dragon(petName);
      actionList = actionList.concat(dragonActionList);
    }
    console.log(myPet.name);

    // thoughts!
    //  if cat add cat list to action list
    //  if dog add dog list to action list
    //  if dragon add dragon list to action list
    // actionList.concat(catActionList),
    const action = await inquirer.prompt({
      type: "list",
      name: "actionList",
      message: "Please select an action",
      choices: actionList,
    });

    // console.log(myPet.status());

    // josh
    // Check what activity was chosen.
    // switch (action.actionList) {
    //   case "feed":
    //     myPet.feed();
    //     break;
    //   case "water":
    //     myPet.water();
    //     break;
    //   case "sleep":
    //     myPet.sleep();
    //     break;
    //   case "vet":
    //     myPet.vet();
    //     break;
    // }
    console.log(myPet.status());
  };

  start();
} catch (error) {
  console.log("error");
}

// myPet.feed();
// myPet.water();
// myPet.sleep();
// myPet.vet();
// myPet.status();
