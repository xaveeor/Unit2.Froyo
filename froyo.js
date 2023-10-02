

// Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
    "Please enter some flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  // Split the string of flavors into an array of flavors.
const stringArray = userInputString.split(",");