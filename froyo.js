

// Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
    "Please enter some flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  // Split the string of flavors into an array of flavors.
const stringArray = userInputString.split(",");

const iceCreamOrder = {
    vanilla: 0,
    chocolate: 0,
    strawberry: 0
}

function printIceCreamOrder(stringArray) {
    for(i = 0; i < stringArray.length; i++) {
    //access the individual flavors
    //increase the count of ice cream order depending on repetition of flavor
    //adding 1 to flavor count 
       
    };
    //once loop is complete, console.table order 
    console.table(iceCreamOrder);
};