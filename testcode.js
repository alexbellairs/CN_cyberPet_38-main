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
