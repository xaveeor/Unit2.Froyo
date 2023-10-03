
     // Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
     "Please enter some flavors separated by commas.",
     "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
   );

     // Split the string of flavors into an array of flavors.
const stringArray = userInputString.split(",");

const flavors = [];
    for(i = 0; i < stringArray.length; i++) {
        const str = stringArray[i];
        flavors.push(str);
    };
    
    //container for order
const iceCreamOrder = {
    vanilla: 0,
    chocolate: 0,
    strawberry: 0,
    coffee: 0
};

function printIceCreamOrder(flavors) {
    for(i = 0; i < flavors.length; i++) {
    //access the individual flavors
    //increase the count of ice cream order depending on repetition of flavor
    //adding 1 to flavor count 
       for(const key in iceCreamOrder) {
        if(typeof flavors[i] == iceCreamOrder.key) {
            iceCreamOrder.key = + 1;
        }
       }
    };
    //once loop is complete, console.table order 
    console.table(iceCreamOrder);
};

printIceCreamOrder(flavors);