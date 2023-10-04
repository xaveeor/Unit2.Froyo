
     // Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
     "Please enter some flavors separated by commas.",
     "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
   );

     // Split the string of flavors into an array of flavors.
const stringArray = userInputString.split(",");
    //Test:
    // if(stringArray === undefined) {
    //     console.log("this is undefined")
    // }; 
    // console.log(stringArray);

    //container for order
const iceCreamOrder = {
    vanilla: 0,
    chocolate: 0,
    strawberry: 0,
    coffee: 0
};

function printIceCreamOrder(stringArray) {
    // "Cannot read properties of undefined (reading length)" error here:
    for(i = 0; i < stringArray.length; i++) {
    //access the individual flavors
    //increase the count of ice cream order depending on repetition of flavor
    //adding 1 to flavor count 
    for(const key in iceCreamOrder) {
        if(stringArray[i] === "vanilla") {
            iceCreamOrder["vanilla"] = iceCreamOrder["vanilla"] + 1;
        };
    };
    // //once loop is complete, console.table order 
    //     console.table(iceCreamOrder);
};
    //once loop is complete, console.table order 
    console.table(iceCreamOrder);
};
//fixed "undefined" error on line 26 by passing "stringArray" as a parameter to the function:
printIceCreamOrder(stringArray);